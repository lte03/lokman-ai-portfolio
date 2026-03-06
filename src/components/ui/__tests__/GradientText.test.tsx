import { render, screen } from '@testing-library/react'
import GradientText from '../GradientText'

describe('GradientText', () => {
  it('renders children text', () => {
    render(<GradientText>Hello World</GradientText>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('applies gradient classes', () => {
    render(<GradientText>Test</GradientText>)
    const el = screen.getByText('Test')
    expect(el.className).toContain('bg-gradient-to-r')
  })

  it('renders as span by default', () => {
    render(<GradientText>Test</GradientText>)
    expect(screen.getByText('Test').tagName).toBe('SPAN')
  })
})
