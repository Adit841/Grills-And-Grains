import batataPaneerBowl from '../assets/images/Batata Paneer Bowl.jpeg'
import chipotleChickpeaBowl from '../assets/images/Chitpotle Chicken Bowl.jpeg'
import muscleMochaShake from '../assets/images/Muscle Mocha Shake.jpeg'
import tandooriPaneerPress from '../assets/images/Tandoori Paneer Press Grilled Sandwich.jpeg'
import tokyoTurboBowl from '../assets/images/Tokyo Turbo Bowl.jpeg'
import smokyRajmaBowl from '../assets/images/Smoky Rajma Bowl.jpeg'
import theProteinStack from '../assets/images/The Protein Stack.jpeg'
import tandooriTitanBowl from '../assets/images/Tandoori Titan Bowl.jpeg'
import powerEggPot from '../assets/images/Power Egg Pot.jpeg'
import powerPastaBowl from '../assets/images/Power Pasta Bowl.jpeg'

export const riceCustomization = {
  id: 'rice',
  name: 'Rice',
  required: true,
  maxSelect: 1,
  options: [
    { id: 'white-rice', name: 'White Rice', priceDelta: 0 },
    { id: 'brown-rice', name: 'Brown Rice', priceDelta: 20 },
  ],
}

export const menuCategories = [
  {
    id: 'power-bowls',
    name: 'Bowls',
    fullName: 'Power Bowls',
    description: 'Macro-balanced bowls built for everyday performance',
  },
  {
    id: 'grilled-sandwiches',
    name: 'Sandwiches',
    fullName: 'Grilled Sandwiches',
    description: 'Pressed, grilled, and packed with protein',
  },
  {
    id: 'egg-editions',
    name: 'Eggs',
    fullName: 'Egg Editions',
    description: 'Clean egg-based meals for a powerful start',
  },
  {
    id: 'protein-shake',
    name: 'Shakes',
    fullName: 'Protein Shake',
    description: 'Smooth, satisfying post-workout fuel',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    fullName: 'Pasta',
    description: 'High-protein pasta bowls for sustained energy',
  },
]

export const menuItems = [
  {
    id: 'smoky-rajma-bowl',
    category: 'power-bowls',
    name: 'Smoky Rajma Bowl',
    protein: '22G',
    calories: '~500 KCAL',
    price: 229,
    isVeg: true,
    spicy: false,
    vegan: true,
    image: smokyRajmaBowl,
    description:
      'Your choice of rice, slow cooked kidney beans in Tomato Puree served with Smoky Mint Paprika Dip',
    additionalInfo: 'Made with minimal oil. Rajma is slow-cooked for depth of flavour.',
    customizations: [riceCustomization],
  },
  {
    id: 'chipotle-chickpea-bowl',
    category: 'power-bowls',
    name: 'Chipotle Chickpea Bowl',
    protein: '22G',
    calories: '~575 KCAL',
    price: 299,
    isVeg: true,
    spicy: true,
    vegan: false,
    image: chipotleChickpeaBowl,
    description:
      '[30g Protein, 575Kcal] White rice, chipotle chickpea bowl, Low fat paneer cubes, charred corn, diced tomato and shredded, lime hung curd crema and salsa.',
    additionalInfo: 'Medium spice level. Hung curd can be swapped on request.',
    customizations: [riceCustomization],
  },
  {
    id: 'tokyo-turbo-bowl',
    category: 'power-bowls',
    name: 'Tokyo Turbo Bowl',
    protein: '30G',
    calories: '~520 KCAL',
    price: 299,
    isVeg: true,
    spicy: true,
    vegan: false,
    image: tokyoTurboBowl,
    description:
      '[Protein: 30 g, Calories: 550 kcal] Brown rice, tofu [soy], honey, sesame marinade, cabbage, peppers, carrots and edamame, reserved marinade, rice vinegar',
    additionalInfo: 'Inspired by Japanese flavours with a desi protein twist.',
    customizations: [riceCustomization],
  },
  {
    id: 'desi-batata-paneer-bowl',
    category: 'power-bowls',
    name: 'Desi Batata Paneer Bowl',
    protein: '31G',
    calories: '~540 KCAL',
    price: 279,
    isVeg: true,
    spicy: false,
    vegan: false,
    image: batataPaneerBowl,
    description:
      '[Protein: 31 g, Calories: 540 kcal] White rice, desi spiced Low Fat grilled paneer, air fried jeera potato cubes, mint coriander hung curd and tamarind',
    additionalInfo: 'One of our bestsellers. Potato cubes are air fried, not deep fried.',
    customizations: [riceCustomization],
  },
  {
    id: 'tandoori-titan-bowl',
    category: 'power-bowls',
    name: 'Tandoori Titan Bowl',
    protein: '41G',
    calories: '~560 KCAL',
    price: 319,
    isVeg: true,
    spicy: true,
    vegan: false,
    image: tandooriTitanBowl,
    description:
      '[41g Protein | 603 kcal] Clean eating meets classic flavors. Enjoy 160g of protein dense, low fat paneer cubes marinated in premium tandoori spices and grilled to a perfect smoky char. Served over a bed of fragrant jeera spiced rice, crunchy flame sauteed bell peppers, sweet corn and crisp onion. Finished with a vibrant, refreshing drizzle of our signature mint hung-curd sauce and a touch of chaat masala. [High protein, low fat, weight loss friendly and 100% veg',
    additionalInfo: 'High protein pick. Spice level can be adjusted on request.',
    customizations: [riceCustomization],
  },
  {
    id: 'tandoori-paneer-press',
    category: 'grilled-sandwiches',
    name: 'Tandoori Paneer Press',
    protein: '30G',
    calories: '~560 KCAL',
    price: 249,
    isVeg: true,
    spicy: true,
    vegan: false,
    image: tandooriPaneerPress,
    description:
      '[30 g Protein] A premium, healthy club sandwich loaded with smoky grilled tandoori paneer 120 g], crunchy veggies, fresh spinach and melted light Mozzarella. Finished with a refreshing splash of homemade mint hung-curd sauce between thick, toasted multigrain slices.',
    additionalInfo: 'Pressed on a grill with minimal butter. Served hot and crisp.',
  },
  {
    id: 'power-egg-pot',
    category: 'egg-editions',
    name: 'Power Egg Pot',
    protein: '24G',
    calories: '~430 KCAL',
    price: 189,
    isVeg: true,
    spicy: false,
    vegan: false,
    image: powerEggPot,
    description:
      'Herb seasoned boiled eggs served over smoky brown rice with sautéed veggies and creamy mint yogurt drizzle.',
    additionalInfo: 'Eggs are cooked with minimal oil. Extra egg available as add-on.',
  },
  {
    id: 'the-protein-stack',
    category: 'egg-editions',
    name: 'The Protein Stack',
    protein: '34G',
    calories: '~580 KCAL',
    price: 299,
    isVeg: true,
    spicy: false,
    vegan: false,
    image: theProteinStack,
    description:
      '3 Egg masala omelette loaded with cottage cheese, sautéed mushrooms and bell peppers, ser ved with seasoned brown rice and lime pepper finish',
    additionalInfo: 'Our highest protein egg dish. Great post-workout meal.',
  },
  {
    id: 'muscle-mocha-shake',
    category: 'protein-shake',
    name: 'Muscle Mocha Shake',
    protein: '28G',
    calories: '~390 KCAL',
    price: 179,
    isVeg: true,
    spicy: false,
    vegan: false,
    image: muscleMochaShake,
    description:
      'Cold coffee protein shake blended with whey, banana, cocoa, oats and peanut butter for a rich high protein energy boost.',
    additionalInfo: 'No added sugar. Blended fresh to order.',
  },
  {
    id: 'power-pasta-bowl',
    category: 'pasta',
    name: 'Power Pasta Bowl',
    protein: '35G',
    calories: '~550 KCAL',
    price: 279,
    isVeg: true,
    spicy: false,
    vegan: false,
    image: powerPastaBowl,
    description:
      '[35g Protein, 550 Kcal ] Creamy pasta sautéed vegetables tossed in our signature high-protein paneer cream sauce, finished with garlic, oregano, and chilli flakes for a rich, satisfying bite',
    additionalInfo: 'Pasta is al dente. Extra grilled veggies available as add-on.',
  },
]

export const addons = [
  { id: 'extra-paneer', name: 'Extra Paneer', price: 49 },
  { id: 'double-paneer', name: 'Double Paneer', price: 89 },
  { id: 'extra-egg', name: 'Extra Egg', price: 29 },
  { id: 'extra-rice', name: 'Extra Rice', price: 39 },
  { id: 'extra-sauce', name: 'Extra Sauce', price: 25 },
  { id: 'grilled-veggies', name: 'Grilled Veggies', price: 49 },
]

export const menuNotes = [
  'All dishes made fresh to order',
  'Low oil throughout',
  'Customise your grain on request',
  'Calorie values are approximate',
  'Prices inclusive of taxes',
  '100% vegetarian kitchen',
]

export const formatPrice = (amount) => `₹${amount}`

export function getItemTotalPrice(item, selections = {}) {
  const base = item.price
  const customizationTotal = (item.customizations ?? []).reduce((sum, group) => {
    const selectedId = selections[group.id]
    const option = group.options.find((entry) => entry.id === selectedId)
    return sum + (option?.priceDelta ?? 0)
  }, 0)

  return base + customizationTotal
}

export function getDefaultSelections(item) {
  return (item.customizations ?? []).reduce((acc, group) => {
    acc[group.id] = group.options[0]?.id ?? null
    return acc
  }, {})
}
