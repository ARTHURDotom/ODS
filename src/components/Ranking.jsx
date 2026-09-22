import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'

export default function Ranking() {
  const [nome, setNome] = useState('')
  const [lista, setLista] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem('ranking-elixo') || '[]')
      return Array.isArray(v) ? v : []
    } catch {
      return []
    }
  })

  const [avatar, setAvatar] = useState(AVATARES[0])

  function salvar() {
    const ultimo = (() => {
      try {
        return JSON.parse(localStorage.getItem('quiz-ultimo') || 'null')
      } catch {
        return null
      }
    })()
    if (!ultimo || nome.trim().length < 2) return
    const nova = [...lista, { nome: nome.trim().slice(0, 30), avatar, pontos: ultimo.pontos, total: ultimo.total, data: new Date().toISOString() }]
      .sort((a, b) => b.pontos - a.pontos || a.nome.localeCompare(b.nome))
      .slice(0, 8)
    setLista(nova)
    setNome('')
    try {
      localStorage.setItem('ranking-elixo', JSON.stringify(nova))
    } catch {
      /* sem armazenamento */
    }
  }

  function limpar() {
    setLista([])
    try {
      localStorage.removeItem('ranking-elixo')
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <section id="ranking" aria-labelledby="titulo-ranking" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-stone-50 p-6 sm:p-10 ring-1 ring-stone-200/70 text-center">
          <CabecalhoSecao
            id="titulo-ranking"
            kicker="Quadro local"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Ranking da turma 🏆"
          />
          <p className="mt-3 text-stone-600">
            Jogou o quiz? Registre seu nome e entre para o quadro — vale só neste navegador.
          </p>
          <div className="mx-auto mt-4 flex max-w-md flex-col sm:flex-row gap-2" role="group" aria-label="Escolha seu avatar">
            {AVATARES.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAvatar(a)}
                aria-pressed={avatar === a}
                aria-label={`Avatar ${a}`}
                className={`h-10 w-10 rounded-full text-xl ring-2 transition-all ${avatar === a ? 'bg-emerald-100 ring-emerald-600 scale-110' : 'bg-white ring-stone-200 hover:ring-emerald-300'}`}
              >
                {a}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-3 flex max-w-md flex-col sm:flex-row gap-2">
            <label htmlFor="nome-ranking" className="sr-only">Seu nome para o ranking</label>
            <input
              id="nome-ranking"
              type="text"
              value={nome}
              maxLength={30}
              autoComplete="off"
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
            />
            <button
              type="button"
              onClick={salvar}
              className="shrink-0 rounded-full bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Registrar
            </button>
          </div>
          {lista.length === 0 ? (
            <p className="mt-5 text-sm text-stone-500">Ninguém registrado ainda. Seja o primeiro!</p>
          ) : (
            <>
              <ol className="mt-5 space-y-2 text-left">
                {lista.map((r, i) => (
                  <li
                    key={`${r.nome}-${r.data}`}
                    className={`flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 ring-1 ${i === 0 ? 'bg-amber-50 ring-amber-300' : 'bg-white ring-stone-200/70'}`}
                  >
                    <span className="font-bold text-stone-900">
                      {i === 0 ? '🥇 ' : i === 1 ? '🥈 ' : i === 2 ? '🥉 ' : `${i + 1}º `}
                      <span aria-hidden="true">{r.avatar || '♻️'} </span>
                      {r.nome}
                    </span>
                    <span className="text-sm font-bold text-emerald-700">{r.pontos}/{r.total}</span>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                onClick={limpar}
                className="mt-4 text-xs font-semibold text-stone-400 hover:text-stone-600 hover:underline"
              >
                Limpar ranking
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
