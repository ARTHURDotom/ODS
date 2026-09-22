import { useEffect, useState } from 'react'

const SECOES = [
  ['inicio', 'Início'],
  ['problema', 'Problema'],
  ['ods', 'ODS'],
  ['solucoes', 'Soluções'],
  ['quiz', 'Quiz'],
  ['participe', 'Participe'],
  ['quem-fez', 'Turma']
]

export default function DotsNavegacao() {
  const [ativa, setAtiva] = useState('inicio')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setAtiva(e.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    SECOES.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      aria-label="Navegação por seções"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 xl:flex"
    >
      {SECOES.map(([id, rotulo]) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Ir para ${rotulo}`}
          aria-current={ativa === id ? 'true' : undefined}
          title={rotulo}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            ativa === id
              ? 'scale-125 bg-emerald-600'
              : 'bg-stone-400/60 hover:scale-110 hover:bg-emerald-500'
          }`}
        />
      ))}
    </nav>
  )
}
