import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import ODS from './components/ODS.jsx'
import Solucoes from './components/Solucoes.jsx'
import Jogo from './components/Jogo.jsx'
import Quiz from './components/Quiz.jsx'
import { perguntasAvancadas, perguntasNivel3, todasPerguntas } from './quizData.js'
import Enquete from './components/Enquete.jsx'
import Checklist from './components/Checklist.jsx'
import Memoria from './components/Memoria.jsx'
import Arcade from './components/Arcade.jsx'
import Jornada from './components/Jornada.jsx'
import Comparador from './components/Comparador.jsx'
import CasoReal from './components/CasoReal.jsx'
import Numeros from './components/Numeros.jsx'
import Brasil from './components/Brasil.jsx'
import Mitos from './components/Mitos.jsx'
import Calculadora from './components/Calculadora.jsx'
import Sobre from './components/Sobre.jsx'
import Votacao from './components/Votacao.jsx'
import Encerramento from './components/Encerramento.jsx'
import Cartaz from './components/Cartaz.jsx'
import Slides from './components/Slides.jsx'
import DotsNavegacao from './components/DotsNavegacao.jsx'
import PainelAcesso from './components/PainelAcesso.jsx'
import Atalhos from './components/Atalhos.jsx'
import ThemeColor from './components/ThemeColor.jsx'
import FaviconDinamico from './components/FaviconDinamico.jsx'
import Folhas from './components/Folhas.jsx'
import Splash from './components/Splash.jsx'
import CursorPersonalizado from './components/CursorPersonalizado.jsx'
import Ranking from './components/Ranking.jsx'
import Faq from './components/Faq.jsx'
import CTA from './components/CTA.jsx'
import QuemFez from './components/QuemFez.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import VoltarTopo from './components/VoltarTopo.jsx'
import FaixaRolante from './components/FaixaRolante.jsx'
import AoVivo from './components/AoVivo.jsx'
import BarraProgresso from './components/BarraProgresso.jsx'
import DivisoriaOnda from './components/DivisoriaOnda.jsx'
import CircuitoDivisor from './components/CircuitoDivisor.jsx'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <BarraProgresso />
      <Splash />
      <Header />
      <main id="conteudo">
        <Hero />
        <FaixaRolante />
        <AoVivo />
        <Reveal><Problema /></Reveal>
        <Reveal><Jornada /></Reveal>
        <Reveal><Comparador /></Reveal>
        <Reveal><Numeros /></Reveal>
        <Reveal><CasoReal /></Reveal>
        <Reveal><ODS /></Reveal>
        <Reveal><Mitos /></Reveal>
        <Reveal><Brasil /></Reveal>
        <DivisoriaOnda />
        <Reveal><Solucoes /></Reveal>
        <Reveal><Calculadora /></Reveal>
        <CircuitoDivisor />
        <Reveal><Jogo /></Reveal>
        <Reveal><Memoria /></Reveal>
        <Reveal><Arcade /></Reveal>
        <CircuitoDivisor />
        <Reveal><Quiz /></Reveal>
        <Reveal>
          <Quiz
            dados={perguntasAvancadas}
            chaveRecorde="quiz-recorde-2"
            kicker="Nível 2 · Para quem gabaritou"
            titulo="Quiz avançado"
            idSecao="quiz-avancado"
            idTitulo="titulo-quiz-avancado"
          />
        </Reveal>
        <Reveal>
          <Quiz
            dados={perguntasNivel3}
            chaveRecorde="quiz-recorde-3"
            kicker="Nível 3 · Especialista"
            titulo="Quiz especialista"
            idSecao="quiz-nivel-3"
            idTitulo="titulo-quiz-nivel-3"
          />
        </Reveal>
        <Reveal>
          <Quiz
            dados={todasPerguntas}
            chaveRecorde="quiz-recorde-maratona"
            kicker="Maratona · 15 perguntas"
            titulo="Quiz maratona"
            idSecao="quiz-maratona"
            idTitulo="titulo-quiz-maratona"
          />
        </Reveal>
        <Reveal><Ranking /></Reveal>
        <Reveal><Enquete /></Reveal>
        <Reveal><Votacao /></Reveal>
        <Reveal><CTA /></Reveal>
        <Reveal><Checklist /></Reveal>
        <Reveal><QuemFez /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Sobre /></Reveal>
        <Reveal><Encerramento /></Reveal>
        <Cartaz />
      </main>
      <Footer />
      <VoltarTopo />
      <CursorPersonalizado />
      <DotsNavegacao />
      <PainelAcesso />
      <Atalhos />
      <ThemeColor />
      <FaviconDinamico />
      <Folhas />
      <Slides />
    </>
  )
}
