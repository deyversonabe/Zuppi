import Image from 'next/image';

interface MascotProps {
  variant?: 'hero' | 'section' | 'card';
  showStudent?: boolean;
  caption?: string;
}

export function Mascot({ variant = 'hero', showStudent = true, caption }: MascotProps) {
  if (variant === 'card') {
    return (
      <div className="relative flex items-end justify-center gap-4">
        <div className="relative animate-float">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-orange-400/20 blur-2xl" />
          <Image
            src="/images/hero.png"
            alt="Robô Zuppi AI — mentor inteligente"
            width={160}
            height={160}
            className="relative z-10 drop-shadow-[0_0_30px_rgba(124,60,255,0.5)]"
            priority={false}
          />
        </div>
        {caption && (
          <div className="glass rounded-2xl px-4 py-2 text-sm font-bold">
            {caption}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className="relative mx-auto flex max-w-md flex-col items-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-700/25 via-fuchsia-500/15 to-orange-400/20 blur-3xl" />
        <div className="relative animate-float">
          <Image
            src="/images/hero.png"
            alt="Robô Zuppi AI"
            width={320}
            height={320}
            className="drop-shadow-[0_0_50px_rgba(124,60,255,0.45)]"
          />
        </div>
        <div className="glass mt-4 w-full rounded-2xl p-4 text-center">
          <b className="text-sm">Zuppi AI</b>
          <p className="mt-1 text-xs text-white/60">Mentora inteligente para orientar, conectar e provar impacto.</p>
        </div>
      </div>
    );
  }

  // hero variant — mascote principal com aluno
  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-end justify-center">
      {/* Glow fundo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-700/30 via-fuchsia-500/20 to-orange-400/25 blur-3xl" />

      {/* Balão de IA flutuando */}
      <div className="glass absolute right-4 top-8 z-20 max-w-[180px] rounded-2xl px-4 py-3 text-left shadow-glow">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <div>
            <b className="text-xs text-orange-300">Zuppi AI</b>
            <p className="mt-0.5 text-[11px] text-white/70">Match encontrado! 96% compatível</p>
          </div>
        </div>
      </div>

      {/* Score badge flutuando */}
      <div className="glass absolute left-4 top-16 z-20 rounded-2xl px-4 py-3 shadow-glow-magenta">
        <p className="text-[10px] uppercase tracking-widest text-white/50">Score</p>
        <b className="neon-text text-2xl">87</b>
        <p className="text-[10px] text-white/60">pontos de evolução</p>
      </div>

      {/* Robô — representa a IA e o mentor */}
      <div className="relative z-10 animate-float">
        <Image
          src="/images/hero.png"
          alt="Robô Zuppi AI — mentor inteligente e copiloto de carreira"
          width={420}
          height={480}
          priority
          className="drop-shadow-[0_0_60px_rgba(124,60,255,0.5)] object-contain"
        />
      </div>

      {/* Aluno — representa o usuário da plataforma */}
      {showStudent && (
        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/images/aluno.png"
            alt="Aluno Zuppi — usuário da plataforma"
            width={180}
            height={220}
            className="drop-shadow-[0_0_30px_rgba(255,122,24,0.35)] object-contain"
          />
        </div>
      )}

      {/* Card de renda */}
      <div className="glass absolute bottom-16 right-0 z-20 rounded-2xl px-4 py-3">
        <p className="text-[10px] text-white/50">Renda acumulada</p>
        <b className="text-xl text-orange-300">R$ 3.200</b>
        <div className="mt-1 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-emerald-400">+R$ 900 este mês</span>
        </div>
      </div>
    </div>
  );
}
