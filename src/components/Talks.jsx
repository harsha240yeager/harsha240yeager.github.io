import { motion } from 'framer-motion';
import { Mic, MapPin, ArrowUpRight, Trophy } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { talks } from '../data/portfolio.js';

const accents = {
  violet: {
    pill: 'border-violet-400/40 text-violet-200 bg-violet-500/10',
    award: 'border-fuchsia-400/40 text-fuchsia-200 bg-fuchsia-500/10',
    marker: 'border-violet-400/50 text-violet-200 bg-violet-500/15',
  },
  cyan: {
    pill: 'border-cyan-400/40 text-cyan-200 bg-cyan-500/10',
    award: 'border-fuchsia-400/40 text-fuchsia-200 bg-fuchsia-500/10',
    marker: 'border-cyan-400/50 text-cyan-200 bg-cyan-500/15',
  },
  indigo: {
    pill: 'border-indigo-400/40 text-indigo-200 bg-indigo-500/10',
    award: 'border-fuchsia-400/40 text-fuchsia-200 bg-fuchsia-500/10',
    marker: 'border-indigo-400/50 text-indigo-200 bg-indigo-500/15',
  },
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

        <ol className="mt-12 relative space-y-8">
          {/* Timeline rail — single span anchored to the markers' x-axis */}
          <span
            aria-hidden
            className="absolute top-3 bottom-3 left-4 sm:left-5 w-px bg-white/10"
          />

          {talks.map((t, i) => {
            const tone = accents[t.accent] || accents.violet;
            return (
              <motion.li
                key={t.title + t.date}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Marker — bg-bg punches a hole through the rail */}
                <span
                  className={`absolute left-4 sm:left-5 top-3 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full border bg-bg ${tone.marker}`}
                  aria-hidden
                >
                  <Mic size={14} />
                </span>

                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border ${tone.pill}`}
                    >
                      {t.type}
                    </span>
                    {t.award ? (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border ${tone.award}`}
                      >
                        <Trophy size={10} /> {t.award}
                      </span>
                    ) : null}
                    <span className="ml-auto text-[11px] font-mono text-white/55">
                      {t.date}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                    {t.title}
                  </h3>
                  <div className="mt-1 text-sm text-white/70">{t.venue}</div>
                  {t.location ? (
                    <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-white/55">
                      <MapPin size={11} /> {t.location}
                    </div>
                  ) : null}

                  {t.summary ? (
                    <p className="mt-4 text-sm text-white/72 leading-relaxed">
                      {t.summary}
                    </p>
                  ) : null}

                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition"
                    >
                      {t.linkLabel || 'Open'}
                      <ArrowUpRight size={14} />
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
