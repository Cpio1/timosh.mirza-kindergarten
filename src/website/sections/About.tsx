"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media } from "@/shared/lib/media";
import { ABOUT_SIZES } from "@/shared/lib/media-sizes";
import { factIcons, factTints } from "@/shared/ui/factIcons";
import { MediaView } from "@/shared/ui/MediaView";
import { Reveal } from "@/shared/ui/Reveal";
import { Hill, Pebbles, Sparkle, WaveEdge } from "@/shared/ui/Shapes";
import { Container, Heading, Section } from "../ui";

/** Cream band: an arched photo on the left, story and four fact tiles on the right. */
export function About({ media }: { media: Media | null }) {
  const { t } = useLang();
  const a = t.about;
  return (
    <Section id="about" className="bg-cream">
      <WaveEdge fill="var(--color-milk)" className="absolute inset-x-0 top-0 h-10 w-full" />
      <Container className="relative grid grid-cols-12 items-center gap-10 pt-6 xl:gap-14">
        <Reveal className="col-span-5">
          <div className="relative mx-auto aspect-[0.8] h-[min(64svh,30rem)] short:h-[min(66svh,26rem)] 2xl:h-[min(64svh,34rem)]">
            <Hill fill="var(--color-turquoise)" className="absolute -bottom-[2%] -left-[10%] w-[62%] opacity-90" />
            <div className="absolute -top-[4%] -right-[8%] h-[34%] w-[34%] rounded-full bg-sun" aria-hidden="true" />
            <div className="arch absolute inset-0 overflow-hidden bg-turquoise-soft shadow-soft ring-8 ring-cream">
              <MediaView media={media} alt={a.photoAlt} sizes={ABOUT_SIZES} placeholder={t.hero.placeholder} />
            </div>
            <Sparkle className="absolute top-[30%] -left-[7%] w-[7%]" color="var(--color-turquoise)" />
            <Pebbles className="absolute -right-[16%] bottom-[10%] w-[30%]" />
          </div>
        </Reveal>

        <div className="col-span-7">
          <Heading eyebrow={a.eyebrow} title={a.title} />
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-[36rem] text-[1.08rem] leading-relaxed text-ink-soft 2xl:text-[1.15rem]">{a.text}</p>
          </Reveal>
          <ul className="mt-8 grid max-w-[40rem] grid-cols-2 gap-3.5 short:mt-6 2xl:gap-4">
            {a.facts.map((f, i) => {
              const Icon = factIcons[f.key];
              return (
                <Reveal as="li" key={f.key} delay={0.1 + i * 0.06} className="flex items-center gap-4 rounded-[1.4rem] border border-line bg-milk/60 p-4 transition-shadow hover:shadow-card short:p-3.5">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${factTints[i]}`}>
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1.2rem] leading-tight font-extrabold text-ink tabular-nums">{f.value}</span>
                    <span className="mt-0.5 block text-[0.88rem] leading-snug text-ink-soft">{f.label}</span>
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
