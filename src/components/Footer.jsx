import { Link } from 'react-router-dom'
import { LOGO } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-24">
      <div className="container-max py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={LOGO} alt="Empyrean Hotel" className="h-14 w-auto mb-5 brightness-0 invert" />
          <p className="text-sm text-white/70 leading-relaxed max-w-md">
            Empyrean Hotel — a modern retreat in Dhaka offering signature rooms, fine dining,
            rooftop BBQ, spa, beauty salon and banquet facilities.
          </p>
          <div className="gold-rule mt-5" />
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/all-rooms" className="hover:text-white">All Rooms</Link></li>
            <li><Link to="/sauce-spices" className="hover:text-white">Sauce &amp; Spices</Link></li>
            <li><Link to="/bbq-sky-view-restaurant" className="hover:text-white">BBQ Sky View</Link></li>
            <li><Link to="/tresses-beauty-salon" className="hover:text-white">Tresses Salon</Link></li>
            <li><Link to="/la-tresse-spa" className="hover:text-white">La Tresse Spa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Empyrean Hotel, Dhaka, Bangladesh</li>
            <li><a href="tel:+8801313368388" className="hover:text-white">+880 1313-368388</a></li>
            <li><a href="mailto:hello@empyreanhotelbd.com" className="hover:text-white">hello@empyreanhotelbd.com</a></li>
          </ul>
          <Link to="/contact-us" className="btn-gold inline-block mt-5">Contact Us</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Empyrean Hotel. All rights reserved.</p>
          <p>Dhaka · Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}