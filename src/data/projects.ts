import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import eventopay from '../assets/projects/eventopay.png';
import payday from '../assets/projects/payday.png';
import kiosko from '../assets/projects/kiosko.png';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile';
  image: ImageMetadata;
  /** Cómo se ve la captura: `cover` para web, `contain` para pantallas de teléfono. */
  fit: 'cover' | 'contain';
  description: Localized;
  testing: Localized;
  technologies: string[];
  inProgress?: boolean;
  /** Solo si el repositorio es público. */
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'eventopay',
    title: 'EventoPay',
    category: 'web',
    image: eventopay,
    fit: 'cover',
    description: {
      es: 'Web instalable (PWA) para llevar el cobro de eventos como graduaciones, bodas o viajes. El administrador registra pagos e importa o exporta Excel; cada colaborador entra con un código y ve cuánto lleva y cuánto le falta.',
      en: 'Installable web app (PWA) to manage payments for events like graduations, weddings or trips. The admin records payments and imports or exports Excel; each member joins with a code and sees what they have paid and what is left.',
      fr: "Application web installable (PWA) pour gérer les paiements d'événements : remises de diplômes, mariages ou voyages. L'administrateur enregistre les paiements et importe ou exporte Excel ; chaque participant entre avec un code et voit ce qu'il a payé et ce qu'il reste.",
    },
    testing: {
      es: 'Pruebas unitarias y de integración con Vitest contra PostgreSQL, y flujos E2E con Playwright (cuentas, pagos, Excel).',
      en: 'Unit and integration tests with Vitest against PostgreSQL, plus E2E flows with Playwright (accounts, payments, Excel).',
      fr: "Tests unitaires et d'intégration avec Vitest sur PostgreSQL, et parcours E2E avec Playwright (comptes, paiements, Excel).",
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vitest', 'Playwright'],
  },
  {
    id: 'kiosko',
    title: 'Kiosko Reparaciones',
    category: 'web',
    image: kiosko,
    fit: 'cover',
    description: {
      es: 'Sitio one page para un negocio real de reparación de celulares en Mazatlán, con dos sucursales. Incluye cotizador de precios, servicios, mapas, preguntas frecuentes y contacto directo por WhatsApp.',
      en: 'One-page site for a real phone repair business in Mazatlán with two branches. It includes a price estimator, services, maps, FAQ and direct WhatsApp contact.',
      fr: 'Site one page pour une vraie entreprise de réparation de téléphones à Mazatlán, avec deux boutiques. Il comprend un estimateur de prix, les services, des cartes, une FAQ et un contact direct par WhatsApp.',
    },
    testing: {
      es: 'Sitio estático optimizado: imágenes en AVIF/WebP, sitemap, SEO local y revisión en móvil y escritorio.',
      en: 'Optimized static site: AVIF/WebP images, sitemap, local SEO and checks on mobile and desktop.',
      fr: 'Site statique optimisé : images AVIF/WebP, sitemap, SEO local et vérification sur mobile et ordinateur.',
    },
    technologies: ['Astro', 'TypeScript', 'CSS', 'SEO'],
  },
  {
    id: 'payday',
    title: 'PayDay',
    category: 'mobile',
    image: payday,
    fit: 'cover',
    inProgress: true,
    description: {
      es: 'App Android para administrar gastos personales y compartidos con tarjetas de bancos mexicanos. Calcula las fechas de corte y de pago de cada tarjeta y avisa 3 días antes.',
      en: 'Android app to manage personal and shared expenses on Mexican bank cards. It works out each card’s statement and payment dates and sends a reminder 3 days before.',
      fr: 'Application Android pour gérer les dépenses personnelles et partagées sur des cartes de banques mexicaines. Elle calcule les dates de relevé et de paiement de chaque carte et prévient 3 jours avant.',
    },
    testing: {
      es: 'Pruebas unitarias del motor de fechas (cortes, pagos y días inhábiles) desde la primera fase.',
      en: 'Unit tests for the date engine (statement dates, due dates and bank holidays) from the first phase.',
      fr: 'Tests unitaires du moteur de dates (relevés, échéances et jours fériés) dès la première phase.',
    },
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'SQLite', 'JUnit'],
  },
];
