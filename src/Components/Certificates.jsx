import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  Eye,
  ShieldCheck,
  X,
} from 'lucide-react';
import { certificatesData } from '../data/certificates';

function CertificateCard({ cert, index, onView }) {
  // Extract year from date string (e.g. "Aug — Sep 2022" -> "2022")
  const yearMatch = cert.date.match(/\d{4}$/);
  const year = yearMatch ? yearMatch[0] : '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-border bg-bg-card hover:border-border-accent hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300 overflow-hidden flex flex-col text-left"
    >
      <button
        type="button"
        onClick={() => onView(cert)}
        aria-label={`Preview ${cert.title}`}
        className="relative block w-full overflow-hidden focus:outline-none"
      >
        <div className="relative h-56 sm:h-64 bg-bg-surface-2 overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white shadow-lg">
              <Eye className="w-4 h-4" /> Click to view
            </span>
          </div>



          {/* Top-left tag */}
          {cert.tag && (
            <span className="absolute top-6 left-6 backdrop-blur-md bg-black/50 border border-white/10 text-white px-3 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase inline-flex items-center gap-1.5 shadow-sm pointer-events-none">
              <Award className="w-3.5 h-3.5 text-accent" /> {cert.tag}
            </span>
          )}

          {/* Top-right year badge */}
          {year && (
            <span className="absolute top-6 right-6 bg-accent text-white px-3 py-1.5 rounded-full text-[0.75rem] font-bold shadow-sm pointer-events-none">
              {year}
            </span>
          )}
        </div>
      </button>

      <div className="p-6 flex flex-col gap-3 flex-1 relative z-10">
        {/* Ambient glow behind text */}
        <div className="pointer-events-none absolute -bottom-24 -right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Issuer Pill */}
        <div className="mb-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent bg-accent/10 text-accent text-[0.72rem] font-bold tracking-[0.12em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> {cert.issuer}
          </span>
        </div>

        <div className="relative z-10">
          <h3 className="font-sans font-bold text-[1.1rem] text-text-primary leading-snug tracking-tight">
            {cert.title}
          </h3>
        </div>

        <p className="text-[0.8rem] text-text-secondary leading-relaxed relative z-10 line-clamp-2 mt-1">
          {cert.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-2 text-[0.7rem] text-text-muted relative z-10">
          {cert.date && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {cert.date}
            </span>
          )}
          {cert.credentialId && (
            <span className="inline-flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[900px] w-full max-h-[90vh] rounded-2xl bg-bg-card border border-border shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border bg-bg-surface-2">
              <div>
                <h4 className="font-sans font-extrabold text-base text-text-primary">
                  {cert.title}
                </h4>
                <p className="text-[0.8rem] text-text-muted mt-1 font-medium">
                  {cert.issuer} <span className="mx-1.5">•</span> {cert.date}
                </p>
              </div>
              <div className="flex items-center gap-3">

                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-bg-card border border-border hover:bg-bg-surface-3 hover:text-text-primary inline-flex items-center justify-center text-text-secondary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="overflow-auto p-4 sm:p-8 bg-bg-primary flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-w-full h-auto rounded-lg shadow-lg border border-border"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Certificates = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-[100px] max-sm:py-[80px]" id="certificates">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Certifications
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Licenses & <span className="text-accent">Certifications.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75] mt-2">
            Validating my expertise through industry-recognized credentials and continuous learning.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 text-left">
          {certificatesData.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} onView={setActive} />
          ))}
        </div>

      </div>

      <Lightbox cert={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Certificates;
