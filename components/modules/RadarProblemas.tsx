import { Card } from '@/components/ui/Card';
import { Radar, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';

const problems = [
  {
    title: 'Clínicas sem sistema de agendamento digital',
    segment: 'Saúde', urgency: 5, recurrence: 4, impact: 5,
    evidence: 'Entrevistas com 12 clínicas', status: 'validado',
    ai_summary: 'Alta recorrência em cidades médias. PME sem orçamento para sistemas pagos.',
  },
  {
    title: 'ONGs sem landing page para captar doadores',
    segment: 'Terceiro Setor', urgency: 4, recurrence: 5, impact: 4,
    evidence: 'Levantamento com 8 ONGs locais', status: 'validado',
    ai_summary: 'Demanda reprimida clara. Willingness to pay confirmada em 6 das 8 ONGs.',
  },
  {
    title: 'PMEs sem controle financeiro básico',
    segment: 'Varejo', urgency: 5, recurrence: 5, impact: 4,
    evidence: 'Entrevistas em feiras locais', status: 'em_analise',
    ai_summary: 'Dor crônica. Solução em Excel pode ser MVP imediato.',
  },
  {
    title: 'Escolas sem comunicação eficiente com pais',
    segment: 'Educação', urgency: 3, recurrence: 4, impact: 5,
    evidence: 'Pesquisa com 3 colégios', status: 'novo',
    ai_summary: 'Potencial alto. Precisa validar willingness to pay institucional.',
  },
];

const statusMap: Record<string, string> = {
  validado:   'badge-green',
  em_analise: 'badge-orange',
  novo:       'badge-purple',
};

function ScoreBar({ value, max = 5, color = 'from-orange-400 to-fuchsia-500' }: { value: number; max?: number; color?: string }) {
  return (
    <div className="progress-bar w-full">
      <div
        className={`progress-fill bg-gradient-to-r ${color}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}

export function RadarProblemas() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/40 to-fuchsia-500/30">
              <Radar size={20} className="text-fuchsia-300" />
            </div>
            <h2 className="text-2xl font-black">Radar de Problemas</h2>
          </div>
          <p className="mt-1 text-white/55">Dores reais coletadas e validadas pela comunidade Zuppi.</p>
        </div>
        <div className="badge badge-orange">
          <AlertTriangle size={12} /> {problems.filter(p => p.status === 'validado').length} validados
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { label: 'Total mapeados',  value: problems.length.toString() },
          { label: 'Validados',       value: problems.filter(p => p.status === 'validado').length.toString() },
          { label: 'Urgência média',  value: (problems.reduce((a,p)=>a+p.urgency,0)/problems.length).toFixed(1) + '/5' },
        ].map((k) => (
          <div key={k.label} className="glass rounded-2xl p-4 text-center">
            <b className="block text-2xl font-black text-orange-300">{k.value}</b>
            <p className="text-xs text-white/50">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Problem cards */}
      <div className="space-y-4">
        {problems.map((p) => (
          <Card key={p.title}>
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="badge badge-purple">{p.segment}</span>
                  <span className={`badge ${statusMap[p.status]}`}>{p.status.replace('_', ' ')}</span>
                </div>
                <h3 className="font-black text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 italic">💡 {p.ai_summary}</p>
                <p className="mt-2 text-xs text-white/40">Evidência: {p.evidence}</p>
              </div>
              <div className="shrink-0 w-full md:w-48 space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs text-white/50">
                    <span>Urgência</span><b>{p.urgency}/5</b>
                  </div>
                  <ScoreBar value={p.urgency} color="from-red-400 to-orange-400" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-white/50">
                    <span>Recorrência</span><b>{p.recurrence}/5</b>
                  </div>
                  <ScoreBar value={p.recurrence} color="from-orange-400 to-fuchsia-500" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-white/50">
                    <span>Impacto</span><b>{p.impact}/5</b>
                  </div>
                  <ScoreBar value={p.impact} color="from-fuchsia-500 to-violet-600" />
                </div>
                {p.status === 'validado' && (
                  <button className="btn btn-primary w-full text-xs">
                    Criar desafio <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
