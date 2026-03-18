import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp, TestTube, Code, GitBranch, Monitor, ChevronDown, Globe, Handshake, Clock, Rocket, ShoppingBag } from "lucide-react";
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
  <Rocket className="h-6 w-6" />,
  <Shield className="h-6 w-6" />,
  <TrendingDown className="h-6 w-6" />,
  <Users className="h-6 w-6" />,
];

const capabilityIcons = [
  <Monitor className="h-4 w-4" />,
  <Shield className="h-4 w-4" />,
  <Handshake className="h-4 w-4" />,
  <ShoppingBag className="h-4 w-4" />,
];

const problemIcons = [
  <Monitor className="h-6 w-6" />,
  <Shield className="h-6 w-6" />,
  <GitBranch className="h-6 w-6" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// Mobile accordion — now wrapped in motion.div for hover lift
const AccordionCard = ({ icon, title, desc, detail, pill }: { icon: React.ReactNode; title: string; desc: string; detail?: string[]; pill?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="rounded-lg border border-border bg-card card-shadow overflow-hidden"
    >
      <button
        type="button"
        className="flex w-full items-center gap-3 p-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
          {icon}
        </div>
        <div className="flex flex-1 flex-col min-w-0">
          {pill && (
            <span className="mb-0.5 inline-block self-start rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
              {pill}
            </span>
          )}
          <span className="text-sm font-semibold text-card-foreground">{title}</span>
        </div>
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
    </motion.div>
  );
};

// Desktop card — hover lift
const DesktopCard = ({ icon, title, desc, detail }: { icon: React.ReactNode; title: string; desc: string; detail?: string[] }) => {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="flex flex-col rounded-lg border border-border bg-card p-6 card-shadow hover:card-shadow-hover transition-shadow"
    >
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
    </motion.div>
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

  const problemItemsRaw = t("problems.items", { returnObjects: true });
  const problemItems: { pill?: string; title: string; desc: string }[] = Array.isArray(problemItemsRaw) ? problemItemsRaw : [];

  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4"
            aria-hidden="true"
            style={{ width: 240 }}
          >
            <svg width="240" height="200" viewBox="0 0 210 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible" }}>
              <style>{`
                @keyframes globePulse{0%,100%{r:7;opacity:1}50%{r:10;opacity:0.7}}
                @keyframes globeRing{0%,100%{r:13;opacity:0.35}50%{r:20;opacity:0}}
                @keyframes globeDash{to{stroke-dashoffset:-24}}
                @keyframes globeNodePop{0%,100%{r:5}50%{r:7}}
                .g-pulse{animation:globePulse 2s ease-in-out infinite}
                .g-ring{animation:globeRing 2s ease-in-out infinite}
                .g-dash{stroke-dasharray:5 4;animation:globeDash 1.6s linear infinite}
                .g-dash2{stroke-dasharray:5 4;animation:globeDash 2.2s linear infinite}
                .g-dash3{stroke-dasharray:5 4;animation:globeDash 2.8s linear infinite}
                .g-node{animation:globeNodePop 2.4s ease-in-out infinite}
              `}</style>
              <circle cx="105" cy="85" r="66" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <ellipse cx="105" cy="85" rx="66" ry="21" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
              <ellipse cx="105" cy="85" rx="66" ry="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
              <line x1="105" y1="19" x2="105" y2="151" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
              <line x1="70" y1="22" x2="70" y2="148" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
              <line x1="140" y1="22" x2="140" y2="148" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
              <circle cx="76" cy="54" r="18" fill="#93c5fd" opacity="0.10"/>
              <circle className="g-ring" cx="76" cy="54" r="13" fill="none" stroke="#93c5fd" strokeWidth="1"/>
              <circle className="g-pulse" cx="76" cy="54" r="7" fill="#93c5fd"/>
              <circle className="g-node" cx="126" cy="60" r="5" fill="rgba(255,255,255,0.75)" style={{animationDelay:"0.5s"}}/>
              <circle className="g-node" cx="158" cy="76" r="5" fill="rgba(255,255,255,0.65)" style={{animationDelay:"1s"}}/>
              <circle cx="82" cy="110" r="3.5" fill="rgba(255,255,255,0.4)"/>
              <line x1="76" y1="54" x2="126" y2="60" stroke="#93c5fd" strokeWidth="1.2" opacity="0.7" className="g-dash"/>
              <line x1="76" y1="54" x2="158" y2="76" stroke="#93c5fd" strokeWidth="1" opacity="0.5" className="g-dash2"/>
              <line x1="126" y1="60" x2="158" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" className="g-dash3"/>
              <line x1="76" y1="54" x2="82" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" className="g-dash2" style={{animationDelay:"0.6s"}}/>
              <text x="66" y="43" fontSize="9" fill="#93c5fd" fontWeight="700">CA</text>
              <text x="130" y="57" fontSize="8" fill="rgba(255,255,255,0.8)">EU</text>
              <text x="162" y="73" fontSize="8" fill="rgba(255,255,255,0.75)">AS</text>
            </svg>
          </motion.div>

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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("hero.titlePrefix") || "Built to Ship."}{" "}
            <span style={{ color: "#93c5fd" }}>
              {t("hero.titleAccent") || "Engineered to Last."}
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
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("cta.viewApproach") || "View Our Services"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {t("hero.reach")}
          </motion.p>

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

      {/* ── Partner Collaboration Strip ── */}
      <div className="border-b border-border bg-accent/30">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Handshake className="h-4 w-4 shrink-0 text-primary" />
              <span>{t("partner.label")}</span>
            </div>
            <span className="hidden text-muted-foreground md:inline">—</span>
            <p className="max-w-2xl text-xs text-muted-foreground md:text-sm">
              {t("partner.strip")}
            </p>
          </div>
        </div>
      </div>

      {/* ── Problems We Solve ── */}
      <SectionWrapper
        className="relative overflow-hidden bg-muted/50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -right-4 top-10 h-28 w-28 rounded-full border border-primary/[0.05] bg-transparent" />
          <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute bottom-6 left-16 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
        </div>

        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("problems.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("problems.subheading")}
          </p>
        </motion.div>

        {/* Mobile: stacked cards — hover lift */}
        <div className="relative mt-6 flex flex-col gap-3 md:hidden">
          {problemItems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.06)}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 card-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                {problemIcons[i]}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-column grid — hover lift */}
        <div className="relative mt-8 hidden md:grid md:grid-cols-3 md:gap-6">
          {problemItems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 card-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                {problemIcons[i]}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Platforms We Work With ── */}
      <SectionWrapper className="relative overflow-hidden bg-muted/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute right-16 top-8 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
        </div>

        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("platforms.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("platforms.subheading")}
          </p>
        </motion.div>

        <div className="relative mt-8 space-y-6 md:mt-10 md:space-y-8">
          {(t("platforms.groups", { returnObjects: true }) as { label: string; items: string[] }[]).map((group, gi) => (
            <motion.div key={gi} {...fadeUp(gi * 0.1)} className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item, ii) => (
                  <span
                    key={ii}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground card-shadow md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── What We Deliver ── */}
      <SectionWrapper
        className="relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute left-12 top-8 h-24 w-24 rounded-full border border-primary/[0.05] bg-transparent" />
          <div className="absolute bottom-6 right-16 h-16 w-16 rounded-full border border-primary/[0.04] bg-transparent" />
        </div>
        <motion.div {...fadeUp(0)} className="relative">
          <h2 className="text-center text-[28px] font-bold md:text-[36px]">{t("whatWeDeliver.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            {t("whatWeDeliver.subheading")}
          </p>
        </motion.div>

        {/* Mobile: accordion — AccordionCard has hover lift built in */}
        <div className="relative mt-6 flex flex-col gap-2 md:hidden">
          {valueCards.map((c, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)}>
              <AccordionCard icon={c.icon} title={c.title} desc={c.desc} detail={c.detail} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-column grid — DesktopCard has hover lift built in */}
        <div className="relative mt-8 hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {valueCards.map((c, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex">
                <DesktopCard icon={c.icon} title={c.title} desc={c.desc} detail={c.detail} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── How We Work ── */}
      <SectionWrapper className="relative overflow-hidden bg-muted/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="absolute -left-4 top-12 h-32 w-32 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full border border-primary/[0.05] bg-transparent" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("howWeWork.heading")}</h2>
          <p className="mx-auto mt-1.5 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("howWeWork.subheading")}
          </p>
        </motion.div>

        {/* Desktop: horizontal 3-step */}
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

        {/* Mobile: vertical stack */}
        <div className="mt-8 md:hidden">
          <div className="relative flex flex-col gap-8 pl-6">
            <div className="absolute bottom-0 left-[18px] top-0 w-0.5 bg-primary/20" />
            {howWeWorkSteps.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="relative flex gap-4">
                <div className="relative z-10 -ml-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
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

      {/* ── Quote ── */}
      <motion.div
        {...fadeUp(0)}
        className="border-y border-border bg-background"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mx-auto mb-4 opacity-20" aria-hidden="true">
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
            </svg>
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl lg:text-2xl">
              "Quality isn't a phase at the end — it's the discipline you build in from the start."
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Business Outcomes ── */}
      <SectionWrapper
        className="relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute right-10 top-8 h-24 w-24 rounded-full border border-primary/[0.05] bg-transparent" />
          <div className="absolute bottom-8 left-12 h-20 w-20 rounded-full border border-primary/[0.04] bg-transparent" />
        </div>
        <motion.h2 {...fadeUp(0)} className="relative text-center text-[28px] font-bold md:text-[36px]">
          {t("outcomes.heading")}
        </motion.h2>
        {/* Mobile + Desktop: same grid, hover lift on all */}
        <div className="relative mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-6">
          {outcomeItems.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
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

      {/* ── CTA ── */}
      <SectionWrapper className="relative overflow-hidden bg-accent/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="absolute -right-6 top-8 h-44 w-44 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute bottom-6 left-8 h-28 w-28 rounded-full border border-primary/[0.05] bg-transparent" />
        </div>
        <motion.div {...fadeUp(0)} className="relative text-center">
          <h2 className="text-[28px] font-bold md:text-[36px]">{t("cta.heading")}</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mt-3 md:text-base">{t("cta.body")}</p>
          <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-8 md:gap-3">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-semibold sm:w-auto">
                {t("cta.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta.viewApproach")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
