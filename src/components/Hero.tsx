import { motion } from 'framer-motion';
import { ArrowRight, Github, FlaskConical, MapPin } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const IDENTITY_LABELS = [
  'FOUNDER & DEVELOPER',
  'VISKOS PVT LIMITED',
  'FULL-STACK DEVELOPMENT',
  'CYBERSECURITY EXPLORATION',
];

export function Hero() {
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20"
    >
      {/* Animated contour SVG */}
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
            <defs>
              <linearGradient id="contourGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M0 ${100 + i * 70} Q360 ${60 + i * 70} 720 ${100 + i * 70} T1440 ${100 + i * 70}`}
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="0.5"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Owl emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-24 right-6 md:right-12 lg:right-20 hidden md:block"
      >
        <OwlEmblem />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 lg:gap-20 items-center">
        <div className="text-center">
        {/* Currently building indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-[10px] tracking-wide-2 uppercase text-ink-100">
            Currently Building
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold text-warm text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-balance"
        >
          BUILDING WITH CURIOSITY.
          <br />
          <span className="text-ink-300">THINKING IN SYSTEMS.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-ink-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance"
        >
          I'm Shubham, a builder from Meghalaya exploring full-stack development,
          web application security, creative technology, and practical digital products.
        </motion.p>

        {/* Identity labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {IDENTITY_LABELS.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="font-mono text-[10px] md:text-xs tracking-wide-2 uppercase px-3 py-1.5 rounded border border-ink-600 text-ink-100 bg-ink-800/30"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex items-center justify-center gap-2 text-ink-300"
        >
          <MapPin size={14} className="text-accent" />
          <span className="font-mono text-xs tracking-wide-2 uppercase">Meghalaya, India</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-glow text-white font-mono text-xs tracking-wide-2 uppercase rounded transition-all duration-300 accent-glow"
          >
            Explore My Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('lab')}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-ink-600 hover:border-accent text-warm font-mono text-xs tracking-wide-2 uppercase rounded transition-all duration-300"
          >
            <FlaskConical size={14} className="text-accent" />
            Enter The Lab
          </button>
          <a
            href="https://github.com/shubhamcooks"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 text-ink-200 hover:text-warm font-mono text-xs tracking-wide-2 uppercase rounded transition-colors duration-300"
          >
            <Github size={14} />
            View GitHub
          </a>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative w-full max-w-[300px] mx-auto lg:mx-0"
        >
          <div className="absolute -inset-3 border border-accent/20 rounded-2xl" aria-hidden="true" />
          <div className="absolute -inset-6 border border-ink-700/30 rounded-3xl" aria-hidden="true" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-ink-600/70 bg-ink-800 shadow-2xl shadow-accent/10">
            <img
              src="./Screenshot_2026-07-10-17-15-36-14_96b26121e545231a3c569311a54cda96.jpg"
              alt="Portrait of Shubham"
              className="h-full w-full object-cover object-center grayscale-[15%] contrast-[1.02] transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-accent/10" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-wide-2 uppercase text-accent-glow">Identity / 001</span>
                <p className="font-display text-sm font-semibold text-warm mt-1">SHUBHAM</p>
              </div>
              <span className="font-mono text-[9px] tracking-wide-2 uppercase text-ink-200">MEGHALAYA</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-ink-400">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function OwlEmblem() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 lg:w-32 lg:h-32 opacity-60">
      {/* Geometric owl */}
      <g fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.6">
        {/* Head outline */}
        <path d="M60 20 L40 35 L35 55 L40 75 L60 85 L80 75 L85 55 L80 35 Z" />
        {/* Eyes - large circles */}
        <circle cx="48" cy="50" r="10" />
        <circle cx="72" cy="50" r="10" />
        {/* Eye pupils */}
        <circle cx="48" cy="50" r="4" fill="#3b82f6" fillOpacity="0.3" />
        <circle cx="72" cy="50" r="4" fill="#3b82f6" fillOpacity="0.3" />
        {/* Beak */}
        <path d="M55 60 L60 68 L65 60" />
        {/* Ear tufts */}
        <path d="M40 35 L35 25 L42 30" />
        <path d="M80 35 L85 25 L78 30" />
        {/* Body suggestion */}
        <path d="M40 75 L35 95 L60 100 L85 95 L80 75" opacity="0.4" />
      </g>
      {/* Connection dots */}
      <g fill="#22d3ee" opacity="0.4">
        <circle cx="60" cy="20" r="1.5" />
        <circle cx="35" cy="55" r="1" />
        <circle cx="85" cy="55" r="1" />
        <circle cx="60" cy="85" r="1.5" />
      </g>
    </svg>
  );
}
