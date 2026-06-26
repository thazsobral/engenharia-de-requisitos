# Engenharia de Requisitos: Fundamentos, Métodos e a Era da Inteligência Artificial

Bem-vindo ao guia prático de **Engenharia de Requisitos (ER)**. Este repositório foi criado com o objetivo de ensinar os fundamentos conceituais, a evolução histórica, as técnicas de mercado, o impacto da IA no processo e protocolos práticos para diferentes tipos de projetos.

---

## 📌 Sumário
1. [O que é Engenharia de Requisitos?](#-o-que-é-engenharia-de-requisitos)
2. [História e Evolução](#-história-e-evolução)
3. [Técnicas e Métodos (com Exemplos)](#-técnicas-e-métodos-com-exemplos)
4. [A Evolução na Era da IA](#-a-evolução-na-era-da-ia)
5. [Protocolos de Execução](#-protocolos-de-execução)
6. [Referências Oficiais](#-referências-oficiais)

---

## 🔍 O que é Engenharia de Requisitos?

A Engenharia de Requisitos é uma subdisciplina da Engenharia de Software que se concentra em descobrir, analisar, documentar e verificar as necessidades dos stakeholders que um sistema de software deve atender. 

O principal objetivo é garantir que o sistema final resolva o problema real do cliente, minimizando retrabalho, custos e falhas de comunicação.

### Classificação de Requisitos
* **Requisitos Funcionais (RF):** Descrevem o que o sistema deve fazer (funções, comportamentos e serviços).
* **Requisitos Não Funcionais (RNF):** Descrevem as restrições ou qualidades do sistema (desempenho, segurança, confiabilidade, usabilidade).

> 💡 **Princípio Fundamental:** "O aspecto mais difícil da construção de um sistema de software é decidir exatamente o que construir." — *Fred Brooks (No Silver Bullet)*

---

## 📜 História e Evolução

A maturidade da Engenharia de Requisitos reflete a evolução da própria engenharia de software:


```

[Década de 70-80] ───> [Década de 90] ───> [Anos 2000] ───> [Hoje / Era da IA]
Cascata Extremo         IEEE 830          Manifesto Ágil       Co-pilotos e
(Especificações Rígidas)  (Padrão SRS)    (Histórias de Usuário)   Modelos LLM

```

* **Décadas de 1970 e 1980 (Abordagem Tradicional/Cascata):** Os requisitos eram tratados como a primeira fase imutável do ciclo de desenvolvimento. Erros nesta fase propagavam-se e geravam os maiores custos de falha de projetos da história da computação.
* **Década de 1990 (Formalização):** Surgimento de corpos de conhecimento e padrões internacionais, como o **IEEE 830** para a Especificação de Requisitos de Software (SRS), focando em documentos estruturados e rastreabilidade rigorosa.
* **Anos 2000 (Movimento Ágil):** O *Manifesto Ágil (2001)* mudou o foco de "documentação abrangente" para "software em funcionamento". Os requisitos passaram a ser dinâmicos, documentados de forma enxuta através de *User Stories* (Histórias de Usuário) e refinados continuamente (Backlog).
* **Atualidade (Abordagens Híbridas e IA):** O foco atual está em manter a agilidade sem perder a governança e a segurança, impulsionado por automações e Modelos de Linguagem (LLMs).

---

## 🛠 Técnicas e Métodos (com Exemplos)

O processo de Engenharia de Requisitos é tipicamente dividido em quatro atividades macro. Abaixo estão as técnicas mais comuns para cada uma:

### 1. Elicitação de Requisitos
Fase de descoberta e extração das necessidades dos stakeholders.

* **Técnica: Entrevistas Estruturadas / Semiestruturadas**
    * *Explicação:* Reuniões diretas com usuários e stakeholders para entender suas dores e objetivos.
    * *Exemplo:* Entrevistar o gestor financeiro para entender como é feita a conciliação bancária atual.
* **Técnica: Workshop de Requisitos (ex: JAD - Joint Application Design)**
    * *Explicação:* Sessões intensivas e colaborativas reunindo desenvolvedores, usuários e tomadores de decisão para alinhar expectativas rapidamente.

### 2. Análise e Negociação
Fase de triagem, modelagem e resolução de conflitos entre requisitos conflitantes.

* **Técnica: Casos de Uso (UML)**
    * *Explicação:* Modelagem visual e textual da interação do ator com o sistema.
    * *Exemplo:*
        ```text
        Caso de Uso: UC01 - Emitir Relatório Financeiro
        Ator Principal: Gestor Financeiro
        Fluxo Principal:
        1. O ator solicita a emissão de relatório.
        2. O sistema solicita o período de datas.
        3. O ator insere as datas e confirma.
        4. O sistema valida as datas e exibe o relatório na tela.
        ```
* **Técnica: Matriz de Priorização (ex: Método MoSCoW)**
    * *Explicação:* Divisão dos requisitos em quatro categorias vitais: *Must have* (Deve ter), *Should have* (Deveria ter), *Could have* (Poderia ter), *Won't have* (Não terá por enquanto).

### 3. Especificação
Fase de documentação formal ou semi-formal dos requisitos.

* **Técnica: Histórias de Usuário (User Stories) com Critérios de Aceite (BDD)**
    * *Explicação:* Técnica ágil para descrever funcionalidades sob a perspectiva do usuário final, complementada por cenários de teste legíveis.
    * *Exemplo:*
        ```markdown
        Como um: Cliente autenticado
        Eu quero: Filtrar meu histórico de compras por ano
        Para que: Eu possa encontrar comprovantes antigos rapidamente.

        Critério de Aceite (Dado/Quando/Então):
        Dado que estou na página de "Histórico de Compras"
        Quando eu selecionar o ano "2025" no filtro
        Então o sistema deve exibir apenas as compras realizadas entre 01/01/2025 e 31/12/2025.
        ```

### 4. Validação e Verificação
Fase que garante que os requisitos escritos estão corretos, consistentes e que atendem aos objetivos do negócio.

* **Técnica: Checklist de Inspeção**
    * *Explicação:* Revisão técnica do documento para checar ambiguidade, completude e testabilidade.
    * *Exemplo:* Perguntar-se: *"O requisito X possui alguma métrica de sucesso clara ou é subjetivo como 'o sistema deve ser rápido'?"*

---

## 🤖 A Evolução na Era da IA

A Inteligência Artificial Generativa e os Large Language Models (LLMs) transformaram a Engenharia de Requisitos, deixando de ser apenas um processo manual de escrita e passando a ser um processo assistido e iterativo.

### O que muda no processo?
1.  **Fim do "Papel em Branco":** IA reduz drasticamente o tempo de criação do rascunho inicial de especificações, casos de testes e histórias de usuário.
2.  **Rastreabilidade Automatizada:** Ferramentas de IA conseguem mapear um requisito de alto nível diretamente para o bloco de código correspondente ou caso de teste no repositório, identificando quebras de escopo em tempo real.
3.  **Detecção Prévia de Ambiguidades:** LLMs conseguem analisar documentos de centenas de páginas e apontar, em segundos, contradições lógicas (ex: o Requisito A diz que o CPF é obrigatório, mas o Requisito B diz que usuários estrangeiros sem CPF podem se cadastrar).

### Como o processo melhora com a IA?
* **Elicitação:** Geração automatizada de roteiros de entrevista personalizados baseados no nicho de mercado do cliente.
* **Refinamento:** Conversão instantânea de transcrições de áudio de reuniões com clientes em *User Stories* estruturadas com critérios de aceitação no padrão Gherkin (Dado/Quando/Então).
* **Simulação de Stakeholders:** Uso de personas baseadas em IA para simular como um usuário final técnico ou leigo utilizaria a interface antes mesmo de codificá-la.

---

## 📋 Protocolos de Execução

Dependendo criticamente do contexto do projeto (criticidade, segurança e restrições regulatórias), o engenheiro de software deve adotar protocolos diferentes.

### Comparativo de Protocolos

| Fase do Processo | Protocolo Padrão (Sistemas Críticos/Segurança) | Protocolo Rápido (MVP/Sistemas Simples) |
| :--- | :--- | :--- |
| **Foco Principal** | Governança, rastreabilidade, mitigação de riscos e conformidade jurídica. | Time-to-market, feedback rápido e validação de hipóteses de negócio. |
| **Elicitação** | Entrevistas formais, JAD e workshops estruturados com múltiplos stakeholders. | Briefing rápido com o Product Owner (PO) ou cliente principal e análise de concorrentes. |
| **Análise / Priorização** | Modelagem formal de Casos de Uso, Matriz de Rastreabilidade e aprovação por comitê. | Mapeamento de Histórias de Usuário (*User Story Mapping*) e técnica MoSCoW dinâmica. |
| **Especificação** | Documento de Especificação de Requisitos de Software (SRS) seguindo padrões como ISO/IEC/IEEE 29148. | Backlog do produto documentado diretamente em ferramentas visuais (Ex: Jira, Trello, GitHub Issues). |
| **Validação** | Homologação técnica formal, assinaturas de aceite de escopo e revisões por pares independentes. | Alinhamento em reuniões de *Sprint Planning* e validação contínua através de protótipos funcionais. |
| **Uso Ideal** | Fintechs, softwares médicos, sistemas governamentais, ERPs complexos ou segurança militar. | MVPs de startups, e-commerces simples, landing pages ou automações internas não críticas. |

---

## 📚 Referências Oficiais

Para aprofundar os estudos em Engenharia de Requisitos através de documentações e guias oficiais reconhecidos mundialmente:

* **[ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72087.html)**: Norma internacional padrão para Engenharia de Sistemas e Software — Processos de ciclo de vida — Engenharia de requisitos.
* **[IREB (International Requirements Engineering Board)](https://www.ireb.org/)**: Órgão provedor do esquema de certificação CPRE. Disponibiliza gratuitamente o *Glossário de Engenharia de Requisitos* e guias de estudo fundamentais.
* **[IEEE Standard 830-1998](https://ieeexplore.ieee.org/document/720574)**: Prática recomendada histórica do IEEE para a Especificação de Requisitos de Software (SRS) (substituído pela ISO 29148, mas conceitualmente histórico).
* **[BABOK Guide (IIBA)](https://www.iiba.org/business-analysis-standards/babok/)**: Guia para o Corpo de Conhecimento de Análise de Negócios (*Business Analysis Body of Knowledge*), essencial para entender a interface entre negócios e requisitos de software.
* **[Agile Alliance - User Stories Reference](https://www.agilealliance.org/glossary/user-stories/)**: Documentação e melhores práticas oficiais para definição de requisitos usando metodologias ágeis.
