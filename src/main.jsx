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
