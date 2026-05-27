import logoImg from '../assets/logo.jpg'

export default function Logo({ className = 'h-10 w-10', badgeClassName = 'p-1' }) {
  return (
    <div className={`shrink-0 rounded-lg bg-cream ${badgeClassName}`}>
      <img
        src={logoImg}
        alt="Grill & Grains logo"
        className={`${className} object-contain`}
      />
    </div>
  )
}
