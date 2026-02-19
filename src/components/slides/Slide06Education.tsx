import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const modules = [
  {
    label: "adolescenți",
    text: "ateliere intensive + lucru direct cu profesioniști, pe scenă și în proces",
  },
  {
    label: "copii (laboratorul ideo ideis)",
    text: "joacă și creativitate ca prim contact cu arta, în oraș",
  },
  {
    label: "profesori & comunitate",
    text: "ateliere și întâlniri care cresc publicul și îl țin aproape",
  },
  {
    label: "toate vârstele",
    text: "talk-uri, masterclass-uri, discuții după spectacole și film",
  },
];

export function Slide06Education() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.h2
        variants={slideItemVariants}
        className="lowercase font-semibold leading-none"
        style={{
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          color: "#222324",
          letterSpacing: "-0.02em",
          lineHeight: 0.95,
          marginBottom: "2rem",
        }}
      >
        educație non-formală
      </motion.h2>

      <div className="flex flex-col gap-4 md:gap-5 max-w-2xl">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            variants={slideItemVariants}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.25rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: "12px",
                height: "12px",
                backgroundColor: "#E7004C",
                flexShrink: 0,
                marginTop: "0.35rem",
              }}
            />
            <div>
              <p
                className="lowercase font-medium"
                style={{
                  color: "#222324",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.35rem",
                }}
              >
                {mod.label}
              </p>
              <p
                style={{
                  color: "rgba(34,35,36,0.65)",
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  lineHeight: 1.45,
                }}
              >
                {mod.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
