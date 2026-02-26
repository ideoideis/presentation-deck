import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  { text: "mai multă integrare a comunității din Alexandria în activitățile festivalului", accent: "integrare" },
  { text: "experiență mai bună pentru participanți și public: ritm sănătos, acces larg", accent: "experiență" },
  { text: "vizibilitate națională sporită și colaborări cu impact clar", accent: "vizibilitate" },
];

export function Slide04Year2026() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#fff",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
      }}
    >
      <div className="flex-1 flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-6 md:mt-10">
        {/* Left: piața 2026 text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <motion.h2
            variants={slideItemVariants}
            className="font-semibold lowercase leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#E7004C",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            2026
          </motion.h2>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "#222324",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            În 2026, piața devine centrul festivalului.
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "#222324",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            Un loc deschis de schimb de idei, informații și experiențe culturale.
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "#222324",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
            }}
          >
            Un spațiu comun pentru adolescenți, copii și adulți, în jurul spectacolelor, proiecțiilor și dialogurilor. Festivalul devine orașul și invită comunitatea să participe.
          </motion.p>
        </div>

        {/* Right: ce construim împreună */}
        <div className="md:w-1/2 flex flex-col justify-center md:border-l md:pl-12" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.5)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            ce construim împreună
          </motion.p>
          <div className="flex flex-col gap-0">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                padding: "1.2rem 0",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.09)" : "none",
                borderTop: i === 0 ? "1px solid rgba(0,0,0,0.09)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "3px",
                  height: "1.75rem",
                  backgroundColor: "#E7004C",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "#222324",
                  fontSize: "clamp(0.95rem, 1.75vw, 1.4rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {row.text.split(row.accent).map((part, j, arr) => (
                  j < arr.length - 1 ? (
                    <span key={j}>
                      {part}
                      <span style={{ color: "#E7004C", fontWeight: 600 }}>{row.accent}</span>
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                ))}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
