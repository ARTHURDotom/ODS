import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'

const ANTES = {
  src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
  alt: 'Placas de circuito de eletrônicos descartados',
  legenda: 'Sem reciclagem: metais valiosos viram poluição'
}
const DEPOIS = {
  src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
  alt: 'Floresta preservada com raios de sol',
  legenda: 'Com reciclagem: menos mineração, mais floresta em pé'
}

export default function Comparador() {
  const [pos, setPos] = useState(50)
  return (
    <section id="comparador" aria-labelledby="titulo-comparador" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-comparador"
          kicker="Arraste e compare"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Dois futuros para o mesmo aparelho"
        />
        <div className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] ring-1 ring-stone-200/70 select-none">
          <img
            src={DEPOIS.src}
            alt={DEPOIS.alt}
            loading="lazy"
            decoding="async"
            draggable="false"
            className="aspect-[16/9] w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
            aria-hidden="true"
          >
            <img
              src={ANTES.src}
              alt=""
              loading="lazy"
              decoding="async"
              draggable="false"
              className="aspect-[16/9] h-full max-w-none object-cover"
              style={{ width: 'calc(100vw - 2rem)', maxWidth: '56rem' }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-1 bg-white shadow-lg"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1.5 text-sm font-extrabold text-emerald-800 shadow-lg">
              ↔
            </span>
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {ANTES.legenda}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {DEPOIS.legenda}
          </span>
          <label htmlFor="comparador-range" className="sr-only">Comparar os dois futuros</label>
          <input
            id="comparador-range"
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}
