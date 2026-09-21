export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-hero"
      className="relative overflow-hidden bg-emerald-950 text-white"
    >
      {/* foto de fundo + véu em degradê */}
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-950/85 to-teal-950/70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-28 grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium text-emerald-50 backdrop-blur">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime-300" />
            COP 30 · Belém do Pará · ODS 12 · 13 · 14 · 15
          </p>
          <h1
            id="titulo-hero"
            className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Seu eletrônico velho não desaparece.{' '}
            <span className="text-lime-200">Ele pode virar solução.</span>
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-emerald-50/90 leading-relaxed max-w-xl">
            O mundo gera <strong className="text-white">62 milhões de toneladas</strong> de lixo
            eletrônico por ano — e recicla menos de um quarto. O{' '}
            <strong className="text-white">ODS 12 (Consumo e Produção Responsáveis)</strong> mostra
            o caminho: reparar, reutilizar, devolver e reciclar.
          </p>
          <ul aria-label="Três atitudes simples" className="mt-6 flex flex-wrap gap-2">
            {['1 · Reparar', '2 · Reutilizar', '3 · Reciclar'].map((t) => (
              <li
                key={t}
                className="rounded-full border border-lime-200/40 bg-lime-300/10 px-4 py-1.5 text-sm font-semibold text-lime-100"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#participe"
              className="inline-flex justify-center rounded-full bg-lime-300 px-7 py-3.5 lg:px-9 lg:py-4 lg:text-lg font-semibold text-emerald-950 shadow-lg shadow-emerald-950/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl active:translate-y-0"
            >
              Participe da solução
            </a>
            <a
              href="#problema"
              className="inline-flex justify-center rounded-full border border-white/25 px-7 py-3.5 lg:px-9 lg:py-4 lg:text-lg font-medium text-white backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              Ver os dados
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-lg text-center">
            {[
              ['62 milhões', 'de toneladas em 2022'],
              ['22%', 'reciclado'],
              ['82 milhões', 'de toneladas em 2030']
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-white/15 bg-white/10 px-2 py-3 lg:py-4 backdrop-blur transition-all duration-300 ease-out hover:bg-white/15"
              >
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl lg:text-3xl font-bold text-white">{v}</dd>
                <dd className="mt-1 text-xs lg:text-sm text-emerald-50/80">{l}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs lg:text-sm text-emerald-50/60">
            Fonte: Global E-waste Monitor 2024 (UNITAR / ITU). Veja referências no rodapé.
          </p>
        </div>

        {/* Visual — foto + cartão flutuante */}
        <figure className="relative">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
            alt="Contentores coloridos para coleta seletiva e reciclagem de resíduos"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-emerald-950/40 ring-1 ring-white/20"
          />
          <figcaption className="mt-3 text-xs lg:text-sm text-emerald-50/60">
            Foto: Unsplash. A coleta seletiva é o primeiro passo da economia circular.
          </figcaption>
          <div className="absolute bottom-5 left-5 right-5 sm:left-8 sm:right-auto sm:max-w-sm rounded-2xl bg-white/95 px-5 py-4 lg:px-6 lg:py-5 shadow-xl shadow-emerald-950/20 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1">
            <p className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Economia circular
            </p>
            <p className="mt-1 text-sm lg:text-base font-medium text-stone-700">
              1 tonelada de placas de celular contém até <strong>100× mais ouro</strong> que 1 tonelada de minério.
            </p>
          </div>
        </figure>
      </div>
    </section>
  )
}
