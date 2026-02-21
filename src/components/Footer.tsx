import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-foreground">SAP Test Governance</h3>
          <p className="text-sm text-muted-foreground">
            AI-enabled test strategy, structured UAT, and risk-based release readiness for SAP programs.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Delivery Approach", path: "/delivery" },
              { label: "UAT Governance", path: "/uat" },
              { label: "Release Readiness", path: "/release" },
              { label: "About", path: "/about" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:gaganpsingh30@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> gaganpsingh30@gmail.com
            </a>
            <a href="https://linkedin.com/in/gagansingh26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" /> linkedin.com/in/gagansingh26
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 437.995.0068
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> GTA, Canada
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SAP Test Governance & Automation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
