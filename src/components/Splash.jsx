import { useEffect, useState } from 'react'

export default function Splash() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    try {
      if (sessionStorage.getItem('splash-visto')) return
    } catch {
      /* sem armazenamento */
    }
    setVisivel(true)
    const id = setTimeout(() => {
      setVisivel(false)
      try {
        sessionStorage.setItem('splash-visto', '1')
      } catch {
        /* sem armazenamento */
      }
    }, 1300)
    return () => clearTimeout(id)
  }, [])

  if (!visivel) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-emerald-950 animate-[splash-saida_0.4s_ease_0.9s_forwards]"
    >
      <div className="text-center">
        <p className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8h10l-.9 9.1a2 2 0 0 1-2 1.9H9.9a2 2 0 0 1-2-1.9L7 8z" /><path d="M4 8h16M10 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" /></svg>
        </p>
        <p className="mt-3 text-2xl font-extrabold tracking-tight text-white">E-lixo Zero</p>
        <p className="text-sm font-medium text-lime-200">COP 30 · 1.º ano K</p>
      </div>
    </div>
  )
}
