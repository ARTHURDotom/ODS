import { useState } from 'react'

const SECOES = [
  'Problema',
  'ODS',
  'Soluções',
  'Quiz',
  'Jogo',
  'Turma'
]
const CHAVE = 'votacao-elixo'

function ler() {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '{}')
    return typeof v === 'object' && v !== null ? v : {}
  } catch {
    return {}
  }
}

export default function Votacao() {
  const [votos, setVotos] = useState(ler)
  const [meuVoto, setMeuVoto] = useState(() => {
    try {
      return localStorage.getItem(`${CHAVE}-meu`) || null
    } catch {
      return null
    }
  })
  const total = Object.values(votos).reduce((a, b) => a + b, 0)

  function votar(secao) {
    if (meuVoto) return
    const novo = { ...votos, [secao]: (votos[secao] || 0) + 1 }
    setVotos(novo)
    setMeuVoto(secao)
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo))
      localStorage.setItem(`${CHAVE}-meu`, secao)
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white">Qual seção você mais gostou?</h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {SECOES.map((s) => {
          const n = votos[s] || 0
          const pct = total > 0 ? Math.round((n / total) * 100) : 0
          return meuVoto ? (
            <div key={s} className={`rounded-xl border px-4 py-2.5 ${meuVoto === s ? 'border-lime-300 bg-lime-300/15' : 'border-white/10 bg-white/5'}`}>
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>{s}{meuVoto === s ? ' ✓' : ''}</span>
                <span>{pct}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-lime-300 transition-all duration-700" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ) : (
            <button
              key={s}
              type="button"
              onClick={() => votar(s)}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-left font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              {s}
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-emerald-50/60">
        {total === 0 ? 'Seja o primeiro a votar! (só neste navegador)' : `${total} voto${total > 1 ? 's' : ''} neste navegador.`}
      </p>
    </div>
  )
}
