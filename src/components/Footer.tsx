import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav.delivery"), path: "/delivery" },
    { label: t("nav.uat"), path: "/uat" },
    { label: t("nav.release"), path: "/release" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">

        {/* 3-col on md+, stacked on mobile with tighter spacing */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="mb-1.5 text-base font-bold text-foreground md:mb-3 md:text-lg">
              QualityBridge Consulting
            </h3>
            <p className="text-xs text-muted-foreground md:text-sm">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground md:mb-3 md:text-sm">
              {t("footer.quickLinks")}
            </h4>
            {/* 2-column link grid on mobile to save vertical space */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 md:flex md:flex-col md:gap-2">
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
            <div className="flex flex-col gap-1.5 text-xs text-muted-foreground md:gap-2 md:text-sm">
              <a
                href="mailto:qualitybridgeconsulting.ca@gmail.com"
                className="flex items-start gap-1.5 break-all transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                <span>qualitybridgeconsulting.ca@gmail.com</span>
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
          {t("footer.translationNote")}
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
