import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data/portfolio.js';

const accents = {
  violet: 'from-violet-500/20 to-violet-500/0 border-violet-400/30 text-violet-200',
  cyan: 'from-cyan-500/20 to-cyan-500/0 border-cyan-400/30 text-cyan-200',
  pink: 'from-pink-500/20 to-pink-500/0 border-pink-400/30 text-pink-200',
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="education.cfg"
          title="Where I trained."
          description="Computer architecture, VLSI design, and a strong electrical engineering foundation."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden glass glass-hover rounded-2xl p-6 sm:p-8`}
            >
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accents[ed.accent]} blur-2xl opacity-70`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className={`h-11 w-11 grid place-items-center rounded-xl border ${accents[ed.accent]}`}>
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-mono text-white/45">{ed.period}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {ed.school}
                </h3>
                <p className="mt-1.5 text-sm text-white/65">{ed.degree}</p>
                <p className="mt-1 text-xs text-white/45 inline-flex items-center gap-1.5">
                  <MapPin size={12} /> {ed.location}
                </p>

                {ed.coursework?.length ? (
                  <div className="mt-5">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/45 inline-flex items-center gap-1.5">
                      <BookOpen size={12} /> Relevant Coursework
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {ed.coursework.map((c) => (
                        <li key={c} className="text-sm text-white/72 flex gap-2">
                          <span className="text-cyan-400">›</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
