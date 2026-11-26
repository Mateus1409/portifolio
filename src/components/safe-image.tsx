"use client";

import Image from "next/image";
import { useState } from "react";
import { Activity, Building2, HeartPulse, UserRound, type LucideIcon } from "lucide-react";

export type SafeImageIcon = "user" | "activity" | "heart" | "building";

const iconMap: Record<SafeImageIcon, LucideIcon> = {
  user: UserRound,
  activity: Activity,
  heart: HeartPulse,
  building: Building2,
};

type SafeImageProps = {
  src: string | null;
  alt: string;
  icon: SafeImageIcon;
  label: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SafeImage({
  src,
  alt,
  icon,
  label,
  className = "",
  sizes,
  priority = false,
}: SafeImageProps) {
  const Icon = iconMap[icon];
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showPlaceholder = !src || failedSrc === src;

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
      {showPlaceholder ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(34,211,238,0.10), transparent 65%)",
          }}
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-accent-400/20 bg-accent-400/[0.06] text-accent-400">
            <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="px-4 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
            {label}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailedSrc(src)}
        />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}
