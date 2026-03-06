import '@testing-library/jest-dom'

// Mock IntersectionObserver for jsdom (used by Framer Motion's useInView)
const mockIntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver)
