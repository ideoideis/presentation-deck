import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

const items = [
  "ateliere de teatru tânăr",
  "arte alăturate: film, foto, dans, scriere, new media, scenografie, make-up",
  "spectacole de teatru tânăr",
  "spectacole invitate + outdoor",
  "cinemateca târzie + discuții",
  "povești + masterclass-uri",
];

export function Slide05HowItLooks() {
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

      <div className="flex-1 flex flex-col justify-center gap-8 md:gap-0 md:flex-row">
        {/* Left: title */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "#222324",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            cum arată,
            <br />
            <span style={{ color: "#E7004C" }}>concret</span>
          </motion.h2>
        </div>

        {/* Right: list */}
        <div className="md:w-2/3 flex flex-col justify-center gap-1 md:pl-16 md:border-l border-l-0" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                padding: "1rem 0",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* Loading bar accent */}
              {i < 3 && (
                <span
                  style={{
                    display: "block",
                    width: `${[60, 100, 40][i]}px`,
                    height: "3px",
                    backgroundColor: "#E7004C",
                    flexShrink: 0,
                  }}
                />
              )}
              <p
                style={{
                  color: "#222324",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
