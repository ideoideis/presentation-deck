import { motion } from "framer-motion";
import { slideItemVariants } from "@/components/SlideSection";

const QUOTE = "aici am vorbit prima oară fără să-mi tremure vocea.";
const CAPTION = "citat anonim din feedback";

export function Slide10Quote() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center p-10 md:p-16"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.blockquote
        variants={slideItemVariants}
        style={{
          color: "#222324",
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          lineHeight: 1.6,
          fontStyle: "italic",
          maxWidth: "36ch",
          textAlign: "center",
        }}
      >
        „{QUOTE}"
      </motion.blockquote>
      <motion.p
        variants={slideItemVariants}
        className="micro-label mt-6"
        style={{ color: "rgba(34,35,36,0.4)", fontSize: "0.65rem", letterSpacing: "0.12em" }}
      >
        {CAPTION}
      </motion.p>
    </div>
  );
}
