import { ods } from '../data.js'

export default function ODS() {
  return (
    <section id="ods" aria-labelledby="titulo-ods" className="bg-[#eff6dc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">02 · ODS conectados</p>
        <h2 id="titulo-ods" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
          Um aparelho liga quatro Objetivos da ONU
        </h2>
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Os Objetivos de Desenvolvimento Sustentável são um pacto global até 2030. O lixo eletrônico
          atravessa pelo menos quatro deles — e a COP 30, na Amazônia, colocou a{' '}
          <strong>economia circular</strong> no centro do debate climático.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ods.map((o) => (
            <article
              key={o.numero}
              className={`rounded-2xl border p-6 sm:p-7 ${o.corFundo} ${o.borda} transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-extrabold text-white ${o.cor}`}
                  aria-hidden="true"
                >
                  {o.numero}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">ODS {o.numero}</p>
                  <h3 className="font-bold text-stone-900 leading-tight">{o.titulo}</h3>
                </div>
              </div>
              <p className="mt-4 text-stone-700 leading-relaxed">{o.descricao}</p>
              <p className={`mt-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium leading-relaxed ${o.corTexto}`}>
                → {o.conexao}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-teal-950 to-emerald-900 text-white transition-all duration-300 ease-out hover:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
              alt="Painéis de energia solar em campo aberto ao pôr do sol"
              loading="lazy"
              className="h-44 w-full object-cover sm:h-full sm:min-h-44 sm:w-64 sm:shrink-0"
            />
            <p className="px-6 py-6 sm:px-8 leading-relaxed text-emerald-50/90">
              <strong className="text-white">Por que a COP 30 importa?</strong> Realizada em Belém do
              Pará, foi a primeira COP na Amazônia — o bioma que regula o clima do planeta.
              Proteger florestas também significa reduzir extração mineral predatória e dar destino
              circular aos eletrônicos que já existem.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
