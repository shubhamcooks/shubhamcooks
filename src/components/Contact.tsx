import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="CONTACT"
      title="Let's Build Something Useful"
    >
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-ink-200 text-lg md:text-xl leading-relaxed mb-12"
        >
          Always exploring. Always building. If you're working on something
          interesting — a product, a security challenge, a creative project, or
          an opportunity — I'd like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          <ContactCard
            icon={<Github size={18} />}
            label="GitHub"
            value="shubhamcooks"
            href="https://github.com/shubhamcooks"
          />
          <ContactCard
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            value="Shubham Dey"
            href="https://linkedin.com/in/shubham-dey-99bb0041a"
          />
          <ContactCard
            icon={<Mail size={18} />}
            label="Email"
            value="Shubham Dey"
            href="mailto:xlegendx999@gmail.com"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-ink-700/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg viewBox="0 0 32 32" className="w-7 h-7">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
                <circle cx="16" cy="16" r="9" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
                <circle cx="16" cy="16" r="4" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8" />
                <text x="16" y="20" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0ede8">S</text>
              </svg>
              <span className="font-display font-bold text-warm tracking-wide-2">SHUBHAM</span>
            </div>
            <p className="text-ink-300 text-sm">
              Founder & Developer — VISKOS
            </p>
            <p className="text-ink-400 text-xs font-mono mt-1">Meghalaya, India</p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-ink-400">
              Always exploring. Always building.
            </p>
            <p className="font-mono text-[10px] text-ink-500 mt-1">
              © {new Date().getFullYear()} Shubham. Digital Identity.
            </p>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}

function ContactCard({
  icon, label, value, href, placeholder = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  placeholder?: boolean;
}) {
  if (placeholder) {
    return (
      <div className="glass-panel rounded-lg p-5 border-dashed border-ink-600 opacity-60">
        <div className="flex items-center gap-2 mb-2 text-ink-300">
          {icon}
          <span className="font-mono text-[10px] tracking-wide-2 uppercase">{label}</span>
        </div>
        <p className="text-ink-200 text-sm">{value}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group glass-panel rounded-lg p-5 hover:border-accent/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-ink-200 group-hover:text-accent transition-colors">
          {icon}
          <span className="font-mono text-[10px] tracking-wide-2 uppercase">{label}</span>
        </div>
        <ArrowUpRight size={14} className="text-ink-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
      <p className="text-warm text-sm font-medium">{value}</p>
    </a>
  );
}
