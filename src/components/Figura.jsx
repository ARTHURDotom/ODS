import { memo } from 'react'
import { srcSetUnsplash } from '../imagens.js'

/** Foto padrão das seções: imagem + legenda, com moldura arredondada. */
function Figura({
  src,
  webpSrc,
  alt,
  legenda,
  className = '',
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-[2rem]',
  imgClassName = '',
  legendaClassName = 'mt-2 text-xs lg:text-sm text-stone-500',
  sizes = '(max-width: 768px) 100vw, 50vw',
  eager = false,
  children
}) {
  const imagem = (
    <img
      src={src}
      srcSet={srcSetUnsplash(src)}
      sizes={sizes}
      alt={alt}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      className={`w-full object-cover ${aspect} ${rounded} ${imgClassName}`}
    />
  )
  return (
    <figure className={`relative ${className}`}>
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          {imagem}
        </picture>
      ) : (
        imagem
      )}
      {legenda && (
        <figcaption className={legendaClassName}>
          {legenda}
        </figcaption>
      )}
      {children}
    </figure>
  )
}

export default memo(Figura)
