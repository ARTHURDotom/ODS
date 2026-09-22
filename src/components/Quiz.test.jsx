import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz.jsx'

describe('Quiz', () => {
  it('exibe título e as 5 perguntas', () => {
    render(<Quiz />)
    expect(screen.getByText('Quiz E-lixo Zero')).toBeInTheDocument()
    expect(screen.getByText(/Quanto de lixo eletrônico/)).toBeInTheDocument()
    expect(screen.getByText(/geladeiras velhas/)).toBeInTheDocument()
  })
})
