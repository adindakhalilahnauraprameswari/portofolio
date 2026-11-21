import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ASSETS, LeadershipIssue } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';
import { NavSectionId } from './Header';

interface FolioModalsProps {
  portraitOpen: boolean;
  profileOpen: boolean;
  selectedIssue: LeadershipIssue | null;
  onCloseAll: () => void;
  onNavigate: (section: NavSectionId) => void;
}

export function FolioModals({
  portraitOpen,
  profileOpen,
  selectedIssue,
  onCloseAll,
  onNavigate,
}: FolioModalsProps) {
  const isAnyOpen = portraitOpen || profileOpen || selectedIssue !== null;

  useEffect(() => {
    if (!isAnyOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseAll();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isAnyOpen, onCloseAll]);

  if (!isAnyOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#100e0b]/85 backdrop-blur-xs"
      onClick={onCloseAll}
    >
      {/* Portrait Lightbox */}
      {portraitOpen && (
        <div
          className="relative w-full max-w-lg bg-[#FAF3EB] text-[#1E1916] p-5 comic-shadow border-2 border-[#B85A3A]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#B85A3A]/35">
            <span className="font-mono-stamp text-xs font-bold uppercase tracking-widest text-[#B85A3A]">
              PLATE 01 · VOL. 26 — ARCHIVAL PORTRAIT
            </span>
            <button
              type="button"
              onClick={onCloseAll}
              aria-label="Close portrait lightbox"
              className="w-8 h-8 flex items-center justify-center bg-[#181512] text-[#F7EFE6] hover:bg-[#D9724E] hover:text-[#181512] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden bg-[#221E1A]">
            <ResilientImage
              src={ASSETS.portrait}
              alt="A. K. Naura Prameswari full editorial portrait"
              className="w-full h-full object-cover object-center"
              fallbackLabel="A. K. NAURA"
              fallbackSub="PLATE 01 · VOL. 26"
            />
          </div>
          <div className="pt-4 flex items-center justify-between font-mono-stamp text-[11px] font-bold uppercase text-[#4a4641]">
            <span>A. K. NAURA PRAMESWARI</span>
            <span>BORN 31.08.2007 · TERNATE</span>
          </div>
        </div>
      )}

      {/* Quick Profile Bio Modal */}
      {profileOpen && (
        <div
          className="relative w-full max-w-md bg-[#FAF3EB] text-[#1E1916] p-6 sm:p-8 comic-shadow border-2 border-[#B85A3A]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#B85A3A]/35">
            <span className="font-mono-stamp text-xs font-bold uppercase tracking-widest text-[#B85A3A]">
              ARCHIVAL DOSSIER
            </span>
            <button
              type="button"
              onClick={onCloseAll}
              aria-label="Close profile dossier"
              className="w-8 h-8 flex items-center justify-center bg-[#181512] text-[#F7EFE6] hover:bg-[#D9724E] hover:text-[#181512] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 overflow-hidden border-2 border-[#B85A3A] shrink-0">
              <ResilientImage
                src={ASSETS.avatar}
                alt="Naura Prameswari avatar"
                className="w-full h-full object-cover"
                fallbackLabel="NP"
                fallbackSub=""
              />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#1E1916] leading-tight">
                Adinda Khalilah Naura Prameswari
              </h3>
              <p className="font-mono-stamp text-[11px] font-bold uppercase text-[#B85A3A] mt-1">
                S1 TEKNIK INFORMATIKA · ITPLN
              </p>
            </div>
          </div>

          <p className="font-body text-sm text-[#4a4641] leading-relaxed mb-5">
            Mahasiswa Teknik Informatika di Institut Teknologi PLN yang memadukan ketelitian analitis dengan kreativitas konten digital, copywriting, serta pengalaman kepemimpinan organisasi.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                onCloseAll();
                onNavigate('story');
              }}
              className="bg-[#181512] text-[#F7EFE6] font-mono-stamp text-xs font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-[#D9724E] hover:text-[#181512] transition-colors cursor-pointer"
            >
              Read Full Story
            </button>
            <button
              type="button"
              onClick={() => {
                onCloseAll();
                onNavigate('connect');
              }}
              className="bg-[#F1E5D6] text-[#1E1916] border border-[#B85A3A] font-mono-stamp text-xs font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-[#D9724E] hover:text-[#F7EFE6] transition-colors cursor-pointer"
            >
              Connect
            </button>
          </div>
        </div>
      )}

      {/* Leadership Issue Field Notes Modal */}
      {selectedIssue && (
        <div
          className="relative w-full max-w-xl bg-[#221E1A] text-[#F7EFE6] p-6 sm:p-8 comic-shadow border-2 border-[#B85A3A]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#B85A3A]/40">
            <div className="font-mono-stamp text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="text-[#D9724E]">{selectedIssue.issueNumber}</span>
              <span className="text-[#56423c]">/</span>
              <span className="text-[#ccc6be]">{selectedIssue.organization}</span>
            </div>
            <button
              type="button"
              onClick={onCloseAll}
              aria-label="Close issue field notes"
              className="w-8 h-8 flex items-center justify-center bg-[#FAF3EB] text-[#1E1916] hover:bg-[#D9724E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <h3 className="font-editorial text-3xl font-bold text-[#F7EFE6]">
            {selectedIssue.title}
          </h3>
          <p className="font-mono-stamp text-xs font-bold uppercase tracking-widest text-[#ffb59d] mt-1">
            {selectedIssue.subtitle}
          </p>

          <p className="font-body text-base text-[#e9e1dc] mt-4 leading-relaxed">
            {selectedIssue.fieldReflection}
          </p>

          <div className="mt-6 pt-5 border-t border-[#56423c]/40">
            <span className="font-mono-stamp text-[11px] font-bold uppercase tracking-widest text-[#D9724E] block mb-3">
              KEY FIELD TAKEAWAYS
            </span>
            <ul className="flex flex-col gap-2.5 font-body text-sm text-[#ccc6be]">
              {selectedIssue.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#D9724E] font-bold text-xs mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-[#56423c]/40 flex items-center justify-between font-mono-stamp text-xs font-bold">
            <span className="text-[#ccc6be]">{selectedIssue.metricLabel}</span>
            <span className="text-[#D9724E]">{selectedIssue.metricValue}</span>
          </div>
        </div>
      )}
    </div>
  );
}
