import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GaugeIcon,
  WorkflowIcon,
} from "lucide-react";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About Me</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        {/* Narrative Description */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base text-foreground leading-relaxed">
            I am a Full Stack Developer with experience in developing scalable web and mobile applications. My work spans frontend engineering, backend development, database architecture, authentication, AI integrations, and production deployments.
          </p>

          <p className="text-sm sm:text-base text-foreground leading-relaxed">
            At <strong>Builder Monkey</strong>, I work on production features, develop reliable REST APIs, and integrate practical AI-driven workflows. I focus on writing clean, type-safe TypeScript code, designing normalized database schemas, and building responsive, accessible interfaces that solve real user problems.
          </p>
        </div>

        {/* Core Engineering Areas (Pillars Grid) */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
            Core Engineering Focus
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-border/70 bg-card p-4 space-y-2 transition-all hover:border-foreground/30 hover:bg-muted/30">
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <CodeIcon className="size-4 text-foreground/80 shrink-0" />
                <span>Full-Stack Web &amp; Mobile</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Building responsive, accessible web apps using React.js and Next.js, and performant cross-platform mobile experiences with React Native.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-card p-4 space-y-2 transition-all hover:border-foreground/30 hover:bg-muted/30">
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <ServerIcon className="size-4 text-foreground/80 shrink-0" />
                <span>Backend Architecture &amp; APIs</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designing modular services with Express.js and NestJS, Redis pub/sub caching, and background job queue processing with BullMQ.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-card p-4 space-y-2 transition-all hover:border-foreground/30 hover:bg-muted/30">
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <DatabaseIcon className="size-4 text-foreground/80 shrink-0" />
                <span>Database Design &amp; Performance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Architecting relational and document schemas with PostgreSQL, Prisma, and MongoDB, optimizing indexing and database transactions.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-card p-4 space-y-2 transition-all hover:border-foreground/30 hover:bg-muted/30">
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <SparklesIcon className="size-4 text-foreground/80 shrink-0" />
                <span>Practical AI Integrations</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Embedding intelligent capabilities into real applications using LangChain, OpenAI APIs, and Pinecone vector stores for semantic retrieval.
              </p>
            </div>
          </div>
        </div>

        {/* Engineering Mindset / How I Work */}
        <div className="pt-2">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Engineering Approach
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-md border border-border/60 bg-muted/20 p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <ShieldCheckIcon className="size-3.5 text-foreground/80 shrink-0" />
                <span>Type-Safety First</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Strict TypeScript from frontend components through API routes down to database models.
              </p>
            </div>

            <div className="rounded-md border border-border/60 bg-muted/20 p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <GaugeIcon className="size-3.5 text-foreground/80 shrink-0" />
                <span>High Performance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized queries, sub-second responses, Redis caching, and minimal client bundle sizes.
              </p>
            </div>

            <div className="rounded-md border border-border/60 bg-muted/20 p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <WorkflowIcon className="size-3.5 text-foreground/80 shrink-0" />
                <span>End-to-End Ownership</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Taking features from architecture and database schema to production deployments.
              </p>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
