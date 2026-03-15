import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Settings, Brain, Building2, Globe, ShieldCheck, LineChart, Sparkles, CheckCircle2, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePageMeta } from "@/hooks/use-page-meta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LINKEDIN_URL = "https://www.linkedin.com/in/gagansingh26/";

const industries = ["SaaS", "ERP", "Insurance", "HealthTech", "FinTech", "eCommerce"];
const platforms = ["Workday", "SAP S/4HANA", "Salesforce", "Microsoft Dynamics 365"];
const toolbox = ["Cypress", "Playwright", "Jenkins", "GitHub Actions", "Docker", "Grafana", "Datadog", "Azure DevOps", "Quality Gates", "Release Governance"];

const principleIcons = [ShieldCheck, LineChart, Sparkles, Globe];
const focusIcons = [Briefcase, Settings, Brain, Building2];

const content = {
  en: {
    heading: "About QualityBridge Consulting",
    heroPills: ["Digital Development", "SAP Governance & UAT", "Test Automation & Quality"],
    heroTitle: "10 years. 3 continents.",
    heroAccent: "One standard.",
    heroSubtitle: "Enterprise delivery built on real programmes, real outcomes, and a network of specialists who've done it before.",
    heroStats: [
      { value: "50–70%", label: "Faster regression cycles" },
      { value: "Quarterly → Bi-weekly", label: "Release cadence achieved" },
      { value: "30–40%", label: "Less production defects" },
    ],
    founderName: "Gagan Singh",
    founderTitle: "Founder",
    founderLocation: "Greater Toronto Area, Canada",
    founderExperience: "10+ years · North America · Europe · Asia",
    founderCta: "Connect on LinkedIn",
    intro: "QualityBridge Consulting was built on a simple frustration: too many enterprise programmes ship late, break in production, and leave business stakeholders without the visibility they need to make confident decisions. We exist to fix that.",
    bullets: [
      "SAP S/4HANA UAT governance, release readiness, and structured go/no-go decisions.",
      "Automation-first quality engineering using Cypress, Playwright, and AI-assisted test design.",
      "Purpose-built web applications, dashboards, and digital tools for enterprise and growing businesses.",
    ],
    paragraph1: "The experience behind QualityBridge spans over a decade of enterprise delivery — working across <strong>Johnson & Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong>, and <strong>Aon</strong>, as well as programmes in medical devices, luxury retail, and financial services across teams in North America, Germany, and India. That breadth is what makes it possible to walk into a complex programme and know what good looks like.",
    paragraph2: "We work with a carefully selected network of specialist partners across North America, Europe, and India — each vetted for their domain expertise and delivery track record. Clients get access to the right capability at every phase, without the overhead of managing multiple vendors.",
    paragraph3: "Whether you're running a SAP transformation, scaling a QA practice, or building a digital product — the standard doesn't change. Structure, transparency, and no surprises.",
    ctaGetInTouch: "Get in Touch",
    ctaViewWork: "View LinkedIn",
    atAGlance: "At a Glance",
    statsLabels: { experience: "Experience", regions: "Regions", regionsSub: "North America · Europe · India", strength: "Strength", focus: "Focus" },
    platforms: "Enterprise Platforms",
    industries: "Industries",
    whatYouCanExpect: "What You Can Expect",
    expectations: [
      "A single point of contact in Canada — accountable for the full engagement.",
      "Structured UAT governance and release readiness with clear go/no-go signals.",
      "Automation-first quality strategies embedded in your CI/CD pipeline.",
      "Access to vetted global specialists matched to your exact programme needs.",
    ],
    howIApproach: "How We Approach Delivery",
    approachIntro: "Every engagement follows the same model: understand the programme, embed quality early, and never let a release decision be made on gut feel.",
    principles: [
      { title: "Shift-Left Quality", desc: "Catching issues early in the pipeline is cheaper, faster, and less disruptive than fixing them at UAT." },
      { title: "Metrics-Driven Decisions", desc: "Release decisions backed by defect trends, coverage data, and readiness signals — not gut feel." },
      { title: "AI-Augmented Testing", desc: "Using GenAI and LLMs to accelerate test design, surface risk, and reduce repetitive manual effort." },
      { title: "Global Delivery, Local Oversight", desc: "Canada-based engagement management with vetted global specialists across 3 regions." },
    ],
    toolbox: "Toolbox",
    toolboxIntro: "Tools and frameworks used across delivery engagements for automation, observability, and release governance.",
    focusAreas: "Focus Areas",
    focusAreasData: [
      { id: "devtestops", title: "DevTestOps & CI/CD Quality Gates", outcome: "50–70% faster regression cycles achieved across engagements.", content: "Embedding automated quality gates into CI/CD pipelines to enforce standards at every stage — from unit tests through to release readiness. Using Jenkins, GitHub Actions, and Docker to build repeatable, scalable delivery workflows." },
      { id: "sap", title: "SAP & ERP Test Governance", outcome: "Release cadence improved from quarterly to bi-weekly on SAP programmes.", content: "Structured UAT governance and release readiness for SAP S/4HANA programmes — with defined quality gates, stakeholder sign-offs, and risk-based go/no-go decisions. Experienced across full S/4HANA implementation and migration lifecycles." },
      { id: "ai", title: "AI-Enabled Quality Engineering", outcome: "30–40% reduction in production defect leakage through shift-left validation.", content: "Applying Generative AI and LLMs to test design, risk identification, and automation acceleration. Reducing manual effort while improving coverage and feedback speed across complex enterprise platforms." },
      { id: "web", title: "Digital Development & Web Applications", outcome: "End-to-end digital tools delivered from prototype to production.", content: "Building modern, performant web applications and reporting dashboards — from rapid prototypes to production-grade tools. Bridging the gap between complex enterprise backends and polished, stakeholder-ready digital experiences." },
    ],
    openToConversation: "Ready to work together?",
    openToConversationBody: "Whether you're planning a SAP programme, scaling your QA practice, or building a digital product — let's start with a conversation.",
    ctaContact: "Get in Touch",
    ctaLinkedIn: "LinkedIn",
  },
  de: {
    heading: "Über QualityBridge Consulting",
    heroPills: ["Digitale Entwicklung", "SAP-Governance & UAT", "Testautomatisierung & Qualität"],
    heroTitle: "10 Jahre. 3 Kontinente.",
    heroAccent: "Ein Standard.",
    heroSubtitle: "Enterprise-Delivery auf Basis realer Programme, echter Ergebnisse und einem Netzwerk von Spezialisten, die es schon getan haben.",
    heroStats: [
      { value: "50–70%", label: "Schnellere Regressionszyklen" },
      { value: "Quartalsweise → Zweiwöchentlich", label: "Release-Kadenz erreicht" },
      { value: "30–40%", label: "Weniger Produktionsfehler" },
    ],
    founderName: "Gagan Singh",
    founderTitle: "Gründer",
    founderLocation: "Greater Toronto Area, Kanada",
    founderExperience: "10+ Jahre · Nordamerika · Europa · Asien",
    founderCta: "Auf LinkedIn verbinden",
    intro: "QualityBridge Consulting entstand aus einer einfachen Frustration: Zu viele Enterprise-Programme liefern zu spät, scheitern in der Produktion und lassen Stakeholder ohne die Transparenz zurück, die sie für sichere Entscheidungen brauchen. Wir existieren, um das zu ändern.",
    bullets: [
      "SAP S/4HANA UAT-Governance, Release-Bereitschaft und strukturierte Go/No-Go-Entscheidungen.",
      "Automatisierungsorientiertes Quality Engineering mit Cypress, Playwright und KI-gestütztem Testdesign.",
      "Maßgeschneiderte Webanwendungen, Dashboards und digitale Tools für Unternehmen.",
    ],
    paragraph1: "Die Erfahrung hinter QualityBridge umfasst über ein Jahrzehnt Enterprise-Delivery — mit Einsätzen bei <strong>Johnson & Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong> und <strong>Aon</strong> sowie Programmen in Medizingeräten, Luxuseinzelhandel und Finanzdienstleistungen, in Teams in Nordamerika, Deutschland und Indien. Diese Breite ermöglicht es, in ein komplexes Programm einzusteigen und zu wissen, wie gut aussieht.",
    paragraph2: "Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk von Spezialisten aus Nordamerika, Europa und Indien — jeweils geprüft auf Fachkompetenz und Lieferbilanz. Kunden erhalten in jeder Phase Zugang zur richtigen Kompetenz, ohne den Aufwand mehrerer Lieferanten.",
    paragraph3: "Ob SAP-Transformation, Skalierung einer QA-Praxis oder Aufbau eines digitalen Produkts — der Standard ändert sich nicht. Struktur, Transparenz und keine Überraschungen.",
    ctaGetInTouch: "Kontakt aufnehmen",
    ctaViewWork: "LinkedIn ansehen",
    atAGlance: "Auf einen Blick",
    statsLabels: { experience: "Erfahrung", regions: "Regionen", regionsSub: "Nordamerika · Europa · Indien", strength: "Stärke", focus: "Fokus" },
    platforms: "Enterprise-Plattformen",
    industries: "Branchen",
    whatYouCanExpect: "Was Sie erwarten können",
    expectations: [
      "Ein einziger Ansprechpartner in Kanada — verantwortlich für das gesamte Engagement.",
      "Strukturierte UAT-Governance und Release-Bereitschaft mit klaren Go/No-Go-Signalen.",
      "Automatisierungsorientierte Qualitätsstrategien in Ihrer CI/CD-Pipeline.",
      "Zugang zu geprüften globalen Spezialisten, passend zu Ihren Programmanforderungen.",
    ],
    howIApproach: "Unser Delivery-Ansatz",
    approachIntro: "Jedes Engagement folgt demselben Modell: das Programm verstehen, Qualität früh einbetten und Release-Entscheidungen nie aus dem Bauch heraus treffen.",
    principles: [
      { title: "Shift-Left-Qualität", desc: "Probleme früh in der Pipeline zu finden ist günstiger, schneller und weniger störend als sie im UAT zu beheben." },
      { title: "Datengetriebene Entscheidungen", desc: "Release-Entscheidungen auf Basis von Fehlertrends, Coverage-Daten und Bereitschaftssignalen — nicht nach Gefühl." },
      { title: "KI-gestütztes Testen", desc: "GenAI und LLMs zur Beschleunigung des Testdesigns, Risikoerkennung und Reduzierung manueller Aufwände." },
      { title: "Globale Delivery, lokale Übersicht", desc: "Engagement-Management aus Kanada mit geprüften globalen Spezialisten in 3 Regionen." },
    ],
    toolbox: "Toolbox",
    toolboxIntro: "Tools und Frameworks für Automatisierung, Observability und Release-Governance.",
    focusAreas: "Schwerpunkte",
    focusAreasData: [
      { id: "devtestops", title: "DevTestOps & CI/CD-Qualitätstore", outcome: "50–70% schnellere Regressionszyklen in Engagements erreicht.", content: "Automatisierte Qualitätstore in CI/CD-Pipelines einbetten — von Unit-Tests bis zur Release-Bereitschaft. Mit Jenkins, GitHub Actions und Docker für wiederholbare, skalierbare Delivery-Workflows." },
      { id: "sap", title: "SAP & ERP-Test-Governance", outcome: "Release-Kadenz von quartalsweise auf zweiwöchentlich verbessert.", content: "Strukturierte UAT-Governance und Release-Bereitschaft für SAP S/4HANA-Programme — mit definierten Qualitätstoren, Stakeholder-Abnahmen und risikobasierten Go/No-Go-Entscheidungen." },
      { id: "ai", title: "KI-gestütztes Quality Engineering", outcome: "30–40% weniger Produktionsfehler durch Shift-Left-Validierung.", content: "Generative KI und LLMs für Testdesign, Risikoerkennung und Automatisierungsbeschleunigung. Weniger manueller Aufwand bei besserer Abdeckung und schnellerem Feedback." },
      { id: "web", title: "Digitale Entwicklung & Webanwendungen", outcome: "End-to-End-Digitaltools vom Prototyp bis zur Produktion geliefert.", content: "Moderne, performante Webanwendungen und Reporting-Dashboards — von Rapid Prototypes bis zu produktionsreifen Tools." },
    ],
    openToConversation: "Bereit zusammenzuarbeiten?",
    openToConversationBody: "Ob Sie ein SAP-Programm planen, Ihre QA-Praxis skalieren oder ein digitales Produkt aufbauen — lassen Sie uns mit einem Gespräch beginnen.",
    ctaContact: "Kontakt aufnehmen",
    ctaLinkedIn: "LinkedIn",
  },
  fr: {
    heading: "À propos de QualityBridge Consulting",
    heroPills: ["Développement digital", "Gouvernance SAP & UAT", "Automatisation des tests & Qualité"],
    heroTitle: "10 ans. 3 continents.",
    heroAccent: "Un seul standard.",
    heroSubtitle: "Une livraison d'entreprise fondée sur de vrais programmes, de vrais résultats et un réseau de spécialistes qui l'ont déjà fait.",
    heroStats: [
      { value: "50–70%", label: "Cycles de régression plus rapides" },
      { value: "Trimestriel → Bimensuel", label: "Cadence de version atteinte" },
      { value: "30–40%", label: "Moins de défauts en production" },
    ],
    founderName: "Gagan Singh",
    founderTitle: "Fondateur",
    founderLocation: "Grand Toronto, Canada",
    founderExperience: "10+ ans · Amérique du Nord · Europe · Asie",
    founderCta: "Se connecter sur LinkedIn",
    intro: "QualityBridge Consulting est né d'une frustration simple : trop de programmes d'entreprise livrent en retard, échouent en production et laissent les parties prenantes sans la visibilité dont elles ont besoin pour prendre des décisions confiantes. Nous existons pour changer cela.",
    bullets: [
      "Gouvernance UAT SAP S/4HANA, préparation aux versions et décisions go/no-go structurées.",
      "Ingénierie qualité axée sur l'automatisation avec Cypress, Playwright et conception de tests assistée par IA.",
      "Applications web sur mesure, tableaux de bord et outils digitaux pour les entreprises.",
    ],
    paragraph1: "L'expérience derrière QualityBridge couvre plus d'une décennie de livraison d'entreprise — avec des missions chez <strong>Johnson & Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong> et <strong>Aon</strong>, ainsi que des programmes dans les dispositifs médicaux, le luxe et les services financiers, dans des équipes en Amérique du Nord, en Allemagne et en Inde. Cette diversité permet d'entrer dans un programme complexe et de savoir à quoi ressemble la qualité.",
    paragraph2: "Nous travaillons avec un réseau soigneusement sélectionné de partenaires spécialisés en Amérique du Nord, en Europe et en Inde — chacun vérifié pour son expertise et son bilan. Les clients accèdent à la bonne compétence à chaque phase, sans la complexité de gérer plusieurs fournisseurs.",
    paragraph3: "Que vous meniez une transformation SAP, développiez une pratique QA ou construisiez un produit digital — le standard ne change pas. Structure, transparence et sans surprises.",
    ctaGetInTouch: "Nous contacter",
    ctaViewWork: "Voir LinkedIn",
    atAGlance: "En un coup d'œil",
    statsLabels: { experience: "Expérience", regions: "Régions", regionsSub: "Amérique du Nord · Europe · Inde", strength: "Force", focus: "Focus" },
    platforms: "Plateformes enterprise",
    industries: "Industries",
    whatYouCanExpect: "Ce que vous pouvez attendre",
    expectations: [
      "Un seul point de contact au Canada — responsable de l'engagement complet.",
      "Gouvernance UAT structurée et préparation aux versions avec des signaux go/no-go clairs.",
      "Stratégies qualité axées sur l'automatisation intégrées dans votre pipeline CI/CD.",
      "Accès à des spécialistes mondiaux vérifiés adaptés à vos besoins de programme.",
    ],
    howIApproach: "Notre approche de livraison",
    approachIntro: "Chaque engagement suit le même modèle : comprendre le programme, intégrer la qualité tôt et ne jamais prendre une décision de version à l'instinct.",
    principles: [
      { title: "Qualité Shift-Left", desc: "Détecter les problèmes tôt dans le pipeline est moins coûteux, plus rapide et moins perturbateur qu'au stade UAT." },
      { title: "Décisions basées sur les métriques", desc: "Décisions de version basées sur les tendances des défauts, les données de couverture et les signaux de préparation." },
      { title: "Tests augmentés par l'IA", desc: "Utiliser GenAI et LLMs pour accélérer la conception des tests, identifier les risques et réduire les efforts manuels." },
      { title: "Livraison globale, supervision locale", desc: "Gestion de l'engagement depuis le Canada avec des spécialistes mondiaux vérifiés dans 3 régions." },
    ],
    toolbox: "Boîte à outils",
    toolboxIntro: "Outils et frameworks utilisés pour l'automatisation, l'observabilité et la gouvernance des versions.",
    focusAreas: "Domaines de spécialisation",
    focusAreasData: [
      { id: "devtestops", title: "DevTestOps & Portes qualité CI/CD", outcome: "50–70% de cycles de régression plus rapides atteints.", content: "Intégrer des portes qualité automatisées dans les pipelines CI/CD — des tests unitaires à la préparation aux versions. Avec Jenkins, GitHub Actions et Docker pour des workflows de livraison répétables et évolutifs." },
      { id: "sap", title: "Gouvernance des tests SAP & ERP", outcome: "Cadence de version améliorée de trimestrielle à bimensuelle.", content: "Gouvernance UAT structurée et préparation aux versions pour les programmes SAP S/4HANA — avec des portes qualité définies, des approbations des parties prenantes et des décisions go/no-go basées sur les risques." },
      { id: "ai", title: "Ingénierie qualité assistée par IA", outcome: "30–40% de réduction des défauts en production grâce à la validation shift-left.", content: "Appliquer l'IA générative et les LLMs à la conception des tests, l'identification des risques et l'accélération de l'automatisation." },
      { id: "web", title: "Développement digital & Applications web", outcome: "Outils digitaux end-to-end livrés du prototype à la production.", content: "Construire des applications web modernes et performantes — des prototypes rapides aux outils prêts pour la production." },
    ],
    openToConversation: "Prêt à travailler ensemble ?",
    openToConversationBody: "Que vous planifiez un programme SAP, développiez votre pratique QA ou construisiez un produit digital — commençons par une conversation.",
    ctaContact: "Nous contacter",
    ctaLinkedIn: "LinkedIn",
  },
};

const About = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.slice(0, 2) as keyof typeof content) in content
    ? (i18n.language?.slice(0, 2) as keyof typeof content)
    : "en";
  const a = content[lang];

  usePageMeta(
    "QualityBridge Consulting | About",
    "Learn about QualityBridge Consulting — SAP governance, quality engineering, and digital development managed from Canada with global specialists.",
    "/about"
  );

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="enterprise-gradient relative overflow-hidden py-10 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">

          {/* Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
            {a.heroPills.map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">
                {pill}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[40px] lg:text-5xl">
            {a.heroTitle}{" "}
            <span style={{ color: "#93c5fd" }}>{a.heroAccent}</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base">
            {a.heroSubtitle}
          </p>

          {/* Impact stats bar */}
          <div className="mx-auto mt-6 flex max-w-xs items-stretch justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-2xl md:mt-8">
            {a.heroStats.map((s, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-center px-2 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{s.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs text-center leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder strip */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-10">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Briefcase className="h-4 w-4" /></span>
              <span>{a.founderName} · {a.founderTitle}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><MapPin className="h-4 w-4" /></span>
              <span>{a.founderLocation}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Globe className="h-4 w-4" /></span>
              <span>{a.founderExperience}</span>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary md:text-sm"
            >
              <span className="shrink-0 text-primary"><ExternalLink className="h-4 w-4" /></span>
              <span>{a.founderCta}</span>
            </a>
          </div>
        </div>
      </div>

      <main className="pb-8 md:pb-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl pt-10 md:pt-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">

            {/* Left — bio */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">{a.heading}</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{a.intro}</p>
              <ul className="space-y-2">
                {a.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={14} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pt-1">
                <p dangerouslySetInnerHTML={{ __html: a.paragraph1 }} />
                <p>{a.paragraph2}</p>
                <p className="italic border-l-2 border-primary/30 pl-3">{a.paragraph3}</p>
              </div>
            </div>

            {/* Right — cards */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="border-border">
                <CardHeader className="pb-3 pt-4 px-4">
                  <CardTitle className="font-display text-base md:text-lg">{a.atAGlance}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">{a.platforms}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {platforms.map((p) => <Badge key={p} variant="outline" className="text-xs">{p}</Badge>)}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">{a.industries}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industries.map((ind) => <Badge key={ind} variant="outline" className="text-xs">{ind}</Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="font-display text-base md:text-lg">{a.whatYouCanExpect}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 space-y-2.5">
                  {a.expectations.map((text, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={14} />
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How We Approach */}
          <div className="mt-10 md:mt-14">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">{a.howIApproach}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">{a.approachIntro}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {a.principles.map((p, i) => {
                const Icon = principleIcons[i];
                return (
                  <Card key={i} className="border-border">
                    <CardContent className="pt-4 px-4 pb-4">
                      <Icon className="text-primary mb-2" size={16} />
                      <p className="font-display font-semibold text-foreground text-sm leading-tight">{p.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">{p.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Toolbox */}
          <div className="mt-10 md:mt-14">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">{a.toolbox}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">{a.toolboxIntro}</p>
            <div className="flex flex-wrap gap-1.5">
              {toolbox.map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mt-10 md:mt-14">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{a.focusAreas}</h2>
            <Accordion type="multiple" className="space-y-2">
              {a.focusAreasData.map((area, i) => {
                const Icon = focusIcons[i];
                return (
                  <AccordionItem key={area.id} value={area.id} className="bg-card border border-border rounded-lg px-4 shadow-sm">
                    <AccordionTrigger className="hover:no-underline gap-3 py-3">
                      <div className="flex items-center gap-3">
                        <Icon size={14} className="text-primary shrink-0" />
                        <span className="font-display font-semibold text-foreground text-sm text-left">{area.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-xs italic text-primary font-medium mb-2 border-l-2 border-primary/40 pl-3">{area.outcome}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{area.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 md:mt-12">
            <Card className="border-border">
              <CardContent className="py-6 px-4 md:py-10 md:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-base md:text-xl font-semibold text-foreground">{a.openToConversation}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl leading-relaxed">{a.openToConversationBody}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
                    <Button asChild size="sm" className="w-full sm:w-auto">
                      <a href="/contact" className="inline-flex items-center justify-center gap-2">
                        {a.ctaContact}<ArrowRight size={15} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
