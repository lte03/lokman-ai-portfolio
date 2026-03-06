import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('nav links point to section anchors', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects')
  })

  it('toggles mobile navigation from the menu button', async () => {
    const user = userEvent.setup()

    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(screen.getAllByRole('link', { name: /about/i })).toHaveLength(2)
  })
})
