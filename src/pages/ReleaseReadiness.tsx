import { motion } from "framer-motion";
import { ClipboardCheck, Bug, Users, Cpu, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";
import { usePageMeta } from "@/hooks/use-page-meta";

const trackItems = [
  { icon: <ClipboardCheck className="h-5 w-5" />, title: "Test Execution Status", desc: "Tracking test progress by scope area — SIT, UAT, regression — with clear completion criteria for each phase." },
  { icon: <Bug className="h-5 w-5" />, title: "Defects by Severity & Impact", desc: "Monitoring open defects by priority and business impact to ensure critical issues are resolved before release." },
  { icon: <Users className="h-5 w-5" />, title: "Business Sign-offs & Readiness", desc: "Tracking stakeholder approvals across business areas with clear accountability and escalation paths." },
  { icon: <Cpu className="h-5 w-5" />, title: "Automation Coverage for Regression", desc: "Measuring automation progress against regression scope to ensure sustainable, repeatable test execution." },
];

const releaseStatuses = [
  { variant: "on-track" as const, label: "GO", desc: "All quality gates met. No critical defects. Business sign-offs complete. Automation targets achieved." },
  { variant: "conditional" as const, label: "CONDITIONAL GO", desc: "Minor risks identified. Some sign-offs pending or low-priority defects remain. Mitigation plans in place." },
  { variant: "blocked" as const, label: "NO-GO", desc: "Critical blockers present. Open P1/P2 defects, missing sign-offs, or insufficient test coverage." },
];

const ReleaseReadiness = () => {
  usePageMeta(
    "Release Readiness Framework — QualityBridge Consulting",
    "Risk-based release governance with structured go/no-go decision models. Track test coverage, defect severity, automation metrics, and business sign-offs for confident releases.",
    "/release"
  );
  return (
  <Layout>
    <SectionWrapper>
      <h1 className="text-3xl font-bold md:text-4xl">Release Readiness Framework</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A structured governance model for SAP S/4HANA programmes — consolidating test coverage, defect resolution, and business readiness into a controlled, risk-based release decision.
      </p>
      <p className="mt-2 text-sm text-muted-foreground/70">
        Supporting SAP implementation partners across Europe and North America.
      </p>

      {/* What We Track */}
      <div className="mt-10">
        <h2 className="mb-6 text-xl font-semibold">What We Track</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {trackItems.map((item, i) => (
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
                  {item.icon}
                </div>
                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Release Decision Model */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold">Release Decision Model</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {releaseStatuses.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-5 card-shadow"
            >
              <div className="mb-3">
                <StatusBadge variant={s.variant} label={s.label} />
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explanation Panel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-lg border border-border bg-accent/50 p-6"
      >
        <h3 className="text-lg font-semibold text-card-foreground">How Release Decisions Are Governed</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Each release recommendation is derived from structured quality gate assessments — evaluating risk indicators, open defect severity, business unit readiness, and test coverage thresholds.
          The resulting go/no-go position is transparent, evidence-based, and formally aligned with business stakeholder sign-off requirements.
        </p>
      </motion.div>
    </SectionWrapper>
  </Layout>
  );
};

export default ReleaseReadiness;
