import { Navbar }          from '@/components/layout/Navbar';
import { Footer }          from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { HeroSection }     from '@/components/sections/HeroSection';
import { CycleSection }    from '@/components/sections/CycleSection';
import { KpiStrip }        from '@/components/sections/KpiStrip';
import { ModulesGrid }     from '@/components/sections/ModulesGrid';
import { ChallengeCards }  from '@/components/sections/ChallengeCards';
import { SplitSection }    from '@/components/sections/SplitSection';
import { AiConsole }       from '@/components/forms/AiConsole';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <KpiStrip />
      <CycleSection />
      <ModulesGrid />
      <ChallengeCards />
      <SplitSection />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="section-title mb-8">
          Central de <span className="neon-text">IA Zuppi</span>
        </h2>
        <AiConsole />
      </section>
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
