import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

const left = ["teatru tânăr", "spectacole invitate", "outdoor"];
const right = ["cinemateca târzie", "discuții", "murale", "activări în oraș"];

export function Slide09TrackRecord() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#2c2d34" }}
    >
      <motion.span
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        {MICRO}
      </motion.span>

      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            marginBottom: "3.5rem",
          }}
        >
          am făcut asta,{" "}
          <span style={{ color: "#E7004C" }}>constant</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column */}
          <div>
            <motion.p
              variants={slideItemVariants}
              className="micro-label mb-5"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", fontSize: "0.6rem" }}
            >
              program — scenă
            </motion.p>
            {left.map((item, i) => (
              <motion.div
                key={i}
                variants={slideItemVariants}
                style={{
                  padding: "0.9rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#E7004C" }} />
                <p style={{ color: "#fff", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: 400 }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div>
            <motion.p
              variants={slideItemVariants}
              className="micro-label mb-5"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", fontSize: "0.6rem" }}
            >
              program — oraș
            </motion.p>
            {right.map((item, i) => (
              <motion.div
                key={i}
                variants={slideItemVariants}
                style={{
                  padding: "0.9rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#E7004C" }} />
                <p style={{ color: "#fff", fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", fontWeight: 400 }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          marginTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ display: "block", width: "32px", height: "2px", backgroundColor: "#E7004C" }} />
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          peste 20 de ani de consecvență.
        </p>
      </motion.div>
    </div>
  );
}
