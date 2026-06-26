/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillItem } from '../types';

export const skillItems: SkillItem[] = [
  {
    name: "Modelagem de Processos (BPMN / UML)",
    category: "Hard",
    description: "Capacidade de mapear visualmente fluxos de trabalho atuais (As-Is) e desenhar processos futuros otimizados (To-Be) que o sistema apoiará.",
    importance: "Fundamental para entender o contexto em que o software operará, evitando automatizar processos ineficientes.",
    examples: [
      "Diagramar processos em BPMN 2.0",
      "Modelar Diagramas de Casos de Uso, Atividades e Estados em UML",
      "Mapear jornadas de valor (Value Stream Mapping)"
    ]
  },
  {
    name: "Engenharia de Requisitos Científica (IEEE 29148 / BABOK)",
    category: "Hard",
    description: "Domínio das estruturas clássicas de documentação, matrizes de rastreabilidade de requisitos, gestão de mudanças e taxonomia de requisitos funcionais, não funcionais e restrições.",
    importance: "Fornece o rigor formal necessário para projetos complexos, sistemas regulados ou de missão crítica.",
    examples: [
      "Escrever Especificações de Requisitos de Software (SRS) padronizadas",
      "Gerenciar o ciclo de vida e a rastreabilidade vertical/horizontal dos requisitos",
      "Aplicar metodologias de priorização matemática de escopo"
    ]
  },
  {
    name: "Modelagem Lógica de Dados e API Design",
    category: "Hard",
    description: "Compreensão de como as entidades de negócio se relacionam logicamente e como as informações trafegam entre sistemas (APIs REST, GraphQL, Eventos).",
    importance: "Evita que o analista especifique telas ou fluxos que sejam logicamente inviáveis de persistir ou integrar.",
    examples: [
      "Desenhar Diagramas de Entidade-Relacionamento lógicos (DER)",
      "Especificar payloads de integração de APIs e dicionários de dados semânticos",
      "Compreender restrições de integridade referencial"
    ]
  },
  {
    name: "Escrita Analítica e Redação Técnica",
    category: "Hard",
    description: "Habilidade de redigir requisitos, histórias de usuário e critérios de aceitação de forma precisa, concisa, livre de jargões inúteis e de interpretação única.",
    importance: "O texto escrito é a interface de comunicação principal entre quem precisa e quem desenvolve. Erros de redação geram bugs caros.",
    examples: [
      "Escrever cenários em Gherkin (Dado-Quando-Então)",
      "Redigir histórias de usuário claras seguindo as heurísticas INVEST",
      "Criar glossários de termos de domínio consistentes"
    ]
  },
  {
    name: "Escuta Ativa (Active Listening)",
    category: "Soft",
    description: "Capacidade de ouvir com foco total na pessoa falante, sem formular respostas mentais antecipadas, identificando dores subjacentes, tom de voz e hesitações.",
    importance: "Os stakeholders raramente sabem verbalizar seus problemas de forma estruturada. Ouvir o que não foi dito é o segredo da elicitação.",
    examples: [
      "Parafrasear o cliente para confirmar o entendimento ('Se entendi bem, o seu maior gargalo hoje é...')",
      "Captar sinais não-verbais de frustração ou incerteza",
      "Fazer perguntas abertas que estimulem o detalhamento da dor"
    ]
  },
  {
    name: "Facilitação e Negociação de Conflitos",
    category: "Soft",
    description: "Habilidade de mediar conversas difíceis entre partes interessadas com interesses divergentes e guiá-las a um consenso focado no valor do produto.",
    importance: "Diferentes departamentos competem por orçamento e prioridade no software. O Engenheiro de Requisitos atua como um diplomata.",
    examples: [
      "Facilitar workshops de alinhamento tático com executivos de negócios",
      "Resolver impasses de priorização de escopo usando critérios de negócios objetivos",
      "Negociar concessões aceitáveis entre os stakeholders (Trade-offs)"
    ]
  },
  {
    name: "Pensamento Sistêmico e Visão de Produto",
    category: "Soft",
    description: "Capacidade de ver além da tarefa imediata ou da tela solicitada, compreendendo como o sistema se integra à estratégia corporativa geral e ao mercado.",
    importance: "Evita o desenvolvimento de recursos isolados que não geram impacto ou que sobrecarregam outras áreas do negócio.",
    examples: [
      "Mapear o impacto de um requisito na cadeia de valor de ponta a ponta do cliente",
      "Alinhar o backlog técnico com a visão estratégica de produto (Product Vision)",
      "Identificar oportunidades de otimização de custos de operação por meio de software"
    ]
  },
  {
    name: "Empatia Cognitiva",
    category: "Soft",
    description: "Colocar-se genuinamente no lugar de diferentes perfis de usuários, desde o executivo sob pressão até o operador de linha de produção fatigado.",
    importance: "Garante que o software projetado respeite os limites cognitivos, a proficiência técnica e o contexto de estresse de quem o utiliza no mundo real.",
    examples: [
      "Projetar fluxos que prevejam e previnam o erro humano de digitação",
      "Criar personas realistas baseadas em observações do ambiente de trabalho",
      "Defender a usabilidade e a acessibilidade como critérios não negociáveis de engenharia"
    ]
  }
];
