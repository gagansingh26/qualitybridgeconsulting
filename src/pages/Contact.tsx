import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const contactCards = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "gaganpsingh30@gmail.com", href: "mailto:gaganpsingh30@gmail.com" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/gagansingh26", href: "https://linkedin.com/in/gagansingh26" },
  { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "437.995.0068", href: "tel:4379950068" },
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "GTA, Canada", href: undefined },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SectionWrapper>
        <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Ready to improve your SAP release quality? Let's start a conversation.
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
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{c.label}</span>
                </div>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm font-medium text-card-foreground hover:text-primary transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-card-foreground">{c.value}</p>
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
                <label className="mb-1 block text-sm font-medium text-card-foreground">Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-card-foreground">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={4} required />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Submit
              </Button>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
