import { Gavel, Sparkles, Users, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP_ISSUES, LeadershipIssue } from '../data/portfolio';

interface JourneySectionProps {
  onSelectIssue: (issue: LeadershipIssue) => void;
}

function IssueIcon({ icon }: { icon: LeadershipIssue['icon'] }) {
  if (icon === 'gavel') return <Gavel className="w-7 h-7 text-[#D9724E] mb-3" />;
  if (icon === 'cleaning') return <Sparkles className="w-7 h-7 text-[#D9724E] mb-3" />;
  return <Users className="w-7 h-7 text-[#D9724E] mb-3" />;
}

export function JourneySection({ onSelectIssue }: JourneySectionProps) {
  return (
    <section
      id="journey"
      className="relative w-full bg-[#181512] text-[#F7EFE6] pt-20 pb-28 overflow-hidden"
    >
      {/* Inverted Organic Cloud Divider */}
      <div className="absolute top-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          className="w-full h-auto block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 90"
          aria-hidden="true"
        >
          <path
            d="M0 0L0 55C140 55 240 15 380 15C520 15 620 65 740 65C860 65 960 20 1100 20C1240 20 1340 60 1440 50L1440 0L0 0Z"
            fill="#FAF3EB"
          />
          <path
            d="M0 55C140 55 240 15 380 15C520 15 620 65 740 65C860 65 960 20 1100 20C1240 20 1340 60 1440 50"
            stroke="#B85A3A"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-14 relative z-10 pt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[#D9724E] font-mono-stamp text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <span aria-hidden="true">✦</span>
              <span>CHAPTER II — FIELD NOTES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-[3.5rem] leading-[1.1] text-[#F7EFE6] tracking-tight font-bold text-balance">
              Leadership &amp; Organizational Roots
            </h2>
          </div>
          <p className="font-body text-base text-[#ccc6be] max-w-md leading-relaxed">
            Fondasi kedisiplinan, manajemen tim, dan tanggung jawab yang dibentuk melalui peran aktif di lingkungan pesantren dan sekolah.
          </p>
        </div>

        {/* 3 Editorial Issue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_ISSUES.map((issue) => (
            <button
              key={issue.id}
              type="button"
              onClick={() => onSelectIssue(issue)}
              className="group text-left bg-[#221E1A] p-6 sm:p-8 flex flex-col justify-between comic-shadow comic-interactive cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D9724E]"
            >
              <div className="w-full">
                <div className="flex items-center justify-between pb-4 border-b border-[#B85A3A]/40 font-mono-stamp text-[11px] font-bold">
                  <span className="text-[#D9724E] tracking-widest uppercase">
                    {issue.issueNumber}
                  </span>
                  <span className="text-[#ccc6be] tracking-wider uppercase">
                    {issue.organization}
                  </span>
                </div>

                <div className="mt-6 mb-4">
                  <IssueIcon icon={issue.icon} />
                  <h3 className="font-editorial text-2xl sm:text-[2rem] leading-tight font-semibold text-[#F7EFE6] group-hover:text-[#ffb59c] transition-colors">
                    {issue.title}
                  </h3>
                  <p className="font-mono-stamp text-[11px] font-bold text-[#ffb59d] uppercase tracking-widest mt-1.5">
                    {issue.subtitle}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 font-body text-sm text-[#ccc6be] mt-6 leading-relaxed">
                  {issue.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#B85A3A] font-bold text-xs mt-1" aria-hidden="true">
                        ✦
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-8 pt-4 border-t border-[#56423c]/30 flex items-center justify-between font-mono-stamp text-[11px] font-bold text-[#ccc6be]">
                <span>{issue.metricLabel}</span>
                <span className="inline-flex items-center gap-1 text-[#D9724E]">
                  <span>{issue.metricValue}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
