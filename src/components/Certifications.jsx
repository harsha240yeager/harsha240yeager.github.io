import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { certifications } from '../data/portfolio.js';

const tones = [
  'border-cyan-400/40 bg-cyan-500/10 text-cyan-200',
  'border-violet-400/40 bg-violet-500/10 text-violet-200',
  'border-pink-400/40 bg-pink-500/10 text-pink-200',
  'border-lime-400/40 bg-lime-500/10 text-lime-200',
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="trainings.idx"
          title="Certifications & trainings."
          description="On-topic credentials that complement my VLSI and computer architecture coursework — including industry-recognized exams from Cadence."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((c, i) => {
            const tone = tones[i % tones.length];
            const isFeatured = !!c.featured;
            return (
              <motion.a
                key={c.name}
                href={c.link}
                target={c.link?.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group glass glass-hover rounded-2xl p-6 flex flex-col relative overflow-hidden ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 ring-1 ring-violet-400/30' : ''
                }`}
              >
                {isFeatured ? (
                  <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />
                ) : null}

                <div className="relative flex items-center justify-between">
                  <div className={`h-11 w-11 grid place-items-center rounded-xl border ${tone}`}>
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-2">
                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest border border-violet-400/40 bg-violet-500/15 text-violet-200">
                        <Sparkles size={10} /> Featured
                      </span>
                    ) : null}
                    <span className="text-[11px] font-mono text-white/45">{c.year}</span>
                  </div>
                </div>

                <h4 className={`relative mt-4 font-display font-semibold text-white ${isFeatured ? 'text-lg sm:text-xl' : 'text-base'}`}>
                  {c.name}
                </h4>
                <div className="relative mt-0.5 text-xs text-white/55">{c.issuer}</div>

                {c.note ? (
                  <p className="relative mt-3 text-xs text-white/55 leading-relaxed">{c.note}</p>
                ) : null}

                {c.link?.startsWith('http') ? (
                  <span className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-mono text-white/45 group-hover:text-white transition">
                    show credential <ExternalLink size={11} />
                  </span>
                ) : null}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
