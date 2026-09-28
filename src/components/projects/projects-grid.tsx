"use client";

import { useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/portfolio/types/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        if (!search.trim()) return projects;

        const query = search.toLowerCase();
        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(query) ||
                project.description?.toLowerCase().includes(query) ||
                project.skills.some((skill) => skill.toLowerCase().includes(query))
        );
    }, [projects, search]);

    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-3.5 py-2.5 transition-colors focus-within:border-foreground/40">
                <SearchIcon className="size-4 text-muted-foreground shrink-0" />
                <input
                    type="text"
                    placeholder="Search projects by name, description, or skill..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground"
                />
                {search && (
                    <button
                        onClick={() => setSearch("")}
                        className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                        Clear
                    </button>
                )}
            </div>

            {search && (
                <p className="text-xs text-muted-foreground font-mono">
                    Found {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                </p>
            )}

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border py-16 text-center">
                    <p className="text-base font-medium text-foreground">No projects found</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Try a different search term
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
