import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio.js";
import ProjectArtwork from "./ProjectArtwork.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
const filters = ["All work", "Accelerators", "Architecture", "VLSI"];
export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <div>
          <span className="eyebrow section-index">02 / SELECTED PROJECTS</span>
          <h2>
            Selected <span className="serif-accent">work.</span>
          </h2>
        </div>
        <p>
          Architecture, implementation, and measured results.
          <br />
          Explore each project for the technical details.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {item === "All work"
                  ? projects.length
                  : projects.filter((p) => p.category === item).length}
              </span>
            </button>
          ))}
        </div>
        <span className="mono project-count" aria-live="polite">
          {String(visible.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div
        className={
          "project-grid " + (filter === "All work" ? "all-projects" : "")
        }
      >
        {visible.map((project) =>
          project.featured && filter === "All work" ? (
            <article className="featured-project" key={project.id}>
              <div className="featured-visual">
                <div className="visual-label">
                  <span className="status-dot" />
                  ON THE BENCH / ACTIVE RESEARCH
                </div>
                <ProjectArtwork type={project.visual} />
                <div className="visual-footer">
                  <span>1024 → 128 SELECTED BITS</span>
                  <span>ZYNQ-7020 · 100 MHz</span>
                </div>
              </div>
              <div className="featured-copy">
                <span className="eyebrow accent">
                  FEATURED / {project.kind}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <span className="metric-context">
                  Narrow K=128 hardware vs. masked full-width · 493,512 EMG test windows
                </span>
                <div className="project-bottom">
                  <div className="tag-list">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="text-link"
                  >
                    Explore case study <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          ) : (
            <article className="project-card" key={project.id}>
              <button
                type="button"
                className="project-visual-button"
                onClick={() => setSelected(project)}
                aria-label={"Read case study: " + project.shortTitle}
              >
                <ProjectArtwork type={project.visual} />
                <span className="visual-project-number">
                  {project.number} / {project.category.toUpperCase()}
                </span>
                <span className="round-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </button>
              <div className="project-card-body">
                <span className="eyebrow project-kind">{project.kind}</span>
                <h3>
                  <button type="button" onClick={() => setSelected(project)}>
                    {project.shortTitle}
                  </button>
                </h3>
                <p>{project.description}</p>
                <div className="card-stat">
                  <strong>
                    {project.metrics[0].value}{" "}
                    <small>{project.metrics[0].unit}</small>
                  </strong>
                  <span>{project.metrics[0].label}</span>
                </div>
                <div className="project-bottom">
                  <div className="tag-list">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="case-link"
                    onClick={() => setSelected(project)}
                    aria-label={"Open " + project.shortTitle + " case study"}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          ),
        )}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
