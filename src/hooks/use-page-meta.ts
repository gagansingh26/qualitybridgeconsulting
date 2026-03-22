import { useEffect } from "react";

// ── Update this whenever the production domain changes ──────────────────────
const BASE_URL = "https://qualitybridgeconsulting.com";

export function usePageMeta(title: string, description: string, path = "") {
  useEffect(() => {
    // ── Page title ────────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: get-or-create a <meta> tag ────────────────────────────────
    const setOrCreateMeta = (
      attrKey: string,
      attrVal: string,
      contentVal: string
    ) => {
      let el = document.querySelector(`meta[${attrKey}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentVal);
    };

    // ── Standard meta description ─────────────────────────────────────────
    setOrCreateMeta("name", "description", description);

    // ── Canonical link ────────────────────────────────────────────────────
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${path}`;

    // ── Open Graph ────────────────────────────────────────────────────────
    setOrCreateMeta("property", "og:title",       title);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:url",         `${BASE_URL}${path}`);

    // ── Twitter / X card ──────────────────────────────────────────────────
    setOrCreateMeta("name", "twitter:title",       title);
    setOrCreateMeta("name", "twitter:description", description);
  }, [title, description, path]);
}