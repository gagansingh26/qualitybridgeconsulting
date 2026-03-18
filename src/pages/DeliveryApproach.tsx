import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Monitor,
  Zap,
  Settings,
  Rocket,
  Layers,
  Shield,
  Globe,
  CheckSquare,
  ListChecks,
  Cpu,
  Bot,
  GitBranch,
  BarChart2,
  AlertTriangle,
  Users,
  FileText,
  ClipboardList,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

type TabKey = "digital" | "sap" | "quality";

const STRIP_ICONS: Record<string, React.ReactNode> = {
  monitor: <Monitor className="h-4 w-4" />,
  zap: <Zap className="h-4 w-4" />,
  settings: <Settings className="h-4 w-4" />,
  rocket: <Rocket className="h-4 w-4" />,
  layers: <Layers className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  globe: <Globe className="h-4 w-4" />,
  checkSquare: <CheckSquare className="h-4 w-4" />,
  cpu: <Cpu className="h-4 w-4" />,
  bot: <Bot className="h-4 w-4" />,
  gitBranch: <GitBranch className="h-4 w-4" />,
  barChart: <BarChart2 className="h-4 w-4" />,
};

const phaseColors = [
  "bg-primary",
  "bg-info",
  "bg-success",
  "bg-warning",
  "bg-destructive",
];

const keyControlIcons = [
  <ListChecks className="h-4 w-4" />,
  <AlertTriangle className="h-4 w-4" />,
  <Users className="h-4 w-4" />,
  <Shield className="h-4 w-4" />,
];

const outputIcons = [
  <FileText className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />,
  <ClipboardList className="h-5 w-5" />,
];

const deliverableIcons = [
  <Shield className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <Zap className="h-5 w-5" />,
  <ThumbsUp className="h-5 w-5" />,
];

const trackIcons = [
  <ClipboardList className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <Cpu className="h-5 w-5" />,
];

const statusVariants: ("on-track" | "conditional" | "blocked")[] = [
  "on-track",
  "conditional",
  "blocked",
];

const digitalServiceIcons = [
  <Monitor className="h-5 w-5" />,
  <BarChart2 className="h-5 w-5" />,
  <Rocket className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay },
});

const tabVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

// Lift helpers — both whileHover (desktop) and whileTap (mobile)
const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.25 } },
  whileTap: { y: -6, transition: { duration: 0.25 } },
};
const hoverLiftSm = {
  whileHover: { y: -4, transition: { duration: 0.25 } },
  whileTap: { y: -4, transition: { duration: 0.25 } },
};

const DeliveryApproach = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>("digital");
  const [activePhase, setActivePhase] = useState(0);

  usePageMeta(
    "QualityBridge Consulting | Digital Development · SAP Governance · Quality Engineering",
    "Digital development, SAP governance & UAT, and quality engineering — three specialisations working together for confident, well-tested delivery.",
    "/services"
  );

  const phases = t("delivery.phases", { returnObjects: true }) as { name: string; desc: string }[];
  const uatPhases = t("uat.phases", { returnObjects: true }) as { name: string; desc: string }[];
  const keyControls = (t("uat.controls", { returnObjects: true }) as string[]).map((label, i) => ({ icon: keyControlIcons[i], label }));
  const outputItems = (t("uat.outputItems", { returnObjects: true }) as { title: string; desc: string }[]).map((o, i) => ({ icon: outputIcons[i], title: o.title, desc: o.desc }));
  const deliverables = (t("uat.deliverables", { returnObjects: true }) as string[]).map((label, i) => ({ icon: deliverableIcons[i], label }));
  const trackItems = (t("release.trackItems", { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({ icon: trackIcons[i], ...item }));
  const releaseStatuses = (t("release.statuses", { returnObjects: true }) as { label: string; desc: string }[]).map((s, i) => ({ variant: statusVariants[i], ...s }));
  const digitalItems = t("services.digitalItems", { returnObjects: true }) as { title: string; desc: string }[];
  const digitalStack = t("services.digitalStack", { returnObjects: true }) as string[];

  const stripKey =
    activeTab === "digital" ? "services.stripDigital"
    : activeTab === "sap" ? "services.stripSap"
    : "services.stripQuality";

  const stripItems = t(stripKey, { returnObjects: true }) as { icon: string; label: string }[];
  const tabs: { key: TabKey; label: string }[] = [
    { key: "digital", label: t("services.tabDigital") },
    { key: "sap", label: t("services.tabSap") },
    { key: "quality", label: t("services.tabQuality") },
  ];

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4"
            aria-hidden="true"
            style={{ width: 220 }}
          >
            <svg width="220" height="190" viewBox="0 0 210 175" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible" }}>
              <style>{`
                @keyframes p1float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
                @keyframes p2float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
                @keyframes p3float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
                @keyframes barGrow{0%,100%{opacity:0.5}50%{opacity:1}}
                .pl1{animation:p1float 3.2s ease-in-out infinite}
                .pl2{animation:p2float 3.8s ease-in-out infinite 0.5s}
                .pl3{animation:p3float 4.2s ease-in-out infinite 1.1s}
                .bar-a{animation:barGrow 2s ease-in-out infinite}
                .bar-b{animation:barGrow 2s ease-in-out infinite 0.4s}
                .bar-c{animation:barGrow 2s ease-in-out infinite 0.8s}
              `}</style>
              <g className="pl1">
                <rect x="12" y="42" width="52" height="104" rx="8" fill="rgba(147,197,253,0.13)" stroke="#93c5fd" strokeWidth="1.2"/>
                <rect x="20" y="54" width="36" height="22" rx="3" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.65"/>
                <line x1="38" y1="76" x2="38" y2="82" stroke="#93c5fd" strokeWidth="1.5" opacity="0.5"/>
                <rect x="28" y="82" width="20" height="2.5" rx="1.2" fill="#93c5fd" opacity="0.5"/>
                <rect x="18" y="94" width="32" height="2.5" rx="1.2" fill="rgba(255,255,255,0.3)"/>
                <rect x="18" y="101" width="24" height="2.5" rx="1.2" fill="rgba(255,255,255,0.2)"/>
                <rect x="18" y="108" width="28" height="2.5" rx="1.2" fill="rgba(255,255,255,0.18)"/>
                <text x="38" y="138" fontSize="9" fill="#93c5fd" textAnchor="middle" fontWeight="600">Digital</text>
              </g>
              <g className="pl2">
                <rect x="79" y="24" width="52" height="122" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
                <path d="M105 38 L118 44 L118 57 Q118 66 105 72 Q92 66 92 57 L92 44 Z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
                <line x1="105" y1="46" x2="105" y2="62" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                <line x1="98" y1="54" x2="112" y2="54" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                <rect x="87" y="82" width="36" height="2.5" rx="1.2" fill="rgba(255,255,255,0.38)"/>
                <rect x="87" y="90" width="28" height="2.5" rx="1.2" fill="rgba(255,255,255,0.28)"/>
                <rect x="87" y="98" width="32" height="2.5" rx="1.2" fill="rgba(255,255,255,0.22)"/>
                <rect x="87" y="106" width="20" height="2.5" rx="1.2" fill="rgba(255,255,255,0.18)"/>
                <text x="105" y="138" fontSize="9" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontWeight="600">SAP</text>
              </g>
              <g className="pl3">
                <rect x="146" y="50" width="52" height="96" rx="8" fill="rgba(147,197,253,0.1)" stroke="#93c5fd" strokeWidth="1.2" opacity="0.8"/>
                <circle cx="172" cy="72" r="14" fill="none" stroke="#93c5fd" strokeWidth="1.2" opacity="0.65"/>
                <polyline points="165,72 170,78 180,64" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
                <rect x="152" y="96" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
                <rect x="152" y="96" width="28" height="3" rx="1.5" fill="#93c5fd" opacity="0.5" className="bar-a"/>
                <rect x="152" y="104" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
                <rect x="152" y="104" width="20" height="3" rx="1.5" fill="#93c5fd" opacity="0.4" className="bar-b"/>
                <rect x="152" y="112" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
                <rect x="152" y="112" width="30" height="3" rx="1.5" fill="#93c5fd" opacity="0.35" className="bar-c"/>
                <text x="172" y="138" fontSize="9" fill="#93c5fd" textAnchor="middle" fontWeight="600" opacity="0.85">Quality</text>
              </g>
              <line x1="12" y1="154" x2="198" y2="154" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-1.5"
            style={{ marginBottom: 12 }}
          >
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("services.heroPrefix")}{" "}
            <span style={{ color: "#93c5fd" }}>{t("services.heroAccent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-2xl text-base text-primary-foreground/80 md:text-lg"
          >
            {t("services.heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3"
          >
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
                {t("hero.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("cta.getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {t("hero.reach")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg"
          >
            {(t("services.heroStats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Context strip ── */}
      <div className="border-b border-border bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-strip"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="container mx-auto px-4 py-3 md:px-6"
          >
            <div className="flex flex-col gap-2 md:hidden">
              {stripItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="shrink-0 text-primary">{STRIP_ICONS[item.icon]}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-8">
              {stripItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="shrink-0 text-primary">{STRIP_ICONS[item.icon]}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Tab selector ── */}
      <div className="sticky top-14 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-2.5 md:px-6">
          <div className="flex flex-col gap-1 md:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`w-full rounded-md px-4 py-2.5 text-sm font-semibold text-left transition-all ${
                  activeTab === tab.key
                    ? "enterprise-gradient text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex md:justify-center">
            <div className="flex gap-1 rounded-lg enterprise-gradient p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap rounded-md px-5 py-2 text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? "bg-white text-primary shadow-sm"
                      : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      <AnimatePresence mode="wait">

        {/* ══ TAB 1 — Digital Development ══ */}
        {activeTab === "digital" && (
          <motion.div key="digital" {...tabVariants}>
            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
                <div className="absolute left-12 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
              </div>
              <motion.p {...fadeIn(0)} className="relative mx-auto max-w-3xl text-center text-sm text-muted-foreground md:text-base">
                {t("services.digitalIntro")}
              </motion.p>
              <div className="border-y border-border bg-background -mx-4 px-4 py-8 md:py-10 mt-6 md:mt-8" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                <div className="mx-auto max-w-2xl text-center">
                  <svg width="28" height="22" viewBox="0 0 32 24" fill="none" className="mx-auto mb-3 opacity-20" aria-hidden="true">
                    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
                  </svg>
                  <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
                    "The best digital tools are invisible to the end user — they just work."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
                {digitalItems.map((item, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.08)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary md:h-10 md:w-10">
                        {digitalServiceIcons[i]}
                      </div>
                      <h3 className="text-xs font-semibold text-card-foreground md:text-sm">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground md:mt-3 md:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeIn(0.2)} className="relative mt-6 rounded-xl border border-primary/20 bg-primary/[0.03] px-5 py-4 md:mt-8 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Engagement</p>
                <p className="text-sm text-foreground mb-1">{t("services.digitalEngagementFor")}</p>
                <p className="text-xs text-muted-foreground">{t("services.digitalEngagementScope")}</p>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper className="relative overflow-hidden bg-accent/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
              </div>
              <motion.div {...fadeIn(0)} className="relative text-center">
                <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{t("services.digitalStackHeading")}</h2>
                <p className="mx-auto mt-1.5 max-w-2xl text-center text-sm text-muted-foreground md:text-base">{t("services.digitalStackIntro")}</p>
              </motion.div>
              <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
                {digitalStack.map((badge, i) => (
                  <motion.span key={i} {...fadeIn(i * 0.04)} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-card-foreground card-shadow md:text-sm">
                    {badge}
                  </motion.span>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
                <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
              </div>
              <motion.div {...fadeIn(0)} className="relative text-center">
                <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{t("cta.heading")}</h2>
                <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mt-3 md:text-base">{t("cta.body")}</p>
                <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-6 md:gap-3">
                  <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full font-semibold sm:w-auto">
                      {t("hero.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      {t("cta.getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </SectionWrapper>
          </motion.div>
        )}

        {/* ══ TAB 2 — SAP Governance & UAT ══ */}
        {activeTab === "sap" && (
          <motion.div key="sap" {...tabVariants}>
            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
                <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
              </div>
              <motion.p {...fadeIn(0)} className="relative mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
                {t("services.sapIntro")}
              </motion.p>
              <div className="border-y border-border bg-background -mx-4 px-4 py-8 md:py-10 mt-6 md:mt-8" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                <div className="mx-auto max-w-2xl text-center">
                  <svg width="28" height="22" viewBox="0 0 32 24" fill="none" className="mx-auto mb-3 opacity-20" aria-hidden="true">
                    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
                  </svg>
                  <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
                    "A go-live isn't the finish line. It's where the real work begins."
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="mb-4 text-[28px] font-bold md:text-[36px] text-foreground">{t("delivery.heading")}</h2>

                {/* Mobile phase selector */}
                <div className="md:hidden">
                  <div className="grid grid-cols-3 gap-1.5">
                    {phases.map((phase, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActivePhase(i)}
                        className={`flex w-full items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold transition-colors ${
                          activePhase === i
                            ? `${phaseColors[i]} text-primary-foreground`
                            : "bg-accent text-muted-foreground"
                        }`}
                      >
                        <span className={`h-2 w-2 shrink-0 rounded-full ${activePhase === i ? "bg-primary-foreground/60" : phaseColors[i]}`} />
                        {phase.name}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhase}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      {...hoverLiftSm}
                      className="mt-3 rounded-lg border border-border bg-card p-4 card-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-full ${phaseColors[activePhase]}`} />
                        <h3 className="font-semibold text-card-foreground">{phases[activePhase].name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{phases[activePhase].desc}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Desktop: vertical timeline with hover+tap lift */}
                <div className="relative hidden md:block">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
                  <div className="ml-12 space-y-5">
                    {phases.map((phase, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        {...hoverLiftSm}
                        className="relative flex gap-4"
                      >
                        <div className={`absolute -left-12 mt-1.5 h-4 w-4 rounded-full ${phaseColors[i]} ring-4 ring-background`} />
                        <div className="flex-1 rounded-lg border border-border bg-card p-5 card-shadow">
                          <h3 className="font-semibold text-card-foreground">{phase.name}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{phase.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Large screen: flow bar */}
                <div className="mt-6 hidden overflow-x-auto lg:flex">
                  {phases.map((phase, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`flex h-10 items-center rounded-lg px-4 text-sm font-semibold text-primary-foreground ${phaseColors[i]}`}>
                        {phase.name}
                      </div>
                      {i < phases.length - 1 && <ArrowRight className="mx-1.5 h-4 w-4 text-muted-foreground" />}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div {...fadeIn(0.2)} className="relative mt-6 rounded-xl border border-primary/20 bg-primary/[0.03] px-5 py-4 md:mt-8 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Engagement</p>
                <p className="text-sm text-foreground mb-1">{t("services.sapEngagementFor")}</p>
                <p className="text-xs text-muted-foreground">{t("services.sapEngagementScope")}</p>
              </motion.div>
            </SectionWrapper>

            {/* UAT Operating Model */}
            <SectionWrapper className="bg-accent/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <h2 className="mb-4 text-[28px] font-bold md:text-[36px] text-foreground">{t("uat.operatingModel")}</h2>
              {/* Mobile: 2-col with hover+tap */}
              <div className="grid grid-cols-2 gap-2 md:hidden">
                {uatPhases.map((phase, i) => (
                  <motion.div key={i} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-3 card-shadow">
                    <h3 className="text-xs font-semibold text-card-foreground">{phase.name}</h3>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
              {/* Desktop: flow bar + grid with hover+tap */}
              <div className="hidden md:block">
                <div className="mb-5 hidden overflow-x-auto lg:flex">
                  {uatPhases.map((phase, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">{phase.name}</div>
                      {i < uatPhases.length - 1 && <ArrowRight className="mx-1.5 h-4 w-4 text-muted-foreground" />}
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {uatPhases.map((phase, i) => (
                    <motion.div key={i} {...fadeIn(i * 0.06)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-4 card-shadow">
                      <h3 className="text-sm font-semibold text-card-foreground">{phase.name}</h3>
                      <p className="mt-2 text-xs text-muted-foreground">{phase.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Key Controls — mobile + desktop hover+tap */}
            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
              </div>
              <h2 className="mb-4 text-[28px] font-bold md:text-[36px] text-foreground">{t("uat.keyControls")}</h2>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {keyControls.map((c, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.06)} {...hoverLiftSm} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 card-shadow md:p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-8 md:w-8">{c.icon}</div>
                    <span className="text-xs font-medium text-card-foreground md:text-sm">{c.label}</span>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            {/* Outputs — mobile + desktop hover+tap */}
            <SectionWrapper className="bg-accent/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <h2 className="mb-4 text-[28px] font-bold md:text-[36px] text-foreground">{t("uat.outputs")}</h2>
              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                {outputItems.map((o, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.08)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary md:h-10 md:w-10">{o.icon}</div>
                      <h3 className="text-sm font-semibold text-card-foreground">{o.title}</h3>
                    </div>
                    <p className="mt-2.5 text-xs text-muted-foreground md:text-sm">{o.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            {/* What We Track — mobile + desktop hover+tap */}
            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
              </div>
              <h2 className="mb-4 text-[28px] font-bold md:text-[36px] text-foreground">{t("release.trackHeading")}</h2>
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                {trackItems.map((item, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.08)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-3 card-shadow md:p-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-primary md:h-10 md:w-10">{item.icon}</div>
                      <h3 className="text-xs font-semibold text-card-foreground md:text-base">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground md:mt-3 md:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            {/* Release Decision Model — mobile + desktop hover+tap */}
            <SectionWrapper className="bg-accent/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <h2 className="mb-4 text-[28px] font-bold md:mb-6 md:text-[36px] text-foreground">{t("release.decisionModel")}</h2>
              <div className="grid gap-3 sm:grid-cols-3 md:gap-4">
                {releaseStatuses.map((s, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.1)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5">
                    <div className="mb-2 md:mb-3"><StatusBadge variant={s.variant} label={s.label} /></div>
                    <p className="text-xs text-muted-foreground md:text-sm">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeIn(0.1)} className="mt-5 rounded-lg border border-primary/20 bg-primary/[0.02] p-5 md:mt-6 md:p-6">
                <h3 className="text-[22px] font-bold text-foreground md:text-[26px]">{t("release.governanceHeading")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3 md:text-base">{t("release.governanceBody")}</p>
              </motion.div>
            </SectionWrapper>
          </motion.div>
        )}

        {/* ══ TAB 3 — Quality Engineering ══ */}
        {activeTab === "quality" && (
          <motion.div key="quality" {...tabVariants}>
            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
              </div>
              <motion.p {...fadeIn(0)} className="relative mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
                {t("services.qualityIntro")}
              </motion.p>
              <div className="border-y border-border bg-background -mx-4 px-4 py-8 md:py-10 mt-6 md:mt-8" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                <div className="mx-auto max-w-2xl text-center">
                  <svg width="28" height="22" viewBox="0 0 32 24" fill="none" className="mx-auto mb-3 opacity-20" aria-hidden="true">
                    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
                  </svg>
                  <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
                    "Catching a defect in testing costs a fraction of what it costs in production."
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <motion.div {...fadeIn(0)}>
                  <h2 className="text-[28px] font-bold md:text-[36px] text-foreground">{t("delivery.automationHeading")}</h2>
                  <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{t("delivery.automationSubheading")}</p>
                </motion.div>
                {/* Mobile + Desktop: hover+tap */}
                <div className="mt-4 grid grid-cols-2 gap-3 md:mt-6 md:gap-4">
                  {(t("delivery.automationItems", { returnObjects: true }) as string[]).map((label, i) => (
                    <motion.div key={i} {...fadeIn(i * 0.08)} {...hoverLiftSm} className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 card-shadow md:p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary md:h-10 md:w-10">
                        {[<Settings className="h-5 w-5" />, <Cpu className="h-5 w-5" />, <GitBranch className="h-5 w-5" />, <BarChart2 className="h-5 w-5" />][i]}
                      </div>
                      <span className="text-xs font-medium text-card-foreground md:text-sm">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div {...fadeIn(0.2)} className="relative mt-6 rounded-xl border border-primary/20 bg-primary/[0.03] px-5 py-4 md:mt-8 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Engagement</p>
                <p className="text-sm text-foreground mb-1">{t("services.qualityEngagementFor")}</p>
                <p className="text-xs text-muted-foreground">{t("services.qualityEngagementScope")}</p>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper className="relative overflow-hidden bg-accent/50" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.05] bg-transparent" />
              </div>
              <motion.h2 {...fadeIn(0)} className="text-[28px] font-bold md:text-[36px] text-foreground">{t("uat.deliverablesHeading")}</motion.h2>
              {/* Mobile + Desktop: hover+tap */}
              <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-4 md:gap-4">
                {deliverables.map((d, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.08)} {...hoverLiftSm} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 text-center card-shadow md:flex-row md:gap-3 md:p-4 md:text-left">
                    <div className="text-primary">{d.icon}</div>
                    <span className="text-xs font-medium text-card-foreground md:text-sm">{d.label}</span>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper className="relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
                <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
              </div>
              <h2 className="mb-4 text-[28px] font-bold md:mb-6 md:text-[36px] text-foreground">{t("release.decisionModel")}</h2>
              {/* Mobile + Desktop: hover+tap */}
              <div className="grid gap-3 sm:grid-cols-3 md:gap-4">
                {releaseStatuses.map((s, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.1)} {...hoverLiftSm} className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5">
                    <div className="mb-2 md:mb-3"><StatusBadge variant={s.variant} label={s.label} /></div>
                    <p className="text-xs text-muted-foreground md:text-sm">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>
          </motion.div>
        )}

      </AnimatePresence>
    </Layout>
  );
};

export default DeliveryApproach;
