"use client";

import { kindergarten, links } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { InstagramIcon } from "@/shared/ui/Icons";
import { LogoMark } from "@/shared/ui/Logo";
import { WaveEdge } from "@/shared/ui/Shapes";

/** Bottom padding leaves room for the floating action bar. */
export function MobileFooter() {
  const { t } = useLang();
  return (
    <footer className="relative bg-ink px-4 pt-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] text-white/80 min-[390px]:px-5">
      <WaveEdge fill="var(--color-milk)" className="absolute inset-x-0 top-0 h-6 w-full" />
      <div className="flex items-center gap-3">
        <LogoMark className="h-11 w-11 shrink-0" />
        <div className="min-w-0">
          <p className="font-display text-[1.2rem] leading-none font-black text-white">
            Timosh <span className="text-sun">Mirza</span>
          </p>
          <p className="mt-1 text-[0.85rem]">{t.footer.tagline}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem]">
        <a href={links.tel} className="tabular-nums active:text-sun">
          {kindergarten.phone.display}
        </a>
        <a href={kindergarten.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 active:text-sun">
          <InstagramIcon className="h-4 w-4" />
          {kindergarten.instagram.handle}
        </a>
      </div>
      <p className="mt-6 border-t border-white/10 pt-5 text-[0.82rem] text-white/60">© {new Date().getFullYear()} Timosh Mirza</p>
    </footer>
  );
}
