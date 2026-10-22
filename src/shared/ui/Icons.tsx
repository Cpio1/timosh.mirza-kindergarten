/** Lucide no longer ships brand marks — these are drawn in its stroke style. */
export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5 4.8 16.3A8.6 8.6 0 1 1 8 19.4Z" />
      <path
        d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .5a6 6 0 0 0 2.4 2.3c.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .4-.2.7-.6.9-.6.3-1.4.4-2.2.1a9.3 9.3 0 0 1-5.2-5.1c-.3-.8-.2-1.6.1-2.2Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/**
 * Five friendly tableware illustrations for the «5 meals» section. They only say "a meal",
 * never what is served — the menu is not published.
 */
export function MealArt({ index, className = "" }: { index: number; className?: string }) {
  const ink = "var(--color-ink)";
  const t = "var(--color-turquoise)";
  const s = "var(--color-sun)";
  const c = "var(--color-cream)";
  const common = { stroke: ink, strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const art = [
    // cup with steam
    <g key="cup">
      <path d="M14 26h28v10a14 14 0 0 1-28 0Z" fill={s} {...common} />
      <path d="M42 30h3a5 5 0 0 1 0 10h-3" fill="none" {...common} />
      <path d="M22 12c-2 3 2 5 0 8M30 10c-2 3 2 5 0 8" fill="none" {...common} stroke={t} />
      <path d="M12 54h32" {...common} />
    </g>,
    // bowl with spoon
    <g key="bowl">
      <path d="M40 8 31 26" {...common} />
      <path d="M8 28h48a24 18 0 0 1-48 0Z" fill={t} {...common} />
      <path d="M14 32c6 4 30 4 36 0" fill="none" {...common} stroke={c} />
      <path d="M22 52h20" {...common} />
    </g>,
    // plate with fork & spoon
    <g key="plate">
      <circle cx="32" cy="32" r="18" fill={c} {...common} />
      <circle cx="32" cy="32" r="10" fill={s} {...common} />
      <path d="M6 14v12M10 14v12M6 26a2 2 0 0 0 4 0M8 26v24" fill="none" {...common} />
      <path d="M57 14c-3 0-4 4-4 8s1 6 4 6v22" fill="none" {...common} />
    </g>,
    // apple
    <g key="apple">
      <path d="M32 20c-6-5-20-4-20 12 0 12 8 22 14 22 3 0 4-2 6-2s3 2 6 2c6 0 14-10 14-22 0-16-14-17-20-12Z" fill={t} {...common} />
      <path d="M32 20c0-6 2-9 5-11" fill="none" {...common} />
      <path d="M36 14c4-4 9-4 12-2-3 4-8 5-12 2Z" fill={s} {...common} />
      <path d="M20 30c0-4 3-6 6-6" fill="none" {...common} stroke={c} />
    </g>,
    // glass
    <g key="glass">
      <path d="M18 10h28l-4 42H22Z" fill={c} {...common} />
      <path d="M20.5 28h23L42 50H22Z" fill={s} stroke="none" />
      <path d="M18 10h28l-4 42H22Z" fill="none" {...common} />
      <path d="M40 4 34 22" {...common} stroke={t} />
    </g>,
  ][index % 5];
  return (
    <svg viewBox="0 0 64 60" className={className} aria-hidden="true">
      {art}
    </svg>
  );
}
