// src/components/EngagementOverview.tsx
// Replace existing file entirely.

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Package, RefreshCw, Monitor, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeSlide = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const MODELS = [
  {
    key: "model1" as const,
    icon: Package,
    accentBar:  "bg-blue-500 dark:bg-blue-400",
    headerBg:   "bg-blue-50 dark:bg-blue-950",
    iconBg:     "bg-blue-100 dark:bg-blue-900",
    iconColor:  "text-blue-700 dark:text-blue-300",
    labelColor: "text-blue-600 dark:text-blue-400",
    tagBg:      "bg-blue-100 dark:bg-blue-900",
    tagText:    "text-blue-700 dark:text-blue-300",
    tagBorder:  "border-blue-200 dark:border-blue-700",
  },
  {
    key: "model2" as const,
    icon: RefreshCw,
    accentBar:  "bg-teal-500 dark:bg-teal-400",
    headerBg:   "bg-teal-50 dark:bg-teal-950",
    iconBg:     "bg-teal-100 dark:bg-teal-900",
    iconColor:  "text-teal-700 dark:text-teal-300",
    labelColor: "text-teal-600 dark:text-teal-400",
    tagBg:      "bg-teal-100 dark:bg-teal-900",
    tagText:    "text-teal-700 dark:text-teal-300",
    tagBorder:  "border-teal-200 dark:border-teal-700",
  },
] as const;

const PILLARS = [
  {
    key: "digital",
    icon: Monitor,
    dot:      "bg-blue-500 dark:bg-blue-400",
    rowBg:    "bg-blue-50/60 dark:bg-blue-950/40",
    text:     "text-blue-700 dark:text-blue-300",
    border:   "border-l-2 border-l-blue-400 dark:border-l-blue-500",
    duration: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  },
  {
    key: "sap",
    icon: Shield,
    dot:      "bg-teal-500 dark:bg-teal-400",
    rowBg:    "bg-teal-50/60 dark:bg-teal-950/40",
    text:     "text-teal-700 dark:text-teal-300",
    border:   "border-l-2 border-l-teal-400 dark:border-l-teal-500",
    duration: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
  },
  {
    key: "qe",
    icon: Activity,
    dot:      "bg-purple-500 dark:bg-purple-400",
    rowBg:    "bg-purple-50/60 dark:bg-purple-950/40",
    text:     "text-purple-700 dark:text-purple-300",
    border:   "border-l-2 border-l-purple-400 dark:border-l-purple-500",
    duration: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
  },
] as const;

export function EngagementOverview() {
  const { t } = useTranslation();

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 bg-muted/50"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        <div className="absolute right-20 top-10 h-24 w-24 rounded-full border border-primary/[0.04] bg-transparent" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12 md:mb-14"
        >
          <motion.p variants={fadeSlide} className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t("engagement.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeSlide} className="text-[28px] font-bold text-foreground md:text-[36px]">
            {t("engagement.heading")}
          </motion.h2>
          <motion.p variants={fadeSlide} className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            {t("engagement.subheading")}
          </motion.p>
        </motion.div>

        {/* ── Two model cards ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 md:mb-10"
        >
          {MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.key}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ y: -4, transition: { duration: 0.15 } }}
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow"
              >
                <div className={`h-[3px] w-full ${model.accentBar}`} />
                <div className={`${model.headerBg} px-5 pt-4 pb-4`}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${model.iconBg} ${model.iconColor}`}>
                      <Icon size={16} />
                    </div>
                    <p className={`text-[10px] font-semibold uppercase tracking-wider ${model.labelColor}`}>
                      {t(`engagement.${model.key}.label`)}
                    </p>
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {t(`engagement.${model.key}.title`)}
                  </h3>
                </div>
                <div className="flex flex-col flex-1 px-5 py-4 gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`engagement.${model.key}.desc`)}
                  </p>
                  <div className="mt-auto">
                    <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full border ${model.tagBg} ${model.tagText} ${model.tagBorder}`}>
                      {t(`engagement.${model.key}.tag`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Scope table ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-xl border border-border overflow-hidden mb-8 md:mb-10"
        >
          {/* Desktop table — hidden on mobile */}
          <div className="hidden sm:block">
            {/* Header row — all columns centred */}
            <div className="grid grid-cols-4 bg-muted border-b border-border">
              {(t("engagement.table.headers", { returnObjects: true }) as string[]).map((h, i) => (
                <div key={i} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground text-center border-r border-border last:border-r-0">
                  {h}
                </div>
              ))}
            </div>
            {/* Data rows */}
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const row = t(`engagement.table.rows.${pillar.key}`, { returnObjects: true }) as {
                scope: string; duration: string; model: string;
              };
              return (
                <motion.div
                  key={pillar.key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className={`grid grid-cols-4 border-b border-border last:border-b-0 ${pillar.rowBg} ${pillar.border}`}
                >
                  <div className="px-4 py-3.5 flex items-center gap-2 border-r border-border">
                    <span className={`h-2 w-2 flex-shrink-0 rounded-full ${pillar.dot}`} />
                    <div className={`flex items-center gap-1.5 text-xs font-semibold ${pillar.text}`}>
                      <Icon size={12} className="shrink-0" />
                      <span>{t(`engagement.table.pillars.${pillar.key}`)}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3.5 text-xs text-muted-foreground border-r border-border flex items-center">
                    {row.scope}
                  </div>
                  <div className="px-4 py-3.5 border-r border-border flex items-center justify-center">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${pillar.duration}`}>
                      {row.duration}
                    </span>
                  </div>
                  <div className="px-4 py-3.5 text-xs text-muted-foreground flex items-center">
                    {row.model}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: stacked cards instead of table — no cutoff risk */}
          <div className="sm:hidden divide-y divide-border">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const row = t(`engagement.table.rows.${pillar.key}`, { returnObjects: true }) as {
                scope: string; duration: string; model: string;
              };
              return (
                <motion.div
                  key={pillar.key}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className={`p-4 ${pillar.rowBg} ${pillar.border}`}
                >
                  {/* Pillar name */}
                  <div className={`flex items-center gap-2 mb-3 text-sm font-semibold ${pillar.text}`}>
                    <span className={`h-2 w-2 flex-shrink-0 rounded-full ${pillar.dot}`} />
                    <Icon size={14} className="shrink-0" />
                    <span>{t(`engagement.table.pillars.${pillar.key}`)}</span>
                  </div>
                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {(t("engagement.table.headers", { returnObjects: true }) as string[])[1]}
                      </p>
                      <p className="text-xs text-muted-foreground">{row.scope}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {(t("engagement.table.headers", { returnObjects: true }) as string[])[2]}
                      </p>
                      <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full ${pillar.duration}`}>
                        {row.duration}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {(t("engagement.table.headers", { returnObjects: true }) as string[])[3]}
                      </p>
                      <p className="text-xs text-muted-foreground">{row.model}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/[0.04] dark:bg-primary/[0.08] px-6 py-6 md:px-8 md:py-7"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary/40 rounded-t-xl" />
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="text-base font-semibold text-foreground mb-1.5">
                {t("engagement.cta.title")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                {t("engagement.cta.desc")}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row shrink-0">
              <a href="https://cal.com/qualitybridgeconsulting/book" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full font-semibold sm:w-auto">
                  {t("engagement.cta.book")} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t("engagement.cta.message")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
