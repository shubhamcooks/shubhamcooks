import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Terminal, Bug, FileText, ChevronRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { securityPath } from '@/data/security';

const STATUS_COLORS: Record<string, string> = {
  Exploring: 'text-cyan-glow',
  Practicing: 'text-accent-glow',
  Building: 'text-teal-glow',
  Documenting: 'text-violet-glow',
};

const STEP_ICONS = [Terminal, Lock, Bug, ShieldCheck, FileText];

export function Security() {
  return (
    <SectionWrapper
      id="security"
      label="SECURITY JOURNEY"
      title="Learning to See What Others Miss"
    >
      <p className="text-ink-200 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
        I'm exploring web application security through hands-on labs, security
        tooling, documentation, and practical experimentation.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

        <div className="space-y-6">
          {securityPath.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? ShieldCheck;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/30 bg-ink-850 flex items-center justify-center">
                  <Icon size={20} className="text-accent" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ink-900 border border-accent/40 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-accent font-bold">{step.number}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="glass-panel rounded-lg p-5 md:p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-warm text-lg md:text-xl tracking-wide-2">
                      {step.title}
                    </h3>
                    <span className={`font-mono text-[10px] tracking-wide-2 uppercase ${STATUS_COLORS[step.status] ?? 'text-ink-200'}`}>
                      {step.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-ink-600 bg-ink-800/30 font-mono text-[10px] tracking-wide-2 uppercase text-ink-100"
                      >
                        <ChevronRight size={10} className="text-accent/50" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
