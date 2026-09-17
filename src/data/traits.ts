export interface Trait {
  id: string;
  label: string;
  icon: string;
  description: string;
  visual: string;
}

export const traits: Trait[] = [
  {
    id: 'curious',
    label: 'Curious',
    icon: 'Compass',
    description: 'Driven by questions, not answers. Exploring how things work before deciding how to use them.',
    visual: 'exploration paths',
  },
  {
    id: 'independent',
    label: 'Independent',
    icon: 'Flag',
    description: 'Self-directed building. VISKOS is an independent venture, not a team assignment.',
    visual: 'self-directed venture',
  },
  {
    id: 'observant',
    label: 'Observant',
    icon: 'Eye',
    description: 'Noticing patterns before naming them. Security is about seeing what others walk past.',
    visual: 'owl-eye motif',
  },
  {
    id: 'experimental',
    label: 'Experimental',
    icon: 'FlaskConical',
    description: 'Testing ideas in the lab before committing them to products. Failure is data.',
    visual: 'lab modules',
  },
  {
    id: 'practical',
    label: 'Practical',
    icon: 'Wrench',
    description: 'Solutions grounded in real problems. Meghalaya infrastructure, solar services, civic tech.',
    visual: 'project architecture',
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: 'Palette',
    description: 'Blender, animation, visual design. Technology is not just functional — it is expressive.',
    visual: 'creative coding',
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: 'Cpu',
    description: 'Full-stack development, security tooling, Linux. Building with understanding, not just frameworks.',
    visual: 'system architecture',
  },
  {
    id: 'learning',
    label: 'Continuously Learning',
    icon: 'BookOpen',
    description: 'Currently exploring web security, 3D, and commerce systems. The learning does not stop.',
    visual: 'learning paths',
  },
  {
    id: 'ambitious',
    label: 'Quietly Ambitious',
    icon: 'Mountain',
    description: 'Not loud about goals. Building toward them instead. VISKOS is the direction, not the destination.',
    visual: 'contour lines',
  },
];
