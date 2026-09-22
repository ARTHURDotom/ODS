import { useEffect, useState } from 'react'
import { perguntas as perguntasPadrao, mensagemQuiz } from '../quizData.js'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import BotaoPrimario from './BotaoPrimario.jsx'

const TEMPO_LIMITE = 30

export default function Quiz({
  dados = perguntasPadrao,
  chaveRecorde = 'quiz-recorde',
  kicker = 'Desafio · Teste seus conhecimentos',
  titulo = 'Quiz E-lixo Zero',
  idSecao = 'quiz',
  idTitulo = 'titulo-quiz'
}) {
  const [respostas, setRespostas] = useState({})
  const [nome, setNome] = useState('')
  const [copiado, setCopiado] = useState(false)
  const [tempo, setTempo] = useState(TEMPO_LIMITE)
  const [recorde, setRecorde] = useState(() => {
    try {
      return Number(localStorage.getItem(chaveRecorde) || 0)
    } catch {
      return 0
    }
  })
  const respondidas = Object.keys(respostas).length
  const acertos = dados.filter((p, i) => respostas[i] === p.correta).length
  const finalizado = respondidas === dados.length
  const gabaritou = finalizado && acertos === dados.length
  const nomeValido = nome.trim().length >= 2
  const atual = dados.findIndex((_, i) => !(i in respostas))
  const dataExtenso = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  useEffect(() => {
    if (finalizado) return
    setTempo(TEMPO_LIMITE)
    const id = setInterval(() => {
      setTempo((t) => {
        if (t <= 1) {
          clearInterval(id)
          setRespostas((r) => (atual in r ? r : { ...r, [atual]: -1 }))
          return TEMPO_LIMITE
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [respondidas, finalizado, atual])

  useEffect(() => {
    if (finalizado && acertos > recorde) {
      setRecorde(acertos)
      try {
        localStorage.setItem(chaveRecorde, String(acertos))
      } catch {
        /* sem armazenamento */
      }
    }
  }, [finalizado, acertos, recorde])

  function gerarCanvas() {
    const c = document.createElement('canvas')
    c.width = 1200
    c.height = 630
    const x = c.getContext('2d')
    x.fillStyle = '#eff6dc'
    x.fillRect(0, 0, 1200, 630)
    x.strokeStyle = '#047857'
    x.lineWidth = 16
    x.strokeRect(28, 28, 1144, 574)
    x.textAlign = 'center'
    x.fillStyle = '#047857'
    x.font = '700 40px system-ui, sans-serif'
    x.fillText('CERTIFICADO · E-LIXO ZERO', 600, 130)
    x.fillStyle = '#022c22'
    x.font = '800 64px system-ui, sans-serif'
    x.fillText('Guardião E-lixo Zero', 600, 220)
    x.fillStyle = '#1c1917'
    x.font = '800 56px system-ui, sans-serif'
    x.fillText(nome.trim().slice(0, 40), 600, 330)
    x.fillStyle = '#57534e'
    x.font = '400 32px system-ui, sans-serif'
    x.fillText(`Gabaritou o ${titulo} (${dados.length}/${dados.length})`, 600, 410)
    x.fillText(`1.º ano K · Colégio Cruzeiro do Sul · ${dataExtenso}`, 600, 465)
    return c
  }

  function baixarPNG() {
    const link = document.createElement('a')
    link.download = 'certificado-elixo-zero.png'
    link.href = gerarCanvas().toDataURL('image/png')
    link.click()
  }

  async function compartilhar() {
    const url = window.location.href
    const texto = `Fiz ${acertos}/${dados.length} no ${titulo}! Teste você também: ${url}`
    if (gabaritou && navigator.canShare) {
      try {
        const blob = await new Promise((resolve) => gerarCanvas().toBlob(resolve, 'image/png'))
        const arquivo = new File([blob], 'certificado-elixo-zero.png', { type: 'image/png' })
        if (blob && navigator.canShare({ files: [arquivo] })) {
          await navigator.share({ title: 'Quiz E-lixo Zero', text: texto, files: [arquivo] })
          return
        }
      } catch {
        /* cancela ou falha — tenta só texto */
      }
    }
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Quiz E-lixo Zero', text: texto, url })
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
    <section id={idSecao} aria-labelledby={idTitulo} className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-emerald-950 p-6 sm:p-10 text-white ring-1 ring-emerald-900/20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <CabecalhoSecao
                id={idTitulo}
                kicker={kicker}
                escuro
                titulo={titulo}
              />
              <p className="mt-3 max-w-2xl text-emerald-50/85 leading-relaxed">
                5 perguntas sobre o que você viu nesta página. Sem cadastro, sem sair do site.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <p aria-live="polite" className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
                {respondidas}/{dados.length} respondidas
              </p>
              {recorde > 0 && (
                <p className="rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1.5 text-sm font-semibold text-lime-200">
                  Recorde: {recorde}/{dados.length}
                </p>
              )}
            </div>
          </div>

          <ol className="mt-8 space-y-6">
            {dados.map((p, i) => {
              const respondida = i in respostas
              return (
                <li key={p.pergunta} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <fieldset>
                    <legend className="font-bold">
                      <span className="mr-2 text-lime-300">{i + 1}.</span>
                      {p.pergunta}
                    </legend>
                    {i === atual && !respondida && (
                      <div className="mt-3" role="timer" aria-label={`Tempo restante: ${tempo} segundos`}>
                        <div className="flex items-center justify-between text-xs font-bold text-lime-200">
                          <span aria-hidden="true">⏱ Tempo</span>
                          <span>{tempo}s</span>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-lime-300 transition-all duration-1000 ease-linear"
                            style={{ width: `${(tempo / TEMPO_LIMITE) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="mt-3 grid gap-2">
                      {p.opcoes.map((opcao, j) => {
                        const escolhida = respostas[i] === j
                        const certa = j === p.correta
                        let estilo = 'brilho-borda border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5'
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
                        {respostas[i] === p.correta ? 'Acertou! ' : respostas[i] === -1 ? 'Tempo esgotado! ' : 'Não foi dessa vez. '}{p.explicacao}
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
                Você acertou {acertos} de {dados.length}!
              </p>
              <p className="mt-1 text-emerald-50/85">{mensagemQuiz(acertos, dados.length)}</p>
              <div className="no-print mt-4 flex flex-wrap justify-center gap-2">
              <BotaoPrimario onClick={() => setRespostas({})} className="mt-4 px-6 py-2.5">
                Tentar de novo
              </BotaoPrimario>
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
                  <div className="no-print mx-auto mt-3 flex max-w-md flex-col sm:flex-row gap-2">
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
                      onClick={() => {
                        document.body.classList.add('print-cert')
                        window.print()
                      }}
                      disabled={!nomeValido}
                      className="shrink-0 rounded-full bg-white px-6 py-2.5 font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Imprimir certificado
                    </button>
                    <button
                      type="button"
                      onClick={baixarPNG}
                      disabled={!nomeValido}
                      className="shrink-0 rounded-full border border-white/25 px-6 py-2.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Baixar PNG
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
                        Por gabaritar o {titulo} ({dados.length}/{dados.length}) sobre lixo eletrônico e ODS.
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
