import { cn } from "@/lib/utils";

type BadgeVariant = "on-track" | "at-risk" | "blocked" | "go" | "no-go" | "conditional";

const variantStyles: Record<BadgeVariant, string> = {
  "on-track": "bg-success/10 text-success border-success/20",
  "at-risk": "bg-warning/10 text-warning border-warning/20",
  "blocked": "bg-destructive/10 text-destructive border-destructive/20",
  "go": "bg-success/10 text-success border-success/20",
  "no-go": "bg-destructive/10 text-destructive border-destructive/20",
  "conditional": "bg-warning/10 text-warning border-warning/20",
};

const StatusBadge = ({ variant, label }: { variant: BadgeVariant; label: string }) => (
  <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", variantStyles[variant])}>
    {label}
  </span>
);

export default StatusBadge;
