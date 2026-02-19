import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

export function Slide01Cover() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16 relative"
      style={{ backgroundColor: "#E7004C" }}
    >
      {/* Top micro label */}
      <motion.span
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {MICRO}
      </motion.span>

      {/* Main content */}
      <div className="flex flex-col gap-4">
        <motion.h1
          variants={slideItemVariants}
          className="font-semibold lowercase leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 9rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
          }}
        >
          ideo ideis
          <br />
          festivalul
        </motion.h1>

        <motion.div
          variants={slideItemVariants}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.5rem" }}
        >
          {/* Red accent line */}
          <span
            style={{
              display: "block",
              width: "48px",
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            o săptămână în care adolescenții își construiesc vocea, iar orașul devine scenă.
          </p>
        </motion.div>
      </div>

      {/* Bottom: ediția + scroll */}
      <div className="flex items-end justify-between">
        <motion.div variants={slideItemVariants}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            ediția
          </p>
          <p style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 600, lineHeight: 1 }}>#21</p>
        </motion.div>

        <motion.div
          variants={slideItemVariants}
          className="flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          scroll
          <span
            style={{
              display: "block",
              width: "1.5px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
