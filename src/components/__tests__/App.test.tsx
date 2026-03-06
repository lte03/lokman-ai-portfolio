import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('App', () => {
  it('renders navbar with links', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
  })
})
