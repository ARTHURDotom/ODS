import { useState } from 'react'

const KG_POR_PESSOA = 7.8

export default function Simulador() {
  const [pop, setPop] = useState(100000)
  const toneladas = Math.round((pop * KG_POR_PESSOA) / 1000)
  const caminhoes = Math.max(1, Math.round(toneladas / 40))

  return (
    <div className="mt-6 rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200/70">
      <h3 className="text-xl font-bold text-stone-900">Simulador: e a sua cidade?</h3>
      <p className="mt-1 text-sm text-stone-600">
        Arraste e estime o e-lixo anual pela média global de {KG_POR_PESSOA.toLocaleString('pt-BR')} kg por pessoa.
      </p>
      <label htmlFor="sim-pop" className="mt-4 block text-sm font-bold text-stone-900">
        Habitantes: {pop.toLocaleString('pt-BR')}
      </label>
      <input
        id="sim-pop"
        type="range"
        min="1000"
        max="12000000"
        step="1000"
        value={pop}
        onChange={(e) => setPop(Number(e.target.value))}
        className="mt-2 w-full accent-emerald-600"
      />
      <p aria-live="polite" className="mt-3 text-lg text-stone-900">
        ≈ <strong className="text-emerald-700">{toneladas.toLocaleString('pt-BR')} toneladas/ano</strong>{' '}
        <span className="text-stone-600">({caminhoes.toLocaleString('pt-BR')} caminhões de 40 t)</span>
      </p>
    </div>
  )
}
