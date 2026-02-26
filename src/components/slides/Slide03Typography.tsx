import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

export function Slide03Typography() {
  return (
    <div
      className="w-full h-full flex flex-col justify-end md:justify-between gap-6 md:gap-0 p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="pt-0 md:pt-16" style={{ marginBottom: "1.5rem" }}>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#222324",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            lineHeight: 1.6,
            maxWidth: "52ch",
          }}
        >
          În fiecare vară, Alexandria respiră alt ritm.
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#222324",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            lineHeight: 1.6,
            maxWidth: "52ch",
            marginTop: "0.75rem",
          }}
        >
          Oamenii ies seara în piață la proiecțiile de film. Merg la spectacolele de teatru. Se întâlnesc și rămân la dialog după reprezentații.
        </motion.p>
        <motion.p
          variants={slideItemVariants}
          style={{
            color: "#222324",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            lineHeight: 1.6,
            maxWidth: "52ch",
            marginTop: "0.75rem",
          }}
        >
          Festivalul aduce împreună adolescenți, artiști și comunitatea locală. Pentru câteva zile, orașul se adună în jurul culturii.
        </motion.p>
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          paddingTop: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <p
          style={{
            color: "rgba(34,35,36,0.5)",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          ce se întâmplă anual
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "ateliere de teatru tânăr + arte alăturate (film, foto, dans, scriere, new media, scenografie)",
            "spectacole de teatru tânăr",
            "spectacole invitate",
            "cinemateca târzie + Q&A",
            "masterclass-uri și seara povestitorilor",
            "murale și activări în oraș",
          ].map((item, i) => (
            <p
              key={i}
              style={{
                color: "#222324",
                fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                lineHeight: 1.4,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ display: "block", width: "8px", height: "8px", backgroundColor: "#E7004C", flexShrink: 0 }} />
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
