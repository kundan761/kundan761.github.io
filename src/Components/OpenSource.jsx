import React, { useState } from 'react';
import { openSourceData } from '../data/opensource';
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink, MoveUpRight, Package, Check, Copy } from 'lucide-react';

const OpenSource = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(openSourceData.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-[100px] max-sm:py-[80px]" id="open-source">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">

        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full py-1.5 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-accent uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
            Open Source
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-text-primary mb-4">
            Sharing code the <span className="text-accent">community uses.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-[640px] leading-[1.75]">
            Side projects I've built and shipped publicly — lightweight tools that
            solve real developer pain points.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-7 items-start">

          {/* Left: package info + features */}
          <div className="flex flex-col gap-4">
            <div className="bg-bg-card border border-border rounded-lg p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-[46px] h-[46px] rounded-md bg-[rgba(249,115,22,0.12)] flex items-center justify-center text-accent">
                    <Package size={22} />
                  </div>
                  <div>
                    <div className="text-[1.05rem] font-bold text-text-primary mb-0.5">{openSourceData.packageName}</div>
                    <div className="text-[0.78rem] text-text-muted">{openSourceData.tags}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-[#22c55e] rounded-full px-3 py-1 text-[0.72rem] font-semibold before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#22c55e]">Active</span>
              </div>
              <div className="flex items-center justify-between bg-[rgba(0,0,0,0.3)] border border-border rounded-md px-4 py-2.5">
                <span className="font-mono text-[0.85rem] text-text-secondary">
                  <span className="text-accent">$</span> {openSourceData.installCommand}
                </span>
                <button
                  className="bg-bg-surface-2 border border-border rounded-md px-2.5 py-1.5 text-text-secondary cursor-pointer text-[0.8rem] transition-colors duration-300 hover:border-accent hover:text-accent"
                  onClick={handleCopy}
                  id="os-copy-btn"
                  aria-label="Copy install command"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {openSourceData.features.map(({ icon: Icon, title, desc }) => (
                <div className="flex items-start gap-3.5 bg-bg-card border border-border rounded-md p-[18px] transition-colors duration-300 hover:border-border-accent" key={title}>
                  <div className="w-9 h-9 rounded-md bg-[rgba(249,115,22,0.1)] flex items-center justify-center text-accent shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-bold text-text-primary mb-1">{title}</div>
                    <div className="text-[0.8rem] text-text-secondary leading-[1.5]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal code card + links */}
          <div className="flex flex-col gap-5 sticky top-[90px] max-md:static">
            <div className="bg-[#0d1117] border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-border bg-[#161b22]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-[7px]">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[0.75rem] text-text-muted font-mono">{openSourceData.fileName}</span>
                </div>
                <span className="text-[0.72rem] text-text-muted font-mono">{openSourceData.packageName} · {openSourceData.version}</span>
              </div>
              <div className="p-6 font-mono text-[0.82rem] leading-[1.9] text-[#e6edf3] overflow-x-auto whitespace-pre scrollbar-hide">
                {openSourceData.codeLines.map(({ text, cls }, i) => (
                  <div key={i} className={cls || ""}>
                    {text || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center justify-end gap-3 mt-1">
              <button onClick={() => window.open(openSourceData.githubLink)} className="inline-flex items-center justify-center gap-2 bg-bg-surface-2 text-text-primary border border-border rounded-lg py-2.5 px-5 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-[1px]">
                <AiFillGithub className="w-4 h-4" /> Source Code
              </button>
              <button onClick={() => window.open(openSourceData.npmLink)} className="inline-flex items-center justify-center gap-2 bg-accent text-white border-none rounded-lg py-2.5 px-5 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 hover:bg-accent-light hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)]">
                <ExternalLink className="w-4 h-4" /> View on npm <MoveUpRight className='w-4 h-4' />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenSource;
