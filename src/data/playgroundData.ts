/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RefinementChallenge } from '../types';

export const refinementChallenges: RefinementChallenge[] = [
  {
    id: "sistema-rapido-seguro",
    title: "Desafio 1: O Clássico 'Rápido e Seguro'",
    poorRequirement: "O novo portal de e-commerce precisa ser super rápido no carregamento de todas as páginas e totalmente imune a ataques de hackers.",
    context: "Este requisito foi digitado por um Diretor de Marketing em uma ata de reunião inicial. Do jeito que está escrito, ele é impossível de ser testado ou precificado.",
    ambiguities: [
      { term: "super rápido", explanation: "O que é 'super rápido' para um usuário pode ser lento para outro. Precisamos de métricas mensuráveis (segundos, milissegundos, taxa de transferência)." },
      { term: "todas as páginas", explanation: "Nem todas as páginas exigem a mesma performance. O checkout de pagamento, o catálogo principal e a renderização de imagens estáticas têm cargas computacionais e de rede totalmente diferentes." },
      { term: "totalmente imune", explanation: "Segurança 100% não existe em sistemas computacionais. O requisito deve especificar quais padrões de segurança e mitigações contra vulnerabilidades conhecidas devem ser adotados." }
    ],
    metricsOptions: [
      {
        id: "m1",
        text: "Tempo de carregamento inicial (LCP) menor que 2.0 segundos em conexões 3G/4G estáveis para até 5.000 usuários simultâneos, e conformidade rigorosa com a lista OWASP Top 10 com testes de invasão semestrais.",
        isCorrect: true,
        feedback: "Excelente! Você definiu métricas de tempo de carregamento específicas do setor (LCP) e associou a segurança a um padrão reconhecido internacionalmente (OWASP), viabilizando testes objetivos."
      },
      {
        id: "m2",
        text: "O carregamento deve ser instantâneo em qualquer navegador e o banco de dados deve usar uma inteligência artificial que bloqueie automaticamente qualquer tentativa de invasão suspeita.",
        isCorrect: false,
        feedback: "Incorreto. 'Instantâneo' e 'qualquer navegador' continuam sendo termos vagos. Bloqueio por IA sem especificar protocolos de segurança não é um critério mensurável de engenharia."
      },
      {
        id: "m3",
        text: "Garantir que a velocidade seja avaliada pelo Google PageSpeed Insights com nota acima de 90 e colocar criptografia de ponta a ponta em todos os cantos do site.",
        isCorrect: false,
        feedback: "Quase lá. Embora a nota do PageSpeed Insights seja uma métrica, 'criptografia de ponta a ponta em todos os cantos do site' é uma solução genérica (e computacionalmente pesada) que não especifica padrões técnicos de segurança reais (como TLS, HTTPS, hashes de senhas)."
      }
    ],
    refinedOptions: [
      {
        id: "r1",
        text: "RNF-04 (Performance): A página de catálogo de produtos do e-commerce deve apresentar um tempo de carregamento de conteúdo principal (Largest Contentful Paint) menor ou igual a 2.0 segundos sob condições de carga de até 2.500 conexões HTTP simultâneas.\nRNF-15 (Segurança): O tráfego de dados sensíveis de pagamento deve utilizar protocolo HTTPS com TLS 1.3. O sistema deve mitigar as vulnerabilidades listadas na OWASP Top 10, validado por varreduras de segurança automatizadas e testes de intrusão anuais.",
        isCorrect: true,
        rationale: "Perfeito! Este formato divide o requisito em Requisitos Não Funcionais (RNF) específicos, utiliza identificadores únicos, estabelece limites objetivos, adota protocolos industriais padronizados e define métodos de validação claros."
      },
      {
        id: "r2",
        text: "O e-commerce será desenvolvido com as tecnologias mais rápidas do mercado (Next.js, Tailwind, Rust) para garantir que as páginas carreguem em um piscar de olhos e nenhum hacker consiga quebrar as chaves de segurança do banco PostgreSQL.",
        isCorrect: false,
        rationale: "Incorreto. Engenharia de Requisitos foca no QUE o sistema deve fazer e quais as restrições de qualidade, não em prescrever tecnologias específicas (Next.js, Rust) sem justificativa de restrição de arquitetura. Além disso, 'piscar de olhos' continua sendo ambíguo."
      }
    ],
    standardRef: "IEEE 29148:2018 - Seção 5.2.8 (Requisitos de Desempenho e Segurança)"
  },
  {
    id: "relatorio-vendas-bom",
    title: "Desafio 2: O Botão de Formato 'Bom'",
    poorRequirement: "O sistema deve ter um botão que exporta relatórios de vendas em formato bom e que dê para abrir em qualquer lugar.",
    context: "Este requisito veio do Gerente de Vendas. Ele quer resolver uma necessidade real (analisar dados em outras ferramentas), mas as definições de 'formato bom' e 'em qualquer lugar' são meras opiniões.",
    ambiguities: [
      { term: "botão", explanation: "O requisito foca muito cedo em um elemento específico da interface (botão) antes de entender a capacidade do sistema. E se a exportação for agendada ou via API?" },
      { term: "formato bom", explanation: "O que é 'bom' para quem faz auditoria contábil (ex: planilhas CSV/XLSX) pode ser péssimo para um executivo que quer ler um resumo executivo visual (ex: PDF)." },
      { term: "abrir em qualquer lugar", explanation: "Indica a necessidade de interoperabilidade e portabilidade, mas precisa ser especificado em termos de formatos abertos padronizados que não exijam softwares proprietários raros." }
    ],
    metricsOptions: [
      {
        id: "m2_1",
        text: "Exportação de dados tabulares em formatos padrão de mercado: CSV (delimitado por ponto e vírgula) codificado em UTF-8 e planilhas formato OpenXML (.xlsx), além de relatórios executivos diagramados em formato PDF estático.",
        isCorrect: true,
        feedback: "Excepcional! Você identificou que 'formato bom' varia conforme o uso e especificou formatos técnicos reconhecidos que atendem a todas as necessidades (manipulação de dados e leitura visual)."
      },
      {
        id: "m2_2",
        text: "Exportar em Word, Excel, PowerPoint, Bloco de notas, HTML e enviar também um link por WhatsApp para que o usuário abra no celular de qualquer marca.",
        isCorrect: false,
        feedback: "Incorreto. Tentar abraçar todos os formatos proprietários sem priorização gera complexidade desnecessária e cara de desenvolvimento, além de focar em canais de entrega sem definir os critérios de formatação de dados."
      }
    ],
    refinedOptions: [
      {
        id: "r2_1",
        text: "RF-12 (Interoperabilidade): O painel financeiro deve disponibilizar uma funcionalidade de exportação de dados de vendas filtrados. O sistema deve gerar arquivos nos formatos CSV (compatível com RFC 4180) e PDF (ISO 32000-1).\nRF-12.1: A geração do relatório e o início do download não devem exceder 5.0 segundos para bases contendo até 10.000 registros de transações.",
        isCorrect: true,
        rationale: "Excelente! Esta especificação foca na funcionalidade (Interoperabilidade), adota especificações RFC/ISO formais para os formatos e estabelece uma meta de performance viável e testável para o volume de dados esperado."
      },
      {
        id: "r2_2",
        text: "O programador deve colocar uma opção no menu superior onde o gerente clica e baixa uma planilha bonita do Excel com todas as vendas coloridas por status de pagamento e faturamento consolidado.",
        isCorrect: false,
        rationale: "Incorreto. Evite termos subjetivos como 'planilha bonita' e 'coloridas por status' de forma vaga. A especificação técnica deve definir a lógica dos dados e as regras de negócio, mantendo o design visual desacoplado da regra de engenharia básica."
      }
    ],
    standardRef: "IEEE 29148:2018 - Seção 5.2.5 (Requisitos de Interface e Interoperabilidade)"
  },
  {
    id: "login-ia-idosos",
    title: "Desafio 3: A IA 'Fácil' para Idosos",
    poorRequirement: "Quero que o aplicativo tenha login inteligente usando IA para facilitar o acesso de pessoas idosas e evitar digitação.",
    context: "Requisito originado por um Product Owner focado em acessibilidade. A intenção é excelente, mas termos como 'login inteligente', 'usando IA' e 'facilitar' ocultam problemas severos de implementação e privacidade.",
    ambiguities: [
      { term: "login inteligente", explanation: "O que torna um login inteligente? Reconhecimento facial? Reconhecimento de voz? Detecção de padrão de digitação? Login sem senha? É preciso detalhar a jornada mecânica." },
      { term: "usando IA", explanation: "Adicionar 'IA' apenas por adicionar introduz complexidade de infraestrutura, custos de API e latência sem necessariamente resolver o problema de usabilidade do idoso." },
      { term: "facilitar o acesso", explanation: "Isso é um atributo de Usabilidade / Acessibilidade. A forma correta de mensurá-lo é através da conformidade com diretrizes de acessibilidade (WCAG) ou testes de tempo de tarefa com o público-alvo." }
    ],
    metricsOptions: [
      {
        id: "m3_1",
        text: "Uso de autenticação biométrica nativa do dispositivo (iOS FaceID/TouchID e Android BiometricPrompt) como fluxo primário, e conformidade com as diretrizes de acessibilidade WCAG 2.1 nível AA, incluindo suporte a leitores de tela e contraste mínimo de 4.5:1.",
        isCorrect: true,
        feedback: "Excelente escolha! A autenticação biométrica nativa resolve o problema de digitação de forma altamente segura e de baixo custo de desenvolvimento. A conformidade com a WCAG 2.1 garante de verdade a acessibilidade para idosos."
      },
      {
        id: "m3_2",
        text: "Uma IA com câmera de vídeo ligada que reconheça o rosto do idoso em menos de 1 segundo de qualquer ângulo e faça o login direto, dispensando qualquer uso de senhas ou chaves de segurança.",
        isCorrect: false,
        feedback: "Incorreto. Manter a câmera ligada continuamente e tentar reconhecer rostos sob 'qualquer ângulo' sem senhas alternativas de fallback viola severamente leis de privacidade (LGPD/GDPR) e diretrizes de segurança de autenticação."
      }
    ],
    refinedOptions: [
      {
        id: "r3_1",
        text: "RF-22 (Acessibilidade/Autenticação): O aplicativo móvel deve permitir que o usuário se autentique por meio de biometria nativa do dispositivo (reconhecimento facial ou digital) por meio das APIs Android BiometricPrompt e iOS LocalAuthentication.\nRNF-30 (Acessibilidade): Todas as telas de fluxo de login devem estar em conformidade com as diretrizes do WCAG 2.1 nível AA, garantindo que o tamanho mínimo de áreas tocáveis (touch targets) seja de 48x48 dp e que todos os elementos textuais possuam contraste mínimo de 4.5:1 em relação ao fundo.",
        isCorrect: true,
        rationale: "Perfeito! Você traduziu a vaga intenção de 'IA facilitada' em soluções técnicas de acessibilidade reais e seguras (biometria nativa) acompanhadas de padrões de design universais e verificáveis (WCAG AA, áreas de toque mínimas)."
      },
      {
        id: "r3_2",
        text: "O sistema usará algoritmos generativos de rede neural convolucional para identificar traços faciais de usuários seniores cadastrados, garantindo que o login seja inteligente e super intuitivo para qualquer vovô que use o aplicativo de celular.",
        isCorrect: false,
        rationale: "Incorreto. Isso é 'buzzword-driven specification' (especificação guiada por modismos). Tenta descrever uma tecnologia matemática complexa e desnecessária sem definir os requisitos básicos de acessibilidade, mantendo o tom informal e impreciso."
      }
    ],
    standardRef: "ISO/IEC/IEEE 29148:2018 - Seção 5.2.3 (Requisitos de Usabilidade e Acessibilidade)"
  }
];
