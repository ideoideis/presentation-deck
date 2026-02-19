import { useActiveSlide } from "@/hooks/useActiveSlide";
import { SLIDE_BG } from "@/constants/slides";

export function StickyHeader() {
  const { activeSlide, goToSlide } = useActiveSlide(14);
  const theme = SLIDE_BG[activeSlide] ?? "dark";
  const textColor = theme === "white" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)";
  const hoverColor = "#E7004C";

  return (
    <header
      className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4"
      style={{
        background: "transparent",
        backdropFilter: "none",
        mixBlendMode: "normal",
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <button
        onClick={() => goToSlide(0)}
        className="micro-label tracking-widest focus-visible:outline text-left min-w-0 truncate max-w-[65vw] md:max-w-none"
        style={{
          color: textColor,
          fontSize: "clamp(0.5rem, 2.2vw, 0.6rem)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span className="hidden sm:inline">festivalul · ediția #21 · 29.07–05.08.26 · alexandria</span>
        <span className="sm:hidden">ideo ideis · #21 · alexandria</span>
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
