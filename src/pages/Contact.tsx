import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Mail, MapPin, Send, Calendar, Clock, Globe, Shield, ArrowRight, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const EMAIL_TO = "qualitybridgeconsulting.ca@gmail.com";
const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";

const isHttpUrl = (href: string) => /^https?:\/\//i.test(href);

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

  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient relative overflow-hidden py-12 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] md:-right-10 md:-top-10 md:h-80 md:w-80" />
          <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/[0.07] bg-white/[0.02] md:right-10 md:top-16 md:h-52 md:w-52" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-white/[0.06] bg-white/[0.02] md:h-64 md:w-64" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">

          {/* Illustration — absolute, desktop only, right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block lg:right-4"
            aria-hidden="true"
            style={{ width: 240 }}
          >
            <svg width="240" height="200" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible", width: "100%", height: "auto" }}>
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

          {/* Pills */}
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
            className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
          >
            {t("contact.heading")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 md:text-lg"
          >
            {t("contact.subheading")}
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
                {t("hero.bookConsultation")} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                {t("cta.viewApproach")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 text-[13px] md:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {t("hero.reach")}
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-xs items-stretch justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10"
          >
            {(t("contact.heroStats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-center px-3 md:px-5">
                <span className="text-sm font-bold text-primary-foreground md:text-base leading-tight text-center">{stat.value}</span>
                <span className="mt-0.5 text-[10px] text-primary-foreground/60 md:text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Contact strip ─────────────────────────────────────────────────── */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-10">
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

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">

          {/* Left: Info cards stacked */}
          <div className="flex flex-col gap-3 md:gap-4 md:h-full">

            {/* Email */}
            <motion.a
              href={`mailto:${EMAIL_TO}`}
              {...fadeUp(0)}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 card-shadow transition-colors hover:border-primary/40 md:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">
                  {t("contact.email")}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-card-foreground transition-colors group-hover:text-primary md:text-base">
                  {EMAIL_TO}
                </p>
              </div>
            </motion.a>

            {/* Book a Call */}
            <motion.a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(0.08)}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 card-shadow transition-colors hover:border-primary/40 md:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">
                  {t("contact.bookCall")}
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm font-medium text-card-foreground transition-colors group-hover:text-primary md:text-base">
                  {t("hero.bookConsultation")}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              {...fadeUp(0.16)}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 card-shadow md:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:text-[11px]">
                  {t("contact.location")}
                </p>
                <p className="mt-1 text-sm font-medium text-card-foreground md:text-base">
                  GTA, Canada
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            {...fadeUp(0.1)}
            className="rounded-xl border border-border bg-card p-5 card-shadow md:p-6 lg:p-8"
          >
            <h2 className="mb-4 text-base font-semibold md:text-lg">{t("contact.formHeading")}</h2>
            <div className="space-y-4">
              {/* Name + Email — stack on mobile, side by side on sm+ */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">
                    {t("contact.nameLabel")}
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("contact.namePlaceholder")}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">
                    {t("contact.emailLabel")}
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("contact.emailPlaceholder")}
                    required
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-card-foreground md:text-sm">
                  {t("contact.messageLabel")}
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  required
                  className="text-sm"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="w-full sm:w-auto sm:min-w-[160px]" disabled={sending}>
                  {sending ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("contact.sending")}</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> {t("contact.send")}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.form>

        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
