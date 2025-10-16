import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  achievement?: {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  };
}

export interface Project {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  demoLink: string;
  sourceLink?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
}

export interface ProfessionalSkill {
    name: string;
}