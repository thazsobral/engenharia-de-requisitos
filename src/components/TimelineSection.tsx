/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { timelineEvents } from '../data/timelineData';
import { FileText, GitMerge, MessageSquare, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(3); // Default to AI Era as it's the current one!

  const iconMap: Record<string, React.ComponentType<any>> = {
    FileText: FileText,
    GitMerge: GitMerge,
    MessageSquare: MessageSquare,
    Cpu: Cpu,
  };

  const currentEvent = timelineEvents[selectedEventIndex];
  const CurrentIcon = iconMap[currentEvent.iconName] || FileText;

  return (
    <section id="timeline" className="py-20 bg-slate-100/50 dark:bg-black/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            A Linha do Tempo dos Requisitos
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Como o papel do engenheiro de requisitos evoluiu nas últimas décadas: de um escrivão rígido no topo do Cascata a um <strong className="font-medium text-slate-950 dark:text-[#F5F5F0]">curador estratégico e validador cognitivo</strong> na era da Inteligência Artificial.
          </p>
        </div>

        {/* Timeline Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Navigation Tracks (Left Column or Top) */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-white/5 hidden md:block" />

            {timelineEvents.map((event, index) => {
              const IconComponent = iconMap[event.iconName] || FileText;
              const isSelected = selectedEventIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedEventIndex(index)}
                  className={`flex items-start md:items-center gap-4 text-left p-4 rounded border transition-all duration-300 relative z-10 w-full ${
                    isSelected
                      ? 'border-blue-500 bg-white dark:bg-[#111] shadow-md shadow-blue-500/5 ring-1 ring-blue-500/30'
                      : 'border-slate-200 bg-white/40 dark:border-white/5 dark:bg-[#141414]/40 hover:bg-white/80 dark:hover:bg-[#141414] hover:border-slate-300 dark:hover:border-white/10'
                  }`}
                  id={`timeline-btn-${index}`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded transition-colors duration-300 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-500 dark:bg-black/30 dark:text-zinc-500'
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                        {event.year}
                      </span>
                      {isSelected && (
                        <span className="rounded bg-blue-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
                          Ativo
                        </span>
                      )}
                    </div>
                    <h3 className={`font-serif italic font-medium text-sm sm:text-base mt-0.5 leading-tight ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-zinc-300'
                    }`}>
                      {event.period}
                    </h3>
                  </div>

                  <ArrowRight className={`h-4 w-4 shrink-0 transition-all duration-300 hidden md:block ${
                    isSelected ? 'text-blue-600 dark:text-blue-400 translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Details Panel (Right Column with framer-motion) */}
          <div className="lg:col-span-7" id="timeline-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEventIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-[#141414] shadow-sm"
              >
                {/* Era details header */}
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5 dark:border-white/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
                    <CurrentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest block">
                      {currentEvent.year} • Evolução de Processos
                    </span>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 dark:text-[#F5F5F0] leading-tight">
                      {currentEvent.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative */}
                <div className="mt-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                    {currentEvent.description}
                  </p>
                </div>

                {/* Key Characteristics list */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-serif italic font-medium text-xs text-slate-900 dark:text-[#F5F5F0] uppercase tracking-wider">
                    Características do Período:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentEvent.characteristics.map((char, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role of Requirements Callout */}
                <div className="mt-8 rounded bg-slate-50 border border-slate-100 p-4 dark:bg-black/30 dark:border-white/5">
                  <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                    Filosofia do Requisito nesta Era
                  </span>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 font-light leading-relaxed italic">
                    &quot;{currentEvent.roleOfRequirements}&quot;
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
