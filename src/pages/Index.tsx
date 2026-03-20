import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ExternalLink, Shield, Users, TrendingDown,
  GitBranch, Monitor, Rocket, Brain, Layers, MapPin,
  Zap, Target, ClipboardCheck, Activity, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";
import { CaseStudies } from "@/components/CaseStudies";

// ─── Design tokens ─────────────────────────────────────────────────────────────
// Colour ONLY on: 3px accent bar + small icon square (h-9 w-9 rounded-xl)
// All card/section bodies: bg-card (white) or bg-muted/30 (light grey)
// No tinted card backgrounds anywhere

const PILLAR = [
  {
    accentBar: "bg-blue-500 dark:bg-blue-400",
    iconBg:    "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    dotColor:  "bg-blue-500 dark:bg-blue-400",
    stepBg:    "bg-blue-500",
    labelColor:"text-blue-600 dark:text-blue-400",
  },
  {
    accentBar: "bg-teal-500 dark:bg-teal-400",
    iconBg:    "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-600 dark:text-teal-400",
    dotColor:  "bg-teal-500 dark:bg-teal-400",
    stepBg:    "bg-teal-500",
    labelColor:"text-teal-600 dark:text-teal-400",
  },
  {
    accentBar: "bg-purple-500 dark:bg-purple-400",
    iconBg:    "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
    dotColor:  "bg-purple-500 dark:bg-purple-400",
    stepBg:    "bg-purple-500",
    labelColor:"text-purple-600 dark:text-purple-400",
  },
];

const OUTCOME_ACCENT = [
  "bg-blue-500 dark:bg-blue-400",
  "bg-teal-500 dark:bg-teal-400",
  "bg-purple-500 dark:bg-purple-400",
  "bg-amber-500 dark:bg-amber-400",
];
const OUTCOME_ICON = [
  { bg: "bg-blue-100 dark:bg-blue-900",     color: "text-blue-600 dark:text-blue-400"   },
  { bg: "bg-teal-100 dark:bg-teal-900",     color: "text-teal-600 dark:text-teal-400"   },
  { bg: "bg-purple-100 dark:bg-purple-900", color: "text-purple-600 dark:text-purple-400" },
  { bg: "bg-amber-100 dark:bg-amber-900",   color: "text-amber-600 dark:text-amber-400"  },
];

const problemIcons = [
  <Monitor className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
];
const deliverIcons = [
  <Monitor className="h-5 w-5" />,
  <ClipboardCheck className="h-5 w-5" />,
  <Activity className="h-5 w-5" />,
];
const outcomeIcons = [
  <Rocket className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <TrendingDown className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
];
const diffIcons = [
  <Layers className="h-5 w-5" />,
  <MapPin className="h-5 w-5" />,
  <TrendingUp className="h-5 w-5" />,
];
const platIcons = [
  <Monitor className="h-4 w-4" />,
  <Shield className="h-4 w-4" />,
  <Activity className="h-4 w-4" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

// ─── Reusable section header ──────────────────────────────────────────────────
const SH = ({
  eyebrow, heading, sub, center = false,
}: {
  eyebrow?: string; heading: string; sub?: string; center?: boolean;
}) => (
  <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
    {eyebrow && (
      <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2.5">
        {eyebrow}
      </p>
    )}
    <h2 className={`text-[26px] font-bold text-foreground leading-tight md:text-[34px] ${center ? "" : "max-w-2xl"}`}>
      {heading}
    </h2>
    {sub && (
      <p className={`mt-3 text-sm text-muted-foreground leading-relaxed md:text-base ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
        {sub}
      </p>
    )}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Structured delivery across SAP, digital, and QA",
    "Ship reliable platforms without delivery chaos — SAP governance, digital development, and quality engineering structured as one delivery system.",
    "/"
  );

  const problemItems   = t("problems.items",        { returnObjects: true }) as { title: string; desc: string }[];
  const outcomeItems   = t("outcomes.items",         { returnObjects: true }) as { label: string; desc: string }[];
  const howWeWorkSteps = t("howWeWork.steps",        { returnObjects: true }) as { title: string; desc: string }[];
  const deliverCards   = t("whatWeDeliver.cards",    { returnObjects: true }) as { title: string; desc: string; detail?: string[] }[];
  const platformGroups = t("platforms.groups",       { returnObjects: true }) as { label: string; outcome: string; items: string[] }[];
  const diffItems      = t("differentiation.items",  { returnObjects: true }) as { title: string; desc: string; contrast?: string }[];

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          1. HERO — enterprise-gradient (unchanged blue)
             Problem-first framing → solution
      ══════════════════════════════════════════════ */}
      <section className="enterprise-gradient relative overflow-hidden py-14 md:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>

        <div className="container relative mx-auto max-w-3xl px-4 text-center">
          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-1.5 mb-6"
          >
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:text-xs">
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Problem statement — pain-first hook */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto max-w-lg text-base text-primary-foreground/70 leading-relaxed md:text-lg"
          >
            {t("hero.hook")}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 text-[32px] font-bold leading-tight text-primary-foreground md:text-[44px] lg:text-[50px]"
          >
            {t("hero.titlePrefix")}{" "}
            <span style={{ color: "#93c5fd" }}>{t("hero.titleAccent")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/75 leading-relaxed md:text-base"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="https://cal.com/gagan.singh/15min"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto px-8">
                {t("hero.ctaPrimary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline"
                className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("hero.ctaSecondary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-3 text-[12px] md:text-[13px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {t("hero.reach")}
          </motion.p>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg"
          >
            {(t("hero.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/50 md:text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Globe graphic — CA → EU → ASIA delivery network */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mt-8 md:mt-10"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 480 140"
              className="w-full max-w-sm mx-auto md:max-w-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Defs */}
              <defs>
                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(147,197,253,0.18)" />
                  <stop offset="100%" stopColor="rgba(147,197,253,0.04)" />
                </radialGradient>
              </defs>

              {/* Globe circle */}
              <circle cx="240" cy="70" r="52" fill="url(#globeGrad)" stroke="rgba(147,197,253,0.25)" strokeWidth="1" />
              {/* Latitude lines */}
              <ellipse cx="240" cy="70" rx="52" ry="18" fill="none" stroke="rgba(147,197,253,0.12)" strokeWidth="0.8" />
              <ellipse cx="240" cy="70" rx="52" ry="36" fill="none" stroke="rgba(147,197,253,0.10)" strokeWidth="0.8" />
              {/* Longitude lines */}
              <line x1="240" y1="18" x2="240" y2="122" stroke="rgba(147,197,253,0.12)" strokeWidth="0.8" />
              <line x1="192" y1="22" x2="288" y2="118" stroke="rgba(147,197,253,0.08)" strokeWidth="0.8" />
              <line x1="288" y1="22" x2="192" y2="118" stroke="rgba(147,197,253,0.08)" strokeWidth="0.8" />

              {/* ── CA node (left) ── */}
              <circle cx="80" cy="70" r="22" fill="rgba(255,255,255,0.07)" stroke="rgba(147,197,253,0.3)" strokeWidth="1" />
              <circle cx="80" cy="70" r="5" fill="#93c5fd" />
              <text x="80" y="105" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">Canada</text>
              <text x="80" y="118" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="system-ui,sans-serif">Client lead</text>

              {/* ── EU node (top-right) ── */}
              <circle cx="370" cy="35" r="18" fill="rgba(255,255,255,0.07)" stroke="rgba(147,197,253,0.25)" strokeWidth="1" />
              <circle cx="370" cy="35" r="4" fill="#93c5fd" opacity="0.8" />
              <text x="370" y="22" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Europe</text>

              {/* ── ASIA node (bottom-right) ── */}
              <circle cx="395" cy="100" r="18" fill="rgba(255,255,255,0.07)" stroke="rgba(147,197,253,0.25)" strokeWidth="1" />
              <circle cx="395" cy="100" r="4" fill="#93c5fd" opacity="0.8" />
              <text x="395" y="128" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Asia</text>

              {/* ── Connection arcs CA → Globe ── */}
              <path d="M 102 70 Q 170 55 188 70" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
              {/* Globe → EU */}
              <path d="M 292 52 Q 325 38 352 37" fill="none" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="3 2" />
              {/* Globe → Asia */}
              <path d="M 292 88 Q 335 95 377 99" fill="none" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="3 2" />

              {/* Animated pulse on CA node */}
              <circle cx="80" cy="70" r="5" fill="none" stroke="#93c5fd" strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="5;14;5" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. PROOF CALLOUT — single stat anchors credibility
      ══════════════════════════════════════════════ */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-5">
          <motion.div
            {...fadeUp(0)}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
              <TrendingDown className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-foreground text-sm md:text-base">
                {t("hero.proofStat")}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">
                {" "}— {t("hero.proofContext")}
              </span>
            </div>
            <Link to="/services" className="shrink-0 sm:w-auto">
              <Button variant="outline" size="sm" className="gap-1.5">
                {t("hero.proofLink")} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          3. PROBLEMS — title IS the full message
             One-line supporting context beneath
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            eyebrow={t("problems.eyebrow")}
            heading={t("problems.heading")}
            sub={t("problems.subheading")}
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {problemItems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl mb-4 ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>
                  {problemIcons[i]}
                </div>
                {/* Title carries the full message */}
                <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-2">
                  {item.title}
                </h3>
                {/* One-line context only */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.15)} className="mt-6 text-center">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("problems.sampleEngagement")} <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          4. CASE STUDIES — proof follows pain
      ══════════════════════════════════════════════ */}
      <div className="bg-muted/30">
        <CaseStudies />
      </div>

      {/* ══════════════════════════════════════════════
          5. WHAT WE DELIVER
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
          <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            eyebrow={t("whatWeDeliver.eyebrow")}
            heading={t("whatWeDeliver.heading")}
            sub={t("whatWeDeliver.subheading")}
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {deliverCards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl mb-4 ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>
                  {deliverIcons[i]}
                </div>
                <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
                {card.detail && (
                  <ul className="mt-4 pt-4 border-t border-border space-y-2">
                    {card.detail.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${PILLAR[i].dotColor}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.15)} className="mt-6 text-center">
          <Link to="/services">
            <Button variant="outline" size="sm" className="gap-1.5">
              {t("whatWeDeliver.cta")} <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          6. WHY WE'RE DIFFERENT
             Horizontal layout (icon + text)
             "vs. most firms" contrast line per card
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -left-14 -bottom-14 h-44 w-44 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            eyebrow={t("differentiation.eyebrow")}
            heading={t("differentiation.heading")}
            sub={t("differentiation.subheading")}
            center
          />
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-5">
          {diffItems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 md:p-6"
            >
              {/* Coloured icon — left-anchored always */}
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>
                {diffIcons[i]}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-semibold text-foreground mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {item.contrast && (
                  <p className="mt-2 text-xs text-muted-foreground/60 italic">
                    {item.contrast}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          7. PLATFORMS — outcome-first, tools secondary
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
          <div className="absolute -right-20 -bottom-20 h-52 w-52 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            eyebrow={t("platforms.eyebrow")}
            heading={t("platforms.heading")}
            sub={t("platforms.subheading")}
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {platformGroups.map((group, gi) => (
            <motion.div
              key={gi}
              {...fadeUp(gi * 0.08)}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`h-[3px] w-full ${PILLAR[gi].accentBar}`} />
              <div className="p-5 md:p-6">
                {/* Pillar label */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${PILLAR[gi].iconBg} ${PILLAR[gi].iconColor}`}>
                    {platIcons[gi]}
                  </div>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider ${PILLAR[gi].labelColor}`}>
                    {group.label}
                  </p>
                </div>
                {/* Outcome is the main message */}
                <p className="text-sm font-medium text-foreground mb-3 leading-snug">
                  {group.outcome}
                </p>
                {/* Tools are compact, secondary */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {group.items.join(" · ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          8. HOW WE WORK — centred, de-emphasised
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="how-we-work" className="bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            eyebrow={t("howWeWork.eyebrow")}
            heading={t("howWeWork.heading")}
            sub={t("howWeWork.subheading")}
            center
          />
        </motion.div>

        {/* Desktop — numbered steps with connector */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 relative mt-2">
          <div className="absolute left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] top-5 h-px bg-border" />
          {howWeWorkSteps.map((step, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center">
              <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-background ${PILLAR[i].stepBg}`}>
                {i + 1}
              </div>
              <div className="mt-5 w-full rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — vertical numbered list */}
        <div className="flex flex-col gap-3 md:hidden mt-2">
          {howWeWorkSteps.map((step, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)} className="flex gap-4 items-start">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white mt-0.5 ${PILLAR[i].stepBg}`}>
                {i + 1}
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          9. OUTCOMES — stat-only metric cards
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
          <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full border border-primary/[0.04] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)}>
          <SH
            heading={t("outcomes.heading")}
            sub={t("outcomes.subheading")}
            center
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {outcomeItems.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`h-[3px] w-full ${OUTCOME_ACCENT[i]}`} />
              <div className="flex flex-col items-center gap-3 p-4 md:p-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${OUTCOME_ICON[i].bg} ${OUTCOME_ICON[i].color}`}>
                  {outcomeIcons[i]}
                </div>
                <span className="text-[13px] font-semibold text-card-foreground leading-tight">
                  {o.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          10. CTA — diagnostic hook, grey bg
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full border border-primary/[0.05] bg-primary/[0.01]" />
        </div>
        <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-5">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-[26px] font-bold text-foreground leading-tight md:text-[34px]">
            {t("cta.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed md:text-base">
            {t("cta.body")}
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://cal.com/gagan.singh/15min"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
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

    </Layout>
  );
};

export default Index;
