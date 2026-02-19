import { useActiveSlide } from "@/hooks/useActiveSlide";

const SLIDE_LABELS = [
  "cover",
  "manifest",
  "voce",
  "cine / ce / cum",
  "concret",
  "numbers",
  "de ce aici",
  "2026",
  "track record",
  "oameni",
  "impact",
  "siguranță",
  "de ce sens",
  "contact",
];

interface SlideNavProps {
  totalSlides: number;
}

export function SlideNav({ totalSlides }: SlideNavProps) {
  const { activeSlide, goToSlide } = useActiveSlide(totalSlides);

  return (
    <nav
      aria-label="Navigare slide-uri"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 hidden md:flex"
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
              backgroundColor: activeSlide === i ? "#E7004C" : "transparent",
              border: activeSlide === i ? "none" : "1.5px solid rgba(255,255,255,0.45)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
