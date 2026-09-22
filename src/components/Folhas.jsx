const FOLHAS = [
  { left: '6%', tamanho: 22, duracao: '11s', atraso: '0s' },
  { left: '18%', tamanho: 14, duracao: '14s', atraso: '2s' },
  { left: '32%', tamanho: 26, duracao: '12s', atraso: '5s' },
  { left: '47%', tamanho: 16, duracao: '15s', atraso: '1s' },
  { left: '61%', tamanho: 24, duracao: '10s', atraso: '4s' },
  { left: '74%', tamanho: 15, duracao: '13s', atraso: '6s' },
  { left: '86%', tamanho: 20, duracao: '12s', atraso: '3s' },
  { left: '94%', tamanho: 13, duracao: '16s', atraso: '7s' }
]

export default function Folhas() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {FOLHAS.map((f, i) => (
        <span
          key={i}
          className="folha-caindo absolute -top-8 text-emerald-600/25"
          style={{
            left: f.left,
            fontSize: f.tamanho,
            animationDuration: f.duracao,
            animationDelay: f.atraso
          }}
        >
          🍃
        </span>
      ))}
    </div>
  )
}
