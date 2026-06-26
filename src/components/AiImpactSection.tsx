/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Zap, UserCheck, Scale } from 'lucide-react';

export const AiImpactSection: React.FC = () => {
  return (
    <section id="ia" className="py-20 bg-slate-100/50 dark:bg-black/40 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded bg-blue-500/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400 mb-4">
            <BrainCircuit className="h-5.5 w-5.5" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F5F5F0] sm:text-4xl">
            O Impacto da Inteligência Artificial
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            As LLMs revolucionaram a velocidade de escrita de código e especificações. Mas no mundo real, a IA é um <strong className="font-medium text-slate-950 dark:text-[#F5F5F0]">amplificador de velocidade, não de lucidez</strong>. O pensamento crítico humano continua sendo a última barreira de verdade.
          </p>
        </div>

        {/* 2-Column Comparative Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* AI Strength Card */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-[#141414] flex flex-col justify-between animate-fade-in" id="ai-strength-panel">
            <div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
                <Zap className="h-5 w-5" />
                <h3 className="font-serif font-bold text-base uppercase tracking-wider text-slate-900 dark:text-[#F5F5F0]">
                  O Copiloto Automatizável
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-6">
                A IA atua como um acelerador mecânico fantástico. Ela é imbatível na execução de tarefas repetitivas, estruturação formal rápida e varredura de dados brutos.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Geração de Rascunhos Ultra Rápida</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">Estrutura histórias de usuário no formato INVEST e escreve cenários de BDD/Gherkin em segundos a partir de anotações soltas.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Auditoria Básica de Inconsistências</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">Analisa documentos textuais de requisitos em busca de termos sabidamente vagos (&quot;rápido&quot;, &quot;fácil&quot;, &quot;seguro&quot;) com alta eficiência matemática.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Enriquecimento de Casos de Borda (Edge Cases)</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">Sugere cenários de falhas de rede, limites numéricos ou exceções técnicas que o analista humano pode ter esquecido de especificar inicialmente.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 border-t border-slate-100 dark:border-white/5 pt-4 font-mono text-[10px] text-slate-400 dark:text-blue-400/80">
              MÉTRICA DE VALOR: Eficiência de Escrita (+70% velocidade)
            </div>
          </div>

          {/* Human Strength Card */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 dark:border-white/5 dark:bg-[#141414] flex flex-col justify-between animate-fade-in" id="human-strength-panel">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-4">
                <UserCheck className="h-5 w-5" />
                <h3 className="font-serif font-bold text-base uppercase tracking-wider text-slate-900 dark:text-[#F5F5F0]">
                  O Bastião do Pensamento Crítico
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-light mb-6">
                A IA não possui agência real, empatia humana ou percepção política. Há dimensões da engenharia de requisitos onde a automação falha criticamente.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Mediação e Diplomacia Política</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">A IA não consegue convencer um Diretor Financeiro e um Diretor de Marketing a entrarem em acordo sobre o escopo de um recurso quando ambos têm metas conflitantes.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Detecção de Necessidades Ocultas (Empatia)</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">Usuários muitas vezes mentem ou ocultam dores reais por receio profissional. Apenas a presença empática e a observação direta revelam o que eles de fato necessitam.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-slate-800 dark:text-[#F5F5F0]">Responsabilidade Jurídica, Ética e de Segurança</h4>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-0.5">Uma IA não assume responsabilidade jurídica em sistemas médicos, automotivos ou aeroespaciais. O julgamento ético e a garantia de conformidade são prerrogativas humanas.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 border-t border-slate-100 dark:border-white/5 pt-4 font-mono text-[10px] text-slate-400 dark:text-emerald-400/80">
              MÉTRICA DE VALOR: Assertividade do Problema (Consenso Real)
            </div>
          </div>

        </div>

        {/* Analytical Statement Banner */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 dark:bg-[#111] dark:border dark:border-white/5" id="ai-quote-banner">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-600 text-white">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base leading-snug">O Veredito do Arquiteto</h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-zinc-400 leading-relaxed font-light">
                &quot;Codificar sem requisitos claros na era da IA é o equivalente a pisar no acelerador de um carro de corrida vendado. O fato de que a IA pode programar 10 vezes mais rápido significa apenas que você criará código inútil ou sistemas errados 10 vezes mais rápido. <strong className="text-white dark:text-[#F5F5F0] font-medium">A Engenharia de Requisitos é o volante que direciona a aceleração da IA</strong>.&quot;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
