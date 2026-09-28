"use client";

import { ArrowUpIcon } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 py-10 mt-8 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {currentYear} Neha Chaudhary. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nehaa3012"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>

            <a
              href="mailto:nehach782@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUpIcon className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
