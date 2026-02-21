import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KpiWidgetProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: ReactNode;
  color?: "primary" | "success" | "warning" | "destructive";
}

const colorMap = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
};

const KpiWidget = ({ label, value, subtext, icon, color = "primary" }: KpiWidgetProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="rounded-lg border border-border bg-card p-5 card-shadow hover:card-shadow-hover transition-shadow"
  >
    <div className="flex items-start justify-between">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      {icon && <span className="text-muted-foreground">{icon}</span>}
    </div>
    <p className={`mt-2 text-3xl font-bold ${colorMap[color]}`}>{value}</p>
    {subtext && <p className="mt-1 text-xs text-muted-foreground">{subtext}</p>}
  </motion.div>
);

export default KpiWidget;
