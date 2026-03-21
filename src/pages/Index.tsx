import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ExternalLink, Shield, Users, TrendingDown,
  GitBranch, Monitor, Rocket, Layers, MapPin,
  Target, ClipboardCheck, Activity, TrendingUp,
  HelpCircle, ChevronDown, CheckCircle, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useTranslation } from "react-i18next";
import { CaseStudies } from "@/components/CaseStudies";
import PartnerPanel from "@/components/PartnerPanel";

// ─── Design tokens ─────────────────────────────────────────────────────────────
const PILLAR = [
  { accentBar:"bg-blue-500 dark:bg-blue-400",   iconBg:"bg-blue-100 dark:bg-blue-900",   iconColor:"text-blue-600 dark:text-blue-400",   dotColor:"bg-blue-500 dark:bg-blue-400",   stepBg:"bg-blue-500",   labelColor:"text-blue-600 dark:text-blue-400",   statColor:"text-blue-600 dark:text-blue-400"   },
  { accentBar:"bg-teal-500 dark:bg-teal-400",   iconBg:"bg-teal-100 dark:bg-teal-900",   iconColor:"text-teal-600 dark:text-teal-400",   dotColor:"bg-teal-500 dark:bg-teal-400",   stepBg:"bg-teal-500",   labelColor:"text-teal-600 dark:text-teal-400",   statColor:"text-teal-600 dark:text-teal-400"   },
  { accentBar:"bg-purple-500 dark:bg-purple-400", iconBg:"bg-purple-100 dark:bg-purple-900", iconColor:"text-purple-600 dark:text-purple-400", dotColor:"bg-purple-500 dark:bg-purple-400", stepBg:"bg-purple-500", labelColor:"text-purple-600 dark:text-purple-400", statColor:"text-purple-600 dark:text-purple-400" },
];
const OUTCOME_ACCENT = ["bg-blue-500 dark:bg-blue-400","bg-teal-500 dark:bg-teal-400","bg-purple-500 dark:bg-purple-400","bg-amber-500 dark:bg-amber-400"];
const OUTCOME_ICON   = [
  { bg:"bg-blue-100 dark:bg-blue-900",   color:"text-blue-600 dark:text-blue-400"   },
  { bg:"bg-teal-100 dark:bg-teal-900",   color:"text-teal-600 dark:text-teal-400"   },
  { bg:"bg-purple-100 dark:bg-purple-900", color:"text-purple-600 dark:text-purple-400" },
  { bg:"bg-amber-100 dark:bg-amber-900", color:"text-amber-600 dark:text-amber-400"  },
];

const problemIcons = [<Monitor className="h-5 w-5" />, <Shield className="h-5 w-5" />, <GitBranch className="h-5 w-5" />];
const deliverIcons = [<Monitor className="h-5 w-5" />, <ClipboardCheck className="h-5 w-5" />, <Activity className="h-5 w-5" />];
const outcomeIcons = [<Rocket className="h-5 w-5" />, <Shield className="h-5 w-5" />, <TrendingDown className="h-5 w-5" />, <Users className="h-5 w-5" />];
const diffIcons    = [<Layers className="h-5 w-5" />, <MapPin className="h-5 w-5" />, <TrendingUp className="h-5 w-5" />];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

// ─── Circles used inside every SectionWrapper ─────────────────────────────────
const SectionCircles = ({ flip = false }: { flip?: boolean }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className={`absolute ${flip ? "-left-12 -top-12" : "-right-14 -top-14"} h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]`} />
    <div className={`absolute ${flip ? "-right-10 -bottom-10" : "-left-10 -bottom-10"} h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]`} />
  </div>
);

// ─── Section header ───────────────────────────────────────────────────────────
const SH = ({ eyebrow, heading, sub }: { eyebrow?: string; heading: string; sub?: string }) => (
  <div className="mb-8 md:mb-10 text-center">
    {eyebrow && <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2.5">{eyebrow}</p>}
    <h2 className="text-[26px] font-bold text-foreground leading-tight md:text-[34px]">{heading}</h2>
    {sub && <p className="mt-3 mx-auto max-w-2xl text-sm text-muted-foreground leading-relaxed md:text-base">{sub}</p>}
  </div>
);

// ─── Hero globe graphic ───────────────────────────────────────────────────────
const HeroGraphic = ({
  labelOneTeam,
  labelRegions,
  labelHQ,
}: {
  labelOneTeam: string;
  labelRegions: string;
  labelHQ: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.48 }}
    className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4"
    aria-hidden="true"
    style={{ width: 220 }}
  >
    <svg width="260" height="260" viewBox="0 0 200 200" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", overflow: "visible" }}>
      <style>{`
        @keyframes globeSpin{from{stroke-dashoffset:0}to{stroke-dashoffset:-60}}
        @keyframes globePulse{0%,100%{r:9;opacity:1}50%{r:13;opacity:.6}}
        @keyframes globeRing{0%,100%{r:16;opacity:.35}50%{r:24;opacity:0}}
        @keyframes globeFlow{to{stroke-dashoffset:-18}}
        @keyframes globeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes globeNode{0%,100%{r:5}50%{r:7}}
        .gl-spin{stroke-dasharray:8 6;animation:globeSpin 8s linear infinite}
        .gl-pulse{animation:globePulse 2.2s ease-in-out infinite}
        .gl-ring{animation:globeRing 2.2s ease-in-out infinite}
        .gl-flow{stroke-dasharray:4 4;animation:globeFlow 1.8s linear infinite}
        .gl-flow2{stroke-dasharray:4 4;animation:globeFlow 2.4s linear infinite .6s}
        .gl-flow3{stroke-dasharray:4 4;animation:globeFlow 2s linear infinite 1.2s}
        .gl-float{animation:globeFloat 3s ease-in-out infinite}
        .gl-node{animation:globeNode 2.6s ease-in-out infinite}
      `}</style>
      <circle cx="100" cy="100" r="58" fill="rgba(147,197,253,0.06)" stroke="rgba(147,197,253,0.22)" strokeWidth="1"/>
      <ellipse cx="100" cy="100" rx="58" ry="20" fill="none" stroke="rgba(147,197,253,0.12)" strokeWidth="0.8"/>
      <ellipse cx="100" cy="100" rx="58" ry="40" fill="none" stroke="rgba(147,197,253,0.08)" strokeWidth="0.8"/>
      <line x1="100" y1="42" x2="100" y2="158" stroke="rgba(147,197,253,0.10)" strokeWidth="0.8"/>
      <path d="M 68 48 Q 42 100 68 152" fill="none" stroke="rgba(147,197,253,0.08)" strokeWidth="0.8"/>
      <path d="M 132 48 Q 158 100 132 152" fill="none" stroke="rgba(147,197,253,0.08)" strokeWidth="0.8"/>
      <ellipse cx="100" cy="100" rx="72" ry="24" fill="none" stroke="rgba(147,197,253,0.18)" strokeWidth="1" className="gl-spin"/>
      <circle className="gl-ring" cx="52" cy="88" r="16" fill="none" stroke="#93c5fd" strokeWidth="0.8"/>
      <circle className="gl-pulse" cx="52" cy="88" r="9" fill="#93c5fd"/>
      <text x="52" y="116" fontSize="8.5" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontWeight="700" fontFamily="system-ui,sans-serif">Canada</text>
      <text x="52" y="127" fontSize="7" fill="rgba(255,255,255,0.45)" textAnchor="middle" fontFamily="system-ui,sans-serif">{labelHQ}</text>
      <circle className="gl-node" cx="142" cy="62" r="5" fill="#93c5fd" opacity="0.85" style={{animationDelay:"0.5s"}}/>
      <text x="142" y="50" fontSize="8" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontWeight="600" fontFamily="system-ui,sans-serif">Europe</text>
      <circle className="gl-node" cx="158" cy="128" r="5" fill="#93c5fd" opacity="0.85" style={{animationDelay:"1.1s"}}/>
      <text x="158" y="148" fontSize="8" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontWeight="600" fontFamily="system-ui,sans-serif">Asia</text>
      <path d="M 62 82 Q 96 55 136 64" fill="none" stroke="rgba(147,197,253,0.45)" strokeWidth="1.2" className="gl-flow"/>
      <path d="M 62 95 Q 106 118 152 126" fill="none" stroke="rgba(147,197,253,0.35)" strokeWidth="1.2" className="gl-flow2"/>
      <path d="M 144 68 Q 162 96 155 122" fill="none" stroke="rgba(147,197,253,0.25)" strokeWidth="1" className="gl-flow3"/>
      <g className="gl-float" style={{ transformOrigin: "100px 178px" }}>
        <rect x="46" y="168" width="108" height="30" rx="7" fill="rgba(147,197,253,0.12)" stroke="rgba(147,197,253,0.35)" strokeWidth="0.8"/>
        <circle cx="62" cy="183" r="4" fill="#93c5fd" opacity="0.8"/>
        <text x="72" y="180" fontSize="8" fill="rgba(255,255,255,0.9)" fontWeight="700" fontFamily="system-ui,sans-serif">{labelOneTeam}</text>
        <text x="72" y="191" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="system-ui,sans-serif">{labelRegions}</text>
      </g>
    </svg>
  </motion.div>
);

// ─── Mobile collapsible section wrapper ──────────────────────────────────────
const MobileCollapse = ({
  label, eyebrow, sub, children, defaultOpen = false, onOpen,
}: {
  label: string; eyebrow?: string; sub?: string; children: React.ReactNode;
  defaultOpen?: boolean; onOpen?: () => void;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => { const next = !open; setOpen(next); if (next && onOpen) onOpen(); };
  return (
    <div>
      <div className="md:hidden">
        <button onClick={toggle} className="w-full flex items-center justify-between py-3 px-1 text-left" aria-expanded={open}>
          <div className="min-w-0 flex-1 pr-3">
            {eyebrow && <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-0.5">{eyebrow}</p>}
            <span className="text-base font-bold text-foreground leading-snug">{label}</span>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && sub && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="text-xs text-muted-foreground leading-relaxed px-1 pb-2">{sub}</motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div key="mobile-content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:block">{children}</div>
    </div>
  );
};

// ─── Counter stat display ─────────────────────────────────────────────────────
const CounterStat = ({ target, suffix, prefix = "", start, delay = 0, accent }: {
  target: number; suffix: string; prefix?: string; start: boolean; delay?: number; accent: string;
}) => {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (start && !triggered) { const t = setTimeout(() => setTriggered(true), delay); return () => clearTimeout(t); }
  }, [start, delay, triggered]);
  const val = useCountUp(target, 1300, triggered);
  return (
    <div className="text-center">
      <span className="text-2xl font-bold text-foreground tabular-nums">{prefix}{val}{suffix}</span>
    </div>
  );
};

// ─── Animated counter hook ────────────────────────────────────────────────────
const useCountUp = (target: number, duration = 1400, start = false) => {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    setVal(0);
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * ease));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [start, target, duration]);
  return val;
};

// ─── Stats Strip ─────────────────────────────────────────────────────────────
const StatsStrip = ({ items }: { items: { value: string; label: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.45 }}
    className="border-b border-border bg-background"
  >
    <div className="container mx-auto px-4 py-5 md:px-6 md:py-7">
      {/* Mobile: vertical stack */}
      <div className="flex flex-col divide-y divide-border sm:hidden rounded-xl border border-border overflow-hidden">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4 bg-card">
            <span className={`text-[22px] font-extrabold leading-none tabular-nums shrink-0 ${PILLAR[i].statColor}`}>
              {item.value}
            </span>
            <span className="text-xs text-muted-foreground leading-snug">{item.label}</span>
          </div>
        ))}
      </div>
      {/* Tablet+: 3-column grid */}
      <div className="hidden sm:grid sm:grid-cols-3 divide-x divide-border rounded-xl border border-border overflow-hidden max-w-2xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center px-4 py-5 md:px-6 bg-card">
            <span className={`text-[24px] md:text-[28px] font-extrabold leading-none tabular-nums ${PILLAR[i].statColor}`}>
              {item.value}
            </span>
            <span className="mt-2 text-[11px] md:text-xs text-muted-foreground leading-snug max-w-[120px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// ─── One System Banner ────────────────────────────────────────────────────────
const OneSystemBanner = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: 0.15 }}
    className="mt-5 md:mt-6 flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-r from-blue-50 via-teal-50 to-purple-50 dark:from-blue-950/40 dark:via-teal-950/40 dark:to-purple-950/40 p-4 md:p-5"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-background border border-border text-primary shadow-sm">
      <Zap className="h-5 w-5" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-foreground leading-snug mb-1">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed md:text-sm">{desc}</p>
    </div>
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Structured delivery across SAP, digital, and QA",
    "Stop shipping late, risky releases. One team accountable for digital delivery, SAP governance, and quality engineering.",
    "/"
  );

  const [activeStep, setActiveStep] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setCountersVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problemItems   = t("problems.items",        { returnObjects: true }) as { title: string; desc: string }[];
  const outcomeItems   = t("outcomes.items",         { returnObjects: true }) as { label: string; desc: string }[];
  const howWeWorkSteps = t("howWeWork.steps",        { returnObjects: true }) as { title: string; desc: string }[];
  const deliverCards   = t("whatWeDeliver.cards",    { returnObjects: true }) as { title: string; desc: string; detail?: string[] }[];
  const diffItems      = t("differentiation.items",  { returnObjects: true }) as { title: string; desc: string; contrast?: string }[];
  const statsStrip     = t("hero.statsStrip",        { returnObjects: true }) as { value: string; label: string }[];

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:h-80 md:w-80" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
          <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] hidden md:block" />
        </div>

        <div className="container relative mx-auto px-4 text-center md:px-6">
          <HeroGraphic
            labelOneTeam={t("howWeWork.globeOneTeam")}
            labelRegions={t("howWeWork.globeRegions")}
            labelHQ={t("howWeWork.globeHQ")}
          />

          {/* Pills */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-1.5 mb-5">
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:text-xs">
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Hook */}
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto max-w-2xl text-sm text-primary-foreground/70 leading-relaxed md:text-base">
            {t("hero.hook")}
          </motion.p>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 text-[30px] font-bold leading-tight text-primary-foreground md:text-[42px] lg:text-[48px]">
            {t("hero.titlePrefix")}{" "}
            <span style={{ color: "#93c5fd" }}>{t("hero.titleAccent")}</span>
          </motion.h1>

          {/* Who this is for */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-3 flex justify-center">
            <span className="inline-block rounded-lg border border-primary-foreground/20 bg-primary-foreground/[0.07] px-3 py-1.5 text-[11px] text-primary-foreground/65 leading-snug md:text-xs md:px-4">
              {t("hero.whoThisIsFor")}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
            className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/75 leading-relaxed md:text-base">
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto px-8">
                {t("hero.ctaPrimary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline"
                className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("hero.ctaSecondary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-3 text-[12px] text-primary-foreground/50 md:text-[13px]">
            {t("hero.reach")}
          </motion.p>

          {/* Stat bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.46 }}
            className="mx-auto mt-8 flex max-w-sm items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10 md:max-w-lg">
            {(t("hero.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/50 md:text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. PROOF CALLOUT
          CHANGED: proofStat is now a standalone sentence ("Ship 50–70% faster.")
          followed by proofContext as support. em dash removed from JSX.
          CTA links to /case-studies (soft curiosity), not /services.
          "See delivery examples" text comes from hero.proofLink in translation.
      ══════════════════════════════════════════════ */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-5">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
              <TrendingDown className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-foreground text-sm md:text-base">{t("hero.proofStat")}</span>
              {" "}
              <span className="text-muted-foreground text-sm md:text-base">{t("hero.proofContext")}</span>
            </div>
            <Link to="/case-studies" className="shrink-0">
              <Button variant="outline" size="sm" className="gap-1.5 w-full sm:w-auto">
                {t("hero.proofLink")} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          STATS STRIP
          Labels updated via translation files — no JSX change needed.
      ══════════════════════════════════════════════ */}
      <StatsStrip items={statsStrip} />

      {/* ══════════════════════════════════════════════
          3. PROBLEMS
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-background">
        <SectionCircles />
        <motion.div {...fadeUp(0)} className="relative hidden md:block">
          <SH eyebrow={t("problems.eyebrow")} heading={t("problems.heading")} sub={t("problems.subheading")} />
        </motion.div>
        <MobileCollapse label={t("problems.heading")} eyebrow={t("problems.eyebrow")} sub={t("problems.subheading")} defaultOpen={false}>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-2 md:mt-0">
            {problemItems.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>{problemIcons[i]}</div>
                  <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </MobileCollapse>
        <motion.div {...fadeUp(0.15)} className="relative mt-6 text-center">
          <Button variant="outline" size="sm" className="gap-1.5 w-full sm:w-auto"
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}>
            {t("problems.sampleEngagement")} <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          4. WHAT WE DELIVER
          Cards updated via translation files (desc + detail AI bullets).
          No JSX change needed — renders dynamically from t("whatWeDeliver.cards").
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <SectionCircles flip />
        <motion.div {...fadeUp(0)} className="relative hidden md:block">
          <SH eyebrow={t("whatWeDeliver.eyebrow")} heading={t("whatWeDeliver.heading")} sub={t("whatWeDeliver.subheading")} />
        </motion.div>
        <MobileCollapse label={t("whatWeDeliver.heading")} eyebrow={t("whatWeDeliver.eyebrow")} sub={t("whatWeDeliver.subheading")} defaultOpen={false}>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-2 md:mt-0">
            {deliverCards.map((card, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] w-full ${PILLAR[i].accentBar}`} />
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>{deliverIcons[i]}</div>
                  <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  {card.detail && (
                    <ul className="mt-4 pt-4 border-t border-border space-y-2">
                      {card.detail.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1 ${PILLAR[i].dotColor}`} />
                          {/* Last bullet in each card is the AI bullet — render slightly bolder */}
                          {j === card.detail!.length - 1
                            ? <span className="font-medium text-foreground">{b}</span>
                            : <span>{b}</span>
                          }
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <OneSystemBanner
            title={t("whatWeDeliver.oneSystemTitle")}
            desc={t("whatWeDeliver.oneSystemDesc")}
          />
        </MobileCollapse>
        <motion.div {...fadeUp(0.15)} className="relative mt-6 text-center">
          <Link to="/services" className="w-full sm:w-auto inline-block">
            <Button variant="outline" size="sm" className="gap-1.5 w-full sm:w-auto">
              {t("whatWeDeliver.cta")} <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          5. CASE STUDIES
      ══════════════════════════════════════════════ */}
      <div className="bg-muted/30">
        <CaseStudies />
      </div>

      {/* ══════════════════════════════════════════════
          6. WHY WE'RE DIFFERENT
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-background">
        <SectionCircles />
        <motion.div {...fadeUp(0)} className="relative hidden md:block">
          <SH eyebrow={t("differentiation.eyebrow")} heading={t("differentiation.heading")} sub={t("differentiation.subheading")} />
        </motion.div>
        <MobileCollapse label={t("differentiation.heading")} eyebrow={t("differentiation.eyebrow")} sub={t("differentiation.subheading")} defaultOpen={false}>
          <div className="relative flex flex-col gap-4 md:gap-5 mt-2 md:mt-0">
            {diffItems.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${PILLAR[i].iconBg} ${PILLAR[i].iconColor}`}>{diffIcons[i]}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-foreground mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  {item.contrast && <p className="mt-2 text-xs text-muted-foreground/60 italic">{item.contrast}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </MobileCollapse>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          7. HOW WE WORK
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="how-we-work" className="relative overflow-hidden bg-muted/30">
        <SectionCircles />
        <motion.div {...fadeUp(0)} className="relative">
          <SH eyebrow={t("howWeWork.eyebrow")} heading={t("howWeWork.heading")} sub={t("howWeWork.subheading")} />
        </motion.div>
        <div className="relative flex items-start gap-0 mb-6 mt-2">
          {howWeWorkSteps.map((step, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2 relative">
              {i < howWeWorkSteps.length - 1 && (
                <div className={`absolute left-1/2 top-5 h-px w-full transition-colors duration-300 ${i < activeStep ? PILLAR[i].accentBar.replace('bg-','bg-') : 'bg-border'}`} />
              )}
              <button onClick={() => setActiveStep(i)}
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ring-4 ring-background transition-all duration-200 ${
                  i === activeStep ? `${PILLAR[i].stepBg} text-white scale-110` :
                  i < activeStep ? 'bg-muted text-primary border-2 border-primary/30' : 'bg-muted text-muted-foreground'
                }`}>
                {i < activeStep ? <CheckCircle className="h-4 w-4" /> : i + 1}
              </button>
              <span className={`text-[11px] font-medium text-center leading-tight transition-colors ${i === activeStep ? 'text-primary' : 'text-muted-foreground'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden">
            <div className={`h-[3px] w-full ${PILLAR[activeStep].accentBar}`} />
            <div className="p-5 md:p-7">
              <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4 ${PILLAR[activeStep].iconBg} ${PILLAR[activeStep].iconColor}`}>
                {t("howWeWork.stepLabel")} {activeStep + 1} {t("howWeWork.stepOf")} {howWeWorkSteps.length}
              </div>
              <h3 className="text-[18px] font-bold text-foreground mb-3">{howWeWorkSteps[activeStep].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{howWeWorkSteps[activeStep].desc}</p>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                <Button variant="outline" size="sm" disabled={activeStep === 0}
                  onClick={() => setActiveStep(s => s - 1)} className="gap-1.5 text-xs">
                  ‹ {activeStep > 0 ? howWeWorkSteps[activeStep - 1]?.title : t("howWeWork.stepPrev")}
                </Button>
                <span className="text-xs text-muted-foreground tabular-nums">{activeStep + 1} / {howWeWorkSteps.length}</span>
                <Button variant="outline" size="sm" disabled={activeStep === howWeWorkSteps.length - 1}
                  onClick={() => setActiveStep(s => s + 1)} className="gap-1.5 text-xs">
                  {activeStep < howWeWorkSteps.length - 1 ? howWeWorkSteps[activeStep + 1]?.title : t("howWeWork.stepNext")} ›
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          8. OUTCOMES
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-background">
        <SectionCircles flip />
        <motion.div {...fadeUp(0)} className="relative hidden md:block">
          <SH heading={t("outcomes.heading")} sub={t("outcomes.subheading")} />
        </motion.div>
        <MobileCollapse label={t("outcomes.heading")} sub={t("outcomes.subheading")} defaultOpen={false} onOpen={() => setCountersVisible(true)}>
          <div ref={countersRef} className="relative grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 mt-2 md:mt-0">
            {outcomeItems.map((o, i) => {
              const targets = [70, 40, 50, 10];
              const suffixes = ["%", "%", "%", "+"];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center rounded-2xl border border-border bg-card overflow-hidden">
                  <div className={`h-[3px] w-full ${OUTCOME_ACCENT[i]}`} />
                  <div className="flex flex-col items-center gap-2 p-4 md:p-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${OUTCOME_ICON[i].bg} ${OUTCOME_ICON[i].color}`}>{outcomeIcons[i]}</div>
                    <CounterStat target={targets[i]} suffix={suffixes[i]} prefix={i === 0 ? "50–" : ""} start={countersVisible} delay={i * 150} accent={OUTCOME_ACCENT[i]} />
                    <span className="text-[11px] text-muted-foreground leading-tight">{o.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MobileCollapse>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <SectionCircles flip />
        <motion.div {...fadeUp(0)} className="relative">
          <SH eyebrow={t("faq.eyebrow")} heading={t("faq.heading")} sub={t("faq.subheading")} />
        </motion.div>
        <div className="relative mx-auto max-w-2xl space-y-2">
          {(t("faq.items", { returnObjects: true }) as { q: string; a: string }[]).map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.05)}
              className="relative rounded-2xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={openFaq === i}>
                <span className="text-sm font-semibold text-foreground leading-snug">{item.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === i ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
                    <div className="border-t border-border px-5 pb-5 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          10. CTA
          Bottom CTA uses "Explore case studies" (stronger commitment).
          This comes from t("caseStudies.viewAll") in the translation files.
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/30">
        <SectionCircles />
        <motion.div {...fadeUp(0)} className="relative max-w-2xl mx-auto text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-5">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-[26px] font-bold text-foreground leading-tight md:text-[34px]">{t("cta.heading")}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed md:text-base">{t("cta.body")}</p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://cal.com/gagan.singh/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-semibold sm:w-auto px-8">
                {t("cta.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/case-studies" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("caseStudies.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("cta.subtext")}</p>
        </motion.div>
      </SectionWrapper>

      <PartnerPanel />
    </Layout>
  );
};

export default Index;
