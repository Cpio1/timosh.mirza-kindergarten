"use client";

import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import type { Media } from "@/shared/lib/media";
import { Blob, Sparkle, Sun, Waves } from "./Shapes";

const noop = () => () => {};
/** false during SSR and hydration, true afterwards. */
export const useMounted = () => useSyncExternalStore(noop, () => true, () => false);

type Props = {
  media: Media | null;
  alt: string;
  /** `sizes` for next/image — keep it identical in both layouts for the same photo, so the browser fetches one file */
  sizes: string;
  priority?: boolean;
  /** shown when there is no file yet */
  placeholder?: string;
  className?: string;
  objectPosition?: string;
};

/**
 * Fills its (relatively positioned) parent with a photo, a muted looping video, or an illustrated
 * placeholder until the real file is added to /public.
 */
export function MediaView({ media, alt, sizes, priority = false, placeholder, className = "", objectPosition = "center" }: Props) {
  if (!media) return <MediaPlaceholder label={placeholder} className={className} />;
  if (media.kind === "image") {
    return (
      <Image
        src={media.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
        style={{ objectPosition }}
      />
    );
  }
  return <AutoVideo media={media} label={alt} sizes={sizes} className={className} />;
}

/**
 * Background video: always muted, inline and looping, with the poster as the static cover.
 * The <video> element exists only after hydration — so the server HTML of the hidden layout
 * never downloads a second copy — and it plays only while on screen. With reduced motion or
 * data saver on, it stays on the poster.
 */
function AutoVideo({ media, label, sizes, className }: { media: Extract<Media, { kind: "video" }>; label: string; sizes: string; className: string }) {
  const mounted = useMounted();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    const still = reduce || saveData;
    if (still) video.pause();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !still) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <>
      {media.poster && <Image src={media.poster.src} alt="" fill sizes={sizes} className={`object-cover ${className}`} />}
      {mounted && (
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
          poster={media.poster?.src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          disablePictureInPicture
          aria-label={label}
        >
          <source src={media.src} type={media.type} />
        </video>
      )}
    </>
  );
}

/** Calm, on-brand stand-in for a photo that hasn't been uploaded yet. */
export function MediaPlaceholder({ label, className = "", compact = false, tone = 0 }: { label?: string; className?: string; compact?: boolean; tone?: number }) {
  const bg = [
    "from-turquoise-soft via-cream to-sun-soft",
    "from-sun-soft via-cream to-turquoise-soft",
    "from-cream via-turquoise-soft to-milk-deep",
  ][tone % 3];
  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${bg} ${className}`}>
      {/* compact tiles sit side by side in the gallery, so each tone gets its own motif */}
      {(!compact || tone % 3 === 0) && <Sun className={`absolute ${compact ? "-top-5 -right-5 w-20" : "top-[8%] right-[8%] w-[26%]"} opacity-90`} />}
      <Blob fill="var(--color-turquoise)" variant={tone % 2 ? 2 : 1} className={`absolute ${compact ? "-bottom-8 -left-8 w-24" : "-bottom-[12%] -left-[10%] w-[52%]"} opacity-25`} />
      {(!compact || tone % 3 !== 2) && <Waves className={`absolute ${compact ? "bottom-4 right-4 w-16" : "bottom-[10%] right-[10%] w-[30%]"} opacity-70`} />}
      {(!compact || tone % 3 === 2) && <Sparkle className={`absolute ${compact ? "top-5 right-6 w-6" : "top-[38%] left-[16%] w-[5%]"}`} />}
      {label && (
        <span className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2 p-4 text-center text-[0.82rem] font-medium text-ink-soft">
          <ImageIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {label}
        </span>
      )}
    </div>
  );
}
