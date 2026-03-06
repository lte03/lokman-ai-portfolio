import { projects } from '../data/projects'
import GradientText from './ui/GradientText'
import ProjectCard from './ui/ProjectCard'
import FadeIn from './ui/FadeIn'

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-bg-secondary px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,122,89,0.08), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(124,224,195,0.06), transparent)' }}
      />
      <FadeIn>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              <GradientText>Projects</GradientText>
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              Selected builds across assistant systems, data products and competitive work.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
