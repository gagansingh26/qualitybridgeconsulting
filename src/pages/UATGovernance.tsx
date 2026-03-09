import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckSquare, Shield, Users, Zap, ThumbsUp, ClipboardList, AlertTriangle, FileText, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const keyControlIcons = [
  <CheckSquare className="h-4 w-4" />,
  <AlertTriangle className="h-4 w-4" />,
  <Users className="h-4 w-4" />,
  <Shield className="h-4 w-4" />,
];

const outputIcons = [
  <FileText className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />,
  <ClipboardList className="h-5 w-5" />,
];

const deliverableIcons = [
  <Shield className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <Zap className="h-5 w-5" />,
  <ThumbsUp className="h-5 w-5" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

const UATGovernance = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"phases" | "controls" | "outputs">("phases");

  usePageMeta(
    "UAT Governance Framework — QualityBridge Consulting",
    "Structured UAT operating model covering planning, execution, defect triage, and business sign-off. Ensure enterprise release readiness with clear governance and accountability.",
    "/uat"
  );

  const uatPhases = t("uat.phases", { returnObjects: true }) as { name: string; desc: string }[];
  const keyControls = (t("uat.controls", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: keyControlIcons[i],
    label,
  }));
  const outputItems = (t("uat.outputItems", { returnObjects: true }) as { title: string; desc: string }[]).map((o, i) => ({
    icon: outputIcons[i],
    title: o.title,
    desc: o.desc,
  }));
  const deliverables = (t("uat.deliverables", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: deliverableIcons[i],
    label,
  }));

  const tabs = [
    { key: "phases" as const, label: t("uat.operatingModel") },
    { key: "controls" as const, label: t("uat.keyControls") },
    { key: "outputs" as const, label: t("uat.outputs") },
  ];

  return (
    <Layout>
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h1 className="text-2xl font-bold md:text-4xl">{t("uat.heading")}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:mt-3 md:text-base">{t("uat.subheading")}</p>
        </motion.div>

        {/* Mobile: Tab navigation */}
        <div className="mt-5 md:hidden">
          <div className="flex gap-1 overflow-x-auto scrollbar-none rounded-lg bg-muted p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 shrink-0 rounded-md px-2 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3"
            >
              {activeTab === "phases" && (
                <div className="grid grid-cols-2 gap-2">
                  {uatPhases.map((phase, i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-3 card-shadow">
                      <h3 className="text-xs font-semibold text-card-foreground">{phase.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-snug">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "controls" && (
                <div className="grid grid-cols-1 gap-2">
                  {keyControls.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 card-shadow">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {c.icon}
                      </div>
                      <span className="text-sm font-medium text-card-foreground">{c.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "outputs" && (
                <div className="space-y-2">
                  {outputItems.map((o, i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-4 card-shadow">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                          {o.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-card-foreground">{o.title}</h3>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{o.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: full layout */}
        <div className="hidden md:block">
          {/* UAT Operating Model */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold">{t("uat.operatingModel")}</h2>
            <div className="mb-6 hidden overflow-x-auto lg:flex">
              {uatPhases.map((phase, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">
                    {phase.name}
                  </div>
                  {i < uatPhases.length - 1 && <ArrowRight className="mx-1.5 h-4 w-4 text-muted-foreground" />}
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {uatPhases.map((phase, i) => (
                <motion.div key={i} {...fadeUp(i * 0.06)} className="rounded-lg border border-border bg-card p-4 card-shadow">
                  <h3 className="text-sm font-semibold text-card-foreground">{phase.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Controls */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold">{t("uat.keyControls")}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {keyControls.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.06)} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {c.icon}
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold">{t("uat.outputs")}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {outputItems.map((o, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="rounded-lg border border-border bg-card p-5 card-shadow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                      {o.icon}
                    </div>
                    <h3 className="font-semibold text-card-foreground">{o.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Deliverables — 2-col on mobile */}
      <SectionWrapper className="bg-accent/50">
        <motion.h2 {...fadeUp(0)} className="text-xl font-bold md:text-3xl">
          {t("uat.deliverablesHeading")}
        </motion.h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 text-center card-shadow md:flex-row md:gap-3 md:p-4 md:text-left"
            >
              <div className="text-primary">{d.icon}</div>
              <span className="text-xs font-medium text-card-foreground md:text-sm">{d.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default UATGovernance;
