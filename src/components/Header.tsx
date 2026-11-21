import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

export type NavSectionId = 'story' | 'journey' | 'skills' | 'connect';

interface HeaderProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  onOpenProfile: () => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string }[] = [
  { id: 'story', label: 'STORY' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'connect', label: 'CONNECT' },
];

export function Header({ activeSection, onNavigate, onOpenProfile }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: NavSectionId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#100e0b]/90 backdrop-blur-md border-b border-[#56423c]/25">
      <div className="h-20 max-w-[1180px] mx-auto px-5 md:px-14 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileOpen(false);
          }}
          className="flex items-center gap-3.5 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#D9724E] focus-visible:outline-offset-4"
        >
          <ResilientImage
            src={ASSETS.brandMark}
            alt="Naura Prameswari Brand Mark"
            className="h-8 w-8 object-contain"
            fallbackLabel="NP"
            fallbackSub=""
          />
          <span className="font-editorial text-xl sm:text-2xl font-semibold text-[#F7EFE6] tracking-wide whitespace-nowrap group-hover:text-[#ffb59c] transition-colors">
            Naura Prameswari
          </span>
        </a>

        {/* Desktop Nav & Avatar */}
        <div className="flex items-center gap-5 shrink-0">
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1.5 bg-[#FAF3EB] p-1 comic-shadow-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`font-mono-stamp text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-[#181512] ${
                    isActive
                      ? 'bg-[#db7450] text-[#511500]'
                      : 'text-[#1E1916] hover:bg-[#221f1c] hover:text-[#e9e1dc]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={onOpenProfile}
            aria-label="Open Naura Prameswari archival profile"
            title="View Profile Summary"
            className="w-9 h-9 rounded-full overflow-hidden comic-shadow-xs cursor-pointer transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#D9724E] focus-visible:outline-offset-2 shrink-0"
          >
            <ResilientImage
              src={ASSETS.avatar}
              alt="Naura Prameswari Profile"
              className="w-full h-full object-cover"
              fallbackLabel="NP"
              fallbackSub=""
            />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-[#FAF3EB] text-[#1E1916] comic-shadow-xs cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#FAF3EB] border-t-2 border-[#B85A3A] px-5 py-4 flex flex-col gap-2"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`font-mono-stamp text-xs font-bold tracking-[0.15em] uppercase px-4 py-3 transition-colors ${
                  isActive
                    ? 'bg-[#db7450] text-[#511500] comic-shadow-xs'
                    : 'text-[#1E1916] hover:bg-[#F1E5D6]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
