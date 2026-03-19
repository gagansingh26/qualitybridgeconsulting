// src/components/CaseStudies.tsx
//
// Drop into: src/components/CaseStudies.tsx
// Import in Index.tsx with: import { CaseStudies } from "@/components/CaseStudies";
// Insert between HowWeWork and BusinessOutcomes sections in Index.tsx.

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// ─── Static config: colours & tags only — all copy lives in locale files ─────
const STUDIES = [
  {
    key: "sap",
    accentClass: "border-t-2 border-t-blue-500",
    pillarBg: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
    dotColor: "bg-blue-500",
    tags: ["ERP Implementation", "North America", "Agile / Scrum"],
  },
  {
    key: "qe",
    accentClass: "border-t-2 border-t-teal-500",
    pillarBg: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200",
    dotColor: "bg-teal-500",
    tags: ["Comparison Portal", "Europe", "UAT & Automation"],
  },
  {
    key: "digital",
    accentClass: "border-t-2 border-t-amber-500",
    pillarBg: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    dotColor: "bg-blue-500",
    tags: ["SaaS / ERP Platform", "North America", "eSignature Integration"],
  },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

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
      {/* Decorative circles — matches your existing SectionWrapper pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
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

        {/* ── Cards — 1 col mobile / 3 col desktop ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {STUDIES.map((study, i) => (
            <motion.article
              key={study.key}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              whileTap={{ y: -6, transition: { duration: 0.25 } }}
              className={`flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow ${study.accentClass}`}
            >
              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">

                {/* Pillar badge */}
                <span
                  className={`self-start text-[11px] font-semibold px-3 py-1 rounded-full ${study.pillarBg}`}
                >
                  {t(`caseStudies.${study.key}.pillar`)}
                </span>

                {/* Anonymous client descriptor */}
                <p className="text-xs font-medium text-muted-foreground">
                  {t(`caseStudies.${study.key}.client`)}
                </p>

                {/* Engagement title */}
                <h3 className="text-base font-semibold text-card-foreground leading-snug">
                  {t(`caseStudies.${study.key}.title`)}
                </h3>

                {/* Challenge */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {t("caseStudies.labels.challenge")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`caseStudies.${study.key}.challenge`)}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {t("caseStudies.labels.approach")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`caseStudies.${study.key}.approach`)}
                  </p>
                </div>

                {/* Outcomes — pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {t("caseStudies.labels.outcomes")}
                  </p>
                  <ul className="space-y-1.5">
                    {(
                      t(`caseStudies.${study.key}.outcomes`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((outcome, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-card-foreground"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${study.dotColor}`}
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags strip */}
              <div className="px-5 py-3 bg-accent/50 border-t border-border flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-muted-foreground bg-card border border-border px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Discretion note */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          {t("caseStudies.disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
