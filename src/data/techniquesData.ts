/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PracticePhase } from '../types';

export const practicePhases: PracticePhase[] = [
  {
    id: "elicitacao",
    title: "1. Elicitação",
    subTitle: "A arte de descobrir e extrair",
    description: "Elicitar não é apenas 'coletar'. Coleta assume que os requisitos estão prontos e organizados na cabeça do cliente. Elicitar significa investigar ativamente, revelar necessidades ocultas, entender o contexto do negócio e navegar por restrições técnicas e políticas.",
    objectives: [
      "Identificar todas as partes interessadas (stakeholders)",
      "Compreender o problema real de negócio antes de propor soluções",
      "Revelar requisitos implícitos que o usuário esquece de mencionar (requisitos inconscientes)"
    ],
    techniques: [
      {
        name: "Entrevistas Estruturadas e Semi-estruturadas",
        description: "Conversas direcionadas com stakeholders chaves para mapear dores e objetivos estratégicos.",
        whenToUse: "No início do projeto, para alinhar a visão macro e entender os diferentes pontos de vista."
      },
      {
        name: "Workshops de Cocriação (Design Thinking / Lean Inception)",
        description: "Sessões colaborativas intensivas com representantes de negócios, usuários e desenvolvedores.",
        whenToUse: "Para acelerar consensos e definir o escopo inicial (MVP) em ambientes de alta incerteza."
      },
      {
        name: "Observação Direta (Job Shadowing)",
        description: "Acompanhar o usuário final em sua rotina diária de trabalho para entender como ele executa as tarefas na prática.",
        whenToUse: "Para descobrir requisitos operacionais implícitos e gargalos de UX que o usuário não consegue verbalizar."
      },
      {
        name: "Prototipagem Rápida (Baixa e Média Fidelidade)",
        description: "Criação de esboços rápidos para tangibilizar o sistema e extrair feedback tátil imediato.",
        whenToUse: "Sempre que houver dúvida se o entendimento do requisito atende à expectativa visual ou de fluxo."
      }
    ],
    qualityCriteria: [
      "Identificação clara do stakeholder de origem",
      "Registro detalhado das dores e metas de negócio",
      "Separação clara entre o problema (o que) e a sugestão de solução (como)"
    ]
  },
  {
    id: "analise",
    title: "2. Análise e Negociação",
    subTitle: "Lapidando conflitos e priorizando valor",
    description: "Na análise, os requisitos brutos elicitados são classificados, combinados e refinados. É aqui que lidamos com o maior desafio da engenharia de requisitos: conflitos de interesse entre diferentes departamentos (ex: marketing quer flexibilidade total, segurança quer restrições rígidas).",
    objectives: [
      "Detecção de conflitos, lacunas e redundâncias",
      "Negociação de prioridades de forma realista diante de restrições de prazo e orçamento",
      "Mapeamento de dependências entre diferentes funcionalidades"
    ],
    techniques: [
      {
        name: "Priorização MoSCoW",
        description: "Classificação do escopo em Must Have (obrigatório), Should Have (importante), Could Have (desejável) e Won't Have (fora deste ciclo).",
        whenToUse: "Em qualquer planejamento de iteração ou release para focar no core business."
      },
      {
        name: "Análise de Impacto e Dependência",
        description: "Avaliação técnica de como a alteração ou adição de um requisito afeta o restante do ecossistema.",
        whenToUse: "Sempre que novas solicitações de mudança surgirem no meio do ciclo de desenvolvimento."
      },
      {
        name: "Modelagem de Processos (BPMN / Casos de Uso)",
        description: "Representação lógica do fluxo de trabalho atual (As-Is) e do fluxo proposto com o sistema (To-Be).",
        whenToUse: "Para alinhar a engenharia com a operação real da empresa."
      }
    ],
    qualityCriteria: [
      "Consistência interna (requisitos não se contradizem)",
      "Priorização acordada e assinada pelos tomadores de decisão",
      "Viabilidade técnica verificada pelo time de engenharia"
    ]
  },
  {
    id: "especificacao",
    title: "3. Especificação",
    subTitle: "A tradução formal do conhecimento",
    description: "Especificar é transformar o entendimento verbal e os esboços em uma documentação inequívoca, compartilhável e rastreável. Ela serve como o 'contrato de verdade' para desenvolvedores, testadores, designers e clientes.",
    objectives: [
      "Criar uma base de conhecimento precisa e sem ambiguidades",
      "Garantir a rastreabilidade (saber de qual necessidade de negócio surgiu cada linha de código)",
      "Prover critérios de aceitação claros para o time de garantia de qualidade (QA)"
    ],
    techniques: [
      {
        name: "Histórias de Usuário + BDD (Behavior-Driven Development)",
        description: "Especificação em linguagem natural estruturada usando o padrão 'Dado... Quando... Então...'.",
        whenToUse: "Projetos ágeis, facilitando a automação de testes e a leitura compartilhada entre negócio e desenvolvimento."
      },
      {
        name: "Documento de Especificação de Requisitos (SRS - Padrão IEEE 29148)",
        description: "Documentação formal estruturada contendo requisitos funcionais, não funcionais, restrições e interfaces externas.",
        whenToUse: "Sistemas críticos, regulados (médicos, aeroespaciais, bancários) ou contratos governamentais rígidos."
      },
      {
        name: "Modelagem de Dados e Dicionário de Termos",
        description: "Definição formal dos tipos de dados, regras de validação e termos de negócio para evitar sinônimos confusos.",
        whenToUse: "Para evitar que 'Cliente' signifique algo diferente para o time de faturamento e para o time de suporte."
      }
    ],
    qualityCriteria: [
      "Atômico (trata de uma única ideia por vez)",
      "Rastreável (possui identificador único ID)",
      "Independente de tecnologia (foca nas regras de negócio, não no banco de dados específico)"
    ]
  },
  {
    id: "validacao",
    title: "4. Validação",
    subTitle: "Garantindo que estamos construindo o produto certo",
    description: "Enquanto a Verificação checa se o software foi construído de acordo com a especificação (ex: rodar testes), a Validação garante que a especificação e o software construído atendem ao problema real do usuário final. Validação responde: 'Estamos construindo o produto certo?'.",
    objectives: [
      "Garantir o alinhamento entre a expectativa do cliente e o entendimento do time",
      "Evitar o retrabalho de desenvolvimento (o erro mais caro de se corrigir é o erro de requisito descoberto em produção)",
      "Assegurar a testabilidade do requisito"
    ],
    techniques: [
      {
        name: "Inspeções Formais de Requisitos (Fagan Inspection)",
        description: "Revisão meticulosa de documentos por um comitê multifuncional guiado por checklists de qualidade.",
        whenToUse: "Em fases pré-desenvolvimento de módulos altamente complexos ou de alta criticidade."
      },
      {
        name: "Testes de Aceitação de Usuário (UAT)",
        description: "Simulação de uso real do sistema pelo usuário final antes do deploy oficial.",
        whenToUse: "No fechamento de marcos de entrega ou sprints críticos."
      },
      {
        name: "Demonstrações e Reviews de Sprints",
        description: "Apresentações frequentes do software funcional para obter feedback imediato e redirecionar a rota de desenvolvimento.",
        whenToUse: "Ao final de cada ciclo ágil (geralmente quinzenal)."
      }
    ],
    qualityCriteria: [
      "Requisito testável (existe um teste objetivo para provar que ele foi atendido)",
      "Aceitação formal por representantes autorizados das partes interessadas",
      "Clareza e legibilidade por todas as personas do projeto"
    ]
  }
];
