import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ro from "./locales/ro.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

export const SUPPORTED_LANGUAGES = ["ro", "en", "de"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const resources = {
  ro: { translation: ro },
  en: { translation: en },
  de: { translation: de },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ro",
    supportedLngs: [...SUPPORTED_LANGUAGES],
    // "en-US" / "de-DE" from the browser collapse to "en" / "de"
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // First visit: persisted choice → browser language → <html lang>
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: {
      useSuspense: false, // avoid suspense flashes on initial render
    },
  });

// Keep the document language in sync with the active locale.
const syncHtmlLang = (lng: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
};
syncHtmlLang(i18n.resolvedLanguage ?? i18n.language ?? "ro");
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
