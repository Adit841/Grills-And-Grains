import { SlidersHorizontal, Ban, Flame, Baby, Leaf, ChevronDown } from 'lucide-react'

const quickFilters = [
  { id: 'hideNonVeg', label: 'Hide non-veg', icon: Ban },
  { id: 'spicy', label: 'Spicy', icon: Flame, iconClass: 'text-red-400' },
  { id: 'vegan', label: 'Vegan', icon: Leaf, iconClass: 'text-emerald-400' },
]

export default function MenuFilterBar({
  activeFilters,
  onOpenFilters,
  onToggleQuickFilter,
}) {
  const hasActiveFilters =
    activeFilters.hideNonVeg ||
    activeFilters.spicy ||
    activeFilters.vegan ||
    activeFilters.sortBy

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={onOpenFilters}
        className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 font-body text-xs font-medium transition-all duration-300 sm:text-sm ${
          hasActiveFilters
            ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(250,204,21,0.12)]'
            : 'border-white/10 bg-brown/50 text-cream/70 hover:border-white/20 hover:bg-brown/70 hover:text-cream'
        }`}
      >
        <SlidersHorizontal size={15} />
        <span className="whitespace-nowrap">Filters</span>
        <ChevronDown size={14} className="opacity-60" />
      </button>

      {quickFilters.map(({ id, label, icon: Icon, iconClass }) => {
        const isActive = activeFilters[id]

        return (
          <button
            key={id}
            type="button"
            onClick={() => onToggleQuickFilter(id)}
            className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 font-body text-xs font-medium transition-all duration-300 sm:text-sm ${
              isActive
                ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(250,204,21,0.12)]'
                : 'border-white/10 bg-brown/50 text-cream/70 hover:border-white/20 hover:bg-brown/70 hover:text-cream'
            }`}
          >
            <Icon size={15} className={!isActive ? iconClass : ''} />
            <span className="whitespace-nowrap">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
