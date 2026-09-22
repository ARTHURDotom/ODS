import { describe, expect, it } from 'vitest'
import { calcularELixo } from './components/Calculadora.jsx'
import { diasParaDiaLixo } from './components/Encerramento.jsx'
import { ENQUETE_SETS } from './components/Enquete.jsx'

describe('utilidades do site', () => {
  it('calculadora soma pesos corretamente', () => {
    expect(calcularELixo({ celulares: '10', notebooks: '1', tvs: '0', geladeiras: '0' })).toBeCloseTo(4.0, 5)
    expect(calcularELixo({ celulares: '', notebooks: '', tvs: '', geladeiras: '' })).toBe(0)
  })

  it('contagem regressiva retorna 1..366 dias', () => {
    const d = diasParaDiaLixo(new Date(2026, 0, 1))
    expect(d).toBeGreaterThanOrEqual(1)
    expect(d).toBeLessThanOrEqual(366)
  })

  it('enquete tem 3 conjuntos de 4 opções', () => {
    expect(ENQUETE_SETS).toHaveLength(3)
    ENQUETE_SETS.forEach((s) => {
      expect(s.opcoes).toHaveLength(4)
    })
  })
})
