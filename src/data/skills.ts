export const skills = {
  qa: ['Playwright', 'Postman', 'Pruebas manuales', 'Pruebas E2E', 'Pruebas de API', 'Vitest', 'Pruebas de regresión'],
  dev: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'React Native', 'Kotlin', 'Jetpack Compose', 'Java', 'HTML', 'CSS', 'Tailwind CSS'],
  tools: ['Git', 'GitHub', 'PostgreSQL', 'Prisma', 'MySQL', 'MongoDB', 'Firebase', 'Docker', 'Vercel'],
} as const;

/** Traducción de las etiquetas que no son nombres propios. */
export const skillLabels: Record<string, { en: string; fr: string }> = {
  'Pruebas manuales': { en: 'Manual testing', fr: 'Tests manuels' },
  'Pruebas E2E': { en: 'E2E testing', fr: 'Tests E2E' },
  'Pruebas de API': { en: 'API testing', fr: "Tests d'API" },
  'Pruebas de regresión': { en: 'Regression testing', fr: 'Tests de régression' },
  'Pruebas unitarias': { en: 'Unit testing', fr: 'Tests unitaires' },
  'Pruebas de integración': { en: 'Integration testing', fr: "Tests d'intégration" },
};
