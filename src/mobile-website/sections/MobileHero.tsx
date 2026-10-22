"use client";

import { m } from "framer-motion";
import { ArrowDown, Clock3, MapPin, MessageCircle } from "lucide-react";
import { kindergarten } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import type { Media } from "@/shared/lib/media";
import { HERO_SIZES } from "@/shared/lib/media-sizes";
import { scrollToSection } from "@/shared/lib/scroll";
import { MediaView } from "@/shared/ui/MediaView";
import { Blob, Sparkle, Sun, Waves } from "@/shared/ui/Shapes";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease },
});

/** Phone hero: title first, then a wide blob photo with the key numbers pinned to its edge. */
export function MobileHero({ media }: { media: Media | null }) {
  const { t } = useLang();
  const h = t.hero;
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" data-section className="relative overflow-hidden px-4 pt-[calc(5rem+env(safe-area-inset-top))] pb-10 min-[390px]:px-5">
      <Blob variant={0} className="pointer-events-none absolute -top-16 -right-24 w-72 opacity-70" />

      <m.p {...rise(0)} className="relative inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/80 px-3 py-1 text-[0.78rem] font-medium text-ink-soft">
        <MapPin className="h-3.5 w-3.5 text-turquoise-deep" aria-hidden="true" />
        {h.place}
      </m.p>

      <m.h1 {...rise(0.06)} className="relative mt-4 font-display text-[3.05rem] leading-[0.95] font-black tracking-[-0.02em] text-ink min-[375px]:text-[3.4rem] min-[430px]:text-[3.7rem]">
        Timosh <span className="text-turquoise-deep">Mirza</span>
      </m.h1>
      <m.svg {...rise(0.1)} viewBox="0 0 300 24" className="relative mt-1 h-3 w-40" aria-hidden="true">
        <path d="M4 16C60 6 120 4 170 10s92 8 126-2" fill="none" stroke="var(--color-sun)" strokeWidth="9" strokeLinecap="round" />
      </m.svg>

      <m.p {...rise(0.14)} className="relative mt-4 text-[1rem] leading-relaxed text-ink-soft">
        {h.subtitle}
      </m.p>

      <m.div {...rise(0.2)} className="relative mt-6 grid grid-cols-2 gap-2.5">
        <a
          href="#contacts"
          onClick={go("contacts")}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-turquoise-deep px-3 text-[0.95rem] font-semibold text-white shadow-turquoise active:scale-[0.98]"
        >
          <MessageCircle className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
          {h.contact}
        </a>
        <a
          href="#about"
          onClick={go("about")}
          className="flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink/10 bg-cream px-3 text-[0.95rem] font-semibold text-ink active:bg-sun-soft"
        >
          {h.more}
          <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="relative mt-9"
      >
        <Sun className="absolute -top-8 -right-3 z-10 w-20" />
        <Sparkle className="absolute top-6 -left-1 z-10 w-4" color="var(--color-turquoise)" />
        <div className="blob-b relative aspect-[4/3.3] overflow-hidden bg-turquoise-soft shadow-soft ring-[6px] ring-cream">
          <MediaView media={media} alt={h.photoAlt} sizes={HERO_SIZES} priority placeholder={h.placeholder} />
        </div>
        <span className="glass absolute top-[52%] -left-1 inline-flex items-center gap-2 rounded-xl border border-white/70 py-1.5 pr-3 pl-1.5 shadow-card">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sun">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-[0.95rem] font-extrabold tabular-nums">
            {kindergarten.hours.opens}–{kindergarten.hours.closes}
          </span>
        </span>
        <Waves className="absolute -right-1 bottom-12 w-14" />

        <dl className="relative z-10 mx-2 -mt-7 grid grid-cols-3 rounded-[1.25rem] border border-line bg-cream shadow-card">
          {h.stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center px-1 py-3 ${i > 0 ? "border-l border-line" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-center">
                <span className={`block font-display text-[1.45rem] leading-none font-black tabular-nums min-[375px]:text-[1.6rem] ${i === 1 ? "text-sun-deep" : "text-turquoise-deep"}`}>
                  {s.value}
                </span>
                <span className="mt-1 block text-[0.8rem] font-medium text-ink-soft">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </m.div>
    </section>
  );
}
