import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  { text: "mai multă integrare a comunității din Alexandria în activitățile festivalului", accent: "integrare" },
  { text: "experiență mai bună pentru participanți și public: ritm sănătos, acces larg", accent: "experiență" },
  { text: "vizibilitate națională sporită și colaborări cu impact clar", accent: "vizibilitate" },
];

export function Slide08Year2026() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#fff",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
      }}
    >
      <div className="flex-1 flex flex-col justify-center mt-6 md:mt-10">
        <motion.div variants={slideItemVariants} style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#E7004C",
              color: "#fff",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.25rem 0.55rem",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            ce construim împreună
          </span>
        </motion.div>

        <motion.h2
          variants={slideItemVariants}
          className="font-semibold lowercase leading-none"
          style={{
            fontSize: "clamp(3.5rem, 13vw, 12rem)",
            color: "#E7004C",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: "3rem",
            marginTop: "0.5rem",
          }}
        >
          2026
        </motion.h2>

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
  );
}
