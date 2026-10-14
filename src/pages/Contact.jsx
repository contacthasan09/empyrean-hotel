import { CONTACT_IMAGES } from '../data/content'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We would love to hear from you"
        image={CONTACT_IMAGES.logo}
        height="h-56 md:h-72"
      />

      <section className="py-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          <Reveal>
            <form
              className="bg-white border border-gray-100 p-8 shadow-card"
              onSubmit={(e) => e.preventDefault()}
            >
              <SectionTitle eyebrow="Message" title="Send us a note" />
              <div className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Full Name</label>
                  <input className="input" type="text" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input className="input" type="email" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Phone</label>
                  <input className="input" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea className="input min-h-[120px]" required />
                </div>
                <button type="submit" className="btn-solid w-full">Send Message</button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <SectionTitle eyebrow="Reach Us" title="Empyrean Hotel" />
            <ul className="mt-8 space-y-5 text-body">
              <li className="flex items-start gap-4">
                <img src={CONTACT_IMAGES.place} alt="Address" className="w-8 h-8 object-contain shrink-0" />
                <div>
                  <p className="font-semibold text-ink">Address</p>
                  <p>Empyrean Hotel, Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img src={CONTACT_IMAGES.phone} alt="Phone" className="w-8 h-8 object-contain shrink-0" />
                <div>
                  <p className="font-semibold text-ink">Phone</p>
                  <a href="tel:+8801313368388" className="text-gold">+880 1313-368388</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img src={CONTACT_IMAGES.email} alt="Email" className="w-8 h-8 object-contain shrink-0" />
                <div>
                  <p className="font-semibold text-ink">Email</p>
                  <a href="mailto:hello@empyreanhotelbd.com" className="text-gold">hello@empyreanhotelbd.com</a>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}