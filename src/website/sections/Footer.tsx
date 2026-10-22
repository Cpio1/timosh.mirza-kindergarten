"use client";

import { ArrowUp, Phone } from "lucide-react";
import { kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { scrollToSection } from "@/shared/lib/scroll";
import { InstagramIcon } from "@/shared/ui/Icons";
import { LogoMark } from "@/shared/ui/Logo";
import { WaveEdge } from "@/shared/ui/Shapes";
import { Container } from "../ui";

export function Footer() {
  const { t } = useLang();
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };
  return (
    <footer className="relative bg-ink pt-14 pb-8 text-white/80">
      <WaveEdge fill="var(--color-milk)" className="absolute inset-x-0 top-0 h-8 w-full" />
      <Container>
        <div className="flex items-center justify-between gap-8 border-b border-white/10 pb-7">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <div>
              <p className="font-display text-[1.3rem] leading-none font-black text-white">
                Timosh <span className="text-sun">Mirza</span>
              </p>
              <p className="mt-1.5 text-[0.9rem]">{t.footer.tagline}</p>
            </div>
          </div>
          <nav aria-label={t.header.navLabel}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.92rem]">
              {navSections.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={go(id)} className="transition hover:text-sun">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between gap-6 pt-6 text-[0.88rem]">
          <p>© {new Date().getFullYear()} Timosh Mirza</p>
          <div className="flex items-center gap-5">
            <a href={links.tel} className="inline-flex items-center gap-2 tabular-nums transition hover:text-sun">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {kindergarten.phone.display}
            </a>
            <a href={kindergarten.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-sun">
              <InstagramIcon className="h-4 w-4" />
              {kindergarten.instagram.handle}
            </a>
            <a href="#home" onClick={go("home")} aria-label={t.footer.up} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sun hover:text-ink">
              <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
