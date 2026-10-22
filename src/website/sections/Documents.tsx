"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import { DriveButton } from "@/shared/ui/DriveButton";
import { FolderArt } from "@/shared/ui/FolderArt";
import { Reveal } from "@/shared/ui/Reveal";
import { Sparkle, Sun } from "@/shared/ui/Shapes";
import { Container, Eyebrow, Section } from "../ui";

/** One compact sun-yellow panel: folder illustration + a single action. */
export function Documents() {
  const { t } = useLang();
  const d = t.documents;
  return (
    <Section id="documents" className="bg-cream pt-0 short:pt-0 2xl:pt-0">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-sun-soft">
          <Sun className="pointer-events-none absolute -top-16 -right-16 w-56 opacity-60" />
          <div className="dots pointer-events-none absolute bottom-6 left-[38%] h-20 w-40 text-sun-deep/30" aria-hidden="true" />
          <div className="relative grid grid-cols-12 items-center gap-8 px-12 py-10 short:py-8 2xl:px-16 2xl:py-12">
            <div className="col-span-4 flex justify-center">
              <div className="relative">
                <span className="absolute inset-[8%] rounded-full bg-cream" aria-hidden="true" />
                <FolderArt className="relative w-[15rem] short:w-[13rem] 2xl:w-[17rem]" />
                <Sparkle className="absolute -top-2 left-2 w-6" color="var(--color-turquoise)" />
              </div>
            </div>
            <div className="col-span-8">
              <Eyebrow tone="turquoise">{d.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2.2rem] leading-tight font-extrabold text-ink short:text-[2rem] 2xl:text-[2.6rem]">{d.title}</h2>
              <p className="mt-3 max-w-[34rem] text-[1.05rem] leading-relaxed text-ink-soft">{d.text}</p>
              <DriveButton className="mt-6" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
