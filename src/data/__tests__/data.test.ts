import { skills } from '../skills'
import { projects } from '../projects'

describe('skills data', () => {
  it('exports a non-empty array', () => {
    expect(skills.length).toBeGreaterThan(0)
  })

  it('each skill has required fields', () => {
    skills.forEach(skill => {
      expect(skill).toHaveProperty('name')
      expect(skill).toHaveProperty('category')
      expect(typeof skill.name).toBe('string')
    })
  })
})

describe('projects data', () => {
  it('exports a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('tags')
      expect(Array.isArray(project.tags)).toBe(true)
    })
  })
})
