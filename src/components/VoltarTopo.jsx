import { useEffect, useState } from 'react'

export default function VoltarTopo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisivel(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo da página"
      tabIndex={visivel ? 0 : -1}
      className={`no-print fixed bottom-5 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-950/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-emerald-500 ${visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
    </a>
  )
}
