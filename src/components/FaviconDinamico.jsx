import { useEffect } from 'react'

const FAVICONS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2316a34a'/%3E%3Ctext x='16' y='23' font-size='18' text-anchor='middle'%3E♻️%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23065f46'/%3E%3Ctext x='16' y='23' font-size='18' text-anchor='middle'%3E🌱%3C/text%3E%3C/svg%3E"
]

export default function FaviconDinamico() {
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % FAVICONS.length
      document.querySelectorAll("link[rel='icon']").forEach((el) => {
        el.setAttribute('href', FAVICONS[i])
      })
    }, 6000)
    return () => clearInterval(id)
  }, [])
  return null
}
