import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('App', () => {
  it('monta a página inteira sem quebrar', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('mostra o título principal', () => {
    render(<App />)
    const titulos = screen.getAllByRole('heading', { level: 1 })
    expect(titulos.length).toBeGreaterThanOrEqual(1)
  })
})
