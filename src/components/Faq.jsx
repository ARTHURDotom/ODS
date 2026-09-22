import CabecalhoSecao from './CabecalhoSecao.jsx'
import Separador from './Separador.jsx'

const duvidas = [
  {
    p: 'Onde descarto TV, geladeira e outros aparelhos grandes?',
    r: 'Em pontos de entrega voluntária (PEVs), lojas e assistências, ou na coleta especial da prefeitura. Nunca deixe na calçada: além de multa, o aparelho vaza substâncias tóxicas na chuva.'
  },
  {
    p: 'Meus dados ficam seguros ao doar ou reciclar o celular?',
    r: 'Sim, se você fizer o dever de casa: backup, restauração para as configurações de fábrica e remoção de chips e cartões de memória antes de entregar.'
  },
  {
    p: 'Pilha e bateria podem ir no lixo comum?',
    r: 'Não. Contêm metais pesados e vão para PEVs em supermercados, farmácias e lojas de eletrônicos — nunca no lixo comum, no ralo ou no vaso.'
  },
  {
    p: 'Aparelho quebrou: conserto ou troco por um novo?',
    r: 'Tente consertar primeiro: tela e bateria novas custam menos que um aparelho e evitam um descarte. Troque só quando o reparo for inviável — e devolva o velho na loja.'
  },
  {
    p: 'O que é logística reversa?',
    r: 'É a obrigação de fabricantes e importadores receberem eletroeletrônicos de volta após o uso (Decreto 10.240/2020). Na prática: na compra, pergunte onde devolver o antigo.'
  },
  {
    p: 'E lâmpada fluorescente quebrada, o que eu faço?',
    r: 'Ela contém mercúrio: ventile o ambiente, junte os cacos com papelão (sem varrer a seco e sem aspirador), coloque num pote fechado e leve a um PEV.'
  }
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="titulo-faq" className="dot-grid bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-faq"
          kicker="06 · Dúvidas frequentes"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Perguntas que todo mundo faz"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Toque em cada pergunta para ver a resposta direta.
        </p>
        <Separador className="mt-6" />
        <div className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {duvidas.map((d) => (
            <details
              key={d.p}
              className="group h-fit rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200/70 transition-all duration-300 ease-out open:bg-emerald-50/60 open:ring-emerald-200 hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
                {d.p}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold leading-none text-white transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-stone-600">{d.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
