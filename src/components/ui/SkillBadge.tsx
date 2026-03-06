import type { Skill } from '../../data/skills'

interface SkillBadgeProps {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex cursor-default items-center rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-150 hover:border-white/10 hover:bg-white/[0.04]">
      <span className="break-words text-sm font-medium text-text-primary">{skill.name}</span>
    </div>
  )
}
