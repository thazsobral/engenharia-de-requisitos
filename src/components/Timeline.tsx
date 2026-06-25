import { timelineData } from '../data/requirementsData';
import { History, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Timeline() {
  return (
    <section id="evolucao" className="py-20 border-b border-border-custom bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
            <History className="h-3.5 w-3.5" />
            História & Evolução
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            A Linha do Tempo da Engenharia de Requisitos
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Como a forma de entender e documentar o software evoluiu de processos ultra-rígidos para ciclos ágeis e assistidos por IA.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border-custom -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border-custom sm:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12 relative">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-stretch justify-between relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer Spacing Filler for Desktop Grid */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Timeline Central Icon/Node */}
                  <div className="absolute left-4 sm:left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="h-8 w-8 rounded-full bg-bg-secondary border-2 border-accent-custom flex items-center justify-center shadow-sm">
                      <Calendar className="h-3.5 w-3.5 text-accent-custom" />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0">
                    <div className="p-6 rounded-2xl bg-bg-secondary border border-border-custom shadow-sm hover:shadow-md hover:border-accent-custom/40 transition-all duration-300 relative group">
                      
                      {/* Decorative timeline bracket */}
                      <div className={`absolute top-3 w-3 h-3 bg-bg-secondary border-t border-l border-border-custom transform rotate-45 hidden sm:block ${
                        isEven ? '-right-[7px] border-t border-r border-l-0 rotate-45' : '-left-[7px]'
                      }`} />

                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display font-black text-2xl sm:text-3xl text-accent-custom tracking-tight">
                          {item.year}
                        </span>
                        <div className="h-4 w-px bg-border-custom" />
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-bg-tertiary text-text-secondary">
                          {item.phase}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent-custom transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-border-custom/60 flex items-start gap-2 text-xs text-text-tertiary font-sans bg-bg-primary/50 p-2.5 rounded-lg">
                        <ArrowRight className="h-3.5 w-3.5 text-accent-custom shrink-0 mt-0.5" />
                        <span>{item.details}</span>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
