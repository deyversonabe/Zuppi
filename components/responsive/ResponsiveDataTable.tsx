interface Column<T> { key: keyof T; label: string; render?: (v: unknown, row: T) => React.ReactNode; }
interface Props<T> { data: T[]; columns: Column<T>[]; emptyMessage?: string; }
export function ResponsiveDataTable<T extends Record<string, unknown>>({ data, columns, emptyMessage = 'Nenhum dado encontrado.' }: Props<T>) {
  if (!data.length) return <div className="glass rounded-2xl p-8 text-center text-white/45">{emptyMessage}</div>;
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-white/10">{columns.map(c=><th key={String(c.key)} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">{c.label}</th>)}</tr></thead>
        <tbody>{data.map((row,i)=>(
          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
            {columns.map(c=><td key={String(c.key)} className="px-4 py-3">{c.render ? c.render(row[c.key], row) : String(row[c.key] ?? '-')}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
