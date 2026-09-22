const itens = ['Reparar', 'Reutilizar', 'Reciclar', 'COP 30', 'ODS 12', 'E-lixo Zero']

function Fileira({ reversa = false }) {
  return (
    <div
      className={`${reversa ? 'animate-marquee-reverso' : 'animate-marquee'} flex w-max text-sm font-bold uppercase tracking-widest`}
    >
      {[0, 1].map((metade) => (
        <div key={metade} className="flex shrink-0 items-center">
          {itens.map((t) => (
            <span key={t} className="flex items-center whitespace-nowrap">
              <span className="px-6">{t}</span>
              <span className={reversa ? 'text-lime-300/70' : 'text-emerald-700'}>✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function FaixaRolante() {
  return (
    <div aria-hidden="true" className="select-none">
      <div className="overflow-hidden border-y border-emerald-900/10 bg-lime-300 py-2.5 text-emerald-950">
        <Fileira />
      </div>
      <div className="overflow-hidden border-b border-white/10 bg-emerald-900 py-2 text-lime-200">
        <Fileira reversa />
      </div>
    </div>
  )
}
