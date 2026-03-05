import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl"
      style={{ background: 'rgba(7,11,20,0.72)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-text-primary shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            LT
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-text-primary">Lokman Emek</p>
          </div>
        </a>
        <ul className="flex gap-5 sm:gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`pb-1 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'border-b-2 border-accent-from text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
