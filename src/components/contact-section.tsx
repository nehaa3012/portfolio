"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nehach782@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+91 74173 51715");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
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
          Have a project in mind, an interesting technical challenge, or an opportunity to collaborate? Feel free to reach out via phone, email, or GitHub.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="sm">
            <a href="mailto:nehach782@gmail.com" className="gap-2">
              <MailIcon className="size-4" />
              <span>Email Me</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <a href="tel:+917417351715" className="gap-2">
              <PhoneIcon className="size-4" />
              <span>+91 74173 51715</span>
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopyPhone}
            className="gap-2 text-xs font-mono cursor-pointer"
          >
            {copiedPhone ? (
              <>
                <CheckIcon className="size-3.5 text-emerald-600" />
                <span>Copied Number</span>
              </>
            ) : (
              <>
                <CopyIcon className="size-3.5" />
                <span>Copy Phone</span>
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

        {/* Direct Contact Links */}
        <div className="pt-2 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
          <div>
            Phone:{" "}
            <a
              href="tel:+917417351715"
              className="text-foreground hover:underline underline-offset-4 font-medium"
            >
              +91 74173 51715
            </a>
          </div>

          <div>
            Email:{" "}
            <a
              href="mailto:nehach782@gmail.com"
              className="text-foreground hover:underline underline-offset-4 font-medium"
            >
              nehach782@gmail.com
            </a>
          </div>

          <div>
            Location: <span className="text-foreground">India</span>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
