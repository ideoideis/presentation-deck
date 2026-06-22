import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide04Year2026() {
  const { t } = useTranslation();
  const rows = t("slide04.rows", { returnObjects: true }) as string[];
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#E7004C",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      <div className="flex-1 flex flex-row justify-center gap-12 mt-8">
        {/* Left: 2026 text */}
        <div className="w-1/2 flex flex-col justify-center">
          <motion.h2
            variants={slideItemVariants}
            className="font-semibold lowercase leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            2026
          </motion.h2>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            {t("slide04.p1")}
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            {t("slide04.p2")}
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
            }}
          >
            {t("slide04.p3")}
          </motion.p>
          <motion.div
            variants={slideItemVariants}
            style={{
              marginTop: "1.5rem",
              padding: "1rem 1.25rem",
              backgroundColor: "rgba(255,255,255,0.12)",
              borderRadius: 0,
              borderLeft: "3px solid #fff",
            }}
          >
            <p style={{ color: "#fff", fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", fontWeight: 600, marginBottom: "0.35rem" }}>
              {t("slide04.calloutTitle")}
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(0.82rem, 1vw, 0.9rem)", lineHeight: 1.5 }}>
              {t("slide04.calloutText")}
            </p>
          </motion.div>
        </div>

        {/* Right: ce construim împreună */}
        <div className="w-1/2 flex flex-col justify-center border-l pl-12" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {t("slide04.eyebrow")}
          </motion.p>
          <div className="flex flex-col gap-0">
            {rows.map((_row, i) => (
              <motion.div
                key={i}
                variants={slideItemVariants}
                style={{
                  padding: "1.2rem 0",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.18)" : "none",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.18)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "3px",
                    height: "1.75rem",
                    backgroundColor: "#fff",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "clamp(0.95rem, 1.75vw, 1.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  <Trans
                    i18nKey={`slide04.rows.${i}`}
                    components={{ hl: <span style={{ color: "#fff", fontWeight: 600 }} /> }}
                  />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
