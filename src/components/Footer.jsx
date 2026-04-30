import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-white/40">
          © {new Date().getFullYear()} {profile.name}. Designed & built with React + Tailwind.
        </p>
        <div className="flex items-center gap-3 text-white/55">
          <a href={profile.socials.email} className="hover:text-white" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub">
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
