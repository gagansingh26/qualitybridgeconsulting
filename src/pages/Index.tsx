import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp, Globe, TestTube, Code, GitBranch, Monitor, Layers, Zap } from "lucide-react";
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
      {/* Hero */}
      <section className="enterprise-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 flex flex-wrap items-center justify-center gap-2"
          >
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/90">
                {pill}
              </span>
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/60"
          >
            {t("hero.reach")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
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
        </div>
      </section>

      {/* Capabilities Strip */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {capabilityPillars.map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="text-primary">{capabilityIcons[i]}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Cards */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h2 className="text-center text-2xl font-bold md:text-3xl">{t("whatWeDeliver.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            {t("whatWeDeliver.subheading")}
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Beyond SAP */}
      <SectionWrapper className="bg-accent/50">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 mb-3">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold md:text-3xl">{t("beyondSap.heading")}</h2>
          </motion.div>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground">
            {t("beyondSap.body")}
          </motion.p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beyondSapCaps.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {c.icon}
              </div>
              <span className="text-sm font-medium text-card-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes */}
      <SectionWrapper>
        <motion.h2 {...fadeUp(0)} className="text-center text-2xl font-bold md:text-3xl">
          {t("outcomes.heading")}
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 card-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                {o.icon}
              </div>
              <span className="font-medium text-card-foreground">{o.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-accent/50">
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t("cta.heading")}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t("cta.body")}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button size="lg">
                {t("cta.bookConsultation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/release">
              <Button variant="outline" size="lg">
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
