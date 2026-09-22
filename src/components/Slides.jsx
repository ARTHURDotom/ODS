import { useEffect, useState } from 'react'

const SLIDES = [
  { titulo: 'E-lixo Zero', texto: 'O lixo eletrônico é o resíduo que mais cresce no mundo: 62 milhões de toneladas por ano.' },
  { titulo: 'O problema', texto: 'Só 22% é reciclado. O resto polui solo, água e clima — e desperdiça US$ 91 bi em metais.' },
  { titulo: 'Os ODS', texto: 'ODS 12, 13, 14 e 15 conectam consumo, clima, água e terra. A COP 30 foi em Belém.' },
  { titulo: 'A solução', texto: 'Apague os dados, leve ao PEV, prefira reparar. Logística reversa é lei.' },
  { titulo: 'Teste-se', texto: 'Quiz, jogo da memória e certificado Guardião E-lixo Zero esperam por você.' },
  { titulo: 'A turma', texto: 'Feito pelo 1.º ano K do Colégio Cruzeiro do Sul, São Miguel. Obrigado!' }
]

export default function Slides() {
  const [aberto, setAberto] = useState(false)
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    function onApresentar() {
      setIndice(0)
      setAberto(true)
    }
    window.addEventListener('abrir-slides', onApresentar)
    return () => window.removeEventListener('abrir-slides', onApresentar)
  }, [])

  useEffect(() => {
    if (!aberto) return
    function onKey(e) {
      if (e.key === 'Escape') setAberto(false)
      if (e.key === 'ArrowRight') setIndice((i) => Math.min(i + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft') setIndice((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto])

  if (!aberto) return null
  const slide = SLIDES[indice]

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-emerald-950 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`Slide ${indice + 1} de ${SLIDES.length}`}>
      <button
        type="button"
        onClick={() => setAberto(false)}
        aria-label="Fechar apresentação (Esc)"
        className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 font-bold text-white hover:bg-white/20"
      >
        ✕
      </button>
      <div key={indice} className="w-full max-w-3xl text-center text-white">
        <p className="text-sm font-bold uppercase tracking-widest text-lime-200">
          {indice + 1} / {SLIDES.length}
        </p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">{slide.titulo}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg sm:text-2xl text-emerald-50/90 leading-relaxed">{slide.texto}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            disabled={indice === 0}
            onClick={() => setIndice((i) => i - 1)}
            className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:bg-white/10 disabled:opacity-40"
          >
            ← Anterior
          </button>
          <button
            type="button"
            disabled={indice === SLIDES.length - 1}
            onClick={() => setIndice((i) => i + 1)}
            className="rounded-full bg-lime-300 px-6 py-3 font-bold text-emerald-950 hover:bg-lime-200 disabled:opacity-40"
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  )
}
