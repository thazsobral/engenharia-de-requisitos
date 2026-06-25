import { introductionData } from '../data/requirementsData';
import { ArrowRight, Sparkles, HelpCircle, FileCheck, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Introduction() {
  return (
    <section id="introducao" className="py-20 border-b border-border-custom bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="h-3 w-3" />
              Conceito Fundamental
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-tight">
              {introductionData.title}
            </h1>
            
            <p className="text-xl font-medium text-accent-custom">
              {introductionData.subtitle}
            </p>
            
            <p className="text-text-secondary leading-relaxed text-lg">
              {introductionData.definition}
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {introductionData.importancePoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl bg-bg-primary border border-border-custom hover:border-accent-custom/50 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent-custom/10 text-accent-custom font-mono text-sm font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-accent-custom transition-colors">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-tertiary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Elegant SVG Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md p-6 rounded-2xl bg-bg-primary border border-border-custom relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-custom/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-text-tertiary">CICLO DE VIDA DA ER</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-success-bg text-success-custom font-bold">
                  SVG ATIVO
                </span>
              </div>

              {/* Render the generated SVG image */}
              <div className="py-4 flex flex-col items-center justify-center">
                <img 
                  src={introductionData.imageUrl} 
                  alt={introductionData.imageAlt} 
                  className="w-full h-auto max-h-[320px] rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-border-custom/80 text-center">
                <span className="text-[10px] font-mono text-text-tertiary">
                  Caminho do Arquivo: <code className="text-accent-custom font-bold">{introductionData.imageUrl}</code>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
