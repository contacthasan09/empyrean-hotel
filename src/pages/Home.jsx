import { Link } from 'react-router-dom'
import { HERO_HOME, HOME_VIDEO, ROOMS } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Hero
        title="Comfort Beyond Accommodation"
        subtitle="Welcome to Empyrean Hotel · Dhaka"
        image={HERO_HOME}
        video={HOME_VIDEO}
      >
        <Button to="/all-rooms" variant="gold">Explore Rooms</Button>
        <Button to="/contact-us" variant="gold-outline">Book Now</Button>
      </Hero>

      <section className="py-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://empyreanhotelbd.com/wp-content/uploads/2026/06/Singature-Queen-Room-03.webp"
              alt="Signature Queen Room"
              className="w-full h-[520px] object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Our Hotel"
              title="A modern retreat in the heart of Dhaka"
              subtitle="Empyrean Hotel blends contemporary design with warm Bangladeshi hospitality — signature rooms, curated dining, wellness and banqueting, all under one roof."
            />
            <ul className="mt-6 space-y-3 text-body border-l-2 border-gold pl-5">
              <li>Signature queen and king rooms</li>
              <li>Sauce &amp; Spices restaurant and rooftop BBQ Sky View</li>
              <li>Tresses Beauty Salon and La Tresse Spa</li>
              <li>Astana Banquet Hall and private meeting rooms</li>
            </ul>
            <Link to="/all-rooms" className="btn-solid inline-block mt-8">View All Rooms</Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-max">
          <Reveal>
            <SectionTitle align="center" eyebrow="Signature Rooms" title="Rest, Refresh, Repeat" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {ROOMS.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <article className="card overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="h-sub mb-2">{r.name}</h3>
                    <p className="body-text text-sm mb-4">{r.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-bold">{r.price}</span>
                      <Link to="/all-rooms" className="text-xs uppercase tracking-widest text-ink font-semibold">
                        View →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { to: '/sauce-spices', title: 'Sauce & Spices', img: 'https://empyreanhotelbd.com/wp-content/uploads/2026/06/Crafted-for-Taste-Comfort.webp' },
            { to: '/bbq-sky-view-restaurant', title: 'BBQ Sky View', img: 'https://empyreanhotelbd.com/wp-content/uploads/2026/07/Rooftop-BBQ-Like-Never-Before.webp' },
            { to: '/la-tresse-spa', title: 'La Tresse Spa', img: 'https://empyreanhotelbd.com/wp-content/uploads/2026/07/A-Tranquil-Retreat-in-the-Heart-of-the-City.webp' },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 100}>
              <Link to={c.to} className="block relative overflow-hidden group shadow-card">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="h-section text-white">{c.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}