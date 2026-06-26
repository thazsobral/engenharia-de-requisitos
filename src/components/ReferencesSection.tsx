/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ExternalLink, Bookmark } from 'lucide-react';
import { ReferenceItem } from '../types';

export const ReferencesSection: React.FC = () => {
  const references: ReferenceItem[] = [
    {
      id: "ieee-29148",
      title: "ISO/IEC/IEEE 29148:2018 - Systems and software engineering — Life cycle processes — Requirements engineering",
      author: "IEEE Standards Association / ISO / IEC",
      type: "Normativa Internacional (Padrão de Indústria)",
      description: "O documento de referência primária global que define a terminologia de Engenharia de Requisitos, processos de ciclo de vida, estruturas recomendadas para SRS (Software Requirements Specification) e critérios formais de verificação de qualidade dos enunciados.",
      link: "https://standards.ieee.org/standard/29148-2018.html"
    },
    {
      id: "babok",
      title: "BABOK® Guide v3 - A Guide to the Business Analysis Body of Knowledge",
      author: "IIBA - International Institute of Business Analysis",
      type: "Guia de Práticas Globais (Corpo de Conhecimento)",
      description: "O guia padrão para análise de negócios global. Detalha intensivamente as fases de planejamento da análise, elicitação ativa, gerenciamento do ciclo de vida dos requisitos, análise da estratégia corporativa e avaliação do valor de soluções de software.",
      link: "https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/"
    },
    {
      id: "ireb-cpre",
      title: "IREB CPRE Syllabus - Certified Professional for Requirements Engineering",
      author: "International Requirements Engineering Board",
      type: "Ementa de Certificação Internacional",
      description: "Programa acadêmico de maior prestígio na Europa para engenheiros de requisitos. Foca fortemente em modelagem visual, engenharia cognitiva agnóstica de frameworks e rigor metodológico na tradução de necessidades de negócios complexos.",
      link: "https://www.ireb.org/en/cpre/"
    },
    {
      id: "agile-invest",
      title: "INVEST Criteria for Agile User Stories",
      author: "Bill Wake (2003)",
      type: "Metodologia Ágil Recomendada",
      description: "Conjunto de heurísticas de qualidade aplicadas a Histórias de Usuário ágeis. Define que uma boa história deve ser Independent (Independente), Negotiable (Negociável), Valuable (Valiosa), Estimable (Estimável), Small (Pequena) e Testable (Testável).",
      link: "https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/"
    }
  ];

  return (
    <section id="referencias" className="py-20 bg-white dark:bg-black/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 mb-4">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-3xl">
            Corpo de Conhecimento e Referências Bibliográficas
          </h2>
          <p className="mt-3 text-slate-500 dark:text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
            A engenharia de requisitos é uma ciência de software consolidada por décadas de pesquisa acadêmica e refinamento industrial. Abaixo estão listados os pilares oficiais de referência utilizados na construção deste portal.
          </p>
        </div>

        {/* References list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="references-list-grid">
          {references.map((ref) => (
            <div 
              key={ref.id}
              className="rounded-2xl border border-slate-200/60 bg-slate-50/40 p-6 dark:border-white/5 dark:bg-[#141414] flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200"
              id={`ref-card-${ref.id}`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bookmark className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-mono text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest block">
                    {ref.type}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-[#F5F5F0] leading-tight mb-1">
                  {ref.title}
                </h3>
                
                <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 block mb-3 font-medium">
                  Autor / Editor: {ref.author}
                </span>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-6">
                  {ref.description}
                </p>
              </div>

              {ref.link && (
                <div className="border-t border-slate-100 dark:border-white/5 pt-4 mt-auto">
                  <a 
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 group"
                    id={`ref-link-${ref.id}`}
                  >
                    Acessar Publicação Oficial
                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
