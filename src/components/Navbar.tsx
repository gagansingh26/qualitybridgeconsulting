import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Delivery Approach", path: "/delivery" },
  { label: "UAT Governance", path: "/uat" },
  { label: "Release Readiness", path: "/release" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const linkClasses = (path: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
      location.pathname === path
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="text-lg font-bold text-primary">
          QualityBridge Consulting
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={linkClasses(item.path)}>
              {item.label}
            </Link>
          ))}

          {/* External CTA */}
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Button size="sm">Book a Consultation <ExternalLink className="ml-1 h-3 w-3" /></Button>
          </a>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="transition-transform duration-300" style={{ display: isDark ? "none" : "flex" }}>
              <Moon className="h-4 w-4" />
            </span>
            <span className="transition-transform duration-300" style={{ display: isDark ? "flex" : "none" }}>
              <Sun className="h-4 w-4" />
            </span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={linkClasses(item.path)}
              >
                {item.label}
              </Link>
            ))}

            {/* External CTA */}
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              <Button size="sm" className="w-full">
                Book a Consultation <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </a>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
              className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
