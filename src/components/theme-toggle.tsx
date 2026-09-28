"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { MoonIcon, SunIcon } from "lucide-react";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { setMetaColor } = useMetaColor();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = useCallback(() => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setMetaColor(
      nextTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  useHotkeys("d", switchTheme);

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md border border-border/60 text-muted-foreground",
          "size-8 shrink-0 opacity-50",
          className
        )}
        disabled
        aria-label="Theme Toggle"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-md border border-border/70 text-foreground",
          "size-8 shrink-0 cursor-pointer transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        onClick={switchTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <SunIcon className="size-4 text-foreground transition-transform duration-200 rotate-0 hover:rotate-45" />
        ) : (
          <MoonIcon className="size-4 text-foreground transition-transform duration-200 rotate-0 hover:-rotate-12" />
        )}
        <span className="sr-only">Toggle theme</span>
      </TooltipTrigger>

      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-2 text-xs">
          <span>{isDark ? "Light mode" : "Dark mode"}</span>
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
