import { useEffect, useRef } from 'react'

export default function BarraProgresso() {
  const ref = useRef(null)

  useEffect(() => {
    let raf = 0
    function atualizar() {
      raf = 0
      const total = document.documentElement.scrollHeight - window.innerHeight
      const p = total > 0 ? Math.min(window.scrollY / total, 1) : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(atualizar)
    }
    atualizar()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ transform: 'scaleX(0)' }}
      className="no-print fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-lime-300"
    />
  )
}
