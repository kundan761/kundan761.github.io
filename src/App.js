import Nav from './Components/Nav';
import Intro from './Components/Intro';
import About from './Components/About';
import OpenSource from './Components/OpenSource';
import Experience from './Components/Experience';
import Techstacks from './Components/Techstacks';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Certificates from './Components/Certificates';
import Services from './Components/Services';
import ContactForm from './Components/Contactme';
import Schedule from './Components/Schedule';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './Components/Loader';
import ScrollToTopButton from './Components/Scroll';
import Footer from './Components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // 1.8s loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-bg-primary text-text-primary font-sans overflow-x-hidden min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>
      <Nav />
      <Intro />
      <About />
      <OpenSource />
      <Experience />
      <Techstacks />
      <Projects />
      <Achievements />
      <Services />
      <Certificates />
      <ContactForm />
      <Schedule />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;