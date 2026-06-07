import Link from 'next/link';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { Mascot } from '@/components/Mascot';

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.1fr_.9fr]">
      {/* Copy */}
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          Semifinal Empreenda Senac · proposta auditada
        </div>

        <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-7xl">
          Resolva{' '}
          <span className="neon-text">problemas reais.</span>
          <br />
          Ganhe renda.
          <br />
          Gere impacto.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          {siteConfig.thesis}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/desafios" className="btn btn-primary text-base">
            Ver desafios pagos <ArrowRight size={18} />
          </Link>
          <Link href="/aluno" className="btn btn-ghost text-base">
            <Users size={16} /> Sou aluno
          </Link>
          <Link href="/empresa" className="btn btn-outline text-base">
            <Building2 size={16} /> Sou empresa
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap gap-6">
          {[
            { value: '128', label: 'problemas mapeados' },
            { value: '42',  label: 'desafios ativos'    },
            { value: 'R$ 28k', label: 'renda gerada (MVP)'},
          ].map((s) => (
            <div key={s.label}>
              <b className="text-2xl font-black text-orange-300">{s.value}</b>
              <p className="text-xs text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mascote hero: hide student photo by default */}
      <Mascot variant="hero" showStudent={false} />
    </section>
  );
}
