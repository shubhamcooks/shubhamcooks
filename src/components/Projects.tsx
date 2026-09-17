import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { projects, type Project } from '@/data/projects';

const STATUS_STYLES: Record<string, string> = {
  'in-development': 'bg-accent/10 text-accent-glow border-accent/30',
  built: 'bg-teal-glow/10 text-teal-glow border-teal-glow/30',
  concept: 'bg-violet-glow/10 text-violet-glow border-violet-glow/30',
  internship: 'bg-cyan-glow/10 text-cyan-glow border-cyan-glow/30',
};

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="projects"
      label="SELECTED BUILDS"
      title="Selected Builds"
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isExpanded={expandedId === project.id}
            onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({
  project, index, isExpanded, onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-500"
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-0">
        {/* Visual preview */}
        <div className="relative h-32 md:h-full min-h-[140px] bg-ink-900 overflow-hidden">
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <span className="font-mono text-[10px] tracking-wide-2 uppercase text-ink-400">
                PROJECT {project.number}
              </span>
              <h3 className="font-display font-bold text-warm text-2xl md:text-3xl mt-1 tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-[10px] tracking-wide-2 uppercase text-accent mt-1">
                {project.category}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[9px] tracking-wide-2 uppercase ${STATUS_STYLES[project.status]}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.statusLabel}
            </span>
          </div>

          <p className="text-ink-200 text-sm leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wide-2 uppercase text-warm hover:text-accent transition-colors"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Hide Details' : 'View Details'}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide-2 uppercase text-ink-200 hover:text-warm transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide-2 uppercase text-ink-200 hover:text-warm transition-colors"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-ink-700/50 space-y-4">
                  {project.details.map((detail) => (
                    <div key={detail.label}>
                      <h5 className="font-mono text-[10px] tracking-wide-2 uppercase text-accent mb-1.5">
                        {detail.label}
                      </h5>
                      <p className="text-ink-100 text-sm leading-relaxed">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({ type }: { type: Project['visualType'] }) {
  if (type === 'venture') {
    return (
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill="#0a0a0d" />
        <g fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3">
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          <rect x="60" y="60" width="80" height="80" />
          <rect x="70" y="70" width="60" height="60" />
        </g>
        <text x="100" y="105" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#3b82f6" opacity="0.5">V</text>
      </svg>
    );
  }
  if (type === 'urban') {
    return (
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill="#0a0a0d" />
        <g fill="none" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3">
          <path d="M0 60 Q50 40 100 60 T200 60" />
          <path d="M0 80 Q50 60 100 80 T200 80" />
          <path d="M0 100 Q50 80 100 100 T200 100" />
          <path d="M0 120 Q50 100 100 120 T200 120" />
          <path d="M0 140 Q50 120 100 140 T200 140" />
          <circle cx="50" cy="80" r="3" fill="#2dd4bf" fillOpacity="0.4" />
          <circle cx="120" cy="110" r="3" fill="#2dd4bf" fillOpacity="0.4" />
          <circle cx="160" cy="70" r="3" fill="#2dd4bf" fillOpacity="0.4" />
          <line x1="50" y1="80" x2="120" y2="110" strokeDasharray="2 2" />
          <line x1="120" y1="110" x2="160" y2="70" strokeDasharray="2 2" />
        </g>
      </svg>
    );
  }
  if (type === 'solar') {
    return (
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill="#0a0a0d" />
        <g fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3">
          <circle cx="100" cy="100" r="60" />
          <line x1="100" y1="40" x2="100" y2="160" />
          <line x1="40" y1="100" x2="160" y2="100" />
          <line x1="57" y1="57" x2="143" y2="143" />
          <line x1="143" y1="57" x2="57" y2="143" />
          <circle cx="100" cy="100" r="8" fill="#22d3ee" fillOpacity="0.2" />
        </g>
        <g fill="#22d3ee" opacity="0.4">
          <rect x="80" y="70" width="40" height="20" rx="2" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
          <line x1="85" y1="70" x2="85" y2="90" />
          <line x1="90" y1="70" x2="90" y2="90" />
          <line x1="95" y1="70" x2="95" y2="90" />
          <line x1="100" y1="70" x2="100" y2="90" />
          <line x1="105" y1="70" x2="105" y2="90" />
          <line x1="110" y1="70" x2="110" y2="90" />
          <line x1="115" y1="70" x2="115" y2="90" />
        </g>
      </svg>
    );
  }
  // security
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill="#0a0a0d" />
      <g fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.3">
        <path d="M100 50 L140 70 L140 110 Q140 140 100 155 Q60 140 60 110 L60 70 Z" />
        <path d="M100 65 L130 80 L130 110 Q130 130 100 140 Q70 130 70 110 L70 80 Z" />
        <path d="M85 100 L95 110 L115 85" strokeWidth="1" />
      </g>
      <g fill="#a78bfa" opacity="0.2">
        <circle cx="60" cy="70" r="2" />
        <circle cx="140" cy="70" r="2" />
        <circle cx="60" cy="110" r="2" />
        <circle cx="140" cy="110" r="2" />
      </g>
    </svg>
  );
}
