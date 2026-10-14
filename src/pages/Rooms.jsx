import { ROOMS } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Rooms() {
  return (
    <>
      <Hero
        title="All Rooms"
        subtitle="Signature comfort · Contemporary design"
        image="https://empyreanhotelbd.com/wp-content/uploads/2026/06/Singature-Queen-Room-03.webp"
        height="h-64 md:h-80"
      />

      <section className="py-20">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Accommodation"
              title="Rooms crafted for rest"
              subtitle="Each room blends warm textures, plush bedding and thoughtful amenities — designed for travellers who value calm and craft."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
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
                      <span className="text-gold font-bold">From {r.price}</span>
                      <Button to="/contact-us" variant="solid" className="text-xs">Book</Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}