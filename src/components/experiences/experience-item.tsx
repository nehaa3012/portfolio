import Image from "next/image";
import React from "react";

import { ExperiencePositionItem } from "./experience-position-item";
import { Experience } from "@/portfolio/types/experiences";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex size-7 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <div className="flex size-7 items-center justify-center rounded-md border border-border bg-muted text-xs font-medium text-foreground">
              {experience.companyName.charAt(0)}
            </div>
          )}
        </div>

        <h3 className="text-lg leading-snug font-medium">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
