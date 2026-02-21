import { motion } from "framer-motion";
import { Brain, Shield, GitBranch, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

const focusAreas = [
  { icon: <Shield className="h-5 w-5" />, label: "SAP test governance" },
  { icon: <Brain className="h-5 w-5" />, label: "AI for quality engineering" },
  { icon: <GitBranch className="h-5 w-5" />, label: "DevTestOps transformation" },
  { icon: <BarChart3 className="h-5 w-5" />, label: "Risk-based release management" },
];

const About = () => (
  <Layout>
    <SectionWrapper>
      <h1 className="text-3xl font-bold md:text-4xl">About</h1>
      <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <p>
          I'm a Technology Delivery and Quality Engineering professional with over 10 years of experience driving AI-enabled DevTestOps, CI/CD transformation, and automation-first quality strategies. I help organizations ship faster with confidence by embedding quality earlier in the delivery lifecycle.
        </p>
        <p>
          My background spans enterprise delivery across SaaS, ERP, Insurance, HealthTech, FinTech, and e-commerce — working with platforms like Workday, SAP S/4HANA, Salesforce, and Microsoft Dynamics 365. I've led cross-regional programs across Europe, Asia, and North America, aligning product, engineering, and QA teams around shared outcomes.
        </p>
        <p>
          Today, I focus on applying Generative AI and LLMs to improve test design, accelerate automation, enable predictive defect detection, and support risk-informed, metrics-based release governance across globally distributed teams.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-accent/50">
      <h2 className="text-2xl font-bold md:text-3xl">Focus Areas</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 card-shadow"
          >
            <div className="text-primary">{f.icon}</div>
            <span className="text-sm font-medium text-card-foreground">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default About;
