import { render, screen } from '@testing-library/react'
import SkillBadge from '../SkillBadge'
import type { Skill } from '../../../data/skills'

const mockSkill: Skill = { name: 'Python', category: 'language', rating: 4.5 }

describe('SkillBadge', () => {
  it('renders skill name', () => {
    render(<SkillBadge skill={mockSkill} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('has rounded style', () => {
    render(<SkillBadge skill={mockSkill} />)
    const el = screen.getByText('Python').closest('div')
    expect(el?.className).toContain('rounded')
  })

  it('renders star rating', () => {
    render(<SkillBadge skill={mockSkill} />)
    const stars = screen.getAllByText('★')
    expect(stars.length).toBe(5)
  })
})
