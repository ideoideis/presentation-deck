import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 4000, prefix: "~", label: "participanți (15–18 ani)", detail: "adolescenți din toată țara" },
  { value: 160, prefix: "", label: "trupe din țară", detail: "trupe înscrise" },
  { value: 1600, prefix: "~", label: "voluntari (alexandria)", detail: "voluntari locali" },
  { value: 200000, prefix: "", label: "public local", detail: "spectatori în alexandria" },
  { value: 16000000, prefix: "~", label: "reach național", detail: "vizionări mass-media și online" },
];

function StatItem({ stat, compact }: { stat: typeof stats[0]; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const count = useCountUp(stat.value, 1400, inView);

  const formatted =
    stat.value >= 1000
      ? count.toLocaleString("ro-RO")
      : count.toString();

  return (
    <motion.div
      ref={ref}
      variants={slideItemVariants}
      className="min-w-0 flex-1 flex flex-col justify-between"
      style={{
        borderTop: "2px solid #E7004C",
        borderLeft: "none",
        padding:
          "clamp(1.25rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)",
      }}
    >
      <div>
        <p
          className="font-semibold lowercase tabular-nums"
          style={{
            fontSize: compact ? "clamp(1rem, 2.5vw, 2.25rem)" : "clamp(1.75rem, 4.5vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            marginBottom: "0.5rem",
            overflow: "hidden",
          }}
        >
          {stat.prefix}{formatted}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(0.72rem, 1vw, 0.9rem)",
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          {stat.detail}
        </p>
      </div>
      <p
        className="lowercase"
        style={{
          color: "#E7004C",
          fontSize: "0.55rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginTop: "0.75rem",
          fontWeight: 600,
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function Slide04Clarity() {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#2c2d34",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
      }}
    >
      {/* Stats — 3 cols desktop, 2 cols mobile for deck readability */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 flex-1 gap-0"
        style={{ marginTop: "clamp(4rem, 3vh, 2rem)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${i === 4 ? "col-span-2 md:col-span-1" : ""} ${
              i % 2 === 1 ? "border-l border-white/[0.07]" : ""
            } ${i % 2 === 1 && i % 3 === 0 ? "md:border-l-0" : ""} ${
              i % 3 > 0 ? "md:border-l md:border-white/[0.07]" : ""
            } ${i >= 2 ? "border-t border-white/[0.07]" : ""}`}
          >
            <StatItem
              stat={stat}
              compact={stat.value >= 100_000}
            />
          </div>
        ))}
      </div>

      {/* Eyebrow — bottom */}
      <motion.p
        variants={slideItemVariants}
        className="micro-label"
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "clamp(1.25rem, 3vh, 2.5rem)",
          paddingBottom: "0.25rem",
          flexShrink: 0,
        }}
      >
        public · per ediție
      </motion.p>
    </div>
  );
}
