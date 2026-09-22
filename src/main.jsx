import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {})
  })
}

window.addEventListener('beforeprint', () => {
  document.querySelectorAll('details').forEach((d) => {
    d.open = true
  })
})

window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-cert')
})

/* VLibras: carrega só após a primeira interação ou rolagem */
function carregarVLibras() {
  if (window.VLibras || document.querySelector('script[data-vlibras]')) return
  const s = document.createElement('script')
  s.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
  s.async = true
  s.dataset.vlibras = '1'
  s.onload = () => {
    try {
      new window.VLibras.Widget()
    } catch {
      /* plugin indisponível */
    }
  }
  document.body.appendChild(s)
}
;['scroll', 'click', 'keydown', 'touchstart'].forEach((ev) =>
  window.addEventListener(ev, carregarVLibras, { once: true, passive: true })
)
