// src/components/EngagementOverview.tsx
// New file — import and drop into DeliveryApproach.tsx before each closing CTA section.

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Package, RefreshCw, Monitor, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

// ─── Per-pillar scope data — copy from locale, colours hardcoded ─────────────
const PILLARS = [
  {
    key: "digital",
    icon: Monitor,
    dot:  "bg-blue-500 dark:bg-blue-400",
    text: "text-blue-700 dark:text-blue-300",
    bg:   "bg-blue-50 dark:bg-blue-950",
  },
  {
    key: "sap",
    icon: Shield,
    dot:  "bg-teal-500 dark:bg-teal-400",
    text: "text-teal-700 dark:text-teal-300",
    bg:   "bg-teal-50 dark:bg-teal-950",
  },
  {
    key: "qe",
    icon: Activity,
    dot:  "bg-purple-500 dark:bg-purple-400",
    text: "text-purple-700 dark:text-purple-300",
    bg:   "bg-purple-50 dark:bg-purple-950",
  },
] as const;

export function EngagementOverview() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-muted/50"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div {...fadeIn(0)} className="text-center mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t("engagement.eyebrow")}
          </p>
          <h2 className="text-[28px] font-bold text-foreground md:text-[36px]">
            {t("engagement.heading")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            {t("engagement.subheading")}
          </p>
        </motion.div>

        {/* ── Two engagement models ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10">

          <motion.div
            {...fadeIn(0.05)}
            className="rounded-xl border border-border bg-card p-5 md:p-6 card-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Package size={16} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("engagement.model1.label")}
                </p>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {t("engagement.model1.title")}
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t("engagement.model1.desc")}
            </p>
            <span className="inline-block text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
              {t("engagement.model1.tag")}
            </span>
          </motion.div>

          <motion.div
            {...fadeIn(0.1)}
            className="rounded-xl border border-border bg-card p-5 md:p-6 card-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <RefreshCw size={16} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("engagement.model2.label")}
                </p>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {t("engagement.model2.title")}
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t("engagement.model2.desc")}
            </p>
            <span className="inline-block text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
              {t("engagement.model2.tag")}
            </span>
          </motion.div>
        </div>

        {/* ── Per-pillar scope table ── */}
        <motion.div {...fadeIn(0.15)} className="rounded-xl border border-border overflow-hidden mb-8 md:mb-10">

          {/* Table header */}
          <div className="grid grid-cols-4 bg-muted/80 border-b border-border">
            {(t("engagement.table.headers", { returnObjects: true }) as string[]).map((h, i) => (
              <div
                key={i}
                className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-r border-border last:border-r-0"
              >
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            const row = t(`engagement.table.rows.${pillar.key}`, { returnObjects: true }) as {
              scope: string;
              duration: string;
              model: string;
            };
            return (
              <div
                key={pillar.key}
                className={`grid grid-cols-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              >
                {/* Pillar name */}
                <div className="px-4 py-3 flex items-center gap-2 border-r border-border">
                  <span className={`h-2 w-2 flex-shrink-0 rounded-full ${pillar.dot}`} />
                  <div className={`flex items-center gap-1.5 text-xs font-semibold ${pillar.text}`}>
                    <Icon size={12} className="shrink-0" />
                    <span className="hidden sm:inline">{t(`engagement.table.pillars.${pillar.key}`)}</span>
                    <span className="sm:hidden">{t(`engagement.table.pillarsShort.${pillar.key}`)}</span>
                  </div>
                </div>
                {/* Scope */}
                <div className="px-4 py-3 text-xs text-muted-foreground border-r border-border flex items-center">
                  {row.scope}
                </div>
                {/* Duration */}
                <div className="px-4 py-3 text-xs text-muted-foreground border-r border-border flex items-center font-medium">
                  {row.duration}
                </div>
                {/* Model */}
                <div className="px-4 py-3 text-xs text-muted-foreground flex items-center">
                  {row.model}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          {...fadeIn(0.2)}
          className="rounded-xl border border-primary/20 bg-primary/[0.03] px-5 py-5 md:px-6 md:py-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                {t("engagement.cta.title")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("engagement.cta.desc")}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row shrink-0">
              <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full font-semibold sm:w-auto">
                  {t("engagement.cta.book")} <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  {t("engagement.cta.message")} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
