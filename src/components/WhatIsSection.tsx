/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Info } from 'lucide-react';

export const WhatIsSection: React.FC = () => {
  return (
    <section id="oquee" className="py-20 bg-white dark:bg-black/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            O Que é: A Definição Baseada em Normas Globais
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            De acordo com o padrão internacional <strong className="font-semibold text-slate-900 dark:text-[#F5F5F0]">ISO/IEC/IEEE 29148:2018</strong>, um requisito é um enunciado que expressa uma necessidade de negócio com suas restrições associadas, servindo como base técnica inequívoca para o ciclo de desenvolvimento.
          </p>
        </div>

        {/* Highlighted Quote Box */}
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-slate-50 dark:bg-[#141414] p-6 sm:p-8 border border-slate-200/60 dark:border-white/5 mb-16 shadow-xs" id="quote-box">
          <div className="absolute top-4 left-4 text-6xl text-indigo-200 dark:text-white/5 font-serif leading-none select-none pointer-events-none">
            “
          </div>
          <div className="relative pl-6">
            <p className="font-serif font-medium text-base sm:text-lg text-slate-800 dark:text-[#F5F5F0] italic leading-relaxed">
              &quot;Requisitos não são 'coisas' que estão guardadas na gaveta do cliente esperando para serem coletadas. Eles são construídos de forma colaborativa. Engenharia de Requisitos é um processo sistemático de elicitar, analisar, especificar, verificar e gerenciar as necessidades dos stakeholders.&quot;
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-0.5 w-8 bg-blue-600 dark:bg-blue-500" />
              <span className="font-mono text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">
                Karl Wiegers, Autor de Software Requirements
              </span>
            </div>
          </div>
        </div>

        {/* Classification grid (Functional, Non-Functional, Constraint) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Requisitos Funcionais */}
          <div className="flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-white/5 dark:bg-[#111] hover:border-blue-500/30 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/2" id="card-functional">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
              Capacidades Operacionais
            </span>
            <h3 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-lg mb-3">
              Requisitos Funcionais (RF)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Descrevem explicitamente as <strong className="font-medium text-slate-800 dark:text-[#F5F5F0]">ações, comportamentos e cálculos</strong> que o sistema deve ser capaz de realizar. São as funções que o software executa em resposta a entradas externas.
            </p>
            
            <div className="mt-auto space-y-2">
              <div className="rounded bg-slate-50 dark:bg-black/30 p-3 border dark:border-white/5">
                <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-zinc-500 block mb-0.5">EXEMPLO TÁTICO:</span>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed italic">
                  &quot;O sistema deve permitir que o administrador cancele assinaturas ativas de usuários, emitindo o estorno proporcional em até 2 minutos.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Requisitos Não-Funcionais */}
          <div className="flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-white/5 dark:bg-[#111] hover:border-emerald-500/30 transition-all duration-200 hover:shadow-md hover:shadow-emerald-500/2" id="card-non-functional">
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
              Atributos de Qualidade
            </span>
            <h3 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-lg mb-3">
              Requisitos Não-Funcionais (RNF)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
              Definem os <strong className="font-medium text-slate-800 dark:text-[#F5F5F0]">atributos de qualidade e critérios de performance</strong> sob os quais o sistema deve operar (ex: disponibilidade, usabilidade, segurança, velocidade, escalabilidade).
            </p>
            
            <div className="mt-auto space-y-2">
              <div className="rounded bg-slate-50 dark:bg-black/30 p-3 border dark:border-white/5">
                <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-zinc-500 block mb-0.5">EXEMPLO TÁTICO:</span>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed italic">
                  &quot;Os payloads de busca do catálogo devem ser transmitidos via gzip e o tempo de carregamento de conteúdo visual (LCP) não deve passar de 1.8 segundos.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Restrições de Design e Negócio */}
          <div className="flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-white/5 dark:bg-[#111] hover:border-purple-500/30 transition-all duration-200 hover:shadow-md hover:shadow-purple-500/2" id="card-constraint">
            <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-1">
              Limites Inegociáveis
            </span>
            <h3 className="font-serif font-bold text-slate-900 dark:text-[#F5F5F0] text-lg mb-3">
              Restrições (RC)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
              São as <strong className="font-medium text-slate-800 dark:text-[#F5F5F0]">limitações técnicas, de hardware, regulatórias ou de escopo físico</strong> que reduzem as opções de design dos desenvolvedores de forma compulsória.
            </p>
            
            <div className="mt-auto space-y-2">
              <div className="rounded bg-slate-50 dark:bg-black/30 p-3 border dark:border-white/5">
                <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-zinc-500 block mb-0.5">EXEMPLO TÁTICO:</span>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed italic">
                  &quot;O banco de dados de informações médicas dos pacientes deve ser hospedado exclusivamente em território soberano nacional, em conformidade com a LGPD.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ISO / IEEE Metadata banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border border-slate-200/50 bg-slate-50/50 dark:border-white/5 dark:bg-[#141414]" id="iso-banner">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
            <Info className="h-5 w-5" />
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed text-center sm:text-left">
            A unificação desses três pilares de forma estruturada é o que compõe o <strong className="text-slate-800 dark:text-[#F5F5F0]">Software Requirements Specification (SRS)</strong>, servindo como documento de maturidade nível 3 de acordo com o CMMI e normas ISO 12207.
          </p>
          <a
            href="https://standards.ieee.org/standard/29148-2018.html"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 group shrink-0"
            id="ieee-standard-link"
          >
            Ver norma IEEE 29148
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
