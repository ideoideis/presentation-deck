import { useActiveSlide } from "@/hooks/useActiveSlide";
import { SLIDE_BG } from "@/constants/slides";

export function StickyHeader() {
  const { activeSlide, goToSlide } = useActiveSlide(12);
  const theme = SLIDE_BG[activeSlide] ?? "dark";
  const textColor = theme === "white" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)";
  const hoverColor = theme === "crimson" ? "#fff" : "#E7004C";

  return (
    <header
      className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        paddingTop: "calc(var(--header-top, 0px) + max(0.5rem, env(safe-area-inset-top)))",
        paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
        paddingRight: "max(1.5rem, env(safe-area-inset-right))",
        paddingBottom: "0.5rem",
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
        <span className="hidden sm:inline">festivalul · ediția #21 · 29.07–05.08.26 · alexandria</span>
        <span className="sm:hidden">ideo ideis · #21 · alexandria</span>
      </button>

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
        contact
      </a>
    </header>
  );
}
