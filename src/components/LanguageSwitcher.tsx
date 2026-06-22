import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  /** Base text color, inherited from the active slide theme. */
  textColor: string;
  /** Color used for the currently-active language. */
  activeColor: string;
}

export function LanguageSwitcher({ textColor, activeColor }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language ?? "ro").split("-")[0];

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="no-print flex items-center"
      style={{ gap: "0.4rem" }}
    >
      {SUPPORTED_LANGUAGES.map((lng, i) => {
        const isActive = current === lng;
        return (
          <span key={lng} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {i > 0 && (
              <span
                aria-hidden="true"
                style={{ color: textColor, opacity: 0.35, fontSize: "calc(0.6rem * var(--slide-scale, 1))" }}
              >
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => i18n.changeLanguage(lng)}
              aria-pressed={isActive}
              className="micro-label focus-visible:outline"
              style={{
                // Active state stays readable on every slide background
                // (crimson/dark/white): full-strength text colour + underline.
                color: textColor,
                opacity: isActive ? 1 : 0.5,
                fontSize: "calc(0.6rem * var(--slide-scale, 1))",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: isActive ? 600 : 400,
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: "0.3em",
                textDecorationThickness: "1.5px",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "opacity 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = activeColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
              }}
            >
              {lng}
            </button>
          </span>
        );
      })}
    </div>
  );
}
