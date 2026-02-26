import { useState } from "react";
import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const PROGRAM_ITEMS: { activity: string; opportunity: string }[] = [
  { activity: "ateliere de teatru tânăr + arte alăturate", opportunity: "branding în spații educaționale · kit-uri personalizate" },
  { activity: "spectacole de teatru tânăr", opportunity: "asociere cu conținut cultural" },
  { activity: "spectacole invitate", opportunity: "vizibilitate la evenimente" },
  { activity: "cinemateca târzie + Q&A", opportunity: "conținut cultural · public tânăr" },
  { activity: "masterclass-uri și seara povestitorilor", opportunity: "dialog cu generația activă" },
  { activity: "murale și activări în oraș", opportunity: "vizibilitate outdoor · revitalizare urbană" },
];

export function Slide03Typography() {
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
        <motion.div variants={slideItemVariants} style={{ marginBottom: "1.75rem" }}>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "4px",
              backgroundColor: "#E7004C",
              marginBottom: "1rem",
            }}
          />
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              maxWidth: "28ch",
            }}
          >
            În fiecare vară, Alexandria <span style={{ color: "#E7004C" }}>respiră alt ritm</span>.
          </p>
        </motion.div>

        {/* Body paragraphs — card-like separation */}
        <motion.div
          variants={slideItemVariants}
          style={{
            padding: "1.5rem 1.75rem",
            backgroundColor: "#fff",
            borderRadius: 0,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            maxWidth: "48ch",
          }}
        >
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(0.95rem, 1.35vw, 1.1rem)",
              lineHeight: 1.65,
            }}
          >
            Oamenii ies seara în piață la proiecțiile de film. Merg la spectacolele de teatru. Se întâlnesc și rămân la dialog după reprezentații.
          </p>
          <p
            style={{
              color: "#222324",
              fontSize: "clamp(0.95rem, 1.35vw, 1.1rem)",
              lineHeight: 1.65,
              marginTop: "1rem",
            }}
          >
            Festivalul aduce împreună adolescenți, artiști și comunitatea locală. Pentru câteva zile, orașul se adună în jurul culturii.
          </p>
        </motion.div>
      </div>

      {/* Right: program list — distinct cards */}
      <motion.div
        variants={slideItemVariants}
        className="flex flex-col justify-center"
        style={{
          padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
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
          ce se întâmplă anual
        </p>
        <p
          style={{
            color: "#E7004C",
            fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
            fontWeight: 600,
            marginBottom: "1.25rem",
          }}
        >
          unde poate fi brandul tău?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {PROGRAM_ITEMS.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                padding: "0.85rem 1rem",
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
                  fontSize: "clamp(0.88rem, 1.15vw, 0.98rem)",
                  lineHeight: 1.4,
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
                  fontSize: "clamp(0.72rem, 0.95vw, 0.82rem)",
                  lineHeight: 1.35,
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
