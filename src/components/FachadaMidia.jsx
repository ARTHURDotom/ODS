import { useState } from 'react'

export default function FachadaMidia({ titulo, capa, iframeTitle, src, className = '' }) {
  const [carregado, setCarregado] = useState(false)

  if (carregado) {
    return (
      <iframe
        title={iframeTitle}
        src={src}
        className={className}
        loading="lazy"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setCarregado(true)}
      aria-label={`Carregar: ${titulo}`}
      className={`group relative block w-full overflow-hidden ${className}`}
    >
      {capa}
      <span className="absolute inset-0 flex items-center justify-center bg-emerald-950/40 transition-colors group-hover:bg-emerald-950/25">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-300 text-2xl text-emerald-950 shadow-xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          ▶
        </span>
      </span>
      <span className="absolute bottom-3 left-3 rounded-full bg-emerald-950/85 px-3 py-1 text-xs font-bold text-white">
        Toque para carregar: {titulo}
      </span>
    </button>
  )
}
