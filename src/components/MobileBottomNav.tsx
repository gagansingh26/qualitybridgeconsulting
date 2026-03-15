import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Mail, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";

const MobileBottomNav = () => {
  const location = useLocation();

  const items = [
    { path: "/",         label: "Home",     Icon: Home,     external: false },
    { path: "/services", label: "Services", Icon: Briefcase, external: false },
    { path: "/contact",  label: "Contact",  Icon: Mail,     external: false },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch">
        {items.map(({ path, label, Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2"
            >
              {isActive && (
                <motion.span
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-x-2 top-0 h-0.5 rounded-b-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Icon
                style={{ width: 20, height: 20 }}
                className={`transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                style={{ fontSize: 10, lineHeight: "14px", fontWeight: 500 }}
                className={`truncate-none ${isActive ? "text-primary" : "text-muted-foreground"}`}
              >
                {label}
              </span>
            </Link>
          );
        })}

        {/* Book CTA — external link */}
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2"
        >
          <CalendarCheck
            style={{ width: 20, height: 20 }}
            className="text-primary"
          />
          <span
            style={{ fontSize: 10, lineHeight: "14px", fontWeight: 500 }}
            className="text-primary"
          >
            Book
          </span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
