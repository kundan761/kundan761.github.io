import { Package, Database, Layers } from 'lucide-react';

export const achievements = [
  {
    title: 'Published npm Package · indian-kyc-validator',
    description: 'Open-sourced a fully test-covered validator for PAN, GSTIN, IFSC, phone, and Aadhaar numbers.',
    icon: Package,
    metricValue: 31,
    metricLabel: 'Tests passing',
    metricSuffix: '',
    gradient: 'from-emerald-300/40 via-teal-500/30 to-cyan-500/30',
  },
  {
    title: 'Led Production Data Migration · WelcomeScreen',
    description: 'Designed and executed a full data migration with minimal downtime, in coordination with a distributed team.',
    icon: Database,
    metricValue: 0,
    metricLabel: 'Downtime',
    metricSuffix: 'min',
    gradient: 'from-blue-300/40 via-indigo-500/30 to-violet-500/30',
  },
  {
    title: 'Full-Stack + AI Product Engineering',
    description: 'Built production systems spanning payments, real-time features, and AI integration — not just CRUD apps.',
    icon: Layers,
    metricValue: 3,
    metricLabel: 'Domains mastered',
    metricSuffix: '',
    gradient: 'from-indigo-300/40 via-blue-500/30 to-cyan-500/30',
  },
];
