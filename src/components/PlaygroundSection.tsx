/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { refinementChallenges } from '../data/playgroundData';
import { 
  Play, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  Check, 
  ShieldAlert, 
  Layers
} from 'lucide-react';

type Step = 'intro' | 'ambiguity' | 'metrics' | 'refinement' | 'scorecard';

export const PlaygroundSection: React.FC = () => {
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  
  // Game states
  const [identifiedAmbiguities, setIdentifiedAmbiguities] = useState<string[]>([]);
  const [selectedMetricId, setSelectedMetricId] = useState<string | null>(null);
  const [metricFeedback, setMetricFeedback] = useState<string | null>(null);
  const [isMetricCorrect, setIsMetricCorrect] = useState<boolean | null>(null);
  
  const [selectedRefinedId, setSelectedRefinedId] = useState<string | null>(null);
  const [refinedFeedback, setRefinedFeedback] = useState<string | null>(null);
  const [isRefinedCorrect, setIsRefinedCorrect] = useState<boolean | null>(null);

  const challenge = refinementChallenges[challengeIdx];

  const resetChallengeStates = () => {
    setIdentifiedAmbiguities([]);
    setSelectedMetricId(null);
    setMetricFeedback(null);
    setIsMetricCorrect(null);
    setSelectedRefinedId(null);
    setRefinedFeedback(null);
    setIsRefinedCorrect(null);
  };

  const handleStartChallenge = () => {
    resetChallengeStates();
    setCurrentStep('ambiguity');
  };

  const handleSelectAmbiguity = (term: string) => {
    if (!identifiedAmbiguities.includes(term)) {
      setIdentifiedAmbiguities([...identifiedAmbiguities, term]);
    }
  };

  const handleSelectMetric = (option: typeof challenge.metricsOptions[0]) => {
    setSelectedMetricId(option.id);
    setMetricFeedback(option.feedback);
    setIsMetricCorrect(option.isCorrect);
  };

  const handleSelectRefinement = (option: typeof challenge.refinedOptions[0]) => {
    setSelectedRefinedId(option.id);
    setRefinedFeedback(option.rationale);
    setIsRefinedCorrect(option.isCorrect);
  };

  const handleNextChallenge = () => {
    const nextIdx = (challengeIdx + 1) % refinementChallenges.length;
    setChallengeIdx(nextIdx);
    resetChallengeStates();
    setCurrentStep('intro');
  };

  // Helper to split the poor requirement string into clickable segments based on ambiguities
  const renderHighlightedText = () => {
    if (challenge.id === "sistema-rapido-seguro") {
      return (
        <p className="font-serif text-lg font-medium leading-relaxed text-slate-800 dark:text-[#F5F5F0]">
          O novo portal de e-commerce precisa ser{" "}
          <button
            onClick={() => handleSelectAmbiguity("super rápido")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("super rápido")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-super-rapido"
          >
            super rápido
          </button>{" "}
          no carregamento de{" "}
          <button
            onClick={() => handleSelectAmbiguity("todas as páginas")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("todas as páginas")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-todas-paginas"
          >
            todas as páginas
          </button>{" "}
          e{" "}
          <button
            onClick={() => handleSelectAmbiguity("totalmente imune")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("totalmente imune")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-totalmente-imune"
          >
            totalmente imune
          </button>{" "}
          a ataques de hackers.
        </p>
      );
    } else if (challenge.id === "relatorio-vendas-bom") {
      return (
        <p className="font-serif text-lg font-medium leading-relaxed text-slate-800 dark:text-[#F5F5F0]">
          O sistema deve ter um{" "}
          <button
            onClick={() => handleSelectAmbiguity("botão")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("botão")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-botao"
          >
            botão
          </button>{" "}
          que exporta relatórios de vendas em{" "}
          <button
            onClick={() => handleSelectAmbiguity("formato bom")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("formato bom")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-formato-bom"
          >
            formato bom
          </button>{" "}
          e que dê para{" "}
          <button
            onClick={() => handleSelectAmbiguity("abrir em qualquer lugar")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("abrir em qualquer lugar")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-abrir-qualquer-lugar"
          >
            abrir em qualquer lugar
          </button>
          .
        </p>
      );
    } else {
      // Challenge 3
      return (
        <p className="font-serif text-lg font-medium leading-relaxed text-slate-800 dark:text-[#F5F5F0]">
          Quero que o aplicativo tenha{" "}
          <button
            onClick={() => handleSelectAmbiguity("login inteligente")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("login inteligente")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-login-inteligente"
          >
            login inteligente
          </button>{" "}
          <button
            onClick={() => handleSelectAmbiguity("usando IA")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("usando IA")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-usando-ia"
          >
            usando IA
          </button>{" "}
          para{" "}
          <button
            onClick={() => handleSelectAmbiguity("facilitar o acesso")}
            className={`cursor-pointer px-2 py-0.5 rounded-sm font-bold transition-all border ${
              identifiedAmbiguities.includes("facilitar o acesso")
                ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 line-through decoration-rose-500/50"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400"
            }`}
            id="amb-facilitar-acesso"
          >
            facilitar o acesso
          </button>{" "}
          de pessoas idosas e evitar digitação.
        </p>
      );
    }
  };

  const allAmbiguitiesFound = identifiedAmbiguities.length === challenge.ambiguities.length;

  return (
    <section id="playground" className="py-20 bg-white dark:bg-black/10 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
            Prática de Engenharia Cognitiva
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            Simulador de Refinamento de Requisitos
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
            Pegue rascunhos reais e vagos de reuniões e aplique rigor técnico. Complete os três estágios para lapidar a especificação de acordo com o padrão ISO/IEEE 29148.
          </p>
        </div>

        {/* Playground Interactive Hub Box */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 p-6 sm:p-10 dark:bg-[#0D0D0D] shadow-xs relative overflow-hidden" id="playground-interactive-hub">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-5 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Desafio {challengeIdx + 1} de {refinementChallenges.length}:
              </span>
              <h3 className="font-serif italic font-medium text-sm sm:text-base text-slate-900 dark:text-[#F5F5F0] leading-none">
                {challenge.title.split(': ')[1]}
              </h3>
            </div>

            {/* Current Step Bubble Nav */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] font-semibold text-slate-400 dark:text-zinc-500">
              <span className={`${currentStep === 'ambiguity' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>1. Analisar</span>
              <ChevronRight className="h-3 w-3" />
              <span className={`${currentStep === 'metrics' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>2. Medir</span>
              <ChevronRight className="h-3 w-3" />
              <span className={`${currentStep === 'refinement' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>3. Especificar</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* STEP 0: INTRO/BRIEFING */}
            {currentStep === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 shadow-sm">
                    <Layers className="h-8 w-8" />
                  </div>
                </div>
                
                <h4 className="font-serif italic font-medium text-xl text-slate-900 dark:text-[#F5F5F0]">
                  {challenge.title}
                </h4>
                
                <div className="mt-4 max-w-2xl mx-auto rounded bg-rose-500/5 border border-rose-500/15 p-4 mb-6 text-center">
                  <span className="font-mono text-[9px] font-bold text-rose-500 uppercase tracking-widest block mb-1">
                    REQUISITO BRUTO ORIGINAL DO CLIENTE:
                  </span>
                  <p className="text-sm font-medium text-rose-700 dark:text-rose-400 leading-relaxed italic">
                    &quot;{challenge.poorRequirement}&quot;
                  </p>
                </div>

                <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-8">
                  {challenge.context}
                </p>

                <button
                  onClick={handleStartChallenge}
                  className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-blue-600/15 hover:bg-blue-500 transition-all duration-200 cursor-pointer"
                  id="play-start-btn"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Iniciar Sessão de Refinamento
                </button>
              </motion.div>
            )}

            {/* STEP 1: AMBIGUITY IDENTIFICATION */}
            {currentStep === 'ambiguity' && (
              <motion.div
                key="ambiguity"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="rounded border border-amber-500/15 bg-amber-500/5 p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-mono font-bold text-xs text-slate-900 dark:text-[#F5F5F0] uppercase tracking-widest">
                      Fase 1: Encontrar Ambiguidades
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed mt-1">
                      Identifique termos que estão sujeitos à interpretação de quem lê. <strong className="text-slate-800 dark:text-[#F5F5F0]">Clique nas palavras destacadas em amarelo</strong> que você considera ambíguas no texto abaixo.
                    </p>
                  </div>
                </div>

                {/* The Interactive Text Display */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-black/30 text-center shadow-sm">
                  {renderHighlightedText()}
                </div>

                {/* Score Tracker & Instructions */}
                <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-semibold text-slate-500">
                  <span>AMBIGUIDADES LOCALIZADAS:</span>
                  <span className={allAmbiguitiesFound ? 'text-emerald-500 font-bold' : 'text-blue-600 dark:text-blue-400'}>
                    {identifiedAmbiguities.length} de {challenge.ambiguities.length}
                  </span>
                </div>

                {/* Selected Ambiguities Explanation Stack */}
                {identifiedAmbiguities.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 border-t border-slate-200/60 dark:border-white/5 pt-6">
                    <h6 className="font-mono font-bold text-[10px] uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                      Análise Técnica dos Termos Clicados:
                    </h6>
                    {challenge.ambiguities.map((item, idx) => {
                      if (!identifiedAmbiguities.includes(item.term)) return null;
                      return (
                        <div key={idx} className="flex gap-3 p-3.5 rounded bg-white border border-slate-200/50 dark:border-white/5 dark:bg-[#111] text-left">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-[10px] font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 shrink-0 mt-0.5">
                            ✕
                          </span>
                          <div>
                            <strong className="text-xs font-bold text-slate-900 dark:text-[#F5F5F0] font-mono uppercase tracking-tight">
                              &quot;{item.term}&quot;
                            </strong>
                            <p className="text-xs text-slate-500 dark:text-zinc-400 font-light leading-relaxed mt-1">
                              {item.explanation}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setCurrentStep('metrics')}
                    disabled={!allAmbiguitiesFound}
                    className={`flex items-center gap-1.5 rounded-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 ${
                      allAmbiguitiesFound
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/10'
                        : 'bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-zinc-600 cursor-not-allowed'
                    }`}
                    id="play-to-metrics-btn"
                  >
                    Prosseguir para Métricas
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: METRICS SELECTION */}
            {currentStep === 'metrics' && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="rounded border border-blue-500/15 bg-blue-500/5 p-4 flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-mono font-bold text-xs text-slate-900 dark:text-[#F5F5F0] uppercase tracking-widest">
                      Fase 2: Substituir Opiniões por Métricas Técnicas
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed mt-1">
                      Qual conjunto de métricas e diretrizes resolve tecnicamente as ambiguidades que você apontou sem prescrever soluções antecipadas erradas?
                    </p>
                  </div>
                </div>

                {/* Options list */}
                <div className="space-y-3">
                  {challenge.metricsOptions.map((opt) => {
                    const isSelected = selectedMetricId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectMetric(opt)}
                        className={`w-full text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer flex gap-3 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10 ring-1 ring-emerald-500/30'
                              : 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/10 ring-1 ring-rose-500/30'
                            : 'border-slate-200 bg-white dark:border-white/5 dark:bg-black/30 hover:bg-slate-100/30 dark:hover:bg-white/5'
                        }`}
                        id={`metrics-opt-${opt.id}`}
                      >
                        <div className={`flex h-5 w-5 items-center justify-center rounded-full border shrink-0 mt-0.5 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-rose-500 bg-rose-500 text-white'
                            : 'border-slate-300 dark:border-zinc-700'
                        }`}>
                          {isSelected ? (opt.isCorrect ? <Check className="h-3 w-3" /> : <span>✕</span>) : null}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Feedback Panel */}
                {metricFeedback && (
                  <div className={`p-4 rounded border flex gap-3 text-left ${
                    isMetricCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-800 dark:text-slate-100'
                      : 'bg-rose-500/5 border-rose-500/20 text-slate-800 dark:text-slate-100'
                  }`}>
                    <div className="shrink-0 mt-0.5">
                      {isMetricCorrect ? (
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <ShieldAlert className="h-5 w-5 text-rose-500" />
                      )}
                    </div>
                    <div>
                      <strong className="font-mono font-bold text-xs uppercase tracking-widest block mb-0.5">
                        {isMetricCorrect ? 'Critério de Qualidade Aceito!' : 'Revisor de Requisitos Alerta:'}
                      </strong>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
                        {metricFeedback}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => {
                      setSelectedMetricId(null);
                      setMetricFeedback(null);
                      setIsMetricCorrect(null);
                      setCurrentStep('ambiguity');
                    }}
                    className="flex items-center gap-1.5 rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-[#141414] dark:text-zinc-400 cursor-pointer"
                    id="metrics-back-btn"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Voltar
                  </button>

                  <button
                    onClick={() => setCurrentStep('refinement')}
                    disabled={!isMetricCorrect}
                    className={`flex items-center gap-1.5 rounded-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 ${
                      isMetricCorrect
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/10'
                        : 'bg-slate-100 text-slate-400 dark:bg-[#141414] dark:text-zinc-600 cursor-not-allowed'
                    }`}
                    id="play-to-refinement-btn"
                  >
                    Prosseguir para Formulação
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: REFINED WRITING SELECTION */}
            {currentStep === 'refinement' && (
              <motion.div
                key="refinement"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="rounded border border-blue-500/15 bg-blue-500/5 p-4 flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-mono font-bold text-xs text-slate-900 dark:text-[#F5F5F0] uppercase tracking-widest">
                      Fase 3: Escrever o Requisito Técnico Refinado
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed mt-1">
                      Chegou a hora de redigir o requisito. Escolha a versão que segue as normas IEEE 29148, fornecendo atonalidade de tecnologia, atômica e ID único para rastreabilidade.
                    </p>
                  </div>
                </div>

                {/* Formulation Options */}
                <div className="space-y-4">
                  {challenge.refinedOptions.map((opt) => {
                    const isSelected = selectedRefinedId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectRefinement(opt)}
                        className={`w-full text-left p-5 rounded-sm border transition-all duration-200 cursor-pointer flex gap-4 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10 ring-1 ring-emerald-500/30'
                              : 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/10 ring-1 ring-rose-500/30'
                            : 'border-slate-200 bg-white dark:border-white/5 dark:bg-black/30 hover:bg-slate-100/30 dark:hover:bg-white/5'
                        }`}
                        id={`refined-opt-${opt.id}`}
                      >
                        <div className={`flex h-5 w-5 items-center justify-center rounded-full border shrink-0 mt-0.5 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-rose-500 bg-rose-500 text-white'
                            : 'border-slate-300 dark:border-zinc-700'
                        }`}>
                          {isSelected ? (opt.isCorrect ? <Check className="h-3 w-3" /> : <span>✕</span>) : null}
                        </div>
                        <div className="grow">
                          <span className="font-mono text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">
                            PROPOSTA DE REDAÇÃO {opt.id === 'r1' || opt.id === 'r2_1' || opt.id === 'r3_1' ? 'A' : 'B'}:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-mono bg-slate-50/60 dark:bg-[#111] p-3 rounded border border-slate-100 dark:border-white/5 whitespace-pre-line leading-relaxed">
                            {opt.text}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {refinedFeedback && (
                  <div className={`p-4 rounded border flex gap-3 text-left ${
                    isRefinedCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-800 dark:text-slate-100'
                      : 'bg-rose-500/5 border-rose-500/20 text-slate-800 dark:text-slate-100'
                  }`}>
                    <div className="shrink-0 mt-0.5">
                      {isRefinedCorrect ? (
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <ShieldAlert className="h-5 w-5 text-rose-500" />
                      )}
                    </div>
                    <div>
                      <strong className="font-mono font-bold text-xs uppercase tracking-widest block mb-0.5">
                        {isRefinedCorrect ? 'Redação Científica Validada!' : 'Alerta de Subjetividade:'}
                      </strong>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
                        {refinedFeedback}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => {
                      setSelectedRefinedId(null);
                      setRefinedFeedback(null);
                      setIsRefinedCorrect(null);
                      setCurrentStep('metrics');
                    }}
                    className="flex items-center gap-1.5 rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-[#141414] dark:text-zinc-400 cursor-pointer"
                    id="refined-back-btn"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Voltar
                  </button>

                  <button
                    onClick={() => setCurrentStep('scorecard')}
                    disabled={!isRefinedCorrect}
                    className={`flex items-center gap-1.5 rounded-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 ${
                      isRefinedCorrect
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/10'
                        : 'bg-slate-100 text-slate-400 dark:bg-[#141414] dark:text-zinc-600 cursor-not-allowed'
                    }`}
                    id="play-to-scorecard-btn"
                  >
                    Ver Placar de Qualidade
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SCORECARD / SUCCESS */}
            {currentStep === 'scorecard' && (
              <motion.div
                key="scorecard"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6"
              >
                <div className="flex justify-center mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 animate-bounce">
                    <Award className="h-7 w-7" />
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                  SEÇÃO DE REFINAMENTO CONCLUÍDA com sucesso!
                </span>
                <h4 className="font-serif font-bold text-2xl text-slate-900 dark:text-[#F5F5F0] leading-tight">
                  Requisito Homologado com Grau de Qualidade Máximo!
                </h4>

                {/* Score badge */}
                <div className="inline-flex items-center gap-1 rounded bg-emerald-500 px-4 py-1.5 text-white font-mono text-sm font-bold shadow-md shadow-emerald-500/10 my-6">
                  QA SCORE: 100 / 100
                </div>

                {/* Comparative details panel */}
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left border-y border-slate-200 dark:border-white/5 py-8 my-6">
                  
                  {/* Before */}
                  <div className="rounded bg-rose-500/5 p-4 border border-rose-500/15">
                    <span className="font-mono text-[9px] font-bold text-rose-500 uppercase tracking-wider block mb-1">
                      ANTES (CONTRATO DE ADIVINHAÇÃO):
                    </span>
                    <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed italic font-light">
                      &quot;{challenge.poorRequirement}&quot;
                    </p>
                  </div>

                  {/* After */}
                  <div className="rounded bg-emerald-500/5 p-4 border border-emerald-500/15">
                    <span className="font-mono text-[9px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      DEPOIS (CONTRATO DE VERDADE):
                    </span>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono leading-relaxed bg-white/40 dark:bg-black/40 p-2.5 rounded border border-emerald-500/10">
                      {challenge.refinedOptions.find((o) => o.isCorrect)?.text}
                    </p>
                  </div>
                </div>

                {/* Standard and metadata */}
                <div className="font-mono text-[11px] text-slate-400 dark:text-zinc-500 mb-8 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4">
                  <span>NORMATIVA: <strong>{challenge.standardRef}</strong></span>
                  <span className="hidden sm:inline-block h-1.5 w-1.5 rounded bg-slate-300 dark:bg-zinc-700" />
                  <span>RASTREABILIDADE: <strong>VERTICAL COMPLETA</strong></span>
                </div>

                {/* CTA Options */}
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleNextChallenge}
                    className="flex items-center gap-1.5 rounded-sm bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-600/10 hover:bg-blue-500 transition-all duration-200 cursor-pointer"
                    id="play-next-challenge-btn"
                  >
                    Próximo Desafio
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => {
                      resetChallengeStates();
                      setCurrentStep('intro');
                    }}
                    className="flex items-center gap-1.5 rounded-sm border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-[#141414] dark:text-zinc-400 cursor-pointer"
                    id="play-reset-btn"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Refazer Desafio
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
