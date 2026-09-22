import { useEffect, useState } from 'react'

function proximoDiaLixo(data = new Date()) {
  const ano = data.getMonth() > 9 || (data.getMonth() === 9 && data.getDate() > 14) ? data.getFullYear() + 1 : data.getFullYear()
  return new Date(ano, 9, 14)
}

export function diasParaDiaLixo(hoje = new Date()) {
  const alvo = proximoDiaLixo(hoje)
  return Math.ceil((alvo - hoje) / 86400000)
}

export default function Encerramento() {
  const [dias, setDias] = useState(() => diasParaDiaLixo())

  useEffect(() => {
    const id = setInterval(() => setDias(diasParaDiaLixo()), 3600000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="titulo-encerramento" className="grain sel-escuro relative overflow-hidden bg-emerald-950 py-16 sm:py-20 text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-5xl" aria-hidden="true">🌍</p>
        <h2 id="titulo-encerramento" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Obrigado por chegar até aqui!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-emerald-50/85 leading-relaxed">
          Este site foi feito de aluno para aluno. Leve a ideia adiante: descarte certo,
          compartilhe e volte sempre.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-lime-300/10 px-5 py-2.5 font-semibold text-lime-200" role="status">
          Faltam {dias} dias para o Dia Internacional do E-lixo (14/out)
        </p>
        <div className="mt-6">
          <a
            href="#inicio"
            className="btn-shine inline-flex rounded-full bg-lime-300 px-7 py-3.5 font-semibold text-emerald-950 shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200"
          >
            Voltar ao início ↑
          </a>
        </div>
      </div>
    </section>
  )
}
