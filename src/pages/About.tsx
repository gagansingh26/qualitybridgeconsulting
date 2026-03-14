import { motion } from "framer-motion";
import { Brain, Shield, GitBranch, BarChart3, Monitor, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";

const focusIcons = [
  <Shield className="h-5 w-5" />,
  <Brain className="h-5 w-5" />,
  <GitBranch className="h-5 w-5" />,
  <BarChart3 className="h-5 w-5" />,
  <Monitor className="h-5 w-5" />,
  <Layers className="h-5 w-5" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

const platforms = [
  "SAP S/4HANA",
  "Workday",
  "Salesforce",
  "Microsoft Dynamics 365",
  "Cypress",
  "Playwright",
  "Azure DevOps",
  "Jira",
];

const aboutStats = [
  { value: "10+", label: "Years Experience" },
  { value: "EU · Asia · Americas", label: "Regions Delivered" },
  { value: "6+", label: "Industries Served" },
  { value: "AI", label: "Powered Test Design" },
];

const About = () => {
  const { t } = useTranslation();
  usePageMeta(
    "About — QualityBridge Consulting | SAP Governance, Automation & Web Development",
    "10+ years delivering SAP governance, AI-enabled test automation, and modern web development across enterprise platforms. Bridging complex systems with polished digital experiences.",
    "/about"
  );

  const tags = t("about.tags", { returnObjects: true }) as string[];
  const bio = t("about.bio", { returnObjects: true }) as string[];
  const focusAreas = (t("about.focusAreas", { returnObjects: true }) as string[]).map((label, i) => ({
    icon: focusIcons[i],
    label,
  }));

  return (
    <Layout>
      {/* Hero — matches home page structure exactly */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20">

        {/* Geometric background shapes — identical to home page */}
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
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Headline with accent — matches home page split style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("about.titlePrefix")}{" "}
            <span style={{ color: "#93c5fd" }}>
              {t("about.titleAccent")}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 md:text-lg"
          >
            {t("about.heroSubheading")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3"
          >
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
                {t("about.ctaBook")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                {t("about.ctaMessage")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats bar — matches home page style exactly */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg"
          >
            {aboutStats.map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-base font-bold text-primary-foreground md:text-lg">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <SectionWrapper className="pb-6">
        <div className="mx-auto max-w-3xl space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
          {bio.map((para, i) => (
            <motion.p key={i} {...fadeUp(i * 0.08)}>
              {para}
            </motion.p>
          ))}
        </div>
      </SectionWrapper>

      {/* Platforms & tools strip */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t("about.platformsLabel")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {platforms.map((p) => (
              <span key={p} className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <SectionWrapper className="pt-8 pb-8">
        <motion.h2 {...fadeUp(0)} className="text-xl font-bold md:text-3xl">
          {t("about.focusHeading")}
        </motion.h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
          {focusAreas.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 card-shadow md:p-4"
            >
              <div className="shrink-0 text-primary">{f.icon}</div>
              <span className="text-xs font-medium text-card-foreground md:text-sm">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-accent/50 pt-8 pb-10">
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-[24px] font-bold md:text-[32px]">{t("about.ctaHeading")}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground md:text-base">
            {t("about.ctaBody")}
          </p>
          <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                {t("about.ctaBook")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("about.ctaMessage")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
