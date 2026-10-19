// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Shantanu Choudhary',
  role: 'Frontend Developer (React) / Full Stack Developer',
  tagline:
    'I build fast, scalable web and mobile products with React.js, Next.js, TypeScript and Flutter, used by 100K+ users.',
  location: 'Pune, Maharashtra',
  email: 'shantanuchoudhary1103@gmail.com',
  phone: '+91 93259 96803',
  linkedin: 'https://linkedin.com/in/shantanuchoudhary1103',
  github: 'https://github.com/ShantanuPr',
  resume: `${import.meta.env.BASE_URL}Shantanu_Choudhary_Frontend_Developer_Resume.pdf`,
  photo: `${import.meta.env.BASE_URL}profile.webp`,
  roles: ['Frontend Developer', 'Full Stack Developer', 'React.js Engineer'],
  summary:
    'Frontend Developer with 3.5 years of experience building and scaling React.js, Next.js and TypeScript applications used by 100K+ users. I lead a development team on client projects and own delivery from requirements to release. I focus on reusable component architecture, Redux Toolkit state management, real-time features with WebSockets and web performance, and I also ship cross-platform apps in Flutter.',
}

export const stats = [
  { value: '3.5+', label: 'Years of experience' },
  { value: '100K+', label: 'Users served' },
  { value: '40%', label: 'Faster dashboard loads' },
  { value: '50%', label: 'Faster data drill-down' },
]

export type Job = {
  title: string
  company: string
  period: string
  location: string
  stack: string[]
  points: string[]
}

export const experience: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Patheya Technology',
    period: 'Apr 2025 – Present',
    location: 'Pune, Maharashtra',
    stack: ['React.js', 'Flutter', 'Node.js', 'Ant Design', 'Tailwind CSS', 'Razorpay', 'OpenAI'],
    points: [
      'Lead the development team on client projects, owning client requirements and end-to-end delivery.',
      'Architected and built multi-role, cross-platform apps with React.js, Flutter and Node.js for 100K+ users.',
      'Reduced dashboard load time by 40% through lazy loading, memoization and code splitting.',
      'Built a reusable component library with React Hooks, Ant Design and Tailwind CSS, reducing development time across teams.',
      'Integrated Razorpay payments and OpenAI APIs for AI-generated personalised plans.',
    ],
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'StoryYell',
    period: 'May 2023 – Mar 2025',
    location: 'Nagpur, India',
    stack: ['React.js', 'TypeScript', 'Firebase', 'HTML5', 'CSS3'],
    points: [
      'Built responsive web apps with React.js, TypeScript, HTML5, CSS3 and Firebase for thousands of users.',
      'Developed a reusable component library and integrated third-party APIs, reducing code duplication by ~40%.',
      'Improved application performance and maintainability through code refactoring and lazy loading.',
    ],
  },
]

export type Project = {
  name: string
  subtitle: string
  stack: string[]
  points: string[]
  highlight: string
  features?: string[]
}

export const projects: Project[] = [
  {
    name: 'Moovv.fit',
    subtitle: 'Physiotherapy & mobility recovery app',
    stack: ['Flutter', 'React.js', 'TypeScript', 'WebSockets', 'Agora', 'Razorpay'],
    highlight: 'Live on Play Store & App Store',
    features: ['Android · iOS · Web', 'OTP auth', 'AI exercise plans', 'Agora video calls', 'Real-time chat', 'Subscriptions'],
    points: [
      'Built most of a cross-platform (Android, iOS, Web) physio app with OTP auth, AI exercise plans and progress tracking.',
      'Delivered telehealth with slot booking, Agora video calls, real-time WebSocket chat and Razorpay subscriptions.',
      'Shipped store releases and fixed payment, chat, image caching and session persistence issues.',
    ],
  },
  {
    name: 'Ignite LSF',
    subtitle: 'Research funding & management platform',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Ant Design'],
    highlight: '25% fewer redundant API calls',
    points: [
      'Built a research grant and workflow management platform with role-based access control.',
      'Centralized state in Redux Toolkit, cutting redundant API calls by 25%.',
      'Optimized APIs to power live dashboards.',
    ],
  },
  {
    name: 'ARROW',
    subtitle: 'Cash flow analytics dashboard',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'D3.js'],
    highlight: '50% faster data drill-down',
    points: [
      'Built an interactive D3.js dashboard with bar, pie and trend charts for client payments and receivables.',
      'Implemented category and date-based filtering, improving data drill-down speed by 50%.',
    ],
  },
]

export type Repo = {
  name: string
  description: string
  language: string
  url: string
  live?: string
}

// Selected public repositories from github.com/ShantanuPr
export const repos: Repo[] = [
  {
    name: 'my-digital-showcase',
    description: 'Personal showcase site built with React, Vite, TypeScript, Tailwind CSS and shadcn/ui, deployed on Vercel.',
    language: 'TypeScript',
    url: 'https://github.com/ShantanuPr/my-digital-showcase',
    live: 'https://my-digital-showcase-two.vercel.app',
  },
  {
    name: 'video-interaction-application',
    description: 'Cross-platform Flutter video calling app built on the Agora SDK.',
    language: 'Dart',
    url: 'https://github.com/ShantanuPr/video-interaction-application',
  },
  {
    name: 'chatApp',
    description: 'Real-time chat app built with React, Tailwind CSS and Firebase (Firestore, Cloud Functions).',
    language: 'JavaScript',
    url: 'https://github.com/ShantanuPr/chatApp',
  },
  {
    name: 'GST-Calculator',
    description: 'GST calculator mobile app built with React Native and Expo.',
    language: 'JavaScript',
    url: 'https://github.com/ShantanuPr/GST-Calculator',
  },
  {
    name: 'storyyell_website',
    description: 'Company website for StoryYell, built with React.',
    language: 'JavaScript',
    url: 'https://github.com/ShantanuPr/storyyell_website',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js (SSR)', 'Redux Toolkit', 'React Hooks', 'Context API', 'Component Architecture', 'Performance Optimization', 'Responsive Design'],
  },
  { group: 'UI Libraries', items: ['Tailwind CSS', 'Shadcn UI', 'Ant Design', 'Bootstrap', 'D3.js'] },
  { group: 'APIs & Backend', items: ['REST APIs', 'WebSockets', 'Node.js', 'Razorpay', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { group: 'Cloud & Tools', items: ['AWS (S3, CloudFront, Cognito)', 'Git', 'GitHub', 'GitLab', 'Vite', 'Webpack', 'Jira'] },
  { group: 'Mobile & AI', items: ['Flutter', 'GitHub Copilot', 'Claude', 'OpenAI APIs'] },
]

// Scrolling tech strip under the hero
export const marquee = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Redux Toolkit',
  'Tailwind CSS',
  'Node.js',
  'Flutter',
  'WebSockets',
  'D3.js',
  'Firebase',
  'PostgreSQL',
  'AWS',
  'Ant Design',
  'Shadcn UI',
]

export const education = {
  degree: 'Bachelor of Engineering (B.E.), Mechanical Engineering',
  school: 'KDK College of Engineering',
  period: '2018 – 2022',
  location: 'Nagpur, India',
  score: 'CGPA 9.04',
}

export const certifications = ['Full Stack Development Certification', 'React.js Certification']
