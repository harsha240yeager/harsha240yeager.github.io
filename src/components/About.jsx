import { ArrowUpRight, MapPin } from "lucide-react";
import { profile, education } from "../data/portfolio.js";
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="shell section about-grid">
        <div className="portrait-block">
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt="Harshavardhan Reddy Narra"
              width="564"
              height="1223"
              loading="lazy"
            />
            <span className="portrait-label mono">
              THE PERSON BEHIND THE PROJECTS
            </span>
          </div>
          <div className="portrait-caption">
            <span>
              <MapPin size={13} />
              Los Angeles, California
            </span>
            <span className="mono">USC / LOS ANGELES</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow section-index">05 / ABOUT & EDUCATION</span>
          <h2>
            A little about <span className="serif-accent">me.</span>
          </h2>
          <p className="about-lead">{profile.about}</p>
          <p>{profile.philosophy}</p>
          <div id="education" className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <div>
                  <h3>{item.school}</h3>
                  <span className="mono">{item.period}</span>
                </div>
                <p>{item.degree}</p>
                {item.focus && (
                  <span className="education-focus">{item.focus}</span>
                )}
                {item.coursework.length > 0 && (
                  <details>
                    <summary>Selected coursework</summary>
                    <ul>
                      {item.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
          <a
            className="text-link"
            href={profile.cvPath}
            target="_blank"
            rel="noreferrer"
          >
            The full story, on one page <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
