import { useEffect, useState } from 'react'

const links = [
  { id: 'problema', href: '#problema', label: 'O problema' },
  { id: 'ods', href: '#ods', label: 'ODS conectados' },
  { id: 'solucoes', href: '#solucoes', label: 'Soluções' },
  { id: 'jogo', href: '#jogo', label: 'Jogo' },
  { id: 'participe', href: '#participe', label: 'Participe' }
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [ativa, setAtiva] = useState('inicio')
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const ids = ['inicio', ...links.map((l) => l.id)]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtiva(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    function onScroll() {
      setRolado(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b border-white/10 transition-all duration-300 ${rolado ? 'bg-emerald-950 shadow-xl shadow-emerald-950/30' : 'bg-emerald-950/90'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 text-white font-extrabold tracking-tight">
          <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8h10l-.9 9.1a2 2 0 0 1-2 1.9H9.9a2 2 0 0 1-2-1.9L7 8z" /><path d="M4 8h16M10 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" /></svg>
          </span>
          <span>
            E-lixo Zero
            <span className="ml-2 hidden sm:inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-emerald-100 align-middle">
              COP 30 · Belém
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-emerald-50/80">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={ativa === l.id ? 'page' : undefined}
                  className={`link-crescente transition-colors duration-300 ease-out hover:text-white ${ativa === l.id ? 'text-white font-semibold' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#participe"
                className="rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white shadow transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg active:translate-y-0"
              >
                Participe da solução
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-white transition-colors duration-300 hover:bg-white/10"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>

      {aberto && (
        <nav id="menu-mobile" aria-label="Menu móvel" className="md:hidden border-t border-white/10 px-4 py-3">
          <ul className="space-y-1 text-emerald-50 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={ativa === l.id ? 'page' : undefined}
                  onClick={() => setAberto(false)}
                  className={`block rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-white/10 ${ativa === l.id ? 'bg-white/10 text-white' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#participe"
                onClick={() => setAberto(false)}
                className="mt-1 block rounded-xl bg-emerald-600 px-3 py-2.5 text-center font-semibold text-white transition-colors duration-300 hover:bg-emerald-500"
              >
                Participe da solução
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
