import { siteConfig } from '@/lib/config';
import { ArrowRight } from 'lucide-react';

const icons = ['🎯', '💰', '🤝', '🚀', '💵', '🌍'];
const colors = [
  'from-violet-600/30 to-violet-600/10',
  'from-orange-500/30 to-orange-500/10',
  'from-fuchsia-500/30 to-fuchsia-500/10',
  'from-cyan-500/30 to-cyan-500/10',
  'from-emerald-500/30 to-emerald-500/10',
  'from-blue-500/30 to-blue-500/10',
];

export function CycleSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 text-center">
        <h2 className="section-title">
          O ciclo que <span className="neon-text">diferencia</span> a Zuppi
        </h2>
        <p className="mt-3 text-white/55">
          Não é curso. Não é mentoria. É economia do conhecimento orientada a problema real.
        </p>
      </div>

      <div className="mobile-scroll md:grid-cols-6">
        {siteConfig.cycle.map((item, i) => (
          <div key={item} className="relative">
            <div className={`glass mobile-card rounded-3xl p-5 bg-gradient-to-b ${colors[i]}`}>
              <span className="mb-3 block text-3xl">{icons[i]}</span>
              <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-xs font-black">
                {i + 1}
              </span>
              <b className="mt-2 block text-sm font-black leading-tight">{item}</b>
            </div>
            {i < siteConfig.cycle.length - 1 && (
              <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 md:block">
                <ArrowRight size={16} className="text-white/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
