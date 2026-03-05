export interface Project {
  title: string
  description: string
  tags: string[]
  badge?: string
  year?: string
}

export const projects: Project[] = [
  {
    title: 'Trendyol E-Commerce Search',
    description: 'Two-stage multilingual product search and category prediction pipeline: first-stage CatBoost training, then reranking for search terms using multilingual-e5 embeddings together with the first-stage CatBoost model. Full-stack FastAPI + React application with Google Vertex AI integration.',
    tags: ['multilingual-e5', 'CatBoost', 'FastAPI', 'React', 'Google Vertex AI', 'Polars', 'Optuna'],
    badge: '🥈 2nd Place — Trendyol Hackathon / 308 Teams',
    year: '2025',
  },
  {
    title: 'Voice AI Market Assistant',
    description: 'LangGraph multi-node conversational assistant with Text-to-SQL routing — converts natural language to SQLite queries with full conversation history management.',
    tags: ['LangGraph', 'LangChain', 'SQLite', 'OpenAI', 'FastAPI'],
    year: '2025',
  },
  {
    title: 'Conversational Robot on Raspberry Pi',
    description: 'Real-time pipeline on Raspberry Pi 5: face recognition (InsightFace) + STT (Whisper int8 quantized) + LLM (OpenAI) + TTS (Piper). Multithreaded design for stable edge performance.',
    tags: ['Python', 'Whisper int8', 'Piper-TTS', 'OpenAI', 'InsightFace', 'Qdrant'],
    badge: '🎓 BSc Thesis',
    year: '2025',
  },
  {
    title: 'ING Datathon 2025',
    description: 'Ensemble pipeline: CatBoost + meta-learner + logistic regression stacking with GroupKFold cross-validation and RayTune hyperparameter optimization.',
    tags: ['CatBoost', 'Scikit-learn', 'RayTune', 'Pandas'],
    badge: '📊 Top 10%',
    year: '2025',
  },
  {
    title: 'TEKNOFEST Flying Car Simulation',
    description: 'Autonomous flight algorithms for specialized vehicles (firefighter, ambulance, logistics) handling adverse sensor errors and dynamic weather scenarios.',
    tags: ['Python', 'Simulation', 'Control Systems'],
    badge: '🏁 TEKNOFEST Cyprus',
    year: '2025',
  },
]
