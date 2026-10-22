"use client";

import { ArrowUpRight, Clock3, FolderOpen } from "lucide-react";
import { kindergarten } from "@/shared/data/kindergarten";
import { useLang } from "@/shared/i18n/LanguageProvider";

/** Opens the Google Drive folder; until its link is set in the data file it is a calm "coming soon" state, not a dead link. */
export function DriveButton({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const url = kindergarten.documents.driveUrl as string;
  const base = `inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[0.95rem] font-semibold ${className}`;
  if (!url) {
    return (
      <span role="status" className={`${base} cursor-default border border-dashed border-turquoise/60 bg-cream/70 text-ink-soft`}>
        <Clock3 className="h-4.5 w-4.5 shrink-0 text-turquoise-deep" aria-hidden="true" />
        {t.documents.soon}
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-turquoise-deep text-white shadow-turquoise transition hover:-translate-y-0.5 hover:bg-turquoise-dark`}
    >
      <FolderOpen className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
      {t.documents.open}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
