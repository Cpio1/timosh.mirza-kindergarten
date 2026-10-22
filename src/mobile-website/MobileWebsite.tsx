"use client";

import type { SiteMedia } from "@/shared/lib/media";
import { MobileAbout } from "./sections/MobileAbout";
import { MobileActionBar } from "./sections/MobileActionBar";
import { MobileContacts } from "./sections/MobileContacts";
import { MobileDocuments } from "./sections/MobileDocuments";
import { MobileFooter } from "./sections/MobileFooter";
import { MobileGallery } from "./sections/MobileGallery";
import { MobileGroups } from "./sections/MobileGroups";
import { MobileHeader } from "./sections/MobileHeader";
import { MobileHero } from "./sections/MobileHero";
import { MobileMeals } from "./sections/MobileMeals";

/** Composition for phones and portrait tablets (< 1024px). */
export function MobileWebsite({ media }: { media: SiteMedia }) {
  return (
    <>
      <MobileHeader />
      <main id="main">
        <MobileHero media={media.hero} video={media.heroVideo} />
        <MobileAbout media={media.about} />
        <MobileGroups />
        <MobileMeals />
        <MobileGallery items={media.gallery} videos={media.videos} />
        <MobileDocuments />
        <MobileContacts />
      </main>
      <MobileFooter />
      <MobileActionBar />
    </>
  );
}
