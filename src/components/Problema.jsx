import { stats } from '../data.js'
import Contador from './Contador.jsx'
import Reveal from './Reveal.jsx'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Figura from './Figura.jsx'

const icones = {
  globe: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" /></svg>
  ),
  recycle: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19a4 4 0 0 1-4-4c0-3 3-5 6-7l-2-2" /><path d="M17 5a4 4 0 0 1 4 4c0 3-3 5-6 7l2 2" /><path d="M9 3h6l1 3M15 21H9l-1-3" /></svg>
  ),
  trend: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
  ),
  pin: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
  )
}

export default function Problema() {
  return (
    <section id="problema" aria-labelledby="titulo-problema" className="bg-emerald-50/60 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <span aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 select-none text-[9rem] lg:text-[15rem] font-extrabold leading-none text-emerald-900/[0.06]">
          62
        </span>
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div>
            <CabecalhoSecao
              id="titulo-problema"
              kicker="01 · O problema"
              titulo={<>O resíduo que <span className="marca-lima">mais cresce</span> no mundo</>}
            />
            <p className="mt-4 text-lg lg:text-xl text-stone-600 leading-relaxed">
              Celulares, notebooks, TVs, geladeiras, lâmpadas e pilhas: quando descartados sem
              controle, liberam <strong>chumbo, mercúrio e cádmio</strong> no solo e na água — e
              desperdiçam metais valiosos. O impacto é ambiental, climático e social.
            </p>
          </div>
          <Figura
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
            alt="Notebook e dispositivos eletrônicos sobre uma mesa"
            legenda="Foto: Unsplash. O consumo acelerado de eletrônicos alimenta o descarte."
            aspect="aspect-[16/10]"
            rounded="rounded-3xl"
            imgClassName="duotone moldura-dupla shadow-lg ring-1 ring-stone-200 transition-all duration-500 ease-out hover:shadow-xl hover:scale-[1.01]"
          />
        </div>

        <div className="mt-10 lg:mt-14 grid gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="h-full">
            <article
              className="h-full rounded-2xl bg-emerald-950 p-6 lg:p-8 shadow-md ring-1 ring-emerald-900 transition-shadow duration-300 ease-out hover:shadow-xl hover:ring-lime-300/50"
            >
              <span className="inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-lime-300/15 text-lime-300" aria-hidden="true">
                {icones[s.icon]}
              </span>
              <p className="mt-4 text-3xl lg:text-4xl font-extrabold text-white">
                <Contador
                  para={s.numero}
                  decimais={s.decimais}
                  prefixo={s.prefixo}
                  sufixo={s.sufixo}
                />
              </p>
              <h3 className="mt-1 font-semibold lg:text-lg text-emerald-50">{s.label}</h3>
              <p className="mt-2 text-sm lg:text-base text-emerald-50/70 leading-relaxed">{s.detail}</p>
            </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-gradient-to-br from-emerald-950 to-teal-900 p-6 sm:p-8 lg:p-10 text-white transition-all duration-300 ease-out hover:shadow-lg">
            <h3 className="text-lg lg:text-2xl font-bold">Impacto ambiental e climático</h3>
            <ul className="mt-4 space-y-3 text-sm sm:text-base lg:text-lg text-emerald-50/90 leading-relaxed lista-lima">
              <li>Metais pesados contaminam solo, lençóis freáticos e rios por décadas.</li>
              <li>Refrigeradores descartados liberam gases com potencial de aquecimento milhares de vezes maior que o CO₂.</li>
              <li>US$ 91 bilhões em metais ficam “enterrados” no lixo a cada ano em vez de voltar à indústria.</li>
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 ring-1 ring-stone-200/80 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/15">
            <h3 className="text-lg lg:text-2xl font-bold text-stone-900">Impacto social e de saúde</h3>
            <ul className="mt-4 space-y-3 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed lista-lima">
              <li>Milhões de pessoas — incluindo crianças — manipulam e-lixo informalmente, expostas a fumaça tóxica e queimaduras.</li>
              <li>Queima de cabos e placas libera dioxinas ligadas a problemas respiratórios e neurológicos.</li>
              <li>A reciclagem formal gera emprego verde, renda e protege catadores com equipamentos e direitos.</li>
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-stone-200/80">
          <h3 className="text-lg lg:text-xl font-bold text-stone-900">Ficha dos vilões: o que cada metal causa à saúde</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ['Chumbo', 'Ataca cérebro e sistema nervoso; crianças são as mais vulneráveis.'],
              ['Mercúrio', 'Prejudica rins e cérebro; vem de pilhas, lâmpadas e telas.'],
              ['Cádmio', 'Atinge pulmões e rins; liberado na queima de placas e cabos.']
            ].map(([metal, efeito]) => (
              <li key={metal} className="rounded-xl bg-rose-50/70 px-4 py-3 ring-1 ring-rose-200/60">
                <p className="font-bold text-rose-800">{metal}</p>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">{efeito}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-stone-500">Com base na ficha informativa sobre e-lixo da OMS.</p>
        </div>
      </div>
    </section>
  )
}
