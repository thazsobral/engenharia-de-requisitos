import { useState } from 'react';
import { aiEraData } from '../data/requirementsData';
import { Cpu, Sparkles, Copy, Check, Terminal, Play } from 'lucide-react';

export default function AIEra() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ia" className="py-20 border-b border-border-custom bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
              <Cpu className="h-3.5 w-3.5 animate-pulse" />
              Revolução Tecnológica
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Engenharia de Requisitos na Era da Inteligência Artificial
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              A Inteligência Artificial Generativa e os Modelos de Linguagem de Grande Porte (LLMs) estão mudando radicalmente como os analistas de negócios descobrem, validam e refinam especificações de sistemas, trazendo velocidade e eliminando pontos de ambiguidade.
            </p>
          </div>
          
          <div className="lg:col-span-4 p-5 rounded-2xl bg-bg-secondary border border-border-custom/80 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-accent-custom/10 text-accent-custom rounded-xl shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-text-tertiary">MÉTRICA DE IMPACTO</span>
              <p className="text-2xl font-bold text-text-primary font-display">Até 10x Mais Rápido</p>
              <p className="text-xs text-text-secondary">Na redação e refinamento de histórias de usuários.</p>
            </div>
          </div>
        </div>

        {/* AI Capabilities Cards with Interactive Prompts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiEraData.map((feature) => (
            <div 
              key={feature.id}
              className="p-6 rounded-2xl bg-bg-secondary border border-border-custom hover:border-accent-custom/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header & Badges */}
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded uppercase bg-bg-tertiary text-text-secondary">
                    {feature.roleInER}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    feature.impact === 'Inovador' 
                      ? 'bg-success-bg text-success-custom'
                      : 'bg-accent-custom/10 text-accent-custom'
                  }`}>
                    Impacto {feature.impact}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-custom transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>

                {/* Practical Prompt Console (Interactive) */}
                <div className="p-4 rounded-xl bg-bg-primary border border-border-custom font-mono text-xs space-y-3 relative overflow-hidden">
                  <div className="flex justify-between items-center text-text-tertiary border-b border-border-custom/50 pb-2">
                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold">
                      <Terminal className="h-3.5 w-3.5 text-accent-custom" />
                      Prompt Prático Recomendado
                    </span>
                    <button
                      onClick={() => handleCopy(feature.id, feature.practicalPrompt)}
                      className="p-1 rounded hover:bg-bg-tertiary text-text-secondary hover:text-accent-custom transition-all"
                      title="Copiar prompt para a área de transferência"
                    >
                      {copiedId === feature.id ? (
                        <Check className="h-4.5 w-4.5 text-success-custom" />
                      ) : (
                        <Copy className="h-4.5 w-4.5" />
                      )}
                    </button>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed select-all">
                    {feature.practicalPrompt}
                  </p>
                </div>
              </div>

              {/* Action/Indicator footer */}
              <div className="pt-4 border-t border-border-custom/60 mt-6 flex items-center justify-between text-xs text-text-tertiary">
                <span className="flex items-center gap-1.5 font-mono text-[10px]">
                  <Play className="h-3 w-3 text-accent-custom fill-accent-custom" />
                  Pronto para uso em LLM
                </span>
                {copiedId === feature.id && (
                  <span className="text-success-custom font-semibold">Copiado!</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
