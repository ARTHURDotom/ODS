import { useState } from 'react'

const CHAVE = 'compromissos-elixo'
const OPCOES = [
  'Vou levar pilhas ao PEV este mês',
  'Vou consertar antes de trocar',
  'Vou ensinar alguém a descartar certo',
  'Vou doar um eletrônico parado'
]

function ler() {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export default function Compromisso() {
  const [lista, setLista] = useState(ler)
  const [nome, setNome] = useState('')
  const [escolha, setEscolha] = useState(OPCOES[0])

  function assinar() {
    const n = nome.trim().slice(0, 24)
    if (n.length < 2) return
    const nova = [{ nome: n, texto: escolha }, ...lista].slice(0, 20)
    setLista(nova)
    setNome('')
    try {
      localStorage.setItem(CHAVE, JSON.stringify(nova))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white">Mural de compromissos ✍️</h3>
      <p className="mt-1 text-sm text-emerald-50/80">
        Assine com primeiro nome ou apelido. Visível só neste navegador — apague quando quiser.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="nome-compromisso" className="sr-only">Seu nome ou apelido</label>
        <input
          id="nome-compromisso"
          type="text"
          value={nome}
          maxLength={24}
          autoComplete="off"
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-emerald-50/50 focus:border-lime-300 focus:outline-none"
        />
        <label htmlFor="texto-compromisso" className="sr-only">Seu compromisso</label>
        <select
          id="texto-compromisso"
          value={escolha}
          onChange={(e) => setEscolha(e.target.value)}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white focus:border-lime-300 focus:outline-none [&>option]:text-stone-900"
        >
          {OPCOES.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={assinar}
          className="shrink-0 rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
        >
          Assinar
        </button>
      </div>
      {lista.length > 0 && (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {lista.map((c, i) => (
            <li key={`${c.nome}-${i}`} className="rounded-xl bg-white/5 px-4 py-2.5 text-sm ring-1 ring-white/10">
              <strong className="text-lime-200">{c.nome}</strong>
              <span className="text-emerald-50/85"> — {c.texto}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
