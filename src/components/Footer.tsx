import { Link, useNavigate } from "react-router-dom";
import { Mail, MapPin, Calendar, ExternalLink, Languages, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const BOOK_CALL_URL = "https://cal.com/qualitybridgeconsulting/book";
const LINKEDIN_URL  = "https://www.linkedin.com/company/qualitybridgeconsulting";
const BLOG_URL      = "https://blog.qualitybridgeconsulting.com";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHiringClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/about", { state: { scrollTo: "careers" } });
  };

  const quickLinks = [
    { label: t("nav.home"),     path: "/" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.about"),    path: "/about" },
    { label: t("nav.contact"),  path: "/contact" },
  ];

  const industries = t("footer.industries", { returnObjects: true }) as string[];
  const credItems  = t("footer.credItems",  { returnObjects: true }) as { text: string }[];

  const CRED_COLOURS = [
    "bg-blue-500 dark:bg-blue-400",
    "bg-teal-500 dark:bg-teal-400",
    "bg-purple-500 dark:bg-purple-400",
    "bg-amber-500 dark:bg-amber-400",
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-10 md:py-14">

        {/* ── Main 4-col grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_1.3fr_1.5fr] lg:gap-8">

          {/* Col 1 — Brand + industries */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex flex-col leading-tight mb-4">
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm font-bold text-primary md:text-base">QualityBridge</span>
                <span className="text-sm font-normal text-muted-foreground md:text-base"> Consulting</span>
              </div>
              <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60 md:text-[10px]">
                Build · Govern · Release
              </p>
            </Link>

            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm mb-5">
              {t("footer.tagline")}
            </p>

            {/* Industries served */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">
              {t("footer.industriesLabel")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links + blog + hiring */}
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}

              {/* ── Blog link ─────────────────────────────────────────── */}
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("nav.blog")}
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>

              {/* ── We're hiring link ──────────────────────────────────
                  Navigates to /about and passes { scrollTo: "careers" }
                  via router state. The About page reads this in a useEffect
                  and scrolls to #careers once the page has mounted.
              ─────────────────────────────────────────────────────── */}
              <Link
                to="/about"
                onClick={handleHiringClick}
                className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {/* Pulsing dot — teal signals role is actively open */}
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />
                </span>
                {t("footer.weAreHiring")}
                {/* "New" badge */}
                <span className="rounded-full bg-teal-100 dark:bg-teal-900 px-1.5 py-0.5 text-[9px] font-semibold text-teal-700 dark:text-teal-300">
                  {t("footer.hiringNew")}
                </span>
              </Link>
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.contact")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                <span>{t("nav.bookCall")}</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              <a
                href="mailto:info@qualitybridgeconsulting.com"
                className="flex items-start gap-2 break-all transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>info@qualitybridgeconsulting.com</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5 shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                GTA, Canada
              </span>
            </div>
          </div>

          {/* Col 4 — Credibility signals */}
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.whyLabel")}
            </h4>
            <div className="flex flex-col gap-3">
              {credItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${CRED_COLOURS[i]}`} />
                  <p
                    className="text-xs text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Translation disclaimer ───────────────────────────────────── */}
        <div className="mt-8 rounded-xl border border-border bg-muted/40 px-4 py-3 md:mt-10">
          <div className="flex items-start gap-2 md:items-center md:justify-center">
            <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:mt-0" />
            <p className="text-[11px] leading-relaxed text-muted-foreground md:text-xs md:text-center">
              {t("footer.translationNote")}
            </p>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-border pt-4 sm:flex-row md:mt-5 md:pt-5">
          <p className="text-[11px] text-muted-foreground md:text-xs">
            © {new Date().getFullYear()} QualityBridge Consulting. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground md:text-xs">
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {t("nav.blog")}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary flex items-center gap-1"
            >
              <Linkedin className="h-3 w-3" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
