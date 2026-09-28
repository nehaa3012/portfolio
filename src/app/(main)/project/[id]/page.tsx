import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, BoxIcon, GithubIcon, InfinityIcon, LinkIcon } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ProseMono } from "@/components/ui/typography";
import { ImageLightbox } from "@/components/image-lightbox";
import { PROJECTS } from "@/portfolio/data/projects";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/tech-icon";

// Helper function to get first alphanumeric character, skipping emojis
function getFirstAlphanumeric(str: string): string {
    const match = str.match(/[a-zA-Z0-9]/);
    return match ? match[0].toUpperCase() : str.charAt(0);
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.title,
        description: project.description?.slice(0, 160) || `Details about ${project.title}`,
    };
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const { start, end } = project.period;
    const isOngoing = !end;
    const isSinglePeriod = end === start;

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-8">
            {/* Header with back button and title */}
            <div className="flex items-center gap-3 border-b border-border/60 pb-6">
                <Button asChild variant="ghost" size="icon" className="shrink-0">
                    <Link href="/projects">
                        <ArrowLeftIcon className="size-4" />
                        <span className="sr-only">Back to Projects</span>
                    </Link>
                </Button>
                <div className="flex items-center gap-3">
                    {project.logo ? (
                        <Image
                            src={project.logo}
                            alt={project.title}
                            width={40}
                            height={40}
                            quality={100}
                            className="size-10 shrink-0 select-none"
                            unoptimized
                            aria-hidden="true"
                        />
                    ) : (
                        <div
                            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground select-none"
                            aria-hidden="true"
                        >
                            <BoxIcon className="size-5" />
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">{project.title}</h1>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                            <span>{start}</span>
                            {!isSinglePeriod && (
                                <>
                                    <span>—</span>
                                    {isOngoing ? (
                                        <>
                                            <InfinityIcon
                                                className="size-4 translate-y-[0.5px]"
                                                aria-hidden
                                            />
                                            <span className="sr-only">Present</span>
                                        </>
                                    ) : (
                                        <span>{end}</span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Overview Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl border border-border bg-card p-6">
                {/* Media / Visual fallback */}
                <div className="overflow-hidden rounded-lg">
                    {project.media ? (
                        project.media.type === "image" ? (
                            <ImageLightbox
                                src={project.media.url}
                                alt={project.media.alt || project.title}
                                className="h-full w-full"
                            >
                                <Image
                                    src={project.media.url}
                                    alt={project.media.alt || project.title}
                                    width={400}
                                    height={300}
                                    className="h-full w-full object-cover rounded-lg"
                                    unoptimized
                                />
                            </ImageLightbox>
                        ) : (
                            <video
                                src={project.media.url}
                                controls
                                className="h-full w-full object-cover rounded-lg"
                                poster={project.media.alt}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )
                    ) : (
                        <div className="flex h-48 md:h-full w-full flex-col justify-between p-6 bg-muted/40 rounded-lg border border-border/60">
                            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                                Project Overview
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-foreground block">
                                    {project.title}
                                </span>
                                <span className="font-mono text-xs text-muted-foreground mt-1 block">
                                    Engineered by Neha Chaudhary
                                </span>
                            </div>
                            <div className="font-mono text-[11px] text-muted-foreground">
                                Production Application
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Info */}
                <div className="flex flex-col justify-center gap-4">
                    {project.link ? (
                        <a
                            className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-colors"
                            href={project.link}
                            target="_blank"
                            rel="noopener"
                        >
                            <LinkIcon className="size-4" />
                            <span>Visit Project</span>
                        </a>
                    ) : (
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground rounded-md border border-border bg-muted/40 px-3 py-1.5 w-fit">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            <span>Live Demo: URL on request</span>
                        </div>
                    )}

                    {project.github ? (
                        <a
                            className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-colors"
                            href={project.github}
                            target="_blank"
                            rel="noopener"
                        >
                            <GithubIcon className="size-4" />
                            <span>View on GitHub</span>
                        </a>
                    ) : (
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
                            <GithubIcon className="size-3.5 text-muted-foreground/60" />
                            <span>Source Code: Available upon request</span>
                        </div>
                    )}

                    {project.skills.length > 0 && (
                        <div className="pt-2">
                            <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground font-mono">
                                Technologies
                            </h4>
                            <ul className="flex flex-wrap gap-1.5">
                                {project.skills.slice(0, 6).map((skill, index) => (
                                    <li key={index} className="flex">
                                        <Tag className="gap-1.5">
                                            <TechIcon name={skill} className="size-3" />
                                            <span>{skill}</span>
                                        </Tag>
                                    </li>
                                ))}
                                {project.skills.length > 6 && (
                                    <li className="flex">
                                        <Tag>+{project.skills.length - 6}</Tag>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Description */}
            {project.description && (
                <div className="border-t border-border/60 pt-6">
                    <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">
                        About This Project
                    </h3>
                    <ProseMono>
                        <Markdown>{project.description}</Markdown>
                    </ProseMono>
                </div>
            )}

            {/* All Skills */}
            {project.skills.length > 6 && (
                <div className="border-t border-border/60 pt-6">
                    <h3 className="mb-3 text-base font-semibold tracking-tight text-foreground">
                        All Technologies & Tools
                    </h3>
                    <ul className="flex flex-wrap gap-1.5">
                        {project.skills.map((skill, index) => (
                            <li key={index} className="flex">
                                <Tag className="gap-1.5">
                                    <TechIcon name={skill} className="size-3" />
                                    <span>{skill}</span>
                                </Tag>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
