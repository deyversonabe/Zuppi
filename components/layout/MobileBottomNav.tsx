import Link from 'next/link';
import { Sparkles } from 'lucide-react';

// Itens do menu inferior para dispositivos móveis. A navegação foi
// simplificada para mostrar apenas a entrada principal de acesso à
// plataforma (portal). Isso ajuda a direcionar todos os usuários
// (aluno, mentor, empresa) ao login/cadastro.
const items = [
  { Icon: Sparkles, href: '/portal', label: 'Portal' },
] as const;

export function MobileBottomNav() {
  return (
    <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 px-2 py-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ Icon, href, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 rounded-2xl p-2 text-[11px] text-white/60 transition hover:bg-white/8 hover:text-white active:scale-95"
          >
            <Icon size={19} />
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
