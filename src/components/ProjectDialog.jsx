import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ProjectArtwork from "./ProjectArtwork.jsx";

export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (!project) return;
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    element.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="case-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      {project && (
        <>
          <div className="dialog-top">
            <span className="eyebrow">CASE STUDY / {project.number}</span>
            <button
              type="button"
              className="icon-button"
              aria-label="Close case study"
              onClick={onClose}
              autoFocus
            >
              <X size={22} />
            </button>
          </div>
          <div className="dialog-body">
            <span className="eyebrow accent">{project.kind}</span>
            <h2 id="case-title">{project.title}</h2>
            <p className="dialog-subtitle">{project.subtitle}</p>
            <ProjectArtwork type={project.visual} />
            <div className="metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>
                    {metric.value} <small>{metric.unit}</small>
                  </strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
            <h3>The implementation</h3>
            <ul className="case-list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>The result</h3>
            <p>{project.result}</p>
            <aside className="case-note">{project.note}</aside>
            <div className="dialog-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="button button-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
              {!project.links.length && (
                <a
                  href="mailto:hnarra@usc.edu?subject=Portfolio%20project%20discussion"
                  className="text-link"
                >
                  Discuss this project <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
