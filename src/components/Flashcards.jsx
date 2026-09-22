import { useState } from 'react'
import { TERMOS } from './Sobre.jsx'

export default function Flashcards() {
  const [indice, setIndice] = useState(0)
  const [virada, setVirada] = useState(false)
  const [ordem, setOrdem] = useState(TERMOS.map((_, i) => i))
  const carta = TERMOS[ordem[indice % ordem.length]]

  function proxima(direcao) {
    setVirada(false)
    setIndice((i) => (i + direcao + ordem.length) % ordem.length)
  }

  function embaralhar() {
    const a = [...ordem]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    setOrdem(a)
    setIndice(0)
    setVirada(false)
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
      <h3 className="text-xl font-bold">Flashcards de revisão</h3>
      <p className="mt-1 text-sm text-emerald-50/80" aria-live="polite">
        Carta {(indice % ordem.length) + 1} de {ordem.length} — toque para virar
      </p>
      <button
        type="button"
        onClick={() => setVirada((v) => !v)}
        aria-label={virada ? `Significado: ${carta.significado}` : `Termo: ${carta.termo}. Toque para ver o significado.`}
        className="mx-auto mt-4 block min-h-44 w-full max-w-md [perspective:800px]"
      >
        <span
          className={`relative flex min-h-44 items-center justify-center rounded-2xl bg-white p-6 text-stone-900 shadow-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] ${virada ? '[transform:rotateY(180deg)]' : ''}`}
        >
          <span className="block [backface-visibility:hidden]">
            <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700">Termo</span>
            <span className="mt-1 block text-2xl font-extrabold">{carta.termo}</span>
          </span>
          <span className="absolute inset-0 flex-col items-center justify-center rounded-2xl bg-emerald-50 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex">
            <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700">Significado</span>
            <span className="mt-1 block leading-relaxed">{carta.significado}</span>
          </span>
        </span>
      </button>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => proxima(-1)}
          className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={() => {
            try {
              const fala = new SpeechSynthesisUtterance(`${carta.termo}. ${carta.significado}`)
              fala.lang = 'pt-BR'
              window.speechSynthesis.cancel()
              window.speechSynthesis.speak(fala)
            } catch {
              /* voz indisponível */
            }
          }}
          aria-label={`Ouvir ${carta.termo} em voz alta`}
          className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
        >
          🔊 Ouvir
        </button>
        <button
          type="button"
          onClick={embaralhar}
          className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
        >
          Embaralhar
        </button>
        <button
          type="button"
          onClick={() => proxima(1)}
          className="rounded-full bg-lime-300 px-5 py-2.5 font-semibold text-emerald-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200"
        >
          Próxima →
        </button>
      </div>
    </div>
  )
}
