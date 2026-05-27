import { motion } from 'framer-motion'

export default function SectionTitle({
  tag,
  title,
  subtitle,
  variant = 'default',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-3xl text-center"
    >
      {tag && (
        <span className="mb-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {tag}
        </span>
      )}

      {variant === 'banner' ? (
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-sm bg-gradient-to-r from-emerald-500 via-cyan-400 via-50% via-rose-500 to-amber-400 px-4 py-3 shadow-[0_4px_32px_rgba(250,204,21,0.12)] sm:px-6 sm:py-3.5">
          <h2 className="font-brand skew-x-[-6deg] text-2xl uppercase italic tracking-wide text-bg sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>
      ) : (
        <h2 className="font-brand text-4xl leading-none tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 font-body text-base leading-relaxed text-cream/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
