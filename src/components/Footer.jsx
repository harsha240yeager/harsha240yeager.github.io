import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="shell site-footer">
      <a href="#top" className="footer-name">
        h<span>.</span>
        <span>Harshavardhan Reddy Narra</span>
      </a>
      <span className="mono">
        © {new Date().getFullYear()} · BUILT WITH INTENTION.
      </span>
      <a href="#top" className="back-top">
        Back to top <ArrowUp size={14} />
      </a>
    </footer>
  );
}
