import { referencesData } from '../data/requirementsData';
import { Bookmark, ExternalLink, GraduationCap, Github } from 'lucide-react';

export default function References() {
  return (
    <footer id="referencias" className="bg-bg-secondary border-t border-border-custom pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* References Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-border-custom">
          
          {/* Brand/Edu Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-accent-custom/10 text-accent-custom rounded-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-base text-text-primary">
                Engenharia de Requisitos
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Esta plataforma educacional foi desenvolvida sob os mais altos padrões de design técnico e didática acadêmica para capacitar estudantes e profissionais a dominarem a base do desenvolvimento de software de alta performance.
            </p>
            <div className="text-[10px] text-text-tertiary font-mono">
              SISTEMA DE ENSINO DE ENGENHARIA DE SOFTWARE
            </div>
          </div>

          {/* Links / Documentations Grid (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-accent-custom" />
              <h3 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider font-mono">
                Documentações Oficiais & Referências Acadêmicas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {referencesData.map((ref, idx) => (
                <a 
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-bg-primary border border-border-custom hover:border-accent-custom/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group block"
                >
                  <h4 className="font-display font-bold text-sm text-text-primary group-hover:text-accent-custom transition-colors mb-2 flex items-center justify-between">
                    {ref.name}
                    <ExternalLink className="h-4 w-4 text-text-tertiary group-hover:text-accent-custom group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0" />
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-1">
                    {ref.description}
                  </p>
                  <span className="text-[10px] font-mono text-accent-custom group-hover:underline block mt-3">
                    Acessar Documentação →
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom (Credits) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary font-mono text-center sm:text-left">
          <div>
            Desenvolvido por <strong className="text-accent-custom">ThazSobral</strong> para fins de Educação Tecnológica Prática e Interativa. © 2026.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px]">EDTECH PLATFORM v1.4.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
