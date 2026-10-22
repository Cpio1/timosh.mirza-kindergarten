"use client";

import { m } from "framer-motion";
import { kindergarten } from "@/shared/data/kindergarten";

/**
 * Twelve groups drawn as twelve beads around a dial, with the count in the middle.
 * It shows "how many", nothing more — group names and ages are not published.
 * Size it with `className` (square); everything inside scales with it.
 */
export function GroupsDial({ label, className = "", tone = "dark" }: { label: string; className?: string; tone?: "dark" | "light" }) {
  const n = kindergarten.groupsCount;
  const dark = tone === "dark";
  return (
    <div className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="100" cy="100" r="78" fill="none" stroke={dark ? "rgb(255 255 255 / 0.22)" : "var(--color-line)"} strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
        <circle cx="100" cy="100" r="56" fill={dark ? "rgb(255 255 255 / 0.1)" : "var(--color-turquoise-soft)"} />
        {Array.from({ length: n }, (_, i) => {
          const a = (i / n) * Math.PI * 2 - Math.PI / 2;
          const x = Math.round((100 + Math.cos(a) * 78) * 100) / 100; // rounded: identical on server and every browser
          const y = Math.round((100 + Math.sin(a) * 78) * 100) / 100;
          const sun = i % 3 === 0;
          return (
            <m.g
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
            >
              <circle cx={x} cy={y} r={sun ? 12 : 10} fill={sun ? "var(--color-sun)" : dark ? "#fff" : "var(--color-turquoise)"} />
              <text
                x={x}
                y={y + 3.6}
                textAnchor="middle"
                fontSize="10"
                fontWeight="800"
                style={{ fontFamily: "var(--font-display)" }}
                fill={sun || dark ? "var(--color-ink)" : "#fff"}
              >
                {i + 1}
              </text>
            </m.g>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-display text-[3.6em] leading-none font-black ${dark ? "text-sun" : "text-turquoise-deep"}`}>{n}</span>
        <span className={`mt-[0.15em] text-[1.05em] font-semibold ${dark ? "text-white" : "text-ink"}`}>{label}</span>
      </div>
    </div>
  );
}
