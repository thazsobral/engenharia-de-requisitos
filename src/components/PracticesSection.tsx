/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { practicePhases } from '../data/techniquesData';
import { Target, Lightbulb, ClipboardCheck } from 'lucide-react';

export const PracticesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('elicitacao');

  const activePhase = practicePhases.find((p) => p.id === activeTabId) || practicePhases[0];

  return (
    <section id="pratica" className="py-20 bg-white dark:bg-black/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            Prática e Eficiência: As 4 Disciplinas Fundamentais
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            A engenharia de requisitos não é uma ação única no início do projeto, mas sim uma <strong className="font-medium text-slate-900 dark:text-[#F5F5F0]">esteira contínua composta por quatro grandes disciplinas cíclicas</strong> de engenharia de software.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 border-b border-slate-100 dark:border-white/5 pb-6" id="practices-tabs">
          {practicePhases.map((phase) => {
            const isActive = activeTabId === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActiveTabId(phase.id)}
                className={`px-4 py-2.5 rounded-sm text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10 dark:bg-white dark:text-black'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-[#F5F5F0]'
                }`}
                id={`tab-${phase.id}`}
              >
                {phase.title.split('. ')[1]}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              id={`practice-content-${activeTabId}`}
            >
              
              {/* Left Column: Core Definition & Goals */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                    {activePhase.title}
                  </span>
                  <h3 className="font-serif italic font-medium text-2xl text-slate-900 dark:text-[#F5F5F0] mt-1 leading-tight">
                    {activePhase.subTitle}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
                    {activePhase.description}
                  </p>
                </div>

                {/* Objectives Checklist */}
                <div className="rounded-2xl bg-slate-50 p-6 dark:bg-[#141414] border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                    <Target className="h-4.5 w-4.5" />
                    <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-[#F5F5F0]">
                      Objetivos Primários da Fase:
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {activePhase.objectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300 font-light leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600 dark:bg-black/30 dark:text-blue-400 mt-0.5">
                          {oIdx + 1}
                        </span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Key Techniques & Quality Criteria */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Techniques Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="h-4.5 w-4.5" />
                    <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-[#F5F5F0]">
                      Técnicas Comprovadas de Indústria:
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {activePhase.techniques.map((tech, tIdx) => (
                      <div key={tIdx} className="rounded-xl border border-slate-200/60 bg-white p-4 dark:border-white/5 dark:bg-[#111] hover:shadow-xs transition-shadow duration-200">
                        <h5 className="font-serif font-bold text-sm text-slate-900 dark:text-[#F5F5F0]">
                          {tech.name}
                        </h5>
                        <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                          {tech.description}
                        </p>
                        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded bg-slate-50 px-2.5 py-1 text-[10px] font-mono font-medium text-slate-500 dark:bg-black/40 dark:text-zinc-400 border border-slate-100 dark:border-white/5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <strong>QUANDO USAR:</strong> {tech.whenToUse}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Metrics */}
                <div className="border-t border-slate-100 dark:border-white/5 pt-6">
                  <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400">
                    <ClipboardCheck className="h-4.5 w-4.5" />
                    <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-[#F5F5F0]">
                      Critérios de Qualidade da Fase:
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activePhase.qualityCriteria.map((crit, cIdx) => (
                      <span key={cIdx} className="rounded bg-purple-500/5 px-3 py-1.5 text-xs font-semibold text-purple-700 dark:bg-purple-500/10 dark:text-purple-300 border border-purple-500/10">
                        {crit}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
