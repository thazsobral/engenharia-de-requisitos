/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhySection } from './components/WhySection';
import { WhatIsSection } from './components/WhatIsSection';
import { TimelineSection } from './components/TimelineSection';
import { PracticesSection } from './components/PracticesSection';
import { AiImpactSection } from './components/AiImpactSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Award, Code, BookOpen, Heart, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor active sections for scroll navigation highlighting
  useEffect(() => {
    const sections = ['hero', 'porque', 'oquee', 'timeline', 'pratica', 'ia', 'playground', 'roadmap'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also monitor scroll for Back to Top button
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0A0A0A] dark:text-[#F5F5F0] transition-colors duration-300 flex flex-col font-sans">
        
        {/* Sticky Header with Navigation */}
        <Header activeSection={activeSection} />

        {/* Core Content Body */}
        <main className="grow">
          
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: O Porquê */}
          <WhySection />

          {/* Section 3: O Que é */}
          <WhatIsSection />

          {/* Section 4: Evolução Histórica */}
          <TimelineSection />

          {/* Section 5: Prática e Eficiência */}
          <PracticesSection />

          {/* Section 6: Impacto da IA */}
          <AiImpactSection />

          {/* Section 7: Playground Interativo */}
          <PlaygroundSection />

          {/* Section 8: Roadmap de Carreira */}
          <RoadmapSection />

          {/* Section 9: Referências Bibliográficas */}
          <ReferencesSection />

        </main>

        {/* Global Footer */}
        <footer className="bg-white border-t border-slate-200/80 py-12 dark:bg-black dark:border-white/5 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Philosophical citation block */}
            <div className="max-w-2xl mx-auto">
              <span className="font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                Manifesto de Compromisso Técnico
              </span>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-light leading-relaxed italic">
                &quot;Software de alta performance não começa na IDE. Começa na escuta empática e na formulação rigorosa da realidade de negócios.&quot;
              </p>
            </div>

            {/* Copyright & Signoff */}
            <p className="text-[10px] text-slate-400 dark:text-zinc-500 pt-2 flex items-center justify-center gap-1">
              <span>Desenvolvido por ThazSobral para fins de Educação Tecnológica Prática e Interativa. © 2026.</span>
            </p>

          </div>
        </footer>

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-500/10"
            aria-label="Voltar para o topo"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        )}

      </div>
    </ThemeProvider>
  );
}
