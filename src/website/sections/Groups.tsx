"use client";

import { Phone } from "lucide-react";
import { links } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { GroupsDial } from "@/shared/ui/GroupsDial";
import { Reveal } from "@/shared/ui/Reveal";
import { Ring, Sparkle, WaveEdge } from "@/shared/ui/Shapes";
import { Container, Heading, Section } from "../ui";

/**
 * Deep turquoise band. Group names and ages per group are not published, so instead of
 * empty cards the section shows the general picture: a dial with one bead per group and key facts.
 */
export function Groups() {
  const { t } = useLang();
  const g = t.groups;
  return (
    <Section id="groups" className="overflow-hidden bg-turquoise-deep text-white">
      <WaveEdge fill="var(--color-cream)" className="absolute inset-x-0 top-0 h-10 w-full" />
      <WaveEdge fill="var(--color-milk)" flip className="absolute inset-x-0 bottom-0 h-10 w-full" />
      <div className="dots pointer-events-none absolute right-[4%] bottom-[14%] h-36 w-52 text-white/15" aria-hidden="true" />
      <Ring color="rgb(255 255 255 / 0.18)" className="pointer-events-none absolute -top-24 -left-24 w-80" />

      <Container className="relative grid grid-cols-12 items-center gap-10 py-6">
        <div className="col-span-6">
          <Heading eyebrow={g.eyebrow} title={g.title} lead={g.lead} tone="light" light />
          <Reveal delay={0.1} className="mt-8 flex max-w-[34rem] items-start gap-4 rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/15 short:mt-6">
            <Sparkle className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <p className="text-[0.98rem] leading-relaxed text-white/90">{g.note}</p>
              <a
                href={links.tel}
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-sun px-5 text-[0.95rem] font-semibold text-ink shadow-sun transition hover:-translate-y-0.5 hover:bg-[#f7d47a]"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                {g.cta}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="col-span-6 flex items-center justify-end gap-6 xl:gap-10">
          <Reveal className="text-[0.92rem] xl:text-[1rem] 2xl:text-[1.1rem]">
            <GroupsDial label={g.dial} className="w-[15em] short:w-[13.5em]" />
          </Reveal>
          <dl className="grid gap-3">
            {g.facts.slice(1).map((f, i) => (
              <Reveal key={f.label} delay={0.12 + i * 0.07} className="rounded-[1.25rem] bg-white px-5 py-3.5 text-ink shadow-card short:py-3">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-display text-[1.55rem] leading-none font-black text-turquoise-deep tabular-nums 2xl:text-[1.75rem]">{f.value}</span>
                  <span className="mt-1 block text-[0.88rem] text-ink-soft">{f.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
