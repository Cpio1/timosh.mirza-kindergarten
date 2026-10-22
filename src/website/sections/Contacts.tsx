"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import { ContactList } from "@/shared/ui/ContactList";
import { MapCard } from "@/shared/ui/MapCard";
import { Reveal } from "@/shared/ui/Reveal";
import { Blob, Ring, Sun, WaveEdge } from "@/shared/ui/Shapes";
import { Container, Heading, Section } from "../ui";

/** Contact rows on the left, a large 2GIS map framed by shapes on the right. */
export function Contacts() {
  const { t } = useLang();
  const c = t.contacts;
  return (
    <Section id="contacts" className="overflow-hidden">
      <WaveEdge fill="var(--color-cream)" className="absolute inset-x-0 top-0 h-10 w-full" />
      <Container className="relative grid grid-cols-12 items-center gap-10 xl:gap-12">
        <div className="col-span-6">
          <Heading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
          <Reveal delay={0.08} className="mt-7 short:mt-5">
            <ContactList columns />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative col-span-6">
          <Blob variant={2} fill="var(--color-turquoise-soft)" className="pointer-events-none absolute -top-[12%] -right-[10%] w-[60%]" />
          <Sun className="pointer-events-none absolute -bottom-[8%] -left-[6%] w-[22%]" />
          <Ring className="pointer-events-none absolute -top-[6%] left-[8%] w-[18%]" />
          <MapCard width={720} height={560} className="relative h-[min(62svh,30rem)] rounded-[2.25rem] shadow-soft ring-8 ring-cream short:h-[min(66svh,25rem)] 2xl:h-[min(60svh,34rem)]" />
        </Reveal>
      </Container>
    </Section>
  );
}
