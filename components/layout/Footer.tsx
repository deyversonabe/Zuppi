import Link from 'next/link';
import { Zap } from 'lucide-react';

const links = {
  Plataforma: [
    { href: '/problemas',  label: 'Radar de Problemas' },
    { href: '/desafios',   label: 'Desafios Pagos'     },
    { href: '/match',      label: 'Match Inteligente'  },
    { href: '/impacto',    label: 'Impacto'            },
  ],
  Perfis: [
    { href: '/aluno',    label: 'Sou Aluno'   },
    { href: '/mentor',   label: 'Sou Mentor'  },
    { href: '/empresa',  label: 'Sou Empresa' },
  ],
  Legal: [
    { href: '/compliance', label: 'LGPD / Privacidade' },
    { href: '/empreenda',  label: 'Empreenda Senac'    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-fuchsia-500 to-violet-700 text-xl font-black">
                Z
              </div>
              <b className="text-xl font-black">Zuppi</b>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Plataforma de economia do conhecimento que transforma problemas reais em desafios pagos, renda e impacto mensurável.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/8 px-4 py-2 text-xs text-orange-200">
              <Zap size={12} /> Semifinal Empreenda Senac 2025
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <b className="text-sm font-bold uppercase tracking-wider text-white/40">{group}</b>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/8 pt-8 flex flex-col items-center gap-2 text-center text-xs text-white/35">
          <p>Zuppi — Conecta ideias. Gera soluções.</p>
          <p>Problema real → Desafio → Match → Renda → Impacto</p>
        </div>
      </div>
    </footer>
  );
}
