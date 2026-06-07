import { modules } from '@/lib/demo-data';
import { Card } from '@/components/ui/Card';

const moduleIcons = ['📡', '🏆', '🔗', '🤖', '📋', '📊'];

export function ModulesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <h2 className="section-title">
        Estrutura que <span className="neon-text">defende</span> a Zuppi
      </h2>
      <p className="mt-3 max-w-3xl text-white/55">
        Cada bloco cumpre uma função de negócio clara — sem repetir modelo de curso, mentoria ou vaga genérica.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map(([title, text], i) => (
          <Card key={title}>
            <span className="mb-3 block text-3xl">{moduleIcons[i]}</span>
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
