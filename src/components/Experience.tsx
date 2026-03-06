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
    <section id="experience" className="relative overflow-hidden bg-bg-secondary px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(124,224,195,0.08), transparent)' }}
      />
      <FadeIn>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              <GradientText>Experience</GradientText>
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              Education, hands-on work and communities that shaped my engineering style.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute bottom-0 left-4 top-0 w-px sm:left-6"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255,122,89,0.9), rgba(124,224,195,0.8), rgba(244,201,93,0.75))',
              }}
            />

            <div className="flex flex-col gap-8">
              {experiences.map((item, i) => (
                <div key={i} className="relative flex gap-4 pl-10 sm:gap-6 sm:pl-14">
                  <div
                    className={`absolute left-4 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-bg-secondary shadow-[0_0_14px_rgba(255,122,89,0.28)] sm:left-6 ${typeColors[item.type]}`}
                  />
                  <div className="flex-1 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-from/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-6">
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="break-words text-base font-semibold text-text-primary sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1 break-words text-sm font-medium text-accent-to">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-1 text-left sm:items-end sm:text-right">
                        <span className="text-xs text-text-muted">{item.period}</span>
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${typeTagColors[item.type]}`}>
                          {typeLabels[item.type]}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {item.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-2 break-words text-sm leading-6 text-text-muted">
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
