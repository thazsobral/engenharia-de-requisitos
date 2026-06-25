import { useState, useEffect } from 'react';
import { playgroundScenarios } from '../data/requirementsData';
import { 
  Gamepad2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Sparkles,
  Info
} from 'lucide-react';

export default function Playground() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = playgroundScenarios[activeScenarioIdx];

  // Reset states when switching scenarios
  useEffect(() => {
    setSelections({});
    setShowFeedback(false);
    setScore(0);
  }, [activeScenarioIdx]);

  const handleSelection = (requirementId: string, type: 'Funcional' | 'Não-Funcional' | 'Regra de Negócio') => {
    if (showFeedback) return; // Lock selections after submission
    setSelections(prev => ({
      ...prev,
      [requirementId]: type
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    scenario.items.forEach(item => {
      if (selections[item.id] === item.type) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowFeedback(true);
  };

  const resetGame = () => {
    setSelections({});
    setShowFeedback(false);
    setScore(0);
  };

  const totalRequirements = scenario.items.length;
  const allAnswered = Object.keys(selections).length === totalRequirements;

  return (
    <section id="playground" className="py-20 border-b border-border-custom bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom text-xs font-semibold uppercase tracking-wider font-mono">
            <Gamepad2 className="h-3.5 w-3.5" />
            Arena Prática
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Playground Interativo: Classificador de Requisitos
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Coloque-se na pele de um Analista de Requisitos. Leia o briefing do cliente e classifique cada necessidade corretamente.
          </p>
        </div>

        {/* Game Area */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Client Prompt Briefing (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Scenario Selector tabs */}
            <div className="flex rounded-xl bg-bg-tertiary p-1 border border-border-custom">
              {playgroundScenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`flex-1 py-2 px-3 text-xs font-bold font-display rounded-lg transition-all ${
                    activeScenarioIdx === idx
                      ? 'bg-bg-secondary text-accent-custom shadow-sm border border-border-custom/50'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Cenário 0{idx + 1}
                </button>
              ))}
            </div>

            {/* Simulated Chat / Briefing Card */}
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border-custom shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-custom/5 rounded-full blur-2xl -z-10" />
              
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-success-custom animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-text-tertiary">
                  Transcrição da Reunião
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-text-primary mb-3">
                {scenario.title}
              </h3>

              <div className="p-4 rounded-xl bg-bg-primary border border-border-custom text-xs text-text-secondary leading-relaxed italic relative">
                <span className="absolute -top-3 left-4 bg-bg-secondary px-2 font-mono text-[9px] font-bold text-accent-custom border border-border-custom rounded">
                  CLIENTE DIZ:
                </span>
                "{scenario.clientPrompt}"
              </div>

              <div className="mt-4 pt-4 border-t border-border-custom/60 flex items-center gap-2 text-xs text-text-tertiary">
                <Info className="h-4 w-4 text-accent-custom shrink-0" />
                <span>Analise o texto acima e marque as opções corretas ao lado.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Classification items (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Challenge Items Box */}
            <div className="space-y-4">
              {scenario.items.map((item, idx) => {
                const selection = selections[item.id];
                const isCorrect = selection === item.type;

                return (
                  <div 
                    key={item.id}
                    className={`p-5 rounded-xl border transition-all duration-300 bg-bg-secondary ${
                      showFeedback
                        ? isCorrect
                          ? 'border-success-custom bg-success-bg/10'
                          : 'border-warning-custom bg-warning-bg/10'
                        : 'border-border-custom hover:border-accent-custom/40'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="h-6 w-6 rounded-lg bg-bg-tertiary border border-border-custom flex items-center justify-center font-mono text-xs font-bold text-text-secondary shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-text-primary leading-snug">
                        {item.text}
                      </p>
                    </div>

                    {/* Classification Button Actions */}
                    <div className="grid grid-cols-3 gap-2">
                      {(['Funcional', 'Não-Funcional', 'Regra de Negócio'] as const).map((type) => {
                        const isSelected = selection === type;
                        return (
                          <button
                            key={type}
                            disabled={showFeedback}
                            onClick={() => handleSelection(item.id, type)}
                            className={`py-2 px-1 sm:px-2 rounded-lg text-[11px] font-bold border transition-all duration-150 text-center ${
                              isSelected
                                ? 'bg-accent-custom border-accent-custom text-white shadow-sm'
                                : 'border-border-custom bg-bg-primary text-text-secondary hover:border-accent-custom/50 hover:bg-bg-tertiary'
                            } ${showFeedback ? 'opacity-60 cursor-not-allowed' : ''}`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanatory feedback if requested */}
                    {showFeedback && (
                      <div className="mt-4 pt-3 border-t border-border-custom/60 space-y-2">
                        <div className="flex items-center gap-2">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-success-custom bg-success-bg px-2 py-0.5 rounded">
                              <CheckCircle className="h-3.5 w-3.5" /> Correto
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-warning-custom bg-warning-bg px-2 py-0.5 rounded">
                              <XCircle className="h-3.5 w-3.5" /> Incorreto (Correto: {item.type})
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed bg-bg-primary/50 p-2.5 rounded-lg border border-border-custom/60">
                          {item.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer Control Panel */}
            <div className="p-5 rounded-2xl bg-bg-secondary border border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
              {!showFeedback ? (
                <>
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-text-secondary">
                      Progresso: <strong>{Object.keys(selections).length}</strong> de <strong>{totalRequirements}</strong> classificados
                    </p>
                    {!allAnswered && (
                      <p className="text-[10px] text-text-tertiary">Selecione uma resposta para todos os itens para finalizar.</p>
                    )}
                  </div>
                  <button
                    onClick={calculateScore}
                    disabled={!allAnswered}
                    className={`w-full sm:w-auto py-2.5 px-6 rounded-xl font-bold font-display text-xs flex items-center justify-center gap-2 transition-all ${
                      allAnswered
                        ? 'bg-accent-custom text-white hover:bg-accent-hover shadow-sm hover:scale-[1.02] cursor-pointer'
                        : 'bg-bg-tertiary border border-border-custom text-text-tertiary cursor-not-allowed'
                    }`}
                  >
                    Finalizar Desafio
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl flex items-center justify-center font-display font-black text-lg ${
                      score === totalRequirements
                        ? 'bg-success-bg text-success-custom border border-success-custom/20'
                        : 'bg-warning-bg text-warning-custom border border-warning-custom/20'
                    }`}>
                      {score} / {totalRequirements}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-text-primary">
                        {score === totalRequirements ? 'Excelente Analista!' : 'Bom começo! Continue praticando.'}
                      </h4>
                      <p className="text-[11px] text-text-secondary">
                        {score === totalRequirements 
                          ? 'Você dominou a classificação conceitual deste cenário.' 
                          : 'Revise as justificativas e tente novamente.'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetGame}
                    className="w-full sm:w-auto py-2.5 px-6 rounded-xl border border-border-custom bg-bg-primary hover:bg-bg-tertiary text-xs font-bold text-text-secondary hover:text-accent-custom flex items-center justify-center gap-2 transition-all"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reiniciar
                  </button>
                </>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
