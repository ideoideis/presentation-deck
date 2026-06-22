import { useTranslation } from "react-i18next";
import { useActiveSlide } from "@/hooks/useActiveSlide";
import { SLIDE_BG } from "@/constants/slides";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function StickyHeader() {
  const { t } = useTranslation();
  const { activeSlide, goToSlide } = useActiveSlide(12);
  const theme = SLIDE_BG[activeSlide] ?? "dark";
  const textColor = theme === "white" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)";
  const hoverColor = theme === "crimson" ? "#fff" : "#E7004C";

  return (
    <header
      className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        paddingTop: "calc(var(--header-top, 0px) + max(calc(0.5rem * var(--slide-scale, 1)), env(safe-area-inset-top)))",
        paddingLeft: "max(min(1.5rem, calc(var(--slide-px, 2.5rem) * var(--slide-scale, 1))), env(safe-area-inset-left))",
        paddingRight: "max(min(1.5rem, calc(var(--slide-px, 2.5rem) * var(--slide-scale, 1))), env(safe-area-inset-right))",
        paddingBottom: "calc(0.5rem * var(--slide-scale, 1))",
      }}
    >
      <button
        onClick={() => goToSlide(0)}
        className="micro-label tracking-widest focus-visible:outline text-left min-w-0 truncate"
        style={{
          color: textColor,
          fontSize: "calc(0.6rem * var(--slide-scale, 1))",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span className="hidden sm:inline">{t("header.festivalLong")}</span>
        <span className="sm:hidden">{t("header.festivalShort")}</span>
      </button>

      <div className="flex items-center" style={{ gap: "calc(0.9rem * var(--slide-scale, 1))" }}>
        <LanguageSwitcher textColor={textColor} activeColor={hoverColor} />

        <a
          href="#slide-12"
          onClick={(e) => { e.preventDefault(); goToSlide(11); }}
          className="micro-label focus-visible:outline"
          style={{
            color: textColor,
            fontSize: "calc(0.6rem * var(--slide-scale, 1))",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "4px 0",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
        >
          {t("header.contact")}
        </a>
      </div>
    </header>
  );
}
