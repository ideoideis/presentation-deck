import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const rows = [
  "o generație care își folosește vocea",
  "un oraș care se adună în jurul culturii",
  "o poveste care circulă natural, ani la rând",
];

export function Slide13Remains() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex-1 flex flex-col justify-center pt-12 md:pt-16">
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            color: "#222324",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            marginBottom: "2.5rem",
          }}
        >
          ce rămâne
        </motion.h2>

        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <motion.p
              key={i}
              variants={slideItemVariants}
              style={{
                color: "#222324",
                fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              {row}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          color: "rgba(34,35,36,0.6)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          marginTop: "2rem",
        }}
      >
        20 ani · consecvență
      </motion.div>
    </div>
  );
}
