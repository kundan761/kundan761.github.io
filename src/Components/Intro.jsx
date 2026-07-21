import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail, ArrowRight, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const Intro = () => {

  const [text] = useTypewriter({
    words: profile.titles,
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  })

  const githublink = () => {
    window.open(profile.socials.github)
  }

  const emaillink = () => {
    window.location.href = `mailto:${profile.email}`;
  }

  const linkedinlink = () => {
    window.open(profile.socials.linkedin)
  }

  const callink = () => {
    window.open(profile.socials.cal || 'https://cal.com/kundan761')
  }

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden pt-[100px] px-10 pb-[60px] max-md:pt-[90px] max-md:px-6 max-md:pb-12 before:absolute before:top-[-20%] before:right-[-10%] before:w-[600px] before:h-[600px] before:rounded-full before:bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_60%)] before:pointer-events-none after:absolute after:bottom-[-10%] after:left-[-10%] after:w-[500px] after:h-[500px] after:rounded-full after:bg-[radial-gradient(circle,rgba(14,65,102,0.15)_0%,transparent_60%)] after:pointer-events-none' id="home">
      <div className='relative z-[1] w-full max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-7 max-[480px]:text-[0.65rem]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
              Available for select engagements
            </div>

            {/* Main heading */}
            <h1 className='text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.1] text-text-primary font-sans tracking-[-0.02em] mb-1 flex items-center flex-wrap gap-x-3 gap-y-1 max-lg:justify-center' id="user-detail-name">
              <span className="text-text-secondary font-normal flex items-center gap-2">
                Hi <span className="inline-block animate-[wiggle_2.5s_ease-in-out_infinite] origin-[70%_70%]">👋</span>, I'm
              </span>
              <span className="text-accent">{profile.shortName}.</span>
            </h1>

            {/* Typewriter */}
            <h2 className='text-[clamp(1.2rem,2.5vw,1.8rem)] text-accent font-sans font-normal tracking-[0.02em] mt-4 mb-4 min-h-[2.2rem]'>
              {text}<Cursor cursorStyle="|" />
            </h2>

            {/* Profile Summary */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base max-[480px]:text-sm text-text-secondary max-w-[540px] mb-8 leading-[1.8] max-lg:mx-auto"
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons & Social icons in one row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 flex-wrap max-lg:justify-center w-full lg:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white border-none rounded-full px-5 py-2.5 text-[0.88rem] font-bold transition-all duration-300 tracking-wide hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] shrink-0"
              >
                Hire Me <ArrowRight size={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent/10 border border-accent text-accent rounded-full px-5 py-2.5 text-[0.88rem] font-bold transition-all duration-300 tracking-wide hover:bg-accent/20 hover:-translate-y-[1px] shrink-0"
              >
                &darr; Resume
              </a>

              {/* Separator | */}
              <span className="text-text-muted text-2xl font-light select-none mx-1.5 hidden sm:inline-block shrink-0">
                |
              </span>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 shrink-0">
                {/* GitHub */}
                <motion.div
                  onClick={githublink}
                  id="contact-github"
                  className="group flex items-center gap-2 h-10 px-2.5 max-w-[38px] hover:max-w-[135px] bg-bg-surface-2/60 hover:bg-accent/10 border border-border hover:border-accent rounded-full cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 shadow-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-[18px] h-[18px] text-text-secondary group-hover:text-accent shrink-0 transition-colors duration-300" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[90px] group-hover:opacity-100 text-[0.82rem] font-bold text-accent tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    GitHub
                  </span>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  onClick={linkedinlink}
                  id="contact-linkedin"
                  className="group flex items-center gap-2 h-10 px-2.5 max-w-[38px] hover:max-w-[135px] bg-bg-surface-2/60 hover:bg-accent/10 border border-border hover:border-accent rounded-full cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 shadow-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="w-[18px] h-[18px] text-text-secondary group-hover:text-accent shrink-0 transition-colors duration-300" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[90px] group-hover:opacity-100 text-[0.82rem] font-bold text-accent tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    LinkedIn
                  </span>
                </motion.div>

                {/* Email */}
                <motion.div
                  onClick={emaillink}
                  id="contact-email-icon"
                  className="group flex items-center gap-2 h-10 px-2.5 max-w-[38px] hover:max-w-[135px] bg-bg-surface-2/60 hover:bg-accent/10 border border-border hover:border-accent rounded-full cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 shadow-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-[18px] h-[18px] text-text-secondary group-hover:text-accent shrink-0 transition-colors duration-300" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[90px] group-hover:opacity-100 text-[0.82rem] font-bold text-accent tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    Email
                  </span>
                </motion.div>

                {/* Calendar / Schedule */}
                <motion.div
                  onClick={callink}
                  id="contact-cal-icon"
                  className="group flex items-center gap-2 h-10 px-2.5 max-w-[38px] hover:max-w-[155px] bg-bg-surface-2/60 hover:bg-accent/10 border border-border hover:border-accent rounded-full cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 shadow-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarClock className="w-[18px] h-[18px] text-text-secondary group-hover:text-accent shrink-0 transition-colors duration-300" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[110px] group-hover:opacity-100 text-[0.82rem] font-bold text-accent tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    Schedule Call
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='flex justify-center lg:justify-end'
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className='w-[280px] sm:w-[320px] lg:w-[420px] xl:w-[480px] bg-[#0d1117]/80 backdrop-blur-sm rounded-xl border border-border shadow-2xl overflow-hidden drop-shadow-[0_0_30px_rgba(249,115,22,0.15)] relative'
            >
              {/* Glow behind the editor */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50 pointer-events-none" />

              {/* Header (Mac buttons) */}
              <div className="h-10 border-b border-border bg-[#161b22]/80 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-xs text-text-muted font-mono flex items-center gap-2">
                  engineer.ts
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-[0.8rem] sm:text-[0.9rem] leading-[1.8] overflow-hidden whitespace-pre text-left">
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">1</span><span className="text-[#ff7b72]">const&nbsp;</span> <span className="text-[#79c0ff]">{profile.shortName}</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#e3b341]">&#123;</span></div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">2</span><span className="text-[#a5d6ff] ml-4">role:</span> <span className="text-[#a5d6ff]">'Software Engineer'</span>,</div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">3</span><span className="text-[#a5d6ff] ml-4">techStack:</span> <span className="text-[#ff7b72]">[</span><span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'Next.js'</span>, <span className="text-[#a5d6ff]">'TypeScript'</span><span className="text-[#ff7b72]">]</span>,</div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">4</span><span className="text-[#a5d6ff] ml-4">focus:</span> <span className="text-[#ff7b72]">[</span><span className="text-[#a5d6ff]">'Cloud Native'</span>, <span className="text-[#a5d6ff]">'Architecture'</span><span className="text-[#ff7b72]">]</span>,</div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">5</span><span className="text-[#d2a8ff] ml-4">buildApp:</span> <span className="text-[#ff7b72]">async</span> () <span className="text-[#ff7b72]">=&gt;</span> <span className="text-[#ff7b72]">&#123;</span></div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">6</span><span className="text-[#ff7b72] ml-8">await</span> <span className="text-[#d2a8ff]">designScalableSystems</span>();</div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">7</span><span className="text-[#ff7b72] ml-8">return</span> <span className="text-[#a5d6ff]">'High-Performance Product 🚀'</span>;</div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">8</span><span className="text-[#ff7b72] ml-4">&#125;</span></div>
                <div className="flex"><span className="text-[#8b949e] select-none w-6 text-right mr-4">9</span><span className="text-[#e3b341]">&#125;</span>;</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Intro;
