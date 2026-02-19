import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

const modules = [
  {
    label: "cine",
    text: "~200 adolescenți (15–18 ani), 8 trupe din toată țara.",
  },
  {
    label: "ce",
    text: "ateliere intense + spectacole + întâlniri cu profesioniști.",
  },
  {
    label: "cum se vede",
    text: "alexandria devine scenă: public local, outdoor, filme, discuții, murale.",
  },
];

export function Slide04Clarity() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#2c2d34" }}
    >
      <motion.span
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {MICRO}
      </motion.span>

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row flex-1 items-stretch mt-12 md:mt-0">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            variants={slideItemVariants}
            className="flex-1 flex flex-col justify-end"
            style={{
              borderTop: "1px solid #E7004C",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              padding: "2rem 2.5rem 3rem",
            }}
          >
            {/* Red marker */}
            <span
              style={{
                display: "block",
                width: "28px",
                height: "3px",
                backgroundColor: "#E7004C",
                marginBottom: "1.25rem",
              }}
            />
            <p
              className="lowercase"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {mod.label}
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              {mod.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom tag */}
      <motion.div
        variants={slideItemVariants}
        style={{
          backgroundColor: "#E7004C",
          padding: "0.5rem 1.25rem",
          display: "inline-flex",
          alignSelf: "flex-start",
          marginTop: "2.5rem",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          10.000 public local (țintă) · 800.000 reach național (țintă)
        </span>
      </motion.div>
    </div>
  );
}
