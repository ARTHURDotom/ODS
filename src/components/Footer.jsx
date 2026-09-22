import Emblema from './Emblema.jsx'
import ContrasteToggle from './ContrasteToggle.jsx'

const saibaMais = [
  ['Global E-waste Monitor 2024', 'https://globalewaste.org/'],
  ['ODS — Nações Unidas', 'https://brasil.un.org/pt-br/sdgs'],
  ['COP 30 — UNFCCC', 'https://unfccc.int/cop30'],
  ['ABREE — pontos de coleta', 'https://abree.org.br/']
]

const linkSuave =
  'link-crescente tracking-respira transition-colors duration-300 ease-out hover:text-white'

export default function Footer() {
  return (
    <footer className="sel-escuro diagonal-fina degrade-animado bg-gradient-to-b from-emerald-950 to-teal-950 border-t-2 border-lime-300/40 text-emerald-50/70" aria-label="Rodapé">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-extrabold text-white text-lg">
            <Emblema tamanho={28} className="text-lime-300" />
            E-lixo Zero · COP 30
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Landing page educacional sobre lixo eletrônico e Objetivos de Desenvolvimento
            Sustentável, com foco na COP 30 em Belém do Pará. Conteúdo informativo, sem fins comerciais.
          </p>
          <figure className="mt-4 flex items-center gap-3">
            <img
              src="./qr-site.svg"
              alt="QR code para abrir o site E-lixo Zero no celular"
              loading="lazy"
              width="96"
              height="96"
              className="h-24 w-24 rounded-xl bg-[#eff6dc] p-1.5"
            />
            <figcaption className="text-xs leading-relaxed">
              Aponte a câmera para visitar<br />e cole no mural da escola.
            </figcaption>
          </figure>
        </div>
        <div>
          <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Saiba mais</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {saibaMais.map(([label, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={`${linkSuave} group`}>
                  {label}{' '}
                  <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-6 font-semibold text-white text-sm uppercase tracking-wider">
            Referências de dados
          </h2>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-emerald-50/60">
            <li>Global E-waste Monitor 2024 — ITU / UNITAR</li>
            <li>Agenda 2030 e ODS — ONU · PNRS (Lei 12.305/2010) e Decreto 10.240/2020</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#inicio" className={linkSuave}>Política de privacidade</a></li>
            <li><a href="#inicio" className={linkSuave}>Termos de uso</a></li>
            <li><a href="#inicio" className={linkSuave}>Acessibilidade (WCAG 2.1 AA)</a></li>
          </ul>
          <nav aria-label="Links do rodapé" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <li><a href="#problema" className={linkSuave}>O problema</a></li>
              <li><a href="#ods" className={linkSuave}>ODS</a></li>
              <li><a href="#solucoes" className={linkSuave}>Soluções</a></li>
              <li><a href="#jogo" className={linkSuave}>Jogo</a></li>
              <li><a href="#quiz" className={linkSuave}>Quiz</a></li>
              <li><a href="#participe" className={linkSuave}>Participe</a></li>
              <li><a href="#quem-fez" className={linkSuave}>Quem fez</a></li>
              <li><a href="#faq" className={linkSuave}>Dúvidas</a></li>
              <li><a href="#sobre" className={linkSuave}>Sobre</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-emerald-50/50">
          <p>© 2026 E-lixo Zero · COP 30 — Belém do Pará, Brasil.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-300" />
              Atualizado em 2026
            </span>
            <span aria-hidden="true">·</span>
            <ContrasteToggle />
          </p>
          <p>Trabalho escolar · 1.º ano K — Colégio Cruzeiro do Sul, São Miguel · Fotos: Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}
