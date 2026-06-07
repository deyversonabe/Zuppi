import { createSupabaseAdmin } from '@/lib/supabase/admin';
import { ok, fail } from '@/lib/api';
export async function GET() {
  try {
    const sb = createSupabaseAdmin();
    const { data, error } = await sb.from('impact_metrics').select('*').order('created_at',{ascending:false}).limit(100);
    if (error) return fail(error.message, 500);
    return ok(data);
  } catch (e: unknown) { return fail(e instanceof Error ? e.message : 'Erro', 500); }
}
