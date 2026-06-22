import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide10ImpactStatement() {
  const { t } = useTranslation();
  const associereItems = t("slide10.associere", { returnObjects: true }) as string[];
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Full-bleed photo — visible, dominant */}
      <img
        src={asset("/images/hero-bw.jpg")}
        alt={t("slide10.imgAlt")}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(100%) contrast(1.05)" }}
      />

      {/* Solid panel — text on dark background for readability, photo visible on right */}
      <div
        className="absolute inset-y-0 left-0 flex flex-col justify-center"
        style={{
          width: "min(100%, 480px)",
          background: "linear-gradient(to right, rgba(18,18,20,0.95) 0%, rgba(18,18,20,0.92) 85%, transparent 100%)",
          padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
        }}
      >
        <motion.span
          variants={slideItemVariants}
          style={{
            display: "inline-block",
            color: "#E7004C",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {t("slide10.eyebrow")}
        </motion.span>

        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-tight"
          style={{
            fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            marginBottom: "1rem",
          }}
        >
          {t("slide10.heading")}
        </motion.h2>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
            lineHeight: 1.65,
            marginBottom: "1.25rem",
          }}
        >
          {t("slide10.p1")}
        </motion.p>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.78rem, 1vw, 0.88rem)",
            fontWeight: 600,
            letterSpacing: "0.02em",
            marginBottom: "0.5rem",
          }}
        >
          {t("slide10.associereLabel")}
        </motion.p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          {associereItems.map((item, i) => (
            <motion.span
              key={i}
              variants={slideItemVariants}
              whileHover={{
                backgroundColor: "#E7004C",
                color: "#fff",
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: "inline-block",
                padding: "0.35rem 0.75rem",
                fontSize: "clamp(0.78rem, 0.95vw, 0.85rem)",
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.15)",
                fontWeight: 500,
                cursor: "default",
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#fff",
            fontSize: "clamp(0.88rem, 1.1vw, 0.98rem)",
            fontWeight: 600,
            lineHeight: 1.5,
            paddingTop: "0.85rem",
            borderTop: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {t("slide10.footer")}
        </motion.p>
      </div>
    </div>
  );
}
