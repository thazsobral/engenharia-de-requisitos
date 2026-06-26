/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Cpu, Database, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-radial from-slate-100/40 via-transparent to-transparent dark:from-[#121212]/30 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Decorative Geometry from Sophisticated Dark theme */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none hidden lg:block text-white">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M10 50 L90 50 M50 10 L50 90" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="mx-auto max-w-5xl text-center">
        
        {/* Floating Cognitive Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 border border-blue-500/20 shadow-xs mb-8"
        >
          <Brain className="h-4 w-4" />
          <span className="font-mono tracking-wider uppercase">Guia Interativo</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl text-slate-900 dark:text-[#F5F5F0] leading-tight"
        >
          A base invisível de todo <br />
          <span className="inline-block font-serif italic bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Software de Sucesso
          </span>
        </motion.h2>

        {/* Subtitle / Philosophy statement */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-zinc-400 font-light leading-relaxed"
        >
          A Engenharia de Requisitos não se resume a preencher templates de casos de uso, escrever post-its coloridos ou operar softwares de gestão de backlog. Ela é uma <strong className="font-medium text-slate-900 dark:text-[#F5F5F0]">disciplina intelectual pura, focada na formulação rigorosa de problemas e na tradução cognitiva</strong> de necessidades humanas em contratos lógicos de engenharia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.getElementById('playground');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group flex items-center gap-2 rounded-sm bg-blue-600 text-white dark:bg-white dark:text-black hover:bg-blue-700 dark:hover:bg-[#F5F5F0] px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-200"
            id="cta-playground"
          >
            Experimentar Playground
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('oquee');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="rounded-sm border border-slate-200 bg-white/60 dark:border-white/20 dark:bg-transparent dark:text-zinc-300 text-slate-700 px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-slate-50 dark:hover:bg-white/5"
            id="cta-learn"
          >
            Explorar Fundamentos
          </button>
        </motion.div>

        {/* Core Pillars Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-slate-200/50 pt-12 dark:border-white/5 text-left"
        >
          <div className="flex gap-4 rounded p-4 hover:bg-slate-100/40 dark:hover:bg-white/5 transition-colors duration-200" id="pillar-agnostic">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif italic font-medium text-slate-900 dark:text-[#F5F5F0] text-sm">Ferramenta-Agnóstica</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                As técnicas de raciocínio, elicitação e especificação aplicam-se igualmente ao Scrum, Kanban, Cascata, COBOL ou IA.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded p-4 hover:bg-slate-100/40 dark:hover:bg-white/5 transition-colors duration-200" id="pillar-science">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif italic font-medium text-slate-900 dark:text-[#F5F5F0] text-sm">Análise de Domínio</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Antes de escrever código, modelamos a verdade operacional do negócio. Requisitos blindam o código contra a suposição.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded p-4 hover:bg-slate-100/40 dark:hover:bg-white/5 transition-colors duration-200" id="pillar-cognitive">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-purple-500/10 text-purple-600 dark:bg-purple-600/15 dark:text-purple-400">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif italic font-medium text-slate-900 dark:text-[#F5F5F0] text-sm">Escudo Contra IA-Slop</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                A IA pode codificar em milissegundos, mas ela precisa de requisitos logicamente perfeitos e à prova de contradição para operar.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
