import type { Metadata } from "next";

import { ProjectsGrid } from "@/components/projects/projects-grid";
import { PROJECTS } from "@/portfolio/data/projects";

export const metadata: Metadata = {
    title: "Projects | Neha Chaudhary",
    description: "A collection of software engineering projects, web platforms, and mobile apps built by Neha Chaudhary.",
};

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 space-y-8">
            {/* Page Header */}
            <div className="border-b border-border/60 pb-6">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Production applications, mobile apps, and technical solutions built with React, Next.js, Node.js, and NestJS.
                </p>
            </div>

            {/* Search + Grid */}
            <ProjectsGrid projects={PROJECTS} />
        </div>
    );
}
