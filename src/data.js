export const stats = [
  {
    numero: 62,
    decimais: 0,
    prefixo: '',
    sufixo: ' milhões',
    label: 'de toneladas de lixo eletrônico geradas em 2022',
    detail: 'Alta de 82% desde 2010. É o resíduo sólido que mais cresce no planeta.',
    icon: 'globe'
  },
  {
    numero: 22.3,
    decimais: 1,
    prefixo: '',
    sufixo: '%',
    label: 'foi coletado e reciclado formalmente',
    detail: 'Todo o resto tem destino desconhecido: aterros, lixões ou comércio informal.',
    icon: 'recycle'
  },
  {
    numero: 82,
    decimais: 0,
    prefixo: '',
    sufixo: ' milhões',
    label: 'de toneladas é a projeção para 2030 se nada mudar',
    detail: 'O crescimento do consumo supera o avanço da reciclagem ano após ano.',
    icon: 'trend'
  },
  {
    numero: 3,
    decimais: 0,
    prefixo: '~',
    sufixo: '%',
    label: 'é a taxa estimada de reciclagem no Brasil',
    detail: 'O país gera cerca de 2,1 milhões de toneladas por ano e tem logística reversa em expansão.',
    icon: 'pin'
  }
]

export const ods = [
  {
    numero: '12',
    titulo: 'Consumo e Produção Responsáveis',
    cor: 'bg-[#BF8B2E]',
    corTexto: 'text-[#BF8B2E]',
    corFundo: 'bg-[#FDF6E3]',
    borda: 'border-[#BF8B2E]/30',
    descricao:
      'O coração do tema. As metas 12.4 e 12.5 pedem gestão química segura e redução, reuso e reciclagem de resíduos até 2030.',
    conexao:
      'Cada reparo, devolução e reciclagem de eletrônico é ODS 12 na prática: menos extração, menos descarte, mais circularidade.',
    meta: 'Metas 12.4 e 12.5',
    dado: 'Só 22,3% do e-lixo tem coleta formal no mundo.',
    acao: 'Devolva o aparelho velho na loja ou em um PEV.'
  },
  {
    numero: '13',
    titulo: 'Ação Contra a Mudança Global do Clima',
    cor: 'bg-[#3F7E44]',
    corTexto: 'text-[#3F7E44]',
    corFundo: 'bg-[#EFF7EF]',
    borda: 'border-[#3F7E44]/30',
    descricao:
      'Geladeiras e ar-condicionados descartados liberam gases de efeito estufa potentes. Minerar matéria-prima nova emite muito mais CO₂ do que reciclar.',
    conexao:
      'Reciclar metais e dar destino correto à refrigeração evita emissões — pauta direta da COP 30 em Belém.',
    meta: 'Meta 13.2 (políticas climáticas)',
    dado: 'A queima informal de e-lixo emite milhões de toneladas de CO₂ por ano.',
    acao: 'Nunca queime cabos ou placas: entregue em coleta formal.'
  },
  {
    numero: '14',
    titulo: 'Vida na Água',
    cor: 'bg-[#0A97D9]',
    corTexto: 'text-[#0A97D9]',
    corFundo: 'bg-[#EBF6FD]',
    borda: 'border-[#0A97D9]/30',
    descricao:
      'Chumbo, mercúrio e cádmio de placas e pilhas vazam no solo e chegam a rios e oceanos, contaminando peixes e água potável.',
    conexao:
      'Descarte correto protege bacias hidrográficas — incluindo a Amazônia, sede da COP 30.',
    meta: 'Meta 14.1 (reduzir poluição marinha)',
    dado: 'Uma pilha pode contaminar milhares de litros de água.',
    acao: 'Pilhas e baterias só em PEVs — nunca no lixo comum.'
  },
  {
    numero: '15',
    titulo: 'Vida Terrestre',
    cor: 'bg-[#56C02B]',
    corTexto: 'text-[#2f7a15]',
    corFundo: 'bg-[#F0FBE9]',
    borda: 'border-[#56C02B]/40',
    descricao:
      'Lixões de e-lixo degradam o solo e a mineração de ouro, cobre e lítio pressiona florestas e territórios.',
    conexao:
      'Economia circular reduz a pressão por novas minas e preserva biodiversidade e solos saudáveis.',
    meta: 'Meta 15.5 (frear perda de biodiversidade)',
    dado: 'Reciclar evita extrair 900 milhões de toneladas de minério.',
    acao: 'Prefira reparar e doar antes de trocar de aparelho.'
  }
]

export const passosDescarte = [
  {
    n: '1',
    titulo: 'Apague seus dados',
    texto: 'Faça backup, restaure para as configurações de fábrica e remova chips e cartões de memória.'
  },
  {
    n: '2',
    titulo: 'Não jogue no lixo comum',
    texto: 'Eletrônicos contêm metais pesados. Lixo comum leva tudo para aterros e lixões sem tratamento.'
  },
  {
    n: '3',
    titulo: 'Leve a um ponto de coleta',
    texto: 'Busque PEVs, lojas, assistências e campanhas de fabricantes. No Brasil, a ABREE e a Green Eletron mantêm pontos em todo o país.'
  },
  {
    n: '4',
    titulo: 'Prefira reparar e doar',
    texto: 'Se funciona, doe ou venda. Se quebrou, tente a assistência antes de trocar. O melhor resíduo é o que não existe.'
  }
]

export const praticas = [
  { titulo: 'Repensar a troca', texto: 'Troque por necessidade, não por impulso. Bateria e tela novas custam menos que um aparelho novo.' },
  { titulo: 'Exigir logística reversa', texto: 'Na compra, pergunte onde devolver. Fabricantes e importadores são obrigados por lei (PNRS + Decreto 10.240/2020).' },
  { titulo: 'Separar pilhas e baterias', texto: 'Nunca vão ao lixo comum. Leve a pontos de coleta de supermercados, farmácias e lojas de eletrônicos.' },
  { titulo: 'Apoiar a reciclagem formal', texto: 'Recicladores certificados recuperam ouro, cobre e alumínio com segurança para trabalhadores e meio ambiente.' }
]
