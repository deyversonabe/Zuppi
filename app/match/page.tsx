import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { MatchInteligente } from '@/components/modules/MatchInteligente';
export default function MatchPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <MatchInteligente />
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
