"use client";
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import PageLoader from '@/components/ui/page-loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { supabase } from '@/integrations/supabase/client';

const Admin = () => {
  const { user, loading } = useAuth();
  const [pageLoading, setPageLoading] = useState(true);
  const [profile, setProfile] = useState<{ role: string | null } | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      supabase.from('profiles').select('role').eq('id', user.id).single().then(({ data }) => {
        setProfile(data);
        setProfileLoading(false);
      });
    } else if (!loading) {
      setProfileLoading(false);
    }
  }, [user, loading]);

  if (loading || pageLoading || profileLoading) {
    return <PageLoader />;
  }

  if (!user || profile?.role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AdminDashboard />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Admin;

