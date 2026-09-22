import { useEffect, useRef } from 'react'

export default function CursorPersonalizado() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    let x = -100
    let y = -100
    let tx = -100
    let ty = -100
    let raf = 0
    function onMove(e) {
      tx = e.clientX
      ty = e.clientY
    }
    function passo() {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      el.style.transform = `translate(${x - 14}px, ${y - 14}px)`
      raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[65] hidden h-7 w-7 rounded-full border-2 border-lime-300/80 [@media(hover:hover)]:block [@media(prefers-reduced-motion:reduce)]:hidden"
    />
  )
}
