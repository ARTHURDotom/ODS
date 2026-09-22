import { useEffect, useState } from 'react'

const OPCOES_LEITURA = [
  { id: 'tamanho-fonte', rotulo: 'A+', descricao: 'Aumentar letra' },
  { id: 'espacamento', rotulo: 'Espaço', descricao: 'Mais respiro' },
  { id: 'sem-animacao', rotulo: 'Calmo', descricao: 'Pausar movimentos' }
]

function aplicar(id, ativo) {
  const el = document.documentElement
  if (id === 'tamanho-fonte') el.style.setProperty('font-size', ativo ? '118%' : '')
  if (id === 'espacamento') {
    el.style.setProperty('--leitura-espaco', ativo ? '1' : '')
    document.body.classList.toggle('leitura-espacada', ativo)
  }
  if (id === 'sem-animacao') el.classList.toggle('sem-animacao', ativo)
}

function ler() {
  try {
    return JSON.parse(localStorage.getItem('painel-leitura') || '{}')
  } catch {
    return {}
  }
}

export default function PainelAcesso() {
  const [aberto, setAberto] = useState(false)
  const [ativas, setAtivas] = useState(ler)

  useEffect(() => {
    Object.entries(ativas).forEach(([id, ativo]) => {
      if (ativo) aplicar(id, true)
    })
    try {
      localStorage.setItem('painel-leitura', JSON.stringify(ativas))
    } catch {
      /* sem armazenamento */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function alternar(id) {
    const novo = !ativas[id]
    setAtivas((a) => ({ ...a, [id]: novo }))
    aplicar(id, novo)
    try {
      localStorage.setItem('painel-leitura', JSON.stringify({ ...ativas, [id]: novo }))
    } catch {
      /* sem armazenamento */
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {aberto && (
        <div className="w-56 rounded-2xl bg-white p-4 text-stone-900 shadow-2xl ring-1 ring-stone-200" role="dialog" aria-label="Opções de leitura">
          <p className="text-sm font-extrabold">Leitura confortável</p>
          <div className="mt-2 space-y-2">
            {OPCOES_LEITURA.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => alternar(o.id)}
                aria-pressed={!!ativas[o.id]}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold ring-1 transition-all ${ativas[o.id] ? 'bg-emerald-600 text-white ring-emerald-600' : 'bg-stone-50 text-stone-700 ring-stone-200 hover:ring-emerald-300'}`}
              >
                <span>
                  <span className="mr-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/10 text-xs font-extrabold" aria-hidden="true">
                    {o.rotulo}
                  </span>
                  {o.descricao}
                </span>
                <span aria-hidden="true">{ativas[o.id] ? '✓' : ''}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-label="Abrir opções de leitura"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 text-xl text-white shadow-xl ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1"
      >
        <span aria-hidden="true">◐</span>
      </button>
    </div>
  )
}
