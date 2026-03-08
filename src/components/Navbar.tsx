import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { FlagGB, FlagDE, FlagFR } from "@/components/FlagIcons";

const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";

const LANGUAGES = [
  { code: "en", label: "EN", Flag: FlagGB, full: "English" },
  { code: "de", label: "DE", Flag: FlagDE, full: "Deutsch" },
  { code: "fr", label: "FR", Flag: FlagFR, full: "Français" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const { t } = useTranslation();
  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("qb-lang", code);
    setLangOpen(false);
    setOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.delivery"), path: "/delivery" },
    { label: t("nav.uat"), path: "/uat" },
    { label: t("nav.release"), path: "/release" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  const linkClasses = (path: string) =>
    `rounded-md px-2.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground ${
      location.pathname === path
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex min-h-16 items-center justify-between gap-2 px-4 py-2">
        {/* Brand */}
        <Link to="/" className="shrink-0 text-base font-bold text-primary lg:text-lg">
          QualityBridge Consulting
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center gap-0.5 overflow-hidden md:flex lg:gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={linkClasses(item.path)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="hidden shrink-0 items-center gap-1 md:flex">
          {/* External CTA */}
          <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              {t("nav.bookCall")} <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </a>

          {/* Language Toggle */}
          <div className="relative ml-1">
            <button
              type="button"
              onClick={() => setLangOpen((p) => !p)}
              aria-label="Select language"
              aria-expanded={langOpen}
              className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <currentLang.Flag className="h-4 w-[26px] rounded-[3px] shadow-sm ring-1 ring-border" />
              <span>{currentLang.label}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-11 z-50 min-w-[130px] overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLang(lang.code)}
                      className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                        i18n.language === lang.code
                          ? "bg-accent/60 font-semibold text-accent-foreground"
                          : "text-card-foreground"
                      }`}
                    >
                      <lang.Flag className="h-3.5 w-[22px] rounded-[2px] object-cover shadow-sm" />
                      <span>{lang.full}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile lang quick toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((p) => !p)}
              aria-label="Select language"
              className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-background px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <currentLang.Flag className="h-3.5 w-[22px] rounded-[2px] object-cover shadow-sm" />
              <span className="text-xs font-semibold">{currentLang.label}</span>
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-11 z-50 min-w-[130px] overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLang(lang.code)}
                      className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                        i18n.language === lang.code
                          ? "bg-accent/60 font-semibold text-accent-foreground"
                          : "text-card-foreground"
                      }`}
                    >
                      <lang.Flag className="h-3.5 w-[22px] rounded-[2px] object-cover shadow-sm" />
                      <span>{lang.full}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
                {t("nav.bookCall")} <ExternalLink className="ml-1 h-3 w-3" />
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
