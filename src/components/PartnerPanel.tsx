import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, X, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// FIX: The original code put position:fixed + top:50% + transform:translateY(-50%)
// directly on motion.* elements. Framer Motion overwrites the entire CSS transform
// property when animating x, which strips translateY(-50%) and breaks vertical
// centering on both the tab and the panel. The fix wraps each in a plain <div>
// that owns all positioning; the motion elements inside only animate x.

const PartnerPanel = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const partnerTypes = t("contact.partnerTypes", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  const bars = ["bg-blue-400", "bg-teal-400", "bg-purple-400"];
  const iconBgs = [
    "rgba(59,130,246,0.15)",
    "rgba(20,184,166,0.15)",
    "rgba(139,92,246,0.15)",
  ];
  const iconColors = ["text-blue-100", "text-teal-100", "text-purple-100"];

  return (
    <>
      {/* ── Tab ──────────────────────────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {!open && (
          <div
            style={{
              position: "fixed",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 50,
            }}
          >
            <motion.button
              key="tab"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(true)}
              aria-label="Open collaboration panel"
              style={{
                background: "#006cf0",
                borderColor: "rgba(255,255,255,0.15)",
              }}
              className="flex flex-col items-center gap-2 rounded-l-xl border border-r-0 px-2 py-4 shadow-lg hover:opacity-90 transition-opacity"
            >
              <Handshake className="h-4 w-4 text-white/90" />
              <span
                className="text-[10px] font-semibold uppercase tracking-widest text-white/90"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {t("contact.partnerEyebrow")}
              </span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* ── Panel ────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <div
            style={{
              position: "fixed",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 50,
            }}
          >
            <motion.div
              key="panel"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRight: "none",
              }}
              className="w-72 rounded-l-2xl overflow-hidden shadow-xl"
            >
              {/* Blue header */}
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

              {/* Card body — bg-card + text-foreground handle light/dark automatically */}
              <div className="bg-card p-4 space-y-4">
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {t("contact.partnerHeading")}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("contact.partnerSubheading")}
                </p>

                <div className="space-y-2">
                  {partnerTypes.map((type, i) => (
                    <div
                      key={i}
                      className="relative flex items-center gap-2.5 rounded-xl border border-border bg-background p-3 overflow-hidden"
                    >
                      <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${bars[i]}`} />
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ml-2 ${iconColors[i]}`}
                        style={{ background: iconBgs[i] }}
                      >
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-xs font-medium text-foreground leading-snug">
                        {type.title}
                      </p>
                    </div>
                  ))}
                </div>

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
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PartnerPanel;
