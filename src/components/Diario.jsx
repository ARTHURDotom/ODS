import { useState } from 'react'

const CHAVE = 'diario-elixo'

function ler() {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export default function Diario() {
  const [notas, setNotas] = useState(ler)
  const [texto, setTexto] = useState('')

  function salvar() {
    const t = texto.trim()
    if (t.length < 3) return
    const nova = [{ texto: t.slice(0, 280), data: new Date().toISOString() }, ...notas].slice(0, 30)
    setNotas(nova)
    setTexto('')
    try {
      localStorage.setItem(CHAVE, JSON.stringify(nova))
    } catch {
      /* sem armazenamento */
    }
  }

  function apagar(i) {
    const nova = notas.filter((_, j) => j !== i)
    setNotas(nova)
    try {
      localStorage.setItem(CHAVE, JSON.stringify(nova))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white">Diário do visitante 📝</h3>
      <p className="mt-1 text-sm text-emerald-50/80">Anote o que aprendeu. Fica só neste navegador.</p>
      <label htmlFor="nota-diaria" className="sr-only">Sua anotação</label>
      <textarea
        id="nota-diaria"
        value={texto}
        maxLength={280}
        rows={2}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ex.: hoje descobri onde descartar pilhas…"
        className="mt-3 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-emerald-50/50 focus:border-lime-300 focus:outline-none"
      />
      <button
        type="button"
        onClick={salvar}
        className="mt-2 rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
      >
        Guardar anotação
      </button>
      {notas.length > 0 && (
        <ul className="mt-4 space-y-2 text-left">
          {notas.map((n, i) => (
            <li key={`${n.data}-${i}`} className="flex items-start justify-between gap-2 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10">
              <div>
                <p className="text-white">{n.texto}</p>
                <p className="mt-0.5 text-xs text-emerald-50/60">
                  {new Date(n.data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </p>
              </div>
              <button
                type="button"
                onClick={() => apagar(i)}
                aria-label="Apagar anotação"
                className="rounded-lg px-2 py-1 text-sm text-emerald-50/60 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
