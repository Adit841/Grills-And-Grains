import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Logo from '../components/Logo'
import HeroPattern from '../components/HeroPattern'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="hero-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,21,16,0.4)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-950/20 via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center px-4 pt-28 pb-36 text-center sm:px-6 sm:pt-32 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-4 sm:gap-8"
        >
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.4em] text-cream/50 sm:text-xs">
            Est.
          </span>
          <Logo className="h-16 w-16 sm:h-20 sm:w-20" badgeClassName="rounded-xl p-1.5 sm:p-2" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.4em] text-cream/50 sm:text-xs">
            2026
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-8 font-body text-[10px] font-semibold uppercase tracking-[0.45em] text-cream/60 sm:text-xs"
        >
          Premium Everyday Nutrition
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-brand w-full text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.85] tracking-tight text-cream"
        >
          GRILL
          <span className="mx-1 inline-block text-[0.55em] align-middle">&</span>
          GRAINS
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-6 w-full max-w-2xl sm:mt-8">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-emerald-500 via-cyan-400 via-50% via-rose-500 to-amber-400 px-4 py-3 shadow-[0_4px_32px_rgba(250,204,21,0.15)] sm:px-6 sm:py-3.5">
            <p className="font-brand skew-x-[-6deg] text-xl font-black uppercase italic tracking-wide text-bg sm:text-2xl md:text-3xl">
              Grilled, Not Fried
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-md font-body text-sm leading-relaxed text-cream/50 sm:text-base"
        >
          High protein meals built for performance. Chef-crafted grills,
          power bowls, and clean everyday nutrition.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#menu"
            className="inline-flex w-full min-w-[160px] items-center justify-center rounded-full bg-accent px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-bg shadow-[0_0_28px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] sm:w-auto"
          >
            View Menu
          </a>
         
        </motion.div>
      </motion.div>

      <HeroPattern />

      <motion.a
        href="#categories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll to categories"
        className="absolute bottom-32 left-1/2 z-20 -translate-x-1/2 text-cream/30 transition-colors duration-300 hover:text-accent sm:bottom-36"
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
