import { useState } from 'react'

const PALAVRAS = [
  { palavra: 'RECICLAR', dica: 'Dar nova vida ao material (8 letras)' },
  { palavra: 'COBRE', dica: 'Metal avermelhado das placas (5 letras)' },
  { palavra: 'OURO', dica: 'Metal precioso do celular (4 letras)' },
  { palavra: 'PEV', dica: 'Sigla do ponto de entrega (3 letras)' },
  { palavra: 'ODS', dica: 'Sigla dos Objetivos da ONU (3 letras)' },
  { palavra: 'BELEM', dica: 'Cidade da COP 30 (5 letras, sem acento)' }
]
const TENTATIVAS = 6

export default function Forca() {
  const [indice, setIndice] = useState(0)
  const [letras, setLetras] = useState([])
  const alvo = PALAVRAS[indice % PALAVRAS.length].palavra
  const erros = letras.filter((l) => !alvo.includes(l)).length
  const venceu = alvo.split('').every((l) => letras.includes(l))
  const perdeu = erros >= TENTATIVAS

  function tentar(letra) {
    if (letras.includes(letra) || venceu || perdeu) return
    setLetras((l) => [...l, letra])
  }

  function proxima() {
    setIndice((i) => i + 1)
    setLetras([])
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
      <h3 className="text-xl font-bold">Forca do e-lixo</h3>
      <p className="mt-1 text-sm text-emerald-50/80">{PALAVRAS[indice % PALAVRAS.length].dica}</p>
      <svg viewBox="0 0 120 130" className="mx-auto mt-2 h-32" aria-hidden="true">
        <line x1="20" y1="125" x2="100" y2="125" stroke="currentColor" strokeWidth="4" className="text-white/30" />
        <line x1="40" y1="125" x2="40" y2="10" stroke="currentColor" strokeWidth="4" className="text-white/30" />
        <line x1="40" y1="10" x2="85" y2="10" stroke="currentColor" strokeWidth="4" className="text-white/30" />
        <line x1="85" y1="10" x2="85" y2="30" stroke="currentColor" strokeWidth="4" className="text-white/30" />
        {erros > 0 && <circle cx="85" cy="42" r="12" fill="none" stroke="#bef264" strokeWidth="4" />}
        {erros > 1 && <line x1="85" y1="54" x2="85" y2="90" stroke="#bef264" strokeWidth="4" />}
        {erros > 2 && <line x1="85" y1="62" x2="65" y2="76" stroke="#bef264" strokeWidth="4" />}
        {erros > 3 && <line x1="85" y1="62" x2="105" y2="76" stroke="#bef264" strokeWidth="4" />}
        {erros > 4 && <line x1="85" y1="90" x2="68" y2="112" stroke="#bef264" strokeWidth="4" />}
        {erros > 5 && <line x1="85" y1="90" x2="102" y2="112" stroke="#bef264" strokeWidth="4" />}
      </svg>
      <p className="mt-2 flex flex-wrap justify-center gap-1.5" aria-live="polite" aria-label="Palavra">
        {alvo.split('').map((l, i) => (
          <span
            key={i}
            className="flex h-10 w-8 items-center justify-center rounded-lg bg-white/10 text-xl font-extrabold ring-1 ring-white/15"
          >
            {letras.includes(l) || venceu || perdeu ? l : ''}
          </span>
        ))}
      </p>
      <div className="mx-auto mt-4 flex max-w-md flex-wrap justify-center gap-1.5">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l) => (
          <button
            key={l}
            type="button"
            disabled={letras.includes(l) || venceu || perdeu}
            onClick={() => tentar(l)}
            aria-label={`Letra ${l}`}
            className="h-9 w-9 rounded-lg bg-white/10 text-sm font-bold ring-1 ring-white/15 transition-all duration-200 hover:bg-white/20 disabled:opacity-30"
          >
            {l}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 h-6 font-bold text-lime-200">
        {venceu ? `🎉 Acertou: ${alvo}!` : perdeu ? `Fim de jogo! Era: ${alvo}.` : `${TENTATIVAS - erros} tentativas restantes`}
      </p>
      {(venceu || perdeu) && (
        <button
          type="button"
          onClick={proxima}
          className="mt-2 rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
        >
          Próxima palavra
        </button>
      )}
    </div>
  )
}
