import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<About />)
    expect(screen.getByText(/data science/i)).toBeInTheDocument()
  })
})
