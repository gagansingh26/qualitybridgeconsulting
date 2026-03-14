import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Settings, Brain, Building2, Globe, ShieldCheck, LineChart, Sparkles, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const LINKEDIN_URL = "https://www.linkedin.com/in/gagansingh26/";

const industries = ["SaaS", "ERP", "Insurance", "HealthTech", "FinTech", "eCommerce"];
const platforms = ["Workday", "SAP S/4HANA", "Salesforce", "Microsoft Dynamics 365"];
const toolbox = ["Jenkins", "GitHub Actions", "Docker", "Grafana", "Datadog", "Automation Frameworks", "Quality Gates", "Release Governance"];

const principleIcons = [ShieldCheck, LineChart, Sparkles, Globe];
const focusIcons = [Briefcase, Settings, Brain, Building2];

// ─── Inline content (no LanguageContext dependency for about section) ──────────

const content = {
  en: {
    heading: "About",
    intro: "Technology Delivery & Quality Engineering professional with 10+ years building DevTestOps ways of working — automation-first testing, CI/CD quality gates, and observability — to ship predictable, low-risk releases.",
    bullets: [
      "Enterprise QA strategy for SaaS and ERP delivery (SAP S/4HANA, Workday).",
      "Shift-left quality with pipeline governance and release readiness signals.",
      "GenAI-assisted test design and automation acceleration for faster feedback.",
    ],
    paragraph1: "My focus is on embedding quality early in the delivery lifecycle to enable faster, more predictable, and risk-aware releases.",
    paragraph2: "My background spans enterprise delivery across SaaS, ERP, Insurance, HealthTech, FinTech, and eCommerce — working with platforms like Workday, SAP S/4HANA, Salesforce, and Microsoft Dynamics 365. I have led cross-regional programs across Europe, Asia, and North America, aligning product, engineering, and QA teams around shared outcomes.",
    paragraph3: "Today, I focus on applying Generative AI and LLMs to improve test design, accelerate automation, enable early risk detection, and support risk-informed, metrics-based release governance across globally distributed teams.",
    ctaGetInTouch: "Get in Touch",
    ctaViewWork: "View LinkedIn",
    atAGlance: "At a Glance",
    statsLabels: {
      experience: "Experience",
      regions: "Regions",
      regionsSub: "Europe · Asia · North America",
      strength: "Strength",
      focus: "Focus",
    },
    platforms: "Enterprise Platforms",
    industries: "Industries",
    whatYouCanExpect: "What You Can Expect",
    expectations: [
      "Automation-first quality strategies embedded in your CI/CD pipeline.",
      "Structured UAT governance and release readiness with clear go/no-go signals.",
      "AI-assisted test design for faster feedback and reduced manual effort.",
      "One point of contact — managed locally in Canada, delivered globally.",
    ],
    howIApproach: "How I Approach Delivery",
    approachIntro: "Quality is not a phase — it's a practice embedded throughout the delivery lifecycle, from pipeline design to post go-live stabilisation.",
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
      { id: "devtestops", title: "DevTestOps & CI/CD Quality Gates", content: "Embedding automated quality gates into CI/CD pipelines to enforce standards at every stage — from unit tests through to release readiness. Using Jenkins, GitHub Actions, and Docker to build repeatable, scalable delivery workflows." },
      { id: "sap", title: "SAP & ERP Test Governance", content: "Structured UAT governance and release readiness for SAP S/4HANA programmes — with defined quality gates, stakeholder sign-offs, and risk-based go/no-go decisions. Experienced across full S/4HANA implementation and migration lifecycles." },
      { id: "ai", title: "AI-Enabled Quality Engineering", content: "Applying Generative AI and LLMs to test design, risk identification, and automation acceleration. Reducing manual effort while improving coverage and feedback speed across complex enterprise platforms." },
      { id: "web", title: "Digital Development & Web Applications", content: "Building modern, performant web applications and reporting dashboards — from rapid prototypes to production-grade tools. Bridging the gap between complex enterprise backends and polished, stakeholder-ready digital experiences." },
    ],
    openToConversation: "Open to a conversation?",
    openToConversationBody: "Whether you're planning a SAP programme, scaling your QA practice, or building a digital product — let's talk about how I can help.",
    ctaContact: "Get in Touch",
    ctaLinkedIn: "LinkedIn",
  },
  de: {
    heading: "Über mich",
    intro: "Technology Delivery & Quality Engineering Profi mit 10+ Jahren Erfahrung im Aufbau von DevTestOps-Arbeitsweisen — automatisierungsorientiertes Testen, CI/CD-Qualitätstore und Observability — für vorhersehbare, risikoarme Releases.",
    bullets: [
      "Enterprise-QA-Strategie für SaaS- und ERP-Delivery (SAP S/4HANA, Workday).",
      "Shift-Left-Qualität mit Pipeline-Governance und Release-Bereitschaftssignalen.",
      "GenAI-gestütztes Testdesign und Automatisierungsbeschleunigung für schnelleres Feedback.",
    ],
    paragraph1: "Mein Fokus liegt darauf, Qualität früh im Delivery-Lebenszyklus zu verankern, um schnellere, vorhersehbarere und risikobewusste Releases zu ermöglichen.",
    paragraph2: "Mein Hintergrund umfasst Enterprise-Delivery in SaaS, ERP, Versicherung, HealthTech, FinTech und E-Commerce — mit Plattformen wie Workday, SAP S/4HANA, Salesforce und Microsoft Dynamics 365. Ich habe cross-regionale Programme in Europa, Asien und Nordamerika geleitet und dabei Produkt-, Engineering- und QA-Teams auf gemeinsame Ziele ausgerichtet.",
    paragraph3: "Heute konzentriere ich mich auf den Einsatz von Generativer KI und LLMs zur Verbesserung des Testdesigns, Beschleunigung der Automatisierung, frühzeitigen Risikoerkennung und metrikbasierten Release-Governance in global verteilten Teams.",
    ctaGetInTouch: "Kontakt aufnehmen",
    ctaViewWork: "LinkedIn ansehen",
    atAGlance: "Auf einen Blick",
    statsLabels: {
      experience: "Erfahrung",
      regions: "Regionen",
      regionsSub: "Europa · Asien · Nordamerika",
      strength: "Stärke",
      focus: "Fokus",
    },
    platforms: "Enterprise-Plattformen",
    industries: "Branchen",
    whatYouCanExpect: "Was Sie erwarten können",
    expectations: [
      "Automatisierungsorientierte Qualitätsstrategien in Ihrer CI/CD-Pipeline.",
      "Strukturierte UAT-Governance und Release-Bereitschaft mit klaren Go/No-Go-Signalen.",
      "KI-gestütztes Testdesign für schnelleres Feedback und weniger manuellen Aufwand.",
      "Ein Ansprechpartner — lokal in Kanada gemanagt, global geliefert.",
    ],
    howIApproach: "Mein Delivery-Ansatz",
    approachIntro: "Qualität ist keine Phase — sie ist eine Praxis, die den gesamten Delivery-Lebenszyklus durchzieht, vom Pipeline-Design bis zur Post-Go-live-Stabilisierung.",
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
      { id: "devtestops", title: "DevTestOps & CI/CD-Qualitätstore", content: "Automatisierte Qualitätstore in CI/CD-Pipelines einbetten — von Unit-Tests bis zur Release-Bereitschaft. Mit Jenkins, GitHub Actions und Docker für wiederholbare, skalierbare Delivery-Workflows." },
      { id: "sap", title: "SAP & ERP-Test-Governance", content: "Strukturierte UAT-Governance und Release-Bereitschaft für SAP S/4HANA-Programme — mit definierten Qualitätstoren, Stakeholder-Abnahmen und risikobasierten Go/No-Go-Entscheidungen." },
      { id: "ai", title: "KI-gestütztes Quality Engineering", content: "Generative KI und LLMs für Testdesign, Risikoerkennung und Automatisierungsbeschleunigung. Weniger manueller Aufwand bei besserer Abdeckung und schnellerem Feedback." },
      { id: "web", title: "Digitale Entwicklung & Webanwendungen", content: "Moderne, performante Webanwendungen und Reporting-Dashboards — von Rapid Prototypes bis zu produktionsreifen Tools." },
    ],
    openToConversation: "Interesse an einem Gespräch?",
    openToConversationBody: "Ob Sie ein SAP-Programm planen, Ihre QA-Praxis skalieren oder ein digitales Produkt aufbauen — lassen Sie uns sprechen.",
    ctaContact: "Kontakt aufnehmen",
    ctaLinkedIn: "LinkedIn",
  },
  fr: {
    heading: "À propos",
    intro: "Professionnel Technology Delivery & Quality Engineering avec 10+ ans d'expérience dans la construction de pratiques DevTestOps — tests automatisation-first, portes qualité CI/CD et observabilité — pour des releases prévisibles et à faible risque.",
    bullets: [
      "Stratégie QA enterprise pour la livraison SaaS et ERP (SAP S/4HANA, Workday).",
      "Qualité shift-left avec gouvernance des pipelines et signaux de préparation aux versions.",
      "Conception de tests assistée par GenAI et accélération de l'automatisation pour un feedback plus rapide.",
    ],
    paragraph1: "Mon objectif est d'intégrer la qualité tôt dans le cycle de livraison pour permettre des releases plus rapides, plus prévisibles et plus conscientes des risques.",
    paragraph2: "Mon parcours couvre la livraison enterprise dans SaaS, ERP, assurance, HealthTech, FinTech et eCommerce — avec des plateformes comme Workday, SAP S/4HANA, Salesforce et Microsoft Dynamics 365. J'ai dirigé des programmes interrégionaux en Europe, Asie et Amérique du Nord, alignant les équipes produit, engineering et QA autour d'objectifs communs.",
    paragraph3: "Aujourd'hui, je me concentre sur l'application de l'IA générative et des LLMs pour améliorer la conception des tests, accélérer l'automatisation, détecter les risques tôt et soutenir une gouvernance des versions basée sur les métriques dans des équipes mondialement distribuées.",
    ctaGetInTouch: "Nous contacter",
    ctaViewWork: "Voir LinkedIn",
    atAGlance: "En un coup d'œil",
    statsLabels: {
      experience: "Expérience",
      regions: "Régions",
      regionsSub: "Europe · Asie · Amérique du Nord",
      strength: "Force",
      focus: "Focus",
    },
    platforms: "Plateformes enterprise",
    industries: "Industries",
    whatYouCanExpect: "Ce que vous pouvez attendre",
    expectations: [
      "Stratégies qualité axées sur l'automatisation intégrées dans votre pipeline CI/CD.",
      "Gouvernance UAT structurée et préparation aux versions avec des signaux go/no-go clairs.",
      "Conception de tests assistée par IA pour un feedback plus rapide et moins d'effort manuel.",
      "Un point de contact — géré localement au Canada, livré globalement.",
    ],
    howIApproach: "Mon approche de livraison",
    approachIntro: "La qualité n'est pas une phase — c'est une pratique intégrée tout au long du cycle de livraison, de la conception du pipeline à la stabilisation post go-live.",
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
      { id: "devtestops", title: "DevTestOps & Portes qualité CI/CD", content: "Intégrer des portes qualité automatisées dans les pipelines CI/CD — des tests unitaires à la préparation aux versions. Avec Jenkins, GitHub Actions et Docker pour des workflows de livraison répétables et évolutifs." },
      { id: "sap", title: "Gouvernance des tests SAP & ERP", content: "Gouvernance UAT structurée et préparation aux versions pour les programmes SAP S/4HANA — avec des portes qualité définies, des approbations des parties prenantes et des décisions go/no-go basées sur les risques." },
      { id: "ai", title: "Ingénierie qualité assistée par IA", content: "Appliquer l'IA générative et les LLMs à la conception des tests, l'identification des risques et l'accélération de l'automatisation. Moins d'effort manuel avec une meilleure couverture." },
      { id: "web", title: "Développement digital & Applications web", content: "Construire des applications web modernes et performantes — des prototypes rapides aux outils prêts pour la production." },
    ],
    openToConversation: "Ouvert à une conversation ?",
    openToConversationBody: "Que vous planifiez un programme SAP, développiez votre pratique QA ou construisiez un produit digital — parlons-en.",
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

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <main className="pt-16 md:pt-24 pb-8 md:pb-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Hero row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">

            {/* Left column — bio */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="sr-only">About Gagan Singh – Quality Engineering, DevTestOps and Technology Delivery</h1>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">{a.heading}</h2>

              {/* Intro */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{a.intro}</p>

              {/* Bullets */}
              <ul className="space-y-2">
                {a.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={14} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <Badge variant="secondary" className="text-xs">Technology Delivery</Badge>
                <Badge variant="secondary" className="text-xs">Quality Engineering</Badge>
                <Badge variant="secondary" className="text-xs">DevTestOps</Badge>
                <Badge variant="secondary" className="text-xs">CI/CD</Badge>
                <Badge variant="secondary" className="text-xs">GenAI / LLMs</Badge>
                <Badge variant="secondary" className="text-xs">Enterprise Platforms</Badge>
              </div>

              {/* Paragraphs — always visible */}
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pt-1">
                <p>{a.paragraph1}</p>
                <p>{a.paragraph2}</p>
                <p>{a.paragraph3}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2">
                    {a.ctaGetInTouch}<ArrowRight size={15} />
                  </a>
                </Button>
                <Button variant="outline" asChild size="sm" className="w-full sm:w-auto">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    {a.ctaViewWork}<ExternalLink size={15} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right column — stat cards */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="border-border">
                <CardHeader className="pb-3 pt-4 px-4">
                  <CardTitle className="font-display text-base md:text-lg">{a.atAGlance}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 space-y-4">
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">{a.statsLabels.experience}</p>
                      <p className="text-xl font-semibold text-foreground">10+
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          {lang === "de" ? "J." : lang === "fr" ? "ans" : "yrs"}
                        </span>
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">{a.statsLabels.regions}</p>
                      <p className="text-xl font-semibold text-foreground">3</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{a.statsLabels.regionsSub}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">{a.statsLabels.strength}</p>
                      <p className="text-sm font-semibold text-foreground leading-tight">QE + Tech Delivery</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">{a.statsLabels.focus}</p>
                      <p className="text-sm font-semibold text-foreground leading-tight">AI-enabled DevTestOps</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">{a.platforms}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {platforms.map((p) => <Badge key={p} variant="outline" className="text-xs">{p}</Badge>)}
                    </div>
                  </div>

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

          {/* How I Approach */}
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
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {area.content}
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
                    <Button variant="outline" asChild size="sm" className="w-full sm:w-auto">
                      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2" aria-label="Open LinkedIn profile">
                        {a.ctaLinkedIn}<ExternalLink size={15} />
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
