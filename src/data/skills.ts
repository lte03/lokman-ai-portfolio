export interface Skill {
  name: string
  category: 'ai' | 'language' | 'data' | 'hardware' | 'framework' | 'tool'
  rating: number
}

export const skills: Skill[] = [
  { name: 'Python', category: 'language', rating: 4.5 },
  { name: 'C++', category: 'language', rating: 2.5 },
  { name: 'SQL', category: 'language', rating: 3.0 },
  { name: 'PyTorch', category: 'ai', rating: 3.5 },
  { name: 'LangChain', category: 'ai', rating: 4.0 },
  { name: 'LangGraph', category: 'ai', rating: 3.5 },
  { name: 'Transformers', category: 'ai', rating: 3.5 },
  { name: 'Scikit-learn', category: 'ai', rating: 4.0 },
  { name: 'Computer Vision', category: 'ai', rating: 3.0 },
  { name: 'NumPy', category: 'data', rating: 4.0 },
  { name: 'Pandas', category: 'data', rating: 4.0 },
  { name: 'Optuna', category: 'data', rating: 3.0 },
  { name: 'FastAPI', category: 'framework', rating: 3.0 },
  { name: 'Raspberry Pi', category: 'hardware', rating: 3.5 },
  { name: 'Arduino / ESP32', category: 'hardware', rating: 2.5 },
  { name: 'Git', category: 'tool', rating: 3.5 },
]
