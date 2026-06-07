import { siteConfig } from '@/lib/config';

const splitColors: Record<string, string> = {
  aluno:      'from-orange-400 via-fuchsia-500 to-violet-600',
  mentor:     'from-fuchsia-500 to-violet-600',
  plataforma: 'from-violet-600 to-violet-800',
  impacto:    'from-emerald-400 to-cyan-500',
};

const splitIcons: Record<string, string> = {
  aluno:      '🎓',
  mentor:     '🧑‍💼',
  plataforma: '⚡',
  impacto:    '🌍',
};

export function SplitSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="glass rounded-[2rem] p-7 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <h2 className="section-title">
              Monetização <span className="neon-text">transparente</span>
            </h2>
            <p className="mt-4 text-white/55 leading-relaxed">
              O split remuera aluno e mentor, mantém a plataforma sustentável e comprova impacto com fundo circular.
              Sem taxas ocultas, sem caixinha preta.
            </p>
            <div className="mt-6 glass rounded-2xl p-4">
              <p className="text-sm text-white/50">Exemplo: desafio de R$ 1.000</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {siteConfig.split.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span>{splitIcons[s.label]}</span>
                    <div>
                      <b className="text-sm capitalize">{s.label}</b>
                      <p className="text-lg font-black text-orange-300">R$ {Math.round(1000 * s.percent / 100)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barras */}
          <div className="space-y-5 self-center">
            {siteConfig.split.map((s) => (
              <div key={s.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="flex items-center gap-2 capitalize font-semibold">
                    {splitIcons[s.label]} {s.label}
                  </span>
                  <b className="text-orange-300">{s.percent}%</b>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill bg-gradient-to-r ${splitColors[s.label]}`}
                    style={{ width: `${s.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
