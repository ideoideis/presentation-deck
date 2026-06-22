import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { slideItemVariants } from "@/components/SlideSection";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = { value: number; prefix: string; label: string; detail: string; note?: string };

// Language-neutral values — only prefix/label/detail are translated.
const STAT_VALUES = [6000, 500, 160, 200000, 16000000];

const NUMBER_LOCALES: Record<string, string> = { ro: "ro-RO", en: "en-US", de: "de-DE" };

function StatItem({ stat, compact }: { stat: Stat; compact?: boolean }) {
  const { i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const count = useCountUp(stat.value, 1400, inView);

  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "ro").split("-")[0];
  const formatted =
    stat.value >= 1000
      ? count.toLocaleString(NUMBER_LOCALES[lang] ?? "ro-RO")
      : count.toString();

  return (
    <motion.div
      ref={ref}
      variants={slideItemVariants}
      className="min-w-0 flex-1 flex flex-col justify-between"
      style={{
        borderTop: "2px solid #E7004C",
        borderLeft: "none",
        padding: "1.5rem 1.25rem",
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
      {stat.note && (
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "clamp(0.65rem, 0.85vw, 0.75rem)",
            lineHeight: 1.45,
            marginTop: "0.5rem",
            fontStyle: "italic",
          }}
        >
          {stat.note}
        </p>
      )}
    </motion.div>
  );
}

export function Slide05Clarity() {
  const { t } = useTranslation();
  const statTexts = t("slide05.stats", { returnObjects: true }) as {
    prefix: string;
    label: string;
    detail: string;
  }[];
  const stats: Stat[] = STAT_VALUES.map((value, i) => ({ value, ...statTexts[i] }));
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#2c2d34",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      {/* Lead line */}
      <motion.p
        variants={slideItemVariants}
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
          lineHeight: 1.6,
          maxWidth: "52ch",
          marginTop: "2.5rem",
          marginBottom: "0.5rem",
        }}
      >
        {t("slide05.lead")}
      </motion.p>

      {/* Stats — 3 cols desktop, 2 cols mobile for deck readability */}
      <div
        className="grid grid-cols-3 flex-1 gap-0"
        style={{ marginTop: "2rem" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${i === 4 ? "col-span-1" : ""} ${
              i % 3 > 0 ? "border-l border-white/[0.07]" : ""
            } ${i >= 3 ? "border-t border-white/[0.07]" : ""}`}
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
          marginTop: "2rem",
          paddingBottom: "0.25rem",
          flexShrink: 0,
        }}
      >
        {t("slide05.eyebrow")}
      </motion.p>
    </div>
  );
}
