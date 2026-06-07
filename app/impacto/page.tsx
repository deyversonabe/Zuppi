import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { PainelImpacto } from '@/components/modules/PainelImpacto';
import { OdsBadges } from '@/components/modules/OdsBadges';
export default function ImpactoPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10 space-y-8">
        <PainelImpacto /><OdsBadges />
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
