import { useEffect, useState } from 'react'

const KG_POR_SEGUNDO = 62000000 / 31557600

export default function AoVivo() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const t0 = Date.now()
    const id = setInterval(() => setSegundos((Date.now() - t0) / 1000), 1000)
    return () => clearInterval(id)
  }, [])

  const kg = KG_POR_SEGUNDO * segundos

  return (
    <div className="border-b border-emerald-900/10 bg-emerald-950 py-3 text-center text-sm sm:text-base text-emerald-50">
      <p aria-live="off">
        Desde que você abriu esta página, o mundo já descartou{' '}
        <strong className="text-lime-200">
          {kg.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} kg
        </strong>{' '}
        de e-lixo. <span className="text-emerald-50/70">(≈2 toneladas por segundo)</span>
      </p>
    </div>
  )
}
