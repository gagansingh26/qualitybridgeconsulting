import { useState } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Mail, MapPin, Send, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const EMAIL_TO = "qualitybridgeconsulting.ca@gmail.com";
const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";

const contactCards = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: EMAIL_TO,
    href: `mailto:${EMAIL_TO}`,
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Book a Call",
    value: "cal.com/gagan.singh/15min",
    href: BOOK_CALL_URL,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "GTA, Canada",
    href: undefined,
  },
];

const isHttpUrl = (href: string) => /^https?:\/\//i.test(href);

const Contact = () => {
  usePageMeta(
    "Contact — QualityBridge Consulting | Book a Consultation",
    "Get in touch to discuss SAP governance, test automation, or web development projects. Book a free consultation with QualityBridge Consulting."
  );

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Send error:", err);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try emailing directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <SectionWrapper>
        <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Ready to improve your release quality? Let&apos;s start a conversation.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card p-5 card-shadow"
              >
                <div className="flex items-center gap-2 text-primary">
                  {c.icon}
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </span>
                </div>

                {c.href ? (
                  <a
                    href={c.href}
                    target={isHttpUrl(c.href) ? "_blank" : undefined}
                    rel={isHttpUrl(c.href) ? "noopener noreferrer" : undefined}
                    className="mt-2 block text-sm font-medium text-card-foreground transition-colors hover:text-primary"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-card-foreground">
                    {c.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border bg-card p-6 card-shadow"
          >
            <h2 className="mb-4 text-lg font-semibold">Send a Message</h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  Name
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">
                  Message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="mr-2 h-4 w-4" /> Send Message</>
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
