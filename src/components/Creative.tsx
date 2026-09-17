import { motion } from 'framer-motion';
import { Box, Film, Gamepad2, Palette, Code, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const CREATIVE_AREAS = [
  { icon: Box, label: 'Blender / 3D Exploration', desc: 'Learning modeling, lighting, and rendering for product visualization.' },
  { icon: Film, label: 'Animation', desc: 'Studying motion principles through 3D and interface animation.' },
  { icon: Palette, label: 'Interactive Visual Design', desc: 'Building interfaces that feel expressive, not just functional.' },
  { icon: Gamepad2, label: 'Gaming', desc: 'Exploring game design as interactive storytelling and systems thinking.' },
  { icon: Code, label: 'Creative Coding', desc: 'Generative patterns, procedural geometry, and canvas experiments.' },
  { icon: Sparkles, label: 'Digital Experiences', desc: 'Blending technology and design into cohesive digital products.' },
];

export function Creative() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper
      id="creative"
      label="CREATIVE TECHNOLOGY"
      title="Beyond the Stack"
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
        {/* Abstract 3D-inspired visual */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <linearGradient id="creativeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g fill="none" strokeWidth="1">
              {/* Abstract 3D wireframe shapes */}
              <motion.g
                animate={reduced ? {} : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '150px 150px' }}
              >
                <polygon points="150,50 230,110 210,220 90,220 70,110" stroke="url(#creativeGrad)" />
                <polygon points="150,50 230,110 150,140 70,110" stroke="#a78bfa" strokeOpacity="0.3" />
                <polygon points="230,110 210,220 150,140" stroke="#a78bfa" strokeOpacity="0.2" />
                <polygon points="90,220 70,110 150,140" stroke="#a78bfa" strokeOpacity="0.2" />
                <polygon points="210,220 90,220 150,140" stroke="#a78bfa" strokeOpacity="0.15" />
              </motion.g>
              <motion.g
                animate={reduced ? {} : { rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '150px 150px' }}
              >
                <circle cx="150" cy="150" r="100" stroke="#22d3ee" strokeOpacity="0.15" strokeDasharray="4 4" />
                <circle cx="150" cy="150" r="70" stroke="#3b82f6" strokeOpacity="0.1" strokeDasharray="2 2" />
              </motion.g>
              {/* Floating dots */}
              <g fill="#a78bfa" opacity="0.5">
                <circle cx="150" cy="50" r="2" />
                <circle cx="230" cy="110" r="2" />
                <circle cx="210" cy="220" r="2" />
                <circle cx="90" cy="220" r="2" />
                <circle cx="70" cy="110" r="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Creative areas grid */}
        <div className="grid grid-cols-2 gap-4 content-center">
          {CREATIVE_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass-panel rounded-lg p-5 hover:border-violet-glow/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-ink-800/50 flex items-center justify-center mb-3 group-hover:bg-violet-glow/10 transition-colors duration-300">
                  <Icon size={18} className="text-ink-200 group-hover:text-violet-glow transition-colors duration-300" />
                </div>
                <h4 className="font-display font-semibold text-warm text-sm mb-1.5">{area.label}</h4>
                <p className="text-ink-300 text-xs leading-relaxed">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
