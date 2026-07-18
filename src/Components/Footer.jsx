import React from 'react';
import { FaGithub as Github, FaLinkedinIn as Linkedin, FaTwitter as Twitter, FaWhatsapp as Whatsapp } from 'react-icons/fa6';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', icon: Github, href: profile.socials?.github },
    { label: 'LinkedIn', icon: Linkedin, href: profile.socials?.linkedin },
    { label: 'Twitter', icon: Twitter, href: profile.socials?.twitter },
    { label: 'WhatsApp', icon: Whatsapp, href: profile.socials?.whatsapp },
  ].filter(s => s.href);

  return (
    <footer className="relative bg-bg-primary border-t border-border overflow-hidden pt-16 pb-8 mt-10">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[rgba(249,115,22,0.15)] blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-2">
            <span className="text-[1.35rem] font-extrabold text-text-primary tracking-wide">
              {profile.shortName || 'Kundan'} <span className="text-accent">Suraj</span>
            </span>
            <div className="text-[0.9rem] text-text-secondary max-w-[350px] leading-relaxed flex flex-col mt-1">
              <span className="font-bold text-text-primary/90 mb-0.5">Software Engineer</span>
              <span>Building scalable, full-stack products — end to end.</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a 
                key={s.label}
                href={s.href} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={s.label}
                className="w-11 h-11 rounded-xl bg-bg-surface-2 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent hover:bg-[rgba(249,115,22,0.1)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Credit */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem] font-medium text-text-muted">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & Built with 
            <span className="text-accent animate-pulse inline-block">❤️</span> 
            by 
            <a 
              href={profile.socials?.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-primary font-bold hover:text-accent transition-colors"
            >
              {profile.shortName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
