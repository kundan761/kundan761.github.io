import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section className="py-[100px]" id="experience">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">

        <div className="text-center flex flex-col items-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Experience
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Real work, <span className="text-accent">real ownership.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75]">
            Owning architecture, shipping features, and solving the problems no one else wants to touch.
          </p>
        </div>

        <div className="relative pl-12 max-md:pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-[rgba(249,115,22,0.3)] before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              className="relative mb-8"
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-[-39px] max-md:left-[-24px] top-7 w-[18px] h-[18px] rounded-full bg-accent border-[3px] border-bg-primary shadow-[0_0_0_3px_rgba(249,115,22,0.25)]" />
              <div className="group relative bg-bg-card border border-border rounded-2xl p-8 max-md:p-6 transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] overflow-hidden">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex justify-between items-start mb-1.5 flex-wrap gap-2">
                  <div className="text-[1.25rem] font-extrabold text-text-primary">{exp.company}</div>
                  <div className="text-[0.8rem] text-text-muted flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent/80" /> {exp.location}
                  </div>
                </div>
                <div className="text-[0.78rem] text-text-muted mb-5">
                  {exp.positionsLabel && (
                    <span dangerouslySetInnerHTML={{ __html: exp.positionsLabel.replace(/<span>/g, '<span class="text-accent">') }} />
                  )}
                </div>

                {exp.roles.map((role, j) => (
                  <div className="relative pt-4 mt-4 first:mt-0" key={j}>
                    {/* Vertical line connecting the dot to the content below */}
                    <div className="absolute left-[4.5px] top-[28px] bottom-[-8px] w-[1px] bg-[rgba(249,115,22,0.6)]" />
                    
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                      <span className="text-base font-bold text-text-primary">{role.title}</span>
                      {role.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 bg-[rgba(249,115,22,0.12)] border border-border-accent text-accent rounded-full py-[3px] px-3 text-[0.72rem] font-bold">
                          <Sparkles size={12} /> Current
                        </span>
                      )}
                    </div>
                    <div className="text-[0.8rem] text-text-muted mb-4 flex items-center gap-1.5 pl-[22px]">
                      <Calendar size={13} className="text-accent/80" /> {role.date}
                    </div>
                    <ul className="list-none pl-[22px] flex flex-col gap-2 relative z-10">
                      {role.bullets.map((b, k) => (
                        <li className="text-[0.88rem] text-text-secondary leading-[1.65] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-accent before:font-bold" key={k}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-bg-surface-2 border border-border rounded-full text-[0.75rem] font-medium text-text-secondary hover:border-border-accent transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
