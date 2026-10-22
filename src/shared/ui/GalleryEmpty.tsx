"use client";

import { ArrowUpRight, ImageIcon } from "lucide-react";
import { kindergarten } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { InstagramIcon } from "./Icons";
import { MediaPlaceholder } from "./MediaView";

/** Shown while public/images has no photos: soft placeholder tiles and a way to Instagram. */
export function GalleryEmpty({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const tiles = compact ? ["col-span-2 aspect-[2/1]", "aspect-square", "aspect-square"] : ["row-span-2", "", "", "col-span-2"];
  return (
    <div className={compact ? "" : "grid grid-cols-12 items-center gap-8"}>
      <div
        className={compact ? "grid grid-cols-2 gap-2.5" : "col-span-7 grid h-[min(46svh,22rem)] grid-cols-3 grid-rows-2 gap-3"}
        aria-hidden="true"
      >
        {tiles.map((cls, i) => (
          <div key={i} className={`relative overflow-hidden rounded-[1.25rem] ${cls}`}>
            <MediaPlaceholder compact tone={i} />
          </div>
        ))}
      </div>
      <div className={compact ? "mt-5 text-center" : "col-span-5"}>
        <p className={`inline-flex items-center gap-2 font-display font-extrabold text-ink ${compact ? "text-[1.15rem]" : "text-[1.5rem]"}`}>
          <ImageIcon className="h-5 w-5 text-turquoise-deep" aria-hidden="true" />
          {t.gallery.empty}
        </p>
        <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{t.gallery.emptyHint}</p>
        <a
          href={kindergarten.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[0.95rem] font-semibold text-white transition hover:bg-turquoise-deep"
        >
          <InstagramIcon className="h-5 w-5" />
          {t.gallery.instagram}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
