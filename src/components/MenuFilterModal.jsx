import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ban, Baby, Flame, Leaf, X } from 'lucide-react'

function FilterChip({ active, onClick, children, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 font-body text-sm transition-all duration-300 ${
        active
          ? 'border-accent/50 bg-accent/10 text-accent'
          : 'border-white/10 bg-brown/40 text-cream/70 hover:border-white/20 hover:text-cream'
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default function MenuFilterModal({
  isOpen,
  draftFilters,
  resultCount,
  onClose,
  onChange,
  onClear,
  onApply,
}) {
  useEffect(() => {
    if (!isOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const toggleDietary = (key) => {
    onChange({
      ...draftFilters,
      spicy: key === 'spicy' ? !draftFilters.spicy : false,
      vegan: key === 'vegan' ? !draftFilters.vegan : false,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-white/10 bg-brown-dark shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 bg-brown-dark/95 px-5 py-4 backdrop-blur-xl sm:px-6">
              <h2
                id="filter-modal-title"
                className="font-brand text-2xl tracking-wide text-cream"
              >
                Filters and Sorting
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="rounded-full p-2 text-cream/60 transition-colors hover:bg-white/5 hover:text-cream"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <section className="rounded-2xl border border-white/5 bg-brown/30 p-4">
                <h3 className="font-body text-sm font-semibold text-cream">Sort by</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <FilterChip
                    active={draftFilters.sortBy === 'price-asc'}
                    onClick={() =>
                      onChange({
                        ...draftFilters,
                        sortBy:
                          draftFilters.sortBy === 'price-asc' ? null : 'price-asc',
                      })
                    }
                  >
                    Price - low to high
                  </FilterChip>
                  <FilterChip
                    active={draftFilters.sortBy === 'price-desc'}
                    onClick={() =>
                      onChange({
                        ...draftFilters,
                        sortBy:
                          draftFilters.sortBy === 'price-desc' ? null : 'price-desc',
                      })
                    }
                  >
                    Price - high to low
                  </FilterChip>
                </div>
              </section>

              <section className="rounded-2xl border border-white/5 bg-brown/30 p-4">
                <h3 className="font-body text-sm font-semibold text-cream">
                  Veg/Non-veg preference
                </h3>
                <div className="mt-3">
                  <FilterChip
                    active={draftFilters.hideNonVeg}
                    onClick={() =>
                      onChange({
                        ...draftFilters,
                        hideNonVeg: !draftFilters.hideNonVeg,
                      })
                    }
                    className="inline-flex items-center gap-2"
                  >
                    <Ban size={15} />
                    Hide non-veg
                  </FilterChip>
                </div>
              </section>

              <section className="rounded-2xl border border-white/5 bg-brown/30 p-4">
                <h3 className="font-body text-sm font-semibold text-cream">
                  Dietary preference
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <FilterChip
                    active={draftFilters.spicy}
                    onClick={() => toggleDietary('spicy')}
                    className="inline-flex items-center gap-2"
                  >
                    <Flame size={15} className="text-red-400" />
                    Spicy
                  </FilterChip>
                  <FilterChip
                    active={draftFilters.vegan}
                    onClick={() => toggleDietary('vegan')}
                    className="inline-flex items-center gap-2"
                  >
                    <Leaf size={15} className="text-emerald-400" />
                    Vegan
                  </FilterChip>
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 flex items-center justify-between gap-4 border-t border-white/5 bg-brown-dark/95 px-5 py-4 backdrop-blur-xl sm:px-6">
              <button
                type="button"
                onClick={onClear}
                className="font-body text-sm font-semibold text-accent transition-colors hover:text-cream"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={onApply}
                className="rounded-full bg-accent px-8 py-3 font-body text-sm font-bold uppercase tracking-[0.12em] text-bg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(250,204,21,0.35)]"
              >
                Apply ({resultCount})
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
