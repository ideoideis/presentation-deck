import { StickyHeader } from "@/components/StickyHeader";
import { SlideNav } from "@/components/SlideNav";
import { SlideSection } from "@/components/SlideSection";
import { Slide01Cover } from "@/components/slides/Slide01Cover";
import { Slide02Statement } from "@/components/slides/Slide02Statement";
import { Slide03Typography } from "@/components/slides/Slide03Typography";
import { Slide04Clarity } from "@/components/slides/Slide04Clarity";
import { Slide05HowItLooks } from "@/components/slides/Slide05HowItLooks";
import { Slide07WhyHere } from "@/components/slides/Slide07WhyHere";
import { Slide08Year2026 } from "@/components/slides/Slide08Year2026";
import { Slide09TrackRecord } from "@/components/slides/Slide09TrackRecord";
import { Slide10People } from "@/components/slides/Slide10People";
import { Slide11ImpactStatement } from "@/components/slides/Slide11ImpactStatement";
import { Slide13Remains } from "@/components/slides/Slide13Remains";
import { Slide14CTA } from "@/components/slides/Slide14CTA";
import { Slide06Education } from "@/components/slides/Slide06Education";

const TOTAL_SLIDES = 13;

const slides = [
  { id: "slide-01", component: <Slide01Cover /> },
  { id: "slide-02", component: <Slide02Statement /> },
  { id: "slide-03", component: <Slide03Typography /> },
  { id: "slide-04", component: <Slide04Clarity /> },
  { id: "slide-05", component: <Slide05HowItLooks /> },
  { id: "slide-06", component: <Slide06Education /> },
  { id: "slide-07", component: <Slide07WhyHere /> },
  { id: "slide-08", component: <Slide08Year2026 /> },
  { id: "slide-09", component: <Slide09TrackRecord /> },
  { id: "slide-10", component: <Slide10People /> },
  { id: "slide-11", component: <Slide11ImpactStatement /> },
  { id: "slide-12", component: <Slide13Remains /> },
  { id: "slide-13", component: <Slide14CTA /> },
];

export default function Index() {
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
