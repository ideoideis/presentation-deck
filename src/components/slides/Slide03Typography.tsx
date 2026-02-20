import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide03Typography() {
  return (
    <div
      className="w-full h-full flex flex-col justify-end md:justify-between gap-6 md:gap-0 p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="pt-0 md:pt-16" style={{ marginBottom: "2.5rem" }}>
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 15rem)",
            color: "#222324",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
          }}
        >
          exprimă
        </motion.h2>
        <motion.h2
          variants={slideItemVariants}
          className="lowercase font-semibold leading-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 15rem)",
            color: "#E7004C",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
          }}
        >
          ce ești
        </motion.h2>
      </div>

      <motion.div variants={slideItemVariants} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
        <span style={{ display: "block", width: "30px", height: "2px", backgroundColor: "#E7004C", marginTop: "0.6rem", flexShrink: 0 }} />
        <p
          style={{
            color: "#222324",
            fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
            maxWidth: "48ch",
            lineHeight: 1.55,
            opacity: 0.7,
          }}
        >
          adolescenții învață prin exercițiu, prin curiozitate și prin confruntarea cu întrebări reale. În fiecare an, programul e construit pentru a provoca, iar adolescenții folosesc teatrul ca pretext pentru ceva mai important: să înțeleagă ce-i frământă, să-și asume cine sunt și să învețe ce înseamnă să fie parte dintr-o comunitate.
        </p>
      </motion.div>
    </div>
  );
}
