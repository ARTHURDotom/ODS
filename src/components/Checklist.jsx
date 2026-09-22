import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'

const ITENS = [
  'Separei pilhas e baterias para levar ao PEV',
  'Apaguei os dados de um aparelho antigo',
  'Conversei com alguém sobre descarte correto',
  'Levei um eletrônico a um ponto de coleta',
  'Preferi consertar em vez de trocar',
  'Compartilhei este site com alguém',
  'Acertei tudo no quiz E-lixo Zero'
]
const CHAVE = 'checklist-elixo'

function ler() {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export default function Checklist() {
  const [feitos, setFeitos] = useState(ler)
  const pct = Math.round((feitos.length / ITENS.length) * 100)

  function alternar(i) {
    const novo = feitos.includes(i) ? feitos.filter((f) => f !== i) : [...feitos, i]
    setFeitos(novo)
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <section id="checklist" aria-labelledby="titulo-checklist" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <CabecalhoSecao
            id="titulo-checklist"
            kicker="Desafio da semana"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Minha semana E-lixo Zero"
          />
          <p className="mt-4 text-lg lg:text-xl text-stone-600 leading-relaxed">
            Marque cada atitude concluída. Seu progresso fica salvo neste navegador.
          </p>
          <div className="mt-6" role="img" aria-label={`${pct}% do desafio concluído`}>
            <div className="flex items-center justify-between text-sm font-bold text-stone-800">
              <span>{feitos.length} de {ITENS.length}</span>
              <span>{pct}%</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-lime-400 transition-all duration-500 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          {pct === 100 && (
            <p role="status" className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 font-bold text-emerald-800 ring-1 ring-emerald-200">
              Semana completa! Você é oficialmente Guardião E-lixo Zero. 🌱
            </p>
          )}
        </div>
        <ul className="space-y-2.5">
          {ITENS.map((item, i) => {
            const feito = feitos.includes(i)
            return (
              <Reveal as="li" key={item} delay={i * 60} className="list-none">
                <button
                  type="button"
                  onClick={() => alternar(i)}
                  aria-pressed={feito}
                  className={`flex w-full items-center gap-3 rounded-2xl p-4 text-left ring-1 transition-all duration-300 ease-out ${feito ? 'bg-emerald-50 ring-emerald-300' : 'bg-stone-50 ring-stone-200/70 hover:shadow-md'}`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-bold transition-colors duration-300 ${feito ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-stone-300 bg-white text-transparent'}`}
                  >
                    ✓
                  </span>
                  <span className={`font-medium ${feito ? 'text-emerald-900 line-through opacity-70' : 'text-stone-800'}`}>
                    {item}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
