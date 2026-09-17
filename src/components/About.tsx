import { motion } from 'framer-motion';
import {
  Eye, Compass, FlaskConical, Wrench, Palette, Cpu, BookOpen, Mountain, Flag,
  type LucideIcon,
} from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { traits } from '@/data/traits';

const ICONS: Record<string, LucideIcon> = {
  Eye, Compass, FlaskConical, Wrench, Palette, Cpu, BookOpen, Mountain, Flag,
};

const PROCESS_STEPS = [
  { label: 'OBSERVE', description: 'Notice problems, patterns, and opportunities before naming them.' },
  { label: 'LEARN', description: 'Study the fundamentals. Understand the system before building on it.' },
  { label: 'BUILD', description: 'Turn understanding into working code, interfaces, and products.' },
  { label: 'TEST', description: 'Break it, secure it, document what breaks and why.' },
  { label: 'IMPROVE', description: 'Iterate based on evidence. The next version is always better.' },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      label="ABOUT"
      title="The Person Behind the Code"
    >
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ink-100 text-lg leading-relaxed">
            I'm a builder from Meghalaya, India, exploring how software can become
            useful beyond the screen. My interests span full-stack development,
            web application security, creative technology, and practical
            problem-solving. I learn by building, testing, documenting, and
            iterating.
          </p>
          <p className="text-ink-200 text-lg leading-relaxed mt-4">
            Alongside my technical exploration, I am developing{' '}
            <span className="text-accent font-medium">VISKOS</span>, an
            independent commerce venture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-lg p-6 md:p-8"
        >
          <span className="section-label mb-6 block">How I Work</span>
          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center bg-accent/5">
                    <span className="font-mono text-xs text-accent font-bold">{i + 1}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px h-12 bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-6">
                  <h4 className="font-mono text-sm tracking-wide-2 uppercase text-warm font-bold mb-1">
                    {step.label}
                  </h4>
                  <p className="text-ink-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Traits grid */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-accent/40" />
          <span className="section-label">Working Personality</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {traits.map((trait, i) => {
            const Icon = ICONS[trait.icon];
            return (
              <motion.div
                key={trait.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative glass-panel rounded-lg p-5 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-ink-800/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon size={16} className="text-ink-200 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="font-display font-semibold text-warm text-sm">{trait.label}</h4>
                </div>
                <p className="text-ink-300 text-xs leading-relaxed">{trait.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
