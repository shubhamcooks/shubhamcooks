import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, ChevronDown, Lightbulb, TestTube, Loader, CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { labExperiments, type LabExperiment } from '@/data/lab';

const STATUS_CONFIG: Record<LabExperiment['status'], { icon: typeof Lightbulb; color: string; label: string }> = {
  idea: { icon: Lightbulb, color: '#a78bfa', label: 'Idea' },
  experiment: { icon: TestTube, color: '#22d3ee', label: 'Experiment' },
  'in-progress': { icon: Loader, color: '#3b82f6', label: 'In Progress' },
  completed: { icon: CheckCircle, color: '#2dd4bf', label: 'Completed' },
};

const CATEGORIES = ['All', 'Web Interfaces', 'Security Labs', 'Creative Code', 'Product Ideas', '3D / Animation', 'New Technologies'];

export function Lab() {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter === 'All'
    ? labExperiments
    : labExperiments.filter((e) => e.category === filter);

  return (
    <SectionWrapper
      id="lab"
      label="EXPERIMENTS IN PROGRESS"
      title="The Lab"
    >
      <p className="text-ink-200 text-base max-w-2xl mb-8 leading-relaxed">
        A workspace for ideas, experiments, and technical exploration. Not
        everything here becomes a product — that is the point.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wide-2 uppercase transition-all duration-300 ${
              filter === cat
                ? 'bg-accent/15 text-accent-glow border border-accent/40'
                : 'bg-ink-800/30 text-ink-300 border border-ink-700 hover:border-ink-600 hover:text-ink-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Experiment cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((exp, i) => {
            const statusConfig = STATUS_CONFIG[exp.status];
            const StatusIcon = statusConfig.icon;
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-panel rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="w-full p-5 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${statusConfig.color}15`, border: `1px solid ${statusConfig.color}30` }}
                      >
                        <StatusIcon size={16} style={{ color: statusConfig.color }} />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-warm text-sm">{exp.title}</h4>
                        <span className="font-mono text-[9px] tracking-wide-2 uppercase text-ink-400">{exp.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-[9px] tracking-wide-2 uppercase px-2 py-0.5 rounded-full border"
                        style={{ color: statusConfig.color, borderColor: `${statusConfig.color}40` }}
                      >
                        {statusConfig.label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-ink-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  {!isExpanded && (
                    <p className="text-ink-300 text-xs leading-relaxed line-clamp-2">{exp.description}</p>
                  )}
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-ink-100 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lab footer note */}
      <div className="mt-8 flex items-center gap-2 text-ink-400">
        <FlaskConical size={14} className="text-accent" />
        <span className="font-mono text-[10px] tracking-wide-2 uppercase">
          {filtered.length} experiment{filtered.length !== 1 ? 's' : ''} in the lab
        </span>
      </div>
    </SectionWrapper>
  );
}
