import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { news } from '../data/portfolio.js';

const tones = {
  violet: 'border-violet-400/40 bg-violet-500/15 text-violet-200',
  cyan: 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200',
  indigo: 'border-indigo-400/40 bg-indigo-500/15 text-indigo-200',
  fuchsia: 'border-fuchsia-400/40 bg-fuchsia-500/15 text-fuchsia-200',
};

export default function News() {
  return (
    <section id="news" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline justify-between gap-4 mb-8 border-b border-white/5 pb-4"
        >
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-300">
              // news.log
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight">
              <Newspaper className="inline-block mr-2 -mt-1 text-violet-300" size={24} /> News &amp; updates
            </h2>
          </div>
          <span className="text-xs font-mono text-white/40 hidden sm:inline">
            {news.length} entries · most recent first
          </span>
        </motion.div>

        <ul className="divide-y divide-white/5">
          {news.map((n, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_88px_1fr] gap-3 sm:gap-4 py-4 items-start"
            >
              <span className="text-xs sm:text-sm font-mono text-white/55 pt-0.5">
                {n.date}
              </span>
              <span
                className={`hidden sm:inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest border ${
                  tones[n.accent] || tones.violet
                } w-fit`}
              >
                {n.type}
              </span>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                <span
                  className={`sm:hidden inline-flex items-center mr-2 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border ${
                    tones[n.accent] || tones.violet
                  }`}
                >
                  {n.type}
                </span>
                {n.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
