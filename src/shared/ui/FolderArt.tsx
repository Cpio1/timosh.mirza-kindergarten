/** An open folder with blank sheets — illustrates the Drive folder without inventing any document titles. */
export function FolderArt({ className = "" }: { className?: string }) {
  const ink = "var(--color-ink)";
  return (
    <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
      <path d="M20 40a12 12 0 0 1 12-12h46l14 14h96a12 12 0 0 1 12 12v94a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12Z" fill="var(--color-turquoise-deep)" />
      <g transform="rotate(-8 90 70)">
        <rect x="52" y="22" width="88" height="110" rx="10" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <path d="M66 46h46M66 60h60M66 74h52M66 88h38" stroke="var(--color-line)" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g transform="rotate(7 140 70)">
        <rect x="100" y="18" width="88" height="110" rx="10" fill="var(--color-cream)" stroke={ink} strokeWidth="2.5" />
        <path d="M114 42h52M114 56h60M114 70h40" stroke="var(--color-line)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="160" cy="102" r="12" fill="var(--color-sun)" />
        <path d="m154 102 4.5 4.5 8-9" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M12 76a10 10 0 0 1 10-10h176a10 10 0 0 1 10 11l-8 77a10 10 0 0 1-10 9H30a10 10 0 0 1-10-9Z" fill="var(--color-turquoise)" />
      <path d="M40 96c10-6 20-6 30 0s20 6 30 0 20-6 30 0" fill="none" stroke="var(--color-cream)" strokeWidth="4" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}
