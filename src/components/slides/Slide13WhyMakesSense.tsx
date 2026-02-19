import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  "investiție în adolescenți, nu doar în eveniment",
  "brand care susține curajul și educația prin cultură",
  "vizibilitate națională + impact local autentic",
  "un proiect cu istoric și consecvență",
];

export function Slide13WhyMakesSense() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#E7004C" }}
    >
      <div className="flex-1 flex flex-col justify-center pt-12 md:pt-16">
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            marginBottom: "3rem",
          }}
        >
          de ce are sens
        </motion.h2>

        <div className="flex flex-col gap-0">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "3px",
                  height: "2rem",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "#fff",
                  fontSize: "clamp(1rem, 2vw, 1.55rem)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                {row}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
