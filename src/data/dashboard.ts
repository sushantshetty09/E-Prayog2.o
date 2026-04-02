export interface DashboardData {
  greeting: string;
  userName: string;
  streak: number;
  stats: {
    lessonsCompleted: { current: number; total: number; percentage: number };
    experimentsDone: { current: number; total: number; percentage: number };
    weeklyStudy: { current: string; total: string; percentage: number };
    overallScore: { current: number; total: number; percentage: number };
  };
  weeklyData: Array<{ day: string; hours: number }>;
  quickAccess: Array<{ name: string; type: string }>;
  recentExperiments: Array<{
    name: string;
    subject: string;
    completionDate: string;
    score: number;
  }>;
}

export const dashboardData: DashboardData = {
  greeting: 'Welcome back',
  userName: 'Arjun',
  streak: 7,
  stats: {
    lessonsCompleted: { current: 18, total: 40, percentage: 45 },
    experimentsDone: { current: 12, total: 40, percentage: 30 },
    weeklyStudy: { current: '4h 20m', total: '7h 30m', percentage: 60 },
    overallScore: { current: 84, total: 100, percentage: 84 }
  },
  weeklyData: [
    { day: 'Mon', hours: 1.2 },
    { day: 'Tue', hours: 2.1 },
    { day: 'Wed', hours: 0.8 },
    { day: 'Thu', hours: 1.8 },
    { day: 'Fri', hours: 2.4 },
    { day: 'Sat', hours: 3.1 },
    { day: 'Sun', hours: 1.5 }
  ],
  quickAccess: [
    { name: 'Physics Ch.3', type: 'lesson' },
    { name: 'Chemistry Lab', type: 'experiment' },
    { name: 'Biology Notes', type: 'notes' },
    { name: 'Math Formulas', type: 'reference' },
    { name: 'Previous Papers', type: 'practice' },
    { name: 'YOG Tutor', type: 'ai' }
  ],
  recentExperiments: [
    {
      name: 'Ohm\'s Law',
      subject: 'Physics',
      completionDate: '2024-03-15',
      score: 92
    },
    {
      name: 'Titration Experiment',
      subject: 'Chemistry',
      completionDate: '2024-03-14',
      score: 88
    },
    {
      name: 'Cell Division',
      subject: 'Biology',
      completionDate: '2024-03-13',
      score: 95
    }
  ]
};
