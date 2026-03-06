import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'
import type { Project } from '../../../data/projects'

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test description.',
  tags: ['Python', 'LLM'],
  badge: '🥈 2nd Place',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test description.')).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('LLM')).toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('🥈 2nd Place')).toBeInTheDocument()
  })

  it('does not render badge when not provided', () => {
    const projectNoBadge: Project = { title: 'X', description: 'Y', tags: [] }
    render(<ProjectCard project={projectNoBadge} />)
    expect(screen.queryByText(/place/i)).not.toBeInTheDocument()
  })
})
