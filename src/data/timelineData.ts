/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Anos 1970",
    period: "A Era do Modelo Cascata (Waterfall)",
    title: "O Requisito como Contrato Imutável",
    description: "Iniciado pelo artigo de Winston Royce (embora ele defendesse ciclos iterativos), o mercado adotou o Cascata de forma linear. A Engenharia de Requisitos era uma fase monolítica inicial e estritamente documental.",
    characteristics: [
      "Processo sequencial e rígido",
      "Assinatura física de 'baselines' de requisitos",
      "Suposição de que o cliente sabe exatamente o que quer no D0",
      "Mudanças de escopo tratadas como anomalias indesejáveis"
    ],
    roleOfRequirements: "Os requisitos eram a única garantia de que o escopo contratado seria entregue, gerando um 'abismo de comunicação' entre a especificação inicial e a homologação final.",
    iconName: "FileText"
  },
  {
    year: "Anos 1990",
    period: "A Era de Processos Robustos (RUP / UML)",
    title: "Casos de Uso e Modelagem Visual",
    description: "Com a crise do software persistindo devido a documentos de requisitos textuais ambíguos, surge o Rational Unified Process (RUP) e a Unified Modeling Language (UML). Foco em Casos de Uso.",
    characteristics: [
      "Processo iterativo e incremental",
      "Modelagem visual para diminuir ambiguidade",
      "Diagramas de Caso de Uso e especificações detalhadas de fluxos",
      "Matriz de rastreabilidade complexa"
    ],
    roleOfRequirements: "Os requisitos passaram a guiar a arquitetura do sistema (Architecture-Centric, Use-Case Driven), traduzindo necessidades do usuário em cenários lógicos estruturados.",
    iconName: "GitMerge"
  },
  {
    year: "Anos 2000",
    period: "O Manifesto Ágil e a Revolução Empírica",
    title: "Histórias de Usuário e Colaboração Contínua",
    description: "O Manifesto Ágil (2001) inverteu a prioridade: 'software em funcionamento mais que documentação abrangente'. A especificação formal deu lugar a conversas constantes e ciclos rápidos de feedback.",
    characteristics: [
      "Histórias de Usuário (User Stories) em cartões físicos",
      "Critérios de aceitação simples e iterativos",
      "O Product Owner (PO) como ponte viva",
      "Abraço às mudanças de escopo a qualquer momento"
    ],
    roleOfRequirements: "O requisito deixou de ser um documento estático e tornou-se um convite para uma conversa contínua ('Card, Conversation, Confirmation'). O foco mudou de 'escrever' para 'entender'.",
    iconName: "MessageSquare"
  },
  {
    year: "Anos 2020",
    period: "A Era da Inteligência Artificial & Engenharia Cognitiva",
    title: "IA como Co-piloto e o Humano como Curador",
    description: "Com Large Language Models (LLMs), a geração de rascunhos, diagramas e análise de consistência foi automatizada. A Engenharia de Requisitos eleva-se a um nível puramente cognitivo, focada na curadoria e alinhamento de problemas reais.",
    characteristics: [
      "IA gera rascunhos de histórias, BDD e regras de negócio em segundos",
      "Engenheiro atua como curador e validador crítico de consistência",
      "Foco total na validação com o cliente e resolução de conflitos",
      "Engenharia de Requisitos como habilidade de formulação de problemas"
    ],
    roleOfRequirements: "Os requisitos tornam-se o 'prompt' estratégico do sistema. O valor não está em digitar o requisito, mas em descobrir o problema correto a ser resolvido, garantindo consistência lógica.",
    iconName: "Cpu"
  }
];
