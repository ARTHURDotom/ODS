import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'

const composicao = [
  { material: 'Metais', peso: '31 milhões de t', pct: 50, classe: 'from-emerald-400 to-teal-500' },
  { material: 'Plásticos', peso: '17 milhões de t', pct: 27, classe: 'from-sky-400 to-blue-500' },
  { material: 'Outros (vidro, minerais)', peso: '14 milhões de t', pct: 23, classe: 'from-amber-300 to-orange-400' }
]

const comparativos = [
  {
    valor: '1,55 milhão',
    texto: 'de caminhões de 40 toneladas — em fila, dariam a volta ao Equador. É o peso do e-lixo de 2022.'
  },
  {
    valor: '107 mil aviões',
    texto: 'gigantes (575 t cada) enfileirados de Nova York a Atenas. Mesmo peso, outra imagem.'
  },
  {
    valor: 'US$ 91 bilhões',
    texto: 'em metais embutidos (cobre, ouro, ferro). US$ 62 bilhões se perdem sem reciclagem.'
  }
]

const materiais = [
  { aparelho: 'Celular e notebook', contem: 'Ouro, cobre, cobalto e prata nas placas e baterias.' },
  { aparelho: 'Pilhas e baterias', contem: 'Zinco, manganês e lítio; modelos botão têm mercúrio.' },
  { aparelho: 'Lâmpadas fluorescentes', contem: 'Mercúrio — por isso nunca vão ao lixo comum.' },
  { aparelho: 'Telas antigas (CRT)', contem: 'Chumbo no vidro do tubo de imagem.' }
]

export default function Numeros() {
  return (
    <section id="numeros" aria-labelledby="titulo-numeros" className="grain sel-escuro relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28 text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-numeros"
          kicker="Em números"
          escuro
          titulo="Do que são feitas 62 milhões de toneladas?"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-emerald-50/85 leading-relaxed">
          Composição do e-lixo global em 2022, segundo o Monitor da ONU (ITU/UNITAR).
        </p>

        <div className="mt-10 rounded-[2rem] bg-white/5 p-6 sm:p-8 ring-1 ring-white/10">
          <div
            className="flex h-10 sm:h-12 w-full overflow-hidden rounded-full ring-1 ring-white/15"
            role="img"
            aria-label="Composição: 50% metais, 27% plásticos, 23% outros materiais"
          >
            {composicao.map((c) => (
              <div
                key={c.material}
                style={{ width: `${c.pct}%` }}
                className={`bg-gradient-to-r ${c.classe}`}
              />
            ))}
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {composicao.map((c) => (
              <li key={c.material} className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <p className="font-bold">{c.material}</p>
                <p className="text-sm text-emerald-50/80">{c.peso} · {c.pct}%</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {comparativos.map((c, i) => (
            <Reveal key={c.valor} delay={i * 90} className="h-full">
              <article className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl">
                <p className="text-3xl lg:text-4xl font-extrabold text-lime-200">{c.valor}</p>
                <p className="mt-2 text-emerald-50/85 leading-relaxed">{c.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">Ficha dos materiais: o que tem dentro de cada aparelho</h3>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {materiais.map((m) => (
              <div key={m.aparelho} className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <dt className="font-bold text-lime-200">{m.aparelho}</dt>
                <dd className="mt-1 text-sm text-emerald-50/85 leading-relaxed">{m.contem}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-emerald-50/60">
            Fontes: Global E-waste Monitor 2024 (ITU/UNITAR) e ficha informativa sobre e-lixo da OMS. Crescimento do e-lixo é 5× mais rápido que a reciclagem.
          </p>
        </div>
      </div>
    </section>
  )
}
