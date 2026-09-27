// Keep language-independent information here. Each id matches a translation key
// under TrainingPage.programs in BOTH messages/en.json and messages/ar.json.
export const trainingPrograms = [
  {
    id: 'emotionalIntelligence',
    slug: 'emotional-intelligence-in-the-workplace',
    image: '/images/training/emotional-intelligence.webp'
  },
  {
    id: 'leadership',
    slug: 'leadership-from-the-inside-out',
    image: '/images/media/building-resilient-teams.webp'
  },
  {
    id: 'wellbeing',
    slug: 'burnout-boundaries-and-professional-wellbeing',
    image: '/images/training/professional-wellbeing.webp'
  },
  {
    id: 'communication',
    slug: 'communication-that-connects',
    image: '/images/coaching/coaching-conversation.webp'
  },
  {
    id: 'learning',
    slug: 'accelerated-learning',
    image: '/images/coaching/space-to-reflect.webp'
  },
  {
    id: 'growth',
    slug: 'personal-growth-and-professional-clarity',
    image: '/images/media/growth-through-reflection.webp'
  },
  {
    id: 'timeManagement',
    slug: 'time-and-life-management',
    image: '/images/training/time-management.webp'
  }
] as const;

export type TrainingProgram = (typeof trainingPrograms)[number];

export function getTrainingProgram(slug: string) {
  return trainingPrograms.find((program) => program.slug === slug);
}
