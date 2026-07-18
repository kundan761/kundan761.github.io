import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { achievements } from '../data/achievements';

function CountUp({ to, inView }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.round(v)),
      });
      return controls.stop;
    }
  }, [to, inView]);

  return <>{value}</>;
}

function AchievementCard({ a, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = a.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-border bg-bg-card hover:border-border-accent transition-all duration-300 overflow-hidden text-left"
    >
      {/* Floating gradient */}
      <div
        className={`absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none ${a.gradient}`}
      />

      <div className="relative p-7">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent items-center justify-center text-accent shadow-[0_0_15px_rgba(249,115,22,0.15)]"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-sans font-extrabold text-4xl sm:text-5xl text-accent">
            <CountUp to={a.metricValue ?? 0} inView={inView} />
          </span>
          {a.metricSuffix && (
            <span className="text-xl text-text-muted font-sans font-bold">{a.metricSuffix}</span>
          )}
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-text-secondary font-bold">{a.metricLabel}</div>

        <h3 className="mt-5 font-sans font-bold text-lg text-text-primary">{a.title}</h3>
        <p className="mt-2 text-[0.85rem] text-text-secondary leading-relaxed">{a.description}</p>
      </div>
    </motion.div>
  );
}

const Achievements = () => {
  return (
    <section id="achievements" className="py-[100px] max-sm:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Achievements
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Things I'm <span className="text-accent">proud of.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75]">
            A few highlights from competitive programming and hackathon stages.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
