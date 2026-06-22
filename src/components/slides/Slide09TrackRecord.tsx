import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide09TrackRecord() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#2c2d34",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      <div className="flex-1 flex flex-col justify-center pt-12" style={{ maxWidth: "52ch" }}>
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
          <Trans i18nKey="slide09.title" components={{ hl: <span style={{ color: "#E7004C" }} /> }} />
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
          {t("slide09.p1")}
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)",
            lineHeight: 1.65,
            maxWidth: "60ch",
            marginBottom: "1.5rem",
          }}
        >
          {t("slide09.p2")}
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
          {t("slide09.p3")}
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
          {t("slide09.footer")}
        </p>
      </motion.div>
    </div>
  );
}
