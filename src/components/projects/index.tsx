import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/portfolio/data/projects";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <div className="flex items-center justify-between">
          <PanelTitle>Featured Projects</PanelTitle>
          <Link
            href="/projects"
            className="text-xs text-muted-foreground hover:text-foreground font-mono transition-colors"
          >
            All projects →
          </Link>
        </div>
      </PanelHeader>

      <div className="space-y-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  );
}
