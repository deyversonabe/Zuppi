import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { DesafiosPagos } from '@/components/modules/DesafiosPagos';
export default function DesafiosPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <DesafiosPagos />
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
