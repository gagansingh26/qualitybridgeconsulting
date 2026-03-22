import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Settings, Brain, Building2, Globe, ShieldCheck, LineChart, Sparkles, CheckCircle2, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import PartnerPanel from "@/components/PartnerPanel";

const LINKEDIN_URL = "https://www.linkedin.com/in/gagansingh26/";

const industries = ["SaaS", "ERP", "Insurance", "HealthTech", "FinTech", "eCommerce"];
const platforms = ["SAP S/4HANA", "Salesforce Commerce Cloud", "Workday", "Microsoft Dynamics 365", "Salesforce CRM"];
const toolbox = ["Cypress", "Playwright", "Jenkins", "GitHub Actions", "Docker", "Grafana", "Datadog", "Azure DevOps", "Quality Gates", "Release Governance"];

const principleIcons = [ShieldCheck, LineChart, Sparkles, Globe];
const focusIcons = [Briefcase, Settings, Brain, Building2];

// ─── Focus area pillar colours ────────────────────────────────────────────────
const FOCUS_COLOURS = [
  { accentBar: "bg-blue-500 dark:bg-blue-400",   iconBg: "bg-blue-100 dark:bg-blue-900",   iconColor: "text-blue-700 dark:text-blue-300",   outcomeText: "text-blue-700 dark:text-blue-300",   outcomeBorder: "border-blue-300 dark:border-blue-700"   },
  { accentBar: "bg-teal-500 dark:bg-teal-400",   iconBg: "bg-teal-100 dark:bg-teal-900",   iconColor: "text-teal-700 dark:text-teal-300",   outcomeText: "text-teal-700 dark:text-teal-300",   outcomeBorder: "border-teal-300 dark:border-teal-700"   },
  { accentBar: "bg-purple-500 dark:bg-purple-400", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-700 dark:text-purple-300", outcomeText: "text-purple-700 dark:text-purple-300", outcomeBorder: "border-purple-300 dark:border-purple-700" },
  { accentBar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary", outcomeText: "text-primary", outcomeBorder: "border-primary/30" },
];

const PRINCIPLE_COLOURS = [
  { accentBar: "bg-purple-500 dark:bg-purple-400", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-700 dark:text-purple-300" },
  { accentBar: "bg-teal-500 dark:bg-teal-400",     iconBg: "bg-teal-100 dark:bg-teal-900",     iconColor: "text-teal-700 dark:text-teal-300"   },
  { accentBar: "bg-blue-500 dark:bg-blue-400",     iconBg: "bg-blue-100 dark:bg-blue-900",     iconColor: "text-blue-700 dark:text-blue-300"   },
  { accentBar: "bg-amber-500 dark:bg-amber-400",   iconBg: "bg-amber-100 dark:bg-amber-900",   iconColor: "text-amber-700 dark:text-amber-300" },
];

const EXPECTATION_COLOURS = [
  "text-blue-600 dark:text-blue-400",
  "text-teal-600 dark:text-teal-400",
  "text-teal-600 dark:text-teal-400",
  "text-purple-600 dark:text-purple-400",
  "text-blue-600 dark:text-blue-400",
  "text-amber-600 dark:text-amber-400",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

const content = {
  en: {
    // CHANGED: "About Gagan Singh" → "About Gagan"
    heading: "About Gagan",
    heroPills: ["Digital Development", "SAP Governance & UAT", "AI-Augmented Quality"],
    heroTitle: "10+ years. 3 continents.",
    heroFounderLine: "Built on real programme experience — not a framework.",
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
    reach: "Client engagement managed locally in Canada · North America · Europe · Asia",
    founderCta: "Connect on LinkedIn",
    intro: "QualityBridge Consulting was built on a simple frustration: too many enterprise programmes ship late, break in production, and leave business stakeholders without the visibility they need to make confident decisions. We exist to fix that.",
    bullets: [
      "Modern web applications, reporting dashboards, and rapid prototypes — built with React, TypeScript, and Tailwind CSS.",
      "SAP S/4HANA UAT governance, release readiness, and structured go/no-go decisions.",
      "Automation-first quality engineering using Cypress, Playwright, and many more — accelerated by AI-assisted test design.",
    ],
    paragraph1: "I've always been drawn to building things that work — not just functionally, but reliably, at scale, under pressure.",
    paragraph1b: "I spent over 10 years inside large enterprise programmes — <strong>Johnson &amp; Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong>, <strong>Aon</strong>, <strong>Hugo Boss</strong>, <strong>CHECK24</strong>, and a few more based in North America and Germany — building digital products and quality practices that give teams the confidence to deliver consistently.",
    paragraph1c: "What I kept coming back to was the intersection of engineering and delivery. Building things that actually scale. Creating the kind of quality practices where releasing feels controlled, not uncertain.",
    paragraph1d: "QualityBridge grew out of that experience. It's for SMEs and growing teams who deserve the same rigour as the big programmes — without the overhead of a large consultancy.",
    paragraph3: "Whatever you're working on — an ERP transformation, a SaaS product, or scaling a QA practice — the approach stays the same. Structure, transparency, and no surprises.",
    ctaBook: "Book a Consultation",
    ctaViewServices: "View Our Services",
    atAGlance: "At a Glance",
    platforms: "Enterprise Platforms",
    industries: "Industries",
    whatYouCanExpect: "What You Can Expect",
    expectations: [
      "Modern digital products built from concept to production — web apps, dashboards, and portals.",
      "A single point of contact in Canada — accountable for the full engagement.",
      "Structured UAT governance and release readiness with clear go/no-go signals.",
      "Automation-first quality strategies embedded in your CI/CD pipeline.",
      "AI-assisted test design and defect analysis applied across all engagements.",
      "Access to vetted global specialists matched to your exact programme needs.",
    ],
    howIApproach: "How We Approach Delivery",
    approachIntro: "Every engagement follows the same model: understand the programme, embed quality early, and never let a release decision be made on gut feel.",
    principles: [
      { title: "Shift-Left Quality",            desc: "Catching issues early in the pipeline is cheaper, faster, and less disruptive than fixing them at UAT." },
      { title: "Metrics-Driven Decisions",       desc: "Release decisions backed by defect trends, coverage data, and readiness signals — not gut feel." },
      { title: "AI-Augmented Testing",           desc: "Using GenAI and LLMs to accelerate test design, surface risk, and reduce repetitive manual effort." },
      { title: "Global Delivery, Local Oversight", desc: "Canada-based engagement management with vetted global specialists across 3 regions." },
    ],
    toolbox: "Toolbox",
    toolboxIntro: "Tools and frameworks used across delivery engagements for automation, observability, and release governance.",
    focusAreas: "Focus Areas",
    focusAreasData: [
      { id: "web",        title: "Digital Development & Web Applications", outcome: "End-to-end digital tools delivered from prototype to production.",                  content: "Building modern, performant web applications and reporting dashboards — from rapid prototypes to production-grade tools. Bridging the gap between complex enterprise backends and polished, stakeholder-ready digital experiences." },
      { id: "sap",        title: "SAP & ERP Test Governance",              outcome: "Release cadence improved from quarterly to bi-weekly on SAP programmes.",         content: "Structured UAT governance and release readiness for SAP S/4HANA programmes — with defined quality gates, stakeholder sign-offs, and risk-based go/no-go decisions. Experienced across full S/4HANA implementation and migration lifecycles." },
      { id: "devtestops", title: "DevTestOps & CI/CD Quality Gates",       outcome: "50–70% faster regression cycles achieved across engagements.",                    content: "Embedding automated quality gates into CI/CD pipelines to enforce standards at every stage — from unit tests through to release readiness. Using Jenkins, GitHub Actions, and Docker to build repeatable, scalable delivery workflows." },
      { id: "ai",         title: "AI-Enabled Quality Engineering",         outcome: "30–40% reduction in production defect leakage through shift-left validation.",     content: "Applying Generative AI and LLMs to test design, risk identification, and automation acceleration. Reducing manual effort while improving coverage and feedback speed across complex enterprise platforms." },
    ],
    openToConversation: "Ready to work together?",
    openToConversationBody: "Whether you're planning an ERP transformation, scaling your QA practice, or building a digital product — let's start with a conversation.",
    ctaContact: "Get in Touch",
    founderCta2: "Connect on LinkedIn",
  },
  de: {
    // CHANGED: "Über Gagan Singh" → "Über Gagan"
    heading: "Über Gagan",
    heroPills: ["Digitale Entwicklung", "SAP-Governance & UAT", "KI-gestützte Qualität"],
    heroTitle: "10+ Jahre. 3 Kontinente.",
    heroFounderLine: "Aufgebaut auf echter Programmerfahrung — kein Framework.",
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
    reach: "Kundenbetreuung lokal in Kanada · Nordamerika · Europa · Asien",
    founderCta: "Auf LinkedIn verbinden",
    intro: "QualityBridge Consulting entstand aus einer einfachen Frustration: Zu viele Enterprise-Programme liefern zu spät, scheitern in der Produktion und lassen Stakeholder ohne die Transparenz zurück, die sie für sichere Entscheidungen brauchen. Wir existieren, um das zu ändern.",
    bullets: [
      "Moderne Webanwendungen, Reporting-Dashboards und Rapid Prototypes — entwickelt mit React, TypeScript und Tailwind CSS.",
      "SAP S/4HANA UAT-Governance, Release-Bereitschaft und strukturierte Go/No-Go-Entscheidungen.",
      "Automatisierungsorientiertes Quality Engineering mit Cypress, Playwright und vielen mehr — beschleunigt durch KI-gestütztes Testdesign.",
    ],
    paragraph1: "Ich war schon immer fasziniert davon, Dinge zu bauen, die funktionieren — nicht nur funktional, sondern zuverlässig, skalierbar und unter Druck.",
    paragraph1b: "Ich verbrachte über 10 Jahre in großen Enterprise-Programmen — <strong>Johnson &amp; Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong>, <strong>Aon</strong>, <strong>Hugo Boss</strong>, <strong>CHECK24</strong> und einigen weiteren in Nordamerika und Deutschland.",
    paragraph1c: "Was mich dabei immer wieder begeistert hat, ist die Schnittmenge von Engineering und Delivery.",
    paragraph1d: "QualityBridge ist aus dieser Erfahrung entstanden. Es richtet sich an KMU und wachsende Teams, die dieselbe Sorgfalt wie in den großen Programmen verdienen — ohne den Overhead einer großen Unternehmensberatung.",
    paragraph3: "Egal woran Sie arbeiten — eine ERP-Transformation, ein SaaS-Produkt oder der Aufbau einer QA-Praxis — der Ansatz bleibt gleich. Struktur, Transparenz und keine Überraschungen.",
    ctaBook: "Beratung buchen",
    ctaViewServices: "Unsere Leistungen ansehen",
    atAGlance: "Auf einen Blick",
    platforms: "Enterprise-Plattformen",
    industries: "Branchen",
    whatYouCanExpect: "Was Sie erwarten können",
    expectations: [
      "Moderne digitale Produkte vom Konzept bis zur Produktion — Webanwendungen, Dashboards und Portale.",
      "Ein einziger Ansprechpartner in Kanada — verantwortlich für das gesamte Engagement.",
      "Strukturierte UAT-Governance und Release-Bereitschaft mit klaren Go/No-Go-Signalen.",
      "Automatisierungsorientierte Qualitätsstrategien in Ihrer CI/CD-Pipeline.",
      "KI-gestütztes Testdesign und Fehleranalyse in allen Engagements.",
      "Zugang zu geprüften globalen Spezialisten, passend zu Ihren Programmanforderungen.",
    ],
    howIApproach: "Unser Delivery-Ansatz",
    approachIntro: "Jedes Engagement folgt demselben Modell: das Programm verstehen, Qualität früh einbetten und Release-Entscheidungen nie aus dem Bauch heraus treffen.",
    principles: [
      { title: "Shift-Left-Qualität",         desc: "Probleme früh in der Pipeline zu finden ist günstiger, schneller und weniger störend als sie im UAT zu beheben." },
      { title: "Datengetriebene Entscheidungen", desc: "Release-Entscheidungen auf Basis von Fehlertrends, Coverage-Daten und Bereitschaftssignalen — nicht nach Gefühl." },
      { title: "KI-gestütztes Testen",         desc: "GenAI und LLMs zur Beschleunigung des Testdesigns, Risikoerkennung und Reduzierung manueller Aufwände." },
      { title: "Globale Delivery, lokale Übersicht", desc: "Engagement-Management aus Kanada mit geprüften globalen Spezialisten in 3 Regionen." },
    ],
    toolbox: "Toolbox",
    toolboxIntro: "Tools und Frameworks für Automatisierung, Observability und Release-Governance.",
    focusAreas: "Schwerpunkte",
    focusAreasData: [
      { id: "web",        title: "Digitale Entwicklung & Webanwendungen", outcome: "End-to-End-Digitaltools vom Prototyp bis zur Produktion geliefert.",          content: "Moderne, performante Webanwendungen und Reporting-Dashboards — von Rapid Prototypes bis zu produktionsreifen Tools." },
      { id: "sap",        title: "SAP & ERP-Test-Governance",             outcome: "Release-Kadenz von quartalsweise auf zweiwöchentlich verbessert.",            content: "Strukturierte UAT-Governance und Release-Bereitschaft für SAP S/4HANA-Programme — mit definierten Qualitätstoren, Stakeholder-Abnahmen und risikobasierten Go/No-Go-Entscheidungen." },
      { id: "devtestops", title: "DevTestOps & CI/CD-Qualitätstore",      outcome: "50–70% schnellere Regressionszyklen in Engagements erreicht.",               content: "Automatisierte Qualitätstore in CI/CD-Pipelines einbetten — von Unit-Tests bis zur Release-Bereitschaft." },
      { id: "ai",         title: "KI-gestütztes Quality Engineering",     outcome: "30–40% weniger Produktionsfehler durch Shift-Left-Validierung.",              content: "Generative KI und LLMs für Testdesign, Risikoerkennung und Automatisierungsbeschleunigung." },
    ],
    openToConversation: "Bereit zusammenzuarbeiten?",
    openToConversationBody: "Ob Sie eine ERP-Transformation planen, Ihre QA-Praxis skalieren oder ein digitales Produkt aufbauen — lassen Sie uns mit einem Gespräch beginnen.",
    ctaContact: "Kontakt aufnehmen",
    founderCta2: "Auf LinkedIn verbinden",
  },
  fr: {
    // CHANGED: "À propos de Gagan Singh" → "À propos de Gagan"
    heading: "À propos de Gagan",
    heroPills: ["Développement digital", "Gouvernance SAP & UAT", "Qualité augmentée par l'IA"],
    heroTitle: "10+ ans. 3 continents.",
    heroFounderLine: "Fondé sur une vraie expérience programme — pas un cadre théorique.",
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
    reach: "Engagement client géré localement au Canada · Amérique du Nord · Europe · Asie",
    founderCta: "Se connecter sur LinkedIn",
    intro: "QualityBridge Consulting est né d'une frustration simple : trop de programmes d'entreprise livrent en retard, échouent en production et laissent les parties prenantes sans la visibilité dont elles ont besoin. Nous existons pour changer cela.",
    bullets: [
      "Applications web modernes, tableaux de bord et prototypes rapides — développés avec React, TypeScript et Tailwind CSS.",
      "Gouvernance UAT SAP S/4HANA, préparation aux versions et décisions go/no-go structurées.",
      "Ingénierie qualité axée sur l'automatisation avec Cypress, Playwright et bien plus.",
    ],
    paragraph1: "J'ai toujours été attiré par la construction de choses qui fonctionnent — pas seulement fonctionnellement, mais de manière fiable, à grande échelle et sous pression.",
    paragraph1b: "J'ai passé plus de 10 ans au sein de grands programmes enterprise — <strong>Johnson &amp; Johnson</strong>, <strong>Workday</strong>, <strong>Alight</strong>, <strong>Aon</strong>, <strong>Hugo Boss</strong>, <strong>CHECK24</strong>, et quelques autres basés en Amérique du Nord et en Allemagne.",
    paragraph1c: "Ce à quoi je revenais sans cesse, c'est l'intersection entre l'ingénierie et la livraison.",
    paragraph1d: "QualityBridge est né de cette expérience. C'est pour les PME et les équipes en croissance qui méritent la même rigueur que les grands programmes — sans les frais généraux d'un grand cabinet de conseil.",
    paragraph3: "Quel que soit votre projet — une transformation ERP, un produit SaaS ou le développement d'une pratique QA — l'approche reste la même. Structure, transparence et sans surprises.",
    ctaBook: "Réserver une consultation",
    ctaViewServices: "Voir nos services",
    atAGlance: "En un coup d'œil",
    platforms: "Plateformes enterprise",
    industries: "Industries",
    whatYouCanExpect: "Ce que vous pouvez attendre",
    expectations: [
      "Des produits digitaux modernes du concept à la production — applications web, tableaux de bord et portails.",
      "Un seul point de contact au Canada — responsable de l'engagement complet.",
      "Gouvernance UAT structurée et préparation aux versions avec des signaux go/no-go clairs.",
      "Stratégies qualité axées sur l'automatisation intégrées dans votre pipeline CI/CD.",
      "Conception de tests et analyse des défauts assistées par IA dans tous les engagements.",
      "Accès à des spécialistes mondiaux vérifiés adaptés à vos besoins de programme.",
    ],
    howIApproach: "Notre approche de livraison",
    approachIntro: "Chaque engagement suit le même modèle : comprendre le programme, intégrer la qualité tôt et ne jamais prendre une décision de version à l'instinct.",
    principles: [
      { title: "Qualité Shift-Left",                desc: "Détecter les problèmes tôt dans le pipeline est moins coûteux, plus rapide et moins perturbateur qu'au stade UAT." },
      { title: "Décisions basées sur les métriques", desc: "Décisions de version basées sur les tendances des défauts, les données de couverture et les signaux de préparation." },
      { title: "Tests augmentés par l'IA",           desc: "Utiliser GenAI et LLMs pour accélérer la conception des tests, identifier les risques et réduire les efforts manuels." },
      { title: "Livraison globale, supervision locale", desc: "Gestion de l'engagement depuis le Canada avec des spécialistes mondiaux vérifiés dans 3 régions." },
    ],
    toolbox: "Boîte à outils",
    toolboxIntro: "Outils et frameworks utilisés pour l'automatisation, l'observabilité et la gouvernance des versions.",
    focusAreas: "Domaines de spécialisation",
    focusAreasData: [
      { id: "web",        title: "Développement digital & Applications web",  outcome: "Outils digitaux end-to-end livrés du prototype à la production.",                       content: "Construire des applications web modernes et performantes — des prototypes rapides aux outils prêts pour la production." },
      { id: "sap",        title: "Gouvernance des tests SAP & ERP",           outcome: "Cadence de version améliorée de trimestrielle à bimensuelle.",                          content: "Gouvernance UAT structurée et préparation aux versions pour les programmes SAP S/4HANA." },
      { id: "devtestops", title: "DevTestOps & Portes qualité CI/CD",         outcome: "50–70% de cycles de régression plus rapides atteints.",                                 content: "Intégrer des portes qualité automatisées dans les pipelines CI/CD avec Jenkins, GitHub Actions et Docker." },
      { id: "ai",         title: "Ingénierie qualité assistée par IA",        outcome: "30–40% de réduction des défauts en production grâce à la validation shift-left.",       content: "Appliquer l'IA générative et les LLMs à la conception des tests, l'identification des risques et l'accélération de l'automatisation." },
    ],
    openToConversation: "Prêt à travailler ensemble ?",
    openToConversationBody: "Que vous planifiez une transformation ERP, développiez votre pratique QA ou construisiez un produit digital — commençons par une conversation.",
    ctaContact: "Nous contacter",
    founderCta2: "Se connecter sur LinkedIn",
  },
};

const About = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const lang = (i18n.language?.slice(0, 2) as keyof typeof content) in content
    ? (i18n.language?.slice(0, 2) as keyof typeof content) : "en";
  const a = content[lang];

  // ── Scroll to #careers when navigated here with state { scrollTo: "careers" }
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo === "careers") {
      // Use requestAnimationFrame to wait for the DOM to fully paint
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById("careers");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [location.state]);

  usePageMeta(
    "QualityBridge Consulting | About",
    "Learn about QualityBridge Consulting — SAP governance, quality engineering, and digital development managed from Canada with global specialists.",
    "/about"
  );

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="enterprise-gradient relative overflow-hidden py-10 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4" aria-hidden="true" style={{ width: 200 }}>
            <svg width="200" height="200" viewBox="0 0 170 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible" }}>
              <style>{`@keyframes tDash{to{stroke-dashoffset:-20}}@keyframes tPulse{0%,100%{r:8;opacity:1}50%{r:11;opacity:0.7}}@keyframes tRing{0%,100%{r:14;opacity:0.3}50%{r:20;opacity:0}}@keyframes tBlink{0%,100%{opacity:1}50%{opacity:0.3}}@keyframes tNodeIn{0%,100%{r:6}50%{r:8}}.t-dash{stroke-dasharray:4 4;animation:tDash 1.6s linear infinite}.t-dash2{stroke-dasharray:4 4;animation:tDash 2s linear infinite 0.4s}.t-dash3{stroke-dasharray:4 4;animation:tDash 2.4s linear infinite 0.8s}.t-dash4{stroke-dasharray:4 4;animation:tDash 2.8s linear infinite 1.2s}.t-pulse{animation:tPulse 2s ease-in-out infinite}.t-ring{animation:tRing 2s ease-in-out infinite}.t-blink{animation:tBlink 1.6s ease-in-out infinite}.t-node{animation:tNodeIn 2.4s ease-in-out infinite}`}</style>
              <line x1="40" y1="18" x2="40" y2="172" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
              <circle className="t-ring" cx="40" cy="30" r="14" fill="none" stroke="#93c5fd" strokeWidth="0.8"/>
              <circle className="t-pulse" cx="40" cy="30" r="8" fill="#93c5fd"/>
              <text x="60" y="27" fontSize="9" fill="rgba(255,255,255,0.92)" fontWeight="600">Plan</text>
              <text x="60" y="38" fontSize="7.5" fill="rgba(255,255,255,0.45)">Strategy & scope</text>
              <line x1="40" y1="41" x2="40" y2="60" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="t-dash"/>
              <circle className="t-node" cx="40" cy="68" r="6" fill="rgba(255,255,255,0.6)" style={{animationDelay:"0.4s"}}/>
              <text x="60" y="65" fontSize="9" fill="rgba(255,255,255,0.82)" fontWeight="600">SIT</text>
              <text x="60" y="76" fontSize="7.5" fill="rgba(255,255,255,0.42)">Integration testing</text>
              <line x1="40" y1="74" x2="40" y2="96" stroke="rgba(255,255,255,0.16)" strokeWidth="1" className="t-dash2"/>
              <circle className="t-node" cx="40" cy="104" r="6" fill="rgba(255,255,255,0.72)" style={{animationDelay:"0.8s"}}/>
              <text x="60" y="101" fontSize="9" fill="rgba(255,255,255,0.85)" fontWeight="600">UAT</text>
              <text x="60" y="112" fontSize="7.5" fill="rgba(255,255,255,0.42)">Business sign-off</text>
              <line x1="40" y1="110" x2="40" y2="132" stroke="rgba(255,255,255,0.16)" strokeWidth="1" className="t-dash3"/>
              <circle className="t-node" cx="40" cy="140" r="6" fill="rgba(255,255,255,0.6)" style={{animationDelay:"1.2s"}}/>
              <text x="60" y="137" fontSize="9" fill="rgba(255,255,255,0.8)" fontWeight="600">Release</text>
              <text x="60" y="148" fontSize="7.5" fill="rgba(255,255,255,0.42)">Go-live</text>
              <line x1="40" y1="146" x2="40" y2="162" stroke="rgba(255,255,255,0.14)" strokeWidth="1" className="t-dash4"/>
              <circle className="t-blink" cx="40" cy="168" r="5" fill="#93c5fd" opacity="0.6"/>
              <text x="60" y="165" fontSize="9" fill="#93c5fd" fontWeight="600" opacity="0.8">Hypercare</text>
              <text x="60" y="176" fontSize="7.5" fill="#93c5fd" opacity="0.5">Ongoing support ✓</text>
            </svg>
          </motion.div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5">
            {a.heroPills.map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">{pill}</span>
            ))}
          </div>
          <h1 className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[40px] lg:text-5xl">
            {a.heroTitle}{" "}<span style={{ color: "#93c5fd" }}>{a.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 md:text-lg">{a.heroSubtitle}</p>
          <p className="mx-auto mt-2 max-w-lg text-sm font-medium text-primary-foreground/60 md:text-base">{a.heroFounderLine}</p>
          <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
            <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">{a.ctaBook} <ExternalLink className="ml-2 h-4 w-4" /></Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {a.ctaViewServices} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mx-auto mt-3 text-[13px] md:text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{a.reach}</p>
          <div className="mx-auto mt-8 flex max-w-xs items-stretch justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-2xl md:mt-10">
            {a.heroStats.map((s, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-center px-2 md:px-5">
                <span className="text-center text-sm font-bold leading-tight text-primary-foreground md:text-base">{s.value}</span>
                <span className="mt-0.5 text-center text-[10px] leading-tight text-primary-foreground/60 md:text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder strip ── */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-2 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-10">
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
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary md:text-sm">
              <span className="shrink-0 text-primary"><ExternalLink className="h-4 w-4" /></span>
              <span>{a.founderCta}</span>
            </a>
          </div>
        </div>
      </div>

      <main className="pb-8 md:pb-14">
        <div className="container mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-10">
          <div className="grid grid-cols-1 items-start gap-5 md:gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              {/* Founder card */}
              <div className="rounded-xl border border-border bg-card p-5 card-shadow md:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <img src="/founder-avatar.jpg" alt="Gagan Singh — Founder, QualityBridge Consulting" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20" />
                  <div>
                    <p className="text-base font-bold text-foreground">{a.founderName}</p>
                    <p className="text-xs text-muted-foreground">{a.founderTitle} · {a.founderLocation}</p>
                    <p className="text-xs text-primary mt-0.5">{a.founderExperience}</p>
                  </div>
                </div>
                <p className="mb-3 font-medium text-foreground italic text-sm text-justify">&ldquo;{a.paragraph1}&rdquo;</p>
                <div className="space-y-2.5 text-sm leading-relaxed text-muted-foreground text-justify">
                  <p dangerouslySetInnerHTML={{ __html: a.paragraph1b }} />
                  <p>{a.paragraph1c}</p>
                  <p>{a.paragraph1d}</p>
                </div>
                <p className="mt-4 border-l-2 border-primary/30 pl-3 text-sm italic text-muted-foreground text-justify">{a.paragraph3}</p>
              </div>
              {/* Company context */}
              <div className="pt-1">
                <h2 className="font-display text-xl font-bold leading-tight text-foreground mb-3 md:text-2xl">{a.heading}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-justify">{a.intro}</p>
                <ul className="mt-3 space-y-2">
                  {a.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={14} /><span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-5">
              <Card className="border-border">
                <CardHeader className="px-4 pb-3 pt-4">
                  <CardTitle className="font-display text-base md:text-lg">{a.atAGlance}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 pb-4">
                  <div>
                    <p className="mb-2 text-xs font-medium text-foreground">{a.platforms}</p>
                    <div className="flex flex-wrap gap-1.5">{platforms.map((p) => <Badge key={p} variant="outline" className="text-xs">{p}</Badge>)}</div>
                  </div>
                  <Separator />
                  <div>
                    <p className="mb-2 text-xs font-medium text-foreground">{a.industries}</p>
                    <div className="flex flex-wrap gap-1.5">{industries.map((ind) => <Badge key={ind} variant="outline" className="text-xs">{ind}</Badge>)}</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="px-4 pb-2 pt-4">
                  <CardTitle className="font-display text-base md:text-lg">{a.whatYouCanExpect}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2.5 px-4 pb-4">
                  {a.expectations.map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 shrink-0 ${EXPECTATION_COLOURS[i]}`} size={14} />
                      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* ── Quote ── */}
      <motion.div {...fadeUp(0)} className="border-y border-border bg-background" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mx-auto mb-4 opacity-20" aria-hidden="true">
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
            </svg>
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl lg:text-2xl">
              "Structure, transparency, and no surprises. That's the standard every engagement is held to — regardless of scale, location, or complexity."
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── How We Approach Delivery ── */}
      <SectionWrapper className="relative overflow-hidden bg-muted/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{a.howIApproach}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">{a.approachIntro}</p>
        </motion.div>
        <div className="relative mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4">
          {a.principles.map((p, i) => {
            const Icon = principleIcons[i];
            const c = PRINCIPLE_COLOURS[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                whileTap={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="rounded-xl border border-border bg-card overflow-hidden card-shadow h-full flex flex-col">
                  <div className={`h-[3px] w-full ${c.accentBar}`} />
                  <div className="px-4 pt-4 pb-4 flex flex-col flex-1">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full mb-3 ${c.iconBg} ${c.iconColor}`}>
                      <Icon size={15} />
                    </div>
                    <p className="text-sm font-semibold leading-tight text-foreground">{p.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── Toolbox ── */}
      <SectionWrapper className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{a.toolbox}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">{a.toolboxIntro}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {toolbox.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs">{tool}</Badge>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ── Focus Areas ── */}
      <SectionWrapper className="relative overflow-hidden bg-muted/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="mb-6 text-[28px] font-bold md:text-[36px] text-foreground">{a.focusAreas}</h2>
        </motion.div>
        <Accordion type="multiple" className="relative space-y-2">
          {a.focusAreasData.map((area, i) => {
            const Icon = focusIcons[i];
            const c = FOCUS_COLOURS[i];
            return (
              <motion.div key={area.id} {...fadeUp(i * 0.08)}>
                <AccordionItem value={area.id} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                  <div className={`h-[3px] w-full ${c.accentBar}`} />
                  <AccordionTrigger className="gap-3 px-4 py-3 hover:no-underline hover:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.iconBg} ${c.iconColor}`}>
                        <Icon size={13} />
                      </div>
                      <span className="text-left text-sm font-semibold text-foreground">{area.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 px-4">
                    <p className={`mb-2 border-l-2 pl-3 text-xs font-medium italic ${c.outcomeText} ${c.outcomeBorder}`}>{area.outcome}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{area.content}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </SectionWrapper>

      {/* ── Careers ─────────────────────────────────────────────────────────
           id="careers" is the anchor target for /about#careers links.
           Sits between Focus Areas and the bottom CTA.
      ────────────────────────────────────────────────────────────────── */}
      <SectionWrapper id="careers" className="relative overflow-hidden bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative">
          {/* Eyebrow with pulsing dot */}
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {t("careers.eyebrow")}
            </p>
          </div>
          <h2 className="text-[24px] font-bold text-foreground leading-tight mb-2 md:text-[30px]">
            {t("careers.heading")}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {t("careers.sub")}
          </p>

          {/* Role card */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="h-[3px] bg-teal-500 dark:bg-teal-400" />
            <div className="p-5 md:p-6">
              {/* Role header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">
                    {t("careers.roleTitle")}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {/* Remote tag */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/50 px-2.5 py-0.5 text-[11px] font-medium text-teal-700 dark:text-teal-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0" />
                      {t("careers.remote")}
                    </span>
                    {/* Contract type tag */}
                    <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                      {t("careers.contract")}
                    </span>
                    {/* Pillar tag */}
                    <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                      {t("careers.pillar")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {t("careers.desc")}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-5 pt-4 border-t border-border">
                {(t("careers.bullets", { returnObjects: true }) as string[]).map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0 mt-2" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:info@qualitybridgeconsulting.com"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 dark:bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {t("careers.cta")}
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>

              {/* No recruiters note */}
              <p className="mt-3 text-[11px] text-muted-foreground/70 leading-relaxed">
                {t("careers.note")}
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ── Bottom CTA ── */}
      <SectionWrapper className="relative overflow-hidden bg-accent/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{a.openToConversation}</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mt-3 md:text-base">{a.openToConversationBody}</p>
          <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-8 md:gap-3">
            <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-semibold sm:w-auto">{a.ctaBook} <ExternalLink className="ml-2 h-4 w-4" /></Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">{a.ctaViewServices} <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      <PartnerPanel />
    </Layout>
  );
};

export default About;
