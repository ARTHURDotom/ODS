import { useState } from 'react'
import CabecalhoSecao from './CabecalhoSecao.jsx'
import Separador from './Separador.jsx'

const TERMOS = [
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
            <a
              href="#quiz"
              className="mt-5 inline-flex rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Avaliar pelo quiz →
            </a>
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
        </div>
      </div>
    </section>
  )
}
