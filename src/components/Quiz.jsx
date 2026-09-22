import { useState } from 'react'

const perguntas = [
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

function mensagem(pontos, total) {
  if (pontos === total) return 'Perfeito! Você é lenda do E-lixo Zero.'
  if (pontos >= 3) return 'Muito bem! Faltou pouco para gabaritar.'
  return 'Bom começo! Releia as seções acima e tente de novo.'
}

export default function Quiz() {
  const [respostas, setRespostas] = useState({})
  const [nome, setNome] = useState('')
  const [copiado, setCopiado] = useState(false)
  const respondidas = Object.keys(respostas).length
  const acertos = perguntas.filter((p, i) => respostas[i] === p.correta).length
  const finalizado = respondidas === perguntas.length
  const gabaritou = finalizado && acertos === perguntas.length
  const nomeValido = nome.trim().length >= 2
  const dataExtenso = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  async function compartilhar() {
    const texto = `Gabaritei o Quiz E-lixo Zero (${acertos}/${perguntas.length})! Teste você também: ${window.location.href}`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Quiz E-lixo Zero', text: texto, url: window.location.href })
        return
      } catch {
        /* usuário cancelou — não faz nada */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2500)
    } catch {
      /* área de transferência indisponível */
    }
  }

  function responder(i, opcao) {
    setRespostas((r) => (i in r ? r : { ...r, [i]: opcao }))
  }

  return (
    <section id="quiz" aria-labelledby="titulo-quiz" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-emerald-950 p-6 sm:p-10 text-white ring-1 ring-emerald-900/20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm lg:text-base font-semibold uppercase tracking-widest text-lime-200">
                Desafio · Teste seus conhecimentos
              </p>
              <h2 id="titulo-quiz" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Quiz E-lixo Zero
              </h2>
              <p className="mt-3 max-w-2xl text-emerald-50/85 leading-relaxed">
                5 perguntas sobre o que você viu nesta página. Sem cadastro, sem sair do site.
              </p>
            </div>
            <p aria-live="polite" className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
              {respondidas}/{perguntas.length} respondidas
            </p>
          </div>

          <ol className="mt-8 space-y-6">
            {perguntas.map((p, i) => {
              const respondida = i in respostas
              return (
                <li key={p.pergunta} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <fieldset>
                    <legend className="font-bold">
                      <span className="mr-2 text-lime-300">{i + 1}.</span>
                      {p.pergunta}
                    </legend>
                    <div className="mt-3 grid gap-2">
                      {p.opcoes.map((opcao, j) => {
                        const escolhida = respostas[i] === j
                        const certa = j === p.correta
                        let estilo = 'border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5'
                        let marcador = null
                        if (respondida) {
                          if (certa) {
                            estilo = 'border-lime-300 bg-lime-300/15'
                            marcador = <span aria-hidden="true" className="text-lime-300">✓</span>
                          } else if (escolhida) {
                            estilo = 'border-red-400/60 bg-red-400/10'
                            marcador = <span aria-hidden="true" className="text-red-300">✗</span>
                          } else {
                            estilo = 'border-white/10 bg-white/5 opacity-50'
                          }
                        }
                        return (
                          <button
                            key={opcao}
                            type="button"
                            disabled={respondida}
                            onClick={() => responder(i, j)}
                            aria-pressed={escolhida || undefined}
                            className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ease-out ${estilo} ${respondida ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                            <span>{opcao}</span>
                            {marcador}
                            <span className="sr-only">
                              {respondida && certa ? '(resposta correta)' : ''}
                              {respondida && escolhida && !certa ? '(sua resposta, incorreta)' : ''}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                    {respondida && (
                      <p className="mt-3 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-emerald-50/80 leading-relaxed">
                        {respostas[i] === p.correta ? 'Acertou! ' : 'Não foi dessa vez. '}{p.explicacao}
                      </p>
                    )}
                  </fieldset>
                </li>
              )
            })}
          </ol>

          {finalizado && (
            <div role="status" className="mt-8 rounded-2xl bg-lime-300/10 p-6 text-center ring-1 ring-lime-300/40">
              <p className="text-2xl font-extrabold">
                Você acertou {acertos} de {perguntas.length}!
              </p>
              <p className="mt-1 text-emerald-50/85">{mensagem(acertos, perguntas.length)}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setRespostas({})}
                  className="rounded-full border border-white/25 px-6 py-2.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
                >
                  Tentar de novo
                </button>
                <button
                  type="button"
                  onClick={compartilhar}
                  className="btn-shine rounded-full bg-lime-300 px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200 active:translate-y-0"
                >
                  Compartilhar resultado
                </button>
              </div>
              {copiado && (
                <p role="status" className="mt-2 text-sm font-medium text-lime-200">
                  Link copiado!
                </p>
              )}

              {gabaritou && (
                <div className="mt-6 border-t border-white/15 pt-6">
                  <label htmlFor="nome-certificado" className="block font-bold">
                    Digite seu nome para gerar o certificado
                  </label>
                  <div className="mx-auto mt-3 flex max-w-md flex-col sm:flex-row gap-2">
                    <input
                      id="nome-certificado"
                      type="text"
                      value={nome}
                      maxLength={40}
                      autoComplete="off"
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome e sobrenome"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-emerald-50/50 focus:border-lime-300 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => window.print()}
                      disabled={!nomeValido}
                      className="shrink-0 rounded-full bg-white px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Imprimir certificado
                    </button>
                  </div>
                  {!nomeValido && (
                    <p className="mt-2 text-xs text-emerald-50/70">
                      Escreva seu nome acima para liberar a impressão.
                    </p>
                  )}

                  {nomeValido && (
                    <div
                      id="certificado"
                      role="status"
                      aria-label={`Certificado Guardião E-lixo Zero de ${nome.trim()}`}
                      className="mx-auto mt-6 max-w-md rounded-2xl border-4 border-double border-emerald-700 bg-white p-8 text-center text-stone-900 shadow-xl"
                    >
                      <span aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 22l5-3 5 3-1.5-8" /></svg>
                      </span>
                      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-emerald-700">
                        Certificado · E-lixo Zero
                      </p>
                      <p className="mt-2 text-2xl font-extrabold">Guardião E-lixo Zero</p>
                      <p className="mt-3 text-sm text-stone-500">Concedido a</p>
                      <p className="mt-1 text-xl font-bold">{nome.trim()}</p>
                      <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                        Por gabaritar o Quiz E-lixo Zero (5/5) sobre lixo eletrônico e ODS.
                      </p>
                      <p className="mt-4 text-xs text-stone-500">
                        1.º ano K · Colégio Cruzeiro do Sul — São Miguel · {dataExtenso}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
