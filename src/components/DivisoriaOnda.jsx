export default function DivisoriaOnda({ invertida = false }) {
  if (invertida) {
    return (
      <div aria-hidden="true" className="bg-emerald-950 leading-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 sm:h-20 w-full">
          <path
            d="M0,52 C240,95 480,5 720,38 C960,71 1200,92 1440,46 L1440,90 L0,90 Z"
            fill="#eff6dc"
          />
        </svg>
      </div>
    )
  }
  return (
    <div aria-hidden="true" className="bg-[#eff6dc] leading-none">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 sm:h-20 w-full">
        <path
          d="M0,52 C240,95 480,5 720,38 C960,71 1200,92 1440,46 L1440,90 L0,90 Z"
          fill="#022c22"
        />
      </svg>
    </div>
  )
}
