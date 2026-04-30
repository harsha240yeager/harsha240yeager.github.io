import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Trophy,
  Github,
  BookOpen,
  Link as LinkIcon,
  Filter,
  Microscope,
  GraduationCap,
  FlaskConical,
  Database,
  FileCode2,
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/portfolio.js';
import { Diagram } from './diagrams/Diagrams.jsx';

const accents = {
  violet: { glow: 'from-violet-500/30 via-indigo-500/20 to-transparent', text: 'text-violet-200', chip: 'bg-violet-500/15 border-violet-400/30 text-violet-200' },
  cyan: { glow: 'from-cyan-500/30 via-sky-500/20 to-transparent', text: 'text-cyan-200', chip: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-200' },
  indigo: { glow: 'from-indigo-500/30 via-violet-500/20 to-transparent', text: 'text-indigo-200', chip: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-200' },
};

const PRIMARY_TAGS = ['RISC-V', 'CNN', 'ViT', 'FPGA', 'Verilog', 'SystemVerilog', 'Cadence', 'Verification', 'HDC'];

function linkIcon(label) {
  const l = label.toLowerCase();
  if (l.includes('github')) return Github;
  if (l.includes('ieee') || l.includes('paper') || l.includes('publication') || l.includes('xplore')) return BookOpen;
  return LinkIcon;
}

export default function Projects() {
  const [active, setActive] = useState('all');

  const tagSet = useMemo(() => {
    const all = new Set();
    projects.forEach((p) => p.tags?.forEach((t) => all.add(t)));
    return PRIMARY_TAGS.filter((t) => all.has(t));
  }, []);

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => p.tags?.includes(active));
  }, [active]);

  const research = filtered.filter((p) => p.category === 'research');
  const coursework = filtered.filter((p) => p.category === 'coursework');
  const featured = research.find((p) => p.featured);
  const researchRest = research.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="projects.v"
          title="Projects & artifacts."
          description="Research projects below are framed around an open question and reported with explicit baselines and methodology. Coursework and open-source contributions are listed separately for honesty."
        />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/45 mr-1">
            <Filter size={11} /> filter
          </span>
          <FilterChip label="All" value="all" active={active} onClick={setActive} />
          {tagSet.map((t) => (
            <FilterChip key={t} label={t} value={t} active={active} onClick={setActive} />
          ))}
        </div>

        {/* RESEARCH PROJECTS */}
        {research.length > 0 ? (
          <>
            <CategoryHeader
              icon={Microscope}
              kicker="research.projects"
              title="Research projects"
              description="Work framed by an open question, with stated baseline and methodology."
            />
            {featured ? <FeaturedCard project={featured} /> : null}
            {researchRest.length > 0 ? (
              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                {researchRest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            ) : null}
          </>
        ) : null}

        {/* COURSEWORK & OPEN-SOURCE */}
        {coursework.length > 0 ? (
          <>
            <CategoryHeader
              icon={GraduationCap}
              kicker="coursework.idx"
              title="Selected coursework & open-source contributions"
              description="Engineering exercises completed for graduate coursework or open-source mentorship — listed here for completeness, not as research contributions."
            />
            <div className="mt-6 grid lg:grid-cols-2 gap-6">
              {coursework.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </>
        ) : null}

        {filtered.length === 0 ? (
          <div className="mt-12 glass rounded-2xl p-10 text-center text-white/55">
            No projects match <span className="font-mono text-white/85">{active}</span> yet.
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CategoryHeader({ icon: Icon, kicker, title, description }) {
  return (
    <div className="mt-14 mb-2 pt-2 border-t border-white/5">
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-violet-300 mt-6">
        <Icon size={12} /> {kicker}
      </div>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-white/60 max-w-3xl">{description}</p>
    </div>
  );
}

function FilterChip({ label, value, active, onClick }) {
  const isActive = active === value;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      aria-pressed={isActive}
      className={`text-[11px] font-mono px-3 py-1.5 rounded-full border transition ${
        isActive
          ? 'border-violet-400/60 bg-violet-500/20 text-violet-100'
          : 'border-white/10 bg-white/5 text-white/65 hover:text-white hover:border-white/30'
      }`}
    >
      {label}
    </button>
  );
}

function FeaturedCard({ project: p }) {
  const a = accents[p.accent] || accents.violet;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative mt-12 overflow-hidden glass rounded-3xl p-6 sm:p-10"
    >
      <div className={`absolute -top-40 -left-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br ${a.glow} blur-3xl opacity-60`} />

      <div className="relative grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border border-white/15 bg-white/5 text-white/70">
              FLAGSHIP PROJECT
            </span>
            {p.badge ? (
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border ${a.chip}`}>
                <Trophy size={11} /> {p.badge}
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
            {p.title}
          </h3>
          <div className={`mt-2 text-xs font-mono ${a.text}`}>{p.period}</div>
          {p.advisor ? (
            <div className="mt-1 text-[11px] font-mono text-white/55">{p.advisor}</div>
          ) : null}

          <p className="mt-5 text-base text-white/72 leading-relaxed">{p.description}</p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {p.metrics?.slice(0, 6).map((m) => (
              <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45">{m.label}</div>
                <div className={`text-sm font-display font-semibold ${a.text} mt-0.5`}>{m.value}</div>
              </div>
            ))}
          </div>

          {p.methodology ? (
            <ProjectFootnote icon={FlaskConical} label="Methodology" body={p.methodology} />
          ) : null}
          {p.memoryNote ? (
            <ProjectFootnote icon={Database} label="Memory subsystem" body={p.memoryNote} />
          ) : null}
          {p.artifactNote ? (
            <ProjectFootnote icon={FileCode2} label="Artifact" body={p.artifactNote} />
          ) : null}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/65">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {p.links?.map((l) => {
              const Icon = linkIcon(l.label);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 text-sm font-medium transition"
                >
                  <Icon size={14} /> {l.label}
                  <ArrowUpRight size={13} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 lg:self-start rounded-2xl border border-white/10 bg-bg/40 p-4 sm:p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">
            architecture
          </div>
          {p.diagram ? <Diagram kind={p.diagram} /> : null}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project: p, index }) {
  const a = accents[p.accent] || accents.violet;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
      className="group relative overflow-hidden glass glass-hover rounded-2xl p-6 sm:p-7"
    >
      <div className={`absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-br ${a.glow} blur-3xl opacity-60 group-hover:opacity-90 transition`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${a.text}`}>{p.period}</span>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
              {p.title}
            </h3>
            {p.advisor ? (
              <div className="mt-1 text-[11px] font-mono text-white/55">
                {p.advisor}
              </div>
            ) : null}
          </div>
        </div>

        {p.diagram ? (
          <div className="mt-5 rounded-xl border border-white/10 bg-bg/40 p-3">
            <Diagram kind={p.diagram} />
          </div>
        ) : null}

        <p className="mt-4 text-sm text-white/68 leading-relaxed">{p.description}</p>

        {p.metrics?.length ? (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {p.metrics.slice(0, 4).map((m) => (
              <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/45">
                  {m.label}
                </div>
                <div className={`text-xs font-display font-semibold ${a.text} mt-0.5 truncate`}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {p.methodology ? (
          <ProjectFootnote icon={FlaskConical} label="Methodology" body={p.methodology} />
        ) : null}
        {p.memoryNote ? (
          <ProjectFootnote icon={Database} label="Memory subsystem" body={p.memoryNote} />
        ) : null}
        {p.artifactNote ? (
          <ProjectFootnote icon={FileCode2} label="Artifact" body={p.artifactNote} />
        ) : null}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 5).map((t) => (
              <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/65">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {p.links?.map((l) => {
              const Icon = linkIcon(l.label);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-white/65 hover:text-white transition"
                >
                  <Icon size={13} /> {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectFootnote({ icon: Icon, label, body }) {
  return (
    <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/55 mb-1">
        <Icon size={11} /> {label}
      </div>
      <p className="text-[12px] text-white/65 leading-relaxed">{body}</p>
    </div>
  );
}
