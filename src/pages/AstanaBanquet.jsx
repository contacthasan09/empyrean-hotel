import { BANQUET } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function AstanaBanquet() {
  return (
    <>
      <Hero
        title="Astana Banquet Hall"
        subtitle="Where elegant events come to life"
        image={BANQUET.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="Events"
              title="Celebrate life's finest moments"
              subtitle="Weddings, corporate galas and private celebrations — hosted in our refined banquet hall with exceptional dining and hospitality."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BANQUET.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`Astana Banquet ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="tel:+8801313368388" variant="gold">Enquire About Events</Button>
        </div>
      </section>
    </>
  )
}