import { ArrowRight, Bot, CircuitBoard, Cpu, Layers3 } from "lucide-react";
import { researchInterests } from "../data/portfolio.js";

const icons = {
  architecture: Cpu,
  memory: Layers3,
  codesign: CircuitBoard,
  robotics: Bot,
};

export default function ResearchInterests() {
  return (
    <section
      id="research"
      className="section shell interests-section"
      aria-labelledby="interests-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow section-index">01 / RESEARCH DIRECTION</span>
          <h2 id="interests-title">
            Research <span className="serif-accent">interests.</span>
          </h2>
        </div>
        <p>
          Efficient AI inference—from the architecture and memory system to the
          algorithms running on the device.
        </p>
      </div>
      <div className="interests-grid">
        {researchInterests.map((interest) => {
          const Icon = icons[interest.icon];
          return (
            <article
              className="interest-card"
              key={interest.id}
              aria-labelledby={interest.id}
            >
              <div className="interest-card-top">
                <span className="interest-icon">
                  <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="mono interest-number">
                  {interest.number} / 04
                </span>
              </div>
              <h3 id={interest.id}>{interest.title}</h3>
              <p>{interest.description}</p>
              <ul className="interest-themes" aria-label="Focus areas">
                {interest.themes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <div className="interests-bottom">
        <p>
          A common thread: doing more with limited compute, memory, and energy.
        </p>
        <a href="#projects" className="text-link">
          Explore the related work <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
