/** Perguntas do Quiz E-lixo Zero. */
export const perguntas = [
  {
    pergunta: 'Quanto de lixo eletrônico o mundo gerou em 2022?',
    opcoes: ['12 milhões de toneladas', '62 milhões de toneladas', '120 milhões de toneladas'],
    correta: 1,
    explicacao: 'Foram 62 milhões de toneladas (Global E-waste Monitor 2024) — e pode chegar a 82 milhões em 2030.'
  },
  {
    pergunta: 'Desse total, quanto foi coletado e reciclado formalmente?',
    opcoes: ['Cerca de 22%', 'Cerca de 55%', 'Cerca de 78%'],
    correta: 0,
    explicacao: 'Só 22,3% teve destino formal. O resto foi para aterros, lixões ou comércio informal.'
  },
  {
    pergunta: 'Qual ODS fala de consumo e produção responsáveis?',
    opcoes: ['ODS 6', 'ODS 9', 'ODS 12'],
    correta: 2,
    explicacao: 'O ODS 12 pede gestão segura de resíduos e mais redução, reuso e reciclagem até 2030.'
  },
  {
    pergunta: 'Onde pilhas e baterias devem ser descartadas?',
    opcoes: ['No lixo comum', 'Em pontos de coleta (PEVs)', 'No ralo da pia'],
    correta: 1,
    explicacao: 'Pilhas e baterias contêm metais pesados: leve a PEVs em lojas, farmácias e supermercados.'
  },
  {
    pergunta: 'Por que geladeiras velhas descartadas fazem mal ao clima?',
    opcoes: [
      'Liberam gases de efeito estufa potentes',
      'Consomem muita água parada',
      'Ocupam espaço nos aterros'
    ],
    correta: 0,
    explicacao: 'Os gases de refrigeração têm potencial de aquecimento milhares de vezes maior que o CO₂.'
  }
]

export function mensagemQuiz(pontos, total) {
  if (pontos === total) return 'Perfeito! Você é lenda do E-lixo Zero.'
  if (pontos >= 3) return 'Muito bem! Faltou pouco para gabaritar.'
  return 'Bom começo! Releia as seções acima e tente de novo.'
}

/** Nível avançado: para quem gabaritou o quiz básico. */
export const perguntasAvancadas = [
  {
    pergunta: 'Quanto valem os metais embutidos no e-lixo gerado em 2022?',
    opcoes: ['US$ 9 bilhões', 'US$ 91 bilhões', 'US$ 910 bilhões'],
    correta: 1,
    explicacao: 'US$ 91 bilhões em metais (cobre, ouro, ferro) — e US$ 62 bilhões se perdem sem reciclagem.'
  },
  {
    pergunta: 'Qual material pesa mais no e-lixo global?',
    opcoes: ['Plásticos (17 Mt)', 'Metais (31 Mt)', 'Vidro e outros (14 Mt)'],
    correta: 1,
    explicacao: 'Metais somam 31 das 62 milhões de toneladas — por isso a reciclagem vale ouro.'
  },
  {
    pergunta: 'Qual a posição do Brasil no ranking das Américas?',
    opcoes: ['1.º, acima dos EUA', '2.º, atrás dos EUA', '4.º, atrás do México'],
    correta: 1,
    explicacao: 'Brasil gera 2,4 Mt/ano: 2.º nas Américas (EUA têm 7,2 Mt) e cerca de 5.º no mundo.'
  },
  {
    pergunta: 'Qual decreto rege a logística reversa de eletroeletrônicos?',
    opcoes: ['Decreto 10.240/2020', 'Decreto 5.225/2004', 'Decreto 99.999/1999'],
    correta: 0,
    explicacao: 'O Decreto 10.240/2020 obriga a cadeia a coletar eletroeletrônicos pós-consumo.'
  },
  {
    pergunta: 'Onde aconteceu a COP 30?',
    opcoes: ['Rio de Janeiro', 'Belém do Pará', 'Manaus'],
    correta: 1,
    explicacao: 'Belém do Pará: a primeira COP realizada na Amazônia.'
  }
]
