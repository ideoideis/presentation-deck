import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const modules = [
  {
    label: "adolescenți",
    subtitle: "pe scenă, în proces",
    text: "ateliere intensive + lucru direct cu profesioniști, pe scenă și în proces",
    index: "01",
  },
  {
    label: "copii",
    subtitle: "laboratorul ideo ideis",
    text: "joacă și creativitate ca prim contact cu arta, în oraș",
    index: "02",
  },
  {
    label: "profesori & comunitate",
    subtitle: "rețeaua care crește",
    text: "ateliere și întâlniri care cresc publicul și îl țin aproape",
    index: "03",
  },
  {
    label: "toate vârstele",
    subtitle: "talk-uri, masterclass-uri",
    text: "talk-uri, masterclass-uri, discuții după spectacole și film",
    index: "04",
  },
];

export function Slide06Education() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full flex flex-col md:pr-[clamp(var(--slide-px),10vw,6rem)]"
      style={{
        backgroundColor: "#222324",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
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
          marginBottom: "clamp(1.5rem, 4vh, 3rem)",
          marginTop: "clamp(5rem, 3vh, 2rem)",
        }}
      >
        educație{" "}
        <span style={{ color: "#E7004C" }}>non-formală</span>
      </motion.h2>

      {/* Interactive rows */}
      <div className="flex flex-col flex-1 justify-center gap-0">
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
                <div className="flex items-center justify-between gap-3 md:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-4 md:gap-6 min-w-0">
                    {/* Index number */}
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
                        fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "16px",
                      height: "16px",
                      padding: "0.5rem",
                      position: "relative",
                      flexShrink: 0,
                      marginRight: "1rem",
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
                        className="pl-8 sm:pl-[calc(1.8rem+1rem+clamp(1rem,1.5vw,1.5rem))]"
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          fontSize: "clamp(0.85rem, 1.15vw, 1rem)",
                          lineHeight: 1.65,
                          paddingTop: "0.75rem",
                          maxWidth: "55ch",
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
