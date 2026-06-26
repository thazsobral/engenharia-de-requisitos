/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon, Award, GraduationCap } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'porque', label: 'O Porquê' },
    { id: 'oquee', label: 'O Que é' },
    { id: 'timeline', label: 'Evolução' },
    { id: 'pratica', label: 'Prática' },
    { id: 'ia', label: 'Impacto da IA' },
    { id: 'playground', label: 'Playground' },
    { id: 'roadmap', label: 'Carreira' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#0D0D0D]/85 transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand */}
        <div 
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          id="header-logo"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-600 text-white font-bold text-xs tracking-tighter">
            REQ
          </div>
          <div>
            <h1 className="font-serif italic text-lg sm:text-xl tracking-tight text-slate-900 dark:text-[#F5F5F0]">
              Requirement Architect
            </h1>
            <p className="font-mono text-[9px] uppercase tracking-widest text-blue-600 dark:text-blue-500 font-medium">
              Portal do Conhecimento
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-100 text-blue-600 dark:bg-white/5 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-[#F5F5F0]'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 transition-colors duration-200 shadow-sm"
            aria-label="Toggle dark mode"
            id="theme-toggle-btn"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 text-slate-800" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
