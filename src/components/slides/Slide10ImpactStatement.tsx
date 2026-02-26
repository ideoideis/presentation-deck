import { useState } from "react";
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const ASSOCIERE_ITEMS = [
  "educație alternativă",
  "dialog între generații",
  "cultură contemporană",
  "impact social real",
];

const stagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export function Slide10ImpactStatement() {
  const [hovered, setHovered] = useState<number | null>(null);

  const chipStyle = {
    padding: "0.5rem 1rem",
    fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
    color: "#1a1a1a",
    backgroundColor: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(0,0,0,0.1)",
    fontWeight: 500,
    transition: "all 0.25s ease",
    cursor: "default",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ backgroundColor: "#f5f4f2" }}
    >
      {/* Full-bleed image — dominant, clearly visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${asset("/images/hero-bw.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //filter: "grayscale(35%) contrast(1.02)",
          opacity: 0.85,
        }}
      />

      {/* Scattered content blocks — image shows between them */}

      {/* 1. Headline — compact strip top-left */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute z-10 top-[8%] left-[5%] md:top-[10%] md:left-[6%]"
        style={{ maxWidth: "min(90vw, 420px)" }}
      >
        <motion.span
          variants={itemVariants}
          style={{
            display: "block",
            width: "28px",
            height: "3px",
            backgroundColor: "#E7004C",
            marginBottom: "0.9rem",
          }}
        />
        <motion.p
          variants={itemVariants}
          className="lowercase font-semibold"
          style={{
            ...chipStyle,
            padding: "1.1rem 1.35rem",
            fontSize: "clamp(1.05rem, 1.9vw, 1.65rem)",
            lineHeight: 1.35,
          }}
        >
          A susține Ideo Ideis înseamnă a susține dezvoltarea unei generații și vitalitatea culturală a unei comunități.
        </motion.p>
      </motion.div>

      {/* 2. Tags — floating pills, center-right area */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute z-10 top-[42%] right-[5%] md:top-[45%] md:right-[7%]"
        style={{
          maxWidth: "min(85vw, 300px)",
          padding: "1rem 1.25rem",
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "4px",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
            color: "#1a1a1a",
            fontWeight: 600,
            letterSpacing: "0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Înseamnă asociere cu:
        </motion.p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {ASSOCIERE_ITEMS.map((item, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...chipStyle,
                color: hovered === i ? "#fff" : "#1a1a1a",
                backgroundColor: hovered === i ? "#E7004C" : "rgba(255,255,255,0.96)",
                borderColor: hovered === i ? "#E7004C" : "rgba(0,0,0,0.1)",
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* 3. Conclusion — bottom-left */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute z-10 bottom-[10%] left-[5%] md:bottom-[12%] md:left-[6%]"
        style={{ maxWidth: "min(90vw, 340px)" }}
      >
        <motion.p
          variants={itemVariants}
          style={{
            ...chipStyle,
            padding: "1.1rem 1.35rem",
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            fontWeight: 600,
            lineHeight: 1.5,
            borderTop: "2px solid rgba(231,0,76,0.5)",
            paddingTop: "1.15rem",
          }}
        >
          Parteneriatul devine contribuție la un proces viu, nu doar prezență de brand.
        </motion.p>
      </motion.div>

      {/* 4. Label — bottom-right corner */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute z-10 bottom-[5%] right-[5%] md:bottom-[6%] md:right-[7%]"
        style={{
          color: "rgba(0,0,0,0.6)",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        parteneriat
      </motion.p>
    </div>
  );
}
