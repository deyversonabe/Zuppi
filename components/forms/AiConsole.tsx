'use client';
import { useState } from 'react';
import { Sparkles, Send, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const modeLabels: Record<string, { label: string; icon: string; desc: string }> = {
  radar:     { label: 'Radar de Problemas',    icon: '📡', desc: 'Extrai dores reais e urgência' },
  challenge: { label: 'Criar Desafio',          icon: '🏆', desc: 'Transforma dor em desafio pago' },
  match:     { label: 'Match Inteligente',      icon: '🔗', desc: 'Calcula compatibilidade' },
  career:    { label: 'Career Mentor',          icon: '🤖', desc: 'Trilha de carreira personalizada' },
  impact:    { label: 'Análise de Impacto',     icon: '🌍', desc: 'Indicadores e ODS' },
  pitch:     { label: 'Crítico de Pitch',       icon: '🎯', desc: 'Avalia banca Empreenda Senac' },
  proposal:  { label: 'Proposta Empresa',       icon: '💼', desc: 'ROI para empresa parceira' },
  validator: { label: 'Validador de Hipótese',  icon: '🔬', desc: 'Fatos vs. suposições' },
  evidence:  { label: 'Evidências Portfólio',   icon: '📋', desc: 'Organiza LOIs e entrevistas' },
  lgpd:      { label: 'Revisão LGPD',           icon: '🔒', desc: 'Riscos de privacidade' },
};

export function AiConsole() {
  const [mode, setMode] = useState('career');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModes, setShowModes] = useState(false);

  async function run() {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      // Use unified AI endpoint; pass the selected mode in the body instead of constructing a dynamic URL.
      const r = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, prompt }),
      });
      const j = await r.json();
      setResponse(j.text || j.data?.text || j.error || 'Sem resposta da IA.');
    } catch (err) {
      setResponse('Erro ao conectar com a IA. Verifique as configurações.');
    } finally {
      setLoading(false);
    }
  }

  const current = modeLabels[mode];

  return (
    <div className="glass rounded-[2rem] p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/50 to-fuchsia-500/30 blur-xl animate-glow" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-fuchsia-500 to-violet-700 text-2xl font-black">
            Z
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-black">Central de IA Zuppi</h3>
          <p className="text-sm text-white/55">10 modos especializados · powered by OpenAI</p>
        </div>
      </div>

      {/* Mode selector */}
      <div className="mb-5">
        <button
          onClick={() => setShowModes(!showModes)}
          className="glass w-full flex items-center justify-between rounded-2xl px-4 py-3 text-left"
        >
          <span className="flex items-center gap-3">
            <span className="text-2xl">{current.icon}</span>
            <span>
              <b className="block text-sm">{current.label}</b>
              <span className="text-xs text-white/50">{current.desc}</span>
            </span>
          </span>
          <ChevronDown size={16} className={`text-white/50 transition-transform ${showModes ? 'rotate-180' : ''}`} />
        </button>

        {showModes && (
          <div className="glass mt-2 grid rounded-2xl p-2 sm:grid-cols-2">
            {Object.entries(modeLabels).map(([key, m]) => (
              <button
                key={key}
                onClick={() => { setMode(key); setShowModes(false); }}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-white/8 ${mode === key ? 'bg-white/10 font-bold' : ''}`}
              >
                <span className="text-xl">{m.icon}</span>
                <span>
                  <span className="block font-semibold">{m.label}</span>
                  <span className="text-xs text-white/45">{m.desc}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input + button */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <textarea
          className="zuppi-input min-h-[100px] flex-1 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Digite para o modo "${current.label}"... (ex: problema, desafio, evidência)`}
          onKeyDown={(e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run(); }}
        />
        <button
          onClick={run}
          disabled={loading || !prompt.trim()}
          className="btn btn-primary md:min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Analisando...
            </span>
          ) : (
            <>
              <Sparkles size={16} /> Executar IA
            </>
          )}
        </button>
      </div>

      <p className="mt-2 text-xs text-white/35">Ctrl+Enter para enviar</p>

      {/* Response */}
      {response && (
        <div className="mt-5 rounded-2xl bg-black/40 border border-white/8 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">{current.icon}</span>
            <b className="text-sm">{current.label}</b>
            <span className="badge badge-purple ml-auto">IA Zuppi</span>
          </div>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/80 font-sans">{response}</pre>
        </div>
      )}
    </div>
  );
}
