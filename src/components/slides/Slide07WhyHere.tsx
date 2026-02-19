import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

export function Slide07WhyHere() {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row"
      style={{ backgroundColor: "#222324" }}
    >
      {/* Left: photo with red frame */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src="/images/crowd-bw.jpg"
          alt="Public outdoor la alexandria"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.2)", opacity: 0.6 }}
        />
        {/* Red frame */}
        <motion.div
          variants={slideItemVariants}
          style={{
            position: "absolute",
            inset: "2.5rem",
            border: "1.5px solid #E7004C",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Right: text */}
      <div
        className="flex flex-col justify-between p-10 md:p-14"
        style={{ minWidth: "clamp(280px, 40vw, 580px)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
      >
        <motion.span
          variants={slideItemVariants}
          className="micro-label"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {MICRO}
        </motion.span>

        <div>
          <motion.span
            variants={slideItemVariants}
            style={{
              display: "inline-block",
              backgroundColor: "#E7004C",
              color: "#fff",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.15rem 0.55rem",
              marginBottom: "1.5rem",
            }}
          >
            locație
          </motion.span>

          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            de ce
            <br />
            <span style={{ color: "#E7004C" }}>aici</span>
          </motion.h2>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
              lineHeight: 1.65,
              maxWidth: "38ch",
            }}
          >
            în alexandria, cultura nu se întâmplă „în afara vieții". intră în oraș, în spații obișnuite, și le schimbă sensul.
          </motion.p>
        </div>

        <motion.span
          variants={slideItemVariants}
          className="micro-label"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          alexandria · teleorman · românia
        </motion.span>
      </div>
    </div>
  );
}
