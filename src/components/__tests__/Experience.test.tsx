import { render, screen } from '@testing-library/react'
import Experience from '../Experience'

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Experience />)
    expect(container.querySelector('#experience')).toBeInTheDocument()
  })

  it('renders experience items', () => {
    render(<Experience />)
    expect(screen.getByText(/sozy ai/i)).toBeInTheDocument()
  })
})
