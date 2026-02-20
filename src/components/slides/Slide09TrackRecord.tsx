import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const impactPoints = [
  {
    label: "impact în adolescenți",
    text: "6000+ adolescenți au crescut alături de Ideo Ideis. Nu formăm doar viitori artiști, ci oameni conștienți de puterea pe care o au de a schimba ceva în jurul lor.",
  },
  {
    label: "impact în comunitate",
    text: "Un oraș mic devenit epicentru cultural câteva zile pe an. Impactul continuă prin evenimente pe tot parcursul anului.",
  },
  {
    label: "impact în rețea",
    text: "Artiști, mentori, profesioniști activați anual. Network cu vizibilitate națională, 20 ani de credibilitate. 500+ evenimente de-a lungul timpului.",
  },
];

export function Slide09TrackRecord() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#2c2d34" }}
    >
      <div className="flex-1 flex flex-col justify-center pt-12 md:pt-16">
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            marginBottom: "3rem",
            marginTop: "0.5rem",
          }}
        >
          impact{" "}
          <span style={{ color: "#E7004C" }}>constant</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {impactPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              className="flex-1"
              style={{
                borderTop: "2px solid #E7004C",
                padding: "1.5rem 0 0",
              }}
            >
              <p
                className="lowercase"
                style={{
                  color: "#fff",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.82rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.65rem",
                }}
              >
                {point.label}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  fontWeight: 400,
                  lineHeight: 1.55,
                }}
              >
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
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
          20 ani · 4.000+ adolescenți · 200.000 public local cumulat
        </p>
      </motion.div>
    </div>
  );
}
