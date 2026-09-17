export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  status: 'in-development' | 'built' | 'concept' | 'internship';
  statusLabel: string;
  technologies: string[];
  details: {
    label: string;
    content: string;
  }[];
  links?: {
    github?: string;
    live?: string;
  };
  visualType: 'venture' | 'urban' | 'solar' | 'security';
}

export const projects: Project[] = [
  {
    id: 'viskos',
    number: '01',
    title: 'VISKOS',
    category: 'VENTURE / FOUNDED + DEVELOPED',
    description: 'An independent commerce venture currently in development. As Founder & Developer, I am building the website, digital shopping experience, product presentation, and online brand presence.',
    status: 'in-development',
    statusLabel: 'Currently in Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'E-commerce', 'Responsive Design'],
    details: [
      { label: 'MY ROLE', content: 'Founder & Developer — leading website development, digital experience design, product presentation, and brand identity.' },
      { label: 'WHAT I\'M BUILDING', content: 'E-commerce website, product browsing experience, shopping interface, brand identity, and a responsive digital storefront.' },
      { label: 'CURRENT STATUS', content: 'In active development. Public launch coming later. No live website, shop, or customer data available yet.' },
    ],
    visualType: 'venture',
  },
  {
    id: 'megh-scan',
    number: '02',
    title: 'MEGH-SCAN',
    category: 'PROJECT / BUILT',
    description: 'An AI-assisted urban problem identification and smart-city exploration concept focused on recurring infrastructure, mobility, and civic issues in Meghalaya.',
    status: 'built',
    statusLabel: 'Concept Built',
    technologies: ['React', 'TypeScript', 'AI Concepts', 'Urban Planning', 'Data Visualization'],
    details: [
      { label: 'PROBLEM', content: 'Recurring infrastructure, mobility, and civic issues in Meghalaya that lack structured identification and tracking.' },
      { label: 'CONCEPT', content: 'A system to identify, categorize, and visualize urban problems using AI-assisted analysis for smart-city exploration.' },
      { label: 'KEY FEATURES', content: 'Problem identification interface, category-based mapping, urban issue visualization, and civic data exploration.' },
      { label: 'MY CONTRIBUTION', content: 'Concept design, interface development, and problem-identification framework. Not integrated with official government systems.' },
      { label: 'PROJECT STATUS', content: 'Concept built and explored. Not deployed as a live public service. No official government integration.' },
    ],
    visualType: 'urban',
  },
  {
    id: 'megha-solar',
    number: '03',
    title: 'MEGHA SOLAR SOLUTIONS',
    category: 'PROJECT / FULL-STACK WEBSITE',
    description: 'A customer-oriented website concept for helping users understand, coordinate, and access solar installation and related services, including solar water heater installation, maintenance, repair, and other electrical / solar services.',
    status: 'built',
    statusLabel: 'Website Concept Built',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Service Pages'],
    details: [
      { label: 'WEBSITE PURPOSE', content: 'Help users understand and access solar installation, maintenance, repair, and related electrical / solar services.' },
      { label: 'MAIN SECTIONS', content: 'Service listings, solar water heater installation, maintenance guides, repair coordination, and contact pathways.' },
      { label: 'USER EXPERIENCE', content: 'Clean service browsing, clear information hierarchy, and accessible contact points for solar service coordination.' },
      { label: 'PROJECT STATUS', content: 'Website concept built. Not affiliated with any official government body. No subsidy processing or government approval claimed.' },
    ],
    visualType: 'solar',
  },
  {
    id: 'nic-security',
    number: '04',
    title: 'NIC / WEB SECURITY WORK',
    category: 'INTERNSHIP / PRACTICAL EXPOSURE',
    description: 'Practical internship-related technical exposure involving website review, security-related tooling, documentation, and project work.',
    status: 'internship',
    statusLabel: 'Practical Exposure',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Postman', 'Semgrep', 'Trivy', 'npm audit', 'PostgreSQL', 'Linux CLI'],
    details: [
      { label: 'WORK TYPE', content: 'Internship-related practical exposure — website review, security tooling exploration, documentation, and technical project work.' },
      { label: 'TOOLS EXPLORED', content: 'Burp Suite for web request inspection, OWASP ZAP for vulnerability scanning, Postman for API testing, Semgrep for static analysis, Trivy for container scanning, npm audit for dependency checks.' },
      { label: 'NATURE OF WORK', content: 'Practical learning and documentation. Not professional penetration-testing employment.' },
    ],
    visualType: 'security',
  },
];
