/** Emblema folha + circuito do E-lixo Zero. */
export default function Emblema({ tamanho = 36, className = '' }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="22" fill="#052e16" opacity="0.12" />
      <path
        d="M24 6c8 6 12 12 12 19a12 12 0 0 1-24 0c0-7 4-13 12-19z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 14v10m0 0l-6 6m6-6l6 6M18 20h-4m16 0h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" />
    </svg>
  )
}
