import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

const facts = [
  "20 de ani de consecvență",
  "500+ evenimente de-a lungul anilor",
  "6000+ adolescenți au crescut alături de Ideo Ideis",
  "câteva mii de spectatori anual",
  "vizibilitate națională",
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
          style={{ filter: "grayscale(100%) contrast(1.15)", opacity: 0.32 }}
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch">
        {/* Left — headline */}
        <div
          className="flex-1 flex flex-col justify-end"
          style={{
            padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
            paddingRight: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          <div>
            {/* Eyebrow */}
            <motion.div
              variants={slideItemVariants}
              style={{
                backgroundColor: "#E7004C",
                display: "inline-flex",
                alignItems: "center",
                padding: "0.3rem 0.6rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                despre festival
              </span>
            </motion.div>

            <motion.h2
              variants={slideItemVariants}
              className="lowercase font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 4.2vw, 3.8rem)",
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                maxWidth: "22ch",
                marginTop: "0.25rem",
              }}
            >
              nu spectacol gata făcut, ci proces viu.
            </motion.h2>

            <motion.p
              variants={slideItemVariants}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
                marginTop: "1.5rem",
                maxWidth: "42ch",
                lineHeight: 1.65,
              }}
            >
              De 20 de ani, Ideo Ideis construiește un spațiu unde adolescenții întâlnesc teatrul nu ca un spectacol gata făcut, ci ca un proces viu. Arta nu e doar un decor, ci un instrument prin care tinerii își clarifică valorile, învață despre responsabilitate și descoperă ce fel de oameni vor să devină.
            </motion.p>
          </div>
        </div>

        {/* Right — facts column */}
        <div
          className="flex flex-col justify-end"
          style={{
            padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
            paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            minWidth: "clamp(210px, 26vw, 340px)",
          }}
        >
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            în cifre
          </motion.p>

          <div className="flex flex-col gap-5">
            {facts.map((fact, i) => (
              <motion.div key={i} variants={slideItemVariants}>
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1px",
                    backgroundColor: "#E7004C",
                    marginBottom: "0.5rem",
                  }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(0.85rem, 1.15vw, 1rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
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
