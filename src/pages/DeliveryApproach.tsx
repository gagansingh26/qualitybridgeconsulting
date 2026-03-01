import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Cpu, Bug, Users, GitBranch, Brain, Code, TestTube, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { usePageMeta } from "@/hooks/use-page-meta";

const phases = [
  { name: "Plan", desc: "Test strategy & scope alignment with business stakeholders.", color: "bg-primary" },
  { name: "SIT", desc: "Automation-first regression planning and structured SIT execution.", color: "bg-info" },
  { name: "UAT", desc: "UAT coordination, business sign-offs, and defect governance.", color: "bg-success" },
  { name: "Release", desc: "Risk-based release governance with quality gate enforcement.", color: "bg-warning" },
  { name: "Hypercare", desc: "Post go-live monitoring, defect triage, and stabilization.", color: "bg-destructive" },
];

const capabilities = [
  { icon: <CheckCircle className="h-5 w-5" />, label: "Test planning for ERP programs" },
  { icon: <Bug className="h-5 w-5" />, label: "Defect triage leadership" },
  { icon: <Users className="h-5 w-5" />, label: "Stakeholder reporting & metrics" },
  { icon: <GitBranch className="h-5 w-5" />, label: "CI/CD quality gates" },
  { icon: <Brain className="h-5 w-5" />, label: "AI for test optimization" },
];

const automationItems = [
  { icon: <Settings className="h-5 w-5" />, label: "Automation-first regression planning" },
  { icon: <Code className="h-5 w-5" />, label: "Cypress and Playwright implementation" },
  { icon: <Cpu className="h-5 w-5" />, label: "SAP automation alignment" },
  { icon: <GitBranch className="h-5 w-5" />, label: "CI/CD integration and quality gates" },
];

const DeliveryApproach = () => {
  usePageMeta(
    "Delivery Approach — QualityBridge Consulting | Test Strategy & Automation",
    "Structured test delivery lifecycle from planning through hypercare — SAP, web, and API automation using Cypress, Playwright, and CI/CD quality gates.",
    "/delivery"
  );
  return (
  <Layout>
    <SectionWrapper>
      <h1 className="text-3xl font-bold md:text-4xl">Delivery Approach</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A structured lifecycle from planning through hypercare — embedding quality at every stage.
      </p>

      {/* Timeline */}
      <div className="relative mt-12">
        <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:block" />
        <div className="space-y-8 md:ml-12">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex gap-4"
            >
              <div className="hidden md:block">
                <div className={`absolute -left-12 mt-1.5 h-4 w-4 rounded-full ${phase.color} ring-4 ring-background`} />
              </div>
              <div className="flex-1 rounded-lg border border-border bg-card p-5 card-shadow">
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${phase.color} md:hidden`} />
                  <h3 className="font-semibold text-card-foreground">{phase.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Horizontal flow */}
      <div className="mt-12 hidden overflow-x-auto lg:flex">
        {phases.map((phase, i) => (
          <div key={i} className="flex items-center">
            <div className={`flex h-12 items-center rounded-lg px-5 text-sm font-semibold text-primary-foreground ${phase.color}`}>
              {phase.name}
            </div>
            {i < phases.length - 1 && <ArrowRight className="mx-2 h-4 w-4 text-muted-foreground" />}
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Test Automation Strategy */}
    <SectionWrapper className="bg-accent/50">
      <h2 className="text-2xl font-bold md:text-3xl">Test Automation Strategy</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Cross-platform automation across SAP, web, and API layers using modern frameworks.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {automationItems.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              {c.icon}
            </div>
            <span className="text-sm font-medium text-card-foreground">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* Core Capabilities */}
    <SectionWrapper>
      <h2 className="text-2xl font-bold md:text-3xl">Core Capabilities</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
          >
            <div className="text-primary">{c.icon}</div>
            <span className="text-sm font-medium text-card-foreground">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
  );
};

export default DeliveryApproach;
