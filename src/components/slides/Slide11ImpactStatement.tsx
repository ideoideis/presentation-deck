import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide11ImpactStatement() {
  return (
    <div
      className="w-full h-full relative flex items-end"
      style={{ backgroundColor: "#222324" }}
    >
      {/* Full bleed image */}
      <div className="absolute inset-0">
        <img
          src={asset("/images/hero-bw.jpg")}
          alt="Adolescenți pe scenă la ideo ideis"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.15)", opacity: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-end">
        {/* Red block with headline */}
        <motion.div
          variants={slideItemVariants}
          style={{
            backgroundColor: "#E7004C",
            padding: "2.5rem 3rem 2.5rem",
            flex: "0 0 auto",
            maxWidth: "clamp(280px, 55vw, 720px)",
          }}
        >
          <h2
            className="lowercase font-semibold leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 3.2rem)",
              color: "#fff",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
            }}
          >
            adolescenții pleacă cu voce. orașul rămâne cu obicei cultural.
          </h2>
        </motion.div>

        {/* Side note */}
        <motion.div
          variants={slideItemVariants}
          style={{
            padding: "2.5rem 3rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#E7004C",
              marginBottom: "1rem",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              lineHeight: 1.5,
              textTransform: "uppercase",
              maxWidth: "22ch",
            }}
          >
            impact în adolescenți + impact în comunitate.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
