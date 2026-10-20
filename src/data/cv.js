/**
 * CV data. Keep this file limited to what is on the CV.
 * Anything that is not on the CV (extra stack, learning, notes) belongs in extras.js.
 */

export const profile = {
  name: 'Ramadhan Agies Ananda Wahyudi',
  shortName: 'Ramadhan Agies',
  role: 'Backend-focused software engineer',
  location: 'South Tangerang, Indonesia',
  summary:
    'I develop production web applications, RESTful APIs, asynchronous processing workflows, and third-party integrations, mainly with Laravel, MySQL, Redis, and Vue.js. 2+ years of hands-on experience.',
  email: 'agieswahyudi@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/18YrNKCFJkDyv39MhruPUnWN3Gn6vuOwT/view',
  links: {
    github: 'https://github.com/agieswahyudi07/',
    linkedin: 'https://www.linkedin.com/in/agieswahyudi/',
    instagram: 'https://www.instagram.com/agieswahyudi_/',
  },
  languages: [
    { name: 'Indonesian', level: 'native' },
    { name: 'English', level: 'working proficiency' },
  ],
}

export const experience = [
  {
    role: 'Fullstack Developer',
    company: 'Zova Teknologi Indonesia',
    location: 'South Jakarta, Indonesia',
    start: 'Feb 2024',
    end: 'Present',
    current: true,
    projects: [
      {
        name: 'exactmatchmarketing.com',
        url: 'https://exactmatchmarketing.com',
        description: 'Multi-tenant lead generation platform with an integrated advertising module',
        points: [
          'Developed backend workflows for a multi-tenant platform with approximately 3 million lead records in its production database, supporting lead acquisition, processing, email validation, and distribution to client integrations.',
          'Implemented asynchronous lead acquisition and distribution workflows using Laravel Queues, integrating BigDBM APIs for request submission, status polling, lead retrieval, and downstream processing.',
          'Built TrueList and ZeroBounce integrations to validate email quality before lead delivery, including retry handling and fallback processing.',
          'Independently developed the Simpli.fi advertising module end to end, enabling users to manage campaign settings, budgets, audience selection, and geographic targeting directly within EMM.',
          'Implemented asynchronous audience processing and advertising media upload workflows using Laravel Jobs, with status tracking and retry handling for long-running Simpli.fi API operations.',
          'Developed a reusable webhook integration using HTTP POST to deliver lead data to client-configured endpoints, expanding delivery capabilities beyond Zapier.',
          'Applied MySQL query optimization and Redis caching to support high-throughput backend performance and reduce query latency.',
          'Designed database schemas and developed Laravel API endpoints, backend business logic, and Vue.js frontend functionality for new product features.',
        ],
      },
      {
        name: 'exactmatch.io',
        url: 'https://exactmatch.io',
        description: 'Lead generation and advertising integration platform',
        points: [
          'Integrated LinkedIn Ads for campaign management, automated audience lead syncing, and advertising workflows.',
          'Refined frontend input validation and form processing to ensure reliable data ingestion.',
          'Maintained platform stability, investigating and resolving production UI and application logic issues.',
        ],
      },
    ],
  },
  {
    role: 'General Affair Staff (with web development contribution)',
    company: 'Yayasan Al-Hasra',
    location: 'Depok, Indonesia',
    start: 'Jul 2023',
    end: 'Feb 2024',
    current: false,
    projects: [
      {
        name: 'Inventory management system',
        url: null,
        description: 'Asset tracking and reporting system for three schools',
        points: [
          'Developed a web-based asset management system to support inventory tracking and operational reporting across three schools.',
          'Digitized asset management processes for more than 1,000 assets, eliminating manual reporting and reducing administrative overhead by 60%.',
          'Managed general affairs responsibilities alongside web development contributions.',
        ],
      },
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'Software House',
    location: 'South Tangerang, Indonesia',
    start: 'Feb 2023',
    end: 'Jul 2023',
    current: false,
    projects: [
      {
        name: 'Enterprise resource planning (ERP)',
        url: null,
        description: 'ERP modules to support client business workflows',
        points: [
          'Developed ERP modules by implementing backend functionality and frontend features to support client business workflows.',
          'Investigated and fixed application bugs and modified existing application logic to address functional requirements.',
          'Worked with database queries and application logic to support feature development and data processing.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Exact Match Marketing',
    org: 'Zova Teknologi Indonesia',
    summary: 'Multi-tenant lead generation platform with an integrated advertising module.',
    points: [
      'Asynchronous lead pipelines on Laravel Queues, with BigDBM, TrueList, and ZeroBounce integrations.',
      'Simpli.fi campaign management built end to end: budgets, audiences, geo targeting, and media uploads.',
      'HTTP POST webhooks that deliver leads to client-configured endpoints.',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Laravel Queues'],
    image: '/images/exactmatch-marketing.webp',
    imageAlt: 'Dashboard and campaign interface of Exact Match Marketing.',
    link: { label: 'exactmatchmarketing.com', url: 'https://exactmatchmarketing.com' },
  },
  {
    title: 'exactmatch.io',
    org: 'Zova Teknologi Indonesia',
    summary: 'Web application and advertising platform supporting multi-channel lead acquisition.',
    points: [
      'Integrated LinkedIn Ads for campaign management and automated audience lead syncing.',
      'Refined frontend input validation and form processing to ensure reliable data ingestion.',
      'Maintained and resolved application issues to support high-traffic daily operations.',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'LinkedIn Ads API'],
    image: '/images/exactmatch-io.webp',
    imageAlt: 'Platform dashboard and advertising management interface of exactmatch.io.',
    link: { label: 'exactmatch.io', url: 'https://exactmatch.io' },
  },
  {
    title: 'Inventory management system',
    org: 'Yayasan Al-Hasra',
    summary: 'Asset tracking and reporting for three schools.',
    points: [
      'Tracks more than 1,000 assets and replaced manual reporting.',
      'Cut administrative overhead by 60%.',
      'Role-based access and operational reports for foundation administration.',
    ],
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    image: '/images/al-hasra.png',
    imageAlt: 'Dashboard of the Al-Hasra inventory system with totals for rooms, items, and facilities.',
    link: null,
  },
  {
    title: 'SPNF SKB Sukabumi website',
    org: 'SPNF SKB Sukabumi',
    summary: 'Public website for a non-formal education unit, with an admin panel for staff.',
    points: [
      'Responsive public site built with Laravel Livewire.',
      'Filament admin panel so staff can publish announcements and news without a developer.',
      'Authentication and CRUD for users, announcements, and contact submissions.',
    ],
    stack: ['Laravel', 'Livewire', 'Filament'],
    image: '/images/spnf-skb-sukabumi.png',
    imageAlt: 'Home page of the SPNF SKB Kabupaten Sukabumi website.',
    link: { label: 'spnfskb-sukabumi.sch.id', url: 'https://spnfskb-sukabumi.sch.id' },
  },
  {
    title: 'Landingo',
    org: 'Own product',
    summary: 'Landing page for my website-building service.',
    points: [
      'Single-page marketing site with service tiers and clear calls to action.',
      'Responsive layout built with Vue.js and Tailwind CSS.',
    ],
    stack: ['Vue.js', 'Tailwind CSS'],
    image: '/images/landingo.png',
    imageAlt: 'Landingo home page offering professional landing pages for small businesses.',
    link: { label: 'landingo.id', url: 'https://landingo.id' },
  },
]

export const skills = [
  { label: 'Languages', items: ['PHP', 'JavaScript', 'SQL'] },
  {
    label: 'Backend',
    items: ['Laravel', 'RESTful APIs', 'Laravel Queues', 'Laravel Jobs', 'Webhooks', 'Asynchronous processing'],
  },
  {
    label: 'Databases and caching',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Schema design', 'Query optimization', 'Caching'],
  },
  { label: 'Frontend', items: ['Vue.js', 'Tailwind CSS'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Docker'] },
  { label: 'AI-assisted development', items: ['Cursor', 'Google Antigravity', 'Claude Code'] },
]

export const education = [
  {
    school: 'Universitas Terbuka',
    program: 'Bachelor of Information Systems',
    period: '2025 to present',
    note: 'Expected graduation 2029',
  },
  {
    school: 'SMK Doa Bangsa',
    program: 'Vocational high school, Software Engineering',
    period: '2019 to 2022',
    note: null,
  },
]
