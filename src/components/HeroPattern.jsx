import frontPageRef from '../assets/fronmt page.webp'

export default function HeroPattern() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-24 sm:h-28"
    >
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-red-900/20 via-transparent to-transparent" />

      <div
        className="h-full w-full bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${frontPageRef})`,
          backgroundSize: 'min(100vw, 720px) auto',
        }}
      />
    </div>
  )
}
