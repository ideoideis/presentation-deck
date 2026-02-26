import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

export function Slide08WhyHere() {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Left: photo with red frame */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={asset("/images/crowd-bw.jpg")}
          alt="Public outdoor la alexandria"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.2)", opacity: 0.75 }}
        />
        {/* Red frame */}
        <motion.div
          variants={slideItemVariants}
          className="absolute border-[1.5px] border-[#E7004C] pointer-events-none inset-4 md:inset-10"
        />
      </div>

      {/* Right: text */}
      <div
        className="flex flex-col justify-between md:min-w-[min(40vw,580px)] md:border-l"
        style={{
          borderColor: "rgba(0,0,0,0.08)",
          padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
        }}
      >
        <div className="pt-12 md:pt-16">
          <motion.span
            variants={slideItemVariants}
            style={{
              display: "inline-block",
              backgroundColor: "#E7004C",
              color: "#fff",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.15rem 0.55rem",
              marginBottom: "1.5rem",
            }}
          >
            impact
          </motion.span>

          <motion.h2
            variants={slideItemVariants}
            className="lowercase font-semibold leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#222324",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            în
            <br />
            <span style={{ color: "#E7004C" }}>toată țara</span>
          </motion.h2>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.7)",
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
              lineHeight: 1.65,
              maxWidth: "38ch",
            }}
          >
            Adolescenții care vin la Ideo Ideis duc festivalul mai departe, în orașele lor.
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.6)",
              fontSize: "clamp(0.88rem, 1.3vw, 1.05rem)",
              lineHeight: 1.65,
              maxWidth: "38ch",
              marginTop: "1rem",
            }}
          >
            Valorile și experiențele trăite la Alexandria se transformă în inițiative, trupe, proiecte și dialog în comunitățile lor.
          </motion.p>
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(34,35,36,0.55)",
              fontSize: "clamp(0.88rem, 1.3vw, 1.05rem)",
              lineHeight: 1.65,
              maxWidth: "38ch",
              marginTop: "1rem",
            }}
          >
            Ideo Ideis începe la Alexandria și continuă în toată țara.
          </motion.p>
        </div>

        <motion.a
          href="https://maps.app.goo.gl/Ewj1h2r1nkPfBueN7"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideItemVariants}
          className="micro-label transition-colors"
          style={{ color: "rgba(34,35,36,0.4)", textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#E7004C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(34,35,36,0.4)";
          }}
        >
          alexandria · teleorman · românia
        </motion.a>
      </div>
    </div>
  );
}
