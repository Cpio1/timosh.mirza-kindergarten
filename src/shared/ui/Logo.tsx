/** Sun over a turquoise wave — the same mark as the favicon (src/app/icon.svg). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="var(--color-cream)" />
      <circle cx="32" cy="28" r="15" fill="var(--color-sun)" />
      <circle cx="27" cy="23" r="4.5" fill="#fff" opacity=".4" />
      <path d="M6 41c5-5 10-5 15 0s10 5 15 0 10-5 15 0 9 5 12 2v3a31 31 0 0 1-56 4Z" fill="var(--color-turquoise)" />
      <path
        d="M10 50c4-3.5 8-3.5 12 0s8 3.5 12 0 8-3.5 12 0 7 3 9 1"
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Mark + wordmark. "Timosh Mirza" is a proper name and is never translated or upper-cased. */
export function Logo({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const mark = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const text = size === "sm" ? "text-[1.05rem]" : "text-[1.2rem]";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${mark} shrink-0 drop-shadow-[0_4px_8px_rgb(38_59_59/0.12)]`} />
      <span className={`font-display ${text} leading-none font-black tracking-tight text-ink`}>
        Timosh <span className="text-turquoise-deep">Mirza</span>
      </span>
    </span>
  );
}
