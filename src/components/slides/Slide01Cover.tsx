import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide01Cover() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between relative overflow-hidden"
      style={{ backgroundColor: "#E7004C" }}
    >
      {/* Main content — left aligned, vertically centered */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{
          paddingLeft: "calc(var(--slide-px) + 2rem)",
          paddingRight: "var(--slide-pr)",
          paddingTop: "calc(var(--slide-pt) + 5rem)",
          paddingBottom: "var(--slide-py)",
        }}
      >
        <motion.div variants={slideItemVariants} style={{ marginBottom: "2.5rem" }}>
          <img
            src={asset("/logo-ideo-ideis-festivalul.png")}
            alt="ideo ideis festivalul"
            style={{
              width: "clamp(10rem, 22vw, 16rem)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </motion.div>

        <motion.h1
          variants={slideItemVariants}
          style={{
            color: "#fff",
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            maxWidth: "32ch",
          }}
        >
          21 de ani de festival care modelează generații
        </motion.h1>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "1.5rem",
          }}
        >
          festival național de teatru tânăr
        </motion.p>

        <motion.div
          variants={slideItemVariants}
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              letterSpacing: "0.04em",
            }}
          >
            Alexandria · 29 iulie – 5 august 2026
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator — centered */}
      <motion.div
        variants={slideItemVariants}
        className="flex flex-col items-center"
        style={{
          paddingBottom: "2.5rem",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        scroll
        <span
          style={{
            display: "block",
            width: "1px",
            height: "40px",
            marginTop: "0.75rem",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
      </motion.div>
    </div>
  );
}
