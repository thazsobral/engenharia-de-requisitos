import { TimelineItem, TechniqueCard, AIFeature, ProtocolAspect, PlaygroundScenario } from '../types';

export const introductionData = {
  title: "Introdução à Engenharia de Requisitos (ER)",
  subtitle: "A base de sucesso de qualquer produto de software",
  definition: "A Engenharia de Requisitos é uma disciplina da Engenharia de Software que engloba todas as atividades voltadas para a descoberta, análise, especificação, validação e gerenciamento de requisitos de um sistema de software. Em termos simples, trata-se de garantir que estamos construindo o sistema correto para resolver o problema real do cliente.",
  importancePoints: [
    {
      title: "Alinhamento de Expectativas",
      description: "Evita o clássico problema de comunicação entre o que o cliente deseja, o que os desenvolvedores entendem e o que realmente é entregue."
    },
    {
      title: "Redução de Custos de Refação",
      description: "Identificar uma falha ou lacuna de requisito na fase inicial custa até 100 vezes menos do que corrigi-la após o sistema estar em produção."
    },
    {
      title: "Escopo e Estimativas Precisas",
      description: "Requisitos bem definidos fornecem a base necessária para estimativas realistas de prazos, custos e alocação de equipe."
    }
  ],
  imageUrl: "/assets/images/ciclo.png",
  imageAlt: "Diagrama do Ciclo de Vida da Engenharia de Requisitos"
};

export const timelineData: TimelineItem[] = [
  {
    id: "t1",
    year: "1968",
    title: "A Crise do Software",
    phase: "O Despertar da Disciplina",
    description: "Durante a conferência da OTAN na Alemanha, o termo 'Engenharia de Software' foi cunhado. Projetos falhavam sistematicamente por estouro de prazo, orçamento e, crucialmente, por não entregarem o que o cliente precisava.",
    details: "Percebeu-se que codificar sem planejar e sem compreender as reais necessidades humanas levava ao colapso de sistemas complexos."
  },
  {
    id: "t2",
    year: "1984",
    title: "IEEE Std 830",
    phase: "Padronização Formal",
    description: "Publicação do padrão clássico recomendado pelo IEEE para Especificação de Requisitos de Software (SRS).",
    details: "Estabeleceu as bases de como descrever sistematicamente o comportamento do software, com foco em documentos rígidos e completos de especificação estruturada."
  },
  {
    id: "t3",
    year: "2001",
    title: "Manifesto Ágil",
    phase: "Mudança de Paradigma",
    description: "Surgimento do Manifesto Ágil trazendo o valor 'Software em funcionamento mais que documentação abrangente'.",
    details: "A Engenharia de Requisitos migra de especificações extensas de centenas de páginas (Up-front) para abordagens mais dinâmicas: histórias de usuários, critérios de aceitação e colaboração contínua."
  },
  {
    id: "t4",
    year: "2011",
    title: "ISO/IEC/IEEE 29148",
    phase: "Consolidação Internacional",
    description: "O novo padrão internacional substitui e consolida normas anteriores de engenharia de sistemas e software.",
    details: "Define processos e produtos de informação bem estruturados para Engenharia de Requisitos ao longo de todo o ciclo de vida do sistema."
  },
  {
    id: "t5",
    year: "2023+",
    title: "A Era da IA Generativa",
    phase: "Engenharia de Requisitos Assistida",
    description: "Modelos de Linguagem de Grande Porte (LLMs) passam a co-pilotar o processo de elicitação, refinamento e validação de requisitos.",
    details: "Processos manuais e lentos dão lugar a análise automatizada de lacunas, modelagem instantânea de histórias de usuário e criação inteligente de casos de testes baseados em prompts complexos."
  }
];

export const techniquesData: TechniqueCard[] = [
  {
    id: "tech1",
    title: "Entrevistas & Questionários",
    phase: "Elicitação",
    description: "Conversas estruturadas ou semi-estruturadas com os stakeholders para extrair dores, necessidades e fluxos de trabalho operacionais.",
    practicalExample: "Reunião de 1 hora com o Diretor Financeiro para entender como é feita a conciliação bancária manual hoje, anotando pontos críticos do processo.",
    pros: [
      "Permite aprofundar em detalhes ricos",
      "Ótimo para estabelecer empatia e relacionamento",
      "Ajuda a descobrir requisitos implícitos e de domínio"
    ],
    cons: [
      "Consome muito tempo das partes envolvidas",
      "Pode sofrer com viés de um único stakeholder",
      "Requer alta habilidade de comunicação do analista"
    ],
    iconName: "MessageSquareText"
  },
  {
    id: "tech2",
    title: "Brainstorming & Workshops",
    phase: "Elicitação",
    description: "Sessões dinâmicas de geração livre de ideias com equipes multidisciplinares (designers, devs, clientes, analistas) para criar soluções inovadoras.",
    practicalExample: "Sessão de cocriação com notas adesivas virtuais para mapear as funcionalidades ideias do novo aplicativo de fidelidade de clientes.",
    pros: [
      "Fomenta a criatividade e inovação",
      "Alinha múltiplos pontos de vista no mesmo espaço de tempo",
      "Gera forte engajamento inicial da equipe"
    ],
    cons: [
      "Pode se tornar improdutivo sem facilitação forte",
      "Stakeholders introvertidos podem se sentir intimidados",
      "Risco de inflar o escopo com ideias inviáveis"
    ],
    iconName: "Lightbulb"
  },
  {
    id: "tech3",
    title: "Prototipação Rápida",
    phase: "Validação",
    description: "Construção de modelos funcionais ou visuais (baixa ou alta fidelidade) para tangibilizar o requisito antes de codificar.",
    practicalExample: "Desenho de wireframes interativos no Figma para validar com o usuário final se o fluxo de checkout em 3 passos faz sentido lógico.",
    pros: [
      "Excelente para feedbacks rápidos e visuais",
      "Reduz drasticamente mal-entendidos de interface",
      "Valida a usabilidade e o fluxo antes da engenharia"
    ],
    cons: [
      "Usuários podem confundir o protótipo com o software final",
      "Pode gerar expectativas irreais de velocidade de entrega",
      "Custo adicional de design e iterações de tela"
    ],
    iconName: "Framer"
  },
  {
    id: "tech4",
    title: "User Stories (Histórias de Usuário)",
    phase: "Especificação",
    description: "Formato ágil de descrever uma necessidade sob a perspectiva de quem usará a funcionalidade, focado no valor de negócio.",
    practicalExample: "\"Como [Cliente], quero [filtrar produtos por menor preço] para que eu possa [economizar na minha compra online].\"",
    pros: [
      "Mantém o foco no valor gerado para o usuário",
      "Fácil leitura para técnicos e não-técnicos",
      "Facilita o fatiamento em entregas menores (MVP)"
    ],
    cons: [
      "Pode omitir detalhes técnicos profundos de infraestrutura",
      "Requer critérios de aceitação rígidos para evitar desvios",
      "Fácil de se perder se não houver rastreabilidade de épicos"
    ],
    iconName: "FileSpreadsheet"
  },
  {
    id: "tech5",
    title: "Matriz de Rastreabilidade (RTM)",
    phase: "Gestão",
    description: "Tabela ou mapa que conecta cada requisito à sua origem (quem pediu), às tarefas de desenvolvimento e aos testes associados.",
    practicalExample: "Uma planilha que liga o Requisito RF-04 (Pagamento com Pix) ao caso de teste CT-12 e à história de usuário US-09.",
    pros: [
      "Garante que nenhum requisito seja esquecido no desenvolvimento",
      "Facilita a análise de impacto quando um requisito muda",
      "Auxilia na auditoria e conformidade técnica do software"
    ],
    cons: [
      "Extremamente trabalhosa de manter de forma manual",
      "Pode se tornar obsoleta rapidamente se a equipe não for disciplinada",
      "Exige ferramentas integradas para projetos de grande porte"
    ],
    iconName: "Link"
  }
];

export const aiEraData: AIFeature[] = [
  {
    id: "ai1",
    title: "Elicitação Aumentada e Personas Sintéticas",
    description: "Utilização de LLMs para simular perfis de usuários ideais (User Personas) e conduzir rodadas de perguntas simuladas, ajudando a identificar dores e requisitos iniciais que a equipe de analistas humana poderia esquecer.",
    roleInER: "Simulador de Stakeholders e Gerador de Questões Iniciais",
    practicalPrompt: "\"Aja como um usuário de 60 anos, com dificuldades de visão e que está usando um app de banco pela primeira vez. Quais barreiras você enfrenta ao tentar realizar uma transferência PIX?\"",
    impact: "Inovador"
  },
  {
    id: "ai2",
    title: "Geração de Histórias e Critérios de Aceitação (BDD)",
    description: "Conversão direta de atas de reuniões desestruturadas e transcrições de entrevistas em Histórias de Usuário bem formatadas e cenários BDD (Given-When-Then) prontos para testes automatizados.",
    roleInER: "Tradutor e Estruturador de Documentação Técnica",
    practicalPrompt: "\"A partir desta ata de reunião desestruturada: [ATA], extraia as necessidades funcionais e as formate no padrão clássico de User Story com 3 cenários de aceitação em BDD.\"",
    impact: "Alto"
  },
  {
    id: "ai3",
    title: "Análise de Ambiguidade e Conflito",
    description: "Processamento de Linguagem Natural (PLN) avançado para analisar centenas de requisitos formais, detectando contradições de lógica, termos ambíguos, redundâncias e requisitos não realizáveis de forma instantânea.",
    roleInER: "Validador e Auditor da Qualidade de Requisitos",
    practicalPrompt: "\"Analise a lista de requisitos a seguir e identifique contradições lógicas, ambiguidades linguísticas (ex: termos como 'rápido', 'seguro') e duplicações.\"",
    impact: "Alto"
  }
];

export const protocolAspects: ProtocolAspect[] = [
  {
    id: "p1",
    aspect: "Nível de Documentação",
    rigorousTitle: "Extensa e Formal",
    rigorousDetails: "Documentos de Especificação de Requisitos de Software (SRS) exaustivos de mais de 100 páginas, detalhados antes da codificação.",
    rigorousStandard: "ISO/IEC 29148 / IEEE 830",
    agileTitle: "Leve e Evolutiva",
    agileDetails: "Documentação baseada em Backlog de Produto (Histórias, Épicos) no Jira, refinada de forma contínua a cada sprint.",
    agileValue: "Software em funcionamento mais que documentação"
  },
  {
    id: "p2",
    aspect: "Gestão de Mudanças",
    rigorousTitle: "Comitê de Controle (CCB)",
    rigorousDetails: "Qualquer alteração requer análise de impacto formal, preenchimento de requisição (RDM) e aprovação formal de um comitê técnico.",
    rigorousStandard: "Processos de Governança Rigorosos",
    agileTitle: "Adaptação no Backlog",
    agileDetails: "Mudanças são bem-vindas. O Product Owner (PO) reordena o backlog para as próximas sprints baseando-se no valor de negócio e feedback do cliente.",
    agileValue: "Responder a mudanças mais que seguir um plano"
  },
  {
    id: "p3",
    aspect: "Foco Principal",
    rigorousTitle: "Conformidade e Contrato",
    rigorousDetails: "Garantir que o software construído seja idêntico ao documento assinado no início do projeto para fins legais e de auditoria.",
    rigorousStandard: "Engenharia de Sistemas Tradicional",
    agileTitle: "Colaboração e Valor",
    agileDetails: "Foco na entrega contínua de incrementos de valor para o cliente final, validando hipóteses e coletando feedback real.",
    agileValue: "Colaboração com o cliente mais que negociação de contratos"
  },
  {
    id: "p4",
    aspect: "Rastreabilidade",
    rigorousTitle: "Rígida de Ponta a Ponta",
    rigorousDetails: "Cada linha de código e caso de teste deve estar diretamente rastreado até um requisito original formal aprovado.",
    rigorousStandard: "Exigência de Auditorias Críticas",
    agileTitle: "Pragmática",
    agileDetails: "Rastreabilidade visual simples focada em ligar histórias de usuário aos critérios de aceitação e aos testes unitários associados.",
    agileValue: "Entrega contínua e testes automatizados"
  }
];

export const playgroundScenarios: PlaygroundScenario[] = [
  {
    id: "sc1",
    title: "Fintech 'PoupaMais' (App de Finanças)",
    clientPrompt: "Olá! Precisamos criar uma nova carteira digital. O usuário precisa visualizar o extrato dos últimos 30 dias rapidamente. Nosso departamento de segurança exige que as senhas dos usuários sejam criptografadas com SHA-256 no banco de dados. Ah, e nenhuma transferência Pix pode exceder o limite diário de R$ 5.000,00 sem aprovação biométrica especial por razões de conformidade do Banco Central.",
    items: [
      {
        id: "s1_i1",
        text: "O usuário deve visualizar o extrato financeiro dos últimos 30 dias na tela inicial.",
        type: "Funcional",
        explanation: "É uma funcionalidade explícita que o sistema deve realizar para o usuário (exibição de dados do extrato)."
      },
      {
        id: "s1_i2",
        text: "As senhas dos usuários devem ser criptografadas utilizando o algoritmo SHA-256.",
        type: "Não-Funcional",
        explanation: "É um requisito de segurança e qualidade técnica (como o sistema deve operar internamente de forma segura), não uma ação de negócio direta."
      },
      {
        id: "s1_i3",
        text: "Transferências Pix acima de R$ 5.000,00 por dia exigem autenticação biométrica adicional.",
        type: "Regra de Negócio",
        explanation: "Representa uma restrição/política do negócio e do Banco Central que governa a operação de transferências, independente da interface do software."
      }
    ]
  },
  {
    id: "sc2",
    title: "E-commerce 'EcoShop' (Produtos Sustentáveis)",
    clientPrompt: "Estamos desenhando nosso e-commerce. A página de listagem de produtos deve carregar em menos de 1.5 segundos para evitar perda de clientes por lentidão. O sistema deve permitir que o cliente filtre itens por pegada de carbono. Por fim, de acordo com o regulamento do nosso clube de benefícios, clientes premium sempre têm direito a frete grátis se a compra for superior a R$ 150,00.",
    items: [
      {
        id: "s2_i1",
        text: "A página de listagem de produtos deve carregar por completo em menos de 1.5 segundos sob carga normal.",
        type: "Não-Funcional",
        explanation: "É um requisito de desempenho (performance), estabelecendo um critério de qualidade e tempo de resposta do sistema."
      },
      {
        id: "s2_i2",
        text: "Permitir que o cliente filtre os produtos de acordo com a pegada de carbono.",
        type: "Funcional",
        explanation: "É uma funcionalidade interativa oferecida diretamente ao usuário final para buscar produtos."
      },
      {
        id: "s2_i3",
        text: "Clientes Premium ganham frete grátis em compras acima de R$ 150,00.",
        type: "Regra de Negócio",
        explanation: "É uma política comercial e de fidelidade que define como as transações financeiras e cálculos de frete devem se comportar no negócio."
      }
    ]
  }
];

export const referencesData = [
  {
    name: "IREB (International Requirements Engineering Board)",
    description: "Entidade global responsável pela certificação CPRE e o corpo de conhecimento oficial em Engenharia de Requisitos.",
    url: "https://www.ireb.org/"
  },
  {
    name: "Guia BABOK (Business Analysis Body of Knowledge)",
    description: "O padrão global para a prática de análise de negócios, que cobre amplamente o ciclo de vida de requisitos.",
    url: "https://www.iiba.org/standards-and-resources/babok/"
  },
  {
    name: "IEEE Software Engineering Standards",
    description: "Normas de engenharia de software da associação técnica profissional mais respeitada do mundo.",
    url: "https://www.computer.org/standards"
  },
  {
    name: "ISO/IEC/IEEE 29148:2018",
    description: "Padrão internacional que dita processos de engenharia de sistemas e software voltados para requisitos.",
    url: "https://www.iso.org/standard/72227.html"
  }
];
