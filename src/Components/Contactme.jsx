import React from 'react';
import { Mail, PhoneCall, MapPin, MessageCircle,Send  } from 'lucide-react';
import { FaGithub as Github, FaLinkedinIn as Linkedin } from 'react-icons/fa6';
import { profile } from '../data/profile';

const socials = [
  { label: 'GitHub', icon: Github, href: profile.socials.github },
  { label: 'LinkedIn', icon: Linkedin, href: profile.socials.linkedin },
  { label: 'WhatsApp', icon: MessageCircle, href: profile.socials.whatsapp },
  { label: 'Email', icon: Mail, href: `mailto:${profile.email}` },
];

const Contactme = () => {
  return (
    <section className="py-[100px] max-sm:py-[80px]" id="contact">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">

        <div className="bg-bg-card border border-border rounded-[32px] overflow-hidden relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-[55%] max-md:after:w-full after:h-full after:bg-[radial-gradient(ellipse_at_80%_40%,rgba(249,115,22,0.12)_0%,transparent_65%)] after:pointer-events-none p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-[1]">

            {/* ── Left: Info ── */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-7 self-start">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
                Let's Build
              </span>
              <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-[1.2] text-text-primary mb-4">
                Have an <span className="text-accent">awesome<br />project idea</span>?<br />
                Let's discuss it.
              </h2>
              <p className="text-[0.9rem] text-text-secondary leading-[1.7] mb-9 max-w-[380px]">
                Reach out for full-stack development work, collaborations,
                freelance opportunities, or just a good technical conversation.
              </p>
              <div className="mt-8 space-y-4 text-[0.88rem]">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition"
                >
                  <span className="w-10 h-10 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-[18px] h-[18px]" />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone?.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition"
                >
                  <span className="w-10 h-10 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0">
                    <PhoneCall className="w-[18px] h-[18px]" />
                  </span>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 text-text-secondary">
                  <span className="w-10 h-10 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-[18px] h-[18px]" />
                  </span>
                  {profile.location}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-bg-surface-2 border border-border text-text-secondary hover:text-text-primary hover:border-accent hover:bg-[rgba(249,115,22,0.1)] transition"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="bg-bg-surface-2 border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-center shadow-sm">
              <form
                className="flex flex-col gap-4"
                action="https://formsubmit.co/kundankumarsuraj761@gmail.com"
                method="POST"
                id="contact-form"
              >
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-name" className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-text-muted">Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="bg-[rgba(255,255,255,0.04)] border border-border rounded-md p-[12px_16px] text-[0.88rem] text-text-primary font-sans outline-none transition-colors duration-300 focus:border-[rgba(249,115,22,0.5)] focus:bg-[rgba(249,115,22,0.04)] placeholder:text-text-muted"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-email" className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-text-muted">Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="bg-[rgba(255,255,255,0.04)] border border-border rounded-md p-[12px_16px] text-[0.88rem] text-text-primary font-sans outline-none transition-colors duration-300 focus:border-[rgba(249,115,22,0.5)] focus:bg-[rgba(249,115,22,0.04)] placeholder:text-text-muted"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-subject" className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-text-muted">Subject</label>
                  <input
                    id="cf-subject"
                    type="text"
                    name="_subject"
                    placeholder="What's this about?"
                    className="bg-[rgba(255,255,255,0.04)] border border-border rounded-md p-[12px_16px] text-[0.88rem] text-text-primary font-sans outline-none transition-colors duration-300 focus:border-[rgba(249,115,22,0.5)] focus:bg-[rgba(249,115,22,0.04)] placeholder:text-text-muted"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-message" className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-text-muted">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals."
                    className="bg-[rgba(255,255,255,0.04)] border border-border rounded-md p-[12px_16px] text-[0.88rem] text-text-primary font-sans outline-none transition-colors duration-300 min-h-[110px] resize-none focus:border-[rgba(249,115,22,0.5)] focus:bg-[rgba(249,115,22,0.04)] placeholder:text-text-muted"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 bg-accent text-white border-none rounded-full p-[14px_32px] text-[0.95rem] font-bold cursor-pointer transition-all duration-300 mt-2 self-end max-sm:w-full hover:bg-accent-light hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]"
                  id="contact-send-btn"
                >
                  Send message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contactme;
