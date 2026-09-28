"use client";

import Image from "next/image";
import { USER } from "@/portfolio/data/user";

export function SiteHeaderMark() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full overflow-hidden border border-border shrink-0">
        <Image
          src={USER.avatar}
          alt={USER.displayName}
          width={28}
          height={28}
          className="size-full object-cover"
          unoptimized
        />
      </div>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        Neha Chaudhary
      </span>
    </div>
  );
}
