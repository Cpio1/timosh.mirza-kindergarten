"use client";

import { Reveal } from "@/shared/ui/Reveal";

/** Shared building blocks of the desktop composition. */

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[76rem] px-8 xl:px-10 2xl:max-w-[84rem] ${className}`}>{children}</div>;
}

/** Natural-height section; vertical padding shrinks on short laptop screens. */
export function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} data-section className={`relative py-20 short:py-14 2xl:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, tone = "turquoise" }: { children: React.ReactNode; tone?: "turquoise" | "sun" | "light" }) {
  const styles = {
    turquoise: "bg-turquoise-soft text-turquoise-deep",
    sun: "bg-sun-soft text-ink",
    light: "bg-white/15 text-white",
  }[tone];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.82rem] font-semibold ${styles}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "light" ? "bg-sun" : tone === "sun" ? "bg-sun-deep" : "bg-turquoise"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function Heading({ eyebrow, title, lead, tone, className = "", light = false }: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "turquoise" | "sun" | "light";
  className?: string;
  light?: boolean;
}) {
  return (
    <Reveal className={className}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-[2.4rem] leading-[1.08] font-extrabold tracking-tight short:text-[2.15rem] 2xl:text-[2.85rem] ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 max-w-xl text-[1.05rem] leading-relaxed 2xl:text-[1.12rem] ${light ? "text-white/85" : "text-ink-soft"}`}>{lead}</p>}
    </Reveal>
  );
}
