import { useCallback, useEffect, useState } from 'react';
import { Header, NavSectionId } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ConnectSection } from './components/ConnectSection';
import { FolioModals } from './components/FolioModals';
import { LeadershipIssue } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('story');
  const [portraitOpen, setPortraitOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<LeadershipIssue | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);

  const handleNavigate = useCallback((section: NavSectionId) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleOpenCompose = useCallback(() => {
    setComposeOpen(true);
    setActiveSection('connect');
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const sectionIds: NavSectionId[] = ['story', 'journey', 'skills', 'connect'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as NavSectionId;
            if (sectionIds.includes(id)) {
              setActiveSection(id);
            }
          }
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.05 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#161310] text-[#e9e1dc] flex flex-col">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenProfile={() => setProfileOpen(true)}
      />

      <main className="w-full pt-20 flex-1">
        <HeroSection onNavigate={handleNavigate} onOpenCompose={handleOpenCompose} />
        <StorySection onOpenPortrait={() => setPortraitOpen(true)} />
        <JourneySection onSelectIssue={(issue) => setSelectedIssue(issue)} />
        <SkillsSection />
        <ConnectSection
          composeOpen={composeOpen}
          onToggleCompose={() => setComposeOpen((prev) => !prev)}
        />
      </main>

      <FolioModals
        portraitOpen={portraitOpen}
        profileOpen={profileOpen}
        selectedIssue={selectedIssue}
        onCloseAll={() => {
          setPortraitOpen(false);
          setProfileOpen(false);
          setSelectedIssue(null);
        }}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
