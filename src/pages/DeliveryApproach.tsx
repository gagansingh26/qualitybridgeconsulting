import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, GitBranch, Code, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const phaseColors = ["bg-primary", "bg-info", "bg-success", "bg-warning", "bg-destructive"];

const automationIcons = [
  <Settings className="h-5 w-5" />,
  <Code className="h-5 w-5" />,
  <Cpu className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

const DeliveryApproach = () => {
  const { t } = useTranslation();
  const [activePhase, setActivePhase] = useState(0);

  usePageMeta(
    "Delivery Approach — QualityBridge Consulting | Test Strategy & Automation",
    "Structured test delivery lifecycle from planning through hypercare — SAP, web, and API automation using Cypress, Playwright, and CI/CD quality gates.",
    "/delivery"
  );

  const phases = t("delivery.phases", { returnObjects: true }) as { name: string; desc: string }[];
  const automationItems = (t("delivery.automationItems", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: automationIcons[i],
    label,
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient relative overflow-hidden py-10 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("delivery.heading")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base"
          >
            {t("delivery.subheading")}
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        {/* Mobile: Tab-style phase selector */}
        <div className="md:hidden">
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {phases.map((phase, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhase(i)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activePhase === i
                    ? `${phaseColors[i]} text-primary-foreground`
                    : "bg-accent text-muted-foreground"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${activePhase === i ? "bg-primary-foreground/60" : phaseColors[i]}`} />
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

        {/* Desktop: Timeline */}
        <div className="relative mt-10 hidden md:block">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
          <div className="space-y-6 ml-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
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

        {/* Desktop flow bar */}
        <div className="mt-8 hidden overflow-x-auto lg:flex">
          {phases.map((phase, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex h-10 items-center rounded-lg px-4 text-sm font-semibold text-primary-foreground ${phaseColors[i]}`}>
                {phase.name}
              </div>
              {i < phases.length - 1 && <ArrowRight className="mx-1.5 h-4 w-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Test Automation Strategy */}
      <SectionWrapper className="bg-accent/50">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-xl font-bold md:text-3xl">{t("delivery.automationHeading")}</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground md:mt-2 md:text-base">{t("delivery.automationSubheading")}</p>
        </motion.div>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
          {automationItems.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 card-shadow md:p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary md:h-10 md:w-10">
                {c.icon}
              </div>
              <span className="text-xs font-medium text-card-foreground md:text-sm">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default DeliveryApproach;
