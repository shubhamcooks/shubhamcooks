export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  status: 'idea' | 'experiment' | 'in-progress' | 'completed';
  description: string;
}

export const labExperiments: LabExperiment[] = [
  {
    id: 'lab-01',
    title: 'Interactive Web Interfaces',
    category: 'Web Interfaces',
    status: 'experiment',
    description: 'Exploring unconventional navigation patterns, scroll-driven storytelling, and interface micro-interactions.',
  },
  {
    id: 'lab-02',
    title: 'Security Lab Environments',
    category: 'Security Labs',
    status: 'in-progress',
    description: 'Setting up local vulnerable web apps for practice with Burp Suite, OWASP ZAP, and manual testing workflows.',
  },
  {
    id: 'lab-03',
    title: 'Generative Visual Patterns',
    category: 'Creative Code',
    status: 'experiment',
    description: 'Experimenting with canvas-based generative art, topographic line systems, and procedural geometry.',
  },
  {
    id: 'lab-04',
    title: 'VISKOS Product Concepts',
    category: 'Product Ideas',
    status: 'in-progress',
    description: 'Prototyping product browsing flows, cart interactions, and checkout concepts for the VISKOS commerce platform.',
  },
  {
    id: 'lab-05',
    title: 'Blender 3D Exploration',
    category: '3D / Animation',
    status: 'idea',
    description: 'Learning Blender fundamentals — modeling, lighting, and rendering for product visualization and abstract scenes.',
  },
  {
    id: 'lab-06',
    title: 'Edge Deployment Patterns',
    category: 'New Technologies',
    status: 'idea',
    description: 'Exploring static-first deployment strategies, edge functions, and serverless patterns for lightweight products.',
  },
  {
    id: 'lab-07',
    title: 'Motion Design Studies',
    category: 'Creative Code',
    status: 'experiment',
    description: 'Studying motion principles through Framer Motion — easing curves, staggered reveals, and scroll-linked animations.',
  },
  {
    id: 'lab-08',
    title: 'Urban Data Visualization',
    category: 'Web Interfaces',
    status: 'idea',
    description: 'Concept for visualizing urban infrastructure data from Meghalaya using interactive maps and data overlays.',
  },
];
