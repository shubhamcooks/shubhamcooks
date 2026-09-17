import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, NotebookPen } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { journalEntries, type JournalEntry } from '@/data/journal';

const CATEGORIES = ['All', 'Build Log', 'Security Notes', 'Design Observations', 'Project Thinking', 'Learning Notes'] as const;
type Category = (typeof CATEGORIES)[number];

export function Journal() {
  const [filter, setFilter] = useState<Category>('All');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return journalEntries.filter((entry) => {
      const matchesCategory = filter === 'All' || entry.category === filter;
      const matchesSearch =
        search === '' ||
        entry.title.toLowerCase().includes(search.toLowerCase()) ||
        entry.preview.toLowerCase().includes(search.toLowerCase()) ||
        entry.content.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <SectionWrapper
      id="journal"
      label="FIELD NOTES"
      title="Field Notes"
    >
      <p className="text-ink-200 text-base max-w-2xl mb-8 leading-relaxed">
        A static journal of build logs, security notes, design observations, and
        project thinking. Sample entries are labelled as editable content.
      </p>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-ink-850/60 border border-ink-700 rounded-lg text-sm text-warm placeholder:text-ink-400 focus:outline-none focus:border-accent/50 transition-colors"
            aria-label="Search journal entries"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wide-2 uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-accent/15 text-accent-glow border border-accent/40'
                  : 'bg-ink-800/30 text-ink-300 border border-ink-700 hover:border-ink-600 hover:text-ink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((entry, i) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              index={i}
              isExpanded={expandedId === entry.id}
              onToggle={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
            />
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="glass-panel rounded-lg p-8 text-center">
            <NotebookPen size={24} className="text-ink-400 mx-auto mb-3" />
            <p className="text-ink-300 text-sm">No notes found matching your search.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

function JournalCard({
  entry, index, isExpanded, onToggle,
}: {
  entry: JournalEntry;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-panel rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-5 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] tracking-wide-2 uppercase text-accent px-2 py-0.5 rounded border border-accent/30 bg-accent/5">
                {entry.category}
              </span>
              {entry.sample && (
                <span className="font-mono text-[9px] tracking-wide-2 uppercase text-ink-400 px-2 py-0.5 rounded border border-ink-600">
                  Sample
                </span>
              )}
              <span className="font-mono text-[10px] text-ink-400">{entry.date}</span>
            </div>
            <h4 className="font-display font-semibold text-warm text-base mb-1.5">{entry.title}</h4>
            {!isExpanded && (
              <p className="text-ink-300 text-sm leading-relaxed line-clamp-2">{entry.preview}</p>
            )}
          </div>
          <ChevronDown
            size={16}
            className={`text-ink-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="pt-4 border-t border-ink-700/50">
                <p className="text-ink-100 text-sm leading-relaxed">{entry.content}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
