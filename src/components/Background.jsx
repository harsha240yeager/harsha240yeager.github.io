export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Static, subtle gradient washes (no animated blobs — keeps focus on content) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(at 15% 0%, rgba(139, 92, 246, 0.12) 0px, transparent 45%),' +
            'radial-gradient(at 85% 12%, rgba(99, 102, 241, 0.10) 0px, transparent 50%),' +
            'radial-gradient(at 50% 100%, rgba(34, 211, 238, 0.06) 0px, transparent 55%)',
        }}
      />

      {/* Top horizon line — subtle separator effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Noise texture for paper-feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
