import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp, Globe, TestTube, Code, GitBranch, Monitor, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import KpiWidget from "@/components/KpiWidget";
import { usePageMeta } from "@/hooks/use-page-meta";

const valueCards = [
  { icon: <Shield className="h-5 w-5" />, title: "SAP S/4HANA & Fiori Test Strategy", desc: "End-to-end test planning aligned with SAP best practices and business process coverage." },
  { icon: <Brain className="h-5 w-5" />, title: "AI-Assisted Test Design & Optimization", desc: "Leverage generative AI to improve test coverage, reduce redundancy, and accelerate design." },
  { icon: <Users className="h-5 w-5" />, title: "UAT Governance & Stakeholder Alignment", desc: "Structured UAT coordination with clear entry/exit criteria and business sign-offs." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Metrics-Based Release Quality Gates", desc: "Data-driven go/no-go decisions using real-time KPIs and risk indicators." },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Website & Digital Experience Development",
    desc: "Modern responsive websites, web applications, and dashboards — from rapid prototypes to production-ready digital products.",
    detail: [
      "Modern responsive business websites",
      "Web applications and dashboards",
      "No-code / low-code solutions",
      "Automation-driven digital workflows",
      "UX-focused, conversion-oriented design",
      "Rapid prototyping and deployment",
    ],
  },
];

const beyondSapCapabilities = [
  { icon: <Shield className="h-4 w-4" />, label: "SAP test strategy and regression automation" },
  { icon: <Code className="h-4 w-4" />, label: "Cypress and Playwright frameworks" },
  { icon: <TestTube className="h-4 w-4" />, label: "API and integration testing" },
  { icon: <GitBranch className="h-4 w-4" />, label: "CI/CD quality gates" },
];

const outcomes = [
  { icon: <TrendingDown className="h-5 w-5" />, label: "Faster regression cycles" },
  { icon: <Shield className="h-5 w-5" />, label: "Reduced release risk" },
  { icon: <Target className="h-5 w-5" />, label: "Clear go/no-go decisions" },
  { icon: <ThumbsUp className="h-5 w-5" />, label: "Improved business confidence" },
];

const capabilityPillars = [
  { icon: <Layers className="h-4 w-4" />, label: "Enterprise Governance" },
  { icon: <TestTube className="h-4 w-4" />, label: "Automation Engineering" },
  { icon: <Monitor className="h-4 w-4" />, label: "Modern Web Development" },
  { icon: <Zap className="h-4 w-4" />, label: "Digital Transformation" },
];

const Index = () => {
  usePageMeta(
    "QualityBridge Consulting — SAP Governance, Test Automation & Web Development",
    "End-to-end digital solutions: SAP S/4HANA governance, AI-enabled test automation, and modern website & web application development. Business-focused technology delivery built to scale."
  );
  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 flex flex-wrap items-center justify-center gap-2"
          >
            {["SAP Governance & Compliance", "Test Automation & Quality Engineering", "Website & Web Application Development"].map((pill) => (
              <span key={pill} className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/90">
                {pill}
              </span>
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            End-to-End Digital Solutions for Enterprise & Modern Web
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80"
          >
            From SAP governance and AI-enabled test strategy to modern websites and web applications — business-focused technology delivery built to scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/delivery">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 font-semibold text-primary-foreground hover:bg-primary-foreground/10 bg-primary-foreground/10">
                View Delivery Approach
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Strip */}
      <div className="border-b border-t border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {capabilityPillars.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="text-primary">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Cards */}
      <SectionWrapper>
        <h2 className="text-center text-2xl font-bold md:text-3xl">What We Deliver</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
          Integrated expertise across enterprise governance, quality engineering, and digital product development.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6 card-shadow hover:card-shadow-hover transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                {c.icon}
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              {c.detail && (
                <ul className="mt-3 space-y-1">
                  {c.detail.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 shrink-0 text-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Beyond SAP */}
      <SectionWrapper className="bg-accent/50">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold md:text-3xl">Beyond SAP</h2>
          </motion.div>
          <p className="text-muted-foreground">
            We provide test automation and quality governance across enterprise and modern platforms, including SAP S/4HANA, Fiori, web applications, and APIs using Cypress and Playwright. Our approach unifies test strategy, automation, and release governance under a single operating model.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beyondSapCapabilities.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {c.icon}
              </div>
              <span className="text-sm font-medium text-card-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes */}
      <SectionWrapper>
        <h2 className="text-center text-2xl font-bold md:text-3xl">Business Outcomes</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 card-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                {o.icon}
              </div>
              <span className="font-medium text-card-foreground">{o.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-accent/50">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to Strengthen Your Release Quality?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Let's discuss how structured test governance and modern web development can reduce risk and accelerate your delivery.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button size="lg">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/release">
              <Button variant="outline" size="lg">
                View Release Framework <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
