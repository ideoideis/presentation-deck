import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

export function Slide03Typography() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.span
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(0,0,0,0.35)" }}
      >
        {MICRO}
      </motion.span>

      <div>
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(5rem, 16vw, 15rem)",
            color: "#222324",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
          }}
        >
          exprimă
        </motion.h2>
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(5rem, 16vw, 15rem)",
            color: "#E7004C",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
          }}
        >
          ce ești
        </motion.h2>
      </div>

      <motion.div variants={slideItemVariants} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
        <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#E7004C", marginTop: "0.6rem", flexShrink: 0 }} />
        <p
          style={{
            color: "#222324",
            fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
            maxWidth: "42ch",
            lineHeight: 1.55,
            opacity: 0.7,
          }}
        >
          o săptămână în care adolescenții își construiesc vocea.
        </p>
      </motion.div>
    </div>
  );
}
