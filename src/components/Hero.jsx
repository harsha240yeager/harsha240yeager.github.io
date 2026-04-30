import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  MapPin,
  Mail,
  Github,
  Linkedin,
  FileText,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Hash,
  Copy,
  Check,
} from 'lucide-react';
import { profile, publications } from '../data/portfolio.js';

const affiliationTones = {
  violet: 'border-violet-400/30 bg-violet-500/10 text-violet-200',
  cyan: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
  indigo: 'border-indigo-400/30 bg-indigo-500/10 text-indigo-200',
  fuchsia: 'border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200',
};

export default function Hero() {
  const pub = publications[0];
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* PHOTO COLUMN — tall portrait, academic-style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <PhotoCard />

            {/* Quick links beneath photo — like a researcher sidebar */}
            <div className="mt-5 glass rounded-2xl p-5 text-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-3">
                contact & links
              </div>
              <ul className="space-y-2">
                <SidebarLink icon={Mail} href={profile.socials.email} label="hnarra@usc.edu" />
                <SidebarLink icon={Linkedin} href={profile.socials.linkedin} label="linkedin/harsha240" external />
                <SidebarLink icon={Github} href={profile.socials.github} label="github/harsha240yeager" external />
                <SidebarLink icon={BookOpen} href={pub?.link} label="IEEE Xplore" external />
                {profile.socials.googleScholar ? (
                  <SidebarLink icon={GraduationCap} href={profile.socials.googleScholar} label="Google Scholar" external />
                ) : null}
                {profile.socials.orcid ? (
                  <SidebarLink icon={Hash} href={profile.socials.orcid} label="ORCID" external />
                ) : null}
                <SidebarLink icon={FileText} href={profile.resume} label="Curriculum Vitae (PDF)" external />
              </ul>

              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-2">
                  current location
                </div>
                <div className="text-sm text-white/75 inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-violet-300" /> {profile.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* BIO COLUMN — name, affiliations, dense bio, interests, CTAs */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-white"
            >
              Harshavardhan Reddy Narra
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3"
            >
              <p className="text-base sm:text-lg text-violet-200/90 font-mono">{profile.title}</p>
              <p className="text-sm text-white/55 font-mono">{profile.subtitle}</p>
            </motion.div>

            {/* Affiliation pills — academic page convention */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {profile.affiliations.map((a) => (
                <span
                  key={a.label}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${affiliationTones[a.tone] || affiliationTones.violet}`}
                >
                  {a.label}
                </span>
              ))}
            </motion.div>

            {/* Bio — short, academic */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-3xl text-base text-white/72 leading-relaxed"
            >
              {profile.bioShort}
            </motion.p>

            {/* Research interests — bullet list, academic page style */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-3">
                research interests
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-white/75">
                {profile.interests.map((it) => (
                  <li key={it} className="flex items-start gap-2 leading-snug">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Latest paper preview — academic page convention */}
            {pub ? <HeroPublicationCard pub={pub} /> : null}

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-400/40 hover:scale-[1.02] transition"
              >
                Explore my research
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 hover:border-white/40 hover:bg-white/5 font-medium transition"
              >
                See projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 hover:border-white/40 hover:bg-white/5 font-medium transition"
              >
                <FileText size={15} /> CV
              </a>
            </motion.div>
          </div>
        </div>

        <a
          href="#news"
          className="mt-14 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-white transition"
        >
          <span className="text-xs font-mono">scroll for news & updates</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function PhotoCard() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-cyan-400/25 blur-xl opacity-50 group-hover:opacity-80 transition" />

      {/* Photo frame — full portrait aspect, no cropping */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-bg-card">
        {!photoFailed ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="block w-full h-auto"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="aspect-[3/4] w-full grid place-items-center bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative font-display font-bold text-white text-7xl">
              {profile.initials}
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="text-xs font-mono text-white/70">drop profile.jpg in /public</div>
            </div>
          </div>
        )}
      </div>

      {/* Caption beneath the photo (so it doesn't cover any of you) */}
      <div className="mt-3 px-1">
        <div className="text-[10px] font-mono uppercase tracking-widest text-violet-300">
          // researcher
        </div>
        <div className="text-base font-display font-semibold text-white leading-snug">
          {profile.shortName} Reddy Narra
        </div>
        <div className="text-[11px] font-mono text-white/55">USC · IIT Bhubaneswar</div>
      </div>
    </div>
  );
}

function HeroPublicationCard({ pub }) {
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="group mt-7 block rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.04] hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] p-5 transition"
    >
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-cyan-300">
        <BookOpen size={11} /> Latest publication
        <a
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-1 text-white/55 hover:text-white transition"
        >
          open <ExternalLink size={11} />
        </a>
      </div>
      <a href={pub.link} target="_blank" rel="noreferrer" className="block">
        <div className="mt-2 text-sm sm:text-base font-display font-semibold text-white leading-snug">
          {pub.title}
        </div>
        <div className="mt-1 text-xs text-white/65 italic">{pub.authors}</div>
        <div className="mt-1 text-[11px] font-mono text-white/55">
          {pub.venue.split(',')[0]} · {pub.date} · DOI: {pub.doi}
        </div>
      </a>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono border border-white/15 text-white/75 hover:text-white hover:border-white/30 hover:bg-white/5 transition"
        >
          {copied ? <Check size={12} className="text-cyan-300" /> : <Copy size={12} />}
          {copied ? 'Copied BibTeX' : 'Cite (BibTeX)'}
        </button>
      </div>
    </motion.div>
  );
}

function SidebarLink({ icon: Icon, href, label, external = false }) {
  if (!href) return null;
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel="noreferrer"
        className="group flex items-center gap-2.5 text-white/70 hover:text-white transition"
      >
        <Icon size={14} className="text-violet-300 flex-shrink-0" />
        <span className="font-mono text-xs truncate">{label}</span>
        {external ? (
          <ExternalLink size={11} className="ml-auto opacity-40 group-hover:opacity-100 transition" />
        ) : null}
      </a>
    </li>
  );
}
