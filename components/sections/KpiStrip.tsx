import { kpis } from '@/lib/demo-data';

export function KpiStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="glass rounded-3xl p-5 card-hover">
            <p className="text-sm text-white/55">{k.label}</p>
            <b className="mt-2 block text-3xl font-black text-orange-200">{k.value}</b>
            <span className="text-sm text-emerald-300">{k.delta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
