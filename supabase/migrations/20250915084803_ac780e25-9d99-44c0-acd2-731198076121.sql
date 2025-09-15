-- Insert admin user with specified credentials
-- Note: In production, this should be done through Supabase Auth Admin API
-- This is a temporary solution for development

-- First check if user already exists to avoid duplicates
DO $$
BEGIN
  -- Insert the user directly into auth.users (admin operation)
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    confirmation_sent_at,
    confirmation_token,
    recovery_sent_at,
    recovery_token,
    email_change_token_new,
    email_change,
    email_change_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    phone,
    phone_confirmed_at,
    phone_change,
    phone_change_token,
    phone_change_sent_at,
    confirmed_at,
    email_change_token_current,
    email_change_confirm_status,
    banned_until,
    reauthentication_token,
    reauthentication_sent_at,
    is_sso_user,
    deleted_at
  )
  SELECT 
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'mainak1112@gmail.com',
    crypt('Mainak@2369', gen_salt('bf')),
    NOW(),
    NOW(),
    '',
    NULL,
    '',
    '',
    '',
    NULL,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "Mainak"}',
    FALSE,
    NOW(),
    NOW(),
    NULL,
    NULL,
    '',
    '',
    NULL,
    NOW(),
    '',
    0,
    NULL,
    '',
    NULL,
    FALSE,
    NULL
  WHERE NOT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'mainak1112@gmail.com'
  );
END $$;