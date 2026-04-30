import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, CircuitBoard, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { researchFocus } from '../data/portfolio.js';

const iconMap = { BrainCircuit, Cpu, CircuitBoard, Sparkles };

const tones = [
  { ring: 'border-violet-400/30 text-violet-200 bg-violet-500/10', glow: 'from-violet-500/25' },
  { ring: 'border-cyan-400/30 text-cyan-200 bg-cyan-500/10', glow: 'from-cyan-500/25' },
  { ring: 'border-indigo-400/30 text-indigo-200 bg-indigo-500/10', glow: 'from-indigo-500/25' },
  { ring: 'border-fuchsia-400/30 text-fuchsia-200 bg-fuchsia-500/10', glow: 'from-fuchsia-500/25' },
];

export default function Research() {
  return (
    <section id="research" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="research_focus.tex"
          title="Research focus."
          description="Four interconnected threads I work on — bridging algorithms, microarchitecture, and physical design."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {researchFocus.map((r, i) => {
            const Icon = iconMap[r.icon] || Cpu;
            const tone = tones[i % tones.length];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden glass glass-hover rounded-2xl p-6 flex flex-col"
              >
                <div className={`absolute -top-20 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${tone.glow} to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition`} />
                <div className="relative">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone.ring}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {r.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.keywords.map((k) => (
                      <span
                        key={k}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/65"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
