import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader
          kicker="about_me.md"
          title="Designer of fast, efficient hardware."
          description="From RTL all the way down to transistor-level layout — I enjoy stitching together architecture, design, and verification into silicon that actually works."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass rounded-2xl p-8 leading-relaxed text-white/75"
          >
            {profile.about.split('. ').map((s, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {s.endsWith('.') ? s : `${s}.`}
              </p>
            ))}
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profile.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <div className="flex items-baseline gap-1">
                  <CountUp value={h.value} className="font-display text-3xl sm:text-4xl font-bold text-gradient" />
                  <span className="font-display text-lg text-white/70">{h.suffix}</span>
                </div>
                <div className="mt-2 text-sm text-white/55">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ value, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ''));
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      setDisplay(formatLikeOriginal(0, value));
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(formatLikeOriginal(latest, value)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function formatLikeOriginal(num, original) {
  const str = String(original);
  if (!/[0-9]/.test(str)) return original;

  const decimals = (str.split('.')[1] || '').replace(/[^0-9]/g, '').length;
  const prefix = str.match(/^[^0-9]*/)?.[0] || '';
  const suffix = str.match(/[^0-9.]*$/)?.[0] || '';
  const formatted = decimals > 0 ? num.toFixed(decimals) : Math.round(num).toString();
  return `${prefix}${formatted}${suffix}`;
}
