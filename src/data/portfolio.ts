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
    "I build LLM agents, RAG pipelines, and ML systems that ship to production. MS Data Science student at Indiana University (4.0 GPA), currently an AI Engineering Intern at Hitachi (HGAP).",
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
    "Right now I'm an AI Engineering Intern at Hitachi Global Air Power, architecting a multi-agent Copilot Studio assistant that orchestrates 5 RAG agents over governed Snowflake data via MCP, deployed to Microsoft Teams for 60+ users. Alongside that I work as an ML Engineer and Research Assistant at IU — building the query router behind One.IU and a Canvas-integrated LLM autograder — with prior roles building production RAG systems and ML pipelines at Business Optima and Scale Capacity.",
    "I care about clean experiments, reproducible pipelines, and writing code other people can build on. Outside of work I enjoy reading ML papers and exploring how agents can make everyday tools smarter.",
  ],
  // Quick facts shown as a small stat row
  stats: [
    { label: 'MS GPA', value: '4.0' },
    { label: 'Hands-on AI/ML (yrs)', value: '2+' },
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
      'MCP (Model Context Protocol)',
      'LoRA fine-tuning',
      'LLM evaluation',
      'Copilot Studio',
      'n8n',
    ],
  },
  {
    category: 'Databases & Vector Stores',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'FAISS', 'Pinecone'],
  },
  {
    category: 'Frameworks & APIs',
    items: ['FastAPI', 'Flask', 'REST APIs', 'LangChain'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, ECR)', 'Microsoft Azure', 'Docker', 'Git', 'GitHub Actions', 'Power Automate'],
  },
  {
    category: 'Data & Visualization',
    items: ['NumPy', 'Pandas', 'PySpark', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'],
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
      'Architecting a multi-agent enterprise AI assistant deployed on Microsoft Teams, grounded on governed Snowflake data via MCP, replacing manual document search for 60+ users.',
    highlights: [
      'Architected a multi-agent AI assistant in Microsoft Copilot Studio that replaced manual document search, orchestrating 5 RAG agents via a supervisor-worker pattern with guardrails; deployed on Teams to 60 users across 5 departments.',
      'Integrated Snowflake through a managed MCP (Model Context Protocol) server, exposing Cortex Search and Cortex Analyst as agent tools for governed, real-time retrieval over structured and unstructured data.',
      'Built a human-in-the-loop escalation pipeline in Power Automate, routing unanswered queries to subject-matter experts through Teams adaptive cards and SharePoint with automated email notifications, resolving 50+ queries at a 3-hour average turnaround.',
    ],
    tech: ['Copilot Studio', 'Multi-Agent Systems', 'Snowflake', 'MCP', 'Power Automate', 'Microsoft Teams'],
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
      'Building LLM-powered routing and auto-grading systems that power Indiana University\'s student-facing AI tools.',
    highlights: [
      "Engineered a query-routing system for Indiana University's One.IU portal, mapping user queries to a closed catalog of 33 applications at 98.6% accuracy, eliminating hallucinated routes by design.",
      'Implemented a hybrid routing pipeline combining embedding search (all-MiniLM-L6-v2), fuzzy matching, and an LLM tiebreaker, reducing inference cost through a 3-stage validation cascade.',
      'Deployed a REST API on Azure App Service that fetches and serves live IU dining data; adopted by the ChatAIU team as an agent tool, closing a live-data gap in the university\'s AI assistant.',
      'Developed a Flask-based LLM autograding platform integrated with Canvas LMS via OAuth2, automatically retrieving submissions and grading against faculty rubrics using a schema-validated LLM agent with faculty review before Excel export.',
    ],
    tech: ['Python', 'Embeddings', 'Azure App Service', 'Flask', 'Canvas LMS', 'LLM Agents'],
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
      'Benchmarked Naive Bayes, Logistic Regression, SVM, Random Forest, and ensemble classifiers on 50K+ TF-IDF-vectorized records for spam detection, achieving 97% precision and 96% recall on imbalanced data.',
      'Conducted statistical EDA on 50K+ data points with SQL, Pandas, PySpark, Matplotlib, and Seaborn to analyze class imbalance and text anomalies.',
      'Selected the final model on precision–recall trade-offs after benchmarking across 5+ classifier families on unstructured email/SMS data.',
    ],
    tech: ['Python', 'NLP', 'TF-IDF', 'PySpark', 'PostgreSQL', 'scikit-learn'],
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
    title: 'EduPilot — Multi-Agent, Source-Grounded RAG System',
    description:
      'A 7-stage multi-agent RAG pipeline (FastAPI, Pinecone, Groq Llama 3.3 70B) with hybrid semantic and BM25 retrieval fused via Reciprocal Rank Fusion, inline source citations, and LLM-as-judge verification. Evaluated with a 50-case, 8-metric suite spanning faithfulness, citation accuracy, and adversarial hallucination tests — quantifying a 3.7× citation-accuracy gap between 70B and 8B models.',
    tags: ['Multi-Agent', 'RAG', 'Hybrid Search', 'Reranking', 'Pinecone', 'FastAPI', 'Groq Llama 3.3 70B'],
    github:
      'https://github.com/Akshar106/EduPilot-A-Multi-Agent-Source-Grounded-Educational-AI-System-for-Adaptive-and-Cross-Domain-Learning',
    featured: true,
  },
  {
    title: 'IntelliSphere — Domain-Specific RAG Conversational AI',
    description:
      'A domain-specific RAG assistant for healthcare and legal document QA (Flask, LangChain, FAISS, Gemini) with recursive chunking, metadata-tagged indexing, and MongoDB-backed multi-session conversation memory. Containerized with Docker and shipped via GitHub Actions CI/CD, building images to Amazon ECR and auto-deploying to EC2 through a self-hosted runner, with FAISS indexes synced from S3 at startup.',
    tags: ['RAG', 'LangChain', 'FAISS', 'Gemini', 'Flask', 'MongoDB', 'Docker', 'CI/CD'],
    github: 'https://github.com/Akshar106/IntelliSphere-Domain-Specific-RAG-Conversational-AI-',
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
