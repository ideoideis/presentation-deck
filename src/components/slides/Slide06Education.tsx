import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const modules = [
  {
    label: "empatie & comunicare",
    subtitle: "prin exercițiu, nu prin teorie",
    text: "Atelierele de teatru și noile media îi pun pe adolescenți în situații reale: să asculte, să colaboreze, să negocieze. Competențe pe care nicio materie școlară nu le predă sistematic.",
    index: "01",
  },
  {
    label: "gândire critică",
    subtitle: "întrebări reale, contexte reale",
    text: "Spectacolele și dialogurile cu artiști relevanți provoacă adolescenții să analizeze, să argumenteze și să-și formeze opinii proprii, nu să reproducă răspunsuri.",
    index: "02",
  },
  {
    label: "responsabilitate & implicare",
    subtitle: "caractere formate, nu premiate",
    text: "Prin cadrul oferit, Ideo Ideis modelează caractere: ajută tinerii să-și clarifice valorile, să înțeleagă ce înseamnă să fii parte dintr-o comunitate și să-și asume rolul în ea.",
    index: "03",
  },
  {
    label: "integrare comunitară",
    subtitle: "orașul ca scenă",
    text: "În 2026 extindem programul pentru a include întreaga comunitate din Alexandria, familii, profesori, public larg, nu doar participanții selectați.",
    index: "04",
  },
];

export function Slide06Education() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full flex flex-col"
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
          marginTop: "clamp(3rem, 8vh, 5rem)",
        }}
      >
        ce învață{" "}
        <span style={{ color: "#E7004C" }}>adolescenții</span>
      </motion.h2>

      <motion.p
        variants={slideItemVariants}
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
          lineHeight: 1.6,
          maxWidth: "72ch",
          marginRight: 0,
          marginTop: "clamp(1.25rem, 3vh, 2rem)",
          marginBottom: "clamp(1.25rem, 3vh, 2rem)",
        }}
      >
        Ideo Ideis este unul dintre puținele festivaluri din România gândite pentru adolescenți și pentru felul în care teatrul poate fi un instrument de formare personală. Într-o lume grăbită, oferim un cadru în care tinerii pot încetini, pot explora întrebări reale și pot învăța să-și exprime vocea. Nu urmărim divertisment, ci cultivăm atenția, empatia și curajul unei generații care va duce mai departe valori esențiale pentru o societate mai deschisă și mai solidară.
      </motion.p>

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
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
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
