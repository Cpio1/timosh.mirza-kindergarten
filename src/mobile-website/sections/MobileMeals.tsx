"use client";

import { m } from "framer-motion";
import { Moon, Sunrise } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { MealArt } from "@/shared/ui/Icons";
import { Reveal } from "@/shared/ui/Reveal";
import { Blob, Sparkle } from "@/shared/ui/Shapes";
import { MHeading, MSection } from "../ui";

/** A zig-zag row of five plates along a wavy dashed line, then the big «5» card. */
export function MobileMeals() {
  const { t } = useLang();
  const ml = t.meals;
  return (
    <MSection id="meals" className="overflow-hidden">
      <Blob variant={2} fill="var(--color-sun-soft)" className="pointer-events-none absolute top-10 -left-24 w-56 opacity-80" />
      <MHeading eyebrow={ml.eyebrow} title={ml.title} tone="sun" />

      <div className="relative mt-7">
        <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="absolute inset-x-0 top-1/2 h-14 w-full -translate-y-1/2" aria-hidden="true">
          <path
            d="M6 40C36 40 36 20 66 20s30 20 60 20 30-20 60-20 30 20 60 20 30-20 48-20"
            fill="none"
            stroke="var(--color-turquoise)"
            strokeWidth="2"
            strokeDasharray="1 7"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="relative flex items-center justify-between">
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i} className={i % 2 ? "-translate-y-3" : "translate-y-3"}>
              <m.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                role="img"
                aria-label={ml.mealLabel(i + 1)}
                className={`grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border-[3px] border-cream shadow-card min-[375px]:h-14 min-[375px]:w-14 min-[430px]:h-16 min-[430px]:w-16 ${i % 2 ? "bg-sun-soft" : "bg-turquoise-soft"}`}
              >
                <MealArt index={i} className="h-7 w-7 min-[375px]:h-8 min-[375px]:w-8" />
              </m.span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-6 flex justify-between text-[0.8rem] font-bold tabular-nums">
        <span className="inline-flex items-center gap-1 rounded-full bg-sun px-2.5 py-0.5 text-ink">
          <Sunrise className="h-3.5 w-3.5" aria-hidden="true" />
          {ml.morning}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-0.5 text-white">
          <Moon className="h-3.5 w-3.5" aria-hidden="true" />
          {ml.evening}
        </span>
      </div>

      <Reveal y={10} className="relative mt-6 flex items-center gap-4 rounded-[1.5rem] border border-line bg-cream p-4">
        <span className="relative shrink-0 text-center">
          <span className="block font-display text-[3.4rem] leading-[0.9] font-black text-turquoise-deep">{ml.count}</span>
          <span className="block text-[0.8rem] font-semibold text-ink">{ml.times}</span>
          <Sparkle className="absolute -top-1 -right-3 w-3.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.93rem] leading-relaxed text-ink">{ml.lead}</span>
          <span className="mt-1.5 block text-[0.82rem] leading-snug text-ink-soft">{ml.note}</span>
        </span>
      </Reveal>
    </MSection>
  );
}
