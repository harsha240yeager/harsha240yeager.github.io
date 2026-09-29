import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data/portfolio.js";
import ChipScene from "./ChipScene.jsx";
export default function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" />
          {profile.title}
        </span>
        <span className="location">
          <MapPin size={12} /> LOS ANGELES, CA
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            Small circuits.
            <br />
            Big <span className="serif-accent">possibilities.</span>
          </h1>
          <div className="hero-intro">
            <span className="intro-rule" />
            <p>
              I’m <strong>Harshavardhan Reddy Narra.</strong>
              <br />I build efficient hardware for intelligent systems—
              <br className="wide-only" /> from the architecture to the last
              bit.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">
              Explore my work <ArrowDown size={17} />
            </a>
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View résumé <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-affiliation">
            <span className="usc-mark">USC</span>
            <span>
              M.S. Electrical & Computer Engineering
              <br />
              <span className="muted">VLSI & Computer Architecture</span>
            </span>
          </div>
        </div>
        <ChipScene />
      </div>
      <div className="hero-bottom">
        <span>
          <span className="status-dot" />
          {profile.status}
        </span>
        <a href="#projects">
          SCROLL TO EXPLORE <ArrowDown size={12} />
        </a>
        <span className="mono">PORTFOLIO / 2026</span>
      </div>
      <div className="proof-strip" aria-label="Selected highlights">
        <div>
          <span className="proof-label">RESEARCH</span>
          <strong>IEEE HiPC ’24</strong>
          <span>Peer-reviewed author</span>
        </div>
        <div>
          <span className="proof-label">RECOGNITION</span>
          <strong>DVCon India</strong>
          <span>2024 · First Runner-Up</span>
        </div>
        <div>
          <span className="proof-label">IN THE LAB</span>
          <strong>IIT Bhubaneswar</strong>
          <span>HDC & FPGA research</span>
        </div>
        <div>
          <span className="proof-label">AT USC</span>
          <strong>Engineer. Researcher. TA.</strong>
          <span>Building, learning, teaching.</span>
        </div>
      </div>
    </section>
  );
}
