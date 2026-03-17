const en = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    bookCall: "Book a Consultation",
  },
  hero: {
    pills: ["Digital Development", "SAP Governance & UAT", "Test Automation & Quality"],
    titlePrefix: "Enterprise Delivery,",
    titleAccent: "Done Right.",
    subtitle: "Helping organizations deliver reliable digital platforms through modern web development, SAP governance, and quality engineering — managed locally in Canada, delivered globally.",
    reach: "Client engagement managed locally in Canada · North America · Europe · Asia",
    bookConsultation: "Book a Consultation",
    bookCall: "Book a Call",
    stats: [
      { value: "Canada", label: "HQ & Client Lead" },
      { value: "3 Regions", label: "Americas · EU · Asia" },
      { value: "End-to-End", label: "Dev · SAP · QA" },
    ],
  },
  capabilities: {
    digitalDev: "Digital Development",
    sapGovernance: "SAP Governance & UAT",
    globalNetwork: "Canada HQ · Global Partner Network",
    clientOversight: "Retail · eCommerce · Enterprise",
  },
  partner: {
    strip: "Working alongside digital agencies and implementation partners to strengthen delivery with specialized quality engineering.",
    label: "Global Partner Network",
  },
  whatWeDeliver: {
    heading: "What We Deliver",
    subheading: "Digital development, SAP governance, and quality engineering — one conversation is all it takes to get started.",
    cards: [
      {
        title: "Digital Development",
        desc: "Purpose-built web applications, reporting dashboards, and business tools — designed for performance, scalability, and stakeholder readiness.",
        detail: [
          "Business web applications and portals",
          "Reporting and operational dashboards",
          "Rapid prototyping and deployment",
          "UX-focused, stakeholder-ready design",
        ],
      },
      {
        title: "SAP Governance",
        desc: "Structured UAT governance and release readiness for SAP S/4HANA programmes — with defined quality gates, stakeholder sign-offs, and risk-based decisions.",
        detail: [
          "UAT governance and business sign-off",
          "Release readiness and quality gates",
          "SAP test strategy and regression coverage",
          "Defect triage and governance",
        ],
      },
      {
        title: "Quality Engineering",
        desc: "Reliable enterprise platform delivery through structured quality engineering — automation frameworks, test strategy, and CI/CD quality integration that reduce defect leakage and accelerate release confidence.",
        detail: [
          "Cypress, Playwright, and more",
          "AI-assisted test design",
          "API and integration testing",
          "CI/CD quality gates",
        ],
      },
    ],
  },
  howWeWork: {
    heading: "How We Work",
    subheading: "One engagement. Three specialisations. Delivered with a single point of accountability in Canada.",
    steps: [
      {
        title: "Build Digitally",
        desc: "We design and ship modern web applications, dashboards, and portals — built with React, TypeScript, and Tailwind CSS, from rapid prototype to production.",
      },
      {
        title: "Govern SAP Programmes",
        desc: "We embed structured UAT governance and release readiness into SAP S/4HANA programmes — with quality gates, stakeholder sign-offs, and risk-based go/no-go decisions.",
      },
      {
        title: "Engineer Quality In",
        desc: "We build the quality engineering foundation that keeps enterprise platforms reliable — automated regression, CI/CD quality gates, and release confidence using Cypress, Playwright, TOSCA, and many more.",
      },
    ],
  },
  outcomes: {
    heading: "Business Outcomes",
    items: [
      { label: "Faster digital delivery", desc: "Modern tooling and rapid prototyping cut time from concept to production" },
      { label: "Controlled SAP go-lives", desc: "Structured UAT governance replaces gut-feel releases with evidence-based sign-offs" },
      { label: "Faster regression cycles", desc: "Automation-first quality engineering cuts manual test effort by 50–70%" },
      { label: "Improved stakeholder confidence", desc: "Full visibility into readiness at every stage — no surprises at go-live" },
    ],
  },
  problems: {
    heading: "Problems We Solve",
    subheading: "Across digital delivery, SAP programmes, and quality engineering — these are the challenges we're built to fix.",
    items: [
      {
        pill: "Digital Development",
        title: "Digital tools that ship late and break in production",
        desc: "Stakeholder-ready web apps and dashboards built with modern frameworks — from rapid prototype to production-grade platform, with CI/CD and quality gates from day one.",
      },
      {
        pill: "SAP Governance & UAT",
        title: "SAP go-lives with no structured UAT or sign-off process",
        desc: "Structured UAT governance and release readiness for SAP S/4HANA — defined quality gates, stakeholder sign-offs, and risk-based go/no-go decisions that replace gut feel with evidence.",
      },
      {
        pill: "Quality Engineering",
        title: "Regression cycles too slow to support modern release cadence",
        desc: "Enterprise platform reliability built through structured quality engineering — using Cypress, Playwright, TOSCA, and many more to reduce regression cycles by 50–70% and gate every release with evidence, not instinct.",
      },
    ],
  },

  cta: {
    heading: "Ready to Deliver With Confidence?",
    body: "Digital development, SAP governance & UAT, and quality engineering — managed locally in Canada, delivered globally.",
    bookConsultation: "Book a Consultation",
    viewApproach: "View Our Services",
    getInTouch: "Get in Touch",
  },

  // ─── NEW: Services page ───────────────────────────────────────────────────
  services: {
    heading: "Our Services",
    subheading: "Digital Development, SAP Governance & UAT, and Quality Engineering — three specialisations working together for confident, well-tested delivery.",

    // Hero
    heroPrefix: "Expert Specialisations ·",
    heroAccent: "One Standard.",
    heroSubtitle: "Digital Development, SAP Governance & UAT, and Quality Engineering — delivered under one engagement, managed from Canada.",
    heroStats: [
      { value: "Modern Tech", label: "Digital Development" },
      { value: "SAP S/4HANA", label: "Governance & UAT" },
      { value: "Automation Frameworks", label: "Quality Engineering" },
    ],

    // Tab labels — order matches home page pills
    tabDigital: "Digital Development",
    tabSap: "SAP Governance & UAT",
    tabQuality: "Quality Engineering",

    // Per-tab intro text
    digitalIntro: "Modern web applications, reporting dashboards, and rapid prototypes — built for performance, scalability, and stakeholder readiness. From APIs and integrations to production-grade platforms, we deliver digital tools that work reliably at enterprise scale.",
    sapIntro: "Structured testing and governance for SAP S/4HANA programmes and enterprise ERP integrations — with defined UAT frameworks, quality gates, stakeholder sign-offs, and risk-based go/no-go decisions at every stage of delivery.",
    qualityIntro: "Enterprise platform reliability through structured quality engineering — covering Salesforce, SAP, web, and API layers. We build automation frameworks, define test strategy, and integrate quality into every CI/CD pipeline using Cypress, Playwright, TOSCA, and many more.",
    qualityRelease: "The same release decision framework applies in QE engagements: every deployment is gated against measurable quality criteria before a go-live is approved.",

    // Context strip — 4 items per tab (icon key + label)
    stripDigital: [
      { icon: "monitor", label: "Web · Dashboards · Portals" },
      { icon: "zap", label: "React · TypeScript · Tailwind" },
      { icon: "settings", label: "Vite · Supabase · GitHub Actions" },
      { icon: "rocket", label: "Rapid Prototyping · CI/CD" },
    ],
    stripSap: [
      { icon: "layers", label: "Plan · SIT · UAT · Release · Hypercare" },
      { icon: "shield", label: "UAT Governance · Quality Gates" },
      { icon: "globe", label: "North America · Europe · Asia" },
      { icon: "checkSquare", label: "Risk-Based · Evidence-Based Sign-off" },
    ],
    stripQuality: [
      { icon: "cpu", label: "Cypress · Playwright · and more" },
      { icon: "bot", label: "AI-Assisted Test Design" },
      { icon: "gitBranch", label: "API · Integration · CI/CD Gates" },
      { icon: "barChart", label: "Metrics-Based Release Decisions" },
    ],

    // Digital tab content
    digitalItems: [
      {
        title: "Web Applications & Portals",
        desc: "Responsive, accessible React applications — from internal tools to client-facing portals — built with TypeScript and Tailwind CSS.",
      },
      {
        title: "Reporting Dashboards",
        desc: "Real-time and scheduled dashboards that surface the metrics your business needs, connected to your existing data sources.",
      },
      {
        title: "Rapid Prototyping",
        desc: "From concept to clickable prototype in days, using Lovable and Vite to validate ideas before committing to full development.",
      },
      {
        title: "CI/CD & DevOps Integration",
        desc: "GitHub Actions pipelines, automated testing gates, and deployment workflows that keep your delivery cadence fast and safe.",
      },
    ],
    digitalStackHeading: "Built With Modern Tooling",
    digitalStackIntro: "Every project uses a proven, open-source stack — chosen to fit your infrastructure, team, and delivery timeline. We work with a curated global partner network to bring the right capability to every engagement.",
    digitalStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vite", "Lovable", "WordPress", "Shopify", "Webflow", "React Native", "Supabase", "GitHub Actions"],
    digitalCtaHeading: "Ready to Build Something?",
    digitalCtaBody: "Tell us about your project and we will scope a delivery plan that fits your timeline and budget.",
  },

  // ─── Existing keys preserved as-is ───────────────────────────────────────
  delivery: {
    heading: "Delivery Approach",
    subheading: "A structured lifecycle from planning through hypercare — embedding quality at every stage.",
    phases: [
      { name: "Plan", desc: "Test strategy & scope alignment with business stakeholders." },
      { name: "SIT", desc: "Automation-first regression planning and structured SIT execution." },
      { name: "UAT", desc: "UAT coordination, business sign-offs, and defect governance." },
      { name: "Release", desc: "Risk-based release governance with quality gate enforcement." },
      { name: "Hypercare", desc: "Post go-live monitoring, defect triage, and stabilization." },
    ],
    automationHeading: "Test Automation Strategy",
    automationSubheading: "Reliable enterprise platform delivery through automation frameworks built across SAP, Salesforce, web, and API layers — using Cypress, Playwright, TOSCA, and many more, accelerated by AI-assisted test design.",
    automationItems: [
      "Cypress, Playwright, TOSCA, and many more",
      "Salesforce Commerce Cloud & enterprise platform testing",
      "SAP test automation and regression coverage",
      "CI/CD integration and quality gates",
    ],
    coreCapabilities: "Core Capabilities",
    capabilities: [
      "Test planning for ERP programs",
      "Defect triage leadership",
      "Stakeholder reporting & metrics",
      "CI/CD quality gates",
      "AI for test optimization",
    ],
  },
  uat: {
    heading: "UAT Governance Framework",
    subheading: "A structured operating model for UAT — from planning through sign-off — ensuring business readiness and quality alignment.",
    operatingModel: "UAT Operating Model",
    phases: [
      { name: "Plan", desc: "Define UAT scope, timelines, resource needs, and entry criteria." },
      { name: "Scope", desc: "Align test scenarios to business processes and risk areas." },
      { name: "Execute", desc: "Run UAT cycles with structured tracking and defect logging." },
      { name: "Triage", desc: "Daily defect triage with priority-based resolution and escalation." },
      { name: "Sign-off", desc: "Obtain formal business sign-offs against exit criteria." },
    ],
    keyControls: "Key Controls",
    controls: ["Entry and exit criteria", "Daily defect triage", "Business stakeholder alignment", "Scope and change control"],
    outputs: "Outputs for Stakeholders",
    outputItems: [
      { title: "UAT Status Reports", desc: "Regular reporting on execution progress, defect trends, and risk areas." },
      { title: "Risk Logs", desc: "Documented risks with severity, ownership, and mitigation actions." },
      { title: "Go-Live Readiness Summary", desc: "Consolidated view of sign-offs, open items, and release recommendation." },
    ],
    deliverablesHeading: "What Strong UAT Governance Delivers",
    deliverables: ["Clear scope control", "Business engagement", "Faster defect resolution", "Go-live confidence"],
  },
  release: {
    heading: "Release Readiness Framework",
    subheading: "A structured governance model for SAP S/4HANA programmes — consolidating test coverage, defect resolution, and business readiness into a controlled, risk-based release decision.",
    reach: "Supporting SAP implementation partners across North America, Europe, and Asia.",
    trackHeading: "What We Track",
    trackItems: [
      { title: "Test Execution Status", desc: "Tracking test progress by scope area — SIT, UAT, regression — with clear completion criteria for each phase." },
      { title: "Defects by Severity & Impact", desc: "Monitoring open defects by priority and business impact to ensure critical issues are resolved before release." },
      { title: "Business Sign-offs & Readiness", desc: "Tracking stakeholder approvals across business areas with clear accountability and escalation paths." },
      { title: "Automation Coverage for Regression", desc: "Measuring automation progress against regression scope to ensure sustainable, repeatable test execution." },
    ],
    decisionModel: "Release Decision Model",
    statuses: [
      { label: "GO", desc: "All quality gates met. No critical defects. Business sign-offs complete. Automation targets achieved." },
      { label: "CONDITIONAL GO", desc: "Minor risks identified. Some sign-offs pending or low-priority defects remain. Mitigation plans in place." },
      { label: "NO-GO", desc: "Critical blockers present. Open P1/P2 defects, missing sign-offs, or insufficient test coverage." },
    ],
    governanceHeading: "How Release Decisions Are Governed",
    governanceBody: "Each release recommendation is derived from structured quality gate assessments — evaluating risk indicators, open defect severity, business unit readiness, and test coverage thresholds. The resulting go/no-go position is transparent, evidence-based, and formally aligned with business stakeholder sign-off requirements.",
  },
  about: {
    heading: "About",
    tags: ["Digital Development", "SAP Governance & UAT", "Test Automation & Quality"],
    bio: [
      "I'm a Technology Delivery and Quality Engineering professional with over 10 years of experience driving AI-enabled DevTestOps, CI/CD transformation, and automation-first quality strategies. I help organizations ship faster with confidence by embedding quality earlier in the delivery lifecycle.",
      "My background spans enterprise delivery across SaaS, ERP, Insurance, HealthTech, FinTech, and e-commerce — working with platforms like Workday, SAP S/4HANA, Salesforce, and Microsoft Dynamics 365. I've led cross-regional programs across North America, Germany, and India, aligning product, engineering, and QA teams around shared outcomes.",
      "Beyond enterprise systems, I design and build modern websites and web applications — bridging the gap between complex backend platforms and polished digital experiences.",
      "Today, I focus on applying Generative AI and LLMs to improve test design, accelerate automation, enable predictive defect detection, and support risk-informed, metrics-based release governance across globally distributed teams.",
    ],
    focusHeading: "Focus Areas",
    focusAreas: [
      "SAP test governance",
      "AI for quality engineering",
      "DevTestOps transformation",
      "Risk-based release management",
      "Website & web application development",
      "Digital transformation consulting",
    ],
  },
  contact: {
    heading: "Get in Touch",
    subheading: "Ready to improve your release quality? Let's start a conversation.",
    email: "Email",
    bookCall: "Book a Call",
    location: "Location",
    formHeading: "Send a Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@company.com",
    messagePlaceholder: "Tell me about your project...",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    send: "Send Message",
    sending: "Sending…",
    successTitle: "Message sent!",
    successDesc: "Thank you for reaching out. I'll get back to you soon.",
    errorTitle: "Failed to send",
    errorDesc: "Something went wrong. Please try emailing directly.",
    heroStats: [
      { value: "Free Consultation", label: "No obligation" },
      { value: "Quick Response", label: "Guaranteed" },
      { value: "No Commitment", label: "Just a conversation" },
    ],
    stripConsultation: "Book a free consultation",
    stripResponse: "Responds personally — not a bot",
    stripReach: "North America · Europe · Asia",
    stripNoCommitment: "No commitment required",
  },
  platforms: {
    heading: "Platforms We Work With",
    subheading: "Modern web applications built with React and Next.js. Structured SAP governance and UAT. Automation-first quality engineering with Cypress, Playwright, TOSCA, and many more — the right tools for every layer of enterprise delivery.",
    groups: [
      {
        label: "Digital Development",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Supabase"],
      },
      {
        label: "SAP Governance & UAT",
        items: ["SAP S/4HANA", "SAP Activate", "UAT Governance", "Quality Gates", "Release Readiness"],
      },
      {
        label: "Quality Engineering",
        items: ["Cypress", "Playwright", "TOSCA", "Selenium", "ServiceNow", "Salesforce Commerce Cloud", "Workday", "Microsoft Dynamics 365", "GitHub Actions", "Jenkins"],
      },
    ],
  },

  footer: {
    tagline: "Digital development, SAP governance & UAT, and test automation & quality — end-to-end solutions for confident enterprise delivery.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
    translationNote: "Some content on this website may be automatically translated and may contain inaccuracies. The English version is the official version.",
  },
  lang: {
    en: "English",
    de: "German",
    fr: "French",
  },
};

export default en;
