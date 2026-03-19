// src/components/CaseStudies.tsx
// Drop into: src/components/CaseStudies.tsx — replace existing file entirely.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Monitor, Shield, Activity, ChevronDown } from "lucide-react";

// ─── Static config: colours + icons only — all copy lives in locale files ────
const STUDIES = [
  {
    key: "digital",
    icon: Monitor,
    headerBg:     "bg-blue-50 dark:bg-blue-950",
    headerBorder: "border-t-[3px] border-t-blue-500 dark:border-t-blue-400",
    iconBg:       "bg-blue-100 dark:bg-blue-900",
    iconColor:    "text-blue-800 dark:text-blue-200",
    badgeBg:      "bg-blue-100 dark:bg-blue-900",
    badgeText:    "text-blue-800 dark:text-blue-200",
    badgeBorder:  "border border-blue-200 dark:border-blue-700",
    dotColor:     "bg-blue-500 dark:bg-blue-400",
    tags: ["SaaS / ERP Platform", "North America", "eSignature Integration"],
  },
  {
    key: "sap",
    icon: Shield,
    headerBg:     "bg-teal-50 dark:bg-teal-950",
    headerBorder: "border-t-[3px] border-t-teal-500 dark:border-t-teal-400",
    iconBg:       "bg-teal-100 dark:bg-teal-900",
    iconColor:    "text-teal-800 dark:text-teal-200",
    badgeBg:      "bg-teal-100 dark:bg-teal-900",
    badgeText:    "text-teal-800 dark:text-teal-200",
    badgeBorder:  "border border-teal-200 dark:border-teal-700",
    dotColor:     "bg-teal-500 dark:bg-teal-400",
    tags: ["ERP Implementation", "North America", "Agile / Scrum"],
  },
  {
    key: "qe",
    icon: Activity,
    headerBg:     "bg-purple-50 dark:bg-purple-950",
    headerBorder: "border-t-[3px] border-t-purple-500 dark:border-t-purple-400",
    iconBg:       "bg-purple-100 dark:bg-purple-900",
    iconColor:    "text-purple-800 dark:text-purple-200",
    badgeBg:      "bg-purple-100 dark:bg-purple-900",
    badgeText:    "text-purple-800 dark:text-purple-200",
    badgeBorder:  "border border-purple-200 dark:border-purple-700",
    dotColor:     "bg-purple-500 dark:bg-purple-400",
    tags: ["Comparison Portal", "Europe", "UAT & Automation"],
  },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// ─── Shared body content ─────────────────────────────────────────────────────
function BodyContent({ study, outcomes }: {
  study: typeof STUDIES[number];
  outcomes: string[];
}) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          {t("caseStudies.labels.challenge")}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`caseStudies.${study.key}.challenge`)}
        </p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          {t("caseStudies.labels.approach")}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`caseStudies.${study.key}.approach`)}
        </p>
      </div>
      <div className="pt-3 border-t border-border">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          {t("caseStudies.labels.outcomes")}
        </p>
        <ul className="space-y-1.5">
          {outcomes.map((outcome, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-card-foreground">
              <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${study.dotColor}`} />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// ─── Single card ─────────────────────────────────────────────────────────────
function StudyCard({ study, index }: {
  study: typeof STUDIES[number];
  index: number;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const Icon = study.icon;
  const outcomes = t(`caseStudies.${study.key}.outcomes`, {
    returnObjects: true,
  }) as string[];

  return (
    <motion.article
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileTap={{ y: -5, transition: { duration: 0.2 } }}
      className={`flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow ${study.headerBorder}`}
    >
      {/* Coloured header — always visible on both mobile and desktop */}
      <div className={`${study.headerBg} px-5 pt-5 pb-4`}>
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${study.iconBg} ${study.iconColor}`}>
            <Icon size={15} />
          </div>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${study.badgeBg} ${study.badgeText} ${study.badgeBorder}`}>
            {t(`caseStudies.${study.key}.pillar`)}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1">
          {t(`caseStudies.${study.key}.title`)}
        </h3>
        <p className={`text-xs ${study.iconColor} opacity-75`}>
          {t(`caseStudies.${study.key}.client`)}
        </p>
      </div>

      {/* Mobile toggle — hidden on desktop */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex w-full items-center justify-between px-5 py-2.5 border-t border-border text-xs font-medium text-muted-foreground hover:text-foreground transition-colors bg-card"
        aria-expanded={open}
      >
        <span>{open ? t("caseStudies.labels.hide") : t("caseStudies.labels.showDetails")}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Desktop body — always visible */}
      <div className="hidden md:flex flex-col flex-1 px-5 py-4 gap-3">
        <BodyContent study={study} outcomes={outcomes} />
      </div>

      {/* Mobile body — animated collapse */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-3">
              <BodyContent study={study} outcomes={outcomes} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tags strip — always visible */}
      <div className="px-5 py-2.5 bg-muted/40 border-t border-border flex flex-wrap gap-1.5 mt-auto">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-muted-foreground bg-card border border-border px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
export function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden py-16 md:py-24 bg-muted/50"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
      aria-labelledby="case-studies-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t("caseStudies.eyebrow")}
          </p>
          <h2
            id="case-studies-heading"
            className="text-[28px] font-bold text-foreground md:text-[36px]"
          >
            {t("caseStudies.heading")}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("caseStudies.subheading")}
          </p>
        </motion.div>

        {/* Mobile hint — only shown on small screens */}
        <p className="text-center text-xs text-muted-foreground mb-5 md:hidden">
          {t("caseStudies.labels.tapToExpand")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {STUDIES.map((study, i) => (
            <StudyCard key={study.key} study={study} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-center text-xs text-muted-foreground italic mt-8"
        >
          {t("caseStudies.disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
