import CabecalhoSecao from './CabecalhoSecao.jsx'

export default function CasoReal() {
  return (
    <section id="caso-real" aria-labelledby="titulo-caso-real" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <CabecalhoSecao
            id="titulo-caso-real"
            kicker="Caso real · Gana"
            kickerClassName="text-sm font-semibold uppercase tracking-widest text-emerald-700"
            titulo="Agbogbloshie: o retrato do descarte errado"
          />
          <p className="mt-4 text-lg lg:text-xl text-stone-600 leading-relaxed">
            Em Acra, capital de Gana, fica um dos maiores depósitos de e-lixo do mundo.
            Milhares de pessoas — muitas jovens — queimam cabos e placas a céu aberto
            para extrair cobre, respirando fumaça tóxica todos os dias.
          </p>
          <p className="mt-3 text-lg lg:text-xl text-stone-600 leading-relaxed">
            O solo e a água da região acumulam chumbo e outros metais. É o oposto exato
            da reciclagem formal: sem proteção, sem direitos, sem futuro — e o destino
            de boa parte do e-lixo exportado ilegalmente.
          </p>
        </div>
        <div className="rounded-[2rem] bg-emerald-950 p-6 sm:p-8 text-white lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-200">Por que isso importa aqui</p>
          <ul className="mt-4 space-y-3 text-emerald-50/90 leading-relaxed list-disc pl-5">
            <li>Mostra o custo humano do consumo sem descarte correto.</li>
            <li>Reforça por que o Brasil precisa de logística reversa funcionando.</li>
            <li>É tema de relatórios da ONU e da OMS sobre e-lixo e saúde.</li>
          </ul>
          <p className="mt-4 text-sm text-emerald-50/70">
            Fontes: relatórios da ONU sobre fluxos de e-lixo e ficha da OMS sobre e-lixo e saúde infantil.
          </p>
        </div>
      </div>
    </section>
  )
}
