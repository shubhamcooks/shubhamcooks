import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, label, title, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-28 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent/40" />
            <span className="section-label">{label}</span>
          </div>
          {title && (
            <h2 className="section-title text-balance">{title}</h2>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
