import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ExternalLink, Shield, Monitor, GitBranch,
  Layers, CheckSquare, Activity, Zap, Globe, CheckCircle,
  Globe2, PenLine, ClipboardCheck, Code2, AppWindow,
  LifeBuoy, Smartphone, Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";
import PartnerPanel from "@/components/PartnerPanel";

// ─── Design tokens ─────────────────────────────────────────────────────────────
// Three-pillar colour system — blue / teal / purple
const TAB_COLOURS = {
  digital: {
    active:      "bg-blue-600 dark:bg-blue-500 text-white",
    inactive:    "bg-transparent text-muted-foreground border border-border hover:bg-muted/50",
    accentBar:   "bg-blue-500 dark:bg-blue-400",
    iconBg:      "bg-blue-100 dark:bg-blue-900",
    iconColor:   "text-blue-600 dark:text-blue-400",
    dotColor:    "bg-blue-500 dark:bg-blue-400",
    aiBg:        "bg-blue-50 dark:bg-blue-950/50",
    aiBorder:    "border-blue-200 dark:border-blue-800",
    aiBadgeBg:   "bg-blue-100 dark:bg-blue-900",
    aiBadgeText: "text-blue-700 dark:text-blue-300",
  },
  sap: {
    active:      "bg-teal-600 dark:bg-teal-500 text-white",
    inactive:    "bg-transparent text-muted-foreground border border-border hover:bg-muted/50",
    accentBar:   "bg-teal-500 dark:bg-teal-400",
    iconBg:      "bg-teal-100 dark:bg-teal-900",
    iconColor:   "text-teal-600 dark:text-teal-400",
    dotColor:    "bg-teal-500 dark:bg-teal-400",
    aiBg:        "bg-teal-50 dark:bg-teal-950/50",
    aiBorder:    "border-teal-200 dark:border-teal-800",
    aiBadgeBg:   "bg-teal-100 dark:bg-teal-900",
    aiBadgeText: "text-teal-700 dark:text-teal-300",
  },
  quality: {
    active:      "bg-purple-600 dark:bg-purple-500 text-white",
    inactive:    "bg-transparent text-muted-foreground border border-border hover:bg-muted/50",
    accentBar:   "bg-purple-500 dark:bg-purple-400",
    iconBg:      "bg-purple-100 dark:bg-purple-900",
    iconColor:   "text-purple-600 dark:text-purple-400",
    dotColor:    "bg-purple-500 dark:bg-purple-400",
    aiBg:        "bg-purple-50 dark:bg-purple-950/50",
    aiBorder:    "border-purple-200 dark:border-purple-800",
    aiBadgeBg:   "bg-purple-100 dark:bg-purple-900",
    aiBadgeText: "text-purple-700 dark:text-purple-300",
  },
};

type TabKey = keyof typeof TAB_COLOURS;

// Icons for the strip on each tab
const STRIP_ICON_MAP: Record<string, React.ReactNode> = {
  monitor:     <Monitor className="h-3.5 w-3.5" />,
  zap:         <Zap className="h-3.5 w-3.5" />,
  settings:    <CheckSquare className="h-3.5 w-3.5" />,
  rocket:      <ArrowRight className="h-3.5 w-3.5" />,
  layers:      <Layers className="h-3.5 w-3.5" />,
  shield:      <Shield className="h-3.5 w-3.5" />,
  globe:       <Globe className="h-3.5 w-3.5" />,
  checkSquare: <CheckSquare className="h-3.5 w-3.5" />,
  cpu:         <Monitor className="h-3.5 w-3.5" />,
  bot:         <Activity className="h-3.5 w-3.5" />,
  gitBranch:   <GitBranch className="h-3.5 w-3.5" />,
  barChart:    <Activity className="h-3.5 w-3.5" />,
};

// Icons for the services pill strip
const PILL_ICONS: React.ReactNode[] = [
  <Globe2 className="h-3 w-3" />,
  <PenLine className="h-3 w-3" />,
  <ClipboardCheck className="h-3 w-3" />,
  <Code2 className="h-3 w-3" />,
  <AppWindow className="h-3 w-3" />,
  <LifeBuoy className="h-3 w-3" />,
  <Smartphone className="h-3 w-3" />,
  <Briefcase className="h-3 w-3" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

// ─── Background decorative circles — added to every SectionWrapper ────────────
// Mirrors the same pattern used on the home page.
// flip=true moves the larger circle to the left and smaller to the right.
const SectionCircles = ({ flip = false }: { flip?: boolean }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className={`absolute ${flip ? "-left-12 -top-12" : "-right-14 -top-14"} h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]`} />
    <div className={`absolute ${flip ? "-right-10 -bottom-10" : "-left-10 -bottom-10"} h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]`} />
  </div>
);

// ─── Services Pill Strip ──────────────────────────────────────────────────────
// Shown on all three tabs — no label, no hierarchy implied.
// Wraps naturally on mobile, single scrollable row on desktop.
const ServicesPillStrip = ({ pills }: { pills: { label: string }[] }) => (
  // justify-center centres pills on all screen sizes.
  // flex-wrap ensures they reflow to multiple rows on narrow screens rather than overflow.
  <div className="flex flex-wrap justify-center gap-1.5 py-3 border-b border-border mb-5">
    {pills.map((p, i) => (
      <span
        key={i}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground"
      >
        <span className="text-muted-foreground/70">{PILL_ICONS[i]}</span>
        {p.label}
      </span>
    ))}
  </div>
);



// ─── Page ─────────────────────────────────────────────────────────────────────
const Services = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Services",
    "Digital Development, SAP Delivery & Governance, and Quality Engineering — three specialisations, one engagement.",
    "/services"
  );

  const [activeTab, setActiveTab] = useState<TabKey>("digital");

  // Translation arrays
  const stripItems = {
    digital: t("services.stripDigital", { returnObjects: true }) as { icon: string; label: string }[],
    sap:     t("services.stripSap",     { returnObjects: true }) as { icon: string; label: string }[],
    quality: t("services.stripQuality", { returnObjects: true }) as { icon: string; label: string }[],
  };
  const pillStrip    = t("services.pillStrip",  { returnObjects: true }) as { label: string }[];
  const heroStats    = t("services.heroStats",  { returnObjects: true }) as { value: string; label: string }[];
  const digitalItems = t("services.digitalItems", { returnObjects: true }) as { title: string; desc: string }[];
  const digitalStack = t("services.digitalStack", { returnObjects: true }) as string[];
  const deliveryPhases  = t("delivery.phases",  { returnObjects: true }) as { name: string; desc: string }[];
  const automationItems = t("delivery.automationItems", { returnObjects: true }) as string[];
  const capabilities    = t("delivery.capabilities",    { returnObjects: true }) as string[];
  const uatPhases  = t("uat.phases",  { returnObjects: true }) as { name: string; desc: string }[];
  const controls   = t("uat.controls", { returnObjects: true }) as string[];
  const outputItems = t("uat.outputItems", { returnObjects: true }) as { title: string; desc: string }[];
  const deliverables = t("uat.deliverables", { returnObjects: true }) as string[];
  const trackItems = t("release.trackItems", { returnObjects: true }) as { title: string; desc: string }[];
  const statuses   = t("release.statuses", { returnObjects: true }) as { label: string; desc: string }[];
  const engRows    = t("engagement.table.rows", { returnObjects: true }) as Record<string, { scope: string; duration: string; model: string }>;
  const engHeaders = t("engagement.table.headers", { returnObjects: true }) as string[];
  const engPillars = t("engagement.table.pillars", { returnObjects: true }) as Record<string, string>;

  // New AI QE card
  const aiQeCard = t("services.aiQeCard", { returnObjects: true }) as { title: string; desc: string; detail: string[] };

  // AI intro sentences
  const digitalIntroAi = t("services.digitalIntroAi");
  const sapIntroAi     = t("services.sapIntroAi");
  const qualityIntroAi = t("services.qualityIntroAi");

  const c = TAB_COLOURS[activeTab];

  // Status badge colours for release decision model
  const statusBg: Record<number, string> = {
    0: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700",
    1: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700",
    2: "bg-red-100   dark:bg-red-900/50   text-red-700   dark:text-red-300   border-red-300   dark:border-red-700",
  };

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="enterprise-gradient relative overflow-hidden py-10 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:h-80 md:w-80" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02]" />
          <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] hidden md:block" />
        </div>

        <div className="container relative mx-auto px-4 text-center md:px-6">
          {/* Decorative service icons — desktop only.
              Positioned inside the container so it sits between the centered
              text and the right edge of the content area, matching the home page hero. */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex flex-col gap-4 lg:right-4"
            aria-hidden="true"
          >
            {[
              { Icon: Monitor,     label: "Digital" },
              { Icon: Shield,      label: "SAP"     },
              { Icon: CheckCircle, label: "Quality" },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <span className="text-[9px] text-white/50 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </motion.div>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5">
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">
                {pill}
              </span>
            ))}
          </div>
          <h1 className="mx-auto max-w-3xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[40px]">
            {t("services.heroPrefix")}{" "}
            <span style={{ color: "#93c5fd" }}>{t("services.heroAccent")}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/75 leading-relaxed md:text-base">
            {t("services.heroSubtitle")}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
                {t("hero.ctaPrimary")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("cta.getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-3 text-[12px] text-primary-foreground/50 md:text-[13px]">
            {t("hero.reach")}
          </p>
          {/* Hero stat bar */}
          <div className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-2xl">
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-2 md:px-5">
                <span className="text-center text-sm font-bold leading-tight text-primary-foreground md:text-base">{stat.value}</span>
                <span className="mt-0.5 text-center text-[10px] leading-tight text-primary-foreground/50 md:text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TOOL STRIP (changes per tab)
      ══════════════════════════════════════════════ */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-2.5 md:px-6">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            {stripItems[activeTab].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground md:text-xs">
                <span className="text-primary">{STRIP_ICON_MAP[item.icon]}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TAB SWITCHER
      ══════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          {/*
            Mobile: 3-column grid — each tab fills equal width, no overflow/scroll needed.
            Desktop (md+): flex row centered in the container.
          */}
          <div className="grid grid-cols-3 gap-1.5 py-2.5 md:flex md:justify-center md:gap-2">
            {(["digital", "sap", "quality"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-2 py-2 text-[11px] font-semibold transition-all duration-200 text-center leading-tight
                  md:px-4 md:py-1.5 md:text-xs md:whitespace-nowrap ${
                  activeTab === tab ? TAB_COLOURS[tab].active : TAB_COLOURS[tab].inactive
                }`}
              >
                {t(`services.tab${tab.charAt(0).toUpperCase() + tab.slice(1)}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TAB CONTENT
      ══════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
        >

          {/* ── Services Pill Strip — shown on ALL tabs, no label ── */}
          <div className="container mx-auto px-4 pt-5 md:px-6">
            <ServicesPillStrip pills={pillStrip} />
          </div>

          {/* ════════════════════════════════════════
              DIGITAL DEVELOPMENT TAB
          ════════════════════════════════════════ */}
          {activeTab === "digital" && (
            <div>
              <SectionWrapper className="relative overflow-hidden bg-background">
                <SectionCircles />
                {/* Intro with AI sentence woven in */}
                <div className="mx-auto max-w-2xl text-center mb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                    {t("services.digitalIntro")}{" "}
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold align-middle ${c.aiBadgeBg} ${c.aiBadgeText}`}>
                      <Zap className="h-2.5 w-2.5" />{digitalIntroAi}
                    </span>
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="mx-auto mb-8 max-w-xl text-center">
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    "The best digital tools are invisible to the end user — they just work."
                  </p>
                </blockquote>

                {/* Service cards — 2-column grid desktop, 1-column mobile */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
                  {digitalItems.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeUp(i * 0.07)}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
                    >
                      <div className={`h-[3px] ${c.accentBar}`} />
                      <div className="p-5">
                        <h3 className="text-[15px] font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Built With Modern Tooling */}
                <motion.div {...fadeUp(0.1)} className="mt-10">
                  <h2 className="text-[22px] font-bold text-foreground mb-2 text-center">{t("services.digitalStackHeading")}</h2>
                  <p className="text-sm text-muted-foreground text-center mb-5 max-w-xl mx-auto">{t("services.digitalStackIntro")}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {digitalStack.map((tool) => (
                      <span key={tool} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Engagement info */}
                <motion.div {...fadeUp(0.12)} className="mt-8 rounded-xl border border-border bg-muted/30 p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1">
                    {t("engagement.eyebrow")}
                  </p>
                  <p className="text-sm text-muted-foreground">{t("services.digitalEngagementFor")}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{t("services.digitalEngagementScope")}</p>
                </motion.div>

                {/* CTA */}
                <motion.div {...fadeUp(0.15)} className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{t("services.digitalCtaHeading")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t("services.digitalCtaBody")}</p>
                  <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-1.5">
                      {t("hero.ctaPrimary")} <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </motion.div>
              </SectionWrapper>
            </div>
          )}

          {/* ════════════════════════════════════════
              SAP DELIVERY & GOVERNANCE TAB
          ════════════════════════════════════════ */}
          {activeTab === "sap" && (
            <div>
              <SectionWrapper className="relative overflow-hidden bg-background">
                <SectionCircles />
                {/* Intro with AI sentence woven in */}
                <div className="mx-auto max-w-2xl text-center mb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                    {t("services.sapIntro")}{" "}
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold align-middle ${c.aiBadgeBg} ${c.aiBadgeText}`}>
                      <Zap className="h-2.5 w-2.5" />{sapIntroAi}
                    </span>
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="mx-auto mb-8 max-w-xl text-center">
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    "A go-live isn't the finish line. It's where the real work begins."
                  </p>
                </blockquote>

                {/* Delivery Approach */}
                <motion.div {...fadeUp(0)}>
                  <h2 className="text-[22px] font-bold text-foreground mb-1">{t("delivery.heading")}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{t("delivery.subheading")}</p>
                  <div className="space-y-2">
                    {deliveryPhases.map((phase, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
                        <span className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${["bg-blue-500","bg-teal-500","bg-green-500","bg-amber-500","bg-red-500"][i]} dark:${["bg-blue-400","bg-teal-400","bg-green-400","bg-amber-400","bg-red-400"][i]}`} />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{phase.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Phase badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {deliveryPhases.map((ph, i) => (
                      <span key={i} className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${["bg-blue-500","bg-teal-500","bg-green-500","bg-amber-500","bg-red-500"][i]}`}>
                        {ph.name}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Engagement info */}
                <motion.div {...fadeUp(0.08)} className="mt-8 rounded-xl border border-border bg-muted/30 p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1">{t("engagement.eyebrow")}</p>
                  <p className="text-sm text-muted-foreground">{t("services.sapEngagementFor")}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{t("services.sapEngagementScope")}</p>
                </motion.div>
              </SectionWrapper>

              {/* UAT Operating Model */}
              <SectionWrapper className="relative overflow-hidden bg-muted/30">
                <SectionCircles flip />
                <motion.div {...fadeUp(0)}>
                  <h2 className="text-[22px] font-bold text-foreground mb-1">{t("uat.heading")}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{t("uat.subheading")}</p>

                  {/* Phase strip */}
                  <div className="mb-5 overflow-x-auto">
                    <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
                      {uatPhases.map((ph, i) => (
                        <span key={i} className={`rounded-full px-3 py-1 text-xs font-semibold ${c.aiBadgeBg} ${c.aiBadgeText}`}>
                          {ph.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* UAT phases grid */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                    {uatPhases.map((phase, i) => (
                      <div key={i} className="rounded-xl border border-border bg-card p-4">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold mb-3 ${c.iconBg} ${c.iconColor}`}>
                          {i + 1}
                        </div>
                        <p className="text-sm font-semibold text-foreground mb-1">{phase.name}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Key Controls */}
                  <h3 className="text-base font-semibold text-foreground mb-3">{t("uat.keyControls")}</h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
                    {controls.map((ctrl, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${c.iconColor}`} />
                        <span className="text-xs text-muted-foreground">{ctrl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outputs for Stakeholders */}
                  <h3 className="text-base font-semibold text-foreground mb-3">{t("uat.outputs")}</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-6">
                    {outputItems.map((item, i) => (
                      <div key={i} className="rounded-xl border border-border bg-card p-4">
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SectionWrapper>

              {/* What We Track + Release Decision */}
              <SectionWrapper className="relative overflow-hidden bg-background">
                <SectionCircles />
                <motion.div {...fadeUp(0)}>
                  <h2 className="text-[22px] font-bold text-foreground mb-5">{t("release.trackHeading")}</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-8">
                    {trackItems.map((item, i) => (
                      <div key={i} className={`rounded-xl border bg-card p-4 ${i < 2 ? `border-l-2 ${i === 0 ? "border-l-blue-500" : "border-l-teal-500"}` : `border-l-2 ${i === 2 ? "border-l-purple-500" : "border-l-amber-500"}`} border-border`}>
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-[22px] font-bold text-foreground mb-2">{t("release.decisionModel")}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{t("release.governanceBody")}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {statuses.map((s, i) => (
                      <div key={i} className={`rounded-xl border p-4 ${statusBg[i]}`}>
                        <p className="text-sm font-bold mb-2">{s.label}</p>
                        <p className="text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SectionWrapper>
            </div>
          )}

          {/* ════════════════════════════════════════
              QUALITY ENGINEERING TAB
          ════════════════════════════════════════ */}
          {activeTab === "quality" && (
            <div>
              <SectionWrapper className="relative overflow-hidden bg-background">
                <SectionCircles flip />
                {/* Intro with AI sentence woven in */}
                <div className="mx-auto max-w-2xl text-center mb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                    {t("services.qualityIntro")}{" "}
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold align-middle ${c.aiBadgeBg} ${c.aiBadgeText}`}>
                      <Zap className="h-2.5 w-2.5" />{qualityIntroAi}
                    </span>
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="mx-auto mb-8 max-w-xl text-center">
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    "Catching a defect in testing costs a fraction of what it costs in production."
                  </p>
                </blockquote>

                {/* Test Automation Strategy */}
                <motion.div {...fadeUp(0)}>
                  <h2 className="text-[22px] font-bold text-foreground mb-1">{t("delivery.automationHeading")}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{t("delivery.automationSubheading")}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-6">
                    {automationItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${c.iconColor}`} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* NEW: AI-Augmented QE card — sits alongside automation strategy */}
                <motion.div {...fadeUp(0.06)} className="mb-6">
                  <div className={`rounded-2xl border overflow-hidden ${TAB_COLOURS.quality.aiBorder}`}>
                    <div className={`h-[3px] ${TAB_COLOURS.quality.accentBar}`} />
                    <div className={`p-4 md:p-5 ${TAB_COLOURS.quality.aiBg}`}>
                      <div className="flex items-start gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${TAB_COLOURS.quality.iconBg} ${TAB_COLOURS.quality.iconColor}`}>
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground mb-1">{aiQeCard.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{aiQeCard.desc}</p>
                          <ul className="space-y-2">
                            {aiQeCard.detail.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 ${TAB_COLOURS.quality.dotColor}`} />
                                {/* Last bullet gets AI badge */}
                                {i === aiQeCard.detail.length - 1
                                  ? <span className="font-medium text-foreground">{b}</span>
                                  : <span>{b}</span>
                                }
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* What Strong UAT Governance Delivers */}
                <motion.div {...fadeUp(0.08)}>
                  <h2 className="text-[22px] font-bold text-foreground mb-5">{t("uat.deliverablesHeading")}</h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${c.iconColor}`} />
                        <span className="text-xs font-medium text-foreground">{d}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Release Decision Model */}
                <motion.div {...fadeUp(0.1)} className="mt-8">
                  <h2 className="text-[22px] font-bold text-foreground mb-2">{t("release.decisionModel")}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{t("release.governanceBody")}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {statuses.map((s, i) => (
                      <div key={i} className={`rounded-xl border p-4 ${statusBg[i]}`}>
                        <p className="text-sm font-bold mb-2">{s.label}</p>
                        <p className="text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Core Capabilities */}
                <motion.div {...fadeUp(0.12)} className="mt-8">
                  <h3 className="text-base font-semibold text-foreground mb-3">{t("delivery.coreCapabilities")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {capabilities.map((cap, i) => (
                      <span key={i} className={`rounded-full border px-3 py-1 text-xs ${c.aiBadgeBg} ${c.aiBadgeText} ${c.aiBorder}`}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Engagement info */}
                <motion.div {...fadeUp(0.14)} className="mt-8 rounded-xl border border-border bg-muted/30 p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1">{t("engagement.eyebrow")}</p>
                  <p className="text-sm text-muted-foreground">{t("services.qualityEngagementFor")}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{t("services.qualityEngagementScope")}</p>
                </motion.div>
              </SectionWrapper>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          HOW WE ENGAGE — shared across all tabs
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <SectionCircles />
        <motion.div {...fadeUp(0)} className="relative text-center mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">{t("engagement.eyebrow")}</p>
          <h2 className="text-[26px] font-bold text-foreground md:text-[34px]">{t("engagement.heading")}</h2>
          <p className="mt-2 mx-auto max-w-xl text-sm text-muted-foreground">{t("engagement.subheading")}</p>
        </motion.div>

        {/* Two engagement models */}
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
          {([
            { key: "model1", color: "blue" },
            { key: "model2", color: "teal" },
          ] as const).map(({ key, color }, i) => {
            const model = t(`engagement.${key}`, { returnObjects: true }) as { label: string; title: string; desc: string; tag: string };
            const barColors: Record<string, string> = { blue: "bg-blue-500 dark:bg-blue-400", teal: "bg-teal-500 dark:bg-teal-400" };
            const tagColors: Record<string, string> = {
              blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
              teal: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
            };
            return (
              <motion.div key={key} {...fadeUp(i * 0.08)} className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] ${barColors[color]}`} />
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">{model.label}</p>
                  <h3 className="text-[15px] font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{model.desc}</p>
                  <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium ${tagColors[color]}`}>
                    {model.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement table — responsive */}
        <motion.div {...fadeUp(0.1)} className="relative overflow-x-auto rounded-2xl border border-border bg-card">
          {/* Desktop table */}
          <table className="hidden sm:table w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {engHeaders.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(["digital", "sap", "qe"] as const).map((key, i) => {
                const row = engRows[key];
                const dotColors: Record<string, string> = { digital: "bg-blue-500", sap: "bg-teal-500", qe: "bg-purple-500" };
                const textColors: Record<string, string> = { digital: "text-blue-600 dark:text-blue-400", sap: "text-teal-600 dark:text-teal-400", qe: "text-purple-600 dark:text-purple-400" };
                const durationColors: Record<string, string> = { digital: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300", sap: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300", qe: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300" };
                return (
                  <tr key={key} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <span className={`flex items-center gap-2 text-xs font-semibold ${textColors[key]}`}>
                        <span className={`h-2 w-2 rounded-full ${dotColors[key]}`} />
                        {engPillars[key]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.scope}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${durationColors[key]}`}>
                        {row.duration}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.model}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Mobile: stacked cards */}
          <div className="sm:hidden divide-y divide-border">
            {(["digital", "sap", "qe"] as const).map((key) => {
              const row = engRows[key];
              const textColors: Record<string, string> = { digital: "text-blue-600 dark:text-blue-400", sap: "text-teal-600 dark:text-teal-400", qe: "text-purple-600 dark:text-purple-400" };
              const dotColors: Record<string, string> = { digital: "bg-blue-500", sap: "bg-teal-500", qe: "bg-purple-500" };
              return (
                <div key={key} className="p-4">
                  <span className={`flex items-center gap-2 text-xs font-bold mb-2 ${textColors[key]}`}>
                    <span className={`h-2 w-2 rounded-full ${dotColors[key]}`} />
                    {engPillars[key]}
                  </span>
                  <p className="text-xs text-muted-foreground mb-1">{row.scope}</p>
                  <p className="text-xs text-muted-foreground">{row.duration} · {row.model}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Engagement CTA */}
        <motion.div {...fadeUp(0.15)} className="relative mt-8 text-center">
          <h3 className="text-base font-semibold text-foreground mb-1">{t("engagement.cta.title")}</h3>
          <p className="text-sm text-muted-foreground mb-4">{t("engagement.cta.desc")}</p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-1.5">
                {t("engagement.cta.book")} <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto gap-1.5">
                {t("engagement.cta.message")} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-background">
        <SectionCircles flip />
        <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center">
          <h2 className="text-[26px] font-bold text-foreground md:text-[34px]">{t("cta.heading")}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed md:text-base">{t("cta.body")}</p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-semibold sm:w-auto px-8">
                {t("cta.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta.message")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("cta.subtext")}</p>
        </motion.div>
      </SectionWrapper>

      <PartnerPanel />
    </Layout>
  );
};

export default Services;
