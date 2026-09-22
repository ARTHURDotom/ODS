const LARGURAS = [480, 800, 1200, 1600]

/** Gera srcSet responsivo para URLs do Unsplash (troca o parâmetro w). */
export function srcSetUnsplash(url) {
  if (!url || !url.includes('images.unsplash.com')) return undefined
  return LARGURAS.map((w) => `${url.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(', ')
}
