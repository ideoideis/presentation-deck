import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const people = [
  { src: "/images/portraits/p1.jpg", name: "Alex Ion", role: "co-fondator" },
  { src: "/images/portraits/p2.jpg", name: "Tudor Chirilă", role: "mentor" },
  { src: "/images/portraits/p3.jpg", name: "Pavel Bartoș", role: "mentor" },
  { src: "/images/portraits/p4.jpg", name: "Andreea Esca", role: "invitată masterclass" },
  { src: "/images/portraits/p5.jpg", name: "Maia Morgenstern", role: "invitată" },
  { src: "/images/portraits/p6.jpg", name: "Ștefan Iancu", role: "participant" },
];

export function Slide10People() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Left: headline + text */}
        <div className="md:w-1/3">
          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "#222324",
              letterSpacing: "-0.02em",
              lineHeight: 0.92,
              marginBottom: "1.5rem",
            }}
          >
            oameni
          </motion.h2>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.65)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              lineHeight: 1.65,
              maxWidth: "30ch",
            }}
          >
            artiști, mentori, traineri și invitați care lucrează direct cu adolescenții, în roluri diferite.
          </motion.p>
        </div>

        {/* Right: portrait mosaic */}
        <div
          className="md:w-2/3 grid gap-0"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {people.map((p, i) => (
            <motion.div
              key={i}
              variants={slideItemVariants}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={p.src}
                alt={`${p.name} — ${p.role}`}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "0.5rem 0.6rem",
                  background: "rgba(34,35,36,0.72)",
                }}
              >
                <p style={{ color: "#fff", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.3 }}>
                  {p.name}
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {p.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
