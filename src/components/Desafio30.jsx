import { useState } from 'react'

const DIAS = Array.from({ length: 30 }, (_, i) => i + 1)
const CHAVE = 'desafio30-elixo'

function ler() {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

const DICAS = [
  'Separe uma pilha para o PEV',
  'Apague dados de um aparelho velho',
  'Conte a alguém sobre e-lixo',
  'Pesquise o PEV mais próximo',
  'Doe um eletrônico funcionando'
]

export default function Desafio30() {
  const [feitos, setFeitos] = useState(ler)
  const pct = Math.round((feitos.length / 30) * 100)

  function alternar(d) {
    const novo = feitos.includes(d) ? feitos.filter((x) => x !== d) : [...feitos, d]
    setFeitos(novo)
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white">Desafio 30 dias 🌱</h3>
      <p className="mt-1 text-sm text-emerald-50/80">
        Um quadradinho por dia com atitude sustentável. Dica do dia: {DICAS[new Date().getDate() % DICAS.length]}.
      </p>
      <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-10" role="group" aria-label="Calendário do desafio de 30 dias">
        {DIAS.map((d) => {
          const feito = feitos.includes(d)
          return (
            <button
              key={d}
              type="button"
              onClick={() => alternar(d)}
              aria-pressed={feito}
              aria-label={`Dia ${d}${feito ? ', concluído' : ''}`}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm font-extrabold transition-all duration-200 ${
                feito
                  ? 'bg-lime-300 text-emerald-950'
                  : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20'
              }`}
            >
              {feito ? '✓' : d}
            </button>
          )
        })}
      </div>
      <p aria-live="polite" className="mt-3 text-sm font-bold text-lime-200">
        {feitos.length}/30 dias ({pct}%)
        {pct === 100 ? ' — Desafio completo, lenda!' : ''}
      </p>
    </div>
  )
}
