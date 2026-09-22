import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import ODS from './components/ODS.jsx'
import Solucoes from './components/Solucoes.jsx'
import Jogo from './components/Jogo.jsx'
import Quiz from './components/Quiz.jsx'
import Enquete from './components/Enquete.jsx'
import Checklist from './components/Checklist.jsx'
import Memoria from './components/Memoria.jsx'
import Jornada from './components/Jornada.jsx'
import Mitos from './components/Mitos.jsx'
import Calculadora from './components/Calculadora.jsx'
import Sobre from './components/Sobre.jsx'
import Splash from './components/Splash.jsx'
import CursorPersonalizado from './components/CursorPersonalizado.jsx'
import Faq from './components/Faq.jsx'
import CTA from './components/CTA.jsx'
import QuemFez from './components/QuemFez.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import VoltarTopo from './components/VoltarTopo.jsx'
import FaixaRolante from './components/FaixaRolante.jsx'
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
        <Reveal><Problema /></Reveal>
        <Reveal><Jornada /></Reveal>
        <Reveal><ODS /></Reveal>
        <Reveal><Mitos /></Reveal>
        <DivisoriaOnda />
        <Reveal><Solucoes /></Reveal>
        <Reveal><Calculadora /></Reveal>
        <CircuitoDivisor />
        <Reveal><Jogo /></Reveal>
        <Reveal><Memoria /></Reveal>
        <CircuitoDivisor />
        <Reveal><Quiz /></Reveal>
        <Reveal><Enquete /></Reveal>
        <Reveal><CTA /></Reveal>
        <Reveal><Checklist /></Reveal>
        <Reveal><QuemFez /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Sobre /></Reveal>
      </main>
      <Footer />
      <VoltarTopo />
      <CursorPersonalizado />
    </>
  )
}
