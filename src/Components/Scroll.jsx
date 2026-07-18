import React, { useState, useEffect } from 'react';
import {BsArrowUpCircle} from "react-icons/bs"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on scroll position
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowButton = scrollTop > 200; // Show button after scrolling 200 pixels
      setIsVisible(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-7 right-7 flex items-center justify-center w-11 h-11 bg-accent text-white rounded-full z-[500] transition-all duration-300 shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:-translate-y-[3px] hover:bg-accent-light ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <BsArrowUpCircle className="w-[22px] h-[22px]" />
    </button>
  );
};

export default ScrollToTopButton;
