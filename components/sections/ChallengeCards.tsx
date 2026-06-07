import Link from 'next/link';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { demoChallenges } from '@/lib/demo-data';

export function ChallengeCards() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="section-title">
            Desafios <span className="neon-text">pagos</span> agora
          </h2>
          <p className="mt-2 text-white/50">Problemas validados esperando por você.</p>
        </div>
        <Link href="/desafios" className="btn btn-ghost hide-mobile text-sm">
          Ver todos <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mobile-scroll mt-7 lg:grid-cols-3">
        {demoChallenges.map((c) => (
          <div key={c.title} className="glass mobile-card card-hover rounded-[2rem] p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <span className="badge badge-purple">{c.area}</span>
              <div className="flex items-center gap-1 text-xs text-white/45">
                <Clock size={12} />
                {c.days}
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-black leading-snug">{c.title}</h3>

            {/* Footer */}
            <div className="mt-6 flex items-end justify-between border-t border-white/8 pt-4">
              <div>
                <p className="text-xs text-white/45">Pagamento</p>
                <b className="text-3xl font-black text-orange-300">{c.reward}</b>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/45">Match</p>
                <div className="flex items-center gap-1">
                  <Zap size={14} className="text-fuchsia-400" />
                  <b className="text-2xl font-black">{c.match}%</b>
                </div>
              </div>
            </div>

            <Link
              href="/desafios"
              className="btn btn-primary mt-5 w-full text-sm"
            >
              Quero este desafio <ArrowRight size={15} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
