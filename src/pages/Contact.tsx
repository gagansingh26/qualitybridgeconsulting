import { useState } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Mail, MapPin, Send, Calendar, Loader2, ExternalLink } from "lucide-react";
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
            {t("contact.heading")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base"
          >
            {t("contact.subheading")}
          </motion.p>
        </div>
      </section>

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
