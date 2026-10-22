"use client";

import { m } from "framer-motion";
import { Moon, Sunrise } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { ARC_PATH, arcPoints } from "@/shared/lib/dayArc";
import { MealArt } from "@/shared/ui/Icons";
import { Reveal } from "@/shared/ui/Reveal";
import { Blob, Sparkle } from "@/shared/ui/Shapes";
import { Container, Heading, Section } from "../ui";

const points = arcPoints(5);

/** Five plates travel along a day arc from opening to closing time; the menu itself is not shown. */
export function Meals() {
  const { t } = useLang();
  const ml = t.meals;
  return (
    <Section id="meals" className="overflow-hidden">
      <Blob variant={2} fill="var(--color-sun-soft)" className="pointer-events-none absolute top-[8%] -left-40 w-[26rem] opacity-80" />
      <Blob variant={1} fill="var(--color-turquoise-soft)" className="pointer-events-none absolute -right-32 bottom-[6%] w-[22rem] opacity-70" />

      <Container className="relative">
        <Heading eyebrow={ml.eyebrow} title={ml.title} tone="sun" className="mx-auto max-w-2xl text-center [&_p]:mx-auto" />

        <div className="relative mx-auto mt-16 h-[18rem] max-w-[56rem] short:mt-14 short:h-[15.5rem] 2xl:mt-20 2xl:h-[21rem]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            <m.path
              d={ARC_PATH}
              fill="none"
              stroke="var(--color-turquoise)"
              strokeWidth="2.5"
              strokeDasharray="1 8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </svg>

          <ol className="contents">
            {points.map((p, i) => (
              <li key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <m.span
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <span className={`grid h-[5.25rem] w-[5.25rem] place-items-center rounded-full border-4 border-cream shadow-card short:h-[4.5rem] short:w-[4.5rem] 2xl:h-24 2xl:w-24 ${i % 2 ? "bg-sun-soft" : "bg-turquoise-soft"}`}>
                    <MealArt index={i} className="h-11 w-11 short:h-9 short:w-9 2xl:h-13 2xl:w-13" />
                  </span>
                  <span className="mt-2 rounded-full bg-cream px-2.5 py-0.5 text-[0.8rem] font-semibold whitespace-nowrap text-ink-soft shadow-card">{ml.mealLabel(i + 1)}</span>
                </m.span>
              </li>
            ))}
          </ol>

          {/* arc ends: opening and closing time */}
          <span className="absolute bottom-0 left-0 flex -translate-x-1/3 translate-y-1/2 items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-[0.85rem] font-bold text-ink tabular-nums shadow-sun">
            <Sunrise className="h-4 w-4" aria-hidden="true" />
            {ml.morning}
          </span>
          <span className="absolute right-0 bottom-0 flex translate-x-1/3 translate-y-1/2 items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[0.85rem] font-bold text-white tabular-nums">
            <Moon className="h-4 w-4" aria-hidden="true" />
            {ml.evening}
          </span>

          {/* the count, under the top of the arc */}
          <Reveal delay={0.2} className="absolute inset-x-0 bottom-[2%] flex flex-col items-center text-center">
            <span className="relative font-display text-[5.5rem] leading-[0.85] font-black text-turquoise-deep short:text-[4.6rem] 2xl:text-[6.4rem]">
              {ml.count}
              <Sparkle className="absolute -top-1 -right-6 w-5" />
            </span>
            <span className="mt-1 text-[1.05rem] font-semibold text-ink">{ml.times}</span>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl text-center short:mt-10">
          <p className="text-[1.06rem] leading-relaxed text-ink-soft 2xl:text-[1.12rem]">{ml.lead}</p>
          <p className="mt-2 text-[0.95rem] text-ink-soft/85">{ml.note}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
