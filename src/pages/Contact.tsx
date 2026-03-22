import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Mail, MapPin, Send, Calendar, Clock, Globe, Shield, ArrowRight, Loader2, ExternalLink, Linkedin, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const EMAIL_TO = "info@qualitybridgeconsulting.com";
const BOOK_CALL_URL = "https://cal.com/qualitybridgeconsulting/book";
const LINKEDIN_URL = "https://www.linkedin.com/company/qualitybridgeconsulting";

// ─── Contact card colours — left accent bar + icon only, NO tinted card bg ────
const CONTACT_COLOURS = [
  { accentBar: "bg-blue-500 dark:bg-blue-400",   iconBg: "bg-blue-100 dark:bg-blue-900",   iconColor: "text-blue-700 dark:text-blue-300",   hoverBorder: "hover:border-blue-400 dark:hover:border-blue-500"   },
  { accentBar: "bg-teal-500 dark:bg-teal-400",   iconBg: "bg-teal-100 dark:bg-teal-900",   iconColor: "text-teal-700 dark:text-teal-300",   hoverBorder: "hover:border-teal-400 dark:hover:border-teal-500"   },
  { accentBar: "bg-purple-500 dark:bg-purple-400", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-700 dark:text-purple-300", hoverBorder: "hover:border-purple-400 dark:hover:border-purple-500" },
  { accentBar: "bg-amber-500 dark:bg-amber-400",  iconBg: "bg-amber-100 dark:bg-amber-900",  iconColor: "text-amber-700 dark:text-amber-300",  hoverBorder: "hover:border-amber-400 dark:hover:border-amber-500"  },
];

// ─── Partner type card colours ────────────────────────────────────────────────
const PARTNER_COLOURS = [
  { bar: "bg-blue-500 dark:bg-blue-400",   iconBg: "bg-blue-100 dark:bg-blue-900",   iconColor: "text-blue-600 dark:text-blue-400"   },
  { bar: "bg-teal-500 dark:bg-teal-400",   iconBg: "bg-teal-100 dark:bg-teal-900",   iconColor: "text-teal-600 dark:text-teal-400"   },
  { bar: "bg-purple-500 dark:bg-purple-400", iconBg: "bg-purple-100 dark:bg-purple-900", iconColor: "text-purple-600 dark:text-purple-400" },
];

const PARTNER_ICONS = [
  <Globe className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <Handshake className="h-5 w-5" />,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, delay },
});

const Contact = () => {
  const { t } = useTranslation();
  usePageMeta(
    "QualityBridge Consulting | Get in Touch",
    "Get in touch to discuss SAP governance, test automation, or web development projects. Book a free consultation with QualityBridge Consulting.",
    "/contact"
  );

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Send error:", err);
      toast({ title: t("contact.errorTitle"), description: t("contact.errorDesc"), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const partnerTypes = t("contact.partnerTypes", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>

        <div className="container relative mx-auto px-4 text-center md:px-6">
          {/* Envelope SVG — absolute right, desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4"
            aria-hidden="true" style={{ width: 240 }}>
            <svg width="240" height="200" viewBox="0 0 220 180" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible", width: "100%", height: "auto" }}>
              <style>{`
                @keyframes envFloat{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-8px) rotate(1.5deg)}}
                @keyframes sparkle{0%,100%{opacity:0;transform:scale(0)}45%,55%{opacity:1;transform:scale(1)}}
                @keyframes arrowUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
                @keyframes checkDraw{from{stroke-dashoffset:30}to{stroke-dashoffset:0}}
                @keyframes badgePulse{0%,100%{r:14}50%{r:16.5}}
                @keyframes ringPulse{0%,100%{opacity:0.35;r:19}50%{opacity:0;r:28}}
                .env-g{animation:envFloat 3.4s ease-in-out infinite}
                .sp1{animation:sparkle 2.2s ease-in-out infinite 0.2s}
                .sp2{animation:sparkle 2.2s ease-in-out infinite 0.85s}
                .sp3{animation:sparkle 2.2s ease-in-out infinite 1.5s}
                .arrow-g{animation:arrowUp 2.8s ease-in-out infinite}
                .badge-r{animation:badgePulse 2.4s ease-in-out infinite}
                .ring-r{animation:ringPulse 2.4s ease-in-out infinite}
                .check-path{stroke-dasharray:30;animation:checkDraw 0.6s ease-out 0.8s both}
              `}</style>
              <g className="env-g">
                <rect x="37" y="62" width="148" height="98" rx="11" fill="rgba(0,0,0,0.15)" transform="translate(3,4)"/>
                <rect x="37" y="58" width="148" height="98" rx="11" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <path d="M37 58 L111 108 L185 58 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
                <line x1="37" y1="156" x2="111" y2="108" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8"/>
                <line x1="185" y1="156" x2="111" y2="108" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8"/>
                <rect x="64" y="120" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.28)"/>
                <rect x="64" y="129" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.18)"/>
                <rect x="64" y="138" width="62" height="3" rx="1.5" fill="rgba(255,255,255,0.13)"/>
              </g>
              <circle className="ring-r" cx="168" cy="56" r="19" fill="none" stroke="#93c5fd" strokeWidth="1"/>
              <circle className="badge-r" cx="168" cy="56" r="14" fill="#93c5fd"/>
              <polyline className="check-path" points="161,56 166,62 176,48" fill="none" stroke="#1860b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="sp1" cx="146" cy="36" r="3.5" fill="#93c5fd"/>
              <circle className="sp2" cx="190" cy="40" r="2.5" fill="rgba(255,255,255,0.75)"/>
              <circle className="sp3" cx="194" cy="66" r="2" fill="#93c5fd"/>
              <g className="arrow-g">
                <path d="M184 36 L200 26 L193 44 Z" fill="#93c5fd" opacity="0.6"/>
              </g>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 flex flex-wrap items-center justify-center gap-1.5">
            {(t("hero.pills", { returnObjects: true }) as string[]).map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground/90 md:px-3 md:py-1 md:text-xs">
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl">
            {t("contact.heading")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 md:text-lg">
            {t("contact.subheading")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
                {t("hero.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline"
                className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("cta.viewApproach")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}>
            {t("hero.reach")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-xs items-stretch justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10">
            {(t("contact.heroStats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-center px-3 md:px-5">
                <span className="text-center text-sm font-bold leading-tight text-primary-foreground md:text-base">{stat.value}</span>
                <span className="mt-0.5 text-center text-[10px] leading-tight text-primary-foreground/60 md:text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════════ */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-2 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-10">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Calendar className="h-4 w-4" /></span>
              <span>{t("contact.stripConsultation")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Clock className="h-4 w-4" /></span>
              <span>{t("contact.stripResponse")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Globe className="h-4 w-4" /></span>
              <span>{t("contact.stripReach")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
              <span className="shrink-0 text-primary"><Shield className="h-4 w-4" /></span>
              <span>{t("contact.stripNoCommitment")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          QUOTE
      ══════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45 }}
        className="relative overflow-hidden border-b border-border bg-background"
        style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
        </div>
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="mx-auto max-w-xl text-center">
            <svg width="28" height="22" viewBox="0 0 32 24" fill="none" className="mx-auto mb-4 opacity-20" aria-hidden="true">
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" className="text-primary"/>
            </svg>
            <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
              "Every conversation starts the same way: understanding your programme before proposing anything."
            </p>
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════
          CONTACT CARDS + FORM
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-muted/50"
        style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -right-12 top-8 h-40 w-40 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
          <div className="absolute -bottom-14 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-primary/[0.05] bg-transparent" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">

          {/* Left: contact cards */}
          <div className="flex flex-col gap-3 md:gap-4">

            {/* Book a Call — blue */}
            <motion.a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" {...fadeUp(0)}
              className={`group flex flex-1 items-start gap-0 rounded-xl border border-border bg-card overflow-hidden card-shadow transition-colors ${CONTACT_COLOURS[0].hoverBorder}`}>
              <div className={`w-1 self-stretch flex-shrink-0 ${CONTACT_COLOURS[0].accentBar}`} />
              <div className="flex items-start gap-4 p-4 md:p-5 w-full">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${CONTACT_COLOURS[0].iconBg} ${CONTACT_COLOURS[0].iconColor}`}>
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">{t("contact.bookCall")}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-medium text-card-foreground transition-colors group-hover:text-primary md:text-base">
                    {t("hero.bookConsultation")} <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Email — teal */}
            <motion.a href={`mailto:${EMAIL_TO}`} {...fadeUp(0.08)}
              className={`group flex flex-1 items-start gap-0 rounded-xl border border-border bg-card overflow-hidden card-shadow transition-colors ${CONTACT_COLOURS[1].hoverBorder}`}>
              <div className={`w-1 self-stretch flex-shrink-0 ${CONTACT_COLOURS[1].accentBar}`} />
              <div className="flex items-start gap-4 p-4 md:p-5 w-full">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${CONTACT_COLOURS[1].iconBg} ${CONTACT_COLOURS[1].iconColor}`}>
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">{t("contact.email")}</p>
                  <p className="mt-1 truncate text-sm font-medium text-card-foreground transition-colors group-hover:text-primary md:text-base">{EMAIL_TO}</p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn — purple */}
            <motion.a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" {...fadeUp(0.16)}
              className={`group flex flex-1 items-start gap-0 rounded-xl border border-border bg-card overflow-hidden card-shadow transition-colors ${CONTACT_COLOURS[2].hoverBorder}`}>
              <div className={`w-1 self-stretch flex-shrink-0 ${CONTACT_COLOURS[2].accentBar}`} />
              <div className="flex items-start gap-4 p-4 md:p-5 w-full">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${CONTACT_COLOURS[2].iconBg} ${CONTACT_COLOURS[2].iconColor}`}>
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">{t("contact.linkedin") ?? "LinkedIn"}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-medium text-card-foreground transition-colors group-hover:text-primary md:text-base">
                    QualityBridge Consulting <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Location — amber */}
            <motion.div {...fadeUp(0.24)}
              className="flex flex-1 items-start gap-0 rounded-xl border border-border bg-card overflow-hidden card-shadow">
              <div className={`w-1 self-stretch flex-shrink-0 ${CONTACT_COLOURS[3].accentBar}`} />
              <div className="flex items-start gap-4 p-4 md:p-5 w-full">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${CONTACT_COLOURS[3].iconBg} ${CONTACT_COLOURS[3].iconColor}`}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">{t("contact.location")}</p>
                  <p className="mt-1 text-sm font-medium text-card-foreground md:text-base">GTA, Canada</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: contact form */}
          <motion.form onSubmit={handleSubmit} {...fadeUp(0.1)}
            className="rounded-xl border border-border bg-card p-5 card-shadow md:p-6 lg:p-8">
            <h2 className="mb-4 text-base font-semibold md:text-lg">{t("contact.formHeading")}</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">{t("contact.nameLabel")}</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("contact.namePlaceholder")} required className="text-sm" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">{t("contact.emailLabel")}</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("contact.emailPlaceholder")} required className="text-sm" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">{t("contact.messageLabel")}</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t("contact.messagePlaceholder")} rows={5} required className="text-sm" />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="w-full sm:w-auto sm:min-w-[160px]" disabled={sending}>
                  {sending
                    ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("contact.sending")}</>
                    : <><Send className="mr-2 h-4 w-4" /> {t("contact.send")}</>}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          OPEN TO COLLABORATION
      ══════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full border border-primary/[0.07] bg-primary/[0.02]" />
          <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-primary/[0.05] bg-primary/[0.02]" />
        </div>

        {/* Header */}
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            {t("contact.partnerEyebrow")}
          </p>
          <h2 className="text-[26px] font-bold leading-tight text-foreground md:text-[34px]">
            {t("contact.partnerHeading")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("contact.partnerSubheading")}
          </p>
        </div>

        {/* Three partner type cards — 1 col mobile, 3 col desktop */}
        <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
          {partnerTypes.map((type, i) => {
            const c = PARTNER_COLOURS[i];
            return (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
                <div className={`h-[3px] w-full ${c.bar}`} />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl ${c.iconBg} ${c.iconColor}`}>
                    {PARTNER_ICONS[i]}
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-snug text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {type.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs — full width mobile, auto desktop */}
        <motion.div {...fadeUp(0.22)}
          className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full font-semibold sm:w-auto px-8">
              {t("contact.partnerCta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href={`mailto:${EMAIL_TO}`} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t("contact.partnerEmail")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <p className="relative mt-4 text-center text-xs text-muted-foreground">
          {t("contact.partnerNote")}
        </p>
      </SectionWrapper>

    </Layout>
  );
};

export default Contact;
