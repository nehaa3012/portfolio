"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function MobileNav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group/toggle flex flex-col gap-1 data-[state=open]:bg-accent",
            className
          )}
          size="icon"
          aria-label="Toggle Navigation Menu"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 text-sm" align="end" sideOffset={8}>
        {items.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href} className="w-full cursor-pointer py-1.5">
              {link.title}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a
            href="https://github.com/nehaa3012"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer py-1.5"
          >
            GitHub (@nehaa3012)
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="/resume.pdf"
            download="Neha_Chaudhary_Resume.pdf"
            className="w-full cursor-pointer py-1.5 font-medium"
          >
            Download Resume
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="w-full cursor-pointer py-1.5 flex items-center justify-between"
        >
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          {isDark ? <SunIcon className="size-4 text-amber-400" /> : <MoonIcon className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
