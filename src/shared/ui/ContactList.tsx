"use client";

import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { kindergarten, links } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

/**
 * Contact rows shared by both layouts (the layouts differ in what surrounds them).
 * Every row is a real action except the address and hours.
 * `columns`: the desktop variant — address across the top, the rest in two columns.
 */
export function ContactList({ compact = false, columns = false }: { compact?: boolean; columns?: boolean }) {
  const { t } = useLang();
  const c = t.contacts;
  const row = `flex items-center gap-3.5 rounded-[1.25rem] border border-line bg-cream ${compact ? "p-3" : "p-3.5 short:p-3"}`;
  const action = `${row} group transition hover:border-turquoise/50 hover:shadow-card`;
  const icon = (tint: string) => `grid ${compact ? "h-11 w-11" : "h-12 w-12"} shrink-0 place-items-center rounded-2xl ${tint}`;
  const label = "block text-[0.8rem] font-medium text-ink-soft";
  const value = `block font-semibold text-ink ${compact ? "text-[0.98rem]" : "text-[1.02rem]"}`;

  return (
    <ul className={`grid ${compact ? "gap-2.5" : "gap-3"} ${columns ? "grid-cols-2" : ""}`}>
      <li className={`${row} ${columns ? "col-span-2" : ""}`}>
        <span className={icon("bg-turquoise-soft text-turquoise-deep")}>
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className={label}>{c.address}</span>
          <span className={`${value} leading-snug`}>{c.addressLines[0]}</span>
          <span className="block text-[0.88rem] leading-snug text-ink-soft">
            {c.addressLines[1]}, {c.addressLines[2]}
          </span>
        </span>
      </li>
      <li>
        <a href={links.tel} className={action}>
          <span className={icon("bg-sun-soft text-ink")}>
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className={label}>{c.phone}</span>
            <span className={`${value} tabular-nums`}>{kindergarten.phone.display}</span>
          </span>
        </a>
      </li>
      <li className={columns ? "order-2" : ""}>
        <a href={links.whatsapp(c.whatsappText)} target="_blank" rel="noopener noreferrer" className={action}>
          <span className={icon("bg-[#dcf5e3] text-[#1d8a4a]")}>
            <WhatsAppIcon className="h-5.5 w-5.5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className={label}>{c.whatsapp}</span>
            <span className={`${value} tabular-nums`}>{kindergarten.phone.display}</span>
          </span>
          <ArrowUpRight className={`h-4.5 w-4.5 shrink-0 text-ink-soft transition group-hover:text-turquoise-deep ${columns ? "hidden xl:block" : ""}`} aria-hidden="true" />
        </a>
      </li>
      <li className={columns ? "order-2" : ""}>
        <a href={kindergarten.instagram.url} target="_blank" rel="noopener noreferrer" className={action}>
          <span className={icon("bg-[#fbe3ec] text-[#b83b6b]")}>
            <InstagramIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className={label}>{c.instagram}</span>
            <span className={value}>{kindergarten.instagram.handle}</span>
          </span>
          <ArrowUpRight className={`h-4.5 w-4.5 shrink-0 text-ink-soft transition group-hover:text-turquoise-deep ${columns ? "hidden xl:block" : ""}`} aria-hidden="true" />
        </a>
      </li>
      <li className={`${row} ${columns ? "order-1" : ""}`}>
        <span className={icon("bg-turquoise-soft text-turquoise-deep")}>
          <Clock3 className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className={label}>{c.hours}</span>
          <span className={`${value} tabular-nums`}>
            {kindergarten.hours.opens}–{kindergarten.hours.closes}
          </span>
        </span>
      </li>
    </ul>
  );
}
