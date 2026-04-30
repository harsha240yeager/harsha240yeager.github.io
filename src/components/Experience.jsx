import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/portfolio.js';

const accentMap = {
  violet: { ring: 'ring-violet-400/40', dot: 'bg-violet-400', text: 'text-violet-200', chip: 'bg-violet-500/15 border-violet-400/30 text-violet-200' },
  cyan: { ring: 'ring-cyan-400/40', dot: 'bg-cyan-400', text: 'text-cyan-200', chip: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-200' },
  pink: { ring: 'ring-pink-400/40', dot: 'bg-pink-400', text: 'text-pink-200', chip: 'bg-pink-500/15 border-pink-400/30 text-pink-200' },
  lime: { ring: 'ring-lime-400/40', dot: 'bg-lime-400', text: 'text-lime-200', chip: 'bg-lime-500/15 border-lime-400/30 text-lime-200' },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="experience.log"
          title="Research & internships."
          description="A focused timeline of hardware research roles spanning RTL design, RISC-V tape-out flow, and embedded systems."
        />

        <div className="relative mt-14 pl-6 sm:pl-10">
          <div className="absolute left-0 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/40 to-pink-500/60" />

          <div className="space-y-10">
            {experience.map((e, i) => {
              const a = accentMap[e.accent];
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="relative"
                >
                  <span
                    className={`absolute -left-[26px] sm:-left-[24px] top-3 h-3.5 w-3.5 rounded-full ${a.dot} ring-4 ${a.ring} shadow-lg`}
                  />
                  <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                          {e.role}
                          <span className={`mx-2 ${a.text}`}>·</span>
                          <span className={`${a.text}`}>{e.company}</span>
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/55 font-mono">
                          <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {e.period}</span>
                          <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> {e.location}</span>
                          {e.advisor ? (
                            <span className={`inline-flex items-center gap-1.5 ${a.text}`}>
                              <GraduationCap size={13} /> Advisor: {e.advisor}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className={`h-9 w-9 grid place-items-center rounded-lg border ${a.chip}`}>
                        <Briefcase size={16} />
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-white/72 leading-relaxed">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {e.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className={`inline-flex items-center px-2.5 py-1 text-[11px] font-mono rounded-md border ${a.chip}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
