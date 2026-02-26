import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide10ImpactStatement() {
  return (
    <div
      className="w-full h-full relative flex items-end"
      style={{ backgroundColor: "#222324" }}
    >
      {/* Full bleed image */}
      <div className="absolute inset-0">
        <img
          src={asset("/images/hero-bw.jpg")}
          alt="Adolescenți pe scenă la ideo ideis"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.15)", opacity: 0.38 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-end">
        {/* Red block with headline */}
        <motion.div
          variants={slideItemVariants}
          style={{
            backgroundColor: "#E7004C",
            padding: "2.5rem clamp(2.5rem, 5vw, 4rem) 2.5rem",
            flex: "0 0 auto",
            maxWidth: "clamp(280px, 60vw, 760px)",
          }}
        >
          <h2
            className="lowercase font-semibold"
            style={{
              fontSize: "clamp(1.35rem, 3vw, 2.9rem)",
              color: "#fff",
              letterSpacing: "-0.015em",
              lineHeight: 1.12,
            }}
          >
            A susține Ideo Ideis înseamnă a susține dezvoltarea unei generații și vitalitatea culturală a unei comunități.
          </h2>
        </motion.div>

        {/* Side note */}
        <motion.div
          variants={slideItemVariants}
          style={{
            padding: "2.5rem clamp(1.5rem, 3vw, 3rem)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              backgroundColor: "#E7004C",
              marginBottom: "1rem",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.6,
              maxWidth: "28ch",
            }}
          >
            Înseamnă asociere cu: educație alternativă, dialog între generații, cultură contemporană, impact social real. Parteneriatul devine contribuție la un proces viu, nu doar prezență de brand.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
