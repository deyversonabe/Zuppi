'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  ts: number;
}

const suggestions = [
  'Qual desafio combina com minhas habilidades?',
  'Como melhorar meu score humano?',
  'Monte minha trilha de carreira em 30 dias',
  'Analise meu portfólio e sugira próximos passos',
];

export function ChatIA() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Oi! Sou a Zuppi AI, sua mentora de carreira. Estou aqui para te ajudar a encontrar desafios pagos, montar sua trilha de evolução e gerar renda real. Por onde quer começar?',
      ts: Date.now(),
    },
  ]);
  const [input, setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send(text?: string) {
    const prompt = (text ?? input).trim();
    if (!prompt) return;
    setInput('');
    const userMsg: Message = { role: 'user', content: prompt, ts: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    try {
      // Use unified AI endpoint; specify the desired mode explicitly in the body.
      const r = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'career', prompt }),
      });
      const j = await r.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: j.text || j.error || 'Sem resposta.',
        ts: Date.now(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Erro de conexão. Verifique a configuração da API.',
        ts: Date.now(),
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[600px] flex-col glass rounded-[2rem] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 p-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/50 to-fuchsia-500/30 blur-lg animate-glow" />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-fuchsia-500 to-violet-700 text-xl font-black">
            Z
          </div>
        </div>
        <div>
          <b className="font-black">Zuppi AI Career</b>
          <p className="text-xs text-white/50">Mentora inteligente · powered by OpenAI</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> online
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {m.role === 'assistant' ? (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-violet-700 text-sm font-black">Z</div>
            ) : (
              <div className="relative h-8 w-8 shrink-0">
                <Image src="/images/aluno.png" alt="Você" fill className="object-contain" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              m.role === 'user'
                ? 'bg-gradient-to-br from-orange-400/20 to-fuchsia-500/15 text-white'
                : 'glass text-white/85'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-violet-700 text-sm font-black">Z</div>
            <div className="glass rounded-2xl px-4 py-3">
              <span className="flex gap-1">
                {[0,1,2].map(i => (
                  <span key={i} className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: `${i*150}ms` }} />
                ))}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-5 pb-2 flex flex-wrap gap-2">
          {suggestions.map(s => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-xs glass rounded-full px-3 py-1.5 text-white/65 hover:text-white hover:bg-white/10 transition"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-white/10 p-4 flex gap-3">
        <input
          className="zuppi-input flex-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Pergunte à Zuppi AI..."
          onKeyDown={e => e.key === 'Enter' && send()}
        />
        <button
          onClick={() => send()}
          disabled={loading || !input.trim()}
          className="btn btn-primary px-4 disabled:opacity-50"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
