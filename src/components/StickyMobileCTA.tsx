import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BOOK_URL = "https://cal.com/gagan.singh/15min";

const StickyMobileCTA = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 300px, hide when near footer
      const scrollY = window.scrollY;
      const nearBottom =
        window.innerHeight + scrollY >= document.body.scrollHeight - 320;
      setVisible(scrollY > 300 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          // Only show on mobile — md+ has persistent nav CTA
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="flex gap-2 border-t border-border bg-card px-4 py-3 shadow-lg">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("sticky.bookCall")} <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/contact"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {t("sticky.message")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
