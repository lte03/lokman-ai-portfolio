import { experiences } from '../data/experience'
import GradientText from './ui/GradientText'
import FadeIn from './ui/FadeIn'

const typeColors: Record<string, string> = {
  work: 'bg-accent-from',
  community: 'bg-accent-soft',
  education: 'bg-accent-to',
}

const typeLabels: Record<string, string> = {
  work: 'Work',
  community: 'Community',
  education: 'Education',
}

const typeTagColors: Record<string, string> = {
  work: 'bg-accent-from/15 text-accent-from border-accent-from/25',
  community: 'bg-accent-soft/15 text-accent-soft border-accent-soft/25',
  education: 'bg-accent-to/15 text-accent-to border-accent-to/25',
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-bg-secondary px-6 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(124,224,195,0.08), transparent)' }}
      />
      <FadeIn>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              <GradientText>Experience</GradientText>
            </h2>
            <p className="mt-3 text-text-muted">
              Education, hands-on work and communities that shaped my engineering style.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute bottom-0 left-6 top-0 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255,122,89,0.9), rgba(124,224,195,0.8), rgba(244,201,93,0.75))',
              }}
            />

            <div className="flex flex-col gap-8">
              {experiences.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  <div
                    className={`absolute left-6 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-bg-secondary shadow-[0_0_14px_rgba(255,122,89,0.28)] ${typeColors[item.type]}`}
                  />
                  <div className="flex-1 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-from/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-text-primary">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-accent-to">{item.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-text-muted">{item.period}</span>
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${typeTagColors[item.type]}`}>
                          {typeLabels[item.type]}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {item.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="mt-0.5 shrink-0 text-accent-soft">·</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
