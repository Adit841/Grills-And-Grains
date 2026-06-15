import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import MenuFilterBar from '../components/MenuFilterBar'
import MenuFilterModal from '../components/MenuFilterModal'
import MenuAccordion from '../components/MenuAccordion'
import ImageLightbox from '../components/ImageLightbox'
import {
  menuCategories,
  menuItems,
  menuNotes,
  addons,
  formatPrice,
} from '../data/menuData'
import {
  defaultMenuFilters,
  filterMenuItems,
  getVisibleCategories,
} from '../utils/menuFilters'

function applyQuickFilter(prev, key) {
  if (key === 'hideNonVeg') {
    return { ...prev, hideNonVeg: !prev.hideNonVeg }
  }

  const isActive = prev[key]
  return {
    ...prev,
    spicy: key === 'spicy' ? !isActive : false,
    vegan: key === 'vegan' ? !isActive : false,
  }
}

export default function Menu() {
  const [activeFilters, setActiveFilters] = useState(defaultMenuFilters)
  const [draftFilters, setDraftFilters] = useState(defaultMenuFilters)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [openCategories, setOpenCategories] = useState([menuCategories[0].id])
  const [previewImage, setPreviewImage] = useState(null)

  const filteredItems = useMemo(
    () => filterMenuItems(menuItems, activeFilters),
    [activeFilters],
  )

  const visibleCategories = useMemo(
    () => getVisibleCategories(menuCategories, activeFilters, filteredItems),
    [activeFilters, filteredItems],
  )

  useEffect(() => {
    setOpenCategories((prev) => {
      const visibleIds = new Set(visibleCategories.map((category) => category.id))
      const next = prev.filter((id) => visibleIds.has(id))

      if (next.length === 0 && visibleCategories[0]) {
        return [visibleCategories[0].id]
      }

      return next
    })
  }, [visibleCategories])

  const handleOpenFilters = () => {
    setDraftFilters(activeFilters)
    setIsFilterOpen(true)
  }

  const handleToggleQuickFilter = (key) => {
    setActiveFilters((prev) => applyQuickFilter(prev, key))
  }

  const handleApplyFilters = () => {
    setActiveFilters(draftFilters)
    setIsFilterOpen(false)
  }

  const handleClearFilters = () => {
    setDraftFilters(defaultMenuFilters)
  }

  const draftResultCount = filterMenuItems(menuItems, draftFilters).length

  return (
    <section
      id="menu"
      aria-label="Menu"
      className="relative border-t border-white/5 bg-bg py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.04)_0%,transparent_55%)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Our Menu"
          title="Grilled, Not Fried"
          subtitle="Fresh, High-Protein Meals With Macros Listed For Every Dish."
          variant="banner"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <MenuFilterBar
            activeFilters={activeFilters}
            onOpenFilters={handleOpenFilters}
            onToggleQuickFilter={handleToggleQuickFilter}
          />
        </motion.div>

        <div className="mt-6 space-y-3 sm:mt-8">
          {visibleCategories.length > 0 ? (
            visibleCategories.map((category) => {
              const categoryItems = filteredItems.filter(
                (item) => item.category === category.id,
              )

              return (
                <MenuAccordion
                  key={category.id}
                  category={category}
                  items={categoryItems}
                  isOpen={openCategories.includes(category.id)}
                  onToggle={() =>
                    setOpenCategories((prev) =>
                      prev.includes(category.id)
                        ? prev.filter((id) => id !== category.id)
                        : [...prev, category.id],
                    )
                  }
                  onImageClick={setPreviewImage}
                />
              )
            })
          ) : (
            <div className="rounded-2xl border border-white/5 bg-brown/40 px-6 py-10 text-center">
              <p className="font-body text-sm text-cream/50">
                No dishes match your filters. Try adjusting your preferences.
              </p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-dashed border-white/10 bg-brown/30 p-5 sm:p-6"
        >
          <h3 className="font-brand text-lg tracking-wide text-cream">+ Add Ons</h3>
          <ul className="mt-4 space-y-3">
            {addons.map((addon) => (
              <li
                key={addon.id}
                className="flex items-center justify-between gap-4 font-body text-sm text-cream/70"
              >
                <span>{addon.name}</span>
                <span className="font-medium text-accent">
                  + {formatPrice(addon.price)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-3 border border-dashed border-white/10 bg-brown/20 p-5 sm:grid-cols-2 sm:gap-x-8 sm:p-6"
        >
          {menuNotes.map((note) => (
            <p
              key={note}
              className="flex items-start gap-2 font-body text-xs leading-relaxed text-cream/45 sm:text-sm"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
              {note}
            </p>
          ))}
        </motion.div>
      </div>

      <MenuFilterModal
        isOpen={isFilterOpen}
        draftFilters={draftFilters}
        resultCount={draftResultCount}
        onClose={() => setIsFilterOpen(false)}
        onChange={setDraftFilters}
        onClear={handleClearFilters}
        onApply={handleApplyFilters}
      />

      <ImageLightbox
        image={previewImage?.src}
        name={previewImage?.name}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  )
}
