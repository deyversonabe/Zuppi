import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { PainelFinanceiro } from '@/components/modules/PainelFinanceiro';
export default function FinanceiroPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <PainelFinanceiro />
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
