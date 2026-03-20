// src/components/CaseStudies.tsx
// Replace existing file entirely.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Monitor, Shield, Activity, ChevronDown } from "lucide-react";

// ─── Colour config — mirrors homepage pill colours exactly ───────────────────
// Digital = blue  (matches "Digital Development" pill)
// SAP     = teal  (matches "SAP Governance & UAT" pill)
// QE      = purple (matches "Test Automation & Quality" pill)
const STUDIES = [
  {
    key: "digital",
    icon: Monitor,
    // Header background
    headerBg: "bg-blue-50 dark:bg-blue-950",
    // Top accent bar
    accentBar: "bg-blue-500 dark:bg-blue-400",
    // Icon circle
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-700 dark:text-blue-300",
    // Pillar badge
    badgeBg: "bg-blue-100 dark:bg-blue-900",
    badgeText: "text-blue-700 dark:text-blue-300",
    badgeBorder: "border border-blue-200 dark:border-blue-700",
    // Client text — muted, not full pillar colour
    clientText: "text-blue-600/70 dark:text-blue-400/70",
    // Outcome dot
    dotColor: "bg-blue-500 dark:bg-blue-400",
    // Section label colour
    labelColor: "text-blue-600 dark:text-blue-400",
    tags: ["SaaS / ERP Platform", "North America", "eSignature Integration"],
  },
  {
    key: "sap",
    icon: Shield,
    headerBg: "bg-teal-50 dark:bg-teal-950",
    accentBar: "bg-teal-500 dark:bg-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-700 dark:text-teal-300",
    badgeBg: "bg-teal-100 dark:bg-teal-900",
    badgeText: "text-teal-700 dark:text-teal-300",
    badgeBorder: "border border-teal-200 dark:border-teal-700",
    clientText: "text-teal-600/70 dark:text-teal-400/70",
    dotColor: "bg-teal-500 dark:bg-teal-400",
    labelColor: "text-teal-600 dark:text-teal-400",
    tags: ["ERP Implementation", "North America", "Agile / Scrum"],
  },
  {
    key: "qe",
    icon: Activity,
    headerBg: "bg-purple-50 dark:bg-purple-950",
    accentBar: "bg-purple-500 dark:bg-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-700 dark:text-purple-300",
    badgeBg: "bg-purple-100 dark:bg-purple-900",
    badgeText: "text-purple-700 dark:text-purple-300",
    badgeBorder: "border border-purple-200 dark:border-purple-700",
    clientText: "text-purple-600/70 dark:text-purple-400/70",
    dotColor: "bg-purple-500 dark:bg-purple-400",
    labelColor: "text-purple-600 dark:text-purple-400",
    tags: ["Comparison Portal", "Europe", "UAT & Automation"],
  },
] as const;

// ─── Animation variants ───────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1], // spring-like ease
    },
  }),
};

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Shared body: challenge / approach / outcomes ─────────────────────────────
function BodyContent({
  study,
  outcomes,
}: {
  study: (typeof STUDIES)[number];
  outcomes: string[];
}) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${study.labelColor}`}>
          {t("caseStudies.labels.challenge")}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`caseStudies.${study.key}.challenge`)}
        </p>
      </div>

      <div>
        <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${study.labelColor}`}>
          {t("caseStudies.labels.approach")}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`caseStudies.${study.key}.approach`)}
        </p>
      </div>

      <div className="pt-3 border-t border-border">
        <p className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${study.labelColor}`}>
          {t("caseStudies.labels.outcomes")}
        </p>
        <ul className="space-y-1.5">
          {outcomes.map((outcome, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-card-foreground">
              <span
                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${study.dotColor}`}
              />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────────
function StudyCard({
  study,
  index,
}: {
  study: (typeof STUDIES)[number];
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
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ y: -4, transition: { duration: 0.15 } }}
      className="flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow"
    >
      {/* Coloured top accent bar — 3px, full width */}
      <div className={`h-[3px] w-full ${study.accentBar}`} />

      {/* Coloured header — always visible */}
      <div className={`${study.headerBg} px-5 pt-4 pb-4`}>
        <div className="flex items-center gap-2.5 mb-3">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${study.iconBg} ${study.iconColor}`}
          >
            <Icon size={15} />
          </div>
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${study.badgeBg} ${study.badgeText} ${study.badgeBorder}`}
          >
            {t(`caseStudies.${study.key}.pillar`)}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1">
          {t(`caseStudies.${study.key}.title`)}
        </h3>
        {/* Client text — deliberately muted, not full pillar colour */}
        <p className={`text-xs ${study.clientText}`}>
          {t(`caseStudies.${study.key}.client`)}
        </p>
      </div>

      {/* ── Mobile: toggle button ── */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex w-full items-center justify-between px-5 py-2.5 border-t border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors bg-card"
        aria-expanded={open}
      >
        <span>
          {open
            ? t("caseStudies.labels.hide")
            : t("caseStudies.labels.showDetails")}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* ── Desktop: body always visible ── */}
      <div className="hidden md:flex flex-col flex-1 px-5 py-4 gap-3">
        <BodyContent study={study} outcomes={outcomes} />
      </div>

      {/* ── Mobile: animated collapse ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
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

// ─── Section ──────────────────────────────────────────────────────────────────
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
      {/* Decorative circles — matches SectionWrapper pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header with stagger animation ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.p
            variants={headerVariants}
            className="text-xs font-semibold uppercase tracking-widest text-primary mb-3"
          >
            {t("caseStudies.eyebrow")}
          </motion.p>
          <motion.h2
            variants={headerVariants}
            id="case-studies-heading"
            className="text-[28px] font-bold text-foreground md:text-[36px]"
          >
            {t("caseStudies.heading")}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base"
          >
            {t("caseStudies.subheading")}
          </motion.p>
        </motion.div>

        {/* Mobile hint */}
        <p className="text-center text-xs text-muted-foreground mb-5 md:hidden">
          {t("caseStudies.labels.tapToExpand")}
        </p>

        {/* ── Cards with staggered entrance ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {STUDIES.map((study, i) => (
            <StudyCard key={study.key} study={study} index={i} />
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground italic mt-8"
        >
          {t("caseStudies.disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
