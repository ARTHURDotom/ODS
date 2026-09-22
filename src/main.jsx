import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErroCritico from './components/ErroCritico.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErroCritico>
      <App />
    </ErroCritico>
  </React.StrictMode>
)

/* Se o JavaScript não montar nada em 6s (arquivo local, cache, rede),
   mostra aviso em vez de página em branco. Some sozinho se montar. */
setTimeout(() => {
  const root = document.getElementById('root')
  if (!root || root.hasChildNodes()) return
  const aviso = document.createElement('div')
  aviso.id = 'falha-boot'
  aviso.style.cssText =
    'min-height:100vh;display:flex;align-items:center;justify-content:center;' +
    'padding:1.5rem;background:#eff6dc;font-family:system-ui,sans-serif;'
  aviso.innerHTML =
    '<div style="max-width:32rem;background:#fff;border-radius:1.5rem;' +
    'padding:2rem;text-align:center">' +
    '<p style="font-size:2.5rem">📄</p>' +
    '<h1 style="font-size:1.5rem;font-weight:800;color:#1c1917">A página não carregou</h1>' +
    '<p style="margin-top:.5rem;color:#57534e">Possíveis causas: abrir o arquivo direto ' +
    '(use <b>npm run dev</b> ou o link publicado), cache antigo (aperte <b>Ctrl+F5</b>) ' +
    'ou internet instável.</p></div>'
  document.body.prepend(aviso)
  const obs = new MutationObserver(() => {
    if (root.hasChildNodes()) {
      document.getElementById('falha-boot')?.remove()
      obs.disconnect()
    }
  })
  obs.observe(root, { childList: true })
}, 6000)

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
