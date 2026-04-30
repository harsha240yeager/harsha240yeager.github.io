import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Medal, ArrowUpRight, Copy, Check } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { achievements, publications } from '../data/portfolio.js';

const iconMap = { Trophy, BookOpen, Medal };

const accents = {
  violet: { glow: 'from-violet-500/30', ring: 'border-violet-400/40 text-violet-200 bg-violet-500/15' },
  cyan: { glow: 'from-cyan-500/30', ring: 'border-cyan-400/40 text-cyan-200 bg-cyan-500/15' },
  pink: { glow: 'from-pink-500/30', ring: 'border-pink-400/40 text-pink-200 bg-pink-500/15' },
  indigo: { glow: 'from-indigo-500/30', ring: 'border-indigo-400/40 text-indigo-200 bg-indigo-500/15' },
};

export default function Achievements() {
  const pub = publications[0];
  return (
    <section id="recognition" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="recognition.tar"
          title="Awards, papers & honors."
          description="Selected highlights — peer-reviewed publications and competitive recognition for hardware design."
        />

        {pub ? <PublicationCard pub={pub} /> : null}

        <div className="mt-6 grid lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Trophy;
            const tone = accents[a.accent] || accents.violet;
            const hasLink = !!a.link;
            const Wrapper = hasLink ? motion.a : motion.div;
            const wrapperProps = hasLink
              ? { href: a.link, target: '_blank', rel: 'noreferrer' }
              : {};
            return (
              <Wrapper
                key={a.title}
                {...wrapperProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden glass glass-hover rounded-2xl p-6 sm:p-7"
              >
                <div
                  className={`absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${tone.glow} to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border ${tone.ring}`}
                    >
                      {a.kind}
                    </span>
                    <div className={`h-10 w-10 grid place-items-center rounded-xl border ${tone.ring}`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white">
                    {a.title}
                  </h3>
                  <div className="mt-1.5 text-xs font-mono text-white/55">
                    {a.org} · {a.date}
                  </div>

                  <p className="mt-4 text-sm text-white/72 leading-relaxed">
                    {a.description}
                  </p>

                  {hasLink ? (
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-white/65 group-hover:text-white transition">
                      {a.linkLabel || 'Read more'}
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                      />
                    </span>
                  ) : null}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PublicationCard({ pub }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden glass rounded-3xl p-6 sm:p-8 mt-12"
    >
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
            <BookOpen size={11} /> PEER-REVIEWED PUBLICATION
          </div>
          <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold leading-snug text-white">
            {pub.title}
          </h3>
          <div className="mt-2 text-sm text-white/65 italic">
            {pub.authors}
          </div>
          <div className="mt-1 text-xs font-mono text-white/55">
            {pub.venue}
          </div>
          <div className="mt-1 text-[11px] font-mono text-white/45">
            {pub.date} · DOI: {pub.doi}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-bg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <BookOpen size={14} /> View on IEEE Xplore <ArrowUpRight size={13} />
            </a>
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 text-sm font-medium text-white transition"
            >
              {copied ? <Check size={14} className="text-cyan-300" /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy BibTeX'}
            </button>
          </div>

          {pub.artifactNote ? (
            <div className="mt-4 text-[11px] font-mono text-white/55 italic">
              {pub.artifactNote}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-2">
            citation (BibTeX)
          </div>
          <pre className="text-[11px] font-mono text-white/72 leading-relaxed overflow-x-auto rounded-xl border border-white/10 bg-bg/60 p-4">
{pub.bibtex}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
