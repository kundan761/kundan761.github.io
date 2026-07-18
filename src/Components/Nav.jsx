/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import myphoto from "../Images/nav-icon.png";
import { profile, navLinks as NAV_LINKS } from '../data/profile';
import { Moon, Sun } from 'lucide-react';

const Nav = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme !== 'light';
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = "Home";
      for (const link of NAV_LINKS) {
        if (link.href === '#home') {
          if (window.scrollY < 100) {
            currentSection = "Home";
          }
          continue;
        }
        
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = link.label;
          }
        }
      }
      
      setActiveLink(prev => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = profile.resumeUrl;
    link.setAttribute('download', 'Kundan_Kumar_Suraj_Resume');
    link.setAttribute('id', 'resume-link-nav');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out flex justify-center ${scrolled ? "pt-4 px-4 sm:px-8" : "pt-0 px-0"}`}>
        <div className={`w-full max-w-[1200px] h-[68px] flex items-center justify-between transition-all duration-300 ease-in-out ${scrolled ? "bg-bg-primary/85 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-border rounded-[2rem] px-5 sm:px-8" : "bg-transparent border border-transparent rounded-none px-6 md:px-10"}`}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 cursor-pointer no-underline" onClick={() => handleLinkClick("Home")}>
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-accent shrink-0">
              <img src={myphoto} alt="Kundan Suraj" className="w-full h-full object-cover" />
              <span className="absolute bottom-[2px] right-[2px] w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-bg-primary animate-[pulse-green_2s_ease-in-out_infinite]" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[0.95rem] font-bold text-text-primary tracking-wide">Kundan Suraj</span>
              <span className="text-[0.62rem] font-medium text-text-secondary tracking-[0.1em] uppercase mt-0.5">Software Eng.</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden min-[900px]:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`block px-4 py-[7px] text-[0.88rem] font-medium rounded-full transition-all duration-200 relative border ${activeLink === label ? "!text-text-primary bg-border border-border" : "text-text-secondary hover:text-text-primary hover:bg-border border-transparent"}`}
                  onClick={() => handleLinkClick(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-border hover:opacity-80 text-text-secondary hover:text-text-primary transition-colors border border-border"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              id="resume-btn-nav"
              className="inline-flex items-center gap-2 bg-accent text-white border-none rounded-full px-5 py-2 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 tracking-wide hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
              onClick={handleDownload}
              aria-label="Download Resume"
            >
              &darr; Resume
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex min-[900px]:hidden flex-col gap-[5px] cursor-pointer p-1.5 bg-transparent border-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-[2px] bg-text-secondary rounded-sm transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-[22px] h-[2px] bg-text-secondary rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-[2px] bg-text-secondary rounded-sm transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed left-0 right-0 bg-bg-primary/95 backdrop-blur-xl p-4 pb-6 z-[990] flex-col gap-1 transition-all duration-300 ease-in-out ${menuOpen ? "flex min-[900px]:hidden" : "hidden"} ${scrolled ? "top-[95px] rounded-2xl mx-4 sm:mx-8 border border-border shadow-2xl" : "top-[68px] rounded-none mx-0 border-b border-border"}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`block px-4 py-3 text-base font-medium rounded-md transition-all ${activeLink === label ? "!text-text-primary bg-border" : "text-text-secondary hover:text-text-primary hover:bg-border"}`}
            onClick={() => handleLinkClick(label)}
          >
            {label}
          </a>
        ))}
        <button
          className="mt-3 w-full inline-flex justify-center items-center gap-2 bg-accent text-white border-none rounded-full px-5 py-2.5 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 tracking-wide hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
          onClick={handleDownload}
        >
          &darr; Resume
        </button>
      </div>
    </>
  );
};

export default Nav;
