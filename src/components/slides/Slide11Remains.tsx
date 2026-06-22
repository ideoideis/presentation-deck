import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide11Remains() {
  const { t } = useTranslation();
  const items = t("slide11.items", { returnObjects: true }) as string[];
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#0d0d0e",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      <div className="flex-1 flex flex-col justify-center pt-2">
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            marginBottom: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Trans i18nKey="slide11.title" components={{ hl: <span style={{ color: "#E7004C" }} /> }} />
        </motion.h2>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            lineHeight: 1.7,
            maxWidth: "50ch",
            marginBottom: "1.75rem",
          }}
        >
          {t("slide11.p1")}
        </motion.p>

        <div className="flex flex-col gap-0" style={{ marginBottom: "1.5rem" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                padding: "1rem 0",
                borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "3px",
                  height: "1.25rem",
                  backgroundColor: "#E7004C",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#E7004C",
            fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
            fontWeight: 600,
            lineHeight: 1.5,
            marginTop: "0.75rem",
            maxWidth: "50ch",
          }}
        >
          {t("slide11.footer")}
        </motion.p>
      </div>

      {/*<motion.div
        variants={slideItemVariants}
        style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: "2rem",
          paddingBottom: "0.25rem",
        }}
      >
        parteneriat
      </motion.div>*/}
    </div>
  );
}
