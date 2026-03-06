import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleNetwork from './ui/ParticleNetwork'
import HexDecor from './ui/HexDecor'

const roles = ['ML Engineer', 'LLM Developer', 'Data Scientist', 'AI Researcher']

const stats = [
  { label: '2nd Place', sub: 'Trendyol Hackathon 2025' },
  { label: 'Top 10%', sub: 'ING & BTK Datathon' },
  { label: 'Intern', sub: 'Avşar Maden Suyu' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8"
    >
      <ParticleNetwork />
      <HexDecor />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 54% 46% at 50% 48%, rgba(255,122,89,0.14) 0%, transparent 72%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 py-8 sm:gap-12 sm:py-12 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="flex max-w-3xl flex-col items-start gap-6 text-left">
          <div className="space-y-4 pt-6 sm:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="max-w-xl text-sm leading-6 text-text-muted sm:text-base sm:leading-7"
            >
              LLM systems, edge intelligence and data products built with a clean engineering mindset.
            </motion.p>

            <div className="max-w-[15rem] leading-[0.92] sm:max-w-none">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[2.7rem] font-extrabold tracking-[-0.05em] text-text-primary min-[420px]:text-5xl sm:text-7xl lg:text-[5.5rem]"
              >
                Lokman
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-2 text-[2.15rem] font-semibold tracking-[-0.05em] text-text-primary/92 min-[420px]:text-4xl sm:text-6xl"
              >
                Tuğrul Emek
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.45, ease: 'easeOut' }}
            className="h-px w-28 origin-left rounded-full bg-gradient-to-r from-accent-from via-accent-to to-transparent"
          />

          <div className="flex min-h-[3rem] items-center justify-start sm:min-h-[2rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-base font-semibold tracking-[0.04em] text-accent-to sm:text-xl sm:tracking-[0.06em]"
              >
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8"
          >
            I design production-minded ML experiences, from fine-tuned language models and RAG workflows to embedded AI systems. Data Scientist perspective included.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-accent-from to-accent-to px-6 py-3 text-sm font-semibold text-bg-primary shadow-[0_12px_35px_rgba(255,122,89,0.25)] transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-0"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-accent-soft/40 hover:bg-white/[0.05] sm:min-h-0"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1"
        >
          {stats.map(s => (
            <div
              key={s.label}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-sm"
            >
              <p className="break-words text-xl font-bold tracking-[-0.04em] text-text-primary sm:text-2xl">{s.label}</p>
              <p className="mt-2 break-words text-sm leading-6 text-text-muted">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
