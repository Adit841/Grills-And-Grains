export const defaultMenuFilters = {
  hideNonVeg: false,
  spicy: false,
  kidsChoice: false,
  vegan: false,
  sortBy: null,
}

export function sortMenuItems(items, sortBy) {
  if (!sortBy) return items

  return [...items].sort((a, b) =>
    sortBy === 'price-asc' ? a.price - b.price : b.price - a.price,
  )
}

export function filterMenuItems(items, filters) {
  let result = [...items]

  if (filters.kidsChoice) {
    result = result.filter((item) => item.category === 'protein-shake')
  } else if (filters.spicy) {
    result = result.filter(
      (item) =>
        (item.category === 'power-bowls' || item.category === 'grilled-sandwiches') &&
        item.spicy,
    )
  } else if (filters.vegan) {
    result = result.filter(
      (item) => item.id === 'smoky-rajma-bowl' || item.id === 'tokyo-crunch-melt',
    )
  } else if (filters.hideNonVeg) {
    result = result.filter((item) => item.category !== 'egg-editions')
  }

  return sortMenuItems(result, filters.sortBy)
}

export function getVisibleCategories(categories, filters, filteredItems) {
  const categoryIds = [...new Set(filteredItems.map((item) => item.category))]

  if (filters.kidsChoice) {
    return categories.filter((category) => category.id === 'protein-shake')
  }

  if (filters.spicy) {
    return categories.filter((category) =>
      ['power-bowls', 'grilled-sandwiches'].includes(category.id),
    )
  }

  if (filters.vegan) {
    return categories.filter((category) =>
      ['power-bowls', 'grilled-sandwiches'].includes(category.id),
    )
  }

  if (filters.hideNonVeg) {
    return categories.filter((category) => category.id !== 'egg-editions')
  }

  return categories.filter((category) => categoryIds.includes(category.id))
}
