"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/index") {
      setActiveHash(pathname);
      return;
    }

    const sectionIds = ["about", "experience", "projects", "skills", "education", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(`/#${id}`);
            return;
          }
        }
      }
      if (window.scrollY < 180) {
        setActiveHash("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="flex items-center gap-5 max-sm:hidden">
      <nav className="flex items-center gap-4 text-sm">
        {items.map(({ title, href }) => {
          const isActive = activeHash === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors duration-150",
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {title}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-7 text-xs px-2.5 font-normal"
        >
          <a href="/resume.pdf" download="Neha_Chaudhary_Resume.pdf">
            Resume
          </a>
        </Button>

        <a
          href="https://github.com/nehaa3012"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub Profile"
          title="GitHub Profile (@nehaa3012)"
        >
          <GithubIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}
