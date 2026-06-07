import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { DashboardEmpresa } from '@/components/modules/DashboardEmpresa';
import { CompanyProblemForm } from '@/components/modules/CompanyProblemForm';

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EmpresaPage() {
  const router = useRouter();
  useEffect(() => {
    try {
      const item = localStorage.getItem('zuppi_user');
      if (!item) {
        router.replace('/portal');
        return;
      }
      const user = JSON.parse(item);
      if (user.role !== 'client') {
        router.replace('/portal');
      }
    } catch {
      router.replace('/portal');
    }
  }, [router]);
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <h1 className="section-title mb-8">Para <span className="neon-text">Empresas</span></h1>
        <p className="text-white/55 mb-8">Publique problemas reais. Alunos validados resolvem. Você só paga pelo resultado.</p>
        <div className="grid gap-8 lg:grid-cols-2">
          <DashboardEmpresa />
          <CompanyProblemForm />
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
