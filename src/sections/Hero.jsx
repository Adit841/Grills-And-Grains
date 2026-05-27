import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import HeroPoster from '../components/HeroPoster'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="hero-poster relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a0c0c] via-[#140909] to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08)_0%,transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.08)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4 pt-24 pb-24 sm:px-6 sm:pt-28 lg:px-8">
        <HeroPoster />

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.9}
          variants={fadeUp}
          className="mt-10 sm:mt-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-[#F5EEDC]/15 bg-[#F5EEDC]/5 px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#F5EEDC]/80 transition-all duration-500 hover:border-[#F5EEDC]/30 hover:bg-[#F5EEDC]/10 hover:text-[#F5EEDC] hover:shadow-[0_0_32px_rgba(245,238,220,0.12)]"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to menu"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[#F5EEDC]/25 transition-colors duration-300 hover:text-accent"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
