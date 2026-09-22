import { memo } from 'react'

/** Botão primário padrão (lima sobre verde-escuro, com brilho no hover). */
function BotaoPrimario({ href, children, className = '', ...rest }) {
  const classes = `btn-shine group inline-flex justify-center rounded-full bg-lime-300 font-semibold text-emerald-950 shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl active:translate-y-0 active:scale-95 ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}

export default memo(BotaoPrimario)
