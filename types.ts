import type { IconType } from 'react-icons';

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
    usage: string;
    level: number; // Proficiency level 0-100
}

export interface ExperienceItem {
    period: string;
    company: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    stack: string[];
    image: string;
    results: string;
    link?: string;
}

export interface Badge {
    name: string;
    icon: IconType;
    description: string;
}
