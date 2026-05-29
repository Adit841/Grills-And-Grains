import { motion } from 'framer-motion'
import { Flame, UtensilsCrossed, ZoomIn } from 'lucide-react'
import { formatPrice } from '../data/menuData'

function MenuItemImage({ item, onImageClick }) {
  if (item.image) {
    return (
      <button
        type="button"
        onClick={() => onImageClick({ src: item.image, name: item.name })}
        aria-label={`View full image of ${item.name}`}
        className="group/image relative h-20 w-20 shrink-0 cursor-zoom-in overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] sm:h-24 sm:w-24"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        <span className="pointer-events-none absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-bg/70 text-cream/80 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
          <ZoomIn size={12} />
        </span>
      </button>
    )
  }

  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brown-light/50 sm:h-24 sm:w-24">
      <UtensilsCrossed size={22} className="text-cream/25" />
    </div>
  )
}

export default function MenuListItem({ item, index = 0, onImageClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      className="group flex items-start gap-4 border-b border-white/5 py-4 last:border-b-0 sm:gap-5 sm:py-5"
    >
      <MenuItemImage item={item} onImageClick={onImageClick} />

      <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-brand text-lg tracking-wide text-cream sm:text-xl">
              {item.name}
            </h4>
            {item.spicy && (
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                Spicy
              </span>
            )}
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cream/50 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Flame size={12} className="text-accent" />
              {item.protein} protein
            </span>
            <span className="text-cream/30">·</span>
            <span>{item.calories}</span>
          </div>
        </div>

        <span className="shrink-0 font-brand text-xl text-accent sm:text-2xl">
          {formatPrice(item.price)}
        </span>
      </div>
    </motion.article>
  )
}
