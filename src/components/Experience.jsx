import { experience } from "../data/portfolio.js";
export default function Experience() {
  return (
    <section id="experience" className="shell section experience-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow section-index">04 / EXPERIENCE</span>
          <h2>
            Research, teaching
            <br />
            <span className="serif-accent">& engineering.</span>
          </h2>
        </div>
        <p>
          Research labs, classrooms, and a lot of debugging.
          <br />
          Each step adds another layer.
        </p>
      </div>
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="experience-row" key={item.company}>
            <div className="experience-date">
              <span className="timeline-point" />
              <span className="mono">{item.period}</span>
              {item.current && <span className="current-badge">CURRENT</span>}
            </div>
            <div className="experience-main">
              <div className="experience-role">
                <h3>{item.role}</h3>
                <span className="company-stamp">{item.shortCompany}</span>
              </div>
              <h4>{item.company}</h4>
              <p className="experience-detail">{item.detail}</p>
              <p>{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="experience-number mono">0{i + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
