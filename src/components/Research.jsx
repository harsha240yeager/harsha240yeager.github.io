import { ArrowUpRight, BookOpen, Award } from "lucide-react";
import { publications, recognition } from "../data/portfolio.js";
export default function Research() {
  return (
    <section id="publications" className="research-section">
      <div className="shell section">
        <div className="section-heading">
          <div>
            <span className="eyebrow section-index">
              03 / PUBLICATIONS & RECOGNITION
            </span>
            <h2>
              Published work.
              <br />
              <span className="serif-accent">Recognized ideas.</span>
            </h2>
          </div>
          <p>
            Shared with the research community.
            <br />
            Recognized by engineers.
          </p>
        </div>
        <div className="research-grid">
          {publications.map((pub) => (
            <article className="publication-card" key={pub.doi}>
              <div className="publication-top">
                <BookOpen size={22} strokeWidth={1.4} />
                <span className="eyebrow">PEER-REVIEWED PUBLICATION</span>
                <span className="publication-year">2024</span>
              </div>
              <span className="publication-venue">{pub.venue}</span>
              <h3>{pub.title}</h3>
              <p>{pub.description}</p>
              <div className="publication-bottom">
                <a
                  href={pub.link}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read on IEEE Xplore <ArrowUpRight size={17} />
                </a>
                <a
                  href={"https://doi.org/" + pub.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="doi-link"
                  aria-label="Open publication DOI"
                >
                  DOI ↗
                </a>
              </div>
            </article>
          ))}
          <div className="awards" id="achievements">
            {recognition.map((item) => (
              <article className="award-row" key={item.title}>
                <Award size={24} strokeWidth={1.4} />
                <div>
                  <span className="eyebrow">{item.organization}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="mono">{item.year}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
