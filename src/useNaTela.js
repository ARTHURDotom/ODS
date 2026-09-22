import { useEffect, useRef, useState } from 'react'

/** Retorna [ref, visivel]: visivel vira true quando o elemento entra na tela (uma vez). */
export default function useNaTela({ threshold = 0.4, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return [ref, visivel]
}
