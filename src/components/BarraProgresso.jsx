import { motion, useScroll, useSpring } from 'motion/react'

export default function BarraProgresso() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-lime-300"
    />
  )
}
