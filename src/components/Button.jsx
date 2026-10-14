import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'solid', children, className = '' }) {
  const variants = {
    solid: 'btn-solid',
    outline: 'btn-outline',
    gold: 'btn-gold',
    'gold-outline': 'btn-gold-outline',
    uppercase: 'btn-uppercase',
  }
  const cls = `${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}