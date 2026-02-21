import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import KpiWidget from "@/components/KpiWidget";
import StatusBadge from "@/components/StatusBadge";
import { Activity, Bug, CheckCircle, Cpu } from "lucide-react";

const defectTrend = [
  { week: "W1", opened: 18, closed: 5 },
  { week: "W2", opened: 24, closed: 14 },
  { week: "W3", opened: 15, closed: 20 },
  { week: "W4", opened: 12, closed: 18 },
  { week: "W5", opened: 8, closed: 15 },
  { week: "W6", opened: 6, closed: 12 },
  { week: "W7", opened: 4, closed: 9 },
];

const processCoverage = [
  { name: "Finance", progress: 92 },
  { name: "OTC", progress: 85 },
  { name: "P2P", progress: 78 },
  { name: "WM", progress: 65 },
  { name: "HR", progress: 88 },
];

const barColors = ["hsl(213,100%,47%)", "hsl(213,80%,55%)", "hsl(213,60%,60%)", "hsl(38,92%,50%)", "hsl(213,90%,50%)"];

const ReleaseReadiness = () => (
  <Layout>
    <SectionWrapper>
      <h1 className="text-3xl font-bold md:text-4xl">Release Readiness Dashboard</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Metrics-based release governance with real-time quality indicators.
      </p>

      {/* KPI Row */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KpiWidget label="Test Execution" value="84%" subtext="1,260 / 1,500 cases" icon={<Activity className="h-4 w-4" />} color="primary" />
        <KpiWidget label="Open Defects" value="14" subtext="P1: 3 · P2: 5 · P3: 6" icon={<Bug className="h-4 w-4" />} color="destructive" />
        <KpiWidget label="Business Sign-offs" value="3 / 5" subtext="Finance, OTC, HR signed" icon={<CheckCircle className="h-4 w-4" />} color="warning" />
        <KpiWidget label="Automation Coverage" value="67%" subtext="Target: 75%" icon={<Cpu className="h-4 w-4" />} color="primary" />
      </div>

      {/* Charts */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-5 card-shadow"
        >
          <h3 className="mb-4 font-semibold text-card-foreground">Defect Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={defectTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(213,15%,50%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(213,15%,50%)" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,20%,90%)", fontSize: "13px" }} />
              <Line type="monotone" dataKey="opened" stroke="hsl(0,72%,51%)" strokeWidth={2} name="Opened" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="closed" stroke="hsl(142,71%,45%)" strokeWidth={2} name="Closed" dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-5 card-shadow"
        >
          <h3 className="mb-4 font-semibold text-card-foreground">Test Progress by Business Process</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={processCoverage} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="hsl(213,15%,50%)" />
              <YAxis dataKey="name" type="category" width={60} tick={{ fontSize: 12 }} stroke="hsl(213,15%,50%)" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,20%,90%)", fontSize: "13px" }} formatter={(v: number) => `${v}%`} />
              <Bar dataKey="progress" radius={[0, 4, 4, 0]} name="Progress %">
                {processCoverage.map((_, i) => (
                  <Cell key={i} fill={barColors[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Release Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-lg border-2 border-warning bg-warning/5 p-6"
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-card-foreground">Release Recommendation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              3 open P1 defects remain and 2 business sign-offs are pending. Automation coverage is below the 75% target.
              Recommend addressing critical defects and obtaining remaining sign-offs before proceeding.
            </p>
          </div>
          <StatusBadge variant="conditional" label="CONDITIONAL GO" />
        </div>
      </motion.div>
    </SectionWrapper>
  </Layout>
);

export default ReleaseReadiness;
