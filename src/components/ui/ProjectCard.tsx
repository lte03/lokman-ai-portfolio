import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-from/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.24)] sm:p-6">
      {project.badge && (
        <span className="self-start break-words rounded-full border border-accent-from/25 bg-accent-from/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-from sm:text-xs sm:tracking-[0.14em]">
          {project.badge}
        </span>
      )}
      <h3 className="break-words text-lg font-semibold leading-snug text-text-primary">{project.title}</h3>
      <p className="flex-1 break-words text-sm leading-7 text-text-muted">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="break-words rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#ffe2b3]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
