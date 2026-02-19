import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SlideSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  "data-slide-index"?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const slideItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SlideSection({ id, className = "", children, ...rest }: SlideSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-slide ${className}`}
      {...rest}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}
