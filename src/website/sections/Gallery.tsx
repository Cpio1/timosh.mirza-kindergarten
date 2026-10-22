"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { toRows, useGallery } from "@/shared/hooks/useGallery";
import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media } from "@/shared/lib/media";
import { GalleryEmpty } from "@/shared/ui/GalleryEmpty";
import { GalleryTile } from "@/shared/ui/GalleryTile";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";
import { Waves } from "@/shared/ui/Shapes";
import { Container, Heading, Section } from "../ui";

const INITIAL = 6;
const PER_ROW = 3;

/**
 * Heading and the «show more» button live in a narrow left column, so the photo rows get the
 * whole height of a laptop screen. Justified rows: each photo keeps its own proportions.
 */
export function Gallery({ items }: { items: Media[] }) {
  const { t } = useLang();
  const g = useGallery(items, INITIAL);
  const rows = toRows(g.visible, PER_ROW, 3.8);

  if (items.length === 0) {
    return (
      <Section id="gallery" className="bg-cream">
        <Container>
          <Heading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
          <Reveal className="mt-8 short:mt-6">
            <GalleryEmpty />
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="gallery" className="bg-cream">
      <Container className="grid grid-cols-12 gap-8 xl:gap-10">
        <div className="col-span-3">
          <div className="sticky top-28">
            <Heading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
            <Waves className="mt-6 w-24" />
            {g.canExpand && (
              <button
                type="button"
                onClick={g.toggle}
                aria-expanded={g.expanded}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border-2 border-turquoise/40 bg-cream px-5 text-[0.95rem] font-semibold whitespace-nowrap text-turquoise-dark transition hover:border-turquoise hover:bg-turquoise-soft short:mt-6"
              >
                {g.expanded ? t.gallery.less : `${t.gallery.more} (+${g.hiddenCount})`}
                {g.expanded ? <ChevronUp className="h-4.5 w-4.5" aria-hidden="true" /> : <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />}
              </button>
            )}
          </div>
        </div>

        <div className="col-span-9 flex flex-col gap-3 2xl:gap-4">
          {rows.map((row, r) => (
            <Reveal key={r} delay={r < 2 ? r * 0.06 : 0} className="flex gap-3 2xl:gap-4">
              {row.spacer > 0 && <span style={{ flex: `${row.spacer / 2} 1 0` }} aria-hidden="true" />}
              {row.cells.map(({ item, index, ratio }) => (
                <div key={item.src} className="min-w-0 overflow-hidden rounded-[1.25rem]" style={{ flex: `${ratio} 1 0`, aspectRatio: ratio }}>
                  <GalleryTile item={item} index={index} sizes="(min-width: 1536px) 480px, 30vw" onOpen={g.show} />
                </div>
              ))}
              {row.spacer > 0 && <span style={{ flex: `${row.spacer / 2} 1 0` }} aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </Container>
      <Lightbox items={items} index={g.open} onClose={g.close} onStep={g.step} />
    </Section>
  );
}
