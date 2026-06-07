import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Cria um hash SHA‑256 da senha para armazenamento seguro.
function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

/**
 * Endpoint de cadastro de novos usuários.
 *
 * Espera um corpo JSON com os campos: `email`, `password` e `role`.
 * O campo `role` deve ser um dos valores: 'student', 'mentor' ou 'client'.
 * Retorna 201 em caso de sucesso ou um erro apropriado.
 */
export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();

  if (!email || !password || !role) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
  }

  // Instancia o cliente Supabase com a service role (servidor).
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  // Verifica se o usuário já existe.
  const { data: existing, error: lookupError } = await supabase
    .from('site_users')
    .select('id')
    .eq('email', email)
    .maybeSingle();
  if (lookupError) {
    return NextResponse.json({ error: lookupError.message }, { status: 500 });
  }
  if (existing) {
    return NextResponse.json({ error: 'Usuário já cadastrado.' }, { status: 409 });
  }

  // Calcula o hash da senha.
  const passwordHash = hashPassword(password);

  // Insere o novo usuário.
  const { error } = await supabase
    .from('site_users')
    .insert({ email, password_hash: passwordHash, role });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Usuário criado com sucesso' }, { status: 201 });
}