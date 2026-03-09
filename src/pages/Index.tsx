import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp, Globe, TestTube, Code, GitBranch, Monitor, Layers, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import KpiWidget from "@/components/KpiWidget";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const valueCardIcons = [
  <Users className="h-5 w-5" />,
  <BarChart3 className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <Brain className="h-5 w-5" />,
  <Monitor className="h-5 w-5" />,
];

const beyondSapIcons = [
  <Shield className="h-4 w-4" />,
  <Code className="h-4 w-4" />,
  <TestTube className="h-4 w-4" />,
  <GitBranch className="h-4 w-4" />,
];

const outcomeIcons = [
  <TrendingDown className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <Target className="h-5 w-5" />,
  <ThumbsUp className="h-5 w-5" />,
];

const capabilityIcons = [
  <Layers className="h-4 w-4" />,
  <TestTube className="h-4 w-4" />,
  <Monitor className="h-4 w-4" />,
  <Zap className="h-4 w-4" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

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

const Index = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | SAP Governance · Test Automation · Web Development",
    "Enterprise SAP S/4HANA governance, AI-enabled test automation, UAT management, and modern web application development. Based in GTA, Canada — serving global clients.",
    "/"
  );

  const valueCards = (t("whatWeDeliver.cards", { returnObjects: true }) as any[]).map((c: any, i: number) => ({
    icon: valueCardIcons[i],
    title: c.title,
    desc: c.desc,
    detail: c.detail,
  }));

  const capabilityPillars = [
    t("capabilities.governance"),
    t("capabilities.automation"),
    t("capabilities.webDev"),
    t("capabilities.digital"),
  ];

  const beyondSapCaps = (t("beyondSap.capabilities", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: beyondSapIcons[i],
    label,
  }));

  const outcomes = (t("outcomes.items", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: outcomeIcons[i],
    label,
  }));

  return (
    <Layout>
      {/* Hero — compact on mobile */}
      <section className="enterprise-gradient py-10 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 flex flex-wrap items-center justify-center gap-1.5"
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
            className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-2xl text-base text-primary-foreground/80 md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
          {/* CTA buttons right under subtitle on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
                {t("hero.bookConsultation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border-primary-foreground/60 bg-transparent font-semibold text-primary-foreground ring-offset-transparent hover:bg-primary-foreground/15 hover:text-primary-foreground sm:w-auto" variant="outline">
                {t("hero.bookCall")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-xs text-primary-foreground/50 md:text-sm"
          >
            {t("hero.reach")}
          </motion.p>
        </div>
      </section>

      {/* Capabilities Strip — scrollable on mobile */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-none md:flex-wrap md:justify-center md:gap-10">
            {capabilityPillars.map((label, i) => (
              <div key={i} className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
                <span className="text-primary">{capabilityIcons[i]}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Cards — accordion on mobile, grid on md+ */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h2 className="text-center text-xl font-bold md:text-3xl">{t("whatWeDeliver.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-xl text-center text-sm text-muted-foreground md:text-base">
            {t("whatWeDeliver.subheading")}
          </p>
        </motion.div>

        {/* Mobile: accordion */}
        <div className="mt-6 space-y-2 md:hidden">
          {valueCards.map((c, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)}>
              <AccordionCard icon={c.icon} title={c.title} desc={c.desc} detail={c.detail} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="rounded-lg border border-border bg-card p-6 card-shadow hover:card-shadow-hover transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                {c.icon}
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              {c.detail && (
                <ul className="mt-3 space-y-1">
                  {c.detail.map((d: string) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 shrink-0 text-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Beyond SAP — 2-col grid on mobile */}
      <SectionWrapper className="bg-accent/50">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 mb-2">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold md:text-3xl">{t("beyondSap.heading")}</h2>
          </motion.div>
          <motion.p {...fadeUp(0.1)} className="text-sm text-muted-foreground md:text-base">
            {t("beyondSap.body")}
          </motion.p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
          {beyondSapCaps.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 card-shadow md:p-4"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-8 md:w-8">
                {c.icon}
              </div>
              <span className="text-xs font-medium text-card-foreground md:text-sm">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes — 2-col on mobile */}
      <SectionWrapper>
        <motion.h2 {...fadeUp(0)} className="text-center text-xl font-bold md:text-3xl">
          {t("outcomes.heading")}
        </motion.h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-6">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 card-shadow text-center md:flex-row md:gap-3 md:p-5 md:text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success/10 text-success md:h-10 md:w-10">
                {o.icon}
              </div>
              <span className="text-xs font-medium text-card-foreground md:text-base">{o.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-accent/50">
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-xl font-bold md:text-3xl">{t("cta.heading")}</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mt-3 md:text-base">{t("cta.body")}</p>
          <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-8 md:gap-3">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                {t("cta.bookConsultation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/release" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta.viewRelease")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
