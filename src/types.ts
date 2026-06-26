/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  year: string;
  period: string;
  title: string;
  description: string;
  characteristics: string[];
  roleOfRequirements: string;
  iconName: string;
}

export interface PracticePhase {
  id: string;
  title: string;
  description: string;
  subTitle: string;
  objectives: string[];
  techniques: {
    name: string;
    description: string;
    whenToUse: string;
  }[];
  qualityCriteria: string[];
}

export interface RefinementChallenge {
  id: string;
  title: string;
  poorRequirement: string;
  context: string;
  ambiguities: {
    term: string;
    explanation: string;
  }[];
  metricsOptions: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  refinedOptions: {
    id: string;
    text: string;
    isCorrect: boolean;
    rationale: string;
  }[];
  standardRef: string;
}

export interface SkillItem {
  name: string;
  category: 'Hard' | 'Soft';
  description: string;
  importance: string;
  examples: string[];
}

export interface ReferenceItem {
  id: string;
  title: string;
  author: string;
  type: string;
  description: string;
  link?: string;
}
