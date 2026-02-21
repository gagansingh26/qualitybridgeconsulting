import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <Button size="sm">Book a Consultation</Button>
          </a>
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
                Book a Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
