import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ImageLightbox({ image, name, onClose }) {
  useEffect(() => {
    if (!image) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8">
          <motion.button
            type="button"
            aria-label="Close image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} preview`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-4xl flex-col"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute -top-12 right-0 rounded-full border border-white/10 bg-white/5 p-2 text-cream transition-colors hover:bg-white/10 sm:-right-2 sm:-top-2"
            >
              <X size={22} />
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-brown-dark shadow-2xl">
              <img
                src={image}
                alt={name}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <p className="mt-4 text-center font-brand text-xl tracking-wide text-cream sm:text-2xl">
              {name}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
