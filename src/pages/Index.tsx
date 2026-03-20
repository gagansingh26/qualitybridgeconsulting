import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ExternalLink, Shield, Users, TrendingDown,
  GitBranch, Monitor, ChevronDown, Rocket, CheckCircle,
  Brain, MapPin, Layers, Zap, Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";
import { CaseStudies } from "@/components/CaseStudies";

// ─── Colour tokens ────────────────────────────────────────────────────────────
const PILLAR = [
  { accentBar: "bg-blue-500 dark:bg-blue-400",     headerBg: "bg-blue-50 dark:bg-blue-950",     iconBg: "bg-blue-100 dark:bg-blue-900",     iconColor: "text-blue-700 dark:text-blue-300",   dotColor: "bg-blue-500 dark:bg-blue-400",   stepNum: "bg-blue-500 dark:bg-blue-400 text-white"   },
  { accentBar: "bg-teal-500 dark:bg-teal-400",     headerBg: "bg-teal-50 dark:bg-teal-950",     iconBg: "bg-teal-100 dark:bg-teal-900",     iconColor: "text-teal-700 dark:text-teal-300",   dotColor: "bg-teal-500 dark:bg-teal-400",   stepNum: "bg-teal-500 dark:bg-teal-400 text-white"   },
  { accentBar: "bg-purple-500 dark:bg-purple-400", headerBg: "bg-purple-50 dark:bg-purple-950", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-700 dark:text-purple-300", dotColor: "bg-purple-500 dark:bg-purple-400", stepNum: "bg-purple-500 dark:bg-purple-400 text-white" },
];
const OUTCOME_COLOURS = [
  { accentBar: "bg-blue-500 dark:bg-blue-400",     iconBg: "bg-blue-100 dark:bg-blue-900",     iconColor: "text-blue-700 dark:text-blue-300"   },
  { accentBar: "bg-teal-500 dark:bg-teal-400",     iconBg: "bg-teal-100 dark:bg-teal-900",     iconColor: "text-teal-700 dark:text-teal-300"   },
  { accentBar: "bg-purple-500 dark:bg-purple-400", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-700 dark:text-purple-300" },
  { accentBar: "bg-amber-500 dark:bg-amber-400",   iconBg: "bg-amber-100 dark:bg-amber-900",   iconColor: "text-amber-700 dark:text-amber-300"  },
];

const DIFF_COLOURS = [
  { bg: "bg-blue-50 dark:bg-blue-950",     border: "border-blue-200 dark:border-blue-800",     icon: "text-blue-600 dark:text-blue-400"   },
  { bg: "bg-teal-50 dark:bg-teal-950",     border: "border-teal-200 dark:border-teal-800",     icon: "text-teal-600 dark:text-teal-400"   },
  { bg: "bg-purple-50 dark:bg-purple-950", border: "border-purple-200 dark:border-purple-800", icon: "text-purple-600 dark:text-purple-400" },
];

const problemIcons  = [ <Monitor className="h-5 w-5" />, <Shield className="h-5 w-5" />, <GitBranch className="h-5 w-5" /> ];
const deliverIcons  = [ <Monitor className="h-5 w-5" />, <Shield className="h-5 w-5" />, <Brain className="h-5 w-5"   /> ];
const outcomeIcons  = [ <Rocket className="h-5 w-5"  />, <Shield className="h-5 w-5" />, <TrendingDown className="h-5 w-5" />, <Users className="h-5 w-5" /> ];
const diffIcons     = [ <Layers className="h-5 w-5" />, <MapPin className="h-5 w-5" />, <Zap className="h-5 w-5" /> ];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// Mobile accordion
const AccordionCard = ({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) => {
  const [open, setOpen] = useState(false);
  const c = PILLAR[index];
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ y: -3 }} className="rounded-xl border border-border bg-card overflow-hidden card-shadow">
      <div className={`h-[3px] w-full ${c.accentBar}`} />
      <button type="button" className="flex w-full items-center gap-3 p-4 text-left" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${c.iconBg} ${c.iconColor}`}>{icon}</div>
        <span className="text-sm font-semibold text-card-foreground flex-1">{title}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <div className="border-t border-border px-4 pb-4 pt-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Index = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Structured delivery across SAP, digital, and QA",
    "Ship reliable platforms without delivery chaos — SAP governance, digital development, and quality engineering structured as one delivery system.",
    "/"
  );

  const problemItems  = t("problems.items",        { returnObjects: true }) as { pill?: string; title: string; desc: string }[];
  const outcomeItems  = t("outcomes.items",         { returnObjects: true }) as { label: string; desc: string }[];
  const howWeWorkSteps= t("howWeWork.steps",        { returnObjects: true }) as { title: string; desc: string }[];
  const deliverCards  = t("whatWeDeliver.cards",    { returnObjects: true }) as { title: string; desc: string; detail?: string[] }[];
  const platformGroups= t("platforms.groups",       { returnObjects: true }) as { label: string; outcome: string; items: string[] }[];
  const diffItems     = t("differentiation.items",  { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <Layout>

      {/* ════════════════════════════════════════════════════════
          1. HERO — outcome + discipline
      ════════════════════════════════════════════════════════ */}
      <section className="enterprise-gradient relative overflow-hidden py-14 md:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:h-80 md:w-80" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>

        <div className="container relative mx-auto max-w-3xl px-4 text-center">
          {/* Eyebrow pills */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:text-xs">{pill}</span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[32px] font-bold leading-tight text-primary-foreground md:text-[44px] lg:text-[52px]">
            {t("hero.titlePrefix")}{" "}
            <span className="block mt-1" style={{ color: "#93c5fd" }}>{t("hero.titleAccent")}</span>
          </motion.h1>

          {/* Subtitle — one sentence, specific */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-lg leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>

          {/* Single primary CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto px-8">
                {t("hero.ctaPrimary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("hero.ctaSecondary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[12px] md:text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            {t("hero.reach")}
          </motion.p>

          {/* 3-stat bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg">
            {(t("hero.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. FOUNDER TRUST STRIP
      ════════════════════════════════════════════════════════ */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3 md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">GS</div>
              <span className="text-xs font-semibold text-foreground md:text-sm">{t("hero.founderName")} · {t("hero.founderTitle")}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <span className="text-xs text-muted-foreground md:text-sm">{t("hero.founderCredits")}</span>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground md:text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>{t("hero.founderLocation")}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <a href="https://www.linkedin.com/in/gagansingh26/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary hover:underline md:text-sm">
              <ExternalLink className="h-3 w-3" />{t("hero.founderLinkedIn")}
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          3. SINGLE PROOF CALLOUT
      ════════════════════════════════════════════════════════ */}
      <div className="border-b border-border bg-muted/40">
        <div className="container mx-auto px-4 py-5 md:px-6 md:py-6">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-3xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
              <TrendingDown className="h-5 w-5" />
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              <span className="font-semibold">{t("hero.proofStat")}</span>
              {" — "}<span className="text-muted-foreground">{t("hero.proofContext")}</span>
            </p>
            <Link to="/services#case-studies" className="shrink-0 text-xs font-medium text-primary hover:underline flex items-center gap-1 whitespace-nowrap">
              {t("hero.proofLink")} <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          4. PROBLEMS WE SOLVE — trimmed, bold statement first
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("problems.eyebrow")}</p>
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("problems.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("problems.subheading")}</p>
        </motion.div>

        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {problemItems.map((item, i) => {
            const mobileBorder = i === 0
              ? "border-l-4 border-l-blue-500 dark:border-l-blue-400"
              : i === 1
              ? "border-l-4 border-l-teal-500 dark:border-l-teal-400"
              : "border-l-4 border-l-purple-500 dark:border-l-purple-400";
            return (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className={`rounded-xl border border-border bg-card overflow-hidden ${mobileBorder}`}>
                <div className={`${PILLAR[i].headerBg} px-4 py-3 flex items-center gap-3`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>{problemIcons[i]}</div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                </div>
                <div className="bg-card px-4 py-3 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {problemItems.map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow">
              <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
              <div className={`${PILLAR[i].headerBg} px-5 pt-5 pb-4`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full mb-3 ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>{problemIcons[i]}</div>
                <h3 className="text-sm font-bold text-foreground leading-snug">{item.title}</h3>
              </div>
              <div className="px-5 py-4 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.2)} className="text-center mt-8">
          <Button size="lg" variant="outline" className="font-medium"
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}>
            {t("problems.sampleEngagement")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          5. CASE STUDIES — moved up (proof follows pain)
      ════════════════════════════════════════════════════════ */}
      <CaseStudies />

      {/* ════════════════════════════════════════════════════════
          6. WHAT WE DELIVER — outcome-led, no text walls
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("whatWeDeliver.eyebrow")}</p>
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("whatWeDeliver.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("whatWeDeliver.subheading")}</p>
        </motion.div>

        {/* Mobile accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {deliverCards.map((c, i) => (<motion.div key={i} {...fadeUp(i * 0.06)}><AccordionCard icon={deliverIcons[i]} title={c.title} desc={c.desc} index={i} /></motion.div>))}
        </div>

        {/* Desktop — outcome-first layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {deliverCards.map((c, i) => {
            const col = PILLAR[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow">
                <div className={`h-[3px] w-full ${col.accentBar}`} />
                <div className={`${col.headerBg} px-5 pt-5 pb-4`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full mb-3 ${col.iconBg} ${col.iconColor}`}>{deliverIcons[i]}</div>
                  <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                </div>
                <div className="px-5 py-4 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                  {c.detail && (
                    <ul className="mt-auto space-y-1.5">
                      {c.detail.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${col.dotColor}`} />{d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.2)} className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-medium">
              {t("whatWeDeliver.cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          7. WHY WE'RE DIFFERENT — new section
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("differentiation.eyebrow")}</p>
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("differentiation.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("differentiation.subheading")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {diffItems.map((item, i) => {
            const c = DIFF_COLOURS[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-xl border p-5 md:p-6 ${c.bg} ${c.border}`}>
                <div className={`mb-3 ${c.icon}`}>{diffIcons[i]}</div>
                <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          8. PLATFORMS — grouped by outcome
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("platforms.eyebrow")}</p>
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("platforms.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("platforms.subheading")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {platformGroups.map((group, gi) => {
            const col = PILLAR[gi];
            return (
              <motion.div key={gi} {...fadeUp(gi * 0.1)} className="rounded-xl border border-border bg-card overflow-hidden card-shadow">
                <div className={`h-[3px] w-full ${col.accentBar}`} />
                <div className={`${col.headerBg} px-5 pt-4 pb-3`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${col.iconColor} mb-0.5`}>{group.label}</p>
                  <p className="text-sm text-muted-foreground">{group.outcome}</p>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-card-foreground">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          9. HOW WE WORK — de-emphasised, id for scroll anchor
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper id="how-we-work" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("howWeWork.eyebrow")}</p>
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("howWeWork.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("howWeWork.subheading")}</p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 relative">
          <div className="absolute left-[16.67%] right-[16.67%] top-5 h-0.5 bg-border pointer-events-none" />
          {howWeWorkSteps.map((step, i) => {
            const c = PILLAR[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.12)} className="flex flex-col items-center text-center">
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${c.stepNum}`}>{i + 1}</div>
                <div className="mt-4 w-full rounded-xl border border-border overflow-hidden card-shadow">
                  <div className={`h-[3px] w-full ${c.accentBar}`} />
                  <div className={`${c.headerBg} px-4 py-3`}><h3 className="text-sm font-semibold text-foreground">{step.title}</h3></div>
                  <div className="px-4 py-3"><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {howWeWorkSteps.map((step, i) => {
            const c = PILLAR[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-3 items-start">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-1 ${c.stepNum}`}>{i + 1}</div>
                <div className="flex-1 rounded-xl border border-border overflow-hidden card-shadow">
                  <div className={`h-[3px] w-full ${c.accentBar}`} />
                  <div className={`${c.headerBg} px-4 py-2.5`}><h3 className="text-sm font-semibold text-foreground">{step.title}</h3></div>
                  <div className="px-4 py-3"><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          10. BUSINESS OUTCOMES — stat-only, no desc text
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center mb-8 md:mb-10">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("outcomes.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{t("outcomes.subheading")}</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {outcomeItems.map((o, i) => {
            const c = OUTCOME_COLOURS[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow">
                <div className={`h-[3px] w-full ${c.accentBar}`} />
                <div className="flex flex-col items-center gap-2.5 p-4 text-center md:p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${c.iconBg} ${c.iconColor}`}>{outcomeIcons[i]}</div>
                  <span className="text-xs font-semibold text-card-foreground md:text-sm leading-tight">{o.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════════════════════
          11. CLOSING CTA — diagnostic hook
      ════════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-accent/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
        </div>
        <motion.div {...fadeUp(0)} className="relative max-w-2xl mx-auto text-center">
          <Target className="h-8 w-8 text-primary mx-auto mb-4 opacity-60" />
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("cta.heading")}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground md:text-base">{t("cta.body")}</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-8">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-semibold sm:w-auto px-8">
                {t("cta.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta.message")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("cta.subtext")}</p>
        </motion.div>
      </SectionWrapper>

    </Layout>
  );
};

export default Index;
