/** Divisória de trilha de circuito tracejada entre seções claras. */
export default function CircuitoDivisor() {
  return (
    <div aria-hidden="true" className="bg-[#eff6dc] px-4 py-2 select-none">
      <svg viewBox="0 0 1200 32" preserveAspectRatio="none" className="mx-auto block h-8 w-full max-w-5xl">
        <path
          d="M0,16 H280 l20,-12 h120 l16,12 h200 l20,-12 h120 l16,12 h220 l20,-12 h120 l16,12 H1200"
          fill="none"
          stroke="#059669"
          strokeWidth="2"
          strokeDasharray="8 6"
          opacity="0.35"
        />
        <circle cx="300" cy="4" r="4" fill="#059669" opacity="0.4" />
        <circle cx="636" cy="28" r="4" fill="#059669" opacity="0.4" />
        <circle cx="972" cy="4" r="4" fill="#059669" opacity="0.4" />
      </svg>
    </div>
  )
}
