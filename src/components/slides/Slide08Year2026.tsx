import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  { text: "mai multă integrare în comunitatea locală", accent: "integrare" },
  { text: "experiență de participant mai bună, mai sănătoasă ca ritm", accent: "experiență" },
  { text: "vizibilitate națională sporită + parteneriate private mai clare", accent: "vizibilitate" },
];

export function Slide08Year2026() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex-1 flex flex-col justify-center pt-12 md:pt-16">
        <motion.h2
          variants={slideItemVariants}
          className="font-semibold lowercase leading-none"
          style={{
            fontSize: "clamp(4rem, 14vw, 13rem)",
            color: "#E7004C",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: "3rem",
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
                padding: "1.25rem 0",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                borderTop: i === 0 ? "1px solid rgba(0,0,0,0.1)" : "none",
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
                  backgroundColor: "#E7004C",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "#222324",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.45rem)",
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
