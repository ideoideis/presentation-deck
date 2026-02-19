import { useState, useEffect, useCallback } from "react";

export function useActiveSlide(totalSlides: number) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = container.clientHeight;
      const index = Math.round(scrollTop / slideHeight);
      setActiveSlide(Math.min(index, totalSlides - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    const container = document.getElementById("snap-container");
    if (!container) return;
    container.scrollTo({
      top: index * container.clientHeight,
      behavior: "smooth",
    });
  }, []);

  return { activeSlide, goToSlide };
}
