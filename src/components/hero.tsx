"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon, FileTextIcon, GithubIcon, MailIcon } from "lucide-react";
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
    <section id="hero" className="pb-8 border-b border-border/60">
      <div className="flex flex-col items-start gap-4">
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
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-md border border-border/60 w-full sm:w-auto">
          <span>🚀</span>
          <span className="text-foreground font-semibold min-h-[1.25rem]">
            {currentText}
          </span>
          <span className="inline-block w-1.5 h-4 bg-foreground animate-pulse" />
        </div>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          I build modern digital products with thoughtful user experiences, robust backend architectures, and practical AI integrations using React.js, Next.js, React Native, Node.js, Express.js, and NestJS. Currently building production applications at Builder Monkey.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
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
