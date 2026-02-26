import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

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
            marginBottom: "2rem",
            marginTop: "0.5rem",
          }}
        >
          Ideo Ideis{" "}
          <span style={{ color: "#E7004C" }}>continuă</span>
        </motion.h2>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.95rem, 1.35vw, 1.15rem)",
            lineHeight: 1.65,
            maxWidth: "60ch",
            marginBottom: "1.5rem",
          }}
        >
          Dialogul început la Alexandria merge mai departe prin podcasturi, Ideo Talks și ateliere organizate pe tot parcursul anului.
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)",
            lineHeight: 1.65,
            maxWidth: "60ch",
            marginBottom: "1rem",
          }}
        >
          Comunitatea rămâne activă. Procesul de creștere continuă.
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#E7004C",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 600,
            lineHeight: 1.5,
            maxWidth: "50ch",
          }}
        >
          Ideo Ideis este un ecosistem, nu doar un eveniment.
        </motion.p>
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          marginTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ display: "block", width: "28px", height: "1.5px", backgroundColor: "#E7004C", flexShrink: 0 }} />
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          20 ani · 4.000+ adolescenți · 200.000 public local cumulat
        </p>
      </motion.div>
    </div>
  );
}
