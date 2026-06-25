export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  phase: string;
  description: string;
  details: string;
}

export interface TechniqueCard {
  id: string;
  title: string;
  phase: 'Elicitação' | 'Análise' | 'Especificação' | 'Validação' | 'Gestão';
  description: string;
  practicalExample: string;
  pros: string[];
  cons: string[];
  iconName: string;
}

export interface AIFeature {
  id: string;
  title: string;
  description: string;
  roleInER: string;
  practicalPrompt: string;
  impact: 'Alto' | 'Médio' | 'Inovador';
}

export interface ProtocolAspect {
  id: string;
  aspect: string;
  rigorousTitle: string;
  rigorousDetails: string;
  rigorousStandard: string;
  agileTitle: string;
  agileDetails: string;
  agileValue: string;
}

export interface RequirementItem {
  id: string;
  text: string;
  type: 'Funcional' | 'Não-Funcional' | 'Regra de Negócio';
  explanation: string;
}

export interface PlaygroundScenario {
  id: string;
  title: string;
  clientPrompt: string;
  items: RequirementItem[];
}
