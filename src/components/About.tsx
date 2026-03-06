import GradientText from './ui/GradientText'
import FadeIn from './ui/FadeIn'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,122,89,0.1), transparent)' }}
      />
      <FadeIn>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium uppercase tracking-[0.34em] text-accent-to">About</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
              About
            </h2>
            <p className="text-xl font-medium leading-8 text-text-primary/92 sm:text-2xl">
              <GradientText className="from-accent-soft via-accent-to to-accent-from">
                Building AI that feels sharp, useful and real.
              </GradientText>
            </p>
            <p className="text-base leading-8 text-text-muted">
              Computer Engineering student at Afyon Kocatepe University, focused on AI,
              embedded systems and practical product execution. I like building things
              that move beyond demos and actually work in constrained environments.
            </p>
            <p className="text-base leading-8 text-text-muted">
              My work spans data science, LLM fine-tuning, retrieval pipelines and
              hardware-aware systems. The common thread is clear architecture, measured
              iteration and shipping.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['ML Systems', 'LLM Ops', 'RAG', 'Edge AI', 'C++'].map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-30 blur-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(255,122,89,0.35), rgba(124,224,195,0.18))' }}
            />
            <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0f19]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-[#ff7a59]/90"></span>
                <span className="h-3 w-3 rounded-full bg-[#f4c95d]/90"></span>
                <span className="h-3 w-3 rounded-full bg-[#7ce0c3]/90"></span>
                <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
                  lokman.profile
                </span>
              </div>
              <div className="space-y-2 p-6 font-mono text-xs leading-6 text-text-muted">
                <p>
                  <span className="text-accent-soft">➜</span>{' '}
                  <span className="text-accent-to">whoami</span>
                </p>
                <p className="pl-4 text-[#ffe7d1]">Lokman - ML / LLM engineer</p>
                <p className="pt-2">
                  <span className="text-accent-soft">➜</span>{' '}
                  <span className="text-accent-to">focus</span>
                </p>
                <p className="pl-4 text-[#ffd9b0]">RAG pipelines, model tuning, edge systems</p>
                <p className="pt-2">
                  <span className="text-accent-soft">➜</span>{' '}
                  <span className="text-accent-to">experience</span>
                </p>
                <p className="pl-4 text-[#f0d6a2]">Current Intern @ Avşar Maden Suyu</p>
                <p className="pl-4 text-[#f0d6a2]">Intern @ Sozy AI Technologies</p>
                <p className="pl-4 text-[#f0d6a2]">AI Community Member @ AKU</p>
                <p className="pl-4 text-[#f0d6a2]">B.Eng Computer Engineering, 2022 - present</p>
                <p className="pt-2">
                  <span className="text-accent-soft">➜</span>{' '}
                  <span className="text-accent-to">awards</span>
                </p>
                <p className="pl-4 text-[#d6fff3]">2nd Place - Trendyol Hackathon 2025</p>
                <p className="pl-4 text-[#d6fff3]">Top 10% - ING Datathon</p>
                <p className="pl-4 text-[#d6fff3]">Top 10% - BTK Datathon</p>
                <p className="flex items-center gap-2 pt-3">
                  <span className="text-accent-soft">➜</span>
                  <span className="inline-block h-4 w-2 animate-pulse rounded-sm bg-accent-from/80"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
