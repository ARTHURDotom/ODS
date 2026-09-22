import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import WallpaperBtn from './WallpaperBtn.jsx'
import Separador from './Separador.jsx'

export const TERMOS = [
  { termo: 'E-lixo', significado: 'Resíduos de equipamentos eletroeletrônicos: celulares, computadores, TVs, geladeiras, pilhas e lâmpadas.' },
  { termo: 'PEV', significado: 'Ponto de Entrega Voluntária: local onde você deixa eletrônicos, pilhas e baterias para reciclagem.' },
  { termo: 'Logística reversa', significado: 'Sistema que obriga fabricantes e lojas a receberem produtos usados de volta (Decreto 10.240/2020).' },
  { termo: 'ODS', significado: 'Objetivos de Desenvolvimento Sustentável: 17 metas globais da ONU para 2030.' },
  { termo: 'COP', significado: 'Conferência das Partes: reunião anual da ONU sobre clima. A COP 30 foi em Belém do Pará.' },
  { termo: 'Economia circular', significado: 'Modelo em que materiais voltam à produção em vez de virarem lixo: reparar, reutilizar, reciclar.' },
  { termo: 'Metais pesados', significado: 'Chumbo, mercúrio e cádmio presentes em eletrônicos; tóxicos para solo, água e saúde.' },
  { termo: 'Obsolescência programada', significado: 'Quando produtos são feitos para durar pouco, forçando trocas e gerando mais lixo.' }
]

const METODOLOGIA = [
  'Pesquisa de dados no Global E-waste Monitor 2024 (UNITAR/ITU) e nos ODS da ONU',
  'Roteiro e textos escritos pela turma do 1.º ano K',
  'Protótipo, fotos, vídeo e jogo produzidos pelos alunos',
  'Site programado em React e publicado no GitHub Pages'
]

const GUIA = [
  'Tema: lixo eletrônico, ODS 12–15 e COP 30 — Ciências da Natureza e sustentabilidade',
  'Critérios: pesquisa com fontes, clareza, trabalho em equipe e uso de tecnologia',
  'Evidências: site no ar, quiz com certificado, vídeo e jogo da turma'
]

export default function Sobre() {
  const [busca, setBusca] = useState('')
  const termos = TERMOS.filter(
    (t) =>
      t.termo.toLowerCase().includes(busca.toLowerCase()) ||
      t.significado.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="bg-[#eff6dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-sobre"
          kicker="Aprofunde-se"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Glossário, método e guia do professor"
        />
        <Separador className="mt-8" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70 lg:col-span-1">
            <h3 className="text-xl font-bold text-stone-900">Glossário</h3>
            <label htmlFor="busca-glossario" className="sr-only">Buscar termo</label>
            <input
              id="busca-glossario"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar termo…"
              className="mt-3 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
            />
            <dl className="mt-4 max-h-80 space-y-3 overflow-y-auto pr-1">
              {termos.length === 0 && (
                <p className="text-sm text-stone-500">Nenhum termo encontrado. Tente outra palavra.</p>
              )}
              {termos.map((t) => (
                <div key={t.termo} className="rounded-xl bg-stone-50 px-4 py-3 ring-1 ring-stone-200/60">
                  <dt className="font-bold text-emerald-800">{t.termo}</dt>
                  <dd className="mt-1 text-sm text-stone-600 leading-relaxed">{t.significado}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70 lg:col-span-1">
            <h3 className="text-xl font-bold text-stone-900">Como fizemos</h3>
            <ol className="mt-4 space-y-3">
              {METODOLOGIA.map((m, i) => (
                <li key={m} className="flex gap-3">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-stone-600 leading-relaxed">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[2rem] bg-emerald-950 p-6 sm:p-8 text-white lg:col-span-1">
            <h3 className="text-xl font-bold text-lime-200">Guia do professor</h3>
            <ul className="mt-4 space-y-3 text-emerald-50/90 leading-relaxed list-disc pl-5">
              {GUIA.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="#quiz"
                className="inline-flex rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200"
              >
                Avaliar pelo quiz →
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('abrir-slides'))}
                className="inline-flex rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10"
              >
                Apresentar slides ⛶
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
          <h3 className="text-xl font-bold text-stone-900">Referências com links</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm font-medium">
            {[
              ['Global E-waste Monitor 2024 (ITU/UNITAR)', 'https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx'],
              ['E-lixo e saúde (OMS)', 'https://www.who.int/news-room/fact-sheets/detail/electronic-waste-%28e-waste%29'],
              ['Lixo eletrônico recorde em 2022 (ONU News)', 'https://news.un.org/pt/story/2024/03/1829466'],
              ['ABREE — logística reversa', 'https://abree.org.br/'],
              ['Green Eletron — pontos de coleta', 'https://greeneletron.org.br/'],
              ['ODS — Nações Unidas Brasil', 'https://brasil.un.org/pt-br/sdgs']
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl bg-stone-50 px-4 py-3 text-stone-700 ring-1 ring-stone-200/60 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md"
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <WallpaperBtn />
            <a
              href="./infografico.svg"
              download="infografico-economia-circular.svg"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
            >
              ⬇ Baixar infográfico do ciclo
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Guia de discussão em sala <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <ol className="mt-4 space-y-2 text-stone-600 leading-relaxed list-decimal pl-5">
              <li>Por que o e-lixo cresce mais rápido que a reciclagem?</li>
              <li>Quem deve pagar pela reciclagem: consumidor, loja ou fabricante?</li>
              <li>O que sua família faz com o celular velho? E o que deveria fazer?</li>
              <li>Como convencer alguém a consertar em vez de trocar?</li>
              <li>O que a COP 30 mudou (ou deveria mudar) na sua cidade?</li>
            </ol>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Em palavras simples <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <ul className="mt-4 space-y-2 text-stone-600 leading-relaxed list-disc pl-5">
              <li>Eletrônico velho tem metal que contamina água e terra.</li>
              <li>Pouco dele é reciclado: só 22 em cada 100.</li>
              <li>Guardar em casa não resolve; levar ao ponto de coleta, sim.</li>
              <li>Consertar é quase sempre melhor que trocar.</li>
              <li>A COP 30 discutiu isso em Belém, na Amazônia.</li>
            </ul>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Para fazer na escola <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <ol className="mt-4 space-y-2 text-stone-600 leading-relaxed list-decimal pl-5">
              <li><strong>Caça ao e-lixo:</strong> liste eletrônicos parados em cada sala em 1 semana.</li>
              <li><strong>Mutirão de coleta:</strong> combine um dia e um PEV parceiro para receber tudo.</li>
              <li><strong>Oficina de reparo:</strong> convide um técnico para ensinar trocas simples.</li>
              <li><strong>Mural com o QR</strong> deste site nos corredores.</li>
            </ol>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Roteiro de apresentação <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <ol className="mt-4 space-y-2 text-stone-600 leading-relaxed list-decimal pl-5">
              <li>Abra com o número: 62 milhões de toneladas.</li>
              <li>Mostre a jornada do celular e o caso de Gana.</li>
              <li>Explique os ODS com 1 exemplo cada.</li>
              <li>Demonstre o descarte certo em 4 passos.</li>
              <li>Desafie a plateia no quiz ao vivo.</li>
              <li>Feche com o vídeo e o mapa da escola.</li>
            </ol>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Para os pais <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <div className="mt-4 space-y-2 text-stone-600 leading-relaxed">
              <p>Este site é um trabalho escolar, sem cadastro e sem coleta de dados pessoais. Tudo que é salvo (quiz, checklist, votos) fica só no navegador do visitante.</p>
              <p>Dúvidas? Fale com a turma pelo Instagram: @1k.cruzeirodosul.</p>
            </div>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Diário de bordo <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <ol className="mt-4 space-y-2 text-stone-600 leading-relaxed list-decimal pl-5">
              <li>Pesquisa de dados (Monitor ONU, OMS, ABREE) e roteiro dos textos.</li>
              <li>Protótipo: fotos, vídeo da turma e jogo externo.</li>
              <li>Programação do site em React e publicação no GitHub Pages.</li>
              <li>Expansões: quiz, calculadora, mapa, jogos e acessibilidade.</li>
              <li>Revisão final, testes e apresentação em sala.</li>
            </ol>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Agradecimentos <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <p className="mt-4 text-stone-600 leading-relaxed">
              À professora orientadora, ao Colégio Cruzeiro do Sul, às entidades que publicam
              dados abertos (ONU, OMS, ABREE, Green Eletron) e a todos que responderam quiz e enquetes.
            </p>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              In English <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <p className="mt-4 text-stone-600 leading-relaxed" lang="en">
              E-lixo Zero is a school project about electronic waste and the UN Sustainable Development
              Goals, focused on COP 30 in Belém, Brazil. The world generates 62 million tonnes of
              e-waste per year and recycles only 22%. Repair, return and recycle!
            </p>
          </details>
          <details className="group rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <summary className="cursor-pointer list-none text-xl font-bold text-stone-900 [&::-webkit-details-marker]:hidden">
              Declaração de acessibilidade <span aria-hidden="true" className="text-emerald-600 transition-transform group-open:rotate-90 inline-block">▶</span>
            </summary>
            <div className="mt-4 space-y-2 text-stone-600 leading-relaxed">
              <p>Nosso compromisso: contraste AA, navegação completa por teclado, textos alternativos em imagens, Libras (VLibras) e respeito a movimento reduzido.</p>
              <p>Encontrou uma barreira? Fale com a turma pelo Instagram: @1k.cruzeirodosul.</p>
            </div>
          </details>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <h3 className="text-xl font-bold text-stone-900">Bibliografia (ABNT)</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600 leading-relaxed">
              <li>ITU; UNITAR. Global E-waste Monitor 2024. Genebra; Bonn, 2024.</li>
              <li>OMS. Electronic waste (e-waste): fact sheet. Genebra, 2024.</li>
              <li>ONU. Agenda 2030 e Objetivos de Desenvolvimento Sustentável. Nova York: ONU.</li>
              <li>BRASIL. Lei n.º 12.305/2010 (PNRS) e Decreto n.º 10.240/2020.</li>
            </ul>
            <h3 className="mt-6 text-xl font-bold text-stone-900">Anexos do trabalho</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-600 leading-relaxed list-disc pl-5">
              <li>Roteiro de pesquisa e divisão de tarefas da turma.</li>
              <li>Prints de auditoria (testes automatizados e build).</li>
              <li>Autorização de uso de imagem dos estudantes (via escola).</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
            <h3 className="text-xl font-bold text-stone-900">Selo de qualidade ✅</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600 leading-relaxed">
              <li>✓ Fontes oficiais citadas em todos os números</li>
              <li>✓ Testes automatizados passando (npm test)</li>
              <li>✓ Contraste AA e navegação por teclado</li>
              <li>✓ Responsivo do celular ao PC</li>
            </ul>
            <h3 className="mt-6 text-xl font-bold text-stone-900">Esta página pesa pouco ⚡</h3>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              JS em torno de 200 KB, CSS abaixo de 50 KB, fotos com versões para cada tela
              e vídeo só sob demanda. Medido em setembro de 2026.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-stone-200/70">
          <h3 className="text-xl font-bold text-stone-900">Autorização de uso de imagem (modelo)</h3>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Eu, __________________________________________, responsável por __________________________________________,
            autorizo o uso da imagem do estudante no site E-lixo Zero, trabalho escolar do 1.º ano K do
            Colégio Cruzeiro do Sul, São Miguel, apenas para fins educativos. São Paulo, ____/____/________.
            Assinatura: __________________________________________
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-4 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Imprimir modelo
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <WallpaperBtn />
        </div>
      </div>
    </section>
  )
}
