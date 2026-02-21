import { motion } from "framer-motion";
import { CheckSquare, Clock, AlertTriangle, XCircle, Shield, Users, Zap, ThumbsUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import StatusBadge from "@/components/StatusBadge";

const timeline = [
  { phase: "UAT Cycle 1", dates: "Jan 6 – Jan 24", status: "on-track" as const },
  { phase: "UAT Cycle 2", dates: "Jan 27 – Feb 14", status: "on-track" as const },
  { phase: "UAT Cycle 3", dates: "Feb 17 – Mar 7", status: "at-risk" as const },
  { phase: "Regression", dates: "Mar 10 – Mar 21", status: "blocked" as const },
];

const entryCriteria = [
  { label: "Test environment provisioned", done: true },
  { label: "Test data prepared", done: true },
  { label: "Test cases reviewed & approved", done: true },
  { label: "SIT exit criteria met", done: true },
  { label: "UAT kickoff completed", done: false },
];

const exitCriteria = [
  { label: "95%+ test execution rate", done: false },
  { label: "Zero P1/P2 open defects", done: false },
  { label: "Business sign-off obtained", done: false },
  { label: "Defect closure rate ≥ 90%", done: false },
];

const signoffs = [
  { area: "Finance (FICO)", owner: "Sarah Chen", status: "on-track" as const },
  { area: "Order-to-Cash (OTC)", owner: "Mark Rivera", status: "on-track" as const },
  { area: "Procure-to-Pay (P2P)", owner: "Priya Patel", status: "at-risk" as const },
  { area: "Warehouse (WM)", owner: "David Kim", status: "blocked" as const },
];

const defectBoard = [
  { id: "DEF-1042", title: "Invoice posting fails for cross-company", priority: "P1", status: "blocked" as const },
  { id: "DEF-1038", title: "PO approval workflow timeout", priority: "P2", status: "at-risk" as const },
  { id: "DEF-1035", title: "Delivery note print format issue", priority: "P3", status: "on-track" as const },
  { id: "DEF-1029", title: "User role assignment delay", priority: "P2", status: "on-track" as const },
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
      <h1 className="text-3xl font-bold md:text-4xl">UAT Governance Cockpit</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Real-time visibility into UAT execution, stakeholder sign-offs, and defect resolution.
      </p>

      {/* UAT Timeline */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">UAT Cycle Timeline</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-4 card-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-card-foreground">{t.phase}</h3>
                <StatusBadge variant={t.status} label={t.status === "on-track" ? "On Track" : t.status === "at-risk" ? "At Risk" : "Blocked"} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{t.dates}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Entry/Exit Criteria */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5 card-shadow">
          <h2 className="mb-4 text-lg font-semibold">Entry Criteria</h2>
          <div className="space-y-2">
            {entryCriteria.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckSquare className={`h-4 w-4 ${c.done ? "text-success" : "text-muted-foreground"}`} />
                <span className={c.done ? "text-card-foreground" : "text-muted-foreground"}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 card-shadow">
          <h2 className="mb-4 text-lg font-semibold">Exit Criteria</h2>
          <div className="space-y-2">
            {exitCriteria.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckSquare className={`h-4 w-4 ${c.done ? "text-success" : "text-muted-foreground"}`} />
                <span className={c.done ? "text-card-foreground" : "text-muted-foreground"}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign-off Tracker */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">Business Sign-off Tracker</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Business Area</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Owner</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {signoffs.map((s, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-medium text-card-foreground">{s.area}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.owner}</td>
                  <td className="px-4 py-3">
                    <StatusBadge variant={s.status} label={s.status === "on-track" ? "On Track" : s.status === "at-risk" ? "At Risk" : "Blocked"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Defect Priority Board */}
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">Defect Priority Board</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">ID</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {defectBoard.map((d, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{d.id}</td>
                  <td className="px-4 py-3 font-medium text-card-foreground">{d.title}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold ${d.priority === "P1" ? "text-destructive" : d.priority === "P2" ? "text-warning" : "text-muted-foreground"}`}>
                      {d.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge variant={d.status} label={d.status === "on-track" ? "On Track" : d.status === "at-risk" ? "At Risk" : "Blocked"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
