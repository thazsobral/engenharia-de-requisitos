import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg-secondary/80 backdrop-blur-md border-b border-border-custom transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent-custom/10 text-accent-custom rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-text-primary">
                ER: <span className="text-accent-custom">Educação</span>
              </span>
              <p className="text-[10px] text-text-tertiary font-mono -mt-1 hidden sm:block">
                SENIOR KNOWLEDGE HUB
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-text-secondary hover:text-accent-custom transition-colors duration-150"
              >
                {section.label}
              </a>
            ))}

            <div className="h-4 w-px bg-border-custom" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-tertiary transition-all duration-150"
              aria-label="Alternar tema"
              id="theme-toggle"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-tertiary transition-all duration-150"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-tertiary transition-all"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border-custom bg-bg-secondary px-4 pt-2 pb-4 space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-accent-custom hover:bg-bg-tertiary transition-all"
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
