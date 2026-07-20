import React from 'react';
import { Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";
import { motion } from "framer-motion";
import { projectsData as PROJECTS } from '../data/projects';

const Projects = () => {
  const doubledProjects = [...PROJECTS, ...PROJECTS];

  return (
    <section id="projects" className="py-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">

        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Projects
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Featured <span className="text-accent">Projects.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75]">
            A showcase of my recent web applications, built with modern frameworks and robust backends.
          </p>
        </div>

        {/* Projects List */}
        <div className="w-full relative mt-4 overflow-hidden mask-fade-edges">
          <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused] pb-12 pt-4">
            {doubledProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="group relative w-[357px] max-w-[85vw] shrink-0 aspect-square overflow-hidden rounded-2xl border border-border bg-bg-card snap-center transition-all duration-500 hover:border-border-accent hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-fill object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Always visible title (fades out on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 backdrop-blur-sm z-10 text-center overflow-y-auto overflow-x-hidden scrollbar-hide">
                <h3 className="text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                <p className="text-[0.85rem] text-white/80 leading-[1.6] mb-6 line-clamp-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.tech.map((t, i) => {
                    const TechIcon = t.Icon;
                    return (
                      <Tooltip key={i} label={t.name} hasArrow bg="#0e4166" px="2" fontSize="0.8rem" color="white">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.1)] border border-white/20 transition-colors hover:border-accent hover:bg-accent/20">
                          {TechIcon && <TechIcon className={`w-5 h-5 ${t.color || 'text-white'}`} />}
                        </div>
                      </Tooltip>
                    );
                  })}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <button onClick={() => window.open(project.liveLink)} className="inline-flex items-center justify-center gap-2 bg-accent text-white border-none rounded-full py-2.5 px-6 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)]">
                    <VscLiveShare className="w-4 h-4" /> Live
                  </button>
                  <button onClick={() => window.open(project.githubLink)} className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 rounded-full py-2.5 px-6 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 hover:bg-white/20 hover:-translate-y-[1px]">
                    <AiFillGithub className="w-4 h-4" /> Codebase
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
