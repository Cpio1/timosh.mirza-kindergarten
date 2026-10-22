"use client";

import { m } from "framer-motion";
import { ArrowDown, Clock3, MapPin, MessageCircle } from "lucide-react";
import { kindergarten } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media, VideoMedia } from "@/shared/lib/media";
import { HERO_SIZES, isLandscape } from "@/shared/lib/media-sizes";
import { scrollToSection } from "@/shared/lib/scroll";
import { MediaView } from "@/shared/ui/MediaView";
import { Blob, Ring, Sparkle, Sun, Waves } from "@/shared/ui/Shapes";
import { Container } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero({ media, video }: { media: Media | null; video: VideoMedia | null }) {
  const { t } = useLang();
  const h = t.hero;
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" data-section className="relative overflow-hidden pt-28 pb-16 short:pt-24 short:pb-12 2xl:pt-32 2xl:pb-20">
      {/* backdrop */}
      <Blob variant={0} className="pointer-events-none absolute -top-[26%] -right-[10%] w-[40rem] opacity-70 2xl:w-[50rem]" />
      <div className="dots pointer-events-none absolute top-[22%] left-[3%] h-40 w-40 text-turquoise/25" aria-hidden="true" />

      <Container className="relative grid grid-cols-12 items-center gap-8">
        <div className="col-span-6 xl:col-span-6">
          <m.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/80 px-3.5 py-1.5 text-[0.85rem] font-medium text-ink-soft">
            <MapPin className="h-4 w-4 text-turquoise-deep" aria-hidden="true" />
            {h.place}
          </m.p>

          <m.h1
            {...rise(0.08)}
            className="mt-5 font-display text-[4.6rem] leading-[0.92] font-black tracking-[-0.02em] text-ink short:text-[4.1rem] xl:text-[5.4rem] short:xl:text-[4.6rem] 2xl:text-[6.4rem]"
          >
            Timosh
            <br />
            <span className="relative inline-block text-turquoise-deep">
              Mirza
              <svg viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-[0.2em] w-full" aria-hidden="true">
                <path d="M4 16C60 6 120 4 170 10s92 8 126-2" fill="none" stroke="var(--color-sun)" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </span>
          </m.h1>

          <m.p {...rise(0.16)} className="mt-7 max-w-[31rem] text-[1.1rem] leading-relaxed text-ink-soft short:mt-6 2xl:text-[1.2rem]">
            {h.subtitle}
          </m.p>

          <m.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3 short:mt-6">
            <a
              href="#contacts"
              onClick={go("contacts")}
              className="inline-flex h-13 items-center gap-2.5 rounded-full bg-turquoise-deep px-7 text-[1rem] font-semibold text-white shadow-turquoise transition hover:-translate-y-0.5 hover:bg-turquoise-dark"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {h.contact}
            </a>
            <a
              href="#about"
              onClick={go("about")}
              className="inline-flex h-13 items-center gap-2.5 rounded-full border-2 border-ink/10 bg-cream px-7 text-[1rem] font-semibold text-ink transition hover:-translate-y-0.5 hover:border-sun hover:bg-sun-soft"
            >
              {h.more}
              <ArrowDown className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </m.div>

          <m.dl {...rise(0.32)} className="mt-10 inline-grid grid-cols-3 rounded-[1.75rem] border border-line bg-cream/90 shadow-card short:mt-8">
            {h.stats.map((s, i) => (
              <div key={s.label} className={`px-6 py-3.5 2xl:px-8 2xl:py-4 ${i > 0 ? "border-l border-line" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex items-baseline gap-1.5">
                  <span className={`font-display text-[1.9rem] leading-none font-black tabular-nums 2xl:text-[2.2rem] ${i === 1 ? "text-sun-deep" : "text-turquoise-deep"}`}>
                    {s.value}
                  </span>
                  <span className="text-[0.92rem] font-medium text-ink-soft">{s.label}</span>
                </dd>
              </div>
            ))}
          </m.dl>
        </div>

        {/* visual */}
        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative col-span-6 justify-self-end"
        >
          <div className={`relative max-w-full h-[min(66svh,32rem)] ${isLandscape(media) ? "aspect-[1.1]" : "aspect-[0.94]"} short:h-[min(68svh,28rem)] 2xl:h-[min(66svh,38rem)]`}>
            <Sun className="absolute -top-[9%] -left-[11%] w-[38%] animate-spin-slow" />
            <Ring className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%]" />
            <div className="blob-a absolute inset-0 overflow-hidden bg-turquoise-soft shadow-soft ring-8 ring-cream">
              <MediaView media={media} alt={h.photoAlt} sizes={HERO_SIZES} priority placeholder={h.placeholder} />
            </div>
            <Waves className="absolute -right-[6%] bottom-[16%] w-[24%] animate-drift" />
            {video ? (
              // main-page2 is a video: a small muted, looping "window" next to the main photo
              <div className="absolute -top-[3%] -right-[7%] aspect-square w-[32%] overflow-hidden rounded-full bg-turquoise-soft shadow-soft ring-[6px] ring-cream">
                <MediaView media={video} alt={h.videoAlt} sizes="200px" />
              </div>
            ) : (
              <>
                <Sparkle className="absolute top-[6%] right-[4%] w-[6%]" />
                <Sparkle className="absolute top-[18%] right-[-2%] w-[3.5%]" color="var(--color-turquoise)" />
              </>
            )}

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="glass absolute bottom-[4%] -left-[8%] flex items-center gap-3 rounded-2xl border border-white/70 py-3 pr-5 pl-3 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sun text-ink">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.78rem] font-medium text-ink-soft">{h.hoursNote}</span>
                <span className="block font-display text-[1.15rem] leading-tight font-extrabold text-ink tabular-nums">
                  {kindergarten.hours.opens}–{kindergarten.hours.closes}
                </span>
              </span>
            </m.div>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
