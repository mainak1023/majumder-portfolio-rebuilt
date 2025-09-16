// Edge function to bootstrap the admin user and ensure profile exists
// Uses the service role to create the user without email confirmation
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const email: string = body.email || "mainak1112@gmail.com";
    const password: string = body.password || "Mainak@2369";
    const full_name: string = body.full_name || "Mainak";

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceKey) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const admin = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // 1) Try to create the user (confirm immediately)
    const { data: createData, error: createError } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name },
    });

    let userId = createData?.user?.id ?? null;

    // 2) If already exists, try to find by listing users (best effort)
    if (!userId && createError) {
      for (let page = 1; page <= 10 && !userId; page++) {
        const { data: listData, error: listError } = await admin.auth.admin.listUsers({ page, perPage: 200 });
        if (listError) break;
        const found = listData.users.find((u: any) => u.email?.toLowerCase() === email.toLowerCase());
        if (found) userId = found.id;
        if (!listData.users || listData.users.length < 200) break; // no more pages
      }

      if (!userId) {
        return new Response(
          JSON.stringify({ ok: false, error: createError.message }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // 3) Ensure a profile exists for this user (role defaults to 'admin' in schema)
    const { data: existing } = await admin
      .from("profiles")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    if (!existing) {
      const { error: insertError } = await admin.from("profiles").insert({
        user_id: userId,
        full_name,
        email,
      });
      if (insertError) {
        return new Response(
          JSON.stringify({ ok: false, error: insertError.message }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});