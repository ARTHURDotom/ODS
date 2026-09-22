import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'

const AFIRMACOES = [
  { texto: 'O e-lixo é o resíduo sólido que mais cresce no mundo.', certa: true },
  { texto: 'Menos de 1 em cada 4 eletrônicos é reciclado formalmente.', certa: true },
  { texto: 'Pilha comum pode ir no lixo da cozinha.', certa: false },
  { texto: 'A COP 30 aconteceu em Belém do Pará.', certa: true },
  { texto: 'Fabricante não tem obrigação sobre o produto velho.', certa: false },
  { texto: '1 tonelada de placas tem mais ouro que 1 de minério.', certa: true },
  { texto: 'Lâmpada fluorescente contém mercúrio.', certa: true },
  { texto: 'Queimar cabos é um descarte aceitável.', certa: false },
  { texto: 'O Brasil recicla cerca de 3% do seu e-lixo.', certa: true },
  { texto: 'Doar um aparelho funcionando é reutilizar.', certa: true }
]

export default function VerdadeiroFalso() {
  const [indice, setIndice] = useState(0)
  const [pontos, setPontos] = useState(0)
  const [fim, setFim] = useState(false)
  const atual = AFIRMACOES[indice]

  function responder(valor) {
    if (fim) return
    if (valor === atual.certa) setPontos((p) => p + 1)
    if (indice + 1 >= AFIRMACOES.length) {
      setFim(true)
    } else {
      setIndice((i) => i + 1)
    }
  }

  function reiniciar() {
    setIndice(0)
    setPontos(0)
    setFim(false)
  }

  return (
    <section id="verdadeiro-falso" aria-labelledby="titulo-vf" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-stone-50 p-6 sm:p-10 ring-1 ring-stone-200/70 text-center">
          <CabecalhoSecao
            id="titulo-vf"
            kicker="Relâmpago · Verdadeiro ou falso"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Mito ou verdade, sem pensar muito"
          />
          {!fim ? (
            <>
              <p aria-live="polite" className="mt-2 text-sm font-bold text-stone-500">
                {indice + 1}/{AFIRMACOES.length} · {pontos} pontos
              </p>
              <p className="mt-4 min-h-20 text-xl sm:text-2xl font-extrabold text-stone-900" aria-live="polite">
                {atual.texto}
              </p>
              <div className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => responder(true)}
                  className="rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 min-h-[48px]"
                >
                  ✓ Verdade
                </button>
                <button
                  type="button"
                  onClick={() => responder(false)}
                  className="rounded-full bg-rose-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-700 min-h-[48px]"
                >
                  ✗ Mito
                </button>
              </div>
            </>
          ) : (
            <div role="status">
              <p className="mt-4 text-2xl font-extrabold text-stone-900">
                {pontos}/{AFIRMACOES.length}!
              </p>
              <p className="mt-1 text-stone-600">
                {pontos === AFIRMACOES.length ? 'Perfeito, sem nem piscar!' : pontos >= 7 ? 'Muito bem!' : 'Vale reler as seções e tentar de novo.'}
              </p>
              <button
                type="button"
                onClick={reiniciar}
                className="mt-4 rounded-full bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Jogar de novo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
