import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Moon, Sun, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { FlagGB, FlagDE, FlagFR } from "@/components/FlagIcons";

const BOOK_CALL_URL = "https://cal.com/qualitybridgeconsulting/book";
const BLOG_URL      = "https://blog.qualitybridgeconsulting.com";

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
    { label: t("nav.home"),     path: "/" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.about"),    path: "/about" },
    { label: t("nav.contact"),  path: "/contact" },
  ];

  const linkClasses = (path: string) =>
    `rounded-md px-3 py-1.5 text-[14px] font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground ${
      location.pathname === path
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex min-h-14 items-center justify-between gap-2 px-3 py-1.5 lg:px-6">
        {/* Brand */}
        <Link to="/" className="shrink-0 leading-tight">
          <div className="flex items-baseline">
            <span className="text-sm font-bold text-primary lg:text-base">QualityBridge</span>
            <span className="text-sm font-normal text-muted-foreground lg:text-base"> Consulting</span>
          </div>
          <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground/70 lg:text-[10px]">
            Build · Govern · Release
          </p>
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center md:flex" style={{ gap: "24px" }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={linkClasses(item.path)}>
              {item.label}
            </Link>
          ))}

          {/* ── Blog link — external, opens in new tab ── */}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 text-[14px] font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground flex items-center gap-1"
          >
            {t("nav.blog")}
            <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
          </a>
        </div>

        {/* Right-side actions — desktop */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          {/* External CTA */}
          <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              {t("nav.bookCall")} <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </a>

          {/* Language Toggle */}
          <div className="relative">
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
                      <lang.Flag className="h-[18px] w-[28px] rounded-[3px] shadow-sm ring-1 ring-border" />
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Mobile lang quick toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((p) => !p)}
              aria-label="Select language"
              className="flex h-8 items-center gap-1 rounded-full border border-border bg-background px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <currentLang.Flag className="h-4 w-[22px] rounded-[3px] shadow-sm ring-1 ring-border" />
              <span className="hidden text-xs font-semibold xs:inline">{currentLang.label}</span>
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
                      <lang.Flag className="h-[18px] w-[28px] rounded-[3px] shadow-sm ring-1 ring-border" />
                      <span>{lang.full}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile dark mode toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col p-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`rounded-md px-4 py-[14px] text-[16px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* ── Blog link — mobile menu ── */}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-4 py-[14px] text-[16px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              {t("nav.blog")}
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60 ml-auto" />
            </a>

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
