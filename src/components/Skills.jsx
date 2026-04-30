import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Code2, HardDrive } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { skills } from '../data/portfolio.js';

const iconMap = { Cpu, CircuitBoard, Code2, HardDrive };

const tones = [
  'from-violet-500/15 to-violet-500/0 border-violet-400/30 text-violet-200 group-hover:shadow-violet-500/20',
  'from-cyan-500/15 to-cyan-500/0 border-cyan-400/30 text-cyan-200 group-hover:shadow-cyan-500/20',
  'from-pink-500/15 to-pink-500/0 border-pink-400/30 text-pink-200 group-hover:shadow-pink-500/20',
  'from-lime-500/15 to-lime-500/0 border-lime-400/30 text-lime-200 group-hover:shadow-lime-500/20',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="skills.json"
          title="Tools of the trade."
          description="The hardware-leaning toolbox I use day to day, from RTL & EDA flows to architectural modeling and software glue."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon] || Cpu;
            const tone = tones[i % tones.length];
            return (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`group relative overflow-hidden glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${tone.split(' ').slice(0, 2).join(' ')} blur-2xl`} />
                <div className="relative">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/75 hover:bg-white/10 hover:border-white/20 transition"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
