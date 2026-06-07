import { createSupabaseAdmin } from '@/lib/supabase/admin';
import { ok, fail, parseJson } from '@/lib/api';
export async function GET() {
  try {
    const sb = createSupabaseAdmin();
    const { data, error } = await sb.from('challenges').select('*').order('created_at',{ascending:false}).limit(100);
    if (error) return fail(error.message, 500);
    return ok(data);
  } catch (e: unknown) { return fail(e instanceof Error ? e.message : 'Erro', 500); }
}
export async function POST(req: Request) {
  try {
    const body = await parseJson(req);
    const sb = createSupabaseAdmin();
    const { data, error } = await sb.from('challenges').insert(body).select('*').single();
    if (error) return fail(error.message, 400);
    return ok(data, 201);
  } catch (e: unknown) { return fail(e instanceof Error ? e.message : 'Erro', 500); }
}
