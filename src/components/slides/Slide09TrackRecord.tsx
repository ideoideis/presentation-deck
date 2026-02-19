import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const impactPoints = [
  { label: "adolescenți & comunități naționale", text: "voce, curaj, comunitate care se întoarce acasă cu ei." },
  { label: "comunitate locală", text: "public nou + obicei cultural (orașul se adună, revine, își schimbă reflexul)." },
  { label: "network astistic & educational", text: "profesioniști activați anual, lucru direct cu adolescenții." },
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
                  color: "#fff",
                  fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {point.label}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  fontWeight: 300,
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
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          20 ani · 4.000+ adolescenți · 200.000 public local cumulat
        </p>
      </motion.div>
    </div>
  );
}
