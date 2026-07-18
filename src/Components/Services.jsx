import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../data/services';

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-border bg-bg-card hover:border-border-accent transition-all duration-300 overflow-hidden text-left"
    >
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/80 to-orange-400/40 opacity-0 blur-[40px] group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />

      <div className="relative p-7">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent inline-flex items-center justify-center text-accent shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Icon className="w-5 h-5" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
        </div>

        <h3 className="mt-6 font-sans font-extrabold text-xl text-text-primary tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-[0.85rem] text-text-secondary leading-relaxed">{service.description}</p>

        <ul className="mt-6 space-y-2.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[0.8rem] text-text-secondary">
              <span className="w-4 h-4 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center shrink-0">
                <Check className="w-[10px] h-[10px]" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section className="py-[100px] max-sm:py-[80px]" id="services">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Services
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            How I can <span className="text-accent">help your team.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75] mt-2">
            Plug me in as an extension of your engineering team — from greenfield builds to scale-out work.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {servicesData.map((srv, i) => (
            <ServiceCard key={srv.title} service={srv} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
