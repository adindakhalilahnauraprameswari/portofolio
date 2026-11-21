import { useState } from 'react';
import { PenTool, Film, Share2 } from 'lucide-react';
import {
  DISPOSITION_STAMPS,
  HARD_SKILLS,
  PRODUCTION_TOOLS,
  ProductionTool,
  SkillFilter,
} from '../data/portfolio';

const FILTER_OPTIONS: { id: SkillFilter; label: string }[] = [
  { id: 'CANVA', label: 'Canva' },
  { id: 'CAPCUT', label: 'CapCut' },
  { id: 'INSTAGRAM', label: 'Instagram' },
  { id: 'COPYWRITING', label: 'Copywriting' },
  { id: 'BASIC DESIGN', label: 'Basic Design' },
];

function ToolIcon({ icon }: { icon: ProductionTool['icon'] }) {
  if (icon === 'draw') return <PenTool className="w-7 h-7 text-[#B85A3A] mb-3" />;
  if (icon === 'movie') return <Film className="w-7 h-7 text-[#B85A3A] mb-3" />;
  return <Share2 className="w-7 h-7 text-[#B85A3A] mb-3" />;
}

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('ALL');
  const [selectedStampId, setSelectedStampId] = useState<string>('communication');

  const toggleFilter = (filter: SkillFilter) => {
    setActiveFilter((prev) => (prev === filter ? 'ALL' : filter));
  };

  const selectedStamp = DISPOSITION_STAMPS.find((s) => s.id === selectedStampId);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#FAF3EB] text-[#1E1916] pt-16 pb-24 overflow-hidden"
    >
      {/* Wave transition from dark ink into parchment */}
      <div className="w-full -mt-16 leading-none overflow-hidden pointer-events-none">
        <svg
          className="w-full h-auto block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
          aria-hidden="true"
        >
          <path
            d="M0 0C160 60 280 20 440 20C620 20 740 70 900 70C1060 70 1200 15 1440 45L1440 80L0 80Z"
            fill="#FAF3EB"
          />
          <path
            d="M0 0C160 60 280 20 440 20C620 20 740 70 900 70C1060 70 1200 15 1440 45"
            stroke="#B85A3A"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-14 mt-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="inline-flex items-center gap-2 text-[#B85A3A] font-mono-stamp text-xs font-bold uppercase tracking-[0.2em]">
            <span aria-hidden="true">✦</span>
            <span>CHAPTER III — CRAFT &amp; CHARACTER</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-[3.5rem] leading-[1.1] text-[#1E1916] tracking-tight font-bold text-balance">
            Creative Toolkit &amp; Core Strengths
          </h2>
        </div>

        {/* Role Highlight Banner with interactive filter triggers */}
        <div className="w-full bg-[#2d2926] text-[#F7EFE6] p-6 md:p-8 comic-shadow mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[#D9724E] font-mono-stamp text-[11px] uppercase tracking-[0.2em] font-bold block mb-1">
              PRIMARY FOCUS · SPECIALIZATION
            </span>
            <h3 className="font-editorial text-2xl sm:text-[2rem] leading-tight font-semibold text-[#F7EFE6]">
              Social Media &amp; Digital Content Creation
            </h3>
          </div>

          <div
            role="group"
            aria-label="Filter creative toolkit and skills"
            className="flex flex-wrap items-center gap-2.5 font-mono-stamp text-[11px] font-bold uppercase tracking-wider"
          >
            {FILTER_OPTIONS.map((opt) => {
              const isSelected = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleFilter(opt.id)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#D9724E] text-[#181512] shadow-[2px_2px_0px_#FAF3EB] -translate-x-0.5 -translate-y-0.5'
                      : 'bg-[#221E1A] text-[#ccc6be] comic-shadow-xs hover:text-[#F7EFE6]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
            {activeFilter !== 'ALL' && (
              <button
                type="button"
                onClick={() => setActiveFilter('ALL')}
                className="px-2.5 py-1.5 text-[#ffb59c] underline underline-offset-4 hover:text-[#F7EFE6] cursor-pointer whitespace-nowrap shrink-0"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Production Tools & Hard Skills */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-editorial text-2xl font-semibold text-[#1E1916] tracking-wide uppercase border-b-2 border-[#B85A3A]/30 pb-3 flex items-center justify-between">
              <span>PRODUCTION TOOLS</span>
              <span className="font-mono-stamp text-[11px] text-[#B85A3A] font-bold">
                DIGITAL SUITE
              </span>
            </h3>

            {/* 3 Tool Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PRODUCTION_TOOLS.map((tool) => {
                const isHighlighted =
                  activeFilter === 'ALL' || activeFilter === tool.id;
                const isDirectlySelected = activeFilter === tool.id;
                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => toggleFilter(tool.id)}
                    className={`text-left bg-[#F1E5D6] p-5 comic-shadow-sm transition-all duration-200 cursor-pointer ${
                      isDirectlySelected
                        ? '-translate-y-1 ring-2 ring-[#D9724E]'
                        : isHighlighted
                          ? 'hover:-translate-y-1 opacity-100'
                          : 'opacity-45 hover:opacity-80'
                    }`}
                  >
                    <ToolIcon icon={tool.icon} />
                    <h4 className="font-editorial text-2xl font-semibold text-[#1E1916]">
                      {tool.name}
                    </h4>
                    <p className="font-body text-sm text-[#4a4641] mt-1 leading-snug">
                      {isDirectlySelected ? tool.workflowNote : tool.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Hard Skills Editorial List (01, 02, 03) */}
            <div className="flex flex-col gap-4 mt-4">
              {HARD_SKILLS.map((skill) => {
                const isMatch =
                  activeFilter === 'ALL' || skill.tags.includes(activeFilter);
                return (
                  <div
                    key={skill.num}
                    className={`bg-[#FAF3EB] p-5 comic-shadow-dark border border-[#181512]/10 flex items-start gap-4 transition-opacity duration-200 ${
                      isMatch ? 'opacity-100' : 'opacity-45'
                    }`}
                  >
                    <span className="font-editorial text-3xl text-[#B85A3A] font-bold leading-none italic select-none tabular-nums">
                      {skill.num}
                    </span>
                    <div>
                      <h4 className="font-editorial text-2xl font-semibold text-[#1E1916]">
                        {skill.title}
                      </h4>
                      <p className="font-body text-sm text-[#4a4641] mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Character & Mindset Comic Panels */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-editorial text-2xl font-semibold text-[#1E1916] tracking-wide uppercase border-b-2 border-[#B85A3A]/30 pb-3 flex items-center justify-between">
              <span>CHARACTER &amp; RESILIENCE</span>
              <span className="font-mono-stamp text-[11px] text-[#B85A3A] font-bold">
                MINDSET
              </span>
            </h3>

            {/* Principle 01 */}
            <div className="bg-[#F1E5D6] p-6 md:p-8 comic-shadow comic-interactive">
              <div className="flex items-center justify-between text-[#B85A3A] font-mono-stamp text-[11px] font-bold uppercase tracking-widest mb-3">
                <span>PRINCIPLE 01</span>
                <span>FILTER &amp; REVISE</span>
              </div>
              <h4 className="font-editorial text-2xl sm:text-[2rem] font-semibold text-[#1E1916]">
                Tahan Kritik &amp; Resilien
              </h4>
              <p className="font-body text-base text-[#4a4641] mt-3 leading-relaxed">
                Mampu menyaring komentar negatif atau masukan penonton dengan pikiran dingin dan bijak, lalu mengolahnya menjadi bahan evaluasi substantif untuk meningkatkan kualitas diri dan karya konten berikutnya.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="bg-[#F1E5D6] p-6 md:p-8 comic-shadow comic-interactive">
              <div className="flex items-center justify-between text-[#B85A3A] font-mono-stamp text-[11px] font-bold uppercase tracking-widest mb-3">
                <span>PRINCIPLE 02</span>
                <span>COURAGE &amp; EMBRACE</span>
              </div>
              <h4 className="font-editorial text-2xl sm:text-[2rem] font-semibold text-[#1E1916]">
                Kepercayaan Diri &amp; Keberanian
              </h4>
              <p className="font-body text-base text-[#4a4641] mt-3 leading-relaxed">
                Terbiasa mengatasi rasa malu dan canggung saat berekspresi maupun berbicara di hadapan publik. Menumbuhkan kesiapan tinggi untuk beradaptasi, berjejaring, dan mengambil tanggung jawab di lingkungan baru.
              </p>
            </div>

            {/* Soft Skill Ink-Stamped Controls */}
            <div className="mt-2">
              <span className="font-mono-stamp text-[11px] uppercase tracking-[0.2em] text-[#B85A3A] font-bold block mb-3">
                DISPOSITION STAMPS
              </span>
              <div className="flex flex-wrap gap-2.5 font-mono-stamp text-[11px] font-bold uppercase tracking-wider">
                {DISPOSITION_STAMPS.map((stamp) => {
                  const isActive = selectedStampId === stamp.id;
                  return (
                    <button
                      key={stamp.id}
                      type="button"
                      onClick={() => setSelectedStampId(stamp.id)}
                      aria-pressed={isActive}
                      className={`px-3.5 py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#D9724E] text-[#F7EFE6] shadow-[3px_3px_0px_#181512]'
                          : 'bg-[#FAF3EB] text-[#1E1916] shadow-[3px_3px_0px_#B85A3A] hover:bg-[#D9724E] hover:text-[#F7EFE6]'
                      }`}
                    >
                      ✦ {stamp.label}
                    </button>
                  );
                })}
              </div>
              {selectedStamp && (
                <p className="mt-4 bg-[#F1E5D6] border border-[#B85A3A]/50 px-4 py-3 font-body text-sm text-[#1E1916]">
                  <span className="font-mono-stamp text-[11px] font-bold uppercase text-[#B85A3A] mr-2">
                    {selectedStamp.label}:
                  </span>
                  {selectedStamp.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
