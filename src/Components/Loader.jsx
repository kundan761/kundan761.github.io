import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center"
    >
      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        {/* Glowing spinning curve */}
        <div className="absolute inset-0 rounded-full border-t-[3px] border-t-accent animate-spin drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
        
        {/* Static center letter */}
        <span className="text-2xl font-black text-text-primary font-sans">K</span>
      </div>
      
      {/* Loading text */}
      <div className="text-text-secondary tracking-[0.2em] uppercase text-[0.8rem] font-bold">
        LOADING PORTFOLIO
      </div>
    </motion.div>
  );
};

export default Loader;
