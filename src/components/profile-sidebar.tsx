"use client";

import Image from "next/image";
import {
  Building2Icon,
  GithubIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  ArrowUpRightIcon,
  FileTextIcon,
  PhoneIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { USER } from "@/portfolio/data/user";

export function ProfileSidebar() {
  return (
    <aside className="w-full md:w-[240px] lg:w-[260px] shrink-0">
      <div className="md:sticky md:top-20 space-y-4 md:max-h-[calc(100vh-5.5rem)] md:overflow-y-auto no-scrollbar">
        {/* Large GitHub Profile Picture on Left Side */}
        <div className="flex justify-center md:justify-start">
          <a
            href="https://github.com/nehaa3012"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            title="View Neha Chaudhary on GitHub (@nehaa3012)"
          >
            <div className="relative size-44 sm:size-52 md:size-[220px] lg:size-[240px] rounded-full overflow-hidden border-2 border-border shadow-md ring-4 ring-muted/40 transition-all duration-200 group-hover:scale-[1.01] group-hover:ring-foreground/20">
              <Image
                src={USER.avatar}
                alt={USER.displayName}
                width={240}
                height={240}
                priority
                className="size-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-1.5 right-1.5 size-8 rounded-full bg-background border border-border flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
              <GithubIcon className="size-4 text-foreground" />
            </div>
          </a>
        </div>

        {/* GitHub Username & Identity */}
        <div className="text-center md:text-left pt-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {USER.displayName}
          </h2>
          <a
            href="https://github.com/nehaa3012"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
          >
            <span>@{USER.username}</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>

        {/* Current Position Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground w-full justify-center md:justify-start font-mono">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="truncate">Builder Monkey • Full Stack</span>
        </div>

        {/* Action Buttons: Download Resume & GitHub Profile */}
        <div className="space-y-2 pt-1">
          <Button asChild className="w-full h-9 font-medium gap-2" size="sm">
            <a href="/resume.pdf" download="Neha_Chaudhary_Resume.pdf">
              <FileTextIcon className="size-4" />
              <span>Download Resume</span>
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full h-9 gap-2 font-medium" size="sm">
            <a
              href="https://github.com/nehaa3012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              <span>GitHub Profile</span>
            </a>
          </Button>
        </div>

        {/* Profile Details (GitHub style metadata) */}
        <div className="pt-3 border-t border-border/60 space-y-2.5 text-xs text-muted-foreground font-mono">
          <div className="flex items-center gap-2 text-foreground/85">
            <Building2Icon className="size-4 text-muted-foreground shrink-0" />
            <span className="truncate">Builder Monkey</span>
          </div>

          <div className="flex items-center gap-2 text-foreground/85">
            <MapPinIcon className="size-4 text-muted-foreground shrink-0" />
            <span>India</span>
          </div>

          <div className="flex items-center gap-2 text-foreground/85">
            <GraduationCapIcon className="size-4 text-muted-foreground shrink-0" />
            <span className="truncate">RKGIT • B.Tech CSE (2026)</span>
          </div>

          <div className="flex items-center gap-2 text-foreground/85">
            <MailIcon className="size-4 text-muted-foreground shrink-0" />
            <a
              href="mailto:nehach782@gmail.com"
              className="truncate hover:underline text-foreground"
            >
              nehach782@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 text-foreground/85">
            <PhoneIcon className="size-4 text-muted-foreground shrink-0" />
            <a
              href="tel:+917417351715"
              className="truncate hover:underline text-foreground"
            >
              +91 74173 51715
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
