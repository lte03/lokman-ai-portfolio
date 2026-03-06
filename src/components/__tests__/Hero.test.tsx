import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText(/lokman/i)).toBeInTheDocument()
  })

  it('renders the title description', () => {
    render(<Hero />)
    expect(screen.getByText(/data scientist/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#hero')).toBeInTheDocument()
  })
})
