import { useEffect, useRef } from 'react'

const CORES = { escuro: '#022c22', claro: '#eff6dc' }
const ESCURAS = new Set(['inicio', 'numeros', 'solucoes', 'participe'])

export default function ThemeColor() {
  const metaRef = useRef(null)

  useEffect(() => {
    metaRef.current = document.querySelector('meta[name="theme-color"]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && metaRef.current) {
            metaRef.current.setAttribute(
              'content',
              ESCURAS.has(e.target.id) ? CORES.escuro : CORES.claro
            )
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('main section[id]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
