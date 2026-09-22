import { useState } from 'react'

/** Cabeçalho padrão das seções: eyebrow numerado + título + copiar link. */
export default function CabecalhoSecao({
  id,
  kicker,
  titulo,
  escuro = false,
  kickerClassName = ''
}) {
  const [copiado, setCopiado] = useState(false)
  const kickerPadrao = escuro
    ? 'text-sm lg:text-base font-semibold uppercase tracking-widest text-lime-200'
    : 'text-sm lg:text-base font-semibold uppercase tracking-widest text-emerald-700'

  function copiar(e) {
    const secao = e.currentTarget.closest('section')?.id
    if (!secao) return
    const url = `${window.location.href.split('#')[0]}#${secao}`
    try {
      navigator.clipboard.writeText(url).then(() => {
        setCopiado(true)
        setTimeout(() => setCopiado(false), 2000)
      })
    } catch {
      /* área de transferência indisponível */
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <p className={`com-linha ${kickerClassName || kickerPadrao}`}>{kicker}</p>
        <button
          type="button"
          onClick={copiar}
          title="Copiar link desta seção"
          aria-label={`Copiar link da seção ${typeof kicker === 'string' ? kicker : 'atual'}`}
          className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-bold text-current opacity-60 transition-all duration-300 hover:opacity-100"
        >
          {copiado ? '✓ copiado!' : '🔗 link'}
        </button>
      </div>
      <h2
        id={id}
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${escuro ? '' : 'text-stone-900'}`}
      >
        {titulo}
      </h2>
    </>
  )
}
