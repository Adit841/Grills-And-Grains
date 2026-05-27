import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function MenuCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-brown/60 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-6 sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-brand text-2xl tracking-wide text-cream sm:text-3xl">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
            {item.price}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-cream/60 sm:text-base">
          {item.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {item.protein && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream/70">
              <Flame size={12} className="text-accent" />
              {item.protein} protein
            </span>
          )}
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
