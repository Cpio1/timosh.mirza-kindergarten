"use client";

import { Phone } from "lucide-react";
import { kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { scrollToSection } from "@/shared/lib/scroll";
import { LangSwitch } from "@/shared/ui/LangSwitch";
import { Logo } from "@/shared/ui/Logo";

/** Floating pill header: transparent over the hero, a frosted bar once the page scrolls. */
export function Header() {
  const { t } = useLang();
  const scrolled = useScrolled(24);
  const active = useActiveSection(navSections);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-3">
      <div
        className={`mx-auto flex h-16 max-w-[78rem] items-center justify-between gap-4 rounded-full pr-2.5 pl-4 transition-[background-color,box-shadow,border-color] duration-300 2xl:max-w-[86rem] ${
          scrolled ? "glass border border-line/80 shadow-soft" : "border border-transparent"
        }`}
      >
        <a href="#home" onClick={go("home")} aria-label={t.header.home} className="shrink-0 rounded-full">
          <Logo />
        </a>

        <nav aria-label={t.header.navLabel}>
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`relative block rounded-full px-2.5 py-2 text-[0.9rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-[0.94rem] ${
                    active === id ? "bg-turquoise-soft text-turquoise-dark" : "text-ink-soft hover:bg-white/70 hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <LangSwitch />
          <a
            href={links.tel}
            aria-label={`${t.header.call}: ${kindergarten.phone.display}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-turquoise-deep px-3 text-[0.92rem] font-semibold text-white shadow-turquoise transition hover:-translate-y-0.5 hover:bg-turquoise-dark xl:px-4.5"
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            <span className="hidden whitespace-nowrap tabular-nums xl:inline">{kindergarten.phone.display}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
