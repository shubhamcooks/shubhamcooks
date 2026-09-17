import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, ShieldCheck, MapPin, Palette, Rocket,
  RotateCcw, type LucideIcon,
} from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { identityNodes, type IdentityNode } from '@/data/identity';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ICONS: Record<string, LucideIcon> = {
  Code2, ShieldCheck, MapPin, Palette, Rocket,
};

// Position the 5 nodes around the center in a premium non-circular layout
const POSITIONS: Record<string, { x: number; y: number }> = {
  build: { x: 50, y: 12 },
  secure: { x: 88, y: 38 },
  solve: { x: 72, y: 82 },
  create: { x: 28, y: 82 },
  venture: { x: 12, y: 38 },
};

export function IdentityMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const activeNode = identityNodes.find((n) => n.id === activeId);

  return (
    <SectionWrapper
      id="identity-map"
      label="INTERACTIVE SYSTEM"
      title="The System Behind the Builder"
    >
      <p className="text-ink-200 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
        Five interconnected systems define how I work. Hover to explore connections,
        click to expand details.
      </p>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        {/* Map */}
        <div className="relative aspect-square max-w-2xl mx-auto lg:max-w-none w-full">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Connection lines */}
            {identityNodes.map((node) => {
              const pos = POSITIONS[node.id];
              return node.connections.map((targetId) => {
                const target = POSITIONS[targetId];
                if (!target) return null;
                const isActive = activeId === node.id || activeId === targetId;
                const isDimmed = activeId && !isActive;
                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={isActive ? node.color : '#2a2b34'}
                    strokeWidth={isActive ? 0.6 : 0.3}
                    strokeDasharray={isActive ? '0' : '1 1'}
                    opacity={isDimmed ? 0.15 : isActive ? 0.7 : 0.4}
                    className="transition-all duration-500"
                  />
                );
              });
            })}

            {/* Lines from center to each node */}
            {identityNodes.map((node) => {
              const pos = POSITIONS[node.id];
              const isActive = activeId === node.id;
              const isDimmed = activeId && !isActive;
              return (
                <line
                  key={`center-${node.id}`}
                  x1={50}
                  y1={50}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isActive ? node.color : '#1c1d24'}
                  strokeWidth={isActive ? 0.5 : 0.25}
                  strokeDasharray="0.5 0.5"
                  opacity={isDimmed ? 0.1 : isActive ? 0.6 : 0.3}
                  className="transition-all duration-500"
                />
              );
            })}

            {/* Center node */}
            <circle cx={50} cy={50} r={6} fill="#0e0e12" stroke="#3b82f6" strokeWidth={0.4} />
            <circle cx={50} cy={50} r={3} fill="#3b82f6" opacity={0.6} />
            {!reduced && (
              <motion.circle
                cx={50}
                cy={50}
                r={6}
                fill="none"
                stroke="#3b82f6"
                strokeWidth={0.3}
                animate={{ r: [6, 12, 6], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <text x={50} y={51.5} textAnchor="middle" fontFamily="monospace" fontSize="2.5" fontWeight="700" fill="#f0ede8">S</text>
          </svg>

          {/* Node buttons */}
          {identityNodes.map((node) => {
            const pos = POSITIONS[node.id];
            const Icon = ICONS[node.icon];
            const isActive = activeId === node.id;
            const isDimmed = activeId && !isActive;
            return (
              <button
                key={node.id}
                onClick={() => setActiveId(isActive ? null : node.id)}
                onMouseEnter={() => !reduced && setActiveId(node.id)}
                onMouseLeave={() => !reduced && setActiveId(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  opacity: isDimmed ? 0.4 : 1,
                }}
                aria-label={node.label}
              >
                <div
                  className={`relative flex flex-col items-center gap-1.5 transition-all duration-500 ${
                    isActive ? 'scale-110' : ''
                  }`}
                >
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500"
                    style={{
                      borderColor: isActive ? node.color : '#2a2b34',
                      backgroundColor: isActive ? `${node.color}15` : '#0e0e12',
                      boxShadow: isActive ? `0 0 20px ${node.color}30` : 'none',
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: isActive ? node.color : '#6b6c78' }}
                      className="transition-colors duration-500"
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] md:text-xs tracking-wide-2 uppercase transition-colors duration-500"
                    style={{ color: isActive ? node.color : '#9a9ba6' }}
                  >
                    {node.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info panel */}
        <div className="lg:sticky lg:top-24 h-fit">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${activeNode.color}15`, border: `1px solid ${activeNode.color}40` }}
                  >
                    {(() => {
                      const Icon = ICONS[activeNode.icon];
                      return <Icon size={18} style={{ color: activeNode.color }} />;
                    })()}
                  </div>
                  <h3 className="font-display font-bold text-warm text-xl tracking-wide-2" style={{ color: activeNode.color }}>
                    {activeNode.label}
                  </h3>
                </div>
                <p className="text-ink-100 text-sm leading-relaxed mb-4">{activeNode.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.skills.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-lg p-6 text-center"
              >
                <p className="text-ink-300 text-sm leading-relaxed mb-4">
                  Select a node to explore its system, skills, and connections.
                </p>
                <button
                  onClick={() => setActiveId(null)}
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wide-2 uppercase text-ink-300 hover:text-warm transition-colors"
                >
                  <RotateCcw size={12} />
                  Reset
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
