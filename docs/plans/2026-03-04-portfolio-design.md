# Portfolio Site Design — Lokman

**Date:** 2026-03-04
**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion

---

## Profile

Data Scientist & LLM Engineer. Focus: LLM fine-tuning, LangChain, RAG pipelines. Also: C++ applications, Raspberry Pi projects.

---

## Theme

**Soft Light** — not bright white. Cool cream base with blue→cyan gradient accents.

| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | `#F0F7FF` | Main background |
| bg-card | `#FFFFFF` | Card backgrounds |
| text-primary | `#0F172A` | Main text |
| text-muted | `#64748B` | Secondary text |
| accent-from | `#2563EB` | Gradient start |
| accent-to | `#06B6D4` | Gradient end |
| border | `#E2EEF9` | Card borders |

---

## Sections (single page, scroll)

1. **Navbar** — sticky, logo + nav links + smooth scroll
2. **Hero** — name, title, CTA buttons, CSS-only gradient blob
3. **About** — photo placeholder, bio text, interests
4. **Skills** — icon grid (Python, LangChain, PyTorch, HuggingFace, C++, Raspberry Pi)
5. **Projects** — card grid, tags, description, GitHub link
6. **Contact** — email, LinkedIn, GitHub links + mailto form

---

## Component Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    ui/
      GradientText.tsx
      ProjectCard.tsx
      SkillBadge.tsx
  data/
    projects.ts   (user will populate)
    skills.ts     (user will populate)
  App.tsx
  index.css
```

---

## Performance Strategy

- Tailwind CSS with purge → ~6KB CSS in production
- Framer Motion: only `motion` primitives (no full bundle)
- Images: WebP + lazy loading
- Font: Inter via `font-display: swap`
- Gradient blobs: pure CSS, no JS animation
- No code splitting needed (single page, small bundle)

---

## Animation Level

**Medium** — scroll-triggered fade-in for sections, hover effects on cards/badges. No parallax or particle effects.

---

## Testing Approach (TDD)

- Component render tests (Vitest + React Testing Library)
- Each component: renders without crash, key content visible
- Skill/Project data: type safety via TypeScript interfaces
- Test written before component implementation
