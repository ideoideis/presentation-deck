import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { slideItemVariants } from "@/components/SlideSection";
import { asset } from "@/lib/utils";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/ideoideis", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/ideoideis/", label: "Instagram", Icon: Instagram },
  {
    href: "https://www.tiktok.com/@ideoideis",
    label: "TikTok",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  { href: "https://www.youtube.com/@IdeoIdeis_manifestul", label: "YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/company/ideo-ideis", label: "LinkedIn", Icon: Linkedin },
];

export function Slide12CTA() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between"
      style={{
        backgroundColor: "#E7004C",
        padding: "var(--slide-pt) var(--slide-pr) var(--slide-py) var(--slide-px)",
      }}
    >
      <div className="flex-1 flex flex-row gap-16 items-start mt-16">
        {/* Left: headline + quote + button */}
        <div className="w-1/2 flex flex-col gap-8">
          <div>
            <motion.h2
              variants={slideItemVariants}
              className="lowercase font-semibold leading-none"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                marginBottom: "1.5rem",
              }}
            >
              Ediția 21 începe acum.
            </motion.h2>

            <motion.p
              variants={slideItemVariants}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "clamp(0.9rem, 1.25vw, 1rem)",
                lineHeight: 1.7,
                maxWidth: "42ch",
              }}
            >
              Vă invităm să deveniți parte dintr-un proiect care construiește, an de an, o generație mai atentă, mai creativă și mai conectată la lume.
            </motion.p>
            <motion.p
              variants={slideItemVariants}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(0.85rem, 1.15vw, 0.95rem)",
                lineHeight: 1.6,
                maxWidth: "42ch",
                marginTop: "1rem",
              }}
            >
              ne vedem la vară la Alexandria.
            </motion.p>
            <motion.p
              variants={slideItemVariants}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(0.85rem, 1.15vw, 0.95rem)",
                lineHeight: 1.6,
                maxWidth: "42ch",
                marginTop: "0.5rem",
              }}
            >
              Pe parcursul anului ne vedem la București sau în oricare dintre orașele unde organizăm evenimente.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={slideItemVariants}
            style={{ display: "flex", flexDirection: "column", gap: "0.65rem", alignItems: "flex-start" }}
          >
            <a
              href="https://ideoideis.ro/implica-te/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
                color: "#E7004C",
                padding: "0.85rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              contactează-ne →
            </a>
            <a
              href={asset("deck-ideo-ideis-2026.pdf")}
              download
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "rgba(255,255,255,0.75)",
                padding: "0.85rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 400,
                border: "1px solid rgba(255,255,255,0.35)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fff";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              }}
            >
              descarcă această prezentare pdf
            </a>
          </motion.div>
        </div>

        {/* Right: contact info */}
        <div
          className="w-1/2"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: "var(--slide-px)" }}
        >
          <motion.p
            variants={slideItemVariants}
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            contact direct
          </motion.p>

          <motion.p
            variants={slideItemVariants}
            style={{
              color: "#fff",
              fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              marginBottom: "1rem",
            }}
          >
            Antoneta Gales
          </motion.p>

          <motion.a
            href="mailto:gales@ideoideis.ro"
            variants={slideItemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "0.75rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span style={{ display: "block", width: "16px", height: "1px", backgroundColor: "#fff", flexShrink: 0 }} />
            gales@ideoideis.ro
          </motion.a>

          <motion.a
            href="tel:+40722347439"
            variants={slideItemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "1rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span style={{ display: "block", width: "16px", height: "1px", backgroundColor: "#fff", flexShrink: 0 }} />
            0722347439
          </motion.a>

          <motion.div variants={slideItemVariants} style={{ marginTop: "1.5rem" }}>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "0.85rem",
              }}
            >
              urmărește-ne
            </p>
            <div style={{ display: "flex", gap: "1.1rem", alignItems: "center" }}>
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
