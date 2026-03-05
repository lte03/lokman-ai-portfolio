import { skills, type Skill } from '../data/skills'
import GradientText from './ui/GradientText'
import FadeIn from './ui/FadeIn'
import SkillBadge from './ui/SkillBadge'

const categories: { key: Skill['category']; label: string; icon: string }[] = [
  { key: 'language', label: 'Languages', icon: '{ }' },
  { key: 'ai', label: 'AI / ML', icon: '⬡' },
  { key: 'data', label: 'Data', icon: '◈' },
  { key: 'framework', label: 'Frameworks', icon: '⬢' },
  { key: 'hardware', label: 'Hardware', icon: '◉' },
  { key: 'tool', label: 'Tools', icon: '✦' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ff7a59 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,224,195,0.05) 0%, transparent 70%)',
        }}
      />
      <FadeIn>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              <GradientText>Skills</GradientText>
            </h2>
            <p className="mt-3 text-text-muted">
              Core tools I rely on across model work, product engineering and hardware.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ key, label, icon }) => {
              const catSkills = skills.filter(s => s.category === key)
              if (catSkills.length === 0) return null
              return (
                <div
                  key={key}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft/30"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(255,122,89,0.14), transparent 70%)',
                    }}
                  />
                  <h3 className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                    <span className="font-mono text-accent-to">{icon}</span>
                    {label}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {catSkills.map(skill => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
