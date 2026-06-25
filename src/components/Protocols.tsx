import { protocolAspects } from '../data/requirementsData';
import { ShieldCheck, Zap, ArrowRight, ShieldAlert, FileText } from 'lucide-react';

export default function Protocols() {
  return (
    <section id="protocolos" className="py-20 border-b border-border-custom bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
            <FileText className="h-3.5 w-3.5" />
            Estrutura de Governança
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Protocolos de Trabalho Comparados
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            A escolha entre formalidade extrema ou agilidade pragmática depende dos objetivos de governança, riscos de conformidade e dinâmica de mercado do produto.
          </p>
        </div>

        {/* Desktop & Tablet Table (Hidden on small mobile screens) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border-custom bg-bg-primary shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-custom bg-bg-tertiary">
                <th className="py-5 px-6 font-display font-bold text-sm text-text-primary w-1/5">Aspecto</th>
                
                {/* Rigorous Protocol Column Header */}
                <th className="py-5 px-6 w-2/5 border-l border-border-custom">
                  <div className="flex items-center gap-2 text-text-primary font-display font-bold text-sm">
                    <div className="p-1 rounded bg-warning-bg text-warning-custom">
                      <ShieldAlert className="h-4.5 w-4.5" />
                    </div>
                    Protocolo Rigoroso
                    <span className="text-[10px] font-mono font-normal text-text-tertiary px-1.5 py-0.5 rounded bg-bg-primary ml-auto">
                      Ex: ISO/IEC 29148
                    </span>
                  </div>
                </th>

                {/* Agile Protocol Column Header */}
                <th className="py-5 px-6 w-2/5 border-l border-border-custom">
                  <div className="flex items-center gap-2 text-text-primary font-display font-bold text-sm">
                    <div className="p-1 rounded bg-success-bg text-success-custom">
                      <Zap className="h-4.5 w-4.5" />
                    </div>
                    Protocolo Ágil
                    <span className="text-[10px] font-mono font-normal text-text-tertiary px-1.5 py-0.5 rounded bg-bg-primary ml-auto">
                      Ex: Scrum / Kanban
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-border-custom">
              {protocolAspects.map((row) => (
                <tr key={row.id} className="hover:bg-bg-secondary/40 transition-colors">
                  {/* Aspect title */}
                  <td className="py-5 px-6 font-display font-bold text-xs text-text-primary uppercase tracking-wider font-mono">
                    {row.aspect}
                  </td>
                  
                  {/* Rigorous Protocol Details */}
                  <td className="py-5 px-6 border-l border-border-custom space-y-1.5">
                    <span className="font-display font-semibold text-sm text-text-primary block">
                      {row.rigorousTitle}
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {row.rigorousDetails}
                    </p>
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-bg-primary text-warning-custom font-semibold border border-warning-custom/20">
                      Foco: {row.rigorousStandard}
                    </span>
                  </td>

                  {/* Agile Protocol Details */}
                  <td className="py-5 px-6 border-l border-border-custom space-y-1.5">
                    <span className="font-display font-semibold text-sm text-text-primary block">
                      {row.agileTitle}
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {row.agileDetails}
                    </p>
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-bg-primary text-success-custom font-semibold border border-success-custom/20">
                      Valor: {row.agileValue}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion Style List (Displayed only on mobile screens) */}
        <div className="md:hidden space-y-6">
          {protocolAspects.map((row) => (
            <div 
              key={row.id} 
              className="p-5 rounded-2xl bg-bg-primary border border-border-custom space-y-4 shadow-sm"
            >
              <div className="border-b border-border-custom/80 pb-2">
                <span className="text-[10px] font-mono font-bold text-accent-custom uppercase tracking-wider">
                  Aspecto Comparado
                </span>
                <h3 className="font-display font-bold text-base text-text-primary">
                  {row.aspect}
                </h3>
              </div>

              {/* Rigorous */}
              <div className="space-y-1.5 p-3 rounded-xl bg-bg-secondary border-l-4 border-warning-custom">
                <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-warning-custom" />
                  RIGOROSO: {row.rigorousTitle}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {row.rigorousDetails}
                </p>
                <div className="text-[9px] font-mono text-warning-custom">
                  Padrão: {row.rigorousStandard}
                </div>
              </div>

              {/* Agile */}
              <div className="space-y-1.5 p-3 rounded-xl bg-bg-secondary border-l-4 border-success-custom">
                <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-custom" />
                  ÁGIL: {row.agileTitle}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {row.agileDetails}
                </p>
                <div className="text-[9px] font-mono text-success-custom">
                  Foco: {row.agileValue}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
