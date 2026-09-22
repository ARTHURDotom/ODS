/** Cabeçalho padrão das seções: eyebrow numerado + título. */
export default function CabecalhoSecao({
  id,
  kicker,
  titulo,
  escuro = false,
  kickerClassName = ''
}) {
  const kickerPadrao = escuro
    ? 'text-sm lg:text-base font-semibold uppercase tracking-widest text-lime-200'
    : 'text-sm lg:text-base font-semibold uppercase tracking-widest text-emerald-700'

  return (
    <>
      <p className={kickerClassName || kickerPadrao}>{kicker}</p>
      <h2
        id={id}
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${escuro ? '' : 'text-stone-900'}`}
      >
        {titulo}
      </h2>
    </>
  )
}
