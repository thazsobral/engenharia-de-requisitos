import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Techniques from './components/Techniques';
import AIEra from './components/AIEra';
import Protocols from './components/Protocols';
import Playground from './components/Playground';
import References from './components/References';
import { BookOpen, Sparkles, ChevronRight } from 'lucide-react';

const sections = [
  { id: 'introducao', label: 'Introdução' },
  { id: 'evolucao', label: 'Evolução' },
  { id: 'tecnicas', label: 'Técnicas' },
  { id: 'ia', label: 'Era da IA' },
  { id: 'protocolos', label: 'Protocolos' },
  { id: 'playground', label: 'Playground' },
  { id: 'referencias', label: 'Referências' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col font-sans antialiased transition-colors duration-300">
      {/* Top Header Alert / Announcement Banner */}
      <div className="bg-gradient-to-r from-accent-custom to-accent-hover text-white py-2 px-4 text-center text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        NOVO PROTOCOLO: ENGENHARIA DE REQUISITOS ASSISTIDA POR IA (COPILOT 2026) ADICIONADO
        <ChevronRight className="h-3 w-3" />
      </div>

      {/* Modern Sticky Navbar */}
      <Navbar sections={sections} />

      {/* Hero Header Section */}
      <header className="relative py-24 md:py-32 overflow-hidden bg-bg-secondary border-b border-border-custom transition-all duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-custom/5 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-custom/10 text-accent-custom text-[11px] font-semibold uppercase tracking-widest font-mono">
            <BookOpen className="h-4 w-4" />
            Portal Didático Interativo
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-text-primary leading-none max-w-5xl mx-auto">
            Engenharia de <span className="bg-gradient-to-r from-accent-custom to-cyan-500 bg-clip-text text-transparent">Requisitos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-sans leading-relaxed">
            Descubra as metodologias, processos rigorosos e ágeis, e as melhores práticas auxiliadas por Inteligência Artificial para estruturar softwares livres de falhas.
          </p>

          <div className="pt-6 flex justify-center gap-4">
            <a
              href="#playground"
              className="px-6 py-3 bg-accent-custom hover:bg-accent-hover text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02]"
            >
              Ir para o Playground
            </a>
            <a
              href="#introducao"
              className="px-6 py-3 border border-border-custom bg-bg-primary text-text-secondary hover:text-accent-custom hover:bg-bg-tertiary font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Iniciar Aprendizado
            </a>
          </div>
        </div>
      </header>

      {/* Main Educational Sections */}
      <main className="flex-grow">
        <Introduction />
        <Timeline />
        <Techniques />
        <AIEra />
        <Protocols />
        <Playground />
      </main>

      {/* Footer and References */}
      <References />
    </div>
  );
}
