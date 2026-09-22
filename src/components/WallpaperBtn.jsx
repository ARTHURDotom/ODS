export default function WallpaperBtn() {
  function baixar() {
    const c = document.createElement('canvas')
    c.width = 1080
    c.height = 1920
    const x = c.getContext('2d')
    const g = x.createLinearGradient(0, 0, 1080, 1920)
    g.addColorStop(0, '#022c22')
    g.addColorStop(1, '#065f46')
    x.fillStyle = g
    x.fillRect(0, 0, 1080, 1920)
    x.strokeStyle = '#bef264'
    x.lineWidth = 10
    x.beginPath()
    x.arc(540, 700, 220, 0, Math.PI * 2)
    x.stroke()
    x.fillStyle = '#bef264'
    x.font = '800 120px system-ui, sans-serif'
    x.textAlign = 'center'
    x.fillText('♻️', 540, 750)
    x.fillStyle = '#ffffff'
    x.font = '800 90px system-ui, sans-serif'
    x.fillText('E-lixo Zero', 540, 1050)
    x.fillStyle = '#bef264'
    x.font = '700 44px system-ui, sans-serif'
    x.fillText('1.º ano K · COP 30', 540, 1130)
    x.fillStyle = 'rgba(236,253,245,0.85)'
    x.font = '400 36px system-ui, sans-serif'
    x.fillText('Reparar · Reutilizar · Reciclar', 540, 1210)
    const link = document.createElement('a')
    link.download = 'papel-de-parede-elixo-zero.png'
    link.href = c.toDataURL('image/png')
    link.click()
  }

  return (
    <button
      type="button"
      onClick={baixar}
      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700"
    >
      📱 Baixar papel de parede
    </button>
  )
}
