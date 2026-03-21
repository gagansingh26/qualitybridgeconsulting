import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, X, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const PartnerPanel = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const partnerTypes = t("contact.partnerTypes", { returnObjects: true }) as
    { title: string; desc: string }[];

  const bars = [
    "bg-blue-400",
    "bg-teal-400",
    "bg-purple-400",
  ];
  const iconColours = [
    "bg-blue-500/20 text-blue-100",
    "bg-teal-500/20 text-teal-100",
    "bg-purple-500/20 text-purple-100",
  ];

  return (
    // Outer wrapper: always fixed to right edge, vertically centred
    // Width is 0 when closed (tab is absolutely positioned), w-72 when open
    <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">

      {/* ── Tab — absolutely positioned off the right edge when panel is closed ── */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.button
            key="tab"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            aria-label="Open collaboration panel"
            className="absolute right-0 flex flex-col items-center gap-2 rounded-l-xl border border-r-0 px-2 py-4 shadow-lg transition-opacity hover:opacity-90"
            style={{
              background: "#006cf0",
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            <Handshake className="h-4 w-4 text-white/90" />
            <span
              className="text-[10px] font-semibold uppercase tracking-widest text-white/90"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {t("contact.partnerEyebrow")}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Panel — slides in from right, fixed width ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ x: 288 }}
            animate={{ x: 0 }}
            exit={{ x: 288 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="w-72 rounded-l-2xl border-r-0 overflow-hidden shadow-xl"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {/* Hero-blue header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#006cf0" }}
            >
              <div className="flex items-center gap-2">
                <Handshake className="h-4 w-4 text-white/90" />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/90">
                  {t("contact.partnerEyebrow")}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* White/card body */}
            <div className="bg-card p-4 space-y-4">
              <p className="text-sm font-semibold text-foreground leading-snug">
                {t("contact.partnerHeading")}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("contact.partnerSubheading")}
              </p>

              {/* Partner type rows */}
              <div className="space-y-2">
                {partnerTypes.map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3 overflow-hidden relative"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${bars[i]}`} />
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ml-2 ${iconColours[i]}`}
                         style={{ background: i === 0 ? "rgba(59,130,246,0.15)" : i === 1 ? "rgba(20,184,166,0.15)" : "rgba(139,92,246,0.15)" }}>
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-xs font-medium text-foreground leading-snug">{type.title}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to="/contact" onClick={() => setOpen(false)} className="block">
                <Button size="sm" className="w-full gap-1.5">
                  {t("contact.partnerCta")} <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>

              <p className="text-[11px] text-muted-foreground text-center">
                {t("contact.partnerNote")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerPanel;
