import { useState } from 'react'

const ITENS = [
  { nome: '📱 Celular', pesoG: 180, unidade: 'g' },
  { nome: '🔋 Pilha AA', pesoG: 25, unidade: 'g' },
  { nome: '💻 Notebook', pesoG: 2200, unidade: 'kg' },
  { nome: '📺 TV 42"', pesoG: 9000, unidade: 'kg' },
  { nome: '❄️ Geladeira', pesoG: 60000, unidade: 'kg' }
]

function formatar(g) {
  return g >= 1000 ? `${(g / 1000).toLocaleString('pt-BR')} kg` : `${g.toLocaleString('pt-BR')} g`
}

export default function AdivinhePeso() {
  const [indice, setIndice] = useState(0)
  const [chute, setChute] = useState('')
  const [pontos, setPontos] = useState(0)
  const [fim, setFim] = useState(false)
  const [revelado, setRevelado] = useState(null)
  const atual = ITENS[indice]

  function maximo() {
    return atual.unidade === 'g' ? 1000 : 200
  }

  function confirmar() {
    const valor = Number(chute)
    if (!valor || valor <= 0 || revelado) return
    const alvo = atual.unidade === 'g' ? atual.pesoG : atual.pesoG / 1000
    const erro = Math.abs(valor - alvo) / alvo
    const ganho = erro <= 0.1 ? 3 : erro <= 0.3 ? 2 : erro <= 0.6 ? 1 : 0
    setPontos((p) => p + ganho)
    setRevelado({ ganho, alvo })
  }

  function proximo() {
    if (indice + 1 >= ITENS.length) {
      setFim(true)
    } else {
      setIndice((i) => i + 1)
      setChute('')
      setRevelado(null)
    }
  }

  function reiniciar() {
    setIndice(0)
    setChute('')
    setPontos(0)
    setFim(false)
    setRevelado(null)
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white">Adivinhe o peso ⚖️</h3>
      <p className="mt-1 text-sm text-emerald-50/80" aria-live="polite">
        Aparelho {indice + 1}/{ITENS.length} · {pontos} pontos
      </p>
      {!fim ? (
        <>
          <p className="mt-3 text-4xl font-extrabold" aria-hidden="true">{atual.nome.split(' ')[0]}</p>
          <p className="mt-1 font-bold text-white">Quanto pesa {atual.nome.toLowerCase().replace(/^[^\s]+\s/, '') || 'ele'}? (em {atual.unidade})</p>
          <div className="mx-auto mt-3 flex max-w-xs gap-2">
            <label htmlFor="chute-peso" className="sr-only">Seu chute em {atual.unidade}</label>
            <input
              id="chute-peso"
              type="number"
              min="1"
              max={maximo()}
              value={chute}
              disabled={!!revelado}
              onChange={(e) => setChute(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') (revelado ? proximo() : confirmar()) }}
              placeholder="0"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-emerald-50/50 focus:border-lime-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={revelado ? proximo : confirmar}
              className="shrink-0 rounded-full bg-lime-300 px-5 py-2.5 font-bold text-emerald-950 hover:bg-lime-200"
            >
              {revelado ? '→' : 'OK'}
            </button>
          </div>
          {revelado && (
            <p role="status" className="mt-3 font-bold text-lime-200">
              Pesa {formatar(atual.pesoG)} — +{revelado.ganho} pontos!
            </p>
          )}
        </>
      ) : (
        <div role="status">
          <p className="mt-3 text-2xl font-extrabold text-white">{pontos}/15 pontos!</p>
          <p className="mt-1 text-emerald-50/80">{pontos >= 12 ? 'Balança humana!' : pontos >= 7 ? 'Bom olho!' : 'Tente de novo!'}</p>
          <button
            type="button"
            onClick={reiniciar}
            className="mt-3 rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 hover:bg-lime-200"
          >
            Jogar de novo
          </button>
        </div>
      )}
    </div>
  )
}
