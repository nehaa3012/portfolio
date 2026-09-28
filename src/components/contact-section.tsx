"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, GithubIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nehach782@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Have a project in mind, an interesting technical challenge, or an opportunity to collaborate? Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="sm">
            <a href="mailto:nehach782@gmail.com" className="gap-2">
              <MailIcon className="size-4" />
              <span>Email Me</span>
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopyEmail}
            className="gap-2 text-xs font-mono cursor-pointer"
          >
            {copied ? (
              <>
                <CheckIcon className="size-3.5 text-emerald-600" />
                <span>Copied nehach782@gmail.com</span>
              </>
            ) : (
              <>
                <CopyIcon className="size-3.5" />
                <span>Copy email address</span>
              </>
            )}
          </Button>

          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/nehaa3012"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <GithubIcon className="size-4" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>

        <div className="pt-2 text-xs font-mono text-muted-foreground">
          Direct email:{" "}
          <a
            href="mailto:nehach782@gmail.com"
            className="text-foreground hover:underline underline-offset-4"
          >
            nehach782@gmail.com
          </a>
        </div>
      </PanelContent>
    </Panel>
  );
}
