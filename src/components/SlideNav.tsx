import { useActiveSlide } from "@/hooks/useActiveSlide";
import { SLIDE_BG } from "@/constants/slides";

const SLIDE_LABELS = [
  "cover",
  "manifest",
  "voce",
  "ce se întâmplă",
  "ediția #21",
  "de ce aici",
  "2026",
  "proof",
  "oameni",
  "citat",
  "impact",
  "pentru partener",
  "contact",
];

interface SlideNavProps {
  totalSlides: number;
}

export function SlideNav({ totalSlides }: SlideNavProps) {
  const { activeSlide, goToSlide } = useActiveSlide(totalSlides);
  const theme = SLIDE_BG[activeSlide] ?? "dark";
  const activeColor = theme === "crimson" ? "#fff" : "#E7004C";
  const inactiveBorder = theme === "white" ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.45)";

  return (
    <>
      {/* Desktop: right-side nav */}
      <nav
        aria-label="Navigare slide-uri"
        className="no-print fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 hidden md:flex"
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}: ${SLIDE_LABELS[i] ?? ""}`}
            title={SLIDE_LABELS[i]}
            className="group flex items-center gap-2 focus-visible:outline outline-2 outline-offset-2"
            style={{ outlineColor: "#E7004C" }}
          >
            <span
              className="transition-all duration-200"
              style={{
                display: "block",
                width: activeSlide === i ? "28px" : "14px",
                height: "3px",
                backgroundColor: activeSlide === i ? activeColor : "transparent",
                border: activeSlide === i ? "none" : `1.5px solid ${inactiveBorder}`,
              }}
            />
          </button>
        ))}
      </nav>

      {/* Mobile: bottom dots — minimal, deck-friendly */}
      <nav
        aria-label="Slide curent"
        className="no-print fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 pb-6 md:hidden"
        style={{
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="flex items-center justify-center p-2 -m-2 touch-manipulation focus-visible:outline outline-2 outline-offset-2"
            style={{ outlineColor: "#E7004C" }}
          >
            <span
              className="transition-all duration-200 rounded-full"
              style={{
                width: activeSlide === i ? "8px" : "6px",
                height: "6px",
                backgroundColor: activeSlide === i ? activeColor : inactiveBorder,
                opacity: activeSlide === i ? 1 : 0.6,
              }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
