import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { DashboardAluno } from '@/components/modules/DashboardAluno';
import { DashboardMentor } from '@/components/modules/DashboardMentor';
import { DashboardEmpresa } from '@/components/modules/DashboardEmpresa';
import { DashboardAdmin } from '@/components/modules/DashboardAdmin';
import { ChatIA } from '@/components/modules/ChatIA';
import { MatchInteligente } from '@/components/modules/MatchInteligente';
import { PainelImpacto } from '@/components/modules/PainelImpacto';
import { ScoreHumano } from '@/components/modules/ScoreHumano';
import { ProjectTimeline } from '@/components/modules/ProjectTimeline';
export default function PlataformaPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10 space-y-16">
        <div><h1 className="section-title mb-2">Plataforma <span className="neon-text">Completa</span></h1><p className="text-white/55">Todos os módulos Zuppi em uma só página.</p></div>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">📱 Dashboard do Aluno</h2><DashboardAluno /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🤖 Zuppi AI Career</h2><ChatIA /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🔗 Match Inteligente</h2><MatchInteligente /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">⭐ Score Humano</h2><ScoreHumano /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🗓 Timeline</h2><ProjectTimeline /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🧑‍💼 Mentor</h2><DashboardMentor /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🏢 Empresa</h2><DashboardEmpresa /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🌍 Impacto</h2><PainelImpacto /></section>
        <section className="space-y-4"><h2 className="text-2xl font-black border-b border-white/10 pb-4">🛡 Admin</h2><DashboardAdmin /></section>
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
