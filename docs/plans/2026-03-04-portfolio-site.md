# Portfolio Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page portfolio site for a Data Scientist & LLM Engineer using Vite + React 18 + TypeScript + Tailwind CSS with TDD.

**Architecture:** Single-page app with smooth-scroll sections (Hero, About, Skills, Projects, Contact). All content lives in typed data files that the user edits later. Components are small and focused; no global state manager needed.

**Tech Stack:** Vite 5, React 18, TypeScript 5, Tailwind CSS 3, Framer Motion 11 (motion primitives only), Vitest, @testing-library/react, @testing-library/jest-dom

---

### Task 1: Scaffold Vite + React + TypeScript project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`

**Step 1: Scaffold project**

```bash
cd "C:/Users/LOKMAN/OneDrive/Masaüstü/Lokman/my_portofolio"
npm create vite@latest . -- --template react-ts
```

When prompted "Current directory is not empty. Remove existing files and continue?" → select **Yes**.

**Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npm install framer-motion
npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
npx tailwindcss init -p
```

**Step 3: Configure Tailwind**

Replace `tailwind.config.js` content:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F0F7FF',
        'bg-card': '#FFFFFF',
        'text-primary': '#0F172A',
        'text-muted': '#64748B',
        'accent-from': '#2563EB',
        'accent-to': '#06B6D4',
        'border-soft': '#E2EEF9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**Step 4: Configure Vitest in vite.config.ts**

Replace `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

**Step 5: Create test setup file**

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom'
```

**Step 6: Update tsconfig.json to include vitest globals**

In `tsconfig.json`, add `"types": ["vitest/globals"]` under `compilerOptions`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vitest/globals"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Step 7: Replace src/index.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F0F7FF;
  color: #0F172A;
  font-family: 'Inter', system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}
```

**Step 8: Replace src/App.tsx with empty shell**

```tsx
export default function App() {
  return <div>Portfolio</div>
}
```

**Step 9: Add test script to package.json**

In `package.json`, under `"scripts"`, add:
```json
"test": "vitest run",
"test:watch": "vitest"
```

**Step 10: Run dev server to verify scaffold works**

```bash
npm run dev
```

Expected: Server starts at `http://localhost:5173`, browser shows "Portfolio".

**Step 11: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold vite react ts + tailwind + vitest"
```

---

### Task 2: Create typed data files

**Files:**
- Create: `src/data/skills.ts`
- Create: `src/data/projects.ts`

**Step 1: Write the failing test**

Create `src/data/__tests__/data.test.ts`:

```ts
import { skills } from '../skills'
import { projects } from '../projects'

describe('skills data', () => {
  it('exports a non-empty array', () => {
    expect(skills.length).toBeGreaterThan(0)
  })

  it('each skill has required fields', () => {
    skills.forEach(skill => {
      expect(skill).toHaveProperty('name')
      expect(skill).toHaveProperty('category')
      expect(typeof skill.name).toBe('string')
    })
  })
})

describe('projects data', () => {
  it('exports a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('tags')
      expect(Array.isArray(project.tags)).toBe(true)
    })
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../skills'"

**Step 3: Create src/data/skills.ts**

```ts
export interface Skill {
  name: string
  category: 'ai' | 'language' | 'hardware' | 'tool'
  iconUrl?: string
}

export const skills: Skill[] = [
  { name: 'Python', category: 'language' },
  { name: 'LangChain', category: 'ai' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'HuggingFace', category: 'ai' },
  { name: 'LLM Fine-tuning', category: 'ai' },
  { name: 'RAG Pipelines', category: 'ai' },
  { name: 'C++', category: 'language' },
  { name: 'Raspberry Pi', category: 'hardware' },
  { name: 'Git', category: 'tool' },
]
```

**Step 4: Create src/data/projects.ts**

```ts
export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'LLM Fine-tuning Pipeline',
    description: 'Custom fine-tuning pipeline for language models using HuggingFace Transformers.',
    tags: ['Python', 'HuggingFace', 'LLM'],
    githubUrl: 'https://github.com/lokman',
  },
  {
    title: 'RAG Chatbot with LangChain',
    description: 'Retrieval-augmented generation chatbot built with LangChain and vector databases.',
    tags: ['LangChain', 'Python', 'RAG'],
    githubUrl: 'https://github.com/lokman',
  },
  {
    title: 'Raspberry Pi Sensor Dashboard',
    description: 'Real-time sensor data visualization on Raspberry Pi with Python.',
    tags: ['Python', 'Raspberry Pi', 'IoT'],
    githubUrl: 'https://github.com/lokman',
  },
]
```

**Step 5: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — all 4 tests green.

**Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add typed skills and projects data"
```

---

### Task 3: GradientText UI component

**Files:**
- Create: `src/components/ui/GradientText.tsx`
- Create: `src/components/ui/__tests__/GradientText.test.tsx`

**Step 1: Write the failing test**

Create `src/components/ui/__tests__/GradientText.test.tsx`:

```tsx
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
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../GradientText'"

**Step 3: Write minimal implementation**

Create `src/components/ui/GradientText.tsx`:

```tsx
interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/ui/GradientText.tsx src/components/ui/__tests__/GradientText.test.tsx
git commit -m "feat: add GradientText UI component"
```

---

### Task 4: SkillBadge UI component

**Files:**
- Create: `src/components/ui/SkillBadge.tsx`
- Create: `src/components/ui/__tests__/SkillBadge.test.tsx`

**Step 1: Write the failing test**

Create `src/components/ui/__tests__/SkillBadge.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import SkillBadge from '../SkillBadge'
import type { Skill } from '../../../data/skills'

const mockSkill: Skill = { name: 'Python', category: 'language' }

describe('SkillBadge', () => {
  it('renders skill name', () => {
    render(<SkillBadge skill={mockSkill} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('has a border and rounded style', () => {
    render(<SkillBadge skill={mockSkill} />)
    const el = screen.getByText('Python').closest('div')
    expect(el?.className).toContain('rounded')
    expect(el?.className).toContain('border')
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../SkillBadge'"

**Step 3: Write minimal implementation**

Create `src/components/ui/SkillBadge.tsx`:

```tsx
import type { Skill } from '../../data/skills'

interface SkillBadgeProps {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border-soft bg-bg-card shadow-sm hover:shadow-md hover:border-accent-from transition-all duration-200 cursor-default">
      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/ui/SkillBadge.tsx src/components/ui/__tests__/SkillBadge.test.tsx
git commit -m "feat: add SkillBadge UI component"
```

---

### Task 5: ProjectCard UI component

**Files:**
- Create: `src/components/ui/ProjectCard.tsx`
- Create: `src/components/ui/__tests__/ProjectCard.test.tsx`

**Step 1: Write the failing test**

Create `src/components/ui/__tests__/ProjectCard.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'
import type { Project } from '../../../data/projects'

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test description.',
  tags: ['Python', 'LLM'],
  githubUrl: 'https://github.com/test',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test description.')).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('LLM')).toBeInTheDocument()
  })

  it('renders GitHub link when provided', () => {
    render(<ProjectCard project={mockProject} />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/test')
  })

  it('does not render GitHub link when not provided', () => {
    const projectNoLink: Project = { title: 'X', description: 'Y', tags: [] }
    render(<ProjectCard project={projectNoLink} />)
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../ProjectCard'"

**Step 3: Write minimal implementation**

Create `src/components/ui/ProjectCard.tsx`:

```tsx
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-bg-card border border-border-soft rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-accent-from border border-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-sm font-medium text-accent-from hover:text-accent-to transition-colors"
        >
          GitHub →
        </a>
      )}
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/ui/ProjectCard.tsx src/components/ui/__tests__/ProjectCard.test.tsx
git commit -m "feat: add ProjectCard UI component"
```

---

### Task 6: Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/__tests__/Navbar.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/Navbar.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders site name', () => {
    render(<Navbar />)
    expect(screen.getByText('Lokman')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /hakkımda/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /beceriler/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projeler/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /iletişim/i })).toBeInTheDocument()
  })

  it('nav links point to section anchors', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /projeler/i })).toHaveAttribute('href', '#projects')
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../Navbar'"

**Step 3: Write minimal implementation**

Create `src/components/Navbar.tsx`:

```tsx
const links = [
  { label: 'Hakkımda', href: '#about' },
  { label: 'Beceriler', href: '#skills' },
  { label: 'Projeler', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
          Lokman
        </span>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Navbar.tsx src/components/__tests__/Navbar.test.tsx
git commit -m "feat: add Navbar component"
```

---

### Task 7: Hero section

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/__tests__/Hero.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/Hero.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText(/lokman/i)).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<Hero />)
    expect(screen.getByText(/data scientist/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /projeler/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /iletişim/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#hero')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../Hero'"

**Step 3: Write minimal implementation**

Create `src/components/Hero.tsx`:

```tsx
import GradientText from './ui/GradientText'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CSS-only gradient blob — no JS */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2563EB, #06B6D4)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #06B6D4, #2563EB)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <p className="text-sm font-medium text-accent-from tracking-widest uppercase">
          Merhaba, ben
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-text-primary leading-tight">
          <GradientText>Lokman</GradientText>
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-text-muted">
          Data Scientist &amp; LLM Engineer
        </p>
        <p className="text-base text-text-muted max-w-xl leading-relaxed">
          LLM fine-tuning, RAG pipeline'ları ve LangChain üzerine çalışıyorum. C++ ve Raspberry Pi
          projeleri de yapıyorum.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-from to-accent-to hover:opacity-90 transition-opacity shadow-md"
          >
            Projeler
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-accent-from border border-accent-from hover:bg-blue-50 transition-colors"
          >
            İletişim
          </a>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/__tests__/Hero.test.tsx
git commit -m "feat: add Hero section"
```

---

### Task 8: About section

**Files:**
- Create: `src/components/About.tsx`
- Create: `src/components/__tests__/About.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/About.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /hakkımda/i })).toBeInTheDocument()
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
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../About'"

**Step 3: Write minimal implementation**

Create `src/components/About.tsx`:

```tsx
import GradientText from './ui/GradientText'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center shadow-xl">
            <span className="text-white text-5xl font-bold">L</span>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-text-primary">
            <GradientText>Hakkımda</GradientText>
          </h2>
          <p className="text-text-muted leading-relaxed">
            Data science ve büyük dil modelleri (LLM) üzerine çalışıyorum. HuggingFace ile model
            fine-tuning, LangChain ile RAG pipeline'ları geliştirme konularında deneyimliyim.
          </p>
          <p className="text-text-muted leading-relaxed">
            Bunların yanı sıra C++ ile sistem uygulamaları ve Raspberry Pi üzerinde gömülü projeler
            de yapıyorum.
          </p>
          <div className="flex gap-4 mt-2">
            {['Data Science', 'LLM', 'RAG', 'C++', 'IoT'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-accent-from border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/About.tsx src/components/__tests__/About.test.tsx
git commit -m "feat: add About section"
```

---

### Task 9: Skills section

**Files:**
- Create: `src/components/Skills.tsx`
- Create: `src/components/__tests__/Skills.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/Skills.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Skills from '../Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /beceriler/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Skills />)
    expect(container.querySelector('#skills')).toBeInTheDocument()
  })

  it('renders all skills from data', () => {
    render(<Skills />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('LangChain')).toBeInTheDocument()
    expect(screen.getByText('PyTorch')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../Skills'"

**Step 3: Write minimal implementation**

Create `src/components/Skills.tsx`:

```tsx
import { skills } from '../data/skills'
import GradientText from './ui/GradientText'
import SkillBadge from './ui/SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary">
            <GradientText>Beceriler</GradientText>
          </h2>
          <p className="mt-3 text-text-muted">Kullandığım teknolojiler ve araçlar</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Skills.tsx src/components/__tests__/Skills.test.tsx
git commit -m "feat: add Skills section"
```

---

### Task 10: Projects section

**Files:**
- Create: `src/components/Projects.tsx`
- Create: `src/components/__tests__/Projects.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/Projects.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /projeler/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })

  it('renders project cards from data', () => {
    render(<Projects />)
    expect(screen.getByText('LLM Fine-tuning Pipeline')).toBeInTheDocument()
    expect(screen.getByText('RAG Chatbot with LangChain')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../Projects'"

**Step 3: Write minimal implementation**

Create `src/components/Projects.tsx`:

```tsx
import { projects } from '../data/projects'
import GradientText from './ui/GradientText'
import ProjectCard from './ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary">
            <GradientText>Projeler</GradientText>
          </h2>
          <p className="mt-3 text-text-muted">Üzerinde çalıştığım bazı projeler</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Projects.tsx src/components/__tests__/Projects.test.tsx
git commit -m "feat: add Projects section"
```

---

### Task 11: Contact section

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/__tests__/Contact.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/Contact.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /iletişim/i })).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink.getAttribute('href')).toMatch(/^mailto:/)
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../Contact'"

**Step 3: Write minimal implementation**

Create `src/components/Contact.tsx`:

```tsx
import GradientText from './ui/GradientText'

const contacts = [
  { label: 'GitHub', href: 'https://github.com/lokman', icon: '⌨️' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lokman', icon: '💼' },
  { label: 'Email', href: 'mailto:lokman@example.com', icon: '✉️' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/40">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        <div>
          <h2 className="text-3xl font-bold text-text-primary">
            <GradientText>İletişim</GradientText>
          </h2>
          <p className="mt-3 text-text-muted">Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsin.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={c.label}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-bg-card border border-border-soft shadow-sm hover:shadow-md hover:border-accent-from transition-all duration-200 font-medium text-text-primary"
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-text-muted">© 2026 Lokman. Tüm hakları saklıdır.</p>
      </div>
    </section>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Contact.tsx src/components/__tests__/Contact.test.tsx
git commit -m "feat: add Contact section"
```

---

### Task 12: Assemble App + add scroll animations

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/__tests__/App.test.tsx`

**Step 1: Write the failing test**

Create `src/components/__tests__/App.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('App', () => {
  it('renders navbar', () => {
    render(<App />)
    expect(screen.getByText('Lokman')).toBeInTheDocument()
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hakkımda/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /beceriler/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /projeler/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /iletişim/i })).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — App renders "Portfolio" (old shell), sections not found.

**Step 3: Write minimal implementation**

Replace `src/App.tsx`:

```tsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npm test
```

Expected: PASS — all tests green.

**Step 5: Verify dev server**

```bash
npm run dev
```

Open `http://localhost:5173` — should show full portfolio site.

**Step 6: Commit**

```bash
git add src/App.tsx src/components/__tests__/App.test.tsx
git commit -m "feat: assemble full app layout"
```

---

### Task 13: Add Framer Motion scroll animations

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/Skills.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Contact.tsx`

> Note: Framer Motion's `useInView` triggers on scroll. Tests already pass (tests don't test animation, just content). This task is visual-only.

**Step 1: Create reusable FadeIn wrapper**

Create `src/components/ui/FadeIn.tsx`:

```tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Wrap section content in FadeIn**

In each section (`About`, `Skills`, `Projects`, `Contact`), wrap the inner `div` with `<FadeIn>`:

```tsx
// Example for About.tsx — wrap the max-w-5xl div:
import FadeIn from './ui/FadeIn'

// inside return:
<section id="about" className="py-24 px-6">
  <FadeIn>
    <div className="max-w-5xl mx-auto ...">
      {/* existing content */}
    </div>
  </FadeIn>
</section>
```

Apply same pattern to `Skills`, `Projects`, `Contact`.

**Step 3: Run tests to ensure nothing broke**

```bash
npm test
```

Expected: All tests PASS (animations don't affect DOM content).

**Step 4: Verify visually**

```bash
npm run dev
```

Scroll down — sections should fade in as they enter viewport.

**Step 5: Commit**

```bash
git add src/components/ui/FadeIn.tsx src/components/About.tsx src/components/Skills.tsx src/components/Projects.tsx src/components/Contact.tsx
git commit -m "feat: add scroll fade-in animations with Framer Motion"
```

---

### Task 14: Final check — build for production

**Step 1: Run all tests**

```bash
npm test
```

Expected: All green, no failures.

**Step 2: Build for production**

```bash
npm run build
```

Expected: Build succeeds, `dist/` folder created.

**Step 3: Preview production build**

```bash
npm run preview
```

Open `http://localhost:4173` — verify site looks correct.

**Step 4: Final commit**

```bash
git add .
git commit -m "chore: verify production build"
```

---

## Done

Site is running at `http://localhost:5173`. User can now:
1. Edit `src/data/skills.ts` to add real skills
2. Edit `src/data/projects.ts` to add real projects
3. Edit `src/components/About.tsx` to update bio and photo
4. Edit `src/components/Contact.tsx` to update real links
