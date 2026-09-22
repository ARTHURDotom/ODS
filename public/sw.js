const CACHE = 'elixo-zero-v2'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(['./', './index.html', './offline.html', './turma-1k.jpg', './qr-site.svg'])
    )
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./offline.html'))
    )
    return
  }
  event.respondWith(
    caches.match(request).then((cached) => {
      const busca = fetch(request).then((res) => {
        const copia = res.clone()
        caches.open(CACHE).then((cache) => cache.put(request, copia))
        return res
      })
      return cached || busca
    })
  )
})
