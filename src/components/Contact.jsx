import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/portfolio.js';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: profile.socials.email, tone: 'pink' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/harsha240', href: profile.socials.linkedin, tone: 'violet' },
  { icon: Github, label: 'GitHub', value: 'github.com/harsha240yeager', href: profile.socials.github, tone: 'cyan' },
];

const toneMap = {
  pink: 'border-pink-400/30 text-pink-200 from-pink-500/20',
  violet: 'border-violet-400/30 text-violet-200 from-violet-500/20',
  cyan: 'border-cyan-400/30 text-cyan-200 from-cyan-500/20',
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden glass rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionHeader
                kicker="get_in_touch()"
                title={<>Let's build <span className="text-gradient">silicon</span> together.</>}
                description="Open to summer 2026 internships and full-time roles in RTL design, microarchitecture, design verification, and physical design. Reach out — I'd love to chat."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.socials.email}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-bg font-semibold shadow-lg shadow-violet-500/30 hover:scale-[1.02] transition"
                >
                  <Mail size={16} /> Say hello
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 hover:border-white/40 hover:bg-white/5 font-medium transition"
                >
                  <Download size={16} /> Download résumé
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-3">
              {channels.map((c, i) => {
                const Icon = c.icon;
                const tone = toneMap[c.tone];
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group glass glass-hover rounded-xl px-5 py-4 flex items-center gap-4"
                  >
                    <div className={`h-10 w-10 grid place-items-center rounded-lg border bg-gradient-to-br to-transparent ${tone}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono uppercase tracking-widest text-white/45">
                        {c.label}
                      </div>
                      <div className="text-sm text-white truncate">{c.value}</div>
                    </div>
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
