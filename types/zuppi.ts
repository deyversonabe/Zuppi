export type UserRole = 'aluno' | 'mentor' | 'empresa' | 'admin';
export type ChallengeStatus = 'rascunho' | 'validado' | 'aberto' | 'em_andamento' | 'concluido' | 'cancelado';
export type ProjectStatus = 'match' | 'contratado' | 'em_andamento' | 'em_revisao' | 'concluido' | 'cancelado';
export type AIMode =
  | 'radar' | 'challenge' | 'match' | 'career'
  | 'impact' | 'pitch' | 'proposal' | 'validator'
  | 'evidence' | 'lgpd';
export type SplitLabel = 'aluno' | 'mentor' | 'plataforma' | 'impacto';

export interface PlatformUser {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  skills: string[];
  score: number;
  city?: string;
  state?: string;
  bio?: string;
  avatar_url?: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  urgency: number;
  recurrence: number;
  impact_potential: number;
  status: string;
  segment?: string;
  tags: string[];
  ai_summary?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  area: string;
  reward_cents: number;
  deadline_days: number;
  status: ChallengeStatus;
  required_skills: string[];
  impact_tags: string[];
  deliverables: string[];
}

export interface MatchResult {
  score: number;
  reasons: string[];
  risks: string[];
  recommended: boolean;
}

export interface KpiCard {
  label: string;
  value: string;
  delta: string;
}

export interface DemoChallenge {
  title: string;
  area: string;
  reward: string;
  match: number;
  days: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SplitItem {
  label: SplitLabel;
  percent: number;
}
