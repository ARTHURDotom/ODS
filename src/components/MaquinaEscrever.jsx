import { useEffect, useState } from 'react'

const FRASES = [
  '62 milhões de toneladas por ano.',
  'Só 22% é reciclado.',
  'Belém sediou a COP 30.'
]

export default function MaquinaEscrever() {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTexto(FRASES[0])
      return
    }
    let frase = 0
    let letra = 0
    let apagando = false
    let vivo = true
    let id
    function passo() {
      if (!vivo) return
      const atual = FRASES[frase]
      if (!apagando) {
        letra++
        setTexto(atual.slice(0, letra))
        if (letra >= atual.length) {
          apagando = true
          id = setTimeout(passo, 2200)
          return
        }
        id = setTimeout(passo, 55)
      } else {
        letra--
        setTexto(atual.slice(0, letra))
        if (letra <= 0) {
          apagando = false
          frase = (frase + 1) % FRASES.length
        }
        id = setTimeout(passo, 28)
      }
    }
    id = setTimeout(passo, 600)
    return () => {
      vivo = false
      clearTimeout(id)
    }
  }, [])

  return (
    <p className="mt-4 flex h-7 items-center gap-2 text-base lg:text-lg font-semibold text-lime-200" aria-hidden="true">
      <span className="inline-block h-4 w-0.5 animate-pulse bg-lime-300" />
      {texto}
      <span className="sr-only">62 milhões de toneladas por ano. Só 22% é reciclado. Belém sediou a COP 30.</span>
    </p>
  )
}
