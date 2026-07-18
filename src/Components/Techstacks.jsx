import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups, marqueeTech } from "../data/skills";

// ── Glow blob class by accent name ──────────────────────────────
const getGlowClass = (accent) => {
  switch (accent) {
    case 'from-orange-500/80 to-amber-400/40': return 'from-orange-500/80 to-amber-400/40';
    case 'from-amber-400/80 to-rose-500/40': return 'from-amber-400/80 to-rose-500/40';
    case 'from-fuchsia-500/70 to-rose-500/40': return 'from-fuchsia-500/70 to-rose-500/40';
    case 'from-cyan-400/70 to-blue-500/40': return 'from-cyan-400/70 to-blue-500/40';
    case 'from-violet-500/70 to-indigo-500/40': return 'from-violet-500/70 to-indigo-500/40';
    case 'from-orange-400/70 to-yellow-400/40': return 'from-orange-400/70 to-yellow-400/40';
    default: return '';
  }
};

// ── Animated skill bar ───────────────────────────────────────────
function SkillBar({ skill, inView, delay }) {
  const { Icon, name, level, color } = skill;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center mb-1">
        {/* Label + icon */}
        <span className="flex items-center gap-2.5 text-[0.9rem] font-medium text-text-secondary">
          <span className={`flex items-center justify-center w-6 h-6 rounded bg-bg-surface-2 border border-border ${color || 'text-text-primary'}`}>
            <Icon style={{ width: '0.82rem', height: '0.82rem' }} />
          </span>
          {name}
        </span>
        {/* Percentage */}
        <span className="text-[0.8rem] font-bold text-text-muted">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

// ── Single category card ─────────────────────────────────────────
function SkillCard({ group, groupIndex, inView }) {
  const { title, icon: CategoryIcon, accent, skills } = group;
  const glowClass = getGlowClass(accent);

  return (
    <motion.article
      className="relative bg-bg-card border border-border rounded-2xl p-8 overflow-hidden group transition-colors duration-300 hover:border-border-accent hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)]"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: groupIndex * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Hover glow blob */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br opacity-0 blur-[40px] group-hover:opacity-100 transition-opacity duration-700 ${glowClass}`} aria-hidden="true" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8 relative z-[1]">
        <div className="w-10 h-10 rounded-md bg-bg-surface-2 border border-border flex items-center justify-center text-accent">
          <CategoryIcon className="w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-text-primary tracking-wide">{title}</span>
      </div>

      {/* Skill rows */}
      <div className="flex flex-col gap-5 relative z-[1]">
        {skills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            inView={inView}
            delay={groupIndex * 0.08 + si * 0.05 + 0.2}
          />
        ))}
      </div>
    </motion.article>
  );
}

// ── Marquee ticker ───────────────────────────────────────────────
function MarqueeTicker({ items }) {
  // Duplicate so we can loop seamlessly
  const doubled = [...items, ...items];
  return (
    <div className="mt-14 relative mask-fade-edges overflow-hidden">
      <div className="flex gap-3 animate-marquee w-max hover:[animation-play-state:paused]">
        {doubled.map((t, i) => {
          const { name, Icon, color } = t;
          return (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-bg-surface-2 border border-border text-sm font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
            >
              <Icon className={`w-3.5 h-3.5 ${color || 'text-text-primary'}`} />
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────
const Techstacks = () => {
  const gridRef = useRef(null);
  const inView  = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <section className="py-[100px]" id="skills">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">

        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Toolbox
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Skills, tools, and the{' '}
            <span className="text-accent">stack I trust.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75]">
            A practical toolkit refined across real-world projects, client
            work, and continuous self-learning.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {skillGroups.map((group, gi) => (
            <SkillCard
              key={group.title}
              group={group}
              groupIndex={gi}
              inView={inView}
            />
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MarqueeTicker items={marqueeTech} />
        </motion.div>

      </div>
    </section>
  );
};

export default Techstacks;
