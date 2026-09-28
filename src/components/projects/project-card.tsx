import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Project } from "@/portfolio/types/projects";
import { cn } from "@/lib/utils";
import { TechIcon } from "../tech-icon";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-200",
        "hover:border-foreground/30 hover:shadow-xs",
        className
      )}
    >
      <div>
        {/* Title & Period */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {project.id === "bitmaster"
                ? "AI-powered competitive programming platform with live multi-language code runner"
                : project.id === "fixcars"
                ? "Automotive services platform with AI-powered capabilities"
                : project.id === "atfenix"
                ? "Enterprise application with business features, authentication & payments"
                : "Production application with backend services & payment integrations"}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            {project.period.start}
          </span>
        </div>

        {/* Contributions */}
        <div className="mt-4 space-y-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.id === "bitmaster" && (
            <ul className="list-disc list-inside space-y-1 marker:text-muted-foreground/60">
              <li>Engineered interactive coding platform with in-browser code execution across 15+ languages.</li>
              <li>Integrated AI-powered hint generation using OpenAI to assist developers during interview prep.</li>
              <li>Built 500+ problem repository, difficulty filters, company tracks, and global leaderboard.</li>
              <li>Developed secure user authentication, responsive UI, and analytics with Next.js & Clerk.</li>
            </ul>
          )}

          {project.id === "fixcars" && (
            <ul className="list-disc list-inside space-y-1 marker:text-muted-foreground/60">
              <li>Delivered end-to-end features across Web and Mobile using React.js, Next.js, and React Native.</li>
              <li>Built booking workflows, dashboards, and authentication modules.</li>
              <li>Developed REST APIs in Express.js & PostgreSQL with Redis caching and BullMQ background jobs.</li>
              <li>Integrated AI features using LangChain, OpenAI, and Pinecone.</li>
            </ul>
          )}

          {project.id === "atfenix" && (
            <ul className="list-disc list-inside space-y-1 marker:text-muted-foreground/60">
              <li>Developed frontend modules, backend APIs, and enterprise business features.</li>
              <li>Implemented authentication, payment integrations, and cloud storage with NestJS and Next.js.</li>
              <li>Worked on application performance and database optimizations.</li>
            </ul>
          )}

          {project.id === "ebliss" && (
            <ul className="list-disc list-inside space-y-1 marker:text-muted-foreground/60">
              <li>Contributed to frontend development, backend services, and production features.</li>
              <li>Integrated REST APIs, payment gateways, and cloud storage.</li>
              <li>Improved overall application stability and reliability.</li>
            </ul>
          )}
        </div>

        {/* Technologies */}
        <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              <TechIcon name={skill} className="size-3" />
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:underline underline-offset-4"
          >
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Visit Live Demo</span>
            <ArrowUpRightIcon className="size-3" />
          </a>
        ) : (
          <span className="text-muted-foreground text-[11px]">
            Live demo available upon request
          </span>
        )}

        <Link
          href={`/project/${project.id}`}
          className="inline-flex items-center gap-1 font-medium text-foreground hover:underline underline-offset-4"
        >
          <span>View details</span>
          <ArrowUpRightIcon className="size-3" />
        </Link>
      </div>
    </article>
  );
}
