import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/stats';

function StatCard({ stat, index }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-2xl border border-border bg-bg-card transition-all duration-300 text-left hover:border-border-accent hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] inline-flex items-center justify-center text-accent">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-text-muted">0{index + 1}</span>
      </div>

      <div className="font-sans font-extrabold text-4xl sm:text-5xl tracking-tight mb-3">
        <span className="text-text-muted">{stat.prefix}</span>
        <span className="text-accent">{stat.value}</span>
        <span className="text-text-grey">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-[0.95rem] font-bold text-text-primary">{stat.label}</div>
      <div className="mt-1.5 text-xs text-text-secondary leading-relaxed">{stat.description}</div>
    </motion.div>
  );
}

const About = ({ ref, func }) => {
  return (
    <section className="py-[120px] max-sm:py-[80px]" id="about" ref={ref} onScroll={func}>
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5 text-center">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            About Me
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Engineering thoughtful, <span className="text-accent">scalable software.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75] mt-2">
            Software Engineer with 2+ years of experience designing scalable architecture, optimizing APIs, and delivering production-ready applications. Below are some highlights from my journey.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-5 mb-[60px] max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
