/** Selo circular giratório com texto em órbita. */
export default function SeloGiratorio({ texto = 'E-LIXO ZERO • COP 30 • ', className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute z-10 ${className}`}>
      <div className="girar-lento relative flex h-28 w-28 items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <path id="orbita-selo" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-lime-200 text-[10px] font-bold uppercase tracking-[2px]">
            <textPath href="#orbita-selo">{texto.repeat(2)}</textPath>
          </text>
        </svg>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-lg font-bold text-emerald-950">
          ♻
        </span>
      </div>
    </div>
  )
}
