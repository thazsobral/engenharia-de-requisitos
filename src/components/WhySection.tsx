/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, FileX, ZapOff } from 'lucide-react';

export const WhySection: React.FC = () => {
  const costEscalationSteps = [
    { phase: "Requisitos", factor: "1x", desc: "Descoberta imediata. Custo apenas de reescrever uma frase ou redefinir uma regra na reunião.", color: "bg-blue-600", height: "h-16" },
    { phase: "Arquitetura", factor: "5x", desc: "Ajustar o modelo de dados ou alterar o desenho do diagrama lógico.", color: "bg-blue-500", height: "h-24" },
    { phase: "Codificação", factor: "10x", desc: "Custo de deletar código, reescrever controllers e refatorar APIs.", color: "bg-sky-500", height: "h-36" },
    { phase: "Testes (QA)", factor: "30x", desc: "Testadores precisam refazer os scripts, re-executar testes e re-testar correções.", color: "bg-indigo-500", height: "h-48" },
    { phase: "Produção", factor: "100x+", desc: "Dano real. Correções urgentes ('patchs'), parada do sistema, multas contratuais e arranhão na imagem pública.", color: "bg-rose-500 animate-pulse", height: "h-64" }
  ];

  return (
    <section id="porque" className="py-20 bg-slate-100/50 dark:bg-black/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            O Porquê: A Mitigação Pragmática do Risco
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Muitos enxergam a Engenharia de Requisitos como burocracia desnecessária que atrasa o início do código. Mas os dados empíricos mostram o contrário: <strong className="font-medium text-slate-950 dark:text-[#F5F5F0]">construir a coisa errada com alta eficiência ainda é desperdício absoluto</strong>.
          </p>
        </div>

        {/* 2 Column Layout: Boehm's Law vs Main Failure Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Boehm's Cost Curve Visualizer */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-[#141414] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif italic font-medium text-slate-900 dark:text-[#F5F5F0] text-base">
                Curva de Custo de Mudança (Lei de Boehm)
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-500 mb-6 font-light leading-relaxed">
              O custo para corrigir um requisito ambíguo aumenta exponencialmente à medida que ele avança no ciclo de vida de desenvolvimento de software.
            </p>

            {/* Custom Bar Graph */}
            <div className="flex flex-col sm:flex-row items-end justify-between gap-4 h-80 pt-6 border-b border-slate-200 dark:border-white/5">
              {costEscalationSteps.map((step, index) => (
                <div key={index} className="flex sm:flex-col items-center gap-2 w-full sm:w-16 group relative" id={`cost-step-${index}`}>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#0D0D0D] text-[#F5F5F0] text-[10px] p-2.5 rounded shadow-xl z-10 border border-white/10 font-normal leading-relaxed">
                    <span className="font-bold block text-blue-400 mb-1">Custo: {step.factor}</span>
                    {step.desc}
                  </div>
                  
                  {/* Desktop Bar */}
                  <div className="hidden sm:block w-full rounded-t transition-all duration-300 hover:brightness-110 shadow-md shadow-blue-600/5" style={{ height: '100%' }}>
                    <div className="flex flex-col h-full justify-end">
                      <div className={`w-full rounded-t ${step.color} ${step.height}`} />
                    </div>
                  </div>

                  {/* Horizontal Bar for mobile devices */}
                  <div className="sm:hidden flex items-center gap-2 w-full">
                    <span className="w-20 text-xs font-semibold text-slate-700 dark:text-zinc-300 truncate">{step.phase}</span>
                    <div className="grow bg-slate-100 dark:bg-black rounded-full h-3 overflow-hidden">
                      <div className={`h-full ${step.color}`} style={{ width: step.factor === '1x' ? '10%' : step.factor === '5x' ? '25%' : step.factor === '10%' ? '45%' : step.factor === '30%' ? '70%' : '100%' }} />
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-[#F5F5F0] sm:mt-1">{step.factor}</span>
                  <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-500 uppercase tracking-widest hidden sm:block">{step.phase}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-zinc-600">
              <span>Fases Iniciais</span>
              <span>Lançamento Comercial (Produção)</span>
            </div>
          </div>

          {/* Core Failure Causes Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-serif italic text-slate-900 dark:text-[#F5F5F0] text-lg lg:text-xl">
              As Três Maiores Patologias dos Projetos
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
              O lendário Chaos Report do Standish Group aponta consistentemente que as falhas de requisitos superam as falhas de codificação ou arquitetura pura.
            </p>

            <div className="space-y-4">
              {/* Path 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/50 bg-white/50 dark:border-white/5 dark:bg-[#111] hover:shadow-xs transition-shadow duration-200" id="pathology-scope">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-sm">Escopo Volátil (Scope Creep)</h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    A ilusão de que o software pode mudar indefinidamente sem planejamento. Requisitos claros definem barreiras negociáveis, permitindo alterações de forma realista, sem estourar custos.
                  </p>
                </div>
              </div>

              {/* Path 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/50 bg-white/50 dark:border-white/5 dark:bg-[#111] hover:shadow-xs transition-shadow duration-200" id="pathology-communication">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-pink-500/10 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400">
                  <ZapOff className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-sm">Assimetria de Expectativas</h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    O desenvolvedor programa o que leu, o analista especifica o que acha que o cliente quer, e o cliente pede o que não precisa. A engenharia de requisitos busca o consenso absoluto.
                  </p>
                </div>
              </div>

              {/* Path 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/50 bg-white/50 dark:border-white/5 dark:bg-[#111] hover:shadow-xs transition-shadow duration-200" id="pathology-untestable">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <FileX className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-sm">Requisitos Incompletos ou Incongruentes</h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    A ausência de requisitos não-funcionais (velocidade, segurança, concorrência). O sistema funciona perfeitamente na máquina do dev, mas explode ao receber 100 acessos simultâneos.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
