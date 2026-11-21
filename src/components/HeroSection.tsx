import { useState } from 'react';
import { ArrowDown, AudioLines, Send } from 'lucide-react';
import { NavSectionId } from './Header';

interface HeroSectionProps {
  onNavigate: (section: NavSectionId) => void;
  onOpenCompose: () => void;
}

export function HeroSection({ onNavigate, onOpenCompose }: HeroSectionProps) {
  const [pulsePaused, setPulsePaused] = useState(false);
  const [activeCity, setActiveCity] = useState<'BOTH' | 'JAKARTA' | 'TERNATE'>('BOTH');

  const cityLabel =
    activeCity === 'BOTH'
      ? 'JAKARTA · TERNATE'
      : activeCity === 'JAKARTA'
        ? 'JAKARTA BARAT · ITPLN'
        : 'TERNATE · MALUKU UTARA';

  const cycleCity = () => {
    setActiveCity((prev) => (prev === 'BOTH' ? 'JAKARTA' : prev === 'JAKARTA' ? 'TERNATE' : 'BOTH'));
    setPulsePaused(false);
  };

  return (
    <section
      id="top"
      className="relative w-full bg-[#181512] text-[#F7EFE6] overflow-hidden pt-12 md:pt-20"
    >
      {/* Atmospheric Ink Grain Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3c3835]/20 via-transparent to-[#181512]" />

      <div className="max-w-[1180px] mx-auto px-5 md:px-14 relative z-10">
        {/* Top Meta Eyebrow & Issue Stamp */}
        <div className="flex items-center justify-between gap-4 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#221E1A] text-[#D9724E] font-mono-stamp text-xs font-bold tracking-[0.2em] uppercase border border-[#B85A3A]/70 shadow-[3px_3px_0px_#B85A3A]">
            <span aria-hidden="true">✦</span>
            <span>PORTFOLIO ARCHIVE · 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono-stamp text-[11px] font-bold text-[#ccc6be] uppercase tracking-[0.25em]">
            <span>FOLIO NO. 01</span>
            <span className="text-[#B85A3A]" aria-hidden="true">/</span>
            <span>CURATED EDITION</span>
          </div>
        </div>

        {/* Monumental Editorial Hero Header */}
        <div className="pt-6 pb-12 max-w-4xl">
          <span className="block font-editorial text-xl sm:text-2xl font-semibold text-[#ffb59d] tracking-[0.18em] uppercase mb-2">
            The Story Of
          </span>
          <h1 className="font-editorial text-[2.75rem] sm:text-6xl lg:text-[5rem] text-[#F7EFE6] tracking-tight font-bold uppercase leading-[1.03] text-balance">
            adinda khalilah naura prameswari
          </h1>

          {/* Hand-drawn Calligraphic Ink Swash Underline */}
          <div className="w-full max-w-lg my-6 text-[#D9724E]">
            <svg
              className="w-full h-auto"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 520 18"
              aria-hidden="true"
            >
              <path
                d="M2 12C70 4 190 2 280 8C370 14 460 7 518 5"
                stroke="#B85A3A"
                strokeLinecap="round"
                strokeWidth="3.5"
              />
              <path
                d="M20 15C110 9 240 7 360 12C430 15 485 10 510 8"
                stroke="#D9724E"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
              <circle cx="516" cy="6" fill="#D9724E" r="3" />
            </svg>
          </div>

          <p className="font-body text-lg text-[#ccc6be] max-w-2xl mt-4 leading-relaxed font-light">
            Informatics Engineering Undergraduate at ITPLN · Social Media &amp; Content Creator · Resilient Student Leader.
          </p>

          {/* CTA Trigger Blocks */}
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('story');
              }}
              className="group inline-flex items-center gap-3 bg-[#FAF3EB] text-[#1E1916] font-mono-stamp text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 comic-shadow comic-interactive whitespace-nowrap shrink-0"
            >
              <span>Explore My Story</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <button
              type="button"
              onClick={onOpenCompose}
              className="inline-flex items-center gap-2.5 bg-[#221E1A] text-[#F7EFE6] font-mono-stamp text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 border border-[#56423c]/60 comic-shadow-dark transition-colors duration-200 hover:bg-[#383430] hover:text-[#ffb59c] cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Get In Touch</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Hero Utility Grid */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 pb-14 border-t border-[#56423c]/30 font-mono-stamp text-[11px] font-bold text-[#ccc6be]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="uppercase tracking-widest text-[#ffb59c]">FIELD OF PLAY:</span>
            <span>TECH × NARRATIVE STRATEGY</span>
          </div>

          {/* Interactive Location & Pulse Bar */}
          <button
            type="button"
            onClick={cycleCity}
            onDoubleClick={() => setPulsePaused((p) => !p)}
            title="Click to cycle coordinates"
            className="flex items-center gap-3 bg-[#1e1b18] px-4 py-2 comic-shadow-xs hover:bg-[#221f1c] transition-colors cursor-pointer"
          >
            <AudioLines className="w-4 h-4 text-[#D9724E]" />
            <span className="tracking-widest uppercase text-[#F7EFE6] whitespace-nowrap">
              {cityLabel}
            </span>
            <span className="flex items-end gap-1 h-3.5 pl-1" aria-hidden="true">
              <span
                className={`w-1 bg-[#D9724E] h-2 ${pulsePaused ? '' : 'animate-pulse'}`}
              />
              <span
                className={`w-1 bg-[#ffb59c] h-3.5 ${pulsePaused ? '' : 'animate-pulse'}`}
                style={{ animationDelay: '150ms' }}
              />
              <span
                className={`w-1 bg-[#ffb59d] h-1.5 ${pulsePaused ? '' : 'animate-pulse'}`}
                style={{ animationDelay: '300ms' }}
              />
              <span
                className={`w-1 bg-[#B85A3A] h-3 ${pulsePaused ? '' : 'animate-pulse'}`}
                style={{ animationDelay: '75ms' }}
              />
              <span
                className={`w-1 bg-[#D9724E] h-2 ${pulsePaused ? '' : 'animate-pulse'}`}
                style={{ animationDelay: '220ms' }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Organic Ink Pooling Cloud SVG Wave Divider */}
      <div className="relative w-full -mb-px leading-none overflow-hidden">
        <svg
          className="w-full h-auto block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 130"
          aria-hidden="true"
        >
          <circle cx="280" cy="85" fill="#B85A3A" r="9" />
          <circle cx="280" cy="85" fill="#FAF3EB" r="6" />
          <circle cx="280" cy="85" fill="#D9724E" r="3" />
          <path
            d="M0 130L0 70C120 70 210 92 260 92C320 92 370 20 480 20C600 20 670 65 780 65C890 65 960 30 1080 30C1210 30 1310 80 1440 68L1440 130L0 130Z"
            fill="#FAF3EB"
          />
          <path
            d="M0 70C120 70 210 92 260 92C320 92 370 20 480 20C600 20 670 65 780 65C890 65 960 30 1080 30C1210 30 1310 80 1440 68"
            stroke="#B85A3A"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
}
