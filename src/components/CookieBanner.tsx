import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "qb-cookie-consent-v2";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on first paint
    const timer = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (choice: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[60] md:bottom-4 md:left-4 md:right-auto md:max-w-sm"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="border border-border bg-card md:rounded-2xl shadow-lg overflow-hidden">
            {/* Blue accent top bar */}
            <div className="h-[3px] w-full bg-blue-500 dark:bg-blue-400" />

            <div className="p-4 md:p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
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
                  className="shrink-0 rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Message */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t("cookie.message")}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  size="sm"
                  className="flex-1 min-w-[100px]"
                  onClick={() => dismiss("all")}
                >
                  {t("cookie.accept")}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 min-w-[100px]"
                  onClick={() => dismiss("essential")}
                >
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
