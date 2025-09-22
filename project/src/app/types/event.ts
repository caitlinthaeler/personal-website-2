import { Tag } from "./tag"

export interface EventPeriod {
  startDate: { year: number; month?: number; day?: number };
  endDate?: { year: number; month?: number; day?: number };
  duration?: string;
}

export interface EventLink {
  name?: string;
  url: string;
  variant?: string;
}

interface BaseEvent {
  type: string; // discriminant
  title?: string;
  period: EventPeriod;
  description?: string;
  thumbnail?: string;
  tags?: Tag[];
  links?: EventLink[];
  points?: string[]; // remove eventually
}

export interface JobEvent extends BaseEvent {
  type: "job";
  company: string; // required for jobs
  companyLogo?: {
    image: string;
    link?: string;
  }
  points?: string[];
}

export interface EducationEvent extends BaseEvent {
  type: "education";
  institution: string;
  institutionLogo?: string;
  degree: string;
  field?: string;
  points?: string[]; // change to courses
}

export interface ProjectEvent extends BaseEvent {
  type: "project";
  points?: string[];
}

export interface ExperienceEvent extends BaseEvent {
  type: "experience";
  organization?: string;
  points?: string[];
}

export interface OpportunityEvent extends BaseEvent {
  type: "opportunity";
  provider?: string;
}

export type Event =
  | JobEvent
  | EducationEvent
  | ProjectEvent
  | ExperienceEvent
  | OpportunityEvent;
