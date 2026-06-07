import Link from 'next/link';
import { Menu, Sparkles, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-fuchsia-500 to-violet-700 text-2xl font-black shadow-glow-magenta">
            Z
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400">
              <Zap size={9} className="text-white" />
            </span>
          </div>
          <div>
            <b className="text-2xl font-black tracking-tight">Zuppi</b>
            <p className="text-xs text-white/50">{siteConfig.slogan}</p>
          </div>
        </Link>

        {/* Menu desktop (escondido) */}
        {/*
          A navegação principal foi simplificada para exibir apenas um
          botão de acesso à plataforma. Se for necessário adicionar
          outros links no futuro, reintroduza um container semelhante
          a este com a listagem de `siteConfig.nav`.
        */}
        <div className="hide-mobile flex items-center gap-1" />

        {/* CTA */}
        <div className="flex items-center gap-2">
          {/*
            O botão principal direciona para o portal de autenticação,
            permitindo que alunos, mentores ou empresas façam login ou
            cadastro. O label é mantido consistente com o item de
            navegação definido em siteConfig.nav.
          */}
          <Link href="/portal" className="btn btn-primary hide-mobile">
            <Sparkles size={15} />
            Acessar plataforma
          </Link>
          <button className="btn btn-ghost md:hidden p-2" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
