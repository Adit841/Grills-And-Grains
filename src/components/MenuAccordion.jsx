import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MenuListItem from './MenuListItem'

export default function MenuAccordion({
  category,
  items,
  isOpen,
  onToggle,
  onImageClick,
  onItemClick,
}) {
  const count = items.length

  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-brown/40 backdrop-blur-sm transition-colors duration-300 hover:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 sm:px-6 sm:py-6"
      >
        <div>
          <h3 className="font-brand text-2xl tracking-wide text-cream sm:text-3xl">
            {category.name}
          </h3>
          {count === 0 && (
            <p className="mt-1 text-xs text-cream/40">No items match your filters</p>
          )}
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/60"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 px-5 pb-2 sm:px-6 sm:pb-3">
              {count > 0 ? (
                items.map((item, index) => (
                  <MenuListItem
                    key={item.id}
                    item={item}
                    index={index}
                    onImageClick={onImageClick}
                    onItemClick={onItemClick}
                  />
                ))
              ) : (
                <p className="py-6 text-center text-sm text-cream/40">
                  Try adjusting your filters to see more items.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
