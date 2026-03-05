export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  type: 'work' | 'community' | 'education'
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Computer Engineering Intern',
    company: 'Avşar Maden Suyu',
    period: 'Feb 2026 – Present',
    description: [
      'Developing internal software tools to meet factory operational requirements',
      'Testing and maintaining barcode reader systems on the production line',
      'Contributing across software development and production-side testing',
    ],
    type: 'work',
  },
  {
    title: 'Python Developer Intern',
    company: 'Sozy AI Technologies',
    period: 'Jun 2024 – Sep 2024',
    description: [
      'Researched and curated training datasets for Large Language Models',
      'Built text preprocessing pipelines using NLTK, NumPy, and Pandas',
      'Fine-tuned open-source LLMs for production environments with Transformers',
    ],
    type: 'work',
  },
  {
    title: 'Board Member & ML Developer',
    company: 'AKU Community of Artificial Intelligence',
    period: 'Nov 2022 – 2025',
    description: [
      'Recruited and led competition teams for TEKNOFEST national events',
      'Organized AI workshops and study sessions for university students',
    ],
    type: 'community',
  },
  {
    title: 'B.Eng. Computer Engineering',
    company: 'Afyon Kocatepe University',
    period: 'Sep 2022 – Present',
    description: [
      'Specializations: Artificial Intelligence & Embedded Systems',
      'Thesis: Raspberry Pi-based conversational robot with face recognition',
      'Courses: Computer Vision, NLP, AI optimization for edge devices',
    ],
    type: 'education',
  },
]
