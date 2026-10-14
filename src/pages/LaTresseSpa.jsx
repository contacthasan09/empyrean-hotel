import { SPA } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function LaTresseSpa() {
  return (
    <>
      <Hero
        title="La Tresse Spa"
        subtitle="Balance · Body · Mind · Spirit"
        image={SPA.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="Wellness"
              title="A sanctuary of pure wellness and beauty"
              subtitle="From signature massages to holistic therapies — unwind in a tranquil retreat within the city."
            />
            <ul className="mt-6 space-y-3 text-body border-l-2 border-gold pl-5">
              <li>Signature Thai and Balinese massages</li>
              <li>Aromatherapy and hot stone therapy</li>
              <li>Body scrubs and wraps</li>
              <li>Couples spa suite</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPA.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`La Tresse Spa ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="tel:+8801313368388" variant="gold">Reserve a Treatment</Button>
        </div>
      </section>
    </>
  )
}