import { useLayoutEffect } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { SlideNav } from "@/components/SlideNav";
import { SlideSection } from "@/components/SlideSection";
import { Slide01Cover } from "@/components/slides/Slide01Cover";
import { Slide02Statement } from "@/components/slides/Slide02Statement";
import { Slide03Typography } from "@/components/slides/Slide03Typography";
import { Slide04Year2026 } from "@/components/slides/Slide04Year2026";
import { Slide05Clarity } from "@/components/slides/Slide05Clarity";
import { Slide06People } from "@/components/slides/Slide06People";
import { Slide07Education } from "@/components/slides/Slide07Education";
import { Slide08WhyHere } from "@/components/slides/Slide08WhyHere";
import { Slide09TrackRecord } from "@/components/slides/Slide09TrackRecord";
import { Slide10ImpactStatement } from "@/components/slides/Slide10ImpactStatement";
import { Slide11Remains } from "@/components/slides/Slide11Remains";
import { Slide12CTA } from "@/components/slides/Slide12CTA";

const DESIGN_W = 960;
const DESIGN_H = 540;
const DESIGN_RATIO = DESIGN_W / DESIGN_H; // 16:9
const TOTAL_SLIDES = 12;

const slides = [
  { id: "slide-01", component: <Slide01Cover /> },
  { id: "slide-02", component: <Slide02Statement /> },
  { id: "slide-03", component: <Slide03Typography /> },
  { id: "slide-04", component: <Slide04Year2026 /> },
  { id: "slide-05", component: <Slide05Clarity /> },
  { id: "slide-06", component: <Slide06People /> },
  { id: "slide-07", component: <Slide07Education /> },
  { id: "slide-08", component: <Slide08WhyHere /> },
  { id: "slide-09", component: <Slide09TrackRecord /> },
  { id: "slide-10", component: <Slide10ImpactStatement /> },
  { id: "slide-11", component: <Slide11Remains /> },
  { id: "slide-12", component: <Slide12CTA /> },
];

export default function Index() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Use the fluid desktop layout only when a full-width 16:9 slide already
      // fits the viewport height. Otherwise (narrow screens, or short/wide
      // windows where the slide would be taller than the viewport and slip under
      // the fixed header) render the design scaled to fit the smaller dimension.
      if (w >= DESIGN_W && w / h <= DESIGN_RATIO) {
        root.style.removeProperty("--slide-scale");
        root.removeAttribute("data-slide-fit");
      } else {
        const scale = Math.min(w / DESIGN_W, h / DESIGN_H);
        root.style.setProperty("--slide-scale", String(scale));
        root.setAttribute("data-slide-fit", "scaled");
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* Sticky header — always on top */}
      <StickyHeader />

      {/* Right-side slide nav */}
      <SlideNav totalSlides={TOTAL_SLIDES} />

      {/* Scroll-snap container */}
      <div
        id="snap-container"
        className="snap-container"
        style={{ height: "100dvh", overflowY: "scroll" }}
      >
        {slides.map((slide, i) => (
          <SlideSection
            key={slide.id}
            id={slide.id}
            data-slide-index={i}
          >
            {slide.component}
          </SlideSection>
        ))}
      </div>
    </>
  );
}
