import { useState } from 'react'

const INDICE = [
  { id: 'inicio', titulo: 'Início', chaves: 'começo hero solução participar' },
  { id: 'problema', titulo: 'O problema', chaves: '62 milhões 22% dados impacto saúde metais' },
  { id: 'jornada', titulo: 'Jornada do celular', chaves: 'compra uso descarte vida etapas' },
  { id: 'numeros', titulo: 'Em números', chaves: 'composição metais plásticos caminhões aviões dólares' },
  { id: 'ods', titulo: 'ODS', chaves: 'objetivos onu 12 13 14 15 clima água terra' },
  { id: 'mitos', titulo: 'Mitos e verdades', chaves: 'cartas mito verdade' },
  { id: 'brasil', titulo: 'Brasil e COP', chaves: 'brasil cop30 belém ranking logística' },
  { id: 'solucoes', titulo: 'Soluções', chaves: 'descartar reparar doar pev como fazer' },
  { id: 'calculadora', titulo: 'Calculadora', chaves: 'quanto pesa casa quilos' },
  { id: 'jogo', titulo: 'Jogo', chaves: 'jogar scratch turma' },
  { id: 'memoria', titulo: 'Memória', chaves: 'cartas pares combinar' },
  { id: 'quiz', titulo: 'Quiz', chaves: 'perguntas teste certificado' },
  { id: 'quiz-avancado', titulo: 'Quiz avançado', chaves: 'nível difícil' },
  { id: 'enquete', titulo: 'Enquete', chaves: 'voto recicla' },
  { id: 'participe', titulo: 'Participe', chaves: 'ponto coleta abree ação' },
  { id: 'checklist', titulo: 'Checklist', chaves: 'semana desafio atitudes' },
  { id: 'quem-fez', titulo: 'Quem fez', chaves: 'turma escola foto vídeo mapa instagram' },
  { id: 'faq', titulo: 'Dúvidas', chaves: 'perguntas frequentes pilha dados' },
  { id: 'sobre', titulo: 'Sobre', chaves: 'glossário professor metodologia qr' }
]

export default function Busca({ aoNavegar }) {
  const [termo, setTermo] = useState('')
  const q = termo.trim().toLowerCase()
  const resultados = q
    ? INDICE.filter((e) => `${e.titulo} ${e.chaves}`.toLowerCase().includes(q)).slice(0, 6)
    : []

  function ir(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTermo('')
    aoNavegar?.()
  }

  return (
    <div>
      <label htmlFor="busca-site" className="sr-only">Buscar no site</label>
      <input
        id="busca-site"
        type="search"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Buscar: quiz, mapa, vídeo…"
        autoComplete="off"
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-emerald-50/50 focus:border-lime-300 focus:outline-none"
      />
      {q && (
        <ul className="mt-2 space-y-1" role="listbox" aria-label="Resultados da busca">
          {resultados.length === 0 && (
            <li className="px-3 py-2 text-sm text-emerald-50/70">Nada encontrado. Tente "quiz" ou "mapa".</li>
          )}
          {resultados.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                role="option"
                aria-selected="false"
                onClick={() => ir(r.id)}
                className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Ir para: {r.titulo}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
