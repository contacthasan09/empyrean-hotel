import { SAUCE_SPICES } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function SauceSpices() {
  return (
    <>
      <Hero
        title="Sauce & Spices"
        subtitle="Taste · Refined Dining"
        image={SAUCE_SPICES.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="The Restaurant"
              title="Crafted for taste and comfort"
              subtitle="Sauce & Spices brings together international flavours and local craft, served in a warm, elegant setting."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAUCE_SPICES.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`Sauce & Spices ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="tel:+8801313368388" variant="gold">Reserve a Table</Button>
        </div>
      </section>
    </>
  )
}