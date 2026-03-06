import { useEffect, useRef } from 'react'

const DESKTOP_PARTICLE_COUNT = 75
const MOBILE_PARTICLE_COUNT = 34
const DESKTOP_MAX_DIST = 160
const MOBILE_MAX_DIST = 120
const DESKTOP_SPEED = 0.35
const MOBILE_SPEED = 0.24
const DESKTOP_FPS = 60
const MOBILE_FPS = 28

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent)) return

    let ctx: CanvasRenderingContext2D | null = null
    try {
      ctx = canvas.getContext?.('2d') ?? null
    } catch {
      return
    }

    if (!ctx) return

    const mobileQuery =
      typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)') : null

    let animId = 0
    let particles: Particle[] = []
    let lastFrameTime = 0
    let isMobile = mobileQuery?.matches ?? false
    let particleCount = isMobile ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT
    let maxDist = isMobile ? MOBILE_MAX_DIST : DESKTOP_MAX_DIST
    let maxDistSq = maxDist * maxDist
    let speed = isMobile ? MOBILE_SPEED : DESKTOP_SPEED
    let frameDuration = 1000 / (isMobile ? MOBILE_FPS : DESKTOP_FPS)

    const syncSettings = () => {
      isMobile = mobileQuery?.matches ?? false
      particleCount = isMobile ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT
      maxDist = isMobile ? MOBILE_MAX_DIST : DESKTOP_MAX_DIST
      maxDistSq = maxDist * maxDist
      speed = isMobile ? MOBILE_SPEED : DESKTOP_SPEED
      frameDuration = 1000 / (isMobile ? MOBILE_FPS : DESKTOP_FPS)
    }

    const init = () => {
      syncSettings()
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }))
    }

    const resize = () => init()
    window.addEventListener('resize', resize)

    if (mobileQuery) {
      if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', init)
      } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(init)
      }
    }

    init()

    const animate = (time: number) => {
      if (document.visibilityState === 'hidden') {
        animId = requestAnimationFrame(animate)
        return
      }

      if (time - lastFrameTime < frameDuration) {
        animId = requestAnimationFrame(animate)
        return
      }

      lastFrameTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.3
            ctx.strokeStyle = `rgba(255, 122, 89, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = 'rgba(124, 224, 195, 0.55)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      if (mobileQuery) {
        if (typeof mobileQuery.removeEventListener === 'function') {
          mobileQuery.removeEventListener('change', init)
        } else if (typeof mobileQuery.removeListener === 'function') {
          mobileQuery.removeListener(init)
        }
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
