import { motion } from 'framer-motion'
import bannerTag from '../assets/grilled-not-fried-tag.png'

export default function GrilledNotFriedBanner({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mx-auto w-full max-w-2xl ${className}`}
    >
      <h2 className="sr-only">Grilled, Not Fried</h2>
      <img
        src={bannerTag}
        alt=""
        aria-hidden="true"
        className="mx-auto h-auto w-full max-w-[min(100%,640px)]"
        draggable={false}
      />
    </motion.div>
  )
}
