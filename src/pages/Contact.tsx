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

const contactCardIcons = [
  <Mail className="h-4 w-4" />,
  <Calendar className="h-4 w-4" />,
  <MapPin className="h-4 w-4" />,
];

const contactCardHrefs = [
  `mailto:${EMAIL_TO}`,
  BOOK_CALL_URL,
  undefined,
];

const contactCardValues = [
  EMAIL_TO,
  "cal.com/gagan.singh/15min",
  "GTA, Canada",
];

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

  const cardLabels = [t("contact.email"), t("contact.bookCall"), t("contact.location")];

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
        <div className="container relative mx-auto px-4 md:px-6">
          {/* Two-column on desktop: text left, illustration right */}
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-8 lg:gap-12">

            {/* Left: all hero text content */}
            <div className="flex-1 min-w-0">

              {/* Pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-1.5 md:justify-start"
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
                className="text-[28px] font-bold leading-tight text-primary-foreground md:text-[36px] lg:text-5xl"
              >
                {t("contact.heading")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:mx-0 md:text-base"
              >
                {t("contact.subheading")}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3 md:justify-start"
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
                className="mt-3 text-[13px] md:text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {t("hero.reach")}
              </motion.p>

            </div>{/* end left col */}

            {/* Right: illustration — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:flex md:flex-shrink-0 md:items-center md:justify-center"
              aria-hidden="true"
            >
              <svg
                width="220" height="180"
                viewBox="0 0 220 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: "visible" }}
              >
                <style>{`
                  @keyframes envFloat{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-8px) rotate(1.5deg)}}
                  @keyframes sparkle{0%,100%{opacity:0;transform:scale(0)}45%,55%{opacity:1;transform:scale(1)}}
                  @keyframes arrowUp{0%,100%{transform:translateY(0) rotate(-20deg) scale(1)}50%{transform:translateY(-6px) rotate(-20deg) scale(1.1)}}
                  @keyframes checkDraw{from{stroke-dashoffset:30}to{stroke-dashoffset:0}}
                  @keyframes badgePulse{0%,100%{r:14}50%{r:16}}
                  .env-g{animation:envFloat 3.4s ease-in-out infinite}
                  .sp1{animation:sparkle 2.2s ease-in-out infinite 0.2s}
                  .sp2{animation:sparkle 2.2s ease-in-out infinite 0.85s}
                  .sp3{animation:sparkle 2.2s ease-in-out infinite 1.5s}
                  .arrow-g{animation:arrowUp 2.8s ease-in-out infinite}
                  .badge-r{animation:badgePulse 2.4s ease-in-out infinite}
                  .check-path{stroke-dasharray:30;animation:checkDraw 0.6s ease-out 0.8s both}
                `}</style>

                {/* Envelope group — floats */}
                <g className="env-g">
                  {/* Drop shadow */}
                  <rect x="34" y="58" width="152" height="100" rx="11" fill="rgba(0,0,0,0.18)" transform="translate(3,4)"/>
                  {/* Body */}
                  <rect x="34" y="54" width="152" height="100" rx="11" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                  {/* Flap triangle */}
                  <path d="M34 54 L110 106 L186 54 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
                  {/* Bottom fold lines */}
                  <line x1="34" y1="154" x2="110" y2="106" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                  <line x1="186" y1="154" x2="110" y2="106" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                  {/* Message lines */}
                  <rect x="62" y="116" width="76" height="3" rx="1.5" fill="rgba(255,255,255,0.30)"/>
                  <rect x="62" y="124" width="56" height="3" rx="1.5" fill="rgba(255,255,255,0.20)"/>
                  <rect x="62" y="132" width="64" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
                </g>

                {/* Sent badge — stays fixed */}
                <circle className="badge-r" cx="170" cy="58" r="14" fill="#93c5fd"/>
                <circle cx="170" cy="58" r="18" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.3"/>
                <polyline
                  className="check-path"
                  points="163,58 168,64 178,50"
                  fill="none"
                  stroke="#1a6fd4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Sparkle dots */}
                <circle className="sp1" cx="148" cy="38" r="3.5" fill="#93c5fd"/>
                <circle className="sp2" cx="192" cy="42" r="2.5" fill="rgba(255,255,255,0.75)"/>
                <circle className="sp3" cx="196" cy="68" r="2" fill="#93c5fd"/>

                {/* Flying send arrow */}
                <g className="arrow-g" style={{ transformOrigin: "196px 32px" }}>
                  <path d="M188 38 L204 28 L197 46 Z" fill="#93c5fd" opacity="0.65"/>
                  <line x1="198" y1="32" x2="194" y2="44" stroke="#93c5fd" strokeWidth="1" opacity="0.45"/>
                </g>
              </svg>
            </motion.div>

          </div>{/* end two-col flex */}

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-xs items-center justify-center divide-x divide-white/20 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:max-w-md md:mt-10"
          >
            {(t("contact.heroStats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, i) => (
              <div key={i} className="flex flex-1 flex-col items-center px-3 md:px-5">
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
        {/* Contact info cards */}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4">
          {cardLabels.map((label, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="rounded-lg border border-border bg-card p-3 card-shadow md:p-5"
            >
              <div className="flex items-center gap-1.5 text-primary md:gap-2">
                {contactCardIcons[i]}
                <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground md:text-xs">
                  {label}
                </span>
              </div>
              {contactCardHrefs[i] ? (
                <a
                  href={contactCardHrefs[i]}
                  target={isHttpUrl(contactCardHrefs[i]!) ? "_blank" : undefined}
                  rel={isHttpUrl(contactCardHrefs[i]!) ? "noopener noreferrer" : undefined}
                  className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-card-foreground transition-colors hover:text-primary md:mt-2 md:text-sm"
                >
                  <span className="truncate">{contactCardValues[i]}</span>
                  {isHttpUrl(contactCardHrefs[i]!) && <ExternalLink className="h-2.5 w-2.5 shrink-0 md:h-3 md:w-3" />}
                </a>
              ) : (
                <p className="mt-1.5 text-[11px] font-medium text-card-foreground md:mt-2 md:text-sm">
                  {contactCardValues[i]}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          {...fadeUp(0.1)}
          className="mt-4 rounded-lg border border-border bg-card p-4 card-shadow md:mt-8 md:p-6"
        >
          <h2 className="mb-3 text-base font-semibold md:mb-4 md:text-lg">{t("contact.formHeading")}</h2>
          <div className="space-y-3 md:space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-card-foreground md:text-sm">
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
                <label className="mb-1 block text-xs font-medium text-card-foreground md:text-sm">
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
              <label className="mb-1 block text-xs font-medium text-card-foreground md:text-sm">
                {t("contact.messageLabel")}
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t("contact.messagePlaceholder")}
                rows={3}
                required
                className="text-sm"
              />
            </div>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("contact.sending")}</>
              ) : (
                <><Send className="mr-2 h-4 w-4" /> {t("contact.send")}</>
              )}
            </Button>
          </div>
        </motion.form>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
