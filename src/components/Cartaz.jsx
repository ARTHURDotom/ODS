/** Cartaz para impressão: visível só no print (mural da escola). */
export default function Cartaz() {
  return (
    <section aria-label="Cartaz para impressão" className="hidden print:block">
      <div className="mx-auto max-w-xl p-10 text-center text-black">
        <p className="text-sm font-bold uppercase tracking-widest">1.º ano K · Colégio Cruzeiro do Sul</p>
        <h2 className="mt-2 text-4xl font-extrabold">E-lixo Zero ♻️</h2>
        <p className="mt-3 text-lg">
          Seu eletrônico velho não desaparece. Aprenda a descartar certo e teste seus conhecimentos no quiz!
        </p>
        <img
          src="./qr-site.svg"
          alt="QR code do site E-lixo Zero"
          width="220"
          height="220"
          className="mx-auto mt-6 h-56 w-56"
        />
        <p className="mt-4 font-bold">Aponte a câmera e visite: arthurdotom.github.io/ODS</p>
        <p className="mt-2 text-sm">Reparar · Reutilizar · Reciclar — COP 30</p>
      </div>
    </section>
  )
}
