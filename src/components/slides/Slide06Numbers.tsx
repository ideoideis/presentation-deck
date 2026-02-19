import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideItemVariants } from "@/components/SlideSection";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 200, prefix: "~", label: "participanți (15–18 ani)" },
  { value: 8, prefix: "", label: "trupe din țară" },
  { value: 80, prefix: "~", label: "voluntari (alexandria)" },
  { value: 10000, prefix: "", label: "public local (țintă)" },
  { value: 800000, prefix: "", label: "reach național (țintă)" },
];

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const count = useCountUp(stat.value, 1400, inView);

  const formatted =
    stat.value >= 1000
      ? count.toLocaleString("ro-RO")
      : count.toString();

  return (
    <motion.div ref={ref} variants={slideItemVariants} style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.25rem" }}>
      <p
        className="font-semibold lowercase leading-none"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 7rem)",
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 0.9,
        }}
      >
        {stat.prefix}{formatted}
      </p>
      <p
        className="micro-label mt-2"
        style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.15em" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function Slide06Numbers() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-10 md:p-16"
      style={{ backgroundColor: "#E7004C" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8 pt-12 md:pt-16">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>

      <motion.p
        variants={slideItemVariants}
        className="micro-label"
        style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", letterSpacing: "0.15em" }}
      >
        date cumulate · 20 ediții
      </motion.p>
    </div>
  );
}
