import { useActiveSlide } from "@/hooks/useActiveSlide";
import { SLIDE_BG } from "@/constants/slides";

export function StickyHeader() {
  const { activeSlide, goToSlide } = useActiveSlide(14);
  const theme = SLIDE_BG[activeSlide] ?? "dark";
  const textColor = theme === "white" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)";
  const hoverColor = "#E7004C";

  return (
    <header
      className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: "transparent",
        backdropFilter: "none",
        mixBlendMode: "normal",
      }}
    >
      <button
        onClick={() => goToSlide(0)}
        className="micro-label tracking-widest focus-visible:outline"
        style={{
          color: textColor,
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        festivalul · ediția #21 · 29.07–05.08.26
      </button>

      <a
        href="#slide-14"
        onClick={(e) => { e.preventDefault(); goToSlide(13); }}
        className="micro-label focus-visible:outline"
        style={{
          color: textColor,
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "4px 0",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
      >
        contact
      </a>
    </header>
  );
}
