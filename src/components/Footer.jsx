import { Github, Linkedin, Mail, GraduationCap, Hash } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 border-t border-white/5 mt-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-10">
        {profile.acknowledgments ? (
          <div className="mb-8 max-w-3xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
              acknowledgments
            </div>
            <p className="text-xs text-white/60 leading-relaxed italic">
              {profile.acknowledgments}
            </p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-xs font-mono text-white/45">
            © {new Date().getFullYear()} {profile.name}. Designed & built with React + Tailwind.
          </p>
          <div className="flex items-center gap-3 text-white/60">
            <a href={profile.socials.email} className="hover:text-white transition" aria-label="Email">
              <Mail size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            {profile.socials.googleScholar ? (
              <a
                href={profile.socials.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Google Scholar"
              >
                <GraduationCap size={16} />
              </a>
            ) : null}
            {profile.socials.orcid ? (
              <a
                href={profile.socials.orcid}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="ORCID"
              >
                <Hash size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
