import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Função utilitária para gerar o hash da senha informada.
function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

/**
 * Endpoint de autenticação de usuários.
 *
 * Recebe `email` e `password` no corpo da requisição (POST) e, se as
 * credenciais forem válidas, retorna as informações básicas do usuário
 * (id, email e role). Caso contrário retorna erro 401.
 */
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 400 });
  }
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
  const { data: user, error } = await supabase
    .from('site_users')
    .select('*')
    .eq('email', email)
    .maybeSingle();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!user) {
    return NextResponse.json({ error: 'Usuário ou senha incorretos.' }, { status: 401 });
  }
  const passwordHash = hashPassword(password);
  if (user.password_hash !== passwordHash) {
    return NextResponse.json({ error: 'Usuário ou senha incorretos.' }, { status: 401 });
  }
  // Remove o hash da resposta por segurança.
  const { id, role } = user;
  return NextResponse.json({ id, email, role }, { status: 200 });
}