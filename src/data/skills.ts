export interface Skill {
  name: string
  category: 'ai' | 'language' | 'data' | 'hardware' | 'framework' | 'tool'
}

export const skills: Skill[] = [
  { name: 'Python', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'LangChain', category: 'ai' },
  { name: 'LangGraph', category: 'ai' },
  { name: 'Transformers', category: 'ai' },
  { name: 'Scikit-learn', category: 'ai' },
  { name: 'Computer Vision', category: 'ai' },
  { name: 'OpenCV', category: 'ai' },
  { name: 'Optuna', category: 'ai' },
  { name: 'NumPy', category: 'data' },
  { name: 'Pandas', category: 'data' },
  { name: 'Matplotlib', category: 'data' },
  { name: 'Seaborn', category: 'data' },
  { name: 'FastAPI', category: 'framework' },
  { name: 'Flask', category: 'framework' },
  { name: 'Raspberry Pi', category: 'hardware' },
  { name: 'Arduino / ESP32', category: 'hardware' },
  { name: 'Git', category: 'tool' },
]
