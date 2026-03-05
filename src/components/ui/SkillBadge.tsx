import type { Skill } from '../../data/skills'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`select-none text-xs leading-none ${
            i <= Math.floor(rating)
              ? 'text-accent-to'
              : i === Math.ceil(rating) && rating % 1 !== 0
                ? 'text-accent-to/40'
                : 'text-white/10'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

interface SkillBadgeProps {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex cursor-default items-center justify-between gap-2 rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-150 hover:border-white/10 hover:bg-white/[0.04]">
      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
      <StarRating rating={skill.rating} />
    </div>
  )
}
