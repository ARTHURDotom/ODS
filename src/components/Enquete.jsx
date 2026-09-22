import { useState } from 'react'

export const ENQUETE_SETS = [
  {
    pergunta: 'Você recicla seus eletrônicos?',
    opcoes: ['Sim, sempre', 'Às vezes', 'Não, mas quero começar', 'Não sabia onde descartar']
  },
  {
    pergunta: 'Onde você descartaria um celular quebrado?',
    opcoes: ['Gaveta', 'Ponto de coleta', 'Lixo comum', 'Doaria se funcionasse']
  },
  {
    pergunta: 'Você sabia o que é logística reversa?',
    opcoes: ['Sim, e uso', 'Já ouvi falar', 'Não fazia ideia', 'Aprendi neste site!']
  }
]

function semanaDoAno() {
  const agora = new Date()
  const inicio = new Date(agora.getFullYear(), 0, 1)
  return Math.floor((agora - inicio) / 604800000)
}

function ler(chave) {
  try {
    return JSON.parse(localStorage.getItem(chave) || '{"votos":[0,0,0,0],"meuVoto":null}')
  } catch {
    return { votos: [0, 0, 0, 0], meuVoto: null }
  }
}

export default function Enquete() {
  const set = ENQUETE_SETS[semanaDoAno() % ENQUETE_SETS.length]
  const chave = `enquete-elixo-${ENQUETE_SETS.indexOf(set)}`
  const [estado, setEstado] = useState(() => ler(chave))
  const total = estado.votos.reduce((a, b) => a + b, 0)

  function votar(i) {
    if (estado.meuVoto !== null) return
    const votos = estado.votos.map((v, j) => (j === i ? v + 1 : v))
    const novo = { votos, meuVoto: i }
    setEstado(novo)
    try {
      localStorage.setItem(chave, JSON.stringify(novo))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <section id="enquete" aria-labelledby="titulo-enquete" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-6 sm:p-10 ring-1 ring-stone-200/70 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Enquete da semana</p>
          <h2 id="titulo-enquete" className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            {set.pergunta}
          </h2>
          <div className="mt-6 space-y-2.5 text-left">
            {set.opcoes.map((opcao, i) => {
              const pct = total > 0 ? Math.round((estado.votos[i] / total) * 100) : 0
              const votada = estado.meuVoto === i
              return estado.meuVoto === null ? (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => votar(i)}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 min-h-[48px] text-left font-medium text-stone-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md"
                >
                  {opcao}
                </button>
              ) : (
                <div key={opcao} className={`overflow-hidden rounded-xl border px-4 py-3 ${votada ? 'border-emerald-400 bg-emerald-50' : 'border-stone-200 bg-stone-50'}`}>
                  <div className="flex items-center justify-between gap-2 text-sm font-semibold text-stone-800">
                    <span>{opcao}{votada ? ' · seu voto ✓' : ''}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200" role="img" aria-label={`${pct}% votaram: ${opcao}`}>
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${votada ? 'bg-emerald-600' : 'bg-emerald-300'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-xs text-stone-500">
            {total === 0
              ? 'Seja o primeiro a votar! Resultado salvo só neste navegador.'
              : `${total} voto${total > 1 ? 's' : ''} neste navegador. A pergunta troca toda semana.`}
          </p>
        </div>
      </div>
    </section>
  )
}
