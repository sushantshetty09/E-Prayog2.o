export interface Experiment {
  id: string;
  name: string;
  subject: 'physics' | 'chemistry' | 'biology' | 'mathematics';
  description: string;
  duration: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  pucLevel: 'PUC 1' | 'PUC 2' | 'Both';
  tags: string[];
  preview?: string; // description of preview animation
}

export const experiments: Experiment[] = [
  {
    id: 'ohms-law',
    name: 'Ohm\'s Law',
    subject: 'physics',
    description: 'Explore V=IR relationships through interactive circuit simulation',
    duration: 15,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Electricity', 'Circuits', 'PUC 2'],
    preview: 'Animated circuit with current flow dots showing voltage and current relationships'
  },
  {
    id: 'light-refraction',
    name: 'Light Refraction',
    subject: 'physics',
    description: 'Observe Snell\'s Law with adjustable mediums and angles',
    duration: 20,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Optics', 'Light', 'Snell\'s Law', 'PUC 2'],
    preview: 'Light ray bending at interface between different media with real-time angle measurements'
  },
  {
    id: 'titration-experiment',
    name: 'Titration Experiment',
    subject: 'chemistry',
    description: 'Perform acid-base titration with precision virtual burette',
    duration: 25,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Acids', 'Bases', 'Titration', 'PUC 2'],
    preview: 'Animated burette dropping liquid with color change indicator at endpoint'
  },
  {
    id: 'projectile-motion',
    name: 'Projectile Motion',
    subject: 'physics',
    description: 'Launch objects and trace real-time parabolic trajectories',
    duration: 18,
    difficulty: 'easy',
    pucLevel: 'PUC 1',
    tags: ['Mechanics', 'Motion', 'PUC 1'],
    preview: 'Parabolic arc dots showing trajectory with adjustable angle and velocity'
  },
  {
    id: 'chemical-bonding',
    name: 'Chemical Bonding',
    subject: 'chemistry',
    description: 'Build and visualize molecular structures in 3D',
    duration: 22,
    difficulty: 'medium',
    pucLevel: 'PUC 1',
    tags: ['Molecules', 'Bonds', '3D', 'PUC 1'],
    preview: '3D molecule building with bond formation animations'
  },
  {
    id: 'cell-division',
    name: 'Cell Division',
    subject: 'biology',
    description: 'Watch mitosis and meiosis in step-by-step 3D animation',
    duration: 30,
    difficulty: 'hard',
    pucLevel: 'PUC 2',
    tags: ['Cell Biology', 'Mitosis', 'Meiosis', 'PUC 2'],
    preview: 'Step-by-step cell division process with chromosome animations'
  },
  {
    id: 'magnetic-field-lines',
    name: 'Magnetic Field Lines',
    subject: 'physics',
    description: 'Visualize magnetic fields around magnets and conductors',
    duration: 16,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Magnetism', 'Fields', 'PUC 2'],
    preview: 'Animated field lines flowing around magnets with adjustable strength'
  },
  {
    id: 'acid-base-reactions',
    name: 'Acid-Base Reactions',
    subject: 'chemistry',
    description: 'Explore acid-base reactions and pH changes',
    duration: 20,
    difficulty: 'easy',
    pucLevel: 'PUC 1',
    tags: ['Acids', 'Bases', 'pH', 'PUC 1'],
    preview: 'Color-changing solutions with pH scale indicators'
  },
  {
    id: 'dna-extraction',
    name: 'DNA Extraction',
    subject: 'biology',
    description: 'Virtual DNA extraction from cells',
    duration: 28,
    difficulty: 'hard',
    pucLevel: 'PUC 2',
    tags: ['Genetics', 'DNA', 'Lab Techniques', 'PUC 2'],
    preview: 'Step-by-step extraction process with DNA strand visualization'
  },
  {
    id: 'circuit-builder',
    name: 'Circuit Builder',
    subject: 'physics',
    description: 'Build and test complex electrical circuits',
    duration: 25,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Electricity', 'Circuits', 'PUC 2'],
    preview: 'Drag-and-drop circuit components with real-time current flow'
  },
  {
    id: 'lens-formula',
    name: 'Lens Formula',
    subject: 'physics',
    description: 'Understand lens optics and image formation',
    duration: 18,
    difficulty: 'medium',
    pucLevel: 'PUC 2',
    tags: ['Optics', 'Lenses', 'PUC 2'],
    preview: 'Ray diagrams showing image formation with adjustable focal length'
  },
  {
    id: 'pn-junction',
    name: 'P-N Junction',
    subject: 'physics',
    description: 'Explore semiconductor physics and diodes',
    duration: 22,
    difficulty: 'hard',
    pucLevel: 'PUC 2',
    tags: ['Semiconductors', 'Electronics', 'PUC 2'],
    preview: 'Animated charge carrier movement in P-N junction'
  },
  {
    id: 'cell-mitosis',
    name: 'Cell Mitosis',
    subject: 'biology',
    description: 'Detailed mitosis animation with phases',
    duration: 24,
    difficulty: 'medium',
    pucLevel: 'PUC 1',
    tags: ['Cell Biology', 'Mitosis', 'PUC 1'],
    preview: 'Phase-by-phase mitosis with chromosome behavior'
  }
];

export const experimentsBySubject = {
  physics: experiments.filter(e => e.subject === 'physics'),
  chemistry: experiments.filter(e => e.subject === 'chemistry'),
  biology: experiments.filter(e => e.subject === 'biology'),
  mathematics: experiments.filter(e => e.subject === 'mathematics'),
};
