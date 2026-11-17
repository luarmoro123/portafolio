const es = {
  meta: {
    title: 'Luis Morales | Desarrollador de Software y QA',
    description:
      'Desarrollador de software enfocado en calidad (QA) en Grupo STI. Automatización de pruebas con Playwright, pruebas de API con Postman y desarrollo web y móvil con React, Next.js, Astro y Kotlin.',
  },
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    certifications: 'Certificaciones',
    contact: 'Contacto',
    cv: 'Descargar CV',
    language: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skip: 'Saltar al contenido',
  },
  hero: {
    greeting: 'Hola, soy Luis',
    title: 'Desarrollador de Software & QA',
    description:
      'Me aseguro de que las aplicaciones web y móviles funcionen como deben: pruebas manuales y automatizadas con Playwright, pruebas de API con Postman y desarrollo con React, Next.js, Astro y Kotlin.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    available: 'QA en Grupo STI',
  },
  about: {
    intro:
      'Soy Técnico Superior Universitario en Desarrollo de Software Multiplataforma y estudio Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Sinaloa.',
    description:
      'Trabajo como QA en Grupo STI, donde reviso aplicaciones web y móviles, ejecuto pruebas manuales y escribo pruebas automatizadas. Esa mirada de calidad la llevo a mis propios proyectos: cada uno tiene sus pruebas desde el inicio.',
    highlights: [
      { title: 'Automatización', desc: 'Pruebas E2E con Playwright para web.' },
      { title: 'Pruebas de API', desc: 'Colecciones y validación de endpoints con Postman.' },
      { title: 'Pruebas manuales', desc: 'Revisión funcional de apps web y móviles.' },
      { title: 'Desarrollo', desc: 'Web con React, Next.js y Astro; Android con Kotlin.' },
    ],
    stats: {
      company: 'Empresa',
      projects: 'Proyectos con pruebas',
      degree: 'TSU terminado',
    },
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Mi camino en aseguramiento de calidad',
    present: 'Actualidad',
    education: 'Educación',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Herramientas y tecnologías con las que trabajo',
    groups: {
      qa: 'Calidad y pruebas',
      dev: 'Desarrollo',
      tools: 'Datos y herramientas',
    },
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Lo más reciente que he construido, con pruebas incluidas',
    filters: { all: 'Todos', web: 'Web', mobile: 'Móvil' },
    testing: 'Pruebas',
    private: 'Repositorio privado',
    inProgress: 'En desarrollo',
    viewDemo: 'Ver demo',
  },
  certifications: {
    title: 'Certificaciones',
    subtitle: 'Cursos y certificaciones que respaldan mi formación',
    credential: 'Ver credencial',
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Buscas a alguien para QA o desarrollo? Hablemos.',
    email: 'Correo',
    location: 'Ubicación',
    locationValue: 'México',
    send: 'Enviar un correo',
    follow: 'También me encuentras en',
  },
  term: {
    files: {
      about: 'sobre-mi.md',
      experience: 'experiencia.log',
      skills: 'habilidades.json',
      projects: 'proyectos/',
      certifications: 'certificaciones.yml',
      contact: 'contacto.sh',
    },
    roleFile: 'rol.txt',
    actionsDir: 'acciones',
    cmdProjects: './ver-proyectos',
    cmdContact: './contactar',
    builtBy: 'generado por',
    filterFlag: '--tipo',
    agentsTitle: 'agents.log',
    status: 'estado',
    agents: {
      planner: 'estructura de 7 secciones',
      ui: 'componentes listos',
      content: 'textos en 3 idiomas',
      data: 'experiencia y proyectos',
      qa: 'accesibilidad: 0 errores',
    },
    intro: {
      skip: 'Saltar intro',
      command: 'orchestrator build --target=portafolio',
      planner: 'planeando la estructura',
      ui1: 'construyendo <Navbar />',
      content: 'escribiendo el hero',
      ui2: 'agregando acciones',
      data: 'cargando panel de agentes',
      qa: 'ejecutando pruebas de accesibilidad',
      qaDone: '0 errores',
      done: 'portafolio listo',
    },
    statusBar: { branch: 'main', errors: '0 errores', encoding: 'UTF-8' },
  },
  footer: {
    madeWith: 'Hecho con Astro y Tailwind CSS',
  },
};

export default es;
