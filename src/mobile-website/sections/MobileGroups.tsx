"use client";

import { Phone } from "lucide-react";
import { links } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { GroupsDial } from "@/shared/ui/GroupsDial";
import { Reveal } from "@/shared/ui/Reveal";
import { Sparkle, WaveEdge } from "@/shared/ui/Shapes";
import { MHeading, MSection } from "../ui";

/** Turquoise band: the 12-bead dial centred, facts as small tiles, one call action. */
export function MobileGroups() {
  const { t } = useLang();
  const g = t.groups;
  const [, pupils, ages, hours] = g.facts;
  return (
    <MSection id="groups" className="overflow-hidden bg-turquoise-deep py-14 text-white">
      <WaveEdge fill="var(--color-cream)" className="absolute inset-x-0 top-0 h-6 w-full" />
      <WaveEdge fill="var(--color-milk)" flip className="absolute inset-x-0 bottom-0 h-6 w-full" />
      <div className="dots pointer-events-none absolute top-16 -right-6 h-24 w-28 text-white/15" aria-hidden="true" />

      <MHeading eyebrow={g.eyebrow} title={g.title} lead={g.lead} tone="light" light />

      <Reveal y={10} className="mt-6 flex justify-center text-[0.82rem] min-[375px]:text-[0.9rem]">
        <GroupsDial label={g.dial} className="w-[15em]" />
      </Reveal>

      <dl className="mt-6 grid grid-cols-2 gap-2.5">
        {[pupils, ages, hours].map((f, i) => (
          <Reveal key={f.label} y={10} delay={i * 0.05} className={`rounded-[1.1rem] bg-white px-3.5 py-3 text-ink ${i === 2 ? "col-span-2 flex items-baseline justify-between gap-3" : ""}`}>
            <dt className="sr-only">{f.label}</dt>
            <dd className={i === 2 ? "contents" : ""}>
              <span className="block font-display text-[1.35rem] leading-none font-black text-turquoise-deep tabular-nums">{f.value}</span>
              <span className="mt-1 block text-[0.8rem] text-ink-soft">{f.label}</span>
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal y={10} className="mt-5 rounded-[1.25rem] bg-white/10 p-4 ring-1 ring-white/15">
        <p className="flex gap-2.5 text-[0.92rem] leading-relaxed text-white/90">
          <Sparkle className="mt-1 h-4 w-4 shrink-0" />
          {g.note}
        </p>
        <a href={links.tel} className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-sun text-[0.95rem] font-semibold text-ink shadow-sun active:scale-[0.98]">
          <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          {g.cta}
        </a>
      </Reveal>
    </MSection>
  );
}
