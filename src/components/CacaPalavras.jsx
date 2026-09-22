// Grade 10x10 com 6 palavras escondidas (linhas como strings de 10 letras)
const GRADE = [
  'RECICLARXO',
  'ABCDEFGHIU',
  'JKCOBREMNR',
  'OPQRSTUVWO',
  'PXYZABCDEF',
  'EGHIODSJKL',
  'VMNOPQRCST',
  'ABCDEFGOHI',
  'JKLMNOPPQR',
  'STUVWXYZAB'
]

const PALAVRAS = [
  { texto: 'RECICLAR', casas: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]] },
  { texto: 'OURO', casas: [[0, 9], [1, 9], [2, 9], [3, 9]] },
  { texto: 'COBRE', casas: [[2, 2], [2, 3], [2, 4], [2, 5], [2, 6]] },
  { texto: 'PEV', casas: [[4, 0], [5, 0], [6, 0]] },
  { texto: 'ODS', casas: [[5, 4], [5, 5], [5, 6]] },
  { texto: 'COP', casas: [[6, 7], [7, 7], [8, 7]] }
]

const chave = (l, c) => `${l}-${c}`

import { useState } from 'react'

export default function CacaPalavras() {
  const [selecionadas, setSelecionadas] = useState([])
  const [achadas, setAchadas] = useState([])

  function alternar(l, c) {
    const k = chave(l, c)
    setSelecionadas((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]))
  }

  function verificar() {
    const sel = [...selecionadas].sort().join('|')
    const alvo = PALAVRAS.find(
      (p) =>
        !achadas.includes(p.texto) &&
        p.casas.map(([l, c]) => chave(l, c)).sort().join('|') === sel
    )
    if (alvo) {
      setAchadas((a) => [...a, alvo.texto])
      setSelecionadas([])
    }
  }

  function limpar() {
    setSelecionadas([])
  }

  const venceu = achadas.length === PALAVRAS.length

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
      <h3 className="text-xl font-bold">Caça-palavras do e-lixo</h3>
      <p className="mt-1 text-sm text-emerald-50/80">
        Toque nas letras para selecionar e aperte verificar. Achadas: {achadas.length}/{PALAVRAS.length}
      </p>
      <div
        className="mx-auto mt-4 grid w-fit grid-cols-10 gap-1"
        role="group"
        aria-label="Grade do caça-palavras"
      >
        {GRADE.map((linha, l) =>
          linha.split('').map((letra, c) => {
            const k = chave(l, c)
            const sel = selecionadas.includes(k)
            const ok = PALAVRAS.some((p) => achadas.includes(p.texto) && p.casas.some(([ll, cc]) => ll === l && cc === c))
            return (
              <button
                key={k}
                type="button"
                onClick={() => alternar(l, c)}
                aria-pressed={sel}
                aria-label={`Letra ${letra}, linha ${l + 1}, coluna ${c + 1}`}
                className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-sm font-extrabold transition-all duration-200 ${
                  ok
                    ? 'bg-lime-300 text-emerald-950'
                    : sel
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20'
                }`}
              >
                {letra}
              </button>
            )
          })
        )}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={verificar}
          className="rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
        >
          Verificar
        </button>
        <button
          type="button"
          onClick={limpar}
          className="rounded-full border border-white/25 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
        >
          Limpar
        </button>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-bold">
        {PALAVRAS.map((p) => (
          <span
            key={p.texto}
            className={`rounded-full px-3 py-1 ${achadas.includes(p.texto) ? 'bg-lime-300 text-emerald-950 line-through' : 'bg-white/10 text-emerald-50/80'}`}
          >
            {p.texto}
          </span>
        ))}
      </div>
      {venceu && (
        <p role="status" className="mt-3 font-bold text-lime-200">
          🎉 Você achou todas as palavras!
        </p>
      )}
    </div>
  )
}
