import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () =>
<footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-foreground">QualityBridge Consulting</h3>
          <p className="text-sm text-muted-foreground">
            Enterprise governance, test automation, and modern web development — end-to-end digital solutions for confident delivery.
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
          { label: "Contact", path: "/contact" }].
          map((l) =>
          <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
          )}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:qualitybridgeconsulting.ca@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> qualitybridgeconsulting.ca@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> GTA, Canada
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} QualityBridge Consulting. All rights reserved.
      </div>
    </div>
  </footer>;


export default Footer;