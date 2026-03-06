import { render, screen } from '@testing-library/react'
import Skills from '../Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Skills />)
    expect(container.querySelector('#skills')).toBeInTheDocument()
  })

  it('renders skills from data', () => {
    render(<Skills />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('LangChain')).toBeInTheDocument()
    expect(screen.getByText('PyTorch')).toBeInTheDocument()
  })
})
