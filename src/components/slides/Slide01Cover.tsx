import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide01Cover() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 md:p-16 relative"
      style={{ backgroundColor: "#E7004C" }}
    >
      {/* Main content — StickyHeader shows festival info */}
      <div className="flex flex-col gap-4 mt-12 md:mt-16">
        <motion.img
          src={asset("/logo-ideo-ideis-festivalul.png")}
          alt="ideo ideis festivalul"
          variants={slideItemVariants}
          style={{
            height: "clamp(9rem, 24vw, 24rem)",
            width: "auto",
            objectFit: "contain",
            alignSelf: "flex-start",
            marginTop: "-1rem",
            marginLeft: "-2rem",
          }}
        />

        <motion.div
          variants={slideItemVariants}
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1.5rem" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            20 de ani de festival care modelează generații
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            festival național de teatru tânăr
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              fontWeight: 500,
              letterSpacing: "0.02em",
              marginTop: "0.5rem",
            }}
          >
            Alexandria · 29 iulie – 5 august 2026
          </p>
        </motion.div>
      </div>

      {/* Bottom: scroll */}
      <div className="flex items-end justify-end">
        {/*
        <motion.div variants={slideItemVariants}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            ediția
          </p>
          <p style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 600, lineHeight: 1 }}>#21</p>
        </motion.div>
        */}
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
