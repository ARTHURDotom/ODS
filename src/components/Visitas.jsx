import { useEffect, useState } from 'react'

function lerVisitas() {
  try {
    const lista = JSON.parse(localStorage.getItem('visitas-elixo') || '[]')
    return Array.isArray(lista) ? lista.filter((t) => Date.now() - t < 30 * 86400000) : []
  } catch {
    return []
  }
}

export default function Visitas() {
  const [visitas, setVisitas] = useState([])

  useEffect(() => {
    const lista = lerVisitas()
    lista.push(Date.now())
    try {
      localStorage.setItem('visitas-elixo', JSON.stringify(lista))
    } catch {
      /* sem armazenamento */
    }
    setVisitas(lista)
  }, [])

  const dias = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    const chave = d.toDateString()
    const total = visitas.filter((t) => new Date(t).toDateString() === chave).length
    return { dia: 'DSTQQSS'[d.getDay()], total }
  })
  const max = Math.max(1, ...dias.map((d) => d.total))

  return (
    <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-50/70">
        Visitas neste navegador · {visitas.length} no mês
      </p>
      <div className="mt-2 flex items-end gap-1.5" role="img" aria-label={`Visitas dos últimos 7 dias, total ${visitas.length} no mês`}>
        {dias.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-sm bg-lime-300/80"
              style={{ height: `${6 + (d.total / max) * 34}px` }}
            />
            <span className="text-[10px] font-bold text-emerald-50/60">{d.dia}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
