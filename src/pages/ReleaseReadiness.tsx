import { motion } from "framer-motion";
import { ClipboardCheck, Bug, Users, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const trackIcons = [
  <ClipboardCheck className="h-5 w-5" />,
  <Bug className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <Cpu className="h-5 w-5" />,
];

const statusVariants: ("on-track" | "conditional" | "blocked")[] = ["on-track", "conditional", "blocked"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

const ReleaseReadiness = () => {
  const { t } = useTranslation();
  usePageMeta(
    "Release Readiness Framework — QualityBridge Consulting",
    "Risk-based release governance with structured go/no-go decision models. Track test coverage, defect severity, automation metrics, and business sign-offs for confident releases.",
    "/release"
  );

  const trackItems = (t("release.trackItems", { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => ({
    icon: trackIcons[i],
    title: item.title,
    desc: item.desc,
  }));

  const releaseStatuses = (t("release.statuses", { returnObjects: true }) as { label: string; desc: string }[]).map((s, i) => ({
    variant: statusVariants[i],
    label: s.label,
    desc: s.desc,
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
            {t("release.heading")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base"
          >
            {t("release.subheading")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-2 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {t("release.reach")}
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        {/* What We Track */}
        <div>
          <motion.h2 {...fadeUp(0)} className="mb-4 text-base font-semibold md:text-xl">
            {t("release.trackHeading")}
          </motion.h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {trackItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="rounded-lg border border-border bg-card p-3 card-shadow md:p-5"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-primary md:h-10 md:w-10">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-card-foreground md:text-base">{item.title}</h3>
                </div>
                <p className="mt-2 text-xs text-muted-foreground md:mt-3 md:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Release Decision Model */}
        <div className="mt-6 md:mt-10">
          <motion.h2 {...fadeUp(0)} className="mb-4 text-base font-semibold md:mb-6 md:text-xl">
            {t("release.decisionModel")}
          </motion.h2>
          <div className="grid gap-3 sm:grid-cols-3 md:gap-4">
            {releaseStatuses.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5"
              >
                <div className="mb-2 md:mb-3">
                  <StatusBadge variant={s.variant} label={s.label} />
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Governance explanation */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-6 rounded-lg border border-border bg-accent/50 p-4 md:mt-10 md:p-6"
        >
          <h3 className="text-base font-semibold text-card-foreground md:text-lg">{t("release.governanceHeading")}</h3>
          <p className="mt-1.5 text-xs text-muted-foreground md:mt-2 md:text-sm">{t("release.governanceBody")}</p>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default ReleaseReadiness;
