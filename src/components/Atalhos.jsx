import { useEffect, useState } from 'react'

const SECOES = [
  'inicio',
  'problema',
  'jornada',
  'numeros',
  'ods',
  'mitos',
  'brasil',
  'solucoes',
  'calculadora',
  'jogo',
  'memoria',
  'quiz',
  'enquete',
  'participe',
  'checklist',
  'quem-fez',
  'faq',
  'sobre'
]

const AJUDA = [
  ['1 – 9', 'Pular para as primeiras seções'],
  ['T', 'Ir ao topo da página'],
  ['F', 'Ir ao final da página'],
  ['?', 'Abrir/fechar esta ajuda']
]

export default function Atalhos() {
  const [ajuda, setAjuda] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (/^(input|textarea|select)$/i.test(document.activeElement?.tagName || '')) return
      if (e.key >= '1' && e.key <= '9') {
        const id = SECOES[Number(e.key) - 1]
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (e.key.toLowerCase() === 't') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (e.key.toLowerCase() === 'f') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      } else if (e.key === '?') {
        setAjuda((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setAjuda(true)}
        aria-label="Ver atalhos de teclado (tecla ?)"
        title="Atalhos de teclado (?)"
        className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full bg-emerald-950/90 px-4 py-1.5 text-xs font-semibold text-emerald-50 backdrop-blur transition-opacity hover:text-white lg:block"
      >
        Teclas 1–9 navegam · ? ajuda
      </button>
      {ajuda && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-emerald-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Atalhos de teclado"
          onClick={() => setAjuda(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-6 text-stone-900"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-extrabold">Atalhos de teclado</p>
            <ul className="mt-3 space-y-2 text-sm">
              {AJUDA.map(([tecla, acao]) => (
                <li key={tecla} className="flex items-center gap-3">
                  <kbd className="rounded-md bg-stone-100 px-2 py-1 font-mono font-bold ring-1 ring-stone-200">
                    {tecla}
                  </kbd>
                  <span className="text-stone-600">{acao}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setAjuda(false)}
              className="mt-4 w-full rounded-full bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
