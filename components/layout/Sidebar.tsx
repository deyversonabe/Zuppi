"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  ListChecks,
  Activity,
  Rocket,
  Users,
  Settings,
} from 'lucide-react';

/**
 * Sidebar component for dashboard pages.
 *
 * Displays a vertical navigation bar on the left side of the dashboard. Uses
 * icons from lucide-react and highlights the active route via the current
 * pathname. Add or remove items here to adjust the navigation.
 */
export function Sidebar() {
  const pathname = usePathname();
  const items = [
    { href: '/aluno', label: 'Dashboard', icon: Home },
    { href: '/desafios', label: 'Desafios', icon: ListChecks },
    { href: '/problemas', label: 'Problemas', icon: Activity },
    { href: '/match', label: 'Match', icon: Rocket },
    { href: '/impacto', label: 'Impacto', icon: Users },
    { href: '/configuracoes', label: 'Configurações', icon: Settings },
  ];
  return (
    <aside className="hidden h-full w-56 shrink-0 flex-col justify-between border-r border-white/10 bg-[#0f0f18] p-4 md:flex">
      <nav className="flex flex-col gap-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 ${
                active ? 'bg-white/5 text-orange-300' : 'text-white/60'
              }`}
            >
              <Icon size={18} className={active ? 'text-orange-300' : 'text-white/50'} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}