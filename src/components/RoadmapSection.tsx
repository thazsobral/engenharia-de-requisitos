/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { skillItems } from '../data/roadmapData';
import { Compass, Sparkles, ArrowRight, Star } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Hard' | 'Soft'>('All');

  const filteredSkills = skillItems.filter(
    (skill) => activeFilter === 'All' || skill.category === activeFilter
  );

  return (
    <section id="roadmap" className="py-20 bg-slate-100/50 dark:bg-black/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            Roadmap de Carreira: A Matriz de Competências
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            O engenheiro de requisitos moderno não é um mero programador frustrado ou um redator de e-mails. Ele possui um perfil em T equilibrando rigor técnico (<strong className="text-slate-900 dark:text-[#F5F5F0] font-medium">Hard Skills</strong>) e inteligência interpessoal profunda (<strong className="text-slate-900 dark:text-[#F5F5F0] font-medium">Soft Skills</strong>).
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12" id="roadmap-filter-tabs">
          {(['All', 'Hard', 'Soft'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10 dark:bg-white dark:text-black'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-[#F5F5F0] border border-slate-200/50 dark:border-white/5'
              }`}
              id={`roadmap-filter-${cat.toLowerCase()}`}
            >
              {cat === 'All' ? 'Todas as Competências' : cat === 'Hard' ? 'Hard Skills (Técnicas)' : 'Soft Skills (Interpessoais)'}
            </button>
          ))}
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="roadmap-grid">
          {filteredSkills.map((skill, sIdx) => {
            const isHard = skill.category === 'Hard';
            return (
              <div 
                key={sIdx}
                className={`rounded-2xl border bg-white p-6 sm:p-8 dark:bg-[#141414] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                  isHard 
                    ? 'border-slate-200/60 dark:border-white/5 hover:border-blue-500/20' 
                    : 'border-slate-200/60 dark:border-white/5 hover:border-emerald-500/20'
                }`}
                id={`skill-card-${sIdx}`}
              >
                <div>
                  {/* Card Header (Category & Title) */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`rounded-sm px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${
                      isHard 
                        ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 border border-blue-500/10' 
                        : 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/10'
                    }`}>
                      {skill.category} SKILL
                    </span>

                    <div className={isHard ? 'text-blue-500' : 'text-emerald-500'}>
                      {isHard ? <Compass className="h-4.5 w-4.5" /> : <Sparkles className="h-4.5 w-4.5" />}
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-base sm:text-lg mb-2">
                    {skill.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Strategic Importance */}
                  <div className="rounded bg-slate-50 p-4 border border-slate-100 dark:bg-black/30 dark:border-white/5 mb-6">
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-zinc-500 mb-1.5">
                      <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest block">
                        Importância Estratégica
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 font-light leading-relaxed">
                      {skill.importance}
                    </p>
                  </div>
                </div>

                {/* Practical Examples */}
                <div className="border-t border-slate-100 dark:border-white/5 pt-4">
                  <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                    Exemplos Práticos de Aplicação:
                  </h4>
                  <ul className="space-y-2">
                    {skill.examples.map((ex, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
                        <ArrowRight className={`h-3 w-3 shrink-0 mt-1.5 ${isHard ? 'text-blue-500' : 'text-emerald-500'}`} />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
