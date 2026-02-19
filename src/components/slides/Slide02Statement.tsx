import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

const facts = [
  "de 20 ani",
  "200+ trupe aplicante",
  "160+ trupe participante",
  "4.000+ adolescenți participanți",
  "artiști · mentori · traineri · invitați",
];

export function Slide02Statement() {
  return (
    <div
      className="w-full h-full relative flex"
      style={{ backgroundColor: "#222324" }}
    >
      {/* Full-bleed BW photo */}
      <div className="absolute inset-0">
        <img
          src={asset("/images/workshop-bw.jpg")}
          alt="Adolescenți la atelier de teatru tânăr"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.15)", opacity: 0.35 }}
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch">
        {/* Left — red block + headline */}
        <div className="flex-1 flex flex-col justify-end p-10 md:p-16 md:pr-12">
          <div>
            {/* Red block */}
            <motion.div
              variants={slideItemVariants}
              style={{
                backgroundColor: "#E7004C",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.35rem 0.6rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#fff", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, lineHeight: 1 }}>
                manifest
              </span>
            </motion.div>

            <motion.h2
              variants={slideItemVariants}
              className="lowercase font-semibold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 4.2rem)",
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
                maxWidth: "22ch",
              }}
            >
              ideo ideis este un manifest artistic și social.
            </motion.h2>

            <motion.p
              variants={slideItemVariants}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
                marginTop: "1.25rem",
                maxWidth: "40ch",
                lineHeight: 1.55,
              }}
            >
              susține adolescenții din românia în a se exprima așa cum sunt.
            </motion.p>
          </div>
        </div>

        {/* Right — facts column */}
        <div
          className="flex flex-col justify-end p-10 md:p-16 md:pl-8 md:border-l md:border-white/10 pt-8 md:pt-0 md:min-w-[clamp(220px,28vw,380px)]"
        >
          <motion.p
            variants={slideItemVariants}
            className="micro-label mb-6"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            în cifre · per ediție
          </motion.p>
          <div className="flex flex-col gap-5">
            {facts.map((fact, i) => (
              <motion.div key={i} variants={slideItemVariants}>
                <span
                  style={{
                    display: "block",
                    width: "24px",
                    height: "1px",
                    backgroundColor: "#E7004C",
                    marginBottom: "0.4rem",
                  }}
                />
                <p style={{ color: "#fff", fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
