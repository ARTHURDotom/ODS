import CabecalhoSecao from './CabecalhoSecao.jsx'
import Reveal from './Reveal.jsx'

const etapas = [
  {
    n: '1',
    titulo: 'Compra',
    texto: 'Um celular novo sai da loja — e o antigo vai para a gaveta. No Brasil, milhões de aparelhos parados viram lixo futuro.'
  },
  {
    n: '2',
    titulo: 'Uso',
    texto: 'A vida útil média é de 2 a 3 anos. Bateria viciada e tela quebrada são os motivos mais comuns de troca.'
  },
  {
    n: '3',
    titulo: 'Descarte errado',
    texto: 'No lixo comum, o aparelho vai para aterros e lixões, liberando chumbo, mercúrio e cádmio no solo e na água.'
  },
  {
    n: '4',
    titulo: 'Destino correto',
    texto: 'Em PEVs e na logística reversa, o aparelho é desmontado com segurança por recicladores certificados.'
  },
  {
    n: '5',
    titulo: 'Nova vida',
    texto: 'Ouro, cobre e alumínio voltam à indústria — menos mineração, menos emissão, mais floresta em pé.'
  }
]

export default function Jornada() {
  return (
    <section id="jornada" aria-labelledby="titulo-jornada" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-jornada"
          kicker="A jornada de um celular"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Do clique à nova vida em 5 etapas"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Arraste para o lado e acompanhe o caminho de um aparelho — do bom ao ruim e de volta ao bom.
        </p>
        <ol className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible">
          {etapas.map((e, i) => (
            <Reveal as="li" key={e.n} delay={i * 90} className="min-w-[16rem] snap-start sm:min-w-[20rem] lg:min-w-0 list-none">
              <article className="h-full rounded-2xl bg-white p-6 ring-1 ring-stone-200/70 transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-emerald-900/10">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white"
                >
                  {e.n}
                </span>
                <h3 className="mt-3 font-bold text-stone-900 lg:text-lg">{e.titulo}</h3>
                <p className="mt-1 text-sm lg:text-base text-stone-600 leading-relaxed">{e.texto}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
