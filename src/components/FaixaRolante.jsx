const itens = ['Reparar', 'Reutilizar', 'Reciclar', 'COP 30', 'ODS 12', 'E-lixo Zero']

export default function FaixaRolante() {
  return (
    <div aria-hidden="true" className="no-print overflow-hidden border-y border-emerald-900/10 bg-lime-300 py-2.5 select-none">
      <div className="animate-marquee flex w-max text-sm font-bold uppercase tracking-widest text-emerald-950">
        {[0, 1].map((metade) => (
          <div key={metade} className="flex shrink-0 items-center">
            {itens.map((t) => (
              <span key={t} className="flex items-center whitespace-nowrap">
                <span className="px-6">{t}</span>
                <span className="text-emerald-700">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
