import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";
const SCROLL_THRESHOLD = 300;

const MobileBookCallFAB = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden"
        >
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg ring-1 ring-primary/30 transition-transform active:scale-95"
            style={{ boxShadow: "0 4px 20px hsl(var(--primary) / 0.4)" }}
          >
            {t("hero.bookCall")}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBookCallFAB;
