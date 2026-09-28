"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRightIcon,
  FileTextIcon,
  GithubIcon,
  MailIcon,
  SparklesIcon,
  LayersIcon,
  ServerIcon,
  DatabaseIcon,
  BotIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { USER } from "@/portfolio/data/user";

const TYPING_PHRASES = [
  "Full-Stack Developer & AI Engineer",
  "Problem Solver & System Architect",
  "Building Scalable Web & Mobile Apps",
  "GenAI Integrations & Production Systems",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetPhrase.length) {
          setCurrentText(targetPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="pb-10 border-b border-border/60">
      <div className="flex flex-col items-start gap-5">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground font-mono">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Full Stack Developer at Builder Monkey</span>
        </div>

        {/* Name and Handle */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {USER.displayName}
          </h1>
          <a
            href="https://github.com/nehaa3012"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
          >
            <span>@{USER.username}</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>

        {/* Dynamic Typing Subtitle Animation */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-muted-foreground bg-muted/30 px-3.5 py-1.5 rounded-md border border-border/60 w-full sm:w-auto">
          <span>🚀</span>
          <span className="text-foreground font-semibold min-h-[1.25rem]">
            {currentText}
          </span>
          <span className="inline-block w-1.5 h-4 bg-foreground animate-pulse" />
        </div>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          I build modern digital products with thoughtful user experiences, robust backend architectures, and practical AI integrations using React.js, Next.js, React Native, Node.js, Express.js, and NestJS. Currently building production applications at Builder Monkey.
        </p>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
          <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5 sm:p-3 transition-colors hover:border-foreground/20">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1">
              <LayersIcon className="size-3.5 text-foreground/80 shrink-0" />
              <span>Frontend</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              React &amp; Next.js
            </p>
          </div>

          <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5 sm:p-3 transition-colors hover:border-foreground/20">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1">
              <ServerIcon className="size-3.5 text-foreground/80 shrink-0" />
              <span>Backend</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              Node &amp; NestJS
            </p>
          </div>

          <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5 sm:p-3 transition-colors hover:border-foreground/20">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1">
              <DatabaseIcon className="size-3.5 text-foreground/80 shrink-0" />
              <span>Database</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              PostgreSQL &amp; Redis
            </p>
          </div>

          <div className="rounded-lg border border-border/60 bg-muted/20 p-2.5 sm:p-3 transition-colors hover:border-foreground/20">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1">
              <BotIcon className="size-3.5 text-foreground/80 shrink-0" />
              <span>AI Integration</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              LangChain &amp; OpenAI
            </p>
          </div>
        </div>

        {/* Current Focus Banner */}
        <div className="w-full rounded-lg border border-border/70 bg-muted/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground/90 flex items-start gap-2.5 font-mono">
          {/* <SparklesIcon className="size-4 text-emerald-500 shrink-0 mt-0.5" /> */}
          <div className="leading-relaxed">
            <span className="font-semibold text-foreground">Currently building:</span>{" "}
            Production web features, background queue pipelines (BullMQ), and practical AI integrations at Builder Monkey.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <Button asChild size="sm" className="h-9 px-4 font-medium">
            <a href="#projects">View My Work</a>
          </Button>

          <Button asChild variant="outline" size="sm" className="h-9 px-4 gap-1.5 font-medium">
            <a href="/resume.pdf" download="Neha_Chaudhary_Resume.pdf">
              <FileTextIcon className="size-3.5" />
              <span>Download Resume</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm" className="h-9 px-4 gap-1.5 font-medium">
            <a
              href="https://github.com/nehaa3012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-3.5" />
              <span>GitHub</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm" className="h-9 px-4 gap-1.5 font-medium">
            <a href="mailto:nehach782@gmail.com">
              <MailIcon className="size-3.5" />
              <span>Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
