import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const benefits = [
  "asociere rară: 20 ani de consecvență, brand cultural recunoscut",
  "impact real: adolescenți din toată țara + comunitate locală implicată",
  "poveste care se vede: fotografie doc, momente, oameni, conținut autentic (nu reclamă)",
  "relevanță: curaj, educație prin cultură, comunitate (valori ușor de susținut public)",
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
            marginBottom: "1rem",
          }}
        >
          de ce să te asociezi
        </motion.h2>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
            marginBottom: "3rem",
          }}
        >
          pentru un partener
        </motion.p>

        <div className="flex flex-col gap-0">
          {benefits.map((row, i) => (
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
