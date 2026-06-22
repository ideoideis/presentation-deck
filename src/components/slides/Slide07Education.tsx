import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide07Education() {
  const { t } = useTranslation();
  const modules = (
    t("slide07.modules", { returnObjects: true }) as {
      label: string;
      subtitle: string;
      text: string;
    }[]
  ).map((mod, i) => ({ ...mod, index: String(i + 1).padStart(2, "0") }));
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        backgroundColor: "#222324",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      {/* Title */}
      <motion.h2
        variants={slideItemVariants}
        className="lowercase font-semibold leading-none"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
          color: "#fff",
          letterSpacing: "-0.02em",
          lineHeight: 0.95,
          marginBottom: "clamp(1rem, 2vw, 2rem)",
          marginTop: "clamp(1.5rem, 3.5vw, 3.5rem)",
        }}
      >
        <Trans i18nKey="slide07.title" components={{ hl: <span style={{ color: "#E7004C" }} /> }} />
      </motion.h2>

      <div
        style={{
          maxWidth: "78ch",
          marginTop: "clamp(0.75rem, 1.5vw, 1.5rem)",
          marginBottom: "clamp(1rem, 2vw, 2rem)",
        }}
      >
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: 1.75,
            marginBottom: "1rem",
          }}
        >
          {t("slide07.p1")}
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: 1.75,
            marginBottom: "1rem",
          }}
        >
          {t("slide07.p2")}
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: 1.75,
          }}
        >
          {t("slide07.p3")}
        </motion.p>
      </div>

      {/* Interactive rows */}
      <div className="flex flex-col flex-1 justify-center gap-0" style={{ maxWidth: "80ch" }}>
        {modules.map((mod, i) => {
          const isActive = active === i;
          return (
            <motion.button
              key={i}
              variants={slideItemVariants}
              onClick={() => setActive(isActive ? null : i)}
              className="w-full text-left group"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <motion.div
                animate={{
                  backgroundColor: isActive ? "rgba(231,0,76,0.07)" : "transparent",
                  paddingLeft: isActive ? "1.25rem" : "0rem",
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                style={{
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  padding: "0",
                  paddingTop: "1.1rem",
                  paddingBottom: "1.1rem",
                }}
              >
                {/* Row header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span
                      style={{
                        color: isActive ? "#E7004C" : "rgba(255,255,255,0.18)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.15em",
                        fontWeight: 600,
                        transition: "color 0.22s",
                        minWidth: "1.8rem",
                        flexShrink: 0,
                      }}
                    >
                      {mod.index}
                    </span>
                    <span
                      className="lowercase font-medium"
                      style={{
                        color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                        fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
                        letterSpacing: "-0.01em",
                        transition: "color 0.22s",
                      }}
                    >
                      {mod.label}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.25)",
                        fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                        fontWeight: 400,
                        display: isActive ? "none" : "block",
                        transition: "opacity 0.2s",
                      }}
                    >
                      — {mod.subtitle}
                    </span>
                  </div>

                  {/* Expand indicator */}
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{
                      display: "block",
                      width: "16px",
                      height: "16px",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        right: 0,
                        height: "1.5px",
                        backgroundColor: isActive ? "#E7004C" : "rgba(255,255,255,0.35)",
                        transform: "translateY(-50%)",
                        transition: "background-color 0.22s",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: "1.5px",
                        backgroundColor: isActive ? "#E7004C" : "rgba(255,255,255,0.35)",
                        transform: "translateX(-50%)",
                        transition: "background-color 0.22s",
                      }}
                    />
                  </motion.span>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          fontSize: "clamp(0.85rem, 1.15vw, 1rem)",
                          lineHeight: 1.65,
                          paddingTop: "0.75rem",
                          paddingLeft: "calc(1.8rem + 1rem + clamp(1rem, 1.5vw, 1.5rem))",
                          maxWidth: "72ch",
                        }}
                      >
                        {mod.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
