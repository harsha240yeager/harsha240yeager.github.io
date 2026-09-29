import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio.js";
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus(
        "Select the email address to copy it, or click it to open your email app.",
      );
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus(""), 4000);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-inner">
        <div className="contact-top">
          <span className="eyebrow">06 / WHAT’S NEXT?</span>
          <span className="availability">
            <span className="status-dot" />
            {profile.status}
          </span>
        </div>
        <div className="contact-grid">
          <div>
            <h2>
              Let’s build
              <br />
              something <span className="serif-accent">meaningful.</span>
            </h2>
            <p>
              Have a challenging hardware problem, a research idea,
              <br className="wide-only" /> or an opportunity to work together?
              I’d love to hear about it.
            </p>
          </div>
          <a
            className="contact-arrow"
            href={profile.socials.email}
            aria-label="Email Harsha"
          >
            <ArrowUpRight strokeWidth={1} />
          </a>
        </div>
        <div className="contact-bottom">
          <div className="email-block">
            <a href={profile.socials.email} className="email-link">
              {profile.email}
            </a>
            <button
              className="icon-button copy-email"
              onClick={copyEmail}
              type="button"
              aria-label="Copy email address"
            >
              {copyStatus === "Email copied" ? (
                <Check size={18} />
              ) : (
                <Copy size={18} />
              )}
            </button>
            <span className="copy-status" role="status">
              {copyStatus}
            </span>
          </div>
          <div className="social-links">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub <ArrowUpRight size={13} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href={profile.cvPath} target="_blank" rel="noreferrer">
              Résumé <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
