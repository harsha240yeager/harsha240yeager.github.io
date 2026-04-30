import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const links = [
  { href: '#news', label: 'News' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#recognition', label: 'Publications' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-bg/70 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-500 text-bg font-display font-bold text-lg shadow-lg shadow-violet-500/30 group-hover:scale-105 transition">
            {profile.initials}
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-sm">{profile.shortName}</span>
            <span className="text-[11px] text-white/50 font-mono">{profile.tagline}</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-bg text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition"
          >
            <Download size={15} /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-xl"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-bg text-sm font-semibold"
                >
                  <Download size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
