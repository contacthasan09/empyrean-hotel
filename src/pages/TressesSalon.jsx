import { SALON } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function TressesSalon() {
  return (
    <>
      <Hero
        title="Tresses Beauty Salon"
        subtitle="Relax · Refresh · Rejuvenate"
        image={SALON.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="Beauty"
              title="A premium beauty experience"
              subtitle="Hair, skin and nails — crafted by expert stylists in a calm, refined setting."
            />
            <ul className="mt-6 space-y-3 text-body border-l-2 border-gold pl-5">
              <li>Haircuts, styling and colour</li>
              <li>Manicure, pedicure and nail art</li>
              <li>Facials and skin treatments</li>
              <li>Bridal and event packages</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`Tresses Salon ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="tel:+8801313368388" variant="gold">Book an Appointment</Button>
        </div>
      </section>
    </>
  )
}