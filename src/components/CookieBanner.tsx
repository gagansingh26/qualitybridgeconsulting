import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// ─── Storage key — versioned so old dismissals don't suppress it ───────────
const STORAGE_KEY = "qb-cookie-v3";

// ─── Helper: safely read/write storage ────────────────────────────────────
const getConsent = (): string | null => {
  try { return localStorage.getItem(STORAGE_KEY); }
  catch { return null; }
};
const setConsent = (value: string) => {
  try { localStorage.setItem(STORAGE_KEY, value); }
  catch { /* storage blocked — still dismiss visually */ }
};

const CookieBanner = () => {
  const { t } = useTranslation();
  // Start as true so it renders immediately — hide if consent already stored
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show after a short delay only if no consent recorded
    const timer = setTimeout(() => {
      if (!getConsent()) setVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (choice: "all" | "essential") => {
    setConsent(choice);
    setVisible(false);
  };

  // Don't render anything server-side or before mount
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          // Full-width bar on mobile, corner card on md+
          className="fixed bottom-0 left-0 right-0 z-[9999] md:bottom-5 md:left-5 md:right-auto md:max-w-[360px]"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
        >
          <div className="border border-border bg-card md:rounded-2xl overflow-hidden"
               style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
            {/* Accent bar */}
            <div className="h-[3px] w-full bg-blue-500 dark:bg-blue-400" />

            <div className="p-4 md:p-5">
              {/* Header row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <Cookie className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {t("cookie.heading")}
                  </p>
                </div>
                <button
                  onClick={() => dismiss("essential")}
                  className="shrink-0 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Message */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t("cookie.message")}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1" onClick={() => dismiss("all")}>
                  {t("cookie.accept")}
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => dismiss("essential")}>
                  {t("cookie.essential")}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
