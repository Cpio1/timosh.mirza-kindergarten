"use client";

import { Phone } from "lucide-react";
import { links } from "@/shared/data/kindergarten";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { WhatsAppIcon } from "@/shared/ui/Icons";

/** Call / WhatsApp always within thumb reach once the hero is scrolled past. CSS-only transition. */
export function MobileActionBar() {
  const { t } = useLang();
  const shown = useScrolled(560);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!shown}
    >
      <div className="glass mx-auto flex max-w-md gap-2 rounded-full border border-line p-1.5 shadow-soft">
        <a
          href={links.tel}
          tabIndex={shown ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full bg-turquoise-deep text-[0.88rem] font-semibold whitespace-nowrap text-white min-[375px]:gap-2 min-[375px]:text-[0.95rem] active:scale-[0.98]"
        >
          <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          {t.header.call}
        </a>
        <a
          href={links.whatsapp(t.contacts.whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full bg-ink text-[0.88rem] font-semibold whitespace-nowrap text-white min-[375px]:gap-2 min-[375px]:text-[0.95rem] active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
