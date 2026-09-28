import React from "react";
import { cn } from "@/lib/utils";

export function NcMark({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={cn("size-8 select-none", className)}
      aria-label="Neha Chaudhary Monogram"
      {...props}
    >
      {/* Background container with subtle border */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="18"
        className="fill-card stroke-border stroke-[1.5]"
      />
      {/* Letter N */}
      <path
        d="M26 68V32H33L50 56V32H57V68H50L33 44V68H26Z"
        className="fill-foreground transition-colors"
      />
      {/* Letter C */}
      <path
        d="M80 43.5C78.5 37 73.5 33 66.5 33C57.5 33 51 40 51 50C51 60 57.5 67 66.5 67C73.5 67 78.5 63 80 56.5H72.5C71.5 59.5 69.2 61.2 66.5 61.2C61.5 61.2 57.8 56.5 57.8 50C57.8 43.5 61.5 38.8 66.5 38.8C69.2 38.8 71.5 40.5 72.5 43.5H80Z"
        className="fill-foreground transition-colors"
      />
      {/* Editorial accent dot */}
      <circle cx="81" cy="67" r="2.5" className="fill-foreground" />
    </svg>
  );
}

export function NcAvatar({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex size-32 sm:size-40 items-center justify-center rounded-2xl border border-border bg-card shadow-sm select-none",
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-center text-center">
        <span className="font-sans text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
          NC
        </span>
        <span className="mt-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Developer
        </span>
      </div>
    </div>
  );
}
