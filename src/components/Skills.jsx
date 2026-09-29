import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { skills, certifications } from "../data/portfolio.js";
export default function Skills() {
  return (
    <section id="skills" className="section shell">
      <div className="section-heading compact-heading">
        <div>
          <span className="eyebrow section-index">05 / THE TOOLKIT</span>
          <h2>
            Across the <span className="serif-accent">stack.</span>
          </h2>
        </div>
        <p>From a Python model to a physical layout.</p>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.group}>
            <span className="mono muted">{group.number}</span>
            <h3>{group.group}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div id="certifications" className="certifications">
        <div className="certification-heading">
          <BadgeCheck size={18} />
          <h3>Always sharpening the tools.</h3>
          <span className="mono">SELECTED CERTIFICATIONS</span>
        </div>
        {certifications.slice(0, 2).map((item) => (
          <div className="certification-row" key={item.name}>
            <span>{item.name}</span>
            <span className="muted">{item.issuer}</span>
            <span className="mono">{item.year}</span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={"Verify " + item.name}
              >
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <BadgeCheck size={17} className="muted" />
            )}
          </div>
        ))}
        <details className="more-certifications">
          <summary>More certifications</summary>
          {certifications.slice(2).map((item) => (
            <div className="certification-row" key={item.name}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name} <ArrowUpRight size={13} />
              </a>
              <span className="muted">{item.issuer}</span>
              <span className="mono">{item.year}</span>
            </div>
          ))}
        </details>
      </div>
    </section>
  );
}
