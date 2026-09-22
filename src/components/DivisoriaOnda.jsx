const TRILHA =
  'M0,52 C240,95 480,5 720,38 C960,71 1200,92 1440,46 L1440,90 L0,90 Z'
const TRILHA_FUNDO =
  'M0,62 C260,100 500,20 740,50 C980,80 1210,95 1440,58 L1440,90 L0,90 Z'

export default function DivisoriaOnda({ invertida = false }) {
  const fundo = invertida ? 'bg-emerald-950' : 'bg-[#eff6dc]'
  const corFrente = invertida ? '#eff6dc' : '#022c22'
  const corFundo = invertida ? '#065f46' : '#a7f3d0'
  return (
    <div aria-hidden="true" className={`${fundo} leading-none overflow-hidden`}>
      <div className="onda-mover flex w-max">
        {[0, 1].map((metade) => (
          <svg
            key={metade}
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="block h-12 sm:h-20 w-[100vw] shrink-0"
          >
            <path d={TRILHA_FUNDO} fill={corFundo} opacity="0.5" />
            <path d={TRILHA} fill={corFrente} />
          </svg>
        ))}
      </div>
    </div>
  )
}
