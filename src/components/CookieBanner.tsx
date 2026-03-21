import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const KEY = "qb-cookie-v3";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check after mount — localStorage only available client-side
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // Private browsing / storage blocked — show anyway
      setShow(true);
    }
  }, []);

  const dismiss = (choice: "all" | "essential") => {
    try { localStorage.setItem(KEY, choice); } catch { /* ignore */ }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] md:bottom-5 md:left-5 md:right-auto md:w-[340px]"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
        >
          <div className="overflow-hidden border border-border bg-card md:rounded-2xl"
               style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
            {/* Blue top bar */}
            <div className="h-[3px] w-full bg-blue-500 dark:bg-blue-400" />

            <div className="p-4">
              {/* Header */}
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <Cookie className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {t("cookie.heading")}
                  </p>
                </div>
                <button
                  onClick={() => dismiss("essential")}
                  className="shrink-0 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Message */}
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
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
