import { useEffect, useState } from 'react'

/** Alterna modo de alto contraste (A+): fonte maior, links sublinhados, texto escurecido. */
export default function ContrasteToggle({ className = '' }) {
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem('alto-contraste') === '1') setAtivo(true)
    } catch {
      /* sem armazenamento */
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('alto-contraste', ativo)
    try {
      localStorage.setItem('alto-contraste', ativo ? '1' : '0')
    } catch {
      /* sem armazenamento */
    }
  }, [ativo])

  return (
    <button
      type="button"
      onClick={() => setAtivo((v) => !v)}
      aria-pressed={ativo}
      title="Alternar alto contraste"
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 ${ativo ? 'border-lime-300 bg-lime-300 text-emerald-950' : 'border-white/20 bg-white/10 text-emerald-50 hover:bg-white/20 hover:text-white'} ${className}`}
    >
      <span aria-hidden="true" className="font-extrabold">A+</span>
      Alto contraste
    </button>
  )
}
