export interface IdentityNode {
  id: string;
  label: string;
  icon: string;
  color: string;
  description: string;
  skills: string[];
  connections: string[];
}

export const identityNodes: IdentityNode[] = [
  {
    id: 'build',
    label: 'BUILD',
    icon: 'Code2',
    color: '#3b82f6',
    description: 'Full-stack development, websites, interfaces, and backend concepts. Building practical digital experiences from concept to deployment.',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Vite', 'REST APIs', 'Responsive Design'],
    connections: ['secure', 'solve', 'create', 'venture'],
  },
  {
    id: 'secure',
    label: 'SECURE',
    icon: 'ShieldCheck',
    color: '#22d3ee',
    description: 'Web application security, Linux fundamentals, vulnerability assessment learning, and security tooling. Learning to see what others miss.',
    skills: ['Web Security', 'OWASP', 'Burp Suite', 'OWASP ZAP', 'Linux', 'Postman', 'Semgrep', 'Trivy'],
    connections: ['build', 'solve'],
  },
  {
    id: 'solve',
    label: 'SOLVE',
    icon: 'MapPin',
    color: '#2dd4bf',
    description: 'Meghalaya, infrastructure, urban problems, smart-city concepts, and practical technology. Grounding solutions in real-world contexts.',
    skills: ['Problem Identification', 'Smart-City Concepts', 'Urban Infrastructure', 'Civic Tech', 'Solar Energy'],
    connections: ['build', 'secure', 'create', 'venture'],
  },
  {
    id: 'create',
    label: 'CREATE',
    icon: 'Palette',
    color: '#a78bfa',
    description: 'Blender, animation, gaming, visual design, and creative coding. Exploring beyond the stack into digital experiences and 3D.',
    skills: ['Blender', '3D Exploration', 'Animation', 'Visual Design', 'Creative Coding', 'Motion Graphics'],
    connections: ['build', 'solve'],
  },
  {
    id: 'venture',
    label: 'VENTURE',
    icon: 'Rocket',
    color: '#60a5fa',
    description: 'VISKOS, commerce, product building, brand development, and entrepreneurship. Turning ideas into technology-driven products.',
    skills: ['VISKOS', 'E-commerce', 'Product Development', 'Brand Building', 'Digital Commerce'],
    connections: ['build', 'solve'],
  },
];
