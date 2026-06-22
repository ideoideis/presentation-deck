import { useState } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";

// Participating NGOs from across the country — names are proper nouns, the same
// in every language. Shown as a light "bubble" row to signal the national reach.
const NGOS = [
  "Tineri Pentru Tineri",
  "Centrul pentru Jurnalism Independent",
  "Funky Citizens",
  "Școala 9",
  "Urbanium / REPER21",
  "Asociația Moașelor",
];

export function Slide03Typography() {
  const { t } = useTranslation();
  const programItems = t("slide03.program", { returnObjects: true }) as {
    activity: string;
    opportunity: string;
  }[];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full flex flex-row"
      style={{
        backgroundColor: "#f8f7f5",
      }}
    >
      {/* Left: prose block with clear hierarchy */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{
          padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
        }}
      >
        {/* Lead — headline treatment */}
        <motion.div variants={slideItemVariants} style={{ marginBottom: "1.1rem" }}>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "4px",
              backgroundColor: "#E7004C",
              marginBottom: "0.75rem",
            }}
          />
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "28ch",
            }}
          >
            <Trans i18nKey="slide03.lead" components={{ hl: <span style={{ color: "#E7004C" }} /> }} />
          </p>
        </motion.div>

        {/* Body paragraphs — card-like separation */}
        <motion.div
          variants={slideItemVariants}
          style={{
            padding: "1.1rem 1.4rem",
            backgroundColor: "#fff",
            borderRadius: 0,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            maxWidth: "48ch",
          }}
        >
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              lineHeight: 1.55,
            }}
          >
            {t("slide03.p1")}
          </p>
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              lineHeight: 1.55,
              marginTop: "0.75rem",
            }}
          >
            {t("slide03.p2")}
          </p>
        </motion.div>

        {/* National NGO presence — light bubble row */}
        <motion.div variants={slideItemVariants} style={{ marginTop: "0.9rem", maxWidth: "48ch" }}>
          <p
            style={{
              color: "rgba(34,35,36,0.45)",
              fontSize: "0.58rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            {t("slide03.ngoLabel")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {NGOS.map((name) => (
              <span
                key={name}
                style={{
                  display: "inline-block",
                  padding: "0.28rem 0.7rem",
                  borderRadius: "999px",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(231,0,76,0.4)",
                  color: "#222324",
                  fontSize: "clamp(0.64rem, 0.82vw, 0.74rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: program list — distinct cards */}
      <motion.div
        variants={slideItemVariants}
        className="flex flex-col justify-center"
        style={{
          paddingTop: "3rem",
          paddingBottom: "2rem",
          paddingLeft: "var(--slide-px)",
          paddingRight: "var(--slide-pr)",
          minWidth: "0",
          flex: "0 0 42%",
          backgroundColor: "#fff",
          borderLeft: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <p
          style={{
            color: "rgba(34,35,36,0.45)",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "0.35rem",
          }}
        >
          {t("slide03.eyebrow1")}
        </p>
        <p
          style={{
            color: "#E7004C",
            fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
            fontWeight: 600,
            marginBottom: "0.85rem",
          }}
        >
          {t("slide03.eyebrow2")}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {programItems.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "0.15rem",
                padding: "0.5rem 0.9rem",
                backgroundColor: "rgba(247,247,247,0.8)",
                borderRadius: "4px",
                borderLeft: "3px solid #E7004C",
                cursor: "default",
                overflow: "hidden",
              }}
            >
              {/* Pink fill — animates left to right */}
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "#E7004C",
                  borderRadius: 0,
                }}
                initial={false}
                animate={{
                  width: hovered === i ? "100%" : "0%",
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: hovered === i ? "#fff" : "#222324",
                  fontSize: "clamp(0.84rem, 1.05vw, 0.92rem)",
                  lineHeight: 1.3,
                  flex: 1,
                  transition: "color 0.2s ease",
                }}
              >
                {item.activity}
              </p>
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: hovered === i ? "rgba(255,255,255,0.85)" : "rgba(34,35,36,0.5)",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.78rem)",
                  lineHeight: 1.25,
                  transition: "color 0.2s ease",
                }}
              >
                {item.opportunity}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
