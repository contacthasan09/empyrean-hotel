import { BBQ } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function BbqSkyView() {
  return (
    <>
      <Hero
        title="BBQ Sky View"
        subtitle="Rooftop · Where flavor meets the skyline"
        image={BBQ.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="Rooftop Dining"
              title="Elevate your dining above the city"
              subtitle="Sizzling grills, panoramic views and a rooftop atmosphere unlike anywhere else in Dhaka."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBQ.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`BBQ Sky View ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="tel:+8801313368388" variant="gold">Reserve Rooftop</Button>
        </div>
      </section>
    </>
  )
}