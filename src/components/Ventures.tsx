import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Rocket, User, Code2 } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const TIMELINE = ['CONCEPT', 'DESIGN', 'DEVELOPMENT', 'LAUNCH'];

const ROLE_ITEMS = [
  'Founder',
  'Website developer',
  'Digital experience development',
  'Product and brand presentation',
  'Commerce platform exploration',
];

const BUILDING_ITEMS = [
  'E-commerce website',
  'Product browsing experience',
  'Shopping interface',
  'Brand identity',
  'Responsive digital experience',
];

export function Ventures() {
  const [expandedPanel, setExpandedPanel] = useState<string | null>('role');

  const toggle = (panel: string) =>
    setExpandedPanel(expandedPanel === panel ? null : panel);

  return (
    <SectionWrapper
      id="ventures"
      label="VENTURES / PRODUCTS"
      title="VISKOS"
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
        {/* Left: VISKOS identity */}
        <div className="space-y-6">
          <div className="glass-panel rounded-lg p-8 relative overflow-hidden">
            {/* Abstract visual */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none">
              <svg viewBox="0 0 160 160" className="w-full h-full">
                <g fill="none" stroke="#3b82f6" strokeWidth="1">
                  <circle cx="80" cy="80" r="60" />
                  <circle cx="80" cy="80" r="40" />
                  <circle cx="80" cy="80" r="20" />
                  <line x1="80" y1="20" x2="80" y2="140" />
                  <line x1="20" y1="80" x2="140" y2="80" />
                </g>
              </svg>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Rocket size={20} className="text-accent" />
              <span className="font-mono text-xs tracking-wide-2 uppercase text-accent">Founder & Developer</span>
            </div>
            <h3 className="font-display font-bold text-warm text-3xl md:text-4xl mb-3 tracking-tight">VISKOS</h3>
            <p className="text-ink-200 text-sm mb-6 font-mono">Commerce / E-commerce / Digital Product</p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-[10px] tracking-wide-2 uppercase text-accent-glow">
                Currently in Development
              </span>
            </div>

            <p className="text-ink-100 text-sm leading-relaxed">
              VISKOS is an independent commerce venture I am building. As its
              Founder & Developer, I am working on its website, digital shopping
              experience, product presentation, and online brand presence.
            </p>

            <div className="mt-6 pt-6 border-t border-ink-700/50">
              <p className="font-mono text-[10px] tracking-wide-2 uppercase text-ink-400">
                Public Launch — Coming Later
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-panel rounded-lg p-6">
            <span className="section-label mb-6 block">Development Timeline</span>
            <div className="flex items-center justify-between gap-2">
              {TIMELINE.map((phase, i) => {
                const isActive = phase === 'DEVELOPMENT';
                const isPast = i < TIMELINE.indexOf('DEVELOPMENT');
                return (
                  <div key={phase} className="flex-1 text-center">
                    <div className="relative flex justify-center mb-3">
                      <div
                        className={`w-3 h-3 rounded-full transition-all ${
                          isActive
                            ? 'bg-accent accent-glow scale-125'
                            : isPast
                            ? 'bg-accent/40'
                            : 'bg-ink-600'
                        }`}
                      />
                      {i < TIMELINE.length - 1 && (
                        <div
                          className={`absolute top-1/2 left-1/2 w-full h-px ${
                            isPast ? 'bg-accent/30' : 'bg-ink-600'
                          }`}
                        />
                      )}
                    </div>
                    <span
                      className={`font-mono text-[9px] md:text-[10px] tracking-wide-2 uppercase ${
                        isActive ? 'text-accent-glow font-bold' : isPast ? 'text-ink-200' : 'text-ink-400'
                      }`}
                    >
                      {phase}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Expandable panels */}
        <div className="space-y-4">
          <ExpandablePanel
            id="role"
            title="MY ROLE"
            icon={<User size={16} className="text-accent" />}
            isExpanded={expandedPanel === 'role'}
            onToggle={() => toggle('role')}
          >
            <ul className="space-y-2">
              {ROLE_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-ink-100 text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </ExpandablePanel>

          <ExpandablePanel
            id="building"
            title="WHAT I'M BUILDING"
            icon={<Code2 size={16} className="text-accent" />}
            isExpanded={expandedPanel === 'building'}
            onToggle={() => toggle('building')}
          >
            <ul className="space-y-2">
              {BUILDING_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-ink-100 text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </ExpandablePanel>

          {/* Status note */}
          <div className="glass-panel rounded-lg p-5 border-l-2 border-accent/40">
            <p className="text-ink-300 text-xs leading-relaxed">
              The VISKOS website has not been publicly published yet. No live
              website, shop, customer data, revenue, or launch dates are shown
              here. This venture is in active development.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ExpandablePanel({
  id, title, icon, isExpanded, onToggle, children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isExpanded}
        aria-controls={`panel-${id}`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-mono text-xs tracking-wide-2 uppercase text-warm font-bold">{title}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-ink-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            id={`panel-${id}`}
          >
            <div className="px-5 pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
