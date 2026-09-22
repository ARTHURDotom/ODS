import { useState } from 'react'

const PASSOS = [
  { id: 'inicio', titulo: '1 · O começo', texto: 'A mensagem principal: seu eletrônico velho pode virar solução.' },
  { id: 'problema', titulo: '2 · O problema', texto: 'Números animados: 62 milhões de toneladas e só 22% reciclado.' },
  { id: 'quiz', titulo: '3 · Teste-se', texto: 'Responda o quiz e tente gabaritar para ver o certificado.' },
  { id: 'jogo', titulo: '4 · Jogue', texto: 'O jogo da turma e o jogo da memória esperam por você.' },
  { id: 'quem-fez', titulo: '5 · A turma', texto: 'Foto, vídeo, mapa e os canais da sala e do colégio.' }
]

export default function Tour() {
  const [indice, setIndice] = useState(null)

  function ir(i) {
    setIndice(i)
    document.getElementById(PASSOS[i].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function fechar() {
    setIndice(null)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => ir(0)}
        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10"
      >
        ▶ Fazer tour guiado
      </button>
      {indice !== null && (
        <div className="fixed inset-x-4 bottom-4 z-[65] mx-auto max-w-md rounded-2xl bg-emerald-950 p-5 text-white shadow-2xl ring-1 ring-lime-300/40" role="dialog" aria-label="Tour guiado">
          <p className="text-xs font-bold uppercase tracking-wider text-lime-200">
            Passo {indice + 1} de {PASSOS.length}
          </p>
          <p className="mt-1 font-bold">{PASSOS[indice].titulo}</p>
          <p className="mt-1 text-sm text-emerald-50/85">{PASSOS[indice].texto}</p>
          <div className="mt-3 flex justify-between gap-2">
            <button
              type="button"
              onClick={fechar}
              className="rounded-full px-4 py-2 text-sm font-semibold text-emerald-50/80 hover:text-white"
            >
              Pular tour
            </button>
            <div className="flex gap-2">
              {indice > 0 && (
                <button
                  type="button"
                  onClick={() => ir(indice - 1)}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                >
                  ←
                </button>
              )}
              {indice < PASSOS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => ir(indice + 1)}
                  className="rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-emerald-950 hover:bg-lime-200"
                >
                  Próximo →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={fechar}
                  className="rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-emerald-950 hover:bg-lime-200"
                >
                  Concluir ✓
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
