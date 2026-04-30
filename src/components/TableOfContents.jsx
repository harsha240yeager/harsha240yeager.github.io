import { useEffect, useState } from 'react';

const sections = [
  { id: 'top', label: 'Profile' },
  { id: 'news', label: 'News' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'recognition', label: 'Publications' },
  { id: 'talks', label: 'Talks' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function TableOfContents() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block fixed top-1/2 right-6 -translate-y-1/2 z-30 print:hidden"
    >
      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 pl-2">
        on this page
      </div>
      <ul className="flex flex-col gap-0.5 border-l border-white/10 pl-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative block py-1 pr-2 text-[11px] font-mono transition ${
                  isActive
                    ? 'text-violet-200'
                    : 'text-white/45 hover:text-white/85'
                }`}
              >
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute -left-[13px] top-1/2 -translate-y-1/2 h-3 w-0.5 rounded-full bg-violet-400"
                  />
                ) : null}
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
