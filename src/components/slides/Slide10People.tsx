import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Square } from "lucide-react";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

const people = [
  { src: asset("/images/portraits/p1.jpg"), name: "Alex Ion", role: "co-fondator" },
  { src: asset("/images/portraits/p2.jpg"), name: "Tudor Chirilă", role: "mentor" },
  { src: asset("/images/portraits/p3.jpg"), name: "Pavel Bartoș", role: "mentor" },
  { src: asset("/images/portraits/p4.jpg"), name: "Andreea Esca", role: "invitată masterclass" },
  { src: asset("/images/portraits/p5.jpg"), name: "Maia Morgenstern", role: "invitată" },
  { src: asset("/images/portraits/p6.jpg"), name: "Ștefan Iancu", role: "participant" },
];

const VIDEO_SRC = asset("/videos/prieteni-ideo-ideis-teaser.mp4");

const PULSE_DELAY_MS = 4000;

export function Slide10People() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasEverClickedPlay, setHasEverClickedPlay] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPulseActive(true), PULSE_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const shouldPulse = pulseActive && !hasEverClickedPlay && !isVideoPlaying;

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="w-full h-full flex flex-col justify-center p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Left: headline + text */}
        <div className="md:w-1/3">
          <div
            className="flex items-center gap-4"
            style={{ marginBottom: "0.75rem" }}
          >
            <motion.h2
              variants={slideItemVariants}
              className="lowercase font-semibold leading-none"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "#222324",
                letterSpacing: "-0.02em",
                lineHeight: 0.92,
              }}
            >
              oameni
            </motion.h2>
            <motion.button
              type="button"
              className="print:hidden"
              onClick={() => {
                setHasEverClickedPlay(true);
                setIsVideoPlaying((v) => !v);
              }}
              animate={
                shouldPulse
                  ? { scale: [1, 1.28, 1], opacity: [1, 0.7, 1] }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                shouldPulse
                  ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
              aria-label={isVideoPlaying ? "Stop video" : "Play video"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                color: "#222324",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: "none",
                outline: "none",
                padding: 0,
                marginBottom: -10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#222324";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#222324";
              }}
            >
              {isVideoPlaying ? (
                <Square size={18} fill="currentColor" stroke="none" />
              ) : (
                <Play size={20} fill="currentColor" stroke="none" style={{ marginLeft: 2 }} />
              )}
            </motion.button>
          </div>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.6)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              lineHeight: 1.6,
              maxWidth: "30ch",
            }}
          >
            doar câțiva dintre oamenii care au trecut prin ideo ideis.
            <br />
            artisti, mentori, traineri și invitați care lucrează direct cu adolescenții, în roluri diferite.
          </motion.p>
        </div>

        {/* Right: portrait mosaic or video */}
        <div className="md:w-2/3 relative">
          <motion.div
            className="grid gap-0"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            animate={{ opacity: isVideoPlaying ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          >
            {people.map((p, i) => (
              <motion.div
                key={i}
                variants={slideItemVariants}
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={p.src}
                  alt={`${p.name} — ${p.role}`}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(100%) contrast(1.1)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "0.5rem 0.6rem",
                    background: "rgba(34,35,36,0.72)",
                  }}
                >
                  <p style={{ color: "#fff", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.3 }}>
                    {p.name}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {p.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-0 print:hidden"
            animate={{ opacity: isVideoPlaying ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            style={{
              pointerEvents: isVideoPlaying ? "auto" : "none",
              zIndex: isVideoPlaying ? 1 : 0,
            }}
          >
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
