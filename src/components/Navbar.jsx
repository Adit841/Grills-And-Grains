import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-[#140909]/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <Logo className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden font-brand text-sm tracking-[0.25em] text-cream transition-colors duration-300 group-hover:text-accent sm:block md:text-base">
              GRILL & GRAINS
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-xs font-medium uppercase tracking-[0.25em] text-cream/60 transition-colors duration-300 hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="https://wa.me/918890330073"
              className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-bg shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(250,204,21,0.45)]"
            >
              Order Now
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-cream/80 transition-colors duration-300 hover:bg-white/5 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/5 bg-[#140909]/95 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream/70 transition-colors duration-300 hover:bg-white/5 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://wa.me/918890330073"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full bg-accent px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-bg"
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
