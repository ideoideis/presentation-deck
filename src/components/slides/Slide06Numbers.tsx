import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideItemVariants } from "@/components/SlideSection";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 4000, prefix: "~", label: "participanți (15–18 ani)" },
  { value: 160, prefix: "", label: "trupe din țară" },
  { value: 1600, prefix: "~", label: "voluntari (alexandria)" },
  { value: 200000, prefix: "", label: "public local" },
  { value: 16000000, prefix: "~", label: "reach național" },
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
      className="min-w-0"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.18)",
        paddingTop: compact ? "0.75rem" : "1.25rem",
      }}
    >
      <p
        className="font-semibold lowercase leading-none tabular-nums"
        style={{
          fontSize: compact ? "clamp(1rem, 2.5vw, 2.25rem)" : "clamp(1.75rem, 4.5vw, 4.5rem)",
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 0.9,
          overflow: "hidden",
        }}
      >
        {stat.prefix}{formatted}
      </p>
      <p
        className="micro-label mt-1.5 md:mt-2"
        style={{
          color: "#fff",
          fontSize: compact ? "0.58rem" : "0.7rem",
          letterSpacing: "0.12em",
          opacity: 0.92,
          fontWeight: 500,
          lineHeight: 1.3,
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function Slide06Numbers() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between overflow-hidden"
      style={{
        backgroundColor: "#c40045",
        padding: "var(--slide-pt) var(--slide-px) var(--slide-py)",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 pt-8 md:pt-12 flex-1 content-center">
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
            compact={stat.value >= 100_000}
          />
        ))}
      </div>

      <motion.div
        variants={slideItemVariants}
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          padding: "0.5rem 1rem",
          display: "inline-flex",
          alignSelf: "flex-start",
          flexShrink: 0,
        }}
      >
        <span
          className="micro-label"
          style={{ color: "#fff", fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 500 }}
        >
          în 20 de ediții
        </span>
      </motion.div>
    </div>
  );
}
