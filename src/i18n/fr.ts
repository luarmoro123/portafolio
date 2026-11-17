import type es from './es';

const fr: typeof es = {
  meta: {
    title: 'Luis Morales | Développeur logiciel et QA',
    description:
      "Développeur logiciel orienté qualité (QA) chez Grupo STI. Automatisation des tests avec Playwright, tests d'API avec Postman et développement web et mobile avec React, Next.js, Astro et Kotlin.",
  },
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    skills: 'Compétences',
    projects: 'Projets',
    certifications: 'Certifications',
    contact: 'Contact',
    cv: 'Télécharger le CV',
    language: 'Langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skip: 'Aller au contenu',
  },
  hero: {
    greeting: 'Bonjour, je suis Luis',
    title: 'Développeur logiciel & QA',
    description:
      "Je m'assure que les applications web et mobiles fonctionnent comme prévu : tests manuels et automatisés avec Playwright, tests d'API avec Postman et développement avec React, Next.js, Astro et Kotlin.",
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    available: 'QA chez Grupo STI',
  },
  about: {
    intro:
      "Je suis titulaire d'un diplôme de technicien supérieur (TSU) en développement logiciel multiplateforme et j'étudie l'ingénierie des technologies de l'information et de l'innovation numérique à l'Universidad Politécnica de Sinaloa.",
    description:
      "Je travaille comme QA chez Grupo STI : je révise des applications web et mobiles, j'exécute des tests manuels et j'écris des tests automatisés. J'applique cette exigence de qualité à mes propres projets : chacun a ses tests dès le départ.",
    highlights: [
      { title: 'Automatisation', desc: 'Tests de bout en bout avec Playwright.' },
      { title: "Tests d'API", desc: 'Collections et validation des endpoints avec Postman.' },
      { title: 'Tests manuels', desc: 'Revue fonctionnelle des applications web et mobiles.' },
      { title: 'Développement', desc: 'Web avec React, Next.js et Astro ; Android avec Kotlin.' },
    ],
    stats: {
      company: 'Entreprise',
      projects: 'Projets testés',
      degree: 'TSU obtenu',
    },
  },
  experience: {
    title: 'Expérience',
    subtitle: "Mon parcours en assurance qualité",
    present: "Aujourd'hui",
    education: 'Formation',
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Outils et technologies que j’utilise',
    groups: {
      qa: 'Qualité et tests',
      dev: 'Développement',
      tools: 'Données et outils',
    },
  },
  projects: {
    title: 'Projets',
    subtitle: 'Mes réalisations les plus récentes, tests compris',
    filters: { all: 'Tous', web: 'Web', mobile: 'Mobile' },
    testing: 'Tests',
    private: 'Dépôt privé',
    inProgress: 'En cours',
    viewDemo: 'Voir la démo',
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Cours et certifications qui appuient ma formation',
    credential: 'Voir le certificat',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Vous cherchez quelqu’un pour la QA ou le développement ? Parlons-en.',
    email: 'E-mail',
    location: 'Localisation',
    locationValue: 'Mexique',
    send: 'Envoyer un e-mail',
    follow: 'Retrouvez-moi aussi sur',
  },
  term: {
    files: {
      about: 'a-propos.md',
      experience: 'experience.log',
      skills: 'competences.json',
      projects: 'projets/',
      certifications: 'certifications.yml',
      contact: 'contact.sh',
    },
    roleFile: 'role.txt',
    actionsDir: 'actions',
    cmdProjects: './voir-projets',
    cmdContact: './contact',
    builtBy: 'généré par',
    filterFlag: '--type',
    agentsTitle: 'agents.log',
    status: 'statut',
    agents: {
      planner: 'structure en 7 sections',
      ui: 'composants prêts',
      content: 'textes en 3 langues',
      data: 'expérience et projets',
      qa: 'accessibilité : 0 erreur',
    },
    intro: {
      skip: "Passer l'intro",
      command: 'orchestrator build --target=portfolio',
      planner: 'planification de la structure',
      ui1: 'construction de <Navbar />',
      content: 'rédaction du hero',
      ui2: 'ajout des actions',
      data: 'chargement du panneau des agents',
      qa: "exécution des tests d'accessibilité",
      qaDone: '0 erreur',
      done: 'portfolio prêt',
    },
    statusBar: { branch: 'main', errors: '0 erreur', encoding: 'UTF-8' },
  },
  footer: {
    madeWith: 'Réalisé avec Astro et Tailwind CSS',
  },
};

export default fr;
