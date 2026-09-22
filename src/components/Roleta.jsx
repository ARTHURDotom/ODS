import { useState } from 'react'

const ACOES = [
  'Leve uma pilha ao PEV mais próximo',
  'Apague os dados de um aparelho parado',
  'Conte a alguém o que é logística reversa',
  'Procure uma assistência antes de trocar',
  'Separe cabos e carregadores velhos',
  'Compartilhe este site com a família',
  'Refaça o quiz e gabarite',
  'Anote os eletrônicos parados da sua casa'
]

export default function Roleta() {
  const [sorteada, setSorteada] = useState(null)
  const [giros, setGiros] = useState(0)

  function girar() {
    setSorteada(Math.floor(Math.random() * ACOES.length))
    setGiros((g) => g + 1)
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
      <h3 className="text-xl font-bold">Roleta: faça agora 🎡</h3>
      <p className="mt-1 text-sm text-emerald-50/80" aria-live="polite">
        {sorteada === null
          ? 'Gire e receba uma missão sustentável.'
          : `Missão #${giros}: ${ACOES[sorteada]}`}
      </p>
      <div
        aria-hidden="true"
        className="mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-emerald-500 text-4xl shadow-xl transition-transform duration-700 ease-out"
        style={{ transform: `rotate(${giros * 360 + (sorteada ?? 0) * 45}deg)` }}
      >
        ♻️
      </div>
      <button
        type="button"
        onClick={girar}
        className="mt-4 rounded-full bg-lime-300 px-7 py-3 font-semibold text-emerald-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200 active:translate-y-0"
      >
        Girar a roleta
      </button>
    </div>
  )
}
