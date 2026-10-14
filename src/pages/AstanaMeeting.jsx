import { MEETING } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function AstanaMeeting() {
  return (
    <>
      <Hero
        title="Astana Meeting Room"
        subtitle="Private meetings · Executive comfort"
        image={MEETING.hero}
      />

      <section className="py-20">
        <div className="container-max max-w-prose">
          <Reveal>
            <SectionTitle
              eyebrow="Business"
              title="Executive comfort meets professional privacy"
              subtitle="Private boardrooms designed for focused meetings, with AV facilities, catering and dedicated service."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEETING.images.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="overflow-hidden group shadow-card">
                <img
                  src={src}
                  alt={`Astana Meeting ${i + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container-max mt-12 text-center">
          <Button href="mailto:sales@empyreanhotelbd.com" variant="gold">Reserve Meeting Room</Button>
        </div>
      </section>
    </>
  )
}