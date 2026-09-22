import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'

const PARES = [
  { aparelho: '📱 Celular', destino: 'Ponto de coleta' },
  { aparelho: '🔋 Pilha', destino: 'PEV (nunca no lixo)' },
  { aparelho: '📺 TV', destino: 'Logística reversa' },
  { aparelho: '❄️ Geladeira', destino: 'Coleta especial' },
  { aparelho: '💻 Notebook', destino: 'Doação ou reparo' },
  { aparelho: '💡 Lâmpada', destino: 'PEV (tem mercúrio)' }
]

function embaralhar(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function novoBaralho() {
  return embaralhar(
    PARES.flatMap((p, i) => [
      { chave: `${i}-a`, par: i, texto: p.aparelho },
      { chave: `${i}-b`, par: i, texto: p.destino }
    ])
  )
}

export default function Memoria() {
  const [cartas, setCartas] = useState(novoBaralho)
  const [abertas, setAbertas] = useState([])
  const [acertos, setAcertos] = useState([])
  const [jogadas, setJogadas] = useState(0)

  function virar(carta) {
    if (abertas.includes(carta.chave) || acertos.includes(carta.par) || abertas.length === 2) return
    const novas = [...abertas, carta.chave]
    setAbertas(novas)
    if (novas.length === 2) {
      setJogadas((j) => j + 1)
      const [a, b] = novas.map((ch) => cartas.find((c) => c.chave === ch))
      if (a.par === b.par) {
        setAcertos((s) => [...s, a.par])
        setAbertas([])
      } else {
        setTimeout(() => setAbertas([]), 800)
      }
    }
  }

  function reiniciar() {
    setCartas(novoBaralho())
    setAbertas([])
    setAcertos([])
    setJogadas(0)
  }

  const venceu = acertos.length === PARES.length

  return (
    <section id="memoria" aria-labelledby="titulo-memoria" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <CabecalhoSecao
            id="titulo-memoria"
            kicker="Mini-game · Combine certo"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Jogo da memória do descarte"
          />
          <p aria-live="polite" className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-stone-800 ring-1 ring-stone-200/70">
            {jogadas} jogadas · {acertos.length}/{PARES.length} pares
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6" role="group" aria-label="Cartas do jogo da memória">
          {cartas.map((carta) => {
            const visivel = abertas.includes(carta.chave) || acertos.includes(carta.par)
            const certa = acertos.includes(carta.par)
            return (
              <button
                key={carta.chave}
                type="button"
                onClick={() => virar(carta)}
                disabled={visivel}
                aria-label={visivel ? carta.texto : 'Carta virada para baixo'}
                className="[perspective:600px]"
              >
                <span
                  className={`flex min-h-24 sm:min-h-28 items-center justify-center rounded-2xl p-2 text-center text-sm sm:text-base font-bold ring-1 transition-transform duration-400 ease-out [transform-style:preserve-3d] ${visivel ? '[transform:rotateY(180deg)]' : 'bg-emerald-800 text-lime-200 ring-emerald-900 hover:scale-[1.03]'}`}
                >
                  {visivel ? (
                    <span className={`flex h-full w-full items-center justify-center rounded-2xl p-2 [transform:rotateY(180deg)] [backface-visibility:hidden] ${certa ? 'bg-lime-200 text-emerald-950' : 'bg-white text-stone-900'}`}>
                      {carta.texto}
                    </span>
                  ) : (
                    <span aria-hidden="true" className="text-2xl">♻️</span>
                  )}
                </span>
              </button>
            )
          })}
        </div>
        {venceu && (
          <div role="status" className="mx-auto mt-8 max-w-xl rounded-2xl bg-white p-6 text-center ring-1 ring-emerald-300">
            <p className="text-2xl font-extrabold text-stone-900">Você zerou em {jogadas} jogadas!</p>
            <p className="mt-1 text-stone-600">Agora descarte de verdade: leve um eletrônico ao PEV mais próximo.</p>
            <button
              type="button"
              onClick={reiniciar}
              className="btn-shine mt-4 rounded-full bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Jogar de novo
            </button>
          </div>
        )}
        {!venceu && jogadas > 0 && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={reiniciar}
              className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-700"
            >
              Reembaralhar
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
