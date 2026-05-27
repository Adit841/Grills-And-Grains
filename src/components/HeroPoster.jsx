import { motion } from 'framer-motion'
import posterArt from '../assets/fronmt page.webp'

export default function HeroPoster() {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.008 }}
      className="hero-poster-texture group/poster relative mx-auto w-full max-w-[min(100%,680px)] rounded-lg"
    >
      <h1 className="sr-only">Grill & Grains — Grilled, Not Fried</h1>

      <img
        src={posterArt}
        alt="Grill & Grains — Grilled, Not Fried"
        width={680}
        height={920}
        className="relative z-10 h-auto w-full rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ imageRendering: 'auto' }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-lg ring-1 ring-[#F5EEDC]/5"
      />
    </motion.figure>
  )
}
