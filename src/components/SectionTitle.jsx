import { motion } from 'framer-motion'
import GrilledNotFriedBanner from './GrilledNotFriedBanner'

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
        <GrilledNotFriedBanner />
      ) : (
        <h2 className="font-body text-4xl font-bold leading-none tracking-tight text-cream sm:text-5xl lg:text-6xl">
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
