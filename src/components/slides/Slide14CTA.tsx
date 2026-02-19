import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const MICRO = "ediția #21 · 29.07–05.08.26 · alexandria";

export function Slide14CTA() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#222324" }}
    >
      <motion.span
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        {MICRO}
      </motion.span>

      <div className="flex-1 flex flex-col md:flex-row gap-16 items-center">
        {/* Left: headline */}
        <div className="md:w-1/2">
          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            hai să
            <br />
            <span style={{ color: "#E7004C" }}>vorbim</span>
          </motion.h2>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              lineHeight: 1.65,
              maxWidth: "40ch",
            }}
          >
            un call scurt pentru context, obiective 2026 și cum putem construi impact împreună.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={slideItemVariants}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2.5rem", alignItems: "flex-start" }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-block",
                backgroundColor: "#E7004C",
                color: "#fff",
                padding: "0.9rem 2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              programează un call →
            </a>
            <a
              href="/deck-ideo-ideis-2026.pdf"
              download
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "rgba(255,255,255,0.6)",
                padding: "0.9rem 2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 400,
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              descarcă pdf
            </a>
          </motion.div>
        </div>

        {/* Right: contact info */}
        <div className="md:w-1/2" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "3rem" }}>
          <motion.p
            variants={slideItemVariants}
            className="micro-label mb-6"
            style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}
          >
            contact
          </motion.p>

          {["nume", "rol", "telefon", "email"].map((field, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                padding: "1rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#E7004C" }} />
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {field}
              </p>
            </motion.div>
          ))}

          <motion.div variants={slideItemVariants} style={{ marginTop: "2rem" }}>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              ideo ideis · alexandria · ediția #21 · 2026
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
