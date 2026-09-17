import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function BackgroundGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Fine grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-20" />

      {/* Topographic lines */}
      <div className="absolute inset-0 topo-lines opacity-30" />

      {/* Gradient orbs */}
      {!reduced && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(167,139,250,0.02) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(7,7,8,0.8) 100%)',
        }}
      />
    </div>
  );
}
