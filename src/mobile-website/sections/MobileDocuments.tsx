"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import { DriveButton } from "@/shared/ui/DriveButton";
import { FolderArt } from "@/shared/ui/FolderArt";
import { Reveal } from "@/shared/ui/Reveal";
import { Sun } from "@/shared/ui/Shapes";
import { MEyebrow, MSection } from "../ui";

export function MobileDocuments() {
  const { t } = useLang();
  const d = t.documents;
  return (
    <MSection id="documents" className="bg-cream pt-2">
      <Reveal y={12} className="relative overflow-hidden rounded-[1.75rem] bg-sun-soft px-4 pt-5 pb-5 min-[375px]:px-5">
        <Sun className="pointer-events-none absolute -top-10 -right-10 w-32 opacity-60" />
        <div className="relative flex items-center gap-3">
          <FolderArt className="w-24 shrink-0 min-[375px]:w-28" />
          <MEyebrow>{d.eyebrow}</MEyebrow>
        </div>
        <h2 className="relative mt-4 text-[1.45rem] leading-tight font-extrabold text-ink">{d.title}</h2>
        <p className="relative mt-2 text-[0.93rem] leading-relaxed text-ink-soft">{d.text}</p>
        <DriveButton className="relative mt-5 w-full px-4 text-center" />
      </Reveal>
    </MSection>
  );
}
