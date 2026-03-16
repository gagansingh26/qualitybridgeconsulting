const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    bookCall: "Réserver une consultation",
  },
  hero: {
    pills: ["Développement digital", "Gouvernance SAP & UAT", "Automatisation des tests & Qualité"],
    titlePrefix: "Livraison d'entreprise,",
    titleAccent: "faite comme il se doit.",
    subtitle: "Développement digital, Gouvernance SAP & UAT et Ingénierie qualité — géré localement au Canada, livré à l'échelle mondiale.",
    reach: "Engagement client géré localement au Canada · Amérique du Nord · Europe · Asie",
    bookConsultation: "Réserver une consultation",
    bookCall: "Réserver un appel",
    stats: [
      { value: "Canada", label: "Siège & direction client" },
      { value: "3 régions", label: "Amériques · UE · Asie" },
      { value: "End-to-End", label: "Dev · SAP · QA" },
    ],
  },
  capabilities: {
    digitalDev: "Développement digital",
    sapGovernance: "Gouvernance SAP & UAT",
    globalNetwork: "Siège au Canada · Réseau mondial de partenaires",
    clientOversight: "Supervision client de bout en bout",
  },
  whatWeDeliver: {
    heading: "Ce que nous livrons",
    subheading: "Trois capacités intégrées — développement digital, gouvernance SAP et ingénierie qualité — livrées dans un seul engagement, géré depuis le Canada avec un réseau mondial de partenaires vérifiés.",
    cards: [
      {
        title: "Développement digital",
        desc: "Applications web sur mesure, tableaux de bord de reporting et outils métier — conçus pour la performance, la scalabilité et la préparation des parties prenantes.",
        detail: [
          "Applications web métier et portails",
          "Tableaux de bord de reporting et opérationnels",
          "Prototypage rapide et déploiement",
          "Design centré UX, prêt pour les parties prenantes",
        ],
      },
      {
        title: "Gouvernance SAP",
        desc: "Gouvernance UAT structurée et préparation aux versions pour les programmes SAP S/4HANA — avec des portes qualité définies, des approbations des parties prenantes et des décisions fondées sur les risques.",
        detail: [
          "Gouvernance UAT et approbation métier",
          "Préparation aux versions et portes qualité",
          "Stratégie de test SAP et couverture de régression",
          "Triage des défauts et gouvernance",
        ],
      },
      {
        title: "Ingénierie qualité",
        desc: "Stratégies qualité axées sur l'automatisation avec des frameworks modernes et une conception de tests assistée par IA — réduisant l'effort manuel et accélérant les cycles de version.",
        detail: [
          "Automatisation Cypress et Playwright",
          "Conception de tests assistée par IA",
          "Tests API et d'intégration",
          "Portes qualité CI/CD",
        ],
      },
    ],
  },
  howWeWork: {
    heading: "Comment nous travaillons",
    subheading: "Un engagement. Trois spécialisations. Géré avec un seul point de responsabilité au Canada.",
    steps: [
      {
        title: "Développer digitalement",
        desc: "Nous concevons et livrons des applications web modernes, tableaux de bord et portails — construits avec React, TypeScript et Tailwind CSS, du prototype rapide à la production.",
      },
      {
        title: "Gouverner les programmes SAP",
        desc: "Nous intégrons une gouvernance UAT structurée et une préparation aux versions dans les programmes SAP S/4HANA — avec des portes qualité, des approbations et des décisions go/no-go basées sur les risques.",
      },
      {
        title: "Intégrer la qualité",
        desc: "Nous automatisons la régression avec Cypress, Playwright et TOSCA — réduisant les cycles de test de 50 à 70 % et intégrant des portes qualité dans chaque pipeline CI/CD.",
      },
    ],
  },
  outcomes: {
    heading: "Résultats commerciaux",
    items: [
      { label: "Cycles de régression plus rapides", desc: "La couverture automatisée réduit considérablement le temps UAT manuel" },
      { label: "Risque de version réduit", desc: "Les portes qualité structurées préviennent les problèmes coûteux post-go-live" },
      { label: "Décisions Go/No-Go claires", desc: "Les métriques de défauts en temps réel éliminent les conjectures" },
      { label: "Confiance accrue des parties prenantes", desc: "Les parties prenantes approuvent avec une visibilité totale sur la disponibilité du système" },
    ],
  },
  problems: {
    heading: "Problèmes que nous résolvons",
    subheading: "Développement digital, programmes SAP, ingénierie qualité — voici les défis pour lesquels nous avons été créés.",
    items: [
      {
        pill: "Développement digital",
        title: "Des outils digitaux qui livrent tard et échouent en production",
        desc: "Applications web et tableaux de bord prêts pour les parties prenantes — du prototype rapide à la plateforme prête pour la production, avec CI/CD et portes qualité dès le premier jour.",
      },
      {
        pill: "Gouvernance SAP & UAT",
        title: "Des go-lives SAP sans UAT structuré ni processus d'approbation",
        desc: "Gouvernance UAT structurée pour SAP S/4HANA — portes qualité définies, approbations des parties prenantes et décisions go/no-go basées sur les risques plutôt que sur l'instinct.",
      },
      {
        pill: "Ingénierie qualité",
        title: "Des cycles de régression trop lents pour un rythme de version moderne",
        desc: "Ingénierie qualité axée sur l'automatisation avec Cypress, Playwright, TOSCA et tests Salesforce — réduisant le temps de régression de 50 à 70 % et intégrant des portes qualité dans chaque pipeline CI/CD.",
      },
    ],
  },

  cta: {
    heading: "Prêt à livrer avec confiance ?",
    body: "Développement digital, gouvernance SAP & UAT et ingénierie qualité — géré localement au Canada, livré à l'échelle mondiale avec un réseau de partenaires spécialisés.",
    bookConsultation: "Réserver une consultation",
    viewApproach: "Voir nos services",
    getInTouch: "Nous contacter",
  },

  // ─── NEW: Services page ───────────────────────────────────────────────────
  services: {
    heading: "Nos services",
    subheading: "Développement digital, Gouvernance SAP & UAT et Ingénierie qualité — trois spécialisations travaillant ensemble pour une livraison confiante et bien testée.",

    // Hero
    heroPrefix: "Nos spécialisations ·",
    heroAccent: "Un seul standard.",
    heroSubtitle: "Développement digital, Gouvernance SAP & UAT et Ingénierie qualité — livrés dans un seul engagement, gérés depuis le Canada.",
    heroStats: [
      { value: "Technologies modernes", label: "Développement digital" },
      { value: "SAP S/4HANA", label: "Gouvernance & UAT" },
      { value: "Frameworks modernes", label: "Ingénierie qualité" },
    ],

    // Tab labels — order matches home page pills
    tabDigital: "Développement digital",
    tabSap: "Gouvernance SAP & UAT",
    tabQuality: "Ingénierie qualité",

    digitalIntro: "Nous concevons et développons les outils numériques qui entourent vos systèmes essentiels — portails, tableaux de bord, prototypes et pipelines pour les livrer de manière fiable.",
    sapIntro: "Nous intégrons une gouvernance structurée dans chaque livraison SAP — de la planification initiale jusqu'à l'hypercare — garantissant des versions contrôlées, auditables et validées par les métiers.",
    qualityIntro: "Notre pratique d'ingénierie qualité automatise le répétitif et accélère le critique, afin que vos équipes puissent se concentrer sur la création de valeur plutôt que sur la chasse aux défauts.",
    qualityRelease: "Le même cadre de décision de version s'applique dans les engagements QE : chaque déploiement est contrôlé selon des critères de qualité mesurables avant qu'un go-live soit approuvé.",

    stripDigital: [
      { icon: "monitor", label: "Web · Tableaux de bord · Portails" },
      { icon: "zap", label: "React · TypeScript · Tailwind" },
      { icon: "settings", label: "Vite · Supabase · GitHub Actions" },
      { icon: "rocket", label: "Prototypage rapide · CI/CD" },
    ],
    stripSap: [
      { icon: "layers", label: "Plan · SIT · UAT · Version · Hypercare" },
      { icon: "shield", label: "Gouvernance UAT · Portes qualité" },
      { icon: "globe", label: "Amérique du Nord · Europe · Asie" },
      { icon: "checkSquare", label: "Fondé sur les risques · Approbation par les preuves" },
    ],
    stripQuality: [
      { icon: "cpu", label: "Cypress · Playwright · TOSCA" },
      { icon: "bot", label: "Conception de tests assistée par IA" },
      { icon: "gitBranch", label: "API · Intégration · Portes CI/CD" },
      { icon: "barChart", label: "Décisions de version basées sur les métriques" },
    ],

    digitalItems: [
      {
        title: "Applications web & portails",
        desc: "Applications React responsives et accessibles — des outils internes aux portails orientés clients — développées avec TypeScript et Tailwind CSS.",
      },
      {
        title: "Tableaux de bord de reporting",
        desc: "Tableaux de bord en temps réel et planifiés qui mettent en avant les métriques dont votre entreprise a besoin, connectés à vos sources de données existantes.",
      },
      {
        title: "Prototypage rapide",
        desc: "Du concept au prototype cliquable en quelques jours, en utilisant Lovable et Vite pour valider les idées avant de s'engager dans un développement complet.",
      },
      {
        title: "Intégration CI/CD & DevOps",
        desc: "Pipelines GitHub Actions, portes de tests automatisés et flux de déploiement qui maintiennent votre cadence de livraison rapide et sûre.",
      },
    ],
    digitalStackHeading: "Développé avec des outils modernes",
    digitalStackIntro: "Chaque projet utilise une stack open-source éprouvée — choisie en fonction de votre infrastructure, de votre équipe et de votre calendrier. Nous travaillons avec un réseau mondial de partenaires pour apporter la bonne expertise à chaque engagement.",
    digitalStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vite", "Lovable", "WordPress", "Shopify", "Webflow", "React Native", "Supabase", "GitHub Actions"],
    digitalCtaHeading: "Prêt à construire quelque chose ?",
    digitalCtaBody: "Parlez-nous de votre projet et nous établirons un plan de livraison adapté à votre calendrier et à votre budget.",
  },

  // ─── Existing keys preserved as-is ───────────────────────────────────────
  delivery: {
    heading: "Approche de livraison",
    subheading: "Un cycle de vie structuré de la planification à l'hypercare — intégrant la qualité à chaque étape.",
    phases: [
      { name: "Plan", desc: "Stratégie de test & alignement du périmètre avec les parties prenantes métier." },
      { name: "SIT", desc: "Planification de régression axée sur l'automatisation et exécution SIT structurée." },
      { name: "UAT", desc: "Coordination UAT, approbations métier et gouvernance des défauts." },
      { name: "Version", desc: "Gouvernance des versions fondée sur les risques avec application des portes qualité." },
      { name: "Hypercare", desc: "Surveillance post go-live, triage des défauts et stabilisation." },
    ],
    automationHeading: "Stratégie d'automatisation des tests",
    automationSubheading: "Automatisation multiplateforme sur SAP, Salesforce, web et API — avec Cypress, Playwright, TOSCA et conception de tests assistée par IA.",
    automationItems: [
      "Implémentation Cypress et Playwright",
      "Implémentation Cypress et Playwright",
      "Automatisation TOSCA pour SAP et plateformes enterprise",
      "Tests Salesforce Commerce Cloud",
      "Intégration CI/CD et portes qualité",
    ],
    coreCapabilities: "Compétences clés",
    capabilities: [
      "Planification des tests pour les programmes ERP",
      "Direction du triage des défauts",
      "Reporting & métriques pour les parties prenantes",
      "Portes qualité CI/CD",
      "IA pour l'optimisation des tests",
    ],
  },
  uat: {
    heading: "Framework de gouvernance UAT",
    subheading: "Un modèle opérationnel structuré pour l'UAT — de la planification à l'approbation — assurant la préparation métier et l'alignement qualité.",
    operatingModel: "Modèle opérationnel UAT",
    phases: [
      { name: "Plan", desc: "Définir le périmètre UAT, les délais, les besoins en ressources et les critères d'entrée." },
      { name: "Périmètre", desc: "Aligner les scénarios de test sur les processus métier et les zones à risque." },
      { name: "Exécuter", desc: "Exécuter les cycles UAT avec un suivi structuré et l'enregistrement des défauts." },
      { name: "Triage", desc: "Triage quotidien des défauts avec résolution par priorité et escalade." },
      { name: "Approbation", desc: "Obtenir les approbations formelles des métiers selon les critères de sortie." },
    ],
    keyControls: "Contrôles clés",
    controls: ["Critères d'entrée et de sortie", "Triage quotidien des défauts", "Alignement avec les parties prenantes", "Contrôle du périmètre et des changements"],
    outputs: "Livrables pour les parties prenantes",
    outputItems: [
      { title: "Rapports de statut UAT", desc: "Reporting régulier sur l'avancement de l'exécution, les tendances des défauts et les zones à risque." },
      { title: "Journaux de risques", desc: "Risques documentés avec gravité, responsabilité et actions d'atténuation." },
      { title: "Résumé de préparation au go-live", desc: "Vue consolidée des approbations, des points ouverts et de la recommandation de version." },
    ],
    deliverablesHeading: "Ce que la gouvernance UAT forte apporte",
    deliverables: ["Contrôle clair du périmètre", "Engagement métier", "Résolution des défauts plus rapide", "Confiance au go-live"],
  },
  release: {
    heading: "Framework de préparation aux versions",
    subheading: "Un modèle de gouvernance structuré pour les programmes SAP S/4HANA — consolidant la couverture des tests, la résolution des défauts et la préparation métier en une décision de version contrôlée et fondée sur les risques.",
    reach: "Soutien aux partenaires d'implémentation SAP en Amérique du Nord, en Europe et en Asie.",
    trackHeading: "Ce que nous suivons",
    trackItems: [
      { title: "Statut d'exécution des tests", desc: "Suivi de l'avancement des tests par domaine — SIT, UAT, régression — avec des critères d'achèvement clairs pour chaque phase." },
      { title: "Défauts par gravité & impact", desc: "Surveillance des défauts ouverts par priorité et impact métier pour s'assurer que les problèmes critiques sont résolus avant la version." },
      { title: "Approbations & préparation métier", desc: "Suivi des approbations des parties prenantes avec une responsabilité claire et des voies d'escalade." },
      { title: "Couverture d'automatisation pour la régression", desc: "Mesure de l'avancement de l'automatisation par rapport au périmètre de régression." },
    ],
    decisionModel: "Modèle de décision de version",
    statuses: [
      { label: "GO", desc: "Toutes les portes qualité satisfaites. Aucun défaut critique. Approbations métier complètes. Objectifs d'automatisation atteints." },
      { label: "GO CONDITIONNEL", desc: "Risques mineurs identifiés. Certaines approbations en attente ou défauts de faible priorité restants. Plans d'atténuation en place." },
      { label: "NO-GO", desc: "Blocages critiques présents. Défauts P1/P2 ouverts, approbations manquantes ou couverture de test insuffisante." },
    ],
    governanceHeading: "Comment les décisions de version sont gouvernées",
    governanceBody: "Chaque recommandation de version est dérivée d'évaluations structurées des portes qualité — évaluant les indicateurs de risque, la gravité des défauts ouverts, la préparation des unités métier et les seuils de couverture des tests. La position go/no-go résultante est transparente, fondée sur des preuves et formellement alignée sur les exigences d'approbation des parties prenantes.",
  },
  about: {
    heading: "À propos",
    tags: ["Développement digital", "Gouvernance SAP & UAT", "Automatisation des tests & Qualité"],
    bio: [
      "Je suis un professionnel de la livraison technologique et de l'ingénierie qualité avec plus de 10 ans d'expérience dans le DevTestOps piloté par l'IA, la transformation CI/CD et les stratégies qualité axées sur l'automatisation.",
      "Mon parcours couvre la livraison d'entreprise dans les domaines SaaS, ERP, assurance, HealthTech, FinTech et e-commerce — avec des plateformes comme Workday, SAP S/4HANA, Salesforce et Microsoft Dynamics 365. J'ai dirigé des programmes interrégionaux en Amérique du Nord, en Allemagne et en Inde.",
      "Au-delà des systèmes d'entreprise, je conçois et développe des sites web modernes et des applications web.",
      "Aujourd'hui, je me concentre sur l'application de l'IA générative et des LLMs pour améliorer la conception des tests, accélérer l'automatisation et soutenir la gouvernance des versions basée sur les risques.",
    ],
    focusHeading: "Domaines de spécialisation",
    focusAreas: [
      "Gouvernance des tests SAP",
      "IA pour l'ingénierie qualité",
      "Transformation DevTestOps",
      "Gestion des versions basée sur les risques",
      "Développement de sites web & d'applications web",
      "Conseil en transformation digitale",
    ],
  },
  contact: {
    heading: "Nous contacter",
    subheading: "Prêt à améliorer la qualité de vos versions ? Commençons une conversation.",
    email: "E-mail",
    bookCall: "Réserver un appel",
    location: "Localisation",
    formHeading: "Envoyer un message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "vous@entreprise.com",
    messagePlaceholder: "Parlez-moi de votre projet...",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    messageLabel: "Message",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    successTitle: "Message envoyé !",
    successDesc: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
    errorTitle: "Échec de l'envoi",
    errorDesc: "Une erreur s'est produite. Veuillez envoyer un e-mail directement.",
    heroStats: [
      { value: "Consultation gratuite", label: "Sans obligation" },
      { value: "Réponse rapide", label: "Garantie" },
      { value: "Sans engagement", label: "Juste une conversation" },
    ],
    stripConsultation: "Réserver une consultation gratuite",
    stripResponse: "Répond personnellement — pas un bot",
    stripReach: "Amérique du Nord · Europe · Asie",
    stripNoCommitment: "Sans engagement",
  },
  footer: {
    tagline: "Développement digital, gouvernance SAP & UAT et automatisation des tests & qualité — solutions end-to-end pour une livraison d'entreprise confiante.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    rights: "Tous droits réservés.",
    translationNote: "Certains contenus de ce site peuvent être traduits automatiquement et peuvent contenir des inexactitudes. La version anglaise est la version officielle.",
  },
  lang: {
    en: "Anglais",
    de: "Allemand",
    fr: "Français",
  },
};

export default fr;
