"use client";

import { Reveal } from "@/shared/ui/Reveal";

/** Building blocks of the phone composition: narrow gutters, small headings, light reveals. */

export function MSection({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    // `isolate` + negative z on direct decor children (svg shapes, aria-hidden dots): the decor
    // paints above the section background but below the text and cards.
    <section
      id={id}
      data-section
      className={`relative isolate px-4 py-12 min-[390px]:px-5 [&>[aria-hidden=true]]:-z-10 [&>svg]:-z-10 ${className}`}
    >
      {children}
    </section>
  );
}

export function MEyebrow({ children, tone = "turquoise" }: { children: React.ReactNode; tone?: "turquoise" | "sun" | "light" }) {
  const styles = {
    turquoise: "bg-turquoise-soft text-turquoise-deep",
    sun: "bg-sun-soft text-ink",
    light: "bg-white/15 text-white",
  }[tone];
  return <span className={`inline-flex rounded-full px-3 py-1 text-[0.78rem] font-semibold ${styles}`}>{children}</span>;
}

export function MHeading({ eyebrow, title, lead, tone, light = false, center = false }: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "turquoise" | "sun" | "light";
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal y={12} className={center ? "text-center" : ""}>
      <MEyebrow tone={tone}>{eyebrow}</MEyebrow>
      <h2 className={`mt-3 text-[1.6rem] leading-[1.12] font-extrabold tracking-tight min-[390px]:text-[1.75rem] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-3 text-[0.97rem] leading-relaxed ${light ? "text-white/85" : "text-ink-soft"}`}>{lead}</p>}
    </Reveal>
  );
}
