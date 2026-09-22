import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import ODS from './components/ODS.jsx'
import Solucoes from './components/Solucoes.jsx'
import Jogo from './components/Jogo.jsx'
import Quiz from './components/Quiz.jsx'
import Faq from './components/Faq.jsx'
import CTA from './components/CTA.jsx'
import QuemFez from './components/QuemFez.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import VoltarTopo from './components/VoltarTopo.jsx'
import FaixaRolante from './components/FaixaRolante.jsx'
import BarraProgresso from './components/BarraProgresso.jsx'
import DivisoriaOnda from './components/DivisoriaOnda.jsx'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <BarraProgresso />
      <Header />
      <main id="conteudo">
        <Hero />
        <FaixaRolante />
        <Reveal><Problema /></Reveal>
        <Reveal><ODS /></Reveal>
        <DivisoriaOnda />
        <Reveal><Solucoes /></Reveal>
        <Reveal><Jogo /></Reveal>
        <Reveal><Quiz /></Reveal>
        <Reveal><CTA /></Reveal>
        <DivisoriaOnda invertida />
        <Reveal><QuemFez /></Reveal>
        <Reveal><Faq /></Reveal>
      </main>
      <Footer />
      <VoltarTopo />
    </>
  )
}
