import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar, ExternalLink, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const BOOK_CALL_URL = "https://cal.com/gagan.singh/15min";
const LINKEDIN_URL = "https://www.linkedin.com/in/gagansingh26/";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav.home"),     path: "/" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.about"),    path: "/about" },
    { label: t("nav.contact"),  path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">

        {/* 3-col grid */}
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1.5fr] md:gap-8">

          {/* Brand */}
          <div>
            <h3 className="mb-1.5 text-base font-bold text-foreground md:mb-3 md:text-lg">
              QualityBridge Consulting
            </h3>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground md:text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground md:mb-3 md:text-sm">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-1.5 md:gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary md:text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground md:mb-3 md:text-sm">
              {t("footer.contact")}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground md:text-sm">
              <a
                href="mailto:qualitybridgeconsulting.ca@gmail.com"
                className="flex items-start gap-1.5 break-all transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                <span>qualitybridgeconsulting.ca@gmail.com</span>
              </a>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Calendar className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                <span>{t("nav.bookCall")}</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                GTA, Canada
              </span>
            </div>
          </div>
        </div>

        {/* Translation disclaimer */}
        <div className="mt-6 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-center text-[11px] leading-relaxed text-muted-foreground md:mt-8 md:px-4 md:py-3 md:text-xs">
          <div className="flex items-start justify-center gap-1.5 md:items-center">
            <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:mt-0 md:h-4 md:w-4" />
            <span>{t("footer.translationNote")}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 border-t border-border pt-3 text-center text-[11px] text-muted-foreground md:mt-4 md:pt-5 md:text-xs">
          © {new Date().getFullYear()} QualityBridge Consulting. {t("footer.rights")}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
