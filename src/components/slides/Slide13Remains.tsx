import { useState } from "react";
import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  { text: "o generație care își folosește vocea", hover: "Mai bine de 6000 de adolescenți au crescut alături de Ideo Ideis." },
  { text: "un oraș care se adună în jurul culturii", hover: "Alexandria respiră alt ritm. Săli de sport devin spații de ateliere, curțile se transformă în contexte de dialog." },
  { text: "o poveste care circulă natural, ani la rând", hover: "Impactul nu se încheie odată cu festivalul, continuă prin evenimentele de pe tot parcursul anului." },
];

export function Slide13Remains() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#0d0d0e",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
      }}
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
            marginBottom: "2.5rem",
            marginTop: "0.5rem",
          }}
        >
          ce{" "}
          <span style={{ color: "#E7004C" }}>rămâne</span>
        </motion.h2>

        <div className="flex flex-col gap-0">
          {rows.map((row, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div
                key={i}
                variants={slideItemVariants}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "1.25rem 0",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  cursor: "default",
                  transition: "background-color 0.22s ease",
                  backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "transparent",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    style={{
                      display: "block",
                      width: "3px",
                      height: "1.5rem",
                      backgroundColor: isHovered ? "#E7004C" : "rgba(255,255,255,0.2)",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                      transition: "background-color 0.22s",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        color: isHovered ? "#fff" : "rgba(255,255,255,0.75)",
                        fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        letterSpacing: "-0.01em",
                        transition: "color 0.22s",
                      }}
                    >
                      {row.text}
                    </p>
                    {isHovered && row.hover && (
                      <p
                        style={{
                          color: "rgba(231,0,76,0.85)",
                          fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                          fontStyle: "italic",
                          marginTop: "0.5rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {row.hover}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: "2rem",
          paddingBottom: "0.25rem",
        }}
      >
        20 ani · consecvență
      </motion.div>
    </div>
  );
}
