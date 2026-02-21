import { motion } from "framer-motion";
import { ArrowRight, CheckSquare, Shield, Users, Zap, ThumbsUp, ClipboardList, AlertTriangle, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";

const uatPhases = [
  { name: "Plan", desc: "Define UAT scope, timelines, resource needs, and entry criteria." },
  { name: "Scope", desc: "Align test scenarios to business processes and risk areas." },
  { name: "Execute", desc: "Run UAT cycles with structured tracking and defect logging." },
  { name: "Triage", desc: "Daily defect triage with priority-based resolution and escalation." },
  { name: "Sign-off", desc: "Obtain formal business sign-offs against exit criteria." },
];

const keyControls = [
  { icon: <CheckSquare className="h-4 w-4" />, label: "Entry and exit criteria" },
  { icon: <AlertTriangle className="h-4 w-4" />, label: "Daily defect triage" },
  { icon: <Users className="h-4 w-4" />, label: "Business stakeholder alignment" },
  { icon: <Shield className="h-4 w-4" />, label: "Scope and change control" },
];

const outputs = [
  { icon: <FileText className="h-5 w-5" />, title: "UAT Status Reports", desc: "Regular reporting on execution progress, defect trends, and risk areas." },
  { icon: <AlertTriangle className="h-5 w-5" />, title: "Risk Logs", desc: "Documented risks with severity, ownership, and mitigation actions." },
  { icon: <ClipboardList className="h-5 w-5" />, title: "Go-Live Readiness Summary", desc: "Consolidated view of sign-offs, open items, and release recommendation." },
];

const deliverables = [
  { icon: <Shield className="h-5 w-5" />, label: "Clear scope control" },
  { icon: <Users className="h-5 w-5" />, label: "Business engagement" },
  { icon: <Zap className="h-5 w-5" />, label: "Faster defect resolution" },
  { icon: <ThumbsUp className="h-5 w-5" />, label: "Go-live confidence" },
];

const UATGovernance = () => (
  <Layout>
    <SectionWrapper>
      <h1 className="text-3xl font-bold md:text-4xl">UAT Governance Framework</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A structured operating model for UAT — from planning through sign-off — ensuring business readiness and quality alignment.
      </p>

      {/* UAT Operating Model Timeline */}
      <div className="mt-10">
        <h2 className="mb-6 text-lg font-semibold">UAT Operating Model</h2>

        {/* Horizontal flow */}
        <div className="mb-8 hidden overflow-x-auto lg:flex">
          {uatPhases.map((phase, i) => (
            <div key={i} className="flex items-center">
              <div className="flex h-12 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">
                {phase.name}
              </div>
              {i < uatPhases.length - 1 && <ArrowRight className="mx-2 h-4 w-4 text-muted-foreground" />}
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {uatPhases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-lg border border-border bg-card p-4 card-shadow"
            >
              <h3 className="text-sm font-semibold text-card-foreground">{phase.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Controls */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">Key Controls</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyControls.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {c.icon}
              </div>
              <span className="text-sm font-medium text-card-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outputs for Stakeholders */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">Outputs for Stakeholders</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {outputs.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-5 card-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                  {o.icon}
                </div>
                <h3 className="font-semibold text-card-foreground">{o.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* What Strong UAT Governance Delivers */}
    <SectionWrapper className="bg-accent/50">
      <h2 className="text-2xl font-bold md:text-3xl">What Strong UAT Governance Delivers</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
          >
            <div className="text-primary">{d.icon}</div>
            <span className="text-sm font-medium text-card-foreground">{d.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default UATGovernance;
