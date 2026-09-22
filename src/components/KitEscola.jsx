import CabecalhoSecao from './CabecalhoSecao.jsx'

const BLOCOS = [
  {
    titulo: 'Debate regrado em sala',
    corpo: 'Moção: "Fabricantes deveriam pagar por toda a reciclagem". 2 times (a favor/contra), 3 rodadas de 2 minutos cada, réplica de 1 minuto e voto da plateia no final. Juiz anota os melhores argumentos com dados do site.'
  },
  {
    titulo: 'Gincana E-lixo Zero',
    corpo: 'Provas: 1) quiz relâmpago valendo pontos; 2) caça-palavras no menor tempo; 3) trazer 1 eletrônico parado de casa; 4) responder o FAQ sem olhar. Some os pontos no ranking local e premie a equipe vencedora.'
  },
  {
    titulo: 'Redação modelo ENEM',
    corpo: 'Tema: "O descarte de lixo eletrônico no Brasil". Estrutura: introdução com o dado dos 62 milhões de toneladas, 2 desenvolvimentos (saúde + economia circular) e proposta com agente, ação, meio e finalidade (ex.: prefeituras + PEVs em escolas via verba da logística reversa).'
  },
  {
    titulo: 'Artigo de opinião',
    corpo: 'Estrutura: tese no 1.º parágrafo (ex.: "trocar todo ano é insustentável"), 2 argumentos com dados do Monitor e da ABREE, contra-argumento rebatido e conclusão com chamada à ação.'
  },
  {
    titulo: 'Esquete de 5 minutos',
    corpo: 'Personagens: consumidor apressado, celular falante, catador e prefeito. Cena 1: a troca por impulso. Cena 2: o lixão. Cena 3: o PEV que resolve. Final com o QR do site projetado.'
  },
  {
    titulo: 'Entrevista com assistência técnica',
    corpo: 'Roteiro: 1) O defeito mais comum? 2) Quanto custa o reparo médio? 3) As pessoas preferem consertar ou trocar? 4) Para onde vão as peças trocadas? 5) Um conselho para quem tem aparelho velho?'
  },
  {
    titulo: 'Visita a cooperativa ou PEV',
    corpo: 'Antes: liste 5 perguntas (o que recebem, para onde vai, quem trabalha lá). Durante: fotografe (com autorização) e anote pesos. Depois: apresente 3 aprendizados para a turma.'
  },
  {
    titulo: 'Carta para a prefeitura',
    corpo: 'Modelo: "Prezada prefeitura, nossa turma mapeou X eletrônicos parados na escola. Pedimos um ponto de coleta no bairro [nome] e uma campanha anual, conforme a Política Nacional de Resíduos Sólidos. Atenciosamente, 1.º ano K."'
  },
  {
    titulo: 'Feira de ciências',
    corpo: 'Estande em 3 partes: 1) balança com e-lixo real + cartaz dos 62 Mt; 2) demonstração de descarte certo com PEV de mentira; 3) quiz ao vivo valendo adesivos. Use o QR do site no banner.'
  },
  {
    titulo: 'Jingle da turma 🎵',
    corpo: 'Sugestão no ritmo de funk: "Celular velho na gaveta não / leva no ponto que é a solução / pilha no lixo comum nunca mais / E-lixo Zero, a gente que faz!" — grave com a turma e apresente.'
  }
]

export default function KitEscola() {
  return (
    <section id="kit-escola" aria-labelledby="titulo-kit" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-kit"
          kicker="Kit escola"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Leve para a sala de aula"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Roteiros prontos para usar com a turma — debater, escrever, encenar e agir.
        </p>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {BLOCOS.map((b) => (
            <details
              key={b.titulo}
              className="group h-fit rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200/70 transition-all duration-300 ease-out open:bg-emerald-50/60 open:ring-emerald-200 hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
                {b.titulo}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold leading-none text-white transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-stone-600">{b.corpo}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
