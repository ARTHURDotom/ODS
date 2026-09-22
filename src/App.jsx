import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import ODS from './components/ODS.jsx'
import Solucoes from './components/Solucoes.jsx'
import Jogo from './components/Jogo.jsx'
import CTA from './components/CTA.jsx'
import QuemFez from './components/QuemFez.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import VoltarTopo from './components/VoltarTopo.jsx'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Reveal><Problema /></Reveal>
        <Reveal><ODS /></Reveal>
        <Reveal><Solucoes /></Reveal>
        <Reveal><Jogo /></Reveal>
        <Reveal><CTA /></Reveal>
        <Reveal><QuemFez /></Reveal>
      </main>
      <Footer />
      <VoltarTopo />
    </>
  )
}
