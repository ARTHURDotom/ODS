export default function QuemFez() {
  return (
    <section
      id="quem-fez"
      aria-labelledby="titulo-quem-fez"
      className="bg-emerald-50/60 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid items-center gap-10 lg:grid-cols-2">
        <figure className="order-1">
          <img
            src="./turma-1k.jpg"
            alt="Foto da turma do 1.º ano K do Ensino Médio do Colégio Cruzeiro do Sul, São Miguel, reunida na escola"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg ring-1 ring-stone-200/70 transition-all duration-500 ease-out hover:shadow-xl hover:scale-[1.01]"
          />
          <figcaption className="mt-2 text-xs text-stone-500">
            Turma do 1.º ano K (2026) · Colégio Cruzeiro do Sul — São Miguel.
          </figcaption>
        </figure>
        <div className="order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            05 · Quem fez
          </p>
          <h2
            id="titulo-quem-fez"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
          >
            Um trabalho feito pela nossa turma
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Esta landing page é um <strong>trabalho escolar</strong> sobre lixo eletrônico e
            Objetivos de Desenvolvimento Sustentável, feito pelos{' '}
            <strong>alunos do 1.º ano K do Ensino Médio</strong> do{' '}
            <strong>Colégio Cruzeiro do Sul, São Miguel</strong>.
          </p>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ['Turma', '1.º ano K · 2026'],
              ['Nível', 'Ensino Médio'],
              ['Escola', 'Cruzeiro do Sul · São Miguel']
            ].map(([termo, valor]) => (
              <div
                key={termo}
                className="rounded-2xl bg-white px-4 py-3 ring-1 ring-stone-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">{termo}</dt>
                <dd className="mt-1 font-bold text-stone-900">{valor}</dd>
              </div>
            ))}
          </dl>

          <address className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-stone-200/70 not-italic transition-all duration-300 ease-out hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Onde fica o colégio
            </p>
            <p className="mt-1 font-bold text-stone-900">
              Av. Dr. Ussiel Cirilo, 213 — Vila Jacuí
            </p>
            <p className="text-sm text-stone-600">São Paulo - SP · CEP 08060-070</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Ussiel+Cirilo,+213+-+Vila+Jacu%C3%AD,+S%C3%A3o+Paulo+-+SP,+08060-070"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
            >
              Abrir no Google Maps <span aria-hidden="true">↗</span>
            </a>
          </address>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://www.instagram.com/1k.cruzeirodosul/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
              Instagram da sala
            </a>
            <a
              href="https://www.instagram.com/colegiocruzeirodosul/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 active:translate-y-0"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
              Instagram do colégio
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10">
        <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-stone-200/70">
          <iframe
            title="Mapa: Colégio Cruzeiro do Sul — Av. Dr. Ussiel Cirilo, 213, Vila Jacuí, São Paulo"
            src="https://www.google.com/maps?q=Av.+Dr.+Ussiel+Cirilo,+213+-+Vila+Jacu%C3%AD,+S%C3%A3o+Paulo+-+SP,+08060-070&output=embed"
            className="h-72 sm:h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-stone-900">A gente explica nesse vídeo</h3>
          <p className="mt-2 text-stone-600 leading-relaxed">
            Gravamos um vídeo explicativo sobre o nosso trabalho: o que é o lixo eletrônico,
            como ele afeta o planeta e o que dá pra fazer a respeito. Aperta o play que
            em 1 minutinho você entende tudo!
          </p>
        </div>
        <figure className="mx-auto w-full max-w-xs sm:max-w-sm">
          <video
            src="./videos/turma.mp4"
            controls
            preload="none"
            playsInline
            className="aspect-[9/16] w-full rounded-[2rem] bg-emerald-950 object-cover shadow-lg ring-1 ring-stone-200/70"
          >
            Seu navegador não suporta a reprodução de vídeos.
          </video>
          <figcaption className="mt-2 text-xs text-stone-500">
            Vídeo da turma · 1.º ano K (2026) · Colégio Cruzeiro do Sul — São Miguel.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
