// Página de autenticação/portal principal.
//
// Esta página permite que alunos, mentores e empresas façam login ou
// cadastro na plataforma. Cada tipo de usuário possui um card com um
// formulário próprio. Após a autenticação, o usuário será redirecionado
// para o respectivo painel (aluno -> /aluno, mentor -> /mentor, empresa -> /empresa).

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface AuthProps {
  role: 'student' | 'mentor' | 'client';
  title: string;
  description: string;
  redirectTo: string;
}

// Componente de formulário reutilizável para login e cadastro.
function AuthCard({ role, title, description, redirectTo }: AuthProps) {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const endpoint = isSignup ? '/api/signup' : '/api/login';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Erro inesperado');
        return;
      }
      if (isSignup) {
        // Após cadastro bem-sucedido, faça login automaticamente.
        setIsSignup(false);
        setSuccess('Cadastro realizado. Faça login com suas credenciais.');
      } else {
        // Armazena o usuário no localStorage e redireciona.
        localStorage.setItem(
          'zuppi_user',
          JSON.stringify({ id: data.id, email: data.email, role: data.role }),
        );
        router.push(redirectTo);
      }
    } catch (err: any) {
      setError('Falha de conexão. Tente novamente.');
    }
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-6 shadow-glow-magenta backdrop-blur-md">
      <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-sm text-white/60">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <label htmlFor={`${role}-email`} className="text-sm text-white/70">
            E-mail
          </label>
          <input
            id={`${role}-email`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-white/20 bg-black/60 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-orange-400 focus:outline-none"
            placeholder="Digite seu e‑mail"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor={`${role}-password`} className="text-sm text-white/70">
            Senha
          </label>
          <input
            id={`${role}-password`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-white/20 bg-black/60 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-orange-400 focus:outline-none"
            placeholder="Digite sua senha"
            required
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        {success && <p className="text-sm text-green-400">{success}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-gradient-to-br from-orange-400 via-fuchsia-500 to-violet-700 px-4 py-2 text-sm font-bold text-white shadow-glow-magenta transition hover:brightness-110"
        >
          {isSignup ? 'Cadastrar' : 'Entrar'}
        </button>
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
        >
          {isSignup ? 'Já possuo cadastro' : 'Criar conta'}
        </button>
      </form>
    </div>
  );
}

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-20">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Acesse sua plataforma
          </h1>
          <p className="text-white/60">
            Faça login ou cadastre-se de acordo com seu perfil e comece a usar a Zuppi.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <AuthCard
            role="student"
            title="Portal do Aluno"
            description="Acesso exclusivo para estudantes. Acompanhe seus desafios, renda e impacto."
            redirectTo="/aluno"
          />
          <AuthCard
            role="mentor"
            title="Portal do Mentor"
            description="Acesse suas mentorias, ganhos e acompanhe seus mentorados."
            redirectTo="/mentor"
          />
          <AuthCard
            role="client"
            title="Portal da Empresa"
            description="Publique desafios, acompanhe projetos e resultados."
            redirectTo="/empresa"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}