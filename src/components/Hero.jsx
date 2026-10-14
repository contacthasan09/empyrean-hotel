import Reveal from './Reveal'

export default function Hero({
  title,
  subtitle,
  image,
  video,
  height = 'h-[70vh] md:h-[80vh]',
  children,
}) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
        />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-max text-center px-4">
        <Reveal>
          {subtitle && <p className="eyebrow text-gold mb-4">{subtitle}</p>}
          <h1 className="h-display text-3xl md:text-5xl mb-6">{title}</h1>
          <div className="mx-auto h-[2px] w-16 bg-gradient-to-r from-transparent via-[#a57a2f] to-transparent" />
        </Reveal>

        {children && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}