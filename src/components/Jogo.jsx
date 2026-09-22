import { useRef } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import BotaoPrimario from './BotaoPrimario.jsx'
import FachadaMidia from './FachadaMidia.jsx'
import { srcSetUnsplash } from '../imagens.js'

// Jogo da turma (hospedado fora do site).
const GAME_URL = 'https://bespoke-entremet-055b4e.netlify.app/'

export default function Jogo() {
  const pronto = GAME_URL.trim().length > 0
  // Link genérico (não-Scratch): incorpora a URL direta.
  // Se for um link do Scratch (scratch.mit.edu/projects/...), usa o formato /embed.
  const embedUrl = !pronto
    ? ''
    : (() => {
        const trimmedUrl = GAME_URL.trim()
        try {
          const parsedUrl = new URL(trimmedUrl)
          const isScratchHost = parsedUrl.hostname.toLowerCase() === 'scratch.mit.edu'
          return isScratchHost ? trimmedUrl.replace(/\/$/, '') + '/embed' : trimmedUrl
        } catch {
          return ''
        }
      })()

  const molduraRef = useRef(null)

  function telaCheia() {
    const el = molduraRef.current
    if (!el) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (el.requestFullscreen) {
      el.requestFullscreen()
    }
  }

  return (
    <section
      id="jogo"
      aria-labelledby="titulo-jogo"
      className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 text-white ring-1 ring-emerald-900/20">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
            srcSet={srcSetUnsplash('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop')}
            sizes="100vw"
            alt=""
            aria-hidden="true"
            decoding="async"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-950/80 to-teal-950/85"
          />
          <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <CabecalhoSecao
                id="titulo-jogo"
                kicker="Bônus · Jogo interativo"
                kickerClassName="text-sm font-semibold uppercase tracking-widest text-lime-200"
                escuro
                titulo="Aprenda jogando: missão E-lixo Zero"
              />
              <p className="mt-4 text-emerald-50/90 leading-relaxed">
                Um jogo feito pela turma do 1.º ano K para testar seus conhecimentos sobre
                descarte correto de eletrônicos e os ODS da COP 30.
              </p>

              {pronto ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  <BotaoPrimario
                    href={GAME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pulso-suave px-7 py-3.5"
                  >
                    Jogar agora{' '}
                  <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  </BotaoPrimario>
                  <button
                    type="button"
                    onClick={telaCheia}
                    className="rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
                  >
                    Tela cheia
                  </button>
                </div>
              ) : (
                <p
                  role="status"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-emerald-50"
                >
                  <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
                  Em breve: o jogo da turma será publicado aqui
                </p>
              )}
            </div>

            <div
              id="moldura-jogo"
              ref={molduraRef}
              aria-hidden={!pronto}
              className="flex aspect-video items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur"
            >
              {pronto ? (
                <FachadaMidia
                  titulo="Jogo da turma"
                  capa={
                    <img
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover"
                    />
                  }
                  iframeTitle="Jogo E-lixo Zero da turma do 1.º ano K"
                  src={embedUrl}
                  className="h-full w-full rounded-3xl border-0"
                />
              ) : (
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-50/40">
                  <rect x="2" y="6" width="13" height="12" rx="2" />
                  <path d="M15 10l7-3v10l-7-3" />
                  <path d="M7 12h4M9 10v4" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
