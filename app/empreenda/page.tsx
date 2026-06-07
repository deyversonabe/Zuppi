import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { PainelEmpreenda } from '@/components/modules/PainelEmpreenda';
import { EvidenceUploader } from '@/components/modules/EvidenceUploader';
import { InterviewBoard } from '@/components/modules/InterviewBoard';
import { LoiManager } from '@/components/modules/LoiManager';
import { AiConsole } from '@/components/forms/AiConsole';
export default function EmpreenPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10 space-y-8">
        <PainelEmpreenda />
        <div className="grid gap-6 lg:grid-cols-3">
          <InterviewBoard /><LoiManager /><EvidenceUploader />
        </div>
        <section><h2 className="section-title mb-6">IA <span className="neon-text">Crítica de Pitch</span></h2><AiConsole /></section>
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
