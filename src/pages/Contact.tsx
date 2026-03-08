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
  <Mail className="h-5 w-5" />,
  <Calendar className="h-5 w-5" />,
  <MapPin className="h-5 w-5" />,
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
    "Contact — QualityBridge Consulting | Book a Consultation",
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
      <SectionWrapper>
        <motion.div {...fadeUp(0)}>
          <h1 className="text-3xl font-bold md:text-4xl">{t("contact.heading")}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{t("contact.subheading")}</p>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cardLabels.map((label, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="rounded-lg border border-border bg-card p-5 card-shadow"
              >
                <div className="flex items-center gap-2 text-primary">
                  {contactCardIcons[i]}
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                </div>

                {contactCardHrefs[i] ? (
                  <a
                    href={contactCardHrefs[i]}
                    target={isHttpUrl(contactCardHrefs[i]!) ? "_blank" : undefined}
                    rel={isHttpUrl(contactCardHrefs[i]!) ? "noopener noreferrer" : undefined}
                    className="mt-2 flex items-center gap-1 text-sm font-medium text-card-foreground transition-colors hover:text-primary"
                  >
                    {contactCardValues[i]}
                    {isHttpUrl(contactCardHrefs[i]!) && <ExternalLink className="h-3 w-3 shrink-0" />}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-card-foreground">
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
            className="rounded-lg border border-border bg-card p-6 card-shadow"
          >
            <h2 className="mb-4 text-lg font-semibold">{t("contact.formHeading")}</h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  {t("contact.nameLabel")}
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("contact.namePlaceholder")}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  {t("contact.emailLabel")}
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  {t("contact.messageLabel")}
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  required
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
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
