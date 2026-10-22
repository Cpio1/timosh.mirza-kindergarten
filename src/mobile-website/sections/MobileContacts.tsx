"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import { ContactList } from "@/shared/ui/ContactList";
import { MapCard } from "@/shared/ui/MapCard";
import { Reveal } from "@/shared/ui/Reveal";
import { Sun, WaveEdge } from "@/shared/ui/Shapes";
import { MHeading, MSection } from "../ui";

/** Actions first (that's what a phone visitor came for), the map below them. */
export function MobileContacts() {
  const { t } = useLang();
  const c = t.contacts;
  return (
    <MSection id="contacts" className="overflow-hidden pt-14">
      <WaveEdge fill="var(--color-cream)" className="absolute inset-x-0 top-0 h-6 w-full" />
      <MHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <Reveal y={10} className="mt-6">
        <ContactList compact />
      </Reveal>
      <Reveal y={10} className="relative mt-6">
        <Sun className="pointer-events-none absolute -top-6 -right-4 z-10 w-16" />
        <MapCard width={640} height={480} className="relative aspect-[4/3] rounded-[1.75rem] shadow-soft ring-[5px] ring-cream" />
      </Reveal>
    </MSection>
  );
}
