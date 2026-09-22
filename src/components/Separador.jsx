/** Separador minimalista de três brilhos. */
export default function Separador({ className = '' }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 text-emerald-600 ${className}`}>
      <span className="h-px w-12 bg-emerald-600/30" />
      <span className="text-sm">✦ ✦ ✦</span>
      <span className="h-px w-12 bg-emerald-600/30" />
    </div>
  )
}
