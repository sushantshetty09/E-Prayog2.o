export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string; // component name
  accent: 'cyan' | 'green' | 'lime' | 'purple';
  tags: string[];
  pucLevels: ('PUC 1' | 'PUC 2')[];
  featured?: boolean;
  experimentCount: number;
}

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, Optics, Electricity, Magnetism, Waves & Modern Physics',
    icon: 'AtomOrbit',
    accent: 'cyan',
    tags: ['PUC 1', 'PUC 2'],
    pucLevels: ['PUC 1', 'PUC 2'],
    experimentCount: 12,
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Organic, Inorganic, Physical Chemistry, Chemical Bonding & Reactions',
    icon: 'FloatingMolecule',
    accent: 'green',
    tags: ['PUC 1', 'PUC 2'],
    pucLevels: ['PUC 1', 'PUC 2'],
    experimentCount: 10,
  },
  {
    id: 'virtual-lab',
    name: 'Virtual Lab',
    description: 'Perform 40+ curated virtual experiments with real-time simulation and guided procedure',
    icon: 'LabFlask',
    accent: 'green',
    tags: ['Interactive', 'Graded'],
    pucLevels: ['PUC 1', 'PUC 2'],
    experimentCount: 40,
    featured: true,
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Cell Biology, Genetics, Ecology, Human Physiology & Biotechnology',
    icon: 'DNAHelix',
    accent: 'lime',
    tags: ['PUC 1', 'PUC 2'],
    pucLevels: ['PUC 1', 'PUC 2'],
    experimentCount: 8,
  },
  {
    id: 'mathematics',
    name: 'Mathematics & Computer Science',
    description: 'Algebra, Calculus, Geometry, Statistics & Programming Fundamentals',
    icon: 'MathSymbols',
    accent: 'purple',
    tags: ['PUC 1', 'PUC 2'],
    pucLevels: ['PUC 1', 'PUC 2'],
    experimentCount: 6,
    featured: true,
  }
];

export const getSubjectAccent = (accent: string): string => {
  switch (accent) {
    case 'cyan':
      return '#5ce0f0';
    case 'green':
      return '#3dd68c';
    case 'lime':
      return '#8ec63f';
    case 'purple':
      return '#9b8ff0';
    default:
      return '#3dd68c';
  }
};
