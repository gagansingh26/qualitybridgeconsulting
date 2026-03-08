import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import de from "./locales/de";
import fr from "./locales/fr";

const LANG_KEY = "qb-lang";

const savedLang =
  typeof localStorage !== "undefined"
    ? localStorage.getItem(LANG_KEY) || "en"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, de: { translation: de }, fr: { translation: fr } },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    // Persist every language change automatically
    detection: undefined,
  });

// Always sync language changes back to localStorage
i18n.on("languageChanged", (lng) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(LANG_KEY, lng);
  }
});

export default i18n;
