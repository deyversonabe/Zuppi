import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { DashboardMentor } from '@/components/modules/DashboardMentor';
import { MentorSessionList } from '@/components/modules/MentorSessionList';

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MentorPage() {
  const router = useRouter();
  useEffect(() => {
    try {
      const item = localStorage.getItem('zuppi_user');
      if (!item) {
        router.replace('/portal');
        return;
      }
      const user = JSON.parse(item);
      if (user.role !== 'mentor') {
        router.replace('/portal');
      }
    } catch {
      router.replace('/portal');
    }
  }, [router]);
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10 space-y-10">
        <DashboardMentor />
        <MentorSessionList />
      </div>
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
