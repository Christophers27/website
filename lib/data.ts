export const site = {
  name: "Christopher Setiabudi",
  role: "AI Engineer & Full-Stack Developer",
  location: "Pittsburgh, PA",
  available: true,
  intro:
    "AI Engineer and Full-Stack Software Engineer with a B.S. in Artificial Intelligence from Carnegie Mellon. I specialize in building intelligent, scalable applications that bridge complex machine learning with seamless user experiences.",
  about: [
    "Hi, I'm Chris! I recently graduated from Carnegie Mellon University with a B.S. in Artificial Intelligence. My work sits at the intersection of complex machine learning and robust application development. While my academic roots run deep in computer vision and NLP, I'm also a passionate full-stack software engineer who loves building out the complete picture: from the underlying AI models to seamless user interfaces using tools like React and Next.js.",

    "I brought these two worlds together at a startup I co-founded, where I engineered an AI-driven desktop app designed to help users conquer procrastination. Whether I'm designing an architecture or polishing a UI, I thrive on building intelligent solutions that solve real problems.",

    "When I step away from the code, I'm usually programming my indie game, Memoria Wake, or digging into heavy sci-fi and Warhammer 40k lore. You can also find me jogging, writing, or just relaxing with a good book and a wonderful cup of homemade coffee.",
  ],
};

export const skills: { name: string; type: "language" | "technology" | "concept" }[] = [
  { name: "Python", type: "language" },
  { name: "TypeScript", type: "language" },
  { name: "C#", type: "language" },
  { name: "C", type: "language" },
  { name: "Standard ML", type: "language" },
  { name: "Go", type: "language" },
  { name: "Git", type: "technology" },
  { name: "PyTorch", type: "technology" },
  { name: "TensorFlow", type: "technology" },
  { name: "React", type: "technology" },
  { name: "Next.js", type: "technology" },
  { name: "Electron.js", type: "technology" },
  { name: "GraphQL", type: "technology" },
  { name: "Jest", type: "technology" },
  { name: "SQLite", type: "technology" },
  { name: "Microsoft Azure", type: "technology" },
  { name: "DataChain", type: "technology" },
  { name: "Snowflake", type: "technology" },
  { name: "Docker", type: "technology" },
  { name: "AWS", type: "technology" },
  { name: "Unity", type: "technology" },
  { name: "Blender", type: "technology" },
  { name: "Machine Learning", type: "concept" },
  { name: "Deep Learning", type: "concept" },
  { name: "Large Language Models", type: "concept" },
  { name: "Computer Vision", type: "concept" },
  { name: "Multimodal Machine Learning", type: "concept" },
];

export const projects = [
  {
    name: "Memoria Wake | Indie Game",
    description:
      "Working as Writer and Game Designer for an indie game project. I help develop the central story, design characters, levels and puzzles. I also contribute as an engineer, programming systems in C# (Unity), creating 3D models (Blender), and building the game's websites.",
    skills: ["React", "Next.js", "TypeScript", "Unity", "Blender", "C#"],
    href: "https://store.steampowered.com/app/3240610/Memoria_Wake/",
  },
  {
    name: "Crest | Open-Source Project Management Tool",
    description:
      "Helped build Crest, an open-source, self-hostable, opinionated alternative to tools like Jira and Linear, designed for small-to-medium teams that want fast navigation, a clean keyboard-friendly UI, and full control over their data.",
    skills: ["React", "Next.js", "TypeScript", "SQLite", "AWS"],
    href: "https://github.com/Team-Crescendo-Games/Crest",
  },
  {
    name: "Lock-in | Startup",
    description:
      "Co-founded 'Lock-in', an AI-powered desktop productivity assistant. As the lead front-end developer, I built the native UI with React and Electron, and integrated it with a Python Flask backend that used computer vision to analyze user screenshots and an LLM to generate motivational prompts.",
    skills: ["React", "Electron.js", "TypeScript", "Python", "Flask", "Computer Vision", "Large Language Models"],
    href: "https://lock-in.ai/",
  },
  {
    name: "ScottyCon | CMU Organization",
    description:
      "As Tech Chair, developed the convention's digital booklet (PWA) and attendee check-in QR scanner using React and Next.js, interfacing with a Google Sheets database and accounting for large quantities of people accessing it at the same time.",
    skills: ["React", "Next.js", "TypeScript"],
    href: "https://www.scottycon-guide.com/",
  },
];

export const experiences = [
  {
    company: "Anthelion Capital Holdings",
    title: "Software Engineer Intern",
    date: "December 2026",
    location: "Remote",
    description: [
      "Created an end-to-end migration pipeline to transfer large-scale raw data from Microsoft Azure Storage into structured formats for processing and analysis.",
      "Developed scripts to clean and transform data in DataChain, and to perform numerous queries with Snowflake for comprehensive data analysis",
    ],
    skills: ["Python", "Microsoft Azure", "DataChain", "Snowflake"],
  },
  {
    company: "Credit Karma",
    title: "Software Engineer Intern",
    date: "May 2024 - Aug 2024",
    location: "Charlotte, North Carolina",
    description: [
      "Contributed to Intuit Assist (IA), an LLM-powered feature, by developing TypeScript and GraphQL front-to-back-end services with RPC-based server communication, and code coverage optimization, and rigorous Jest unit testing",
      "Designed and implemented front-end components using proprietary tools, applying UI/UX best practices to enhance usability",
      "Gained hands-on experience with AI/ML concepts, including prompt engineering and fine-tuning",
    ],
    skills: ["TypeScript", "GraphQL", "Jest", "Machine Learning"],
  },
  {
    company: "AirLab",
    title: "Research Intern",
    date: "May 2023 - Dec 2023",
    location: "Pittsburgh, Pennsylvania",
    description: [
      "Developed and optimized **semantic segmentation** models using PyTorch and TensorFlow, advancing the lab's computer vision research",
      "Researched and applied state-of-the-art techniques, including vision transformers, to solve real-world problems in autonomous systems and robotics",
      "Leveraged HuggingFace and Weights & Biases (WandB) for experiment tracking, improving model reproducibility and research efficiency",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "Computer Vision"],
  },
];

export const contact = [
  { label: "Email", value: "christophersetiabudi@gmail.com", href: "mailto:christophersetiabudi@gmail.com" },
  { label: "GitHub", value: "github.com/Christophers27", href: "https://github.com/Christophers27" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/christophersetiabudi/",
    href: "https://www.linkedin.com/in/christophersetiabudi/",
  },
];
