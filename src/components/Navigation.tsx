import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'IDENTITY' },
  { id: 'about', label: 'ABOUT' },
  { id: 'ventures', label: 'VENTURES' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'security', label: 'SECURITY' },
  { id: 'lab', label: 'LAB' },
  { id: 'journal', label: 'JOURNAL' },
  { id: 'contact', label: 'CONTACT' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-lg border-b border-ink-700/40'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
                <circle cx="16" cy="16" r="9" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
                <circle cx="16" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8" />
                <text x="16" y="20" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0ede8">S</text>
              </svg>
            </div>
            <span className="font-display font-bold text-warm tracking-wide-2 text-sm">SHUBHAM</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 font-mono text-[11px] tracking-wide-2 uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-accent-glow'
                    : 'text-ink-200 hover:text-warm'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-warm p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-ink-950/95 backdrop-blur-lg border-b border-ink-700/40"
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 font-mono text-sm tracking-wide-2 uppercase rounded transition-colors ${
                    activeSection === item.id
                      ? 'text-accent-glow bg-accent/10'
                      : 'text-ink-200 hover:text-warm hover:bg-ink-800/50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
