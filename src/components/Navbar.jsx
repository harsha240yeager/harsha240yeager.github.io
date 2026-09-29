import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio.js";
const links = [
  ["research", "Research"],
  ["projects", "Projects"],
  ["publications", "Publications"],
  ["experience", "Experience"],
  ["about", "About"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    ["top", ...links.map(([id]) => id), "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function escape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a
          href="#top"
          className="wordmark"
          aria-label="Harsha Narra, home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            h<span>.</span>
          </span>
          <span>
            HARSHA NARRA
            <span className="wordmark-sub">HARDWARE / ARCHITECTURE</span>
          </span>
        </a>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={"nav-links " + (open ? "is-open" : "")}
        >
          {links.map(([id, label]) => (
            <a
              href={"#" + id}
              key={id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={profile.cvPath}
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight size={15} />
          </a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="menu-toggle icon-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
