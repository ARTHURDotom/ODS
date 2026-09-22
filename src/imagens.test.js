import { describe, expect, it } from 'vitest'
import { srcSetUnsplash } from './imagens.js'

describe('srcSetUnsplash', () => {
  it('gera srcset com 4 larguras a partir da URL', () => {
    const out = srcSetUnsplash('https://images.unsplash.com/photo-x?q=80&w=1000&auto=format&fit=crop')
    expect(out).toContain('w=480&')
    expect(out).toContain('w=800&')
    expect(out).toContain('w=1200&')
    expect(out).toContain('w=1600&')
    expect(out).toContain('480w')
    expect(out).toContain('1600w')
  })

  it('retorna undefined fora do Unsplash', () => {
    expect(srcSetUnsplash('./turma-1k.jpg')).toBeUndefined()
    expect(srcSetUnsplash('')).toBeUndefined()
  })
})
