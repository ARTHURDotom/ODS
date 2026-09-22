import React from 'react'

/** Se qualquer seção quebrar, mostra diagnóstico em vez de página em branco. */
export default class ErroCritico extends React.Component {
  constructor(props) {
    super(props)
    this.state = { erro: null }
  }

  static getDerivedStateFromError(erro) {
    return { erro }
  }

  componentDidCatch(erro, info) {
    console.error('Erro na página:', erro, info)
  }

  render() {
    if (this.state.erro) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: '#eff6dc',
            fontFamily: 'system-ui, sans-serif'
          }}
        >
          <div
            style={{
              maxWidth: '32rem',
              background: '#fff',
              borderRadius: '1.5rem',
              padding: '2rem',
              textAlign: 'center'
            }}
          >
            <p style={{ fontSize: '2.5rem' }}>😕</p>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c1917' }}>
              Ops! Algo não carregou.
            </h1>
            <p style={{ marginTop: '0.5rem', color: '#57534e' }}>
              Anote o erro abaixo e avise a turma. Tentar recarregar costuma resolver.
            </p>
            <p
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: '#fef2f2',
                borderRadius: '0.75rem',
                fontSize: '0.8rem',
                color: '#991b1b',
                wordBreak: 'break-word'
              }}
            >
              {String(this.state.erro?.message || this.state.erro)}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                marginTop: '1.25rem',
                background: '#059669',
                color: '#fff',
                fontWeight: 700,
                border: 0,
                borderRadius: '9999px',
                padding: '0.875rem 2rem',
                cursor: 'pointer'
              }}
            >
              Recarregar a página
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
