/**
 * Decorative shapes. All are aria-hidden, sized by the caller (`w-*`), inherit color where it makes
 * sense and are pure SVG — no images, nothing to download.
 */

type P = { className?: string };

/** A soft sun: yellow disc with a ring of rounded rays. */
export function Sun({ className = "" }: P) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="var(--color-sun)">
        {rays.map((a) => (
          <rect key={a} x="56" y="4" width="8" height="18" rx="4" transform={`rotate(${a} 60 60)`} opacity="0.85" />
        ))}
      </g>
      <circle cx="60" cy="60" r="30" fill="var(--color-sun)" />
      <circle cx="51" cy="51" r="9" fill="#fff" opacity="0.35" />
    </svg>
  );
}

/** Three stacked waves — the turquoise "river" motif. */
export function Waves({ className = "", color = "var(--color-turquoise)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 160 60" fill="none" className={className} aria-hidden="true">
      {[10, 28, 46].map((y, i) => (
        <path
          key={y}
          d={`M4 ${y} q 19 -12 38 0 t 38 0 t 38 0 t 38 0`}
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          opacity={1 - i * 0.28}
        />
      ))}
    </svg>
  );
}

/** Dashed ring, used around round photos and numbers. */
export function Ring({ className = "", color = "var(--color-turquoise)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="1.6" strokeDasharray="2 6" strokeLinecap="round" />
    </svg>
  );
}

/** Four-point sparkle. */
export function Sparkle({ className = "", color = "var(--color-sun)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c.9 6.4 5.6 11.1 12 12-6.4.9-11.1 5.6-12 12-.9-6.4-5.6-11.1-12-12C6.4 11.1 11.1 6.4 12 0Z" fill={color} />
    </svg>
  );
}

/** Organic blob silhouette; color via `fill`. */
export function Blob({ className = "", fill = "var(--color-turquoise-soft)", variant = 0 }: P & { fill?: string; variant?: 0 | 1 | 2 }) {
  const d = [
    "M62 6c22 2 40 20 44 42 4 23-8 47-30 56S26 108 13 90-2 46 10 27 40 4 62 6Z",
    "M55 4c25-3 50 14 52 38 2 22-12 32-18 48-7 18-30 22-48 14S6 80 4 58 30 7 55 4Z",
    "M60 8c18 0 30 14 40 28s8 34-4 48-34 20-52 14S8 72 8 52 22 22 34 14 46 8 60 8Z",
  ][variant];
  return (
    <svg viewBox="0 0 112 112" className={className} aria-hidden="true">
      <path d={d} fill={fill} />
    </svg>
  );
}

/** Half circle "hill", flat side down. */
export function Hill({ className = "", fill = "var(--color-sun)" }: P & { fill?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} aria-hidden="true">
      <path d="M0 50a50 50 0 0 1 100 0Z" fill={fill} />
    </svg>
  );
}

/** Wavy divider for the edge of a colored band; stretch it to full width. */
export function WaveEdge({ className = "", fill = "var(--color-milk)", flip = false }: P & { fill?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M0 0h1440v26c-120 22-240 32-360 22S840 8 720 14 480 52 360 54 120 40 0 26Z" fill={fill} />
    </svg>
  );
}

/** A little pebble trail of circles. */
export function Pebbles({ className = "" }: P) {
  return (
    <svg viewBox="0 0 120 30" className={className} aria-hidden="true">
      <circle cx="10" cy="15" r="8" fill="var(--color-turquoise)" />
      <circle cx="36" cy="15" r="6" fill="var(--color-sun)" />
      <circle cx="56" cy="15" r="4.5" fill="var(--color-turquoise)" opacity="0.6" />
      <circle cx="71" cy="15" r="3.2" fill="var(--color-sun)" opacity="0.8" />
      <circle cx="82" cy="15" r="2.2" fill="var(--color-turquoise)" opacity="0.5" />
    </svg>
  );
}
