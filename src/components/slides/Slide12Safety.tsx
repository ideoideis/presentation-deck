import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const checklist = [
  "coordonare clară a grupurilor și mentorilor",
  "fluxuri de zi structurate și previzibile",
  "spații sigure, transport organizat",
  "grijă pentru energie și confort",
];

export function Slide12Safety() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex-1 flex flex-col md:flex-row gap-12 md:gap-20 items-center pt-12 md:pt-16">
        {/* Left */}
        <div className="md:w-2/5">
          <motion.div
            variants={slideItemVariants}
            style={{
              display: "inline-flex",
              backgroundColor: "#E7004C",
              padding: "0.15rem 0.55rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ color: "#fff", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              structură
            </span>
          </motion.div>

          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4rem)",
              color: "#222324",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            lucrăm cu adolescenți
          </motion.h2>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.6)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              lineHeight: 1.65,
              marginTop: "1.25rem",
              maxWidth: "32ch",
            }}
          >
            structură clară: coordonare, fluxuri de zi, spații sigure, transport organizat, grijă pentru energie și confort.
          </motion.p>
        </div>

        {/* Right: checklist */}
        <div className="md:w-3/5 flex flex-col gap-3">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1rem 1.25rem",
                border: "1px solid rgba(0,0,0,0.1)",
                backgroundColor: i === 0 ? "rgba(231,0,76,0.04)" : "transparent",
              }}
            >
              {/* Rectangle indicator */}
              <span
                style={{
                  display: "block",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#E7004C",
                  flexShrink: 0,
                }}
              />
              <p style={{ color: "#222324", fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)", fontWeight: 400 }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
