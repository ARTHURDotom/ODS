import QRCode from 'qrcode'

await QRCode.toFile('public/qr-site.svg', 'https://arthurdotom.github.io/ODS/', {
  type: 'svg',
  width: 512,
  margin: 1,
  color: { dark: '#022c22', light: '#eff6dc' }
})

console.log('QR gerado em public/qr-site.svg')
