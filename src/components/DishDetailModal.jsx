import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Flame, Leaf, Share2, X } from 'lucide-react'
import { contact } from '../data/contact'
import {
  formatPrice,
  getDefaultSelections,
  getItemTotalPrice,
} from '../data/menuData'

function VegIcon() {
  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center rounded-sm border-2 border-emerald-500"
      aria-label="Vegetarian"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  )
}

function buildWhatsAppUrl(dish, selections, totalPrice) {
  const lines = [`Hi! I'd like to order:`, '', dish.name]

  if (dish.customizations?.length) {
    dish.customizations.forEach((group) => {
      const selectedId = selections[group.id]
      const option = group.options.find((entry) => entry.id === selectedId)
      if (option) {
        lines.push(`${group.name}: ${option.name}`)
      }
    })
  }

  lines.push('', `Total: ${formatPrice(totalPrice)}`)
  return `${contact.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function DishDetailModal({ dish, onClose }) {
  const [selections, setSelections] = useState({})
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

  useEffect(() => {
    if (!dish) return undefined

    setSelections(getDefaultSelections(dish))
    setShowAdditionalInfo(false)

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [dish, onClose])

  const totalPrice = useMemo(
    () => (dish ? getItemTotalPrice(dish, selections) : 0),
    [dish, selections],
  )

  const handleShare = async () => {
    if (!dish) return

    const shareData = {
      title: dish.name,
      text: `${dish.name} — ${dish.protein} protein, ${dish.calories}. ${dish.description ?? ''}`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // User cancelled or share failed silently
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`)
    }
  }

  return (
    <AnimatePresence>
      {dish && (
        <div className="fixed inset-0 z-[75] flex items-end justify-center sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close dish details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-detail-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-brown-dark shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute left-1/2 top-3 z-20 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto">
              {dish.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brown">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="px-5 pb-28 pt-5 sm:px-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {dish.isVeg && <VegIcon />}
                    {dish.vegan && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        <Leaf size={10} />
                        Vegan
                      </span>
                    )}
                    {dish.spicy && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        <Flame size={10} />
                        Spicy
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label="Share dish"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-colors hover:border-white/20 hover:text-cream"
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                <h2
                  id="dish-detail-title"
                  className="mt-3 font-brand text-2xl tracking-wide text-cream"
                >
                  {dish.name}
                </h2>

                <p className="mt-2 font-body text-sm text-cream/60">
                  [Protein: {dish.protein}, Calories: {dish.calories}]
                </p>

                {dish.description && (
                  <p className="mt-3 font-body text-sm leading-relaxed text-cream/75">
                    {dish.description}
                  </p>
                )}

                {dish.additionalInfo && (
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => setShowAdditionalInfo((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent transition-colors hover:text-cream"
                    >
                      Additional Info
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${showAdditionalInfo ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {showAdditionalInfo && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden font-body text-sm leading-relaxed text-cream/55"
                        >
                          <span className="block pt-2">{dish.additionalInfo}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {dish.customizations?.map((group) => (
                  <section
                    key={group.id}
                    className="mt-5 overflow-hidden rounded-2xl border border-white/5 bg-brown/30"
                  >
                    <div className="border-b border-white/5 bg-white/5 px-4 py-3">
                      <h3 className="font-body text-sm font-semibold text-cream">
                        {group.name}
                      </h3>
                      <p className="mt-0.5 font-body text-xs text-cream/45">
                        Required · Select any 1 option
                      </p>
                    </div>

                    <ul className="divide-y divide-white/5">
                      {group.options.map((option) => {
                        const isSelected = selections[group.id] === option.id
                        const optionPrice = dish.price + option.priceDelta

                        return (
                          <li key={option.id}>
                            <button
                              type="button"
                              onClick={() =>
                                setSelections((prev) => ({
                                  ...prev,
                                  [group.id]: option.id,
                                }))
                              }
                              className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-white/5"
                            >
                              <span className="font-body text-sm text-cream">
                                {option.name}
                              </span>
                              <span className="flex items-center gap-3">
                                <span className="font-body text-sm text-cream/70">
                                  {formatPrice(optionPrice)}
                                </span>
                                <span
                                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                                    isSelected
                                      ? 'border-emerald-500 bg-emerald-500'
                                      : 'border-emerald-500/60'
                                  }`}
                                >
                                  {isSelected && (
                                    <span className="h-2 w-2 rounded-full bg-white" />
                                  )}
                                </span>
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-brown-dark/95 px-5 py-4 backdrop-blur-xl sm:px-6">
              <a
                href={buildWhatsAppUrl(dish, selections, totalPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-2xl bg-accent px-6 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-bg transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(250,204,21,0.35)]"
              >
                Order on WhatsApp · {formatPrice(totalPrice)}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
