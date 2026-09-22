import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'

const brasil = [
  { valor: '2,4 milhões', texto: 'de toneladas por ano — 2.º lugar nas Américas (atrás dos EUA) e cerca de 5.º no mundo.' },
  { valor: '~3%', texto: 'é reciclado de fato. Mais de 80% dos brasileiros acumulam e-lixo em casa (Green Eletron, 2023).' },
  { valor: '11 mil+', texto: 'pontos de coleta (PEVs) da Green Eletron em 2025 — e 7,3 mil toneladas coletadas em 2024.' },
  { valor: '230 mil t', texto: 'coletadas pela ABREE entre 2021 e 2025 — o peso de mais de 200 Cristos Redentores.' }
]

const cop = [
  { ano: '2015 · COP21 Paris', texto: 'Acordo de Paris: limitar o aquecimento a bem abaixo de 2°C, com esforço por 1,5°C.' },
  { ano: '2021 · COP26 Glasgow', texto: 'Pacto de Glasgow: redução do carvão e revisão das metas climáticas.' },
  { ano: '2022 · COP27 Sharm el-Sheikh', texto: 'Criação do fundo de perdas e danos para países vulneráveis.' },
  { ano: '2023 · COP28 Dubai', texto: 'Primeiro Balanço Global e acordo pela transição dos combustíveis fósseis.' },
  { ano: '2024 · COP29 Baku', texto: 'Nova meta de financiamento: US$ 300 bilhões por ano até 2035.' },
  { ano: '2025 · COP30 Belém', texto: 'Primeira COP na Amazônia: florestas, metas nacionais e implementação no centro.' }
]

export default function Brasil() {
  return (
    <section id="brasil" aria-labelledby="titulo-brasil" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-brasil"
          kicker="Brasil e COP"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="O Brasil no mapa do e-lixo"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          O país tem uma das leis mais avançadas da América Latina (PNRS + Decreto 10.240/2020) — e foi sede da COP 30.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brasil.map((b, i) => (
            <Reveal key={b.valor} delay={i * 90} className="h-full">
              <article className="h-full rounded-2xl bg-white p-6 ring-1 ring-stone-200/70 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/15">
                <p className="text-3xl lg:text-4xl font-extrabold text-emerald-700">{b.valor}</p>
                <p className="mt-2 text-sm lg:text-base text-stone-600 leading-relaxed">{b.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-12 text-xl lg:text-2xl font-bold text-stone-900">Da COP21 à COP30 em 6 marcos</h3>
        <ol className="mt-5 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
          {cop.map((c, i) => (
            <Reveal as="li" key={c.ano} delay={i * 70} className="min-w-[16rem] snap-start sm:min-w-[20rem] lg:min-w-0 list-none">
              <article className="h-full rounded-2xl bg-emerald-950 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-lime-200">{c.ano}</p>
                <p className="mt-2 text-emerald-50/90 leading-relaxed">{c.texto}</p>
              </article>
            </Reveal>
          ))}
        </ol>
        <p className="mt-4 text-xs text-stone-500">
          Fontes: ONU/UNFCCC, Global E-waste Monitor 2024, ABREE (balanço 2021–2025), Green Eletron e PNRS (Lei 12.305/2010).
        </p>
      </div>
    </section>
  )
}
