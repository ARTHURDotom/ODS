import CabecalhoSecao from './CabecalhoSecao.jsx'
import Destino from './Destino.jsx'
import Forca from './Forca.jsx'
import CacaPalavras from './CacaPalavras.jsx'
import Flashcards from './Flashcards.jsx'
import Roleta from './Roleta.jsx'

export default function Arcade() {
  return (
    <section id="arcade" aria-labelledby="titulo-arcade" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CabecalhoSecao
          id="titulo-arcade"
          kicker="Fliperama E-lixo"
          kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
          titulo="Mais jogos da turma"
        />
        <p className="mt-4 max-w-3xl text-lg lg:text-xl text-stone-600 leading-relaxed">
          Cinco minigames rápidos — tudo aqui na página, sem cadastro.
        </p>
        <div className="mt-8 rounded-[2rem] bg-emerald-950 p-4 sm:p-8 text-white">
          <Destino />
          <Forca />
          <CacaPalavras />
          <Flashcards />
          <Roleta />
        </div>
      </div>
    </section>
  )
}
