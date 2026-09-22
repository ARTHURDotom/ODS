import { useState } from 'react'

const RODADAS = [
  { item: '📱 Celular quebrado', opcoes: ['Gaveta', 'Ponto de coleta', 'Lixo comum'], certa: 1 },
  { item: '🔋 Pilha descarregada', opcoes: ['Vaso sanitário', 'Lixo comum', 'PEV'], certa: 2 },
  { item: '📺 TV antiga', opcoes: ['Calçada', 'Logística reversa', 'Queimar'], certa: 1 },
  { item: '💻 Notebook funcionando', opcoes: ['Doar', 'Jogar fora', 'Guardar 10 anos'], certa: 0 },
  { item: '💡 Lâmpada fluorescente', opcoes: ['Lixo comum', 'PEV (mercúrio!)', 'Jardim'], certa: 1 }
]

export default function Destino() {
  const [indice, setIndice] = useState(0)
  const [pontos, setPontos] = useState(0)
  const [sequencia, setSequencia] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const rodada = RODADAS[indice % RODADAS.length]

  function escolher(i) {
    if (feedback) return
    const certa = i === rodada.certa
    setFeedback(certa ? 'certa' : 'errada')
    if (certa) {
      setPontos((p) => p + 1)
      setSequencia((s) => s + 1)
    } else {
      setSequencia(0)
    }
    setTimeout(() => {
      setFeedback(null)
      setIndice((n) => n + 1)
    }, 1100)
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
      <h3 className="text-xl font-bold">Acerte o destino ⚡</h3>
      <p aria-live="polite" className="mt-1 text-sm text-emerald-50/80">
        {pontos} pontos · sequência de {sequencia}
      </p>
      <p className="mt-4 text-3xl font-extrabold" aria-live="polite">{rodada.item}</p>
      <div className="mx-auto mt-4 grid max-w-md gap-2">
        {rodada.opcoes.map((opcao, i) => (
          <button
            key={opcao}
            type="button"
            disabled={!!feedback}
            onClick={() => escolher(i)}
            className={`rounded-xl border px-4 py-2.5 font-semibold transition-all duration-300 min-h-[48px] ${
              feedback && i === rodada.certa
                ? 'border-lime-300 bg-lime-300/15 text-white'
                : 'border-white/15 bg-white/5 hover:bg-white/10'
            }`}
          >
            {opcao}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 h-6 text-sm font-bold text-lime-200">
        {feedback === 'certa' ? '✓ Destino correto!' : feedback === 'errada' ? '✗ Ops! Veja o certo em verde.' : ''}
      </p>
    </div>
  )
}
