import useNaTela from '../useNaTela.js'

const RAIO = 54
const CIRC = 2 * Math.PI * RAIO
const PCT = 22.3

export default function Donut() {
  const [ref, visivel] = useNaTela({ threshold: 0.4 })
  const offset = visivel ? CIRC * (1 - PCT / 100) : CIRC

  return (
    <div ref={ref} className="flex items-center gap-5" role="img" aria-label="Apenas 22,3% do e-lixo é reciclado formalmente">
      <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r={RAIO} fill="none" strokeWidth="14" className="stroke-white/10" />
        <circle
          cx="60"
          cy="60"
          r={RAIO}
          fill="none"
          stroke="#bef264"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <text x="60" y="66" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="800">
          {PCT.toLocaleString('pt-BR')}%
        </text>
      </svg>
      <div>
        <p className="font-bold text-white lg:text-lg">Só isso é reciclado</p>
        <p className="text-sm lg:text-base text-emerald-50/80 leading-relaxed">
          Todo o resto vira aterro, lixão ou comércio informal.
        </p>
      </div>
    </div>
  )
}
