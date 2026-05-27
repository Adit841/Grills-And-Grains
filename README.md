# Grill & Grains

Premium restaurant website for **Grill & Grains** — a high-protein, fitness-focused kitchen in Jaipur. Built with a dark, cinematic aesthetic inspired by modern gym-food brands.

**Tagline:** *Grilled, Not Fried*

---

## Features

- **Hero section** — Brand-forward landing with logo, gradient tagline, and animated entrance
- **Interactive menu** — Accordion categories (Bowls, Sandwiches, Eggs, Shakes) with food images, macros, and pricing
- **Filters & sorting** — Modal popup with price sort, hide non-veg, spicy, kid's choice, and vegan filters
- **Sticky navbar** — Glassmorphism header with scroll effect and mobile menu
- **WhatsApp ordering** — Floating button linking directly to WhatsApp
- **Contact footer** — Location, phone, email, and Instagram follow section
- **Responsive design** — Optimized for mobile, tablet, and desktop
- **Smooth animations** — Framer Motion transitions throughout

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |

**Typography:** Archivo Black (display) + Archivo (body)

**Theme colors:**
- Background: `#140909`
- Cream text: `#f5e6d3`
- Yellow accent: `#facc15`

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
git clone <repository-url>
cd grill-and-grains
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── assets/           # Logo, menu PDF, food images
│   └── images/       # Dish photography
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Logo.jsx
│   ├── MenuAccordion.jsx
│   ├── MenuListItem.jsx
│   ├── MenuFilterBar.jsx
│   ├── MenuFilterModal.jsx
│   ├── WhatsAppButton.jsx
│   └── ...
├── sections/         # Page sections
│   ├── Hero.jsx
│   ├── Menu.jsx
│   └── Footer.jsx
├── data/
│   ├── menuData.js   # Categories, items, add-ons
│   └── contact.js    # Phone, email, social links
├── utils/
│   └── menuFilters.js
├── App.jsx
├── main.jsx
└── index.css         # Tailwind theme & global styles
```

---

## Menu & Filters

Menu data lives in `src/data/menuData.js`. Each item supports:

- `protein`, `calories`, `price`
- `spicy`, `kidsChoice`, `vegan` flags
- Optional `image` import from `src/assets/images/`

Filter logic is in `src/utils/menuFilters.js`:

| Filter | Behavior |
|--------|----------|
| Hide non-veg | Hides the Eggs category |
| Spicy | Shows spicy bowls and sandwiches |
| Kid's choice | Shows shakes only |
| Vegan | Shows Smoky Rajma Bowl & Tokyo Crunch Melt |
| Sort | Price low → high or high → low |

---

## Contact & Social

| | |
|---|---|
| **Location** | Jaipur, Rajasthan, India |
| **Phone / WhatsApp** | +91 8890330073 |
| **Email** | grillandgrains@gmail.com |
| **Instagram** | [@grillandgrains](https://www.instagram.com/grillandgrains/) |

Update contact details in `src/data/contact.js`.

---

## Customization

**Add a menu item** — Edit `src/data/menuData.js`, add an image to `src/assets/images/`, and import it in the data file.

**Change brand colors** — Update the `@theme` block in `src/index.css`.

**Update hero content** — Edit `src/sections/Hero.jsx`.

**Modify filters** — Adjust rules in `src/utils/menuFilters.js`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

Private project. All rights reserved © Grill & Grains.
