import { Link, useLocation } from "react-router-dom";
import { Home, Truck, ClipboardCheck, Rocket, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MobileBottomNav = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const items = [
    { path: "/", label: t("nav.home"), Icon: Home },
    { path: "/delivery", label: t("nav.delivery"), Icon: Truck },
    { path: "/uat", label: t("nav.uat"), Icon: ClipboardCheck },
    { path: "/release", label: t("nav.release"), Icon: Rocket },
    { path: "/contact", label: t("nav.contact"), Icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85 md:hidden">
      <div className="flex items-stretch">
        {items.map(({ path, label, Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors"
            >
              {isActive && (
                <motion.span
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-x-2 top-0 h-0.5 rounded-b-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className={isActive ? "text-primary" : "text-muted-foreground"}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
