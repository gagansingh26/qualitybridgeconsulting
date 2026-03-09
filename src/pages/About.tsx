import { motion } from "framer-motion";
import { Brain, Shield, GitBranch, BarChart3, Monitor, Layers } from "lucide-react";
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
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h1 className="text-2xl font-bold md:text-4xl">{t("about.heading")}</h1>
          <div className="mt-3 flex flex-wrap gap-1.5 md:mt-6 md:gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground md:px-3 md:py-1 md:text-xs">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-5 max-w-3xl space-y-3 text-sm text-muted-foreground leading-relaxed md:mt-8 md:space-y-5 md:text-base">
          {bio.map((para, i) => (
            <motion.p key={i} {...fadeUp(i * 0.08)}>
              {para}
            </motion.p>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-accent/50">
        <motion.h2 {...fadeUp(0)} className="text-xl font-bold md:text-3xl">
          {t("about.focusHeading")}
        </motion.h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
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
    </Layout>
  );
};

export default About;
