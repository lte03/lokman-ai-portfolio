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
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl"
      style={{ background: 'rgba(7,11,20,0.72)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-text-primary shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            LT
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-text-primary">Lokman Emek</p>
          </div>
        </a>
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-nav-links"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(open => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-text-primary transition-colors hover:border-accent-soft/40 hover:bg-white/[0.06] md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 rounded-full bg-current transition-transform duration-200 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition-transform duration-200 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
        <ul className="hidden gap-5 md:flex md:gap-6 lg:gap-8">
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
      {isOpen && (
        <div
          id="mobile-nav-links"
          className="overflow-hidden border-t border-white/5 px-4 transition-[max-height,opacity] duration-300 md:hidden"
        >
          <ul className="flex flex-col gap-1 py-3">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-white/[0.06] text-text-primary'
                      : 'text-text-muted hover:bg-white/[0.04] hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
