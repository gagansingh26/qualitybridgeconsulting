import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Shield, BarChart3, Users, CheckCircle, TrendingDown, Target, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import KpiWidget from "@/components/KpiWidget";

const valueCards = [
  { icon: <Shield className="h-5 w-5" />, title: "SAP S/4HANA & Fiori Test Strategy", desc: "End-to-end test planning aligned with SAP best practices and business process coverage." },
  { icon: <Brain className="h-5 w-5" />, title: "AI-Assisted Test Design & Optimization", desc: "Leverage generative AI to improve test coverage, reduce redundancy, and accelerate design." },
  { icon: <Users className="h-5 w-5" />, title: "UAT Governance & Stakeholder Alignment", desc: "Structured UAT coordination with clear entry/exit criteria and business sign-offs." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Metrics-Based Release Quality Gates", desc: "Data-driven go/no-go decisions using real-time KPIs and risk indicators." },
];

const outcomes = [
  { icon: <TrendingDown className="h-5 w-5" />, label: "Faster regression cycles" },
  { icon: <Shield className="h-5 w-5" />, label: "Reduced release risk" },
  { icon: <Target className="h-5 w-5" />, label: "Clear go/no-go decisions" },
  { icon: <ThumbsUp className="h-5 w-5" />, label: "Improved business confidence" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="enterprise-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            SAP Test Governance for Confident Releases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80"
          >
            Embed quality early with AI-enabled test strategy, structured UAT, and risk-based release readiness.
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

      {/* Value Cards */}
      <SectionWrapper>
        <h2 className="text-center text-2xl font-bold md:text-3xl">What We Deliver</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
          Comprehensive test governance across the SAP delivery lifecycle.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes */}
      <SectionWrapper className="bg-accent/50">
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

      {/* KPI Preview */}
      <SectionWrapper>
        <h2 className="text-center text-2xl font-bold md:text-3xl">Release Quality Snapshot</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
          Real-time KPIs driving release confidence.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiWidget label="UAT Progress" value="78%" subtext="+12% this sprint" color="primary" />
          <KpiWidget label="Open Defects" value="14" subtext="3 Critical · 5 High" color="warning" />
          <KpiWidget label="Test Coverage" value="91%" subtext="By process area" color="success" />
          <KpiWidget label="Release Risk" value="Medium" subtext="Based on 6 indicators" color="warning" />
        </div>
        <div className="mt-8 text-center">
          <Link to="/release">
            <Button variant="outline">
              View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
