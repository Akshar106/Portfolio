/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit the values here to update any section on the page — the components
 *  read everything from this file, so you never have to touch them.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Akshar Patel',
  // Short roles cycled in the hero typewriter effect
  roles: ['AI/ML Engineer', 'Data Science Enthusiast'],
  tagline:
    "I build LLM agents, RAG pipelines, and ML systems that ship to production. MS Data Science student at Indiana University (4.0 GPA), currently an AI Engineering Intern at Hitachi Global Air Power.",
  location: 'Bloomington, IN, USA',
  email: 'patelakshar1104@gmail.com',
  phone: '+1 (224) 224-1987',
  resumeUrl: '/resume.pdf', // served from /public/resume.pdf
  available: true, // shows the "Open to opportunities" badge
  // Photo lives at /public/profile.jpg (save your image there with that exact name).
  avatarUrl: '/profile.jpg',
};

export const socials = {
  github: 'https://github.com/Akshar106',
  linkedin: 'https://www.linkedin.com/in/akshar-patel11/',
  email: 'mailto:patelakshar1104@gmail.com',
};

export const about = {
  // 2–3 short paragraphs. Keep it human and specific.
  paragraphs: [
    "I'm an AI/ML engineer and MS Data Science student at Indiana University Bloomington (4.0 GPA), focused on large language models, multi-agent systems, RAG, and applied deep learning — and on shipping them where they create real value.",
    "Right now I'm an AI Engineering Intern at Hitachi Global Air Power, building an enterprise Copilot Studio agent deployed to Microsoft Teams. Alongside that I work as a Research Assistant and ML Engineer at IU, with prior roles building production RAG systems and ML pipelines at Business Optima and Scale Capacity.",
    "I care about clean experiments, reproducible pipelines, and writing code other people can build on. Outside of work I enjoy reading ML papers and exploring how agents can make everyday tools smarter.",
  ],
  // Quick facts shown as a small stat row
  stats: [
    { label: 'MS GPA', value: '4.0' },
    { label: 'Years in AI/ML', value: '2+' },
    { label: 'AI/ML roles held', value: '5' },
  ],
};

// Grouped so the Skills section can render tidy categories.
export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Languages & ML',
    items: ['Python', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face'],
  },
  {
    category: 'LLM & Agents',
    items: [
      'RAG',
      'Multi-agent orchestration',
      'LoRA fine-tuning',
      'Few-shot prompting',
      'Copilot Studio',
      'n8n',
    ],
  },
  {
    category: 'Databases & Vector Stores',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'FAISS', 'Pinecone'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, ECR)', 'Docker', 'Git', 'GitHub Actions', 'Power Automate'],
  },
  {
    category: 'Data & Visualization',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Part-time';
  description: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: 'AI Engineering Intern',
    company: 'Hitachi Global Air Power',
    period: 'May 2026 — Present',
    type: 'Internship',
    description:
      'Building an enterprise AI assistant deployed to Microsoft Teams so employees across the organization can self-serve accurate, source-backed answers.',
    highlights: [
      "Built a conversational agent in Microsoft Copilot Studio grounded on the company's SharePoint document directory for accurate, citation-backed responses.",
      'Designed Power Automate flows that capture and log "no information found" queries to a SharePoint list, creating a feedback loop for subject-matter experts (SMEs).',
      'Established an auto-sync knowledge pipeline: SMEs validate and add approved docs to the SharePoint source, so the agent self-improves and correctly answers previously-unanswered questions.',
      'Deployed the agent to Microsoft Teams for easy, org-wide access.',
    ],
    tech: ['Copilot Studio', 'Power Automate', 'SharePoint', 'Microsoft Teams', 'RAG'],
  },
  {
    role: 'Research Assistant',
    company: 'Indiana University Bloomington',
    period: 'Jan 2026 — May 2026',
    type: 'Part-time',
    description:
      'Researching multimodal deep learning for mental-health classification on large-scale datasets.',
    highlights: [
      'Built a mental-health NLP classification pipeline with stratified 5-fold cross-validation and macro-averaged metrics across 700K+ samples for balanced evaluation across underrepresented classes.',
      'Fine-tuned RoBERTa-base/large (125M–355M params) with domain-adaptive pretraining and LoRA on Big Red 200 GPUs, improving macro-F1 by 9 points over LogReg, SVM, and LightGBM baselines.',
      'Trained end-to-end CNN and Vision Transformer models (ResNet, EfficientNet, ViT) in PyTorch on 15K+ images with focal loss and staged fine-tuning to reach 0.82 ROC-AUC.',
      'Designed a multimodal vision-language architecture fusing RoBERTa and ViT features via cross-modal fusion for robustness beyond single-modality models.',
    ],
    tech: ['PyTorch', 'RoBERTa', 'LoRA', 'Vision Transformers', 'Hugging Face'],
  },
  {
    role: 'ML Engineer',
    company: 'Indiana University Bloomington',
    period: 'Oct 2025 — Present',
    type: 'Part-time',
    description:
      'Building LLM-powered routing and auto-grading systems for academic workflows.',
    highlights: [
      'Designed a multi-agent routing layer using cosine similarity over normalized embeddings, rule-based constraints, and keyword parsing — 91% routing accuracy across 70+ validation scenarios.',
      'Cut end-to-end query latency to 350ms by precomputing embedding matrices and adding a similarity-threshold fallback strategy.',
      'Spearheaded an LLM-based auto-grading system via structured n8n workflows, processing 500–600 submissions/week and reducing grading time by 15 hours/week.',
    ],
    tech: ['Python', 'LLMs', 'Embeddings', 'n8n', 'Multi-agent'],
  },
  {
    role: 'AI Developer',
    company: 'Business Optima',
    period: 'Oct 2024 — Feb 2025',
    type: 'Full-time',
    description:
      'Architected and shipped production-grade RAG systems and full-stack AI apps for healthcare and legal domains.',
    highlights: [
      'Designed a multi-stage RAG architecture — query expansion + normalization → hybrid retrieval (dense FAISS embeddings + BM25 sparse search) → cross-encoder reranking → grounded response generation — with semantic chunking and metadata tagging across 500+ healthcare/legal documents.',
      'Tuned the retrieval stack to ~250ms query latency while lifting answer relevance by reranking top-k candidates before generation, reducing hallucinations on out-of-scope queries.',
      'Reduced repeat-query LLM overhead by ~60% with a Flask + MongoDB conversational memory layer, benchmarked via cache-hit rates before and after deployment.',
      'Containerized and deployed the full-stack app on AWS (EC2, S3, ECR) using Docker and GitHub Actions CI/CD.',
    ],
    tech: ['RAG', 'Hybrid Search', 'Reranking', 'FAISS', 'Flask', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    role: 'Data Science Intern',
    company: 'Scale Capacity',
    period: 'Jun 2024 — Aug 2024',
    type: 'Internship',
    description:
      'Built an NLP spam-detection system and ran large-scale exploratory data analysis.',
    highlights: [
      'Built an end-to-end spam detection system using NLP preprocessing and TF-IDF backed by PostgreSQL — 97% precision and 94% recall on unstructured email/SMS data.',
      'Conducted statistical EDA on 50K+ data points with SQL, Pandas, NumPy, Matplotlib, and Seaborn to analyze class imbalance and text anomalies.',
      'Trained and benchmarked 5+ classifiers (Naive Bayes, SVM, Logistic Regression, Random Forest), selecting the final model on precision–recall trade-offs.',
    ],
    tech: ['Python', 'NLP', 'TF-IDF', 'PostgreSQL', 'scikit-learn'],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'EduPilot — Multi-Agent Educational AI',
    description:
      'A source-grounded, multi-agent tutoring system that answers graduate-course questions with mandatory citations and near-zero hallucination. A 7-stage pipeline — router → query splitter → hybrid retriever (Pinecone + BM25 via Reciprocal Rank Fusion) → cross-encoder reranker → per-domain agents → synthesizer → two-pass verifier — delivers 100% intent/routing/citation accuracy, cross-domain synthesis, out-of-domain rejection, and a 4.6× token-efficiency gain.',
    tags: ['Multi-Agent', 'RAG', 'Hybrid Search', 'Reranking', 'Pinecone', 'FastAPI'],
    github:
      'https://github.com/Akshar106/EduPilot-A-Multi-Agent-Source-Grounded-Educational-AI-System-for-Adaptive-and-Cross-Domain-Learning',
    featured: true,
  },
  {
    title: 'Diabetic Retinopathy Detection System',
    description:
      'Production medical-AI system: an ensemble CNN (DenseNet, ResNet, Xception, InceptionV3) for multi-class retinopathy detection — 97% accuracy and 95% sensitivity on rare high-risk grades. Tackled class imbalance with augmentation and weighted loss (+8% minority-class F1), deployed via a Flask + MongoDB web app supporting image and video input.',
    tags: ['CNN', 'PyTorch', 'Medical AI', 'Flask', 'MongoDB'],
    github: 'https://github.com/Akshar106',
    featured: true,
  },
  // Add more projects here as you build them — copy the shape above.
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  details: string;
};

export const education: Education[] = [
  {
    degree: 'M.S. in Data Science',
    school: 'Indiana University Bloomington',
    period: 'Aug 2025 — May 2027 (Expected)',
    details:
      'GPA: 4.0/4.0 · Bloomington, IN, USA. Relevant coursework: Applied Machine Learning, Large Language Models, Applied Database Technologies.',
  },
  {
    degree: 'B.Tech in Information Technology',
    school: 'Charotar University of Science and Technology',
    period: 'Oct 2021 — May 2025',
    details: 'GPA: 8.83/10 · Anand, GJ, India.',
  },
];
