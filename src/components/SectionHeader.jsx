import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, description }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300"
      >
        // {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
