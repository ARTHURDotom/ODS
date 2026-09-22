import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Simulador from './Simulador.jsx'

const PESOS = [
  { id: 'celulares', rotulo: 'Celulares parados', peso: 0.18, unidade: 'un.' },
  { id: 'notebooks', rotulo: 'Notebooks parados', peso: 2.2, unidade: 'un.' },
  { id: 'tvs', rotulo: 'TVs/monitores parados', peso: 9, unidade: 'un.' },
  { id: 'geladeiras', rotulo: 'Geladeiras paradas', peso: 60, unidade: 'un.' }
]

export function calcularELixo(qtds) {
  return PESOS.reduce((total, item) => total + (Number(qtds[item.id]) || 0) * item.peso, 0)
}

export default function Calculadora() {
  const [qtds, setQtds] = useState({ celulares: '', notebooks: '', tvs: '', geladeiras: '' })
  const [mostrar, setMostrar] = useState(false)
  const total = calcularELixo(qtds)
  const celularesEquivalentes = Math.round(total / 0.18)

  function atualizar(id, valor) {
    if (/^\d{0,3}$/.test(valor)) {
      setQtds((q) => ({ ...q, [id]: valor }))
      setMostrar(false)
    }
  }

  return (
    <section id="calculadora" aria-labelledby="titulo-calculadora" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <CabecalhoSecao
            id="titulo-calculadora"
            kicker="Calculadora E-lixo"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Quanto e-lixo tem na sua casa?"
          />
          <p className="mt-4 text-lg lg:text-xl text-stone-600 leading-relaxed">
            Conte os aparelhos parados (quebrados ou na gaveta) e descubra o peso estimado.
            Tudo fica no seu navegador — nada é enviado.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {PESOS.map((item) => (
              <div key={item.id}>
                <label htmlFor={`calc-${item.id}`} className="mb-1.5 block text-sm font-medium text-stone-700">
                  {item.rotulo}
                </label>
                <input
                  id={`calc-${item.id}`}
                  type="number"
                  min="0"
                  max="999"
                  inputMode="numeric"
                  value={qtds[item.id]}
                  onChange={(e) => atualizar(item.id, e.target.value)}
                  placeholder="0"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMostrar(true)}
            className="btn-shine mt-5 inline-flex rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
          >
            Calcular meu e-lixo
          </button>
        </div>
        <div
          aria-live="polite"
          className="rounded-[2rem] bg-emerald-950 p-6 sm:p-10 text-white lg:sticky lg:top-24"
        >
          {mostrar ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-200">Seu resultado</p>
              <p className="mt-2 text-5xl lg:text-6xl font-extrabold">
                {total.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}{' '}
                <span className="text-2xl font-bold">kg</span>
              </p>
              <p className="mt-3 text-emerald-50/85 leading-relaxed">
                Isso equivale a cerca de <strong>{celularesEquivalentes.toLocaleString('pt-BR')} celulares</strong>{' '}
                e a <strong>{Math.round((total / 7.8) * 100).toLocaleString('pt-BR')}% da média anual por brasileiro (7,8 kg)</strong>.
                {total > 7.8
                  ? ' Acima da média — ótima hora para levar tudo ao PEV!'
                  : ' Abaixo da média anual — mantenha assim e descarte certo!'}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-200">Seu resultado</p>
              <p className="mt-2 text-lg text-emerald-50/85 leading-relaxed">
                Preencha as quantidades e aperte calcular. O brasileiro gera em média{' '}
                <strong className="text-white">7,8 kg de e-lixo por ano</strong> — e você, quanto tem parado em casa?
              </p>
            </>
          )}
        </div>
      </div>
      <div className="mt-8">
        <Simulador />
      </div>
    </section>
  )
}
