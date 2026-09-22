import { describe, expect, it } from 'vitest'
import { mensagemQuiz, perguntas } from './quizData.js'

describe('quizData', () => {
  it('tem 5 perguntas com resposta válida', () => {
    expect(perguntas).toHaveLength(5)
    perguntas.forEach((p) => {
      expect(p.pergunta.length).toBeGreaterThan(10)
      expect(p.opcoes.length).toBeGreaterThanOrEqual(3)
      expect(p.correta).toBeGreaterThanOrEqual(0)
      expect(p.correta).toBeLessThan(p.opcoes.length)
    })
  })

  it('mensagens por faixa de pontos', () => {
    expect(mensagemQuiz(5, 5)).toMatch(/lenda/i)
    expect(mensagemQuiz(3, 5)).toMatch(/pouco/i)
    expect(mensagemQuiz(0, 5)).toMatch(/começo/i)
  })
})
