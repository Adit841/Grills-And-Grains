import { motion } from 'framer-motion'
import { AtSign, MapPin, Phone } from 'lucide-react'
import Logo from '../components/Logo'
import { contact } from '../data/contact'

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/5 bg-brown-dark/80"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.04)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-3"
        >
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" badgeClassName="rounded-lg p-1.5" />
              <h3 className="font-brand text-lg tracking-[0.15em] text-cream">
                GRILL & GRAINS
              </h3>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Premium everyday nutrition for athletes, lifters, and anyone who
              refuses to compromise on taste or performance.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {['Menu', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <MapPin size={16} className="shrink-0 text-accent" />
                <span>{contact.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <AtSign size={16} className="shrink-0 text-accent" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <InstagramIcon className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/5 bg-brown/40"
        >
          <div className="relative p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg">
                <InstagramIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-brand text-xl tracking-wide text-cream">
                  Follow Us on Instagram
                </h4>
                <p className="mt-1 text-sm text-cream/50">
                  Daily bowls, behind-the-scenes, and new drops from our kitchen.
                </p>
              </div>
            </div>

            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:border-[#F77737]/40 hover:bg-white/10 hover:text-accent sm:mt-0"
            >
              <InstagramIcon className="h-4 w-4" />
              {contact.instagramHandle}
            </a>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Grill & Grains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
