'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardAluno } from '@/components/modules/DashboardAluno';
import { ChatIA } from '@/components/modules/ChatIA';
import { StudentJourney } from '@/components/modules/StudentJourney';
import { ScoreHumano } from '@/components/modules/ScoreHumano';

export default function AlunoPage() {
  const router = useRouter();
  useEffect(() => {
    // Verifica credenciais no lado do cliente. Se não houver usuário ou se o
    // papel não for "student", redireciona para a página de portal.
    try {
      const item = localStorage.getItem('zuppi_user');
      if (!item) {
        router.replace('/portal');
        return;
      }
      const user = JSON.parse(item);
      if (user.role !== 'student') {
        router.replace('/portal');
      }
    } catch {
      router.replace('/portal');
    }
  }, [router]);
  return (
    <>
      <div className="space-y-12">
        <DashboardAluno />
        <section className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <ChatIA />
          <div className="space-y-6">
            <StudentJourney />
            <ScoreHumano />
          </div>
        </section>
      </div>
    </>
  );
}
