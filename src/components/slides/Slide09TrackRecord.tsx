import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const impactPoints = [
  { label: "experiență", text: "peste 20 de ani de consecvență și dezvoltare continuă." },
  { label: "rezultate", text: "mii de adolescenți formați, spectacole create, comunități activate." },
  { label: "impact", text: "Alexandria devine referință pentru teatrul tânăr și artele strâns legate." },
];

export function Slide09TrackRecord() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#2c2d34" }}
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
            marginBottom: "3rem",
          }}
        >
          impact{" "}
          <span style={{ color: "#E7004C" }}>constant</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {impactPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              className="flex-1"
              style={{
                borderTop: "1px solid #E7004C",
                padding: "1.5rem 0 0",
              }}
            >
              <p
                className="lowercase"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {point.label}
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {point.text}
              </p>
            </motion.div>
          ))}
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
          festivalul tânăr pentru un oraș în creștere.
        </p>
      </motion.div>
    </div>
  );
}
