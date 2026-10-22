"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media } from "@/shared/lib/media";
import { ABOUT_SIZES } from "@/shared/lib/media-sizes";
import { factIcons, factTints } from "@/shared/ui/factIcons";
import { MediaView } from "@/shared/ui/MediaView";
import { Reveal } from "@/shared/ui/Reveal";
import { Hill, Pebbles, WaveEdge } from "@/shared/ui/Shapes";
import { MHeading, MSection } from "../ui";

/** Cream band: story, a wide photo with a turquoise hill behind it, then a 2×2 grid of facts. */
export function MobileAbout({ media }: { media: Media | null }) {
  const { t } = useLang();
  const a = t.about;
  return (
    <MSection id="about" className="bg-cream pt-14">
      <WaveEdge fill="var(--color-milk)" className="absolute inset-x-0 top-0 h-6 w-full" />
      <MHeading eyebrow={a.eyebrow} title={a.title} />
      <Reveal y={12} delay={0.05}>
        <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{a.text}</p>
      </Reveal>

      <Reveal y={12} className="relative mt-7 mb-2">
        <Hill fill="var(--color-turquoise)" className="absolute -bottom-2 -left-2 w-32" />
        <span className="absolute -top-3 right-6 h-12 w-12 rounded-full bg-sun" aria-hidden="true" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[5rem_2rem_2rem_2rem] bg-turquoise-soft shadow-soft ring-[5px] ring-cream">
          <MediaView media={media} alt={a.photoAlt} sizes={ABOUT_SIZES} placeholder={t.hero.placeholder} />
        </div>
        <Pebbles className="absolute -bottom-5 right-2 w-24" />
      </Reveal>

      <ul className="mt-8 grid grid-cols-2 gap-2.5">
        {a.facts.map((f, i) => {
          const Icon = factIcons[f.key];
          return (
            <Reveal as="li" key={f.key} y={10} delay={i * 0.04} className="rounded-[1.25rem] border border-line bg-milk/60 p-3.5">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${factTints[i]}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-2.5 block font-display text-[1.05rem] leading-tight font-extrabold text-ink tabular-nums min-[375px]:text-[1.12rem]">{f.value}</span>
              <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-soft">{f.label}</span>
            </Reveal>
          );
        })}
      </ul>
    </MSection>
  );
}
