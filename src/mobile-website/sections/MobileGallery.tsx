"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { toRows, useGallery } from "@/shared/hooks/useGallery";
import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media } from "@/shared/lib/media";
import { GalleryEmpty } from "@/shared/ui/GalleryEmpty";
import { GalleryTile } from "@/shared/ui/GalleryTile";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";
import { MHeading, MSection } from "../ui";

const INITIAL = 4;

/** Two photos per row, both at their own proportions; four shown first. */
export function MobileGallery({ items }: { items: Media[] }) {
  const { t } = useLang();
  const g = useGallery(items, INITIAL);
  const rows = toRows(g.visible, 2, 1.6);

  return (
    <MSection id="gallery" className="bg-cream">
      <MHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
      <div className="mt-6">
        {items.length === 0 ? (
          <Reveal y={10}>
            <GalleryEmpty compact />
          </Reveal>
        ) : (
          <div className="flex flex-col gap-2">
            {rows.map((row, r) => (
              <Reveal key={r} y={10} className="flex gap-2">
                {row.spacer > 0 && <span style={{ flex: `${row.spacer / 2} 1 0` }} aria-hidden="true" />}
                {row.cells.map(({ item, index, ratio }) => (
                  <div key={item.src} className="min-w-0 overflow-hidden rounded-2xl" style={{ flex: `${ratio} 1 0`, aspectRatio: ratio }}>
                    <GalleryTile item={item} index={index} sizes="50vw" onOpen={g.show} />
                  </div>
                ))}
                {row.spacer > 0 && <span style={{ flex: `${row.spacer / 2} 1 0` }} aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        )}
        {g.canExpand && (
          <button
            type="button"
            onClick={g.toggle}
            aria-expanded={g.expanded}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-turquoise/40 bg-cream text-[0.95rem] font-semibold text-turquoise-dark active:bg-turquoise-soft"
          >
            {g.expanded ? t.gallery.less : `${t.gallery.more} (+${g.hiddenCount})`}
            {g.expanded ? <ChevronUp className="h-4.5 w-4.5" aria-hidden="true" /> : <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />}
          </button>
        )}
      </div>
      <Lightbox items={items} index={g.open} onClose={g.close} onStep={g.step} />
    </MSection>
  );
}
