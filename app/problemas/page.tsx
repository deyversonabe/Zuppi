import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { RadarProblemas } from '@/components/modules/RadarProblemas';
import { CompanyProblemForm } from '@/components/modules/CompanyProblemForm';
export default function ProblemasPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <RadarProblemas /><CompanyProblemForm />
        </div>
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
