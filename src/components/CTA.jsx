const beneficios = [
  'Guia em PDF: onde descartar cada tipo de eletrônico',
  'Mapa de PEVs e campanhas de coleta',
  'Compromissos e notícias da COP 30'
]

export default function CTA() {
  return (
    <section
      id="participe"
      aria-labelledby="titulo-participe"
      className="grain relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* brilhos decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm lg:text-base font-semibold uppercase tracking-widest text-lime-200">
            04 · Chamada para ação
          </p>
          <h2
            id="titulo-participe"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Entre para o movimento E-lixo Zero
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-emerald-50/85 leading-relaxed">
            Receba o <strong className="text-white">guia gratuito de descarte correto</strong> e
            acompanhe os compromissos da COP 30. Comece pelo passo mais simples: descarte no lugar certo.
          </p>
          <ul className="mt-6 space-y-2.5 text-emerald-50">
            {beneficios.map((t) => (
              <li key={t} className="flex gap-2.5 items-start">
                <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://abree.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex justify-center rounded-full bg-lime-300 px-7 py-3.5 lg:px-9 lg:py-4 font-semibold text-emerald-950 shadow-lg shadow-emerald-950/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl active:translate-y-0"
            >
              Encontrar ponto de coleta
            </a>
            <a
              href="#solucoes"
              className="inline-flex justify-center rounded-full border border-white/25 px-7 py-3.5 lg:px-9 lg:py-4 font-medium text-white backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              Como descartar
            </a>
          </div>
        </div>

        <figure>
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop"
            alt="Aerogeradores de energia eólica ao pôr do sol"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-emerald-950/50 ring-1 ring-white/20 transition-all duration-500 ease-out hover:scale-[1.01]"
          />
          <figcaption className="mt-2 text-xs lg:text-sm text-emerald-50/60">
            Foto: Unsplash. Transição energética e circularidade andam juntas.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
