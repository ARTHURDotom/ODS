import { useEffect, useRef, useState } from 'react'

/** Anima um número de 0 até o valor final ao entrar na tela. */
export default function Contador({
  para,
  decimais = 0,
  prefixo = '',
  sufixo = '',
  duracao = 1500,
  className = ''
}) {
  const ref = useRef(null)
  const [valor, setValor] = useState(0)
  const [iniciou, setIniciou] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValor(para)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIniciou(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [para])

  useEffect(() => {
    if (!iniciou) return
    let raf
    const t0 = performance.now()
    function passo(t) {
      const p = Math.min((t - t0) / duracao, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValor(para * eased)
      if (p < 1) raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [iniciou, para, duracao])

  const texto = valor.toLocaleString('pt-BR', {
    minimumFractionDigits: decimais,
    maximumFractionDigits: decimais
  })

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {texto}
      {sufixo}
    </span>
  )
}
