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

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Regions Delivered" },
  { value: "6+", label: "Industries Served" },
  { value: "AI", label: "Test Design Focus" },
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
      {/* Hero */}
      <section className="enterprise-gradient py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("about.heading")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 md:text-lg"
          >
            Technology delivery professional based in Canada — specialising in SAP governance, quality engineering, and digital development.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-3 text-center">
                <div className="text-2xl font-bold text-primary-foreground">{s.value}</div>
                <div className="mt-0.5 text-[11px] text-primary-foreground/70 md:text-xs">{s.label}</div>
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
          <p className="mb-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Platforms & tools experience
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
          <h2 className="text-[24px] font-bold md:text-[32px]">Ready to work together?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground md:text-base">
            Whether you need SAP governance, test automation, or a purpose-built web application — let's start with a conversation.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Free Call <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Send a Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
