import type { Localized } from '../i18n';

export interface TimelineItem {
  role: Localized;
  org: string;
  /** Formato AAAA-MM. Sin `end` significa que sigue vigente. */
  start: string;
  end?: string;
  type: Localized;
  points: Record<keyof Localized, string[]>;
  tags?: string[];
}

export const experience: TimelineItem[] = [
  {
    role: { es: 'QA Engineer', en: 'QA Engineer', fr: 'Ingénieur QA' },
    org: 'Grupo STI',
    start: '2026-09',
    type: { es: 'Medio tiempo', en: 'Part-time', fr: 'Temps partiel' },
    points: {
      es: [
        'Reviso aplicaciones web y móviles antes de cada entrega.',
        'Escribo pruebas automatizadas end-to-end con Playwright.',
        'Pruebo y valido APIs con Postman.',
        'Ejecuto pruebas manuales y automatizadas en apps y sitios web.',
      ],
      en: [
        'Review web and mobile applications before each release.',
        'Write automated end-to-end tests with Playwright.',
        'Test and validate APIs with Postman.',
        'Run manual and automated tests on apps and websites.',
      ],
      fr: [
        'Revue des applications web et mobiles avant chaque livraison.',
        'Rédaction de tests automatisés de bout en bout avec Playwright.',
        "Tests et validation d'API avec Postman.",
        'Exécution de tests manuels et automatisés sur applications et sites web.',
      ],
    },
    tags: ['Playwright', 'Postman', 'Pruebas manuales', 'Web', 'Mobile'],
  },
  {
    role: { es: 'QA Tester (prácticas profesionales)', en: 'QA Tester (internship)', fr: 'Testeur QA (stage)' },
    org: 'Grupo STI',
    start: '2026-05',
    end: '2026-08',
    type: { es: 'Prácticas · 4 meses', en: 'Internship · 4 months', fr: 'Stage · 4 mois' },
    points: {
      es: [
        'Pruebas manuales y revisión de aplicaciones web y móviles.',
        'Primeros pasos en automatización con Playwright y pruebas de API con Postman.',
        'Al terminar las prácticas, la empresa me contrató.',
      ],
      en: [
        'Manual testing and review of web and mobile applications.',
        'First steps in automation with Playwright and API testing with Postman.',
        'At the end of the internship, the company hired me.',
      ],
      fr: [
        'Tests manuels et revue des applications web et mobiles.',
        "Premiers pas en automatisation avec Playwright et en tests d'API avec Postman.",
        "À la fin du stage, l'entreprise m'a embauché.",
      ],
    },
  },
];

export const education: TimelineItem[] = [
  {
    role: {
      es: 'Ingeniería en Tecnologías de la Información e Innovación Digital',
      en: 'B.Eng. in Information Technology and Digital Innovation',
      fr: "Ingénierie en technologies de l'information et innovation numérique",
    },
    org: 'Universidad Politécnica de Sinaloa',
    start: '2026-09',
    type: { es: 'En curso', en: 'In progress', fr: 'En cours' },
    points: { es: [], en: [], fr: [] },
  },
  {
    role: {
      es: 'TSU en Desarrollo de Software Multiplataforma',
      en: 'Associate Degree (TSU) in Multiplatform Software Development',
      fr: 'TSU en développement logiciel multiplateforme',
    },
    org: 'Universidad Politécnica de Sinaloa',
    start: '2024-09',
    end: '2026-08',
    type: { es: 'Terminado', en: 'Completed', fr: 'Obtenu' },
    points: { es: [], en: [], fr: [] },
  },
];
