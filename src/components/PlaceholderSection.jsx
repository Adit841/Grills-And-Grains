import { motion } from 'framer-motion'

export default function PlaceholderSection({ id, label }) {
  return (
    <section
      id={id}
      aria-label={label}
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-t border-white/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.04)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative px-4 text-center"
      >
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-accent/70">
          {label}
        </span>
        <h2 className="font-brand text-5xl tracking-wide text-cream/90 sm:text-6xl md:text-7xl">
          Coming Soon
        </h2>
        <p className="mt-4 text-sm text-cream/40 sm:text-base">
          We&apos;re crafting something exceptional.
        </p>
      </motion.div>
    </section>
  )
}
