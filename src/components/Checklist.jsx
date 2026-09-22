import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'
import Desafio30 from './Desafio30.jsx'

const SEMANAL = [
  'Separei pilhas e baterias para levar ao PEV',
  'Apaguei os dados de um aparelho antigo',
  'Conversei com alguém sobre descarte correto',
  'Levei um eletrônico a um ponto de coleta',
  'Preferi consertar em vez de trocar',
  'Compartilhei este site com alguém',
  'Acertei tudo no quiz E-lixo Zero'
]

const MENSAL = [
  'Fiz a limpa na gaveta de eletrônicos',
  'Levei tudo acumulado ao PEV',
  'Ensinei alguém a apagar dados antes de doar',
  'Comprei um item recondicionado ou usado',
  'Cobrei logística reversa numa loja',
  'Fiz o mutirão de coleta na escola/rua',
  'Zerei o jogo da memória e o quiz avançado',
  'Virei referência em descarte na família'
]

function ler(chave) {
  try {
    const v = JSON.parse(localStorage.getItem(chave) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export default function Checklist() {
  const [modo, setModo] = useState('semanal')
  const itens = modo === 'semanal' ? SEMANAL : MENSAL
  const chave = `checklist-elixo-${modo}`
  const [feitos, setFeitos] = useState(() => ler(chave))
  const pct = Math.round((feitos.length / itens.length) * 100)

  function trocarModo(m) {
    setModo(m)
    setFeitos(ler(`checklist-elixo-${m}`))
  }

  function alternar(i) {
    const novo = feitos.includes(i) ? feitos.filter((f) => f !== i) : [...feitos, i]
    setFeitos(novo)
    try {
      localStorage.setItem(chave, JSON.stringify(novo))
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
            kicker="Desafio E-lixo Zero"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Minha lista sustentável"
          />
          <p className="mt-4 text-lg lg:text-xl text-stone-600 leading-relaxed">
            Escolha o ritmo e marque cada atitude. Progresso salvo neste navegador.
          </p>
          <div className="mt-4 flex gap-2" role="group" aria-label="Ritmo do desafio">
            {[
              ['semanal', 'Semana (7)'],
              ['mensal', 'Mês (8)']
            ].map(([m, rotulo]) => (
              <button
                key={m}
                type="button"
                onClick={() => trocarModo(m)}
                aria-pressed={modo === m}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${modo === m ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                {rotulo}
              </button>
            ))}
          </div>
          <div className="mt-6" role="img" aria-label={`${pct}% do desafio concluído`}>
            <div className="flex items-center justify-between text-sm font-bold text-stone-800">
              <span>{feitos.length} de {itens.length}</span>
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
              Desafio completo! Você é oficialmente Guardião E-lixo Zero. 🌱
            </p>
          )}
        </div>
        <ul className="space-y-2.5">
          {itens.map((item, i) => {
            const feito = feitos.includes(i)
            return (
              <Reveal as="li" key={`${modo}-${item}`} delay={Math.min(i, 5) * 60} className="list-none">
                <button
                  type="button"
                  onClick={() => alternar(i)}
                  aria-pressed={feito}
                  className={`flex w-full items-center gap-3 rounded-2xl p-4 min-h-[48px] text-left ring-1 transition-all duration-300 ease-out ${feito ? 'bg-emerald-50 ring-emerald-300' : 'bg-stone-50 ring-stone-200/70 hover:shadow-md'}`}
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
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-emerald-950 p-4 sm:p-8 text-white">
          <Desafio30 />
        </div>
      </div>
    </section>
  )
}
