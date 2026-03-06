import GradientText from './ui/GradientText'
import FadeIn from './ui/FadeIn'

const contacts = [
  { label: 'GitHub', href: 'https://github.com/lte03', icon: '⌨️' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokman-emek/', icon: '💼' },
  { label: 'Email', href: 'mailto:lokmantugru@gmail.com', icon: '✉️' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(255,122,89,0.1) 0%, transparent 70%)',
        }}
      />
      <FadeIn>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              <GradientText>Contact</GradientText>
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
              Open to internships, product collaborations and AI-focused engineering work.
              If the problem is real, I am interested.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={c.label}
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-4 font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-from/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:min-h-0 sm:w-auto"
              >
                <span>{c.icon}</span>
                <span className="transition-colors group-hover:text-accent-to">{c.label}</span>
              </a>
            ))}
          </div>
          <div className="h-px w-24 rounded-full bg-gradient-to-r from-accent-from via-accent-to to-accent-soft opacity-50" />
        </div>
      </FadeIn>
    </section>
  )
}
