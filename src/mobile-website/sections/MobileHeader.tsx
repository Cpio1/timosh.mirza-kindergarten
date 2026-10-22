"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { useBodyLock } from "@/shared/hooks/useBodyLock";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { scrollToSection } from "@/shared/lib/scroll";
import { InstagramIcon, WhatsAppIcon } from "@/shared/ui/Icons";
import { LangSwitch } from "@/shared/ui/LangSwitch";
import { Logo } from "@/shared/ui/Logo";
import { Sun, Waves } from "@/shared/ui/Shapes";

/** Compact top bar + a full-screen menu sheet with big tap targets and the two main actions. */
export function MobileHeader() {
  const { t } = useLang();
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // let the body unlock (effect cleanup) before the smooth scroll starts
    window.setTimeout(() => scrollToSection(id), 40);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300 ${
          scrolled || open ? "glass shadow-[0_1px_0_var(--color-line)]" : ""
        }`}
      >
        <div className="flex h-15 items-center justify-between gap-2 px-3 min-[375px]:px-4">
          <a href="#home" onClick={go("home")} aria-label={t.header.home} className="min-w-0 rounded-full">
            <Logo size="sm" />
          </a>
          <div className="flex shrink-0 items-center gap-1.5 min-[375px]:gap-2">
            <LangSwitch compact />
            <button
              ref={burger}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition active:scale-95"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            key="menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[calc(3.75rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto overscroll-contain bg-milk"
          >
            <Sun className="pointer-events-none absolute -right-12 -bottom-12 w-48 opacity-50" />
            <Waves className="pointer-events-none absolute bottom-24 left-5 w-24 opacity-40" />
            <nav aria-label={t.header.navLabel} className="relative px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] min-[375px]:px-5">
              <ul className="grid gap-1.5">
                {navSections.map((id, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={go(id)}
                      className="flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3.5 font-display text-[1.15rem] font-extrabold text-ink active:bg-turquoise-soft"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-turquoise-soft text-[0.78rem] text-turquoise-deep">{i + 1}</span>
                      <span className="flex-1">{t.nav[id]}</span>
                      <ArrowRight className="h-4.5 w-4.5 text-ink-soft" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a href={links.tel} className="flex h-13 items-center justify-center gap-1.5 rounded-full bg-turquoise-deep text-[0.88rem] font-semibold whitespace-nowrap text-white min-[375px]:gap-2 min-[375px]:text-[0.95rem] shadow-turquoise">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  {t.header.call}
                </a>
                <a
                  href={links.whatsapp(t.contacts.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-1.5 rounded-full bg-ink text-[0.88rem] font-semibold whitespace-nowrap text-white min-[375px]:gap-2 min-[375px]:text-[0.95rem]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
              <a
                href={kindergarten.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-[0.92rem] font-medium text-ink-soft"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
                {kindergarten.instagram.handle}
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
