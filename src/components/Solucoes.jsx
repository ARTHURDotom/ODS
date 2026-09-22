import { passosDescarte, praticas } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Solucoes() {
  return (
    <section
      id="solucoes"
      aria-labelledby="titulo-solucoes"
      className="grain relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* brilhos decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm lg:text-base font-semibold uppercase tracking-widest text-lime-200">03 · Soluções e ações</p>
        <h2 id="titulo-solucoes" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          O que você pode fazer — hoje
        </h2>
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-emerald-50/85 leading-relaxed">
          A boa notícia: existe solução, e ela é simples. Reparar, devolver e reciclar já reduz
          poluição, emissões e extração de recursos. Sem alarmismo — com atitude.
        </p>

        <figure className="relative mt-10 overflow-hidden rounded-3xl ring-1 ring-white/20">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
            alt="Trilha em meio à floresta amazônica com raios de sol entre as árvores"
            loading="lazy"
            className="h-60 sm:h-72 w-full object-cover transition-all duration-500 ease-out hover:scale-[1.02]"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-emerald-950/80 px-4 py-1.5 text-xs font-medium text-emerald-50 backdrop-blur">
            Foto: Unsplash · Proteger a Amazônia começa nas nossas escolhas de consumo
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold">Como descartar eletrônicos corretamente</h3>
            <ol className="mt-5 space-y-4">
              {passosDescarte.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.n}
                  delay={i * 90}
                  className="flex gap-4 rounded-2xl bg-white p-5 lg:p-6 ring-1 ring-white/10 transition-shadow duration-300 ease-out hover:shadow-xl hover:ring-lime-300/60"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white"
                  >
                    {p.n}
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900">{p.titulo}</h4>
                    <p className="mt-1 text-stone-600 leading-relaxed">{p.texto}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold">Práticas recomendadas</h3>
              <ul className="mt-5 grid gap-4">
                {praticas.map((p, i) => (
                  <Reveal
                    as="li"
                    key={p.titulo}
                    delay={i * 90}
                    className="rounded-2xl bg-white p-5 lg:p-6 ring-1 ring-white/10 flex gap-3 transition-shadow duration-300 ease-out hover:shadow-xl hover:ring-lime-300/60"
                  >
                    <svg aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <div>
                      <h4 className="font-bold text-stone-900">{p.titulo}</h4>
                      <p className="mt-1 text-stone-600 leading-relaxed">{p.texto}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur transition-all duration-300 ease-out hover:bg-white/15" aria-labelledby="titulo-cop">
              <h3 id="titulo-cop" className="font-bold text-lg lg:text-xl text-lime-200">Iniciativas em destaque na COP 30</h3>
              <ul className="mt-3 space-y-2 text-sm sm:text-base lg:text-lg text-emerald-50/90 leading-relaxed list-disc pl-5">
                <li className="break-words"><strong>Logística reversa obrigatória:</strong> fabricantes devem coletar eletroeletrônicos pós-consumo (Decreto 10.240/2020).</li>
                <li><strong>Pontos de entrega voluntária (PEVs):</strong> redes da ABREE e Green Eletron em lojas e assistências.</li>
                <li><strong>Economia circular e emprego verde:</strong> cooperativas e recicladores certificados no centro da transição justa.</li>
                <li><strong>Meta global:</strong> ampliar a coleta formal para frear o avanço rumo às 82 milhões de toneladas em 2030.</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
