import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp, TestTube, Code, GitBranch, Monitor, ChevronDown, Globe, Handshake, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const valueCardIcons = [
  <Monitor className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <Brain className="h-5 w-5" />,
];

const outcomeIcons = [
  <TrendingDown className="h-6 w-6" />,
  <Shield className="h-6 w-6" />,
  <Target className="h-6 w-6" />,
  <TestTube className="h-6 w-6" />,
];

const capabilityIcons = [
  <Monitor className="h-4 w-4" />,
  <Shield className="h-4 w-4" />,
  <Handshake className="h-4 w-4" />,
  <Clock className="h-4 w-4" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// Mobile: expand/collapse accordion (unchanged)
const AccordionCard = ({ icon, title, desc, detail }: { icon: React.ReactNode; title: string; desc: string; detail?: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-border bg-card card-shadow overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center gap-3 p-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
          {icon}
        </div>
        <span className="flex-1 text-sm font-semibold text-card-foreground">{title}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-4 pb-4 pt-3">
              <p className="text-sm text-muted-foreground">{desc}</p>
              {detail && (
                <ul className="mt-2 space-y-1">
                  {detail.map((d: string) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 shrink-0 text-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop: details always visible, no toggle
const DesktopCard = ({ icon, title, desc, detail }: { icon: React.ReactNode; title: string; desc: string; detail?: string[] }) => {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-6 card-shadow hover:card-shadow-hover transition-shadow">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      {detail && (
        <ul className="mt-3 space-y-1">
          {detail.map((d: string) => (
            <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle className="h-3 w-3 shrink-0 text-primary" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Index = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Digital Development · SAP Governance · Test Automation",
    "Web development, SAP S/4HANA governance, and test automation — managed locally in Canada, delivered with global specialists.",
    "/"
  );

  const valueCards = (t("whatWeDeliver.cards", { returnObjects: true }) as any[]).map((c: any, i: number) => ({
    icon: valueCardIcons[i],
    title: c.title,
    desc: c.desc,
    detail: c.detail,
  }));

  const capabilityPillars = [
    t("capabilities.digitalDev"),
    t("capabilities.sapGovernance"),
    t("capabilities.globalNetwork"),
    t("capabilities.clientOversight"),
  ];

  const outcomeItems = t("outcomes.items", { returnObjects: true }) as { label: string; desc: string }[];

  const howWeWorkSteps = t("howWeWork.steps", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20 lg:py-28">

        {/* Geometric background shapes */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          {/* Pills */}
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

          {/* Headline with accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("hero.titlePrefix") || "Enterprise Delivery,"}{" "}
            <span style={{ color: "#93c5fd" }}>
              {t("hero.titleAccent") || "Done Right."}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-2xl text-base text-primary-foreground/80 md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs — primary + secondary */}
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
            <Link to="/delivery" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                {t("cta.viewApproach") || "View Our Approach"}
              </Button>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {t("hero.reach")}
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg"
          >
            {(t("hero.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-base font-bold text-primary-foreground md:text-lg">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Strip */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-10">
            {capabilityPillars.map((label, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
                <span className="shrink-0 text-primary">{capabilityIcons[i]}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Deliver */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h2 className="text-center text-[28px] font-bold md:text-[36px]">{t("whatWeDeliver.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            {t("whatWeDeliver.subheading")}
          </p>
        </motion.div>

        {/* Mobile: single-column accordion */}
        <div className="mt-6 flex flex-col gap-2 md:hidden">
          {valueCards.map((c, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)}>
              <AccordionCard icon={c.icon} title={c.title} desc={c.desc} detail={c.detail} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-8 hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {valueCards.map((c, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex">
                <DesktopCard icon={c.icon} title={c.title} desc={c.desc} detail={c.detail} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper className="bg-muted/50">
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("howWeWork.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("howWeWork.subheading")}
          </p>
        </motion.div>

        {/* Desktop: horizontal 3-step with connector */}
        <div className="mt-10 hidden md:block">
          <div className="relative grid grid-cols-3 gap-8">
            <div className="absolute left-[16.67%] right-[16.67%] top-6 h-0.5 bg-primary/20" />
            {howWeWorkSteps.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold text-card-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with connector */}
        <div className="mt-8 md:hidden">
          <div className="relative flex flex-col gap-8 pl-6">
            <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-primary/20" />
            {howWeWorkSteps.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="relative flex gap-4">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground -ml-6">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Business Outcomes */}
      <SectionWrapper>
        <motion.h2 {...fadeUp(0)} className="text-center text-[28px] font-bold md:text-[36px]">
          {t("outcomes.heading")}
        </motion.h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-6">
          {outcomeItems.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 card-shadow text-center md:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {outcomeIcons[i]}
              </div>
              <span className="text-xs font-semibold text-card-foreground md:text-sm">{o.label}</span>
              <span className="text-[11px] leading-snug text-muted-foreground md:text-xs">{o.desc}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-accent/50">
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("cta.heading")}</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mt-3 md:text-base">{t("cta.body")}</p>
          <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-8 md:gap-3">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                {t("cta.bookConsultation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/delivery" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta.viewApproach")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
