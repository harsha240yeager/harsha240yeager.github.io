import { motion } from 'framer-motion';
import { Mic, MapPin, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { talks } from '../data/portfolio.js';

const accents = {
  violet: 'border-violet-400/40 text-violet-200 bg-violet-500/10',
  cyan: 'border-cyan-400/40 text-cyan-200 bg-cyan-500/10',
  indigo: 'border-indigo-400/40 text-indigo-200 bg-indigo-500/10',
};

export default function Talks() {
  if (!talks?.length) return null;

  return (
    <section id="talks" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="talks.log"
          title="Talks & presentations."
          description="Conference papers and design-contest pitches where I've presented my hardware accelerator work."
        />

        <ol className="mt-12 relative border-l border-white/10 pl-6 sm:pl-8 space-y-8">
          {talks.map((t, i) => {
            const tone = accents[t.accent] || accents.violet;
            return (
              <motion.li
                key={t.title + t.date}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[34px] sm:-left-[42px] top-1.5 grid h-7 w-7 place-items-center rounded-full border ${tone}`}
                  aria-hidden
                >
                  <Mic size={13} />
                </span>

                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border ${tone}`}
                    >
                      {t.type}
                    </span>
                    <span className="text-[11px] font-mono text-white/50">{t.date}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                    {t.title}
                  </h3>
                  <div className="mt-1 text-sm text-white/65">{t.venue}</div>
                  {t.location ? (
                    <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-mono text-white/45">
                      <MapPin size={11} /> {t.location}
                    </div>
                  ) : null}

                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition"
                    >
                      {t.linkLabel || 'Open'}
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                      />
                    </a>
                  ) : null}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
