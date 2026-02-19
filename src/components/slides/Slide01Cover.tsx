import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide01Cover() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16 relative"
      style={{ backgroundColor: "#E7004C" }}
    >
      {/* Main content — StickyHeader shows festival info */}
      <div className="flex flex-col gap-4 mt-12 md:mt-16">
        <motion.img
          src="/logo-ideo-ideis-festivalul.png"
          alt="ideo ideis festivalul"
          variants={slideItemVariants}
          style={{
            height: "clamp(9rem, 24vw, 24rem)",
            width: "auto",
            objectFit: "contain",
            alignSelf: "flex-start",
            marginTop: "-2rem",
          }}
        />

        <motion.div
          variants={slideItemVariants}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.5rem" }}
        >
          {/* Red accent line */}
          <span
            style={{
              display: "block",
              width: "48px",
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            o săptămână în care adolescenții își construiesc vocea, iar orașul devine scenă.
          </p>
        </motion.div>
      </div>

      {/* Bottom: ediția + scroll */}
      <div className="flex items-end justify-between">
        <motion.div variants={slideItemVariants}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            ediția
          </p>
          <p style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 600, lineHeight: 1 }}>#21</p>
        </motion.div>

        <motion.div
          variants={slideItemVariants}
          className="flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          scroll
          <span
            style={{
              display: "block",
              width: "1.5px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
