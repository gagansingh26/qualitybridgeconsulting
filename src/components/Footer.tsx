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
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">QualityBridge Consulting</h3>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:qualitybridgeconsulting.ca@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" /> qualitybridgeconsulting.ca@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> GTA, Canada
              </span>
            </div>
          </div>
        </div>

        {/* Translation disclaimer */}
        <div className="mt-8 rounded-lg border border-border bg-muted/40 px-4 py-3 text-center text-xs text-muted-foreground">
          {t("footer.translationNote")}
        </div>

        <div className="mt-4 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} QualityBridge Consulting. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
