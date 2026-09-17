import { motion } from 'framer-motion';
import { MapPin, Zap, Building2, Route, Sun } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const PROBLEM_AREAS = [
  { icon: Building2, label: 'Urban Infrastructure', desc: 'Identifying recurring structural and civic issues.' },
  { icon: Route, label: 'Mobility', desc: 'Transportation and movement patterns in hill terrain.' },
  { icon: Zap, label: 'Smart-City Concepts', desc: 'Technology-driven approaches to civic challenges.' },
  { icon: Sun, label: 'Solar Energy', desc: 'Practical access to solar installation and services.' },
];

export function ProblemSolving() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper
      id="problem-solving"
      label="REAL-WORLD PROBLEM SOLVING"
      title="Technology, Grounded in Real Problems"
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
        {/* Topographic map visual */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <linearGradient id="topoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#topoGrad)" strokeWidth="0.8">
              {/* Meghalaya-inspired terrain contours */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${20 + i * 4} ${50 + i * 12} Q${80 + i * 4} ${30 + i * 12} ${150 + i * 2} ${50 + i * 12} T${280 - i * 4} ${60 + i * 12}`}
                  stroke="#2dd4bf"
                  strokeOpacity={0.15 - i * 0.005}
                  strokeWidth="0.6"
                  animate={reduced ? {} : { opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </g>
            {/* Data nodes */}
            <g>
              {[
                { x: 80, y: 100 }, { x: 180, y: 80 }, { x: 120, y: 180 },
                { x: 220, y: 160 }, { x: 60, y: 220 }, { x: 200, y: 240 },
              ].map((pt, i) => (
                <motion.g
                  key={i}
                  animate={reduced ? {} : { scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
                >
                  <circle cx={pt.x} cy={pt.y} r="3" fill="#2dd4bf" fillOpacity="0.5" />
                  <circle cx={pt.x} cy={pt.y} r="6" fill="none" stroke="#2dd4bf" strokeOpacity="0.3" />
                </motion.g>
              ))}
            </g>
            {/* Connection lines between nodes */}
            <g stroke="#2dd4bf" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 2" fill="none">
              <line x1="80" y1="100" x2="180" y2="80" />
              <line x1="180" y1="80" x2="220" y2="160" />
              <line x1="120" y1="180" x2="60" y2="220" />
              <line x1="220" y1="160" x2="200" y2="240" />
              <line x1="80" y1="100" x2="120" y2="180" />
            </g>
            {/* Meghalaya label */}
            <text x="150" y="280" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#2dd4bf" fillOpacity="0.4" letterSpacing="2">MEGHALAYA</text>
          </svg>
        </div>

        {/* Content */}
        <div>
          <p className="text-ink-200 text-base md:text-lg leading-relaxed mb-8">
            My work is grounded in the context of Meghalaya — its infrastructure,
            mobility challenges, and the practical role technology can play.
            MEGH-SCAN is the primary example: an AI-assisted concept for
            identifying and visualizing urban problems.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {PROBLEM_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-panel rounded-lg p-4 hover:border-teal-glow/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-teal-glow" />
                    <h4 className="font-display font-semibold text-warm text-xs">{area.label}</h4>
                  </div>
                  <p className="text-ink-300 text-xs leading-relaxed">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* MEGH-SCAN highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-lg p-5 border-l-2 border-teal-glow/40"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-teal-glow" />
              <span className="font-mono text-[10px] tracking-wide-2 uppercase text-teal-glow">Featured Example</span>
            </div>
            <h4 className="font-display font-bold text-warm text-lg mb-2">MEGH-SCAN</h4>
            <p className="text-ink-200 text-sm leading-relaxed">
              An AI-assisted urban problem identification concept. Not deployed
              as a live public service. No official government partnership or
              integration implied.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
