"use client";

import type { SiteMedia } from "@/shared/lib/media";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";
import { Documents } from "./sections/Documents";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Groups } from "./sections/Groups";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Meals } from "./sections/Meals";

/** Composition for laptops and wide monitors (≥ 1024px). */
export function Website({ media }: { media: SiteMedia }) {
  return (
    <>
      <Header />
      <main id="main">
        <Hero media={media.hero} video={media.heroVideo} />
        <About media={media.about} />
        <Groups />
        <Meals />
        <Gallery items={media.gallery} videos={media.videos} />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
