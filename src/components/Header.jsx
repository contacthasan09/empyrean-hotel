import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO, NAV } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onResize = () => { if (window.innerWidth > 1023) setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-layer' : 'border-b border-gray-100'}`}>
      <div className="container-max flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={LOGO} alt="Empyrean Hotel" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center flex-wrap">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+8801313368388" className="btn-outline text-xs">Call Us</a>
          <Link to="/contact-us" className="btn-solid text-xs">Book Now</Link>
        </div>

        <button
          className="lg:hidden w-11 h-11 border border-gray-300 flex items-center justify-center"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col border-t border-gray-100 bg-white py-2">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 text-sm font-medium uppercase tracking-wider ${isActive ? 'text-gold' : 'text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact-us" onClick={() => setOpen(false)} className="mx-6 my-3 btn-solid text-center">
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}