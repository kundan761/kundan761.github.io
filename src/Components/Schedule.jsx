import React from 'react';
import { Clock, Video, Sparkles, ArrowUpRight, CalendarClock } from 'lucide-react';
import { profile } from '../data/profile';

const Schedule = () => {
  const calLink = profile.socials.cal;
  const calText = calLink.replace('https://', '');

  return (
    <section className="pb-[100px] max-sm:pb-[80px]" id="schedule">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">
        <div className="bg-bg-card border border-border rounded-[32px] overflow-hidden relative p-8 md:p-14 after:content-[''] after:absolute after:right-0 after:top-0 after:w-[55%] max-md:after:w-full after:h-full after:bg-[radial-gradient(ellipse_at_80%_40%,rgba(249,115,22,0.12)_0%,transparent_65%)] after:pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-[1]">

            {/* Left Side */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-7 self-start">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
                SCHEDULE
              </span>
              <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-[1.2] text-text-primary mb-4 tracking-tight">
                Prefer a quick call? <br /><span className="text-accent">Pick a time.</span>
              </h2>
              <p className="text-[0.9rem] text-text-secondary leading-[1.7] mb-9 max-w-[380px]">
                Book a 15- or 30-minute slot straight on my calendar — we'll cover scope, timeline, and how I can help.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white border-none rounded-full py-3.5 px-6 text-[0.9rem] font-bold leading-none cursor-pointer transition-all duration-300 hover:bg-accent-light hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]"
                >
                  <CalendarClock className="w-4 h-4 shrink-0" />
                  <span className="leading-none">Book on Cal.com</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-text-muted hover:text-accent text-[0.85rem] font-mono transition-colors"
                >
                  {calText}
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-3.5 relative z-[1]">

              {/* Card 1 */}
              <div className="bg-bg-surface-2 border border-border rounded-2xl p-4 md:p-5 flex gap-4 items-start shadow-sm transition-colors hover:border-[rgba(249,115,22,0.3)]">
                <span className="w-9 h-9 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-text-primary text-[0.88rem] font-bold mb-0.5">15 or 30 minutes</h4>
                  <p className="text-text-secondary text-[0.8rem] leading-[1.35]">Pick the slot that fits — short intro or a deeper scoping call.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-bg-surface-2 border border-border rounded-2xl p-4 md:p-5 flex gap-4 items-start shadow-sm transition-colors hover:border-[rgba(249,115,22,0.3)]">
                <span className="w-9 h-9 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-text-primary text-[0.88rem] font-bold mb-0.5">Zoom / Google Meet</h4>
                  <p className="text-text-secondary text-[0.8rem] leading-[1.35]">Calendar invite includes the link automatically.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-bg-surface-2 border border-border rounded-2xl p-4 md:p-5 flex gap-4 items-start shadow-sm transition-colors hover:border-[rgba(249,115,22,0.3)]">
                <span className="w-9 h-9 rounded-xl bg-bg-surface-2 border border-border inline-flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-text-primary text-[0.88rem] font-bold mb-0.5">Free consultation</h4>
                  <p className="text-text-secondary text-[0.8rem] leading-[1.35]">Walk through your idea, scope, and how I can help.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
