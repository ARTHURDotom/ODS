import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'

const cartas = [
  {
    mito: 'Jogar pilha no lixo comum não faz mal, é pequena.',
    verdade: false,
    explicacao: 'Mito. Uma pilha contamina milhares de litros de água com metais pesados. Sempre em PEVs.'
  },
  {
    mito: 'Celular velho ainda vale dinheiro.',
    verdade: true,
    explicacao: 'Verdade. Placas têm ouro, cobre e prata — 1 tonelada de placas rende até 100× mais ouro que 1 tonelada de minério.'
  },
  {
    mito: 'Apagar fotos e formatar já protege meus dados.',
    verdade: false,
    explicacao: 'Mito parcial. Formatar ajuda, mas o ideal é criptografar + restaurar de fábrica + remover chips e cartões.'
  },
  {
    mito: 'Fabricante é obrigado a receber eletrônico velho de volta.',
    verdade: true,
    explicacao: 'Verdade. A logística reversa (Decreto 10.240/2020) obriga a cadeia a coletar eletroeletrônicos pós-consumo.'
  }
]

function Carta({ item, indice }) {
  const [virada, setVirada] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setVirada((v) => !v)}
      aria-pressed={virada}
      aria-label={`${item.mito}. Toque para revelar se é mito ou verdade.`}
      className="min-h-56 w-full text-left [perspective:900px]"
    >
      <span
        className={`relative block h-full min-h-56 rounded-2xl p-6 ring-1 transition-transform duration-500 ease-out [transform-style:preserve-3d] ${virada ? '[transform:rotateY(180deg)]' : ''} ${virada ? (item.verdade ? 'bg-emerald-50 ring-emerald-300' : 'bg-rose-50 ring-rose-300') : 'bg-white ring-stone-200/70 hover:shadow-lg'}`}
      >
        <span className="block [backface-visibility:hidden]">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Mito ou verdade?</span>
          <span className="mt-2 block font-bold text-stone-900 lg:text-lg leading-snug">{item.mito}</span>
          <span className="mt-3 block text-sm font-semibold text-emerald-700">Toque para revelar →</span>
        </span>
        <span className="absolute inset-0 block rounded-2xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <span className={`text-xs font-bold uppercase tracking-wider ${item.verdade ? 'text-emerald-700' : 'text-rose-600'}`}>
            {item.verdade ? '✓ Verdade' : '✗ Mito'}
          </span>
          <span className="mt-2 block text-sm lg:text-base text-stone-700 leading-relaxed">{item.explicacao}</span>
        </span>
      </span>
    </button>
  )
}

export default function Mitos() {
  return (
    <section id="mitos" aria-labelledby="titulo-mitos" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-mitos"
          kicker="Mitos e verdades"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Você cai nessas?"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Toque nas cartas para descobrir o que é mito e o que é verdade sobre lixo eletrônico.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cartas.map((c, i) => (
            <Reveal key={c.mito} delay={i * 90} className="h-full">
              <Carta item={c} indice={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
