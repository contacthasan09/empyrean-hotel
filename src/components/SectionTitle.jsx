export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', dark = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`h3 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <div className="gold-rule" />
      {subtitle && <p className={`body-text mt-3 ${dark ? 'text-white/80' : ''}`}>{subtitle}</p>}
    </div>
  )
}