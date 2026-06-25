import { useState } from 'react';
import { techniquesData } from '../data/requirementsData';
import { 
  MessageSquareText, 
  Lightbulb, 
  Framer, 
  FileSpreadsheet, 
  Link as LinkIcon, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  Layers
} from 'lucide-react';

const iconMap: Record<string, any> = {
  MessageSquareText: MessageSquareText,
  Lightbulb: Lightbulb,
  Framer: Framer,
  FileSpreadsheet: FileSpreadsheet,
  Link: LinkIcon
};

export default function Techniques() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="tecnicas" className="py-20 border-b border-border-custom bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
            <Layers className="h-3.5 w-3.5" />
            Metodologias Ativas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Técnicas e Métodos Essenciais
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Dominar diferentes métodos de descoberta e formalização permite que você escolha a ferramenta ideal para cada cenário de projeto.
          </p>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniquesData.map((tech) => {
            const IconComponent = iconMap[tech.iconName] || Lightbulb;
            const isExpanded = expandedId === tech.id;

            return (
              <div 
                key={tech.id}
                className={`p-6 rounded-2xl border transition-all duration-300 bg-bg-primary flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-accent-custom ring-1 ring-accent-custom/30 shadow-md' 
                    : 'border-border-custom hover:border-accent-custom/40 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent-custom/10 text-accent-custom rounded-xl">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase bg-bg-tertiary text-text-secondary tracking-wide">
                      {tech.phase}
                    </span>
                  </div>

                  {/* Card Body */}
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                    {tech.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {tech.description}
                  </p>

                  {/* Expandable detailed section */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border-custom/80 space-y-4">
                      
                      {/* Practical Example */}
                      <div className="p-3 bg-accent-custom/5 border border-accent-custom/10 rounded-xl space-y-1">
                        <h4 className="text-xs font-bold font-mono text-accent-custom uppercase tracking-wider">
                          Exemplo Prático:
                        </h4>
                        <p className="text-xs text-text-secondary italic leading-relaxed">
                          "{tech.practicalExample}"
                        </p>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Pros */}
                        <div className="space-y-2">
                          <h5 className="text-[10px] font-mono font-bold text-success-custom uppercase tracking-wider flex items-center gap-1">
                            <Check className="h-3 w-3" /> Vantagens
                          </h5>
                          <ul className="space-y-1">
                            {tech.pros.map((pro, idx) => (
                              <li key={idx} className="text-[11px] text-text-secondary leading-snug">
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div className="space-y-2">
                          <h5 className="text-[10px] font-mono font-bold text-warning-custom uppercase tracking-wider flex items-center gap-1">
                            <X className="h-3 w-3" /> Desvantagens
                          </h5>
                          <ul className="space-y-1">
                            {tech.cons.map((con, idx) => (
                              <li key={idx} className="text-[11px] text-text-secondary leading-snug">
                                • {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  )}
                </div>

                {/* Expand Toggle Button */}
                <button
                  onClick={() => toggleExpand(tech.id)}
                  className="mt-6 w-full py-2 px-4 rounded-xl border border-border-custom bg-bg-secondary hover:bg-bg-tertiary hover:border-accent-custom/40 transition-all duration-150 flex items-center justify-center gap-2 text-xs font-semibold text-text-secondary hover:text-accent-custom"
                >
                  {isExpanded ? (
                    <>
                      Recolher Detalhes
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Ver Exemplo e Vantagens
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
