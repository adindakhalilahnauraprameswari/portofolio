import { useState } from 'react';
import { ChevronDown, Maximize2 } from 'lucide-react';
import { ACADEMIC_PATHWAY, ASSETS } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface StorySectionProps {
  onOpenPortrait: () => void;
}

export function StorySection({ onOpenPortrait }: StorySectionProps) {
  const [expandedId, setExpandedId] = useState<string>('itpln');

  return (
    <section id="story" className="relative w-full bg-[#FAF3EB] text-[#1E1916] py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-5 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Framed Portrait Card + Quick Bio Rubric */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={onOpenPortrait}
              aria-label="Inspect full editorial portrait plate"
              className="group relative text-left bg-[#F1E5D6] p-4 comic-shadow comic-interactive cursor-pointer focus-visible:outline-2 focus-visible:outline-[#181512]"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-[#2d2926]">
                <ResilientImage
                  src={ASSETS.portrait}
                  alt="A. K. Naura Prameswari editorial portrait"
                  className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition duration-500 ease-out"
                  fallbackLabel="A. K. NAURA"
                  fallbackSub="PLATE 01 · VOL. 26"
                />
                <div className="absolute top-3 left-3 bg-[#181512]/90 text-[#F7EFE6] font-mono-stamp text-[11px] font-bold px-2.5 py-1 tracking-widest uppercase comic-shadow-xs">
                  PLATE 01 · VOL. 26
                </div>
                <div className="absolute bottom-3 right-3 bg-[#FAF3EB]/95 text-[#1E1916] p-1.5 opacity-0 group-hover:opacity-100 transition-opacity comic-shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-1 border-t-2 border-[#B85A3A]/40 mt-3">
                <div className="flex items-center justify-between font-mono-stamp text-xs font-bold text-[#1E1916]">
                  <span className="tracking-wider uppercase">A. K. NAURA PRAMESWARI</span>
                  <span className="text-[#B85A3A]">✦ 07</span>
                </div>
                <p className="font-mono-stamp text-[11px] font-bold text-[#4a4641] tracking-wider uppercase">
                  BORN 31.08.2007 · TERNATE, INDONESIA
                </p>
              </div>
            </button>

            {/* Quick Bio Rubric Card */}
            <div className="mt-6 bg-[#FAF3EB] p-6 comic-shadow-dark border border-[#181512]/10 flex flex-col gap-3 font-mono-stamp text-[11px]">
              <div className="flex items-start justify-between gap-4 pb-2 border-b border-dashed border-[#B85A3A]/40">
                <span className="text-[#B85A3A] uppercase font-bold tracking-widest shrink-0">
                  BASED IN
                </span>
                <span className="text-[#1E1916] font-bold text-right">
                  Duri Kosambi, Cengkareng, Jakarta Barat
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 pb-2 border-b border-dashed border-[#B85A3A]/40">
                <span className="text-[#B85A3A] uppercase font-bold tracking-widest shrink-0">
                  CURRENTLY
                </span>
                <span className="text-[#1E1916] font-bold text-right">
                  S1 Teknik Informatika · ITPLN
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-[#B85A3A] uppercase font-bold tracking-widest shrink-0">
                  FOCUS
                </span>
                <span className="text-[#1E1916] font-bold text-right">
                  Tech, Content Creation &amp; Organization
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Academic Pathway */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[#B85A3A] font-mono-stamp text-xs font-bold uppercase tracking-[0.2em] mb-2">
                <span aria-hidden="true">✦</span>
                <span>CHAPTER I — THE NARRATIVE</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-[3.5rem] leading-[1.1] text-[#1E1916] tracking-tight font-bold text-balance">
                Bridging Technology, Creativity &amp; Discipline.
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-body text-lg text-[#1E1916]/90 leading-relaxed">
              <p>
                Lulusan SMA Negeri 8 Kota Ternate, Jurusan IPA yang kini sedang menempuh pendidikan S1 Teknik Informatika di Institut Teknologi PLN (ITPLN). Tumbuh dari perpaduan kekayaan alam Maluku Utara hingga dinamika metropolitan ibu kota, membawa perspektif yang unik dan adaptif.
              </p>
              <p>
                Memiliki ketertarikan mendalam pada dunia teknologi dan komputer, serta semangat untuk terus belajar, mengembangkan kemampuan, dan memperluas wawasan di bidang informatika serta visual narrative communication.
              </p>
            </div>

            {/* Academic Pathway Timeline */}
            <div className="mt-6 pt-6 border-t-2 border-[#B85A3A]/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-editorial text-2xl font-semibold text-[#1E1916] tracking-wider uppercase">
                  ACADEMIC PATHWAY
                </h3>
                <span className="font-mono-stamp text-[11px] font-bold text-[#B85A3A] uppercase tracking-widest">
                  CHRONICLES
                </span>
              </div>

              <div className="relative pl-6 flex flex-col gap-5 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#B85A3A]">
                {ACADEMIC_PATHWAY.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <div key={item.id} className="relative group">
                      <span
                        className={`absolute -left-[27px] top-2 w-4 h-4 rounded-full border-2 border-[#FAF3EB] comic-shadow-xs transition-colors ${
                          item.active ? 'bg-[#D9724E]' : 'bg-[#2d2926]'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                        aria-expanded={isExpanded}
                        className={`w-full text-left transition-transform duration-200 cursor-pointer ${
                          item.active
                            ? 'bg-[#F1E5D6] p-4 comic-shadow-sm hover:-translate-x-0.5'
                            : 'bg-[#FAF3EB] border border-[#B85A3A]/30 p-3.5 shadow-[3px_3px_0px_#B85A3A] hover:-translate-x-0.5'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono-stamp text-[11px] text-[#B85A3A] font-bold">
                          <span>{item.period}</span>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className="bg-[#D9724E] text-[#F7EFE6] px-2 py-0.5 uppercase tracking-wider text-[10px]">
                                {item.badge}
                              </span>
                            )}
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-[#B85A3A] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </div>
                        <h4 className="font-editorial text-xl sm:text-2xl font-semibold text-[#1E1916] mt-1">
                          {item.institution}
                        </h4>
                        <p className="font-body text-sm sm:text-base text-[#4a4641] mt-0.5">
                          {item.subtitle}
                        </p>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-dashed border-[#B85A3A]/40 text-sm text-[#1E1916]/85 font-body leading-relaxed">
                            <p>{item.details}</p>
                            <p className="mt-1.5 font-mono-stamp text-[10px] font-bold uppercase tracking-widest text-[#B85A3A]">
                              LOCATION · {item.location}
                            </p>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
