import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })

  it('renders project cards from data', () => {
    render(<Projects />)
    expect(screen.getByText('Trendyol E-Commerce Search')).toBeInTheDocument()
    expect(screen.getByText('Voice AI Market Assistant')).toBeInTheDocument()
  })
})
