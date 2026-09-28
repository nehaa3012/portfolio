import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { SKILL_CATEGORIES } from "@/portfolio/data/tech-stack";
import { TechIcon } from "./tech-icon";

export function TeckStack() {
  return (
    <Panel id="skills">
      <PanelHeader>
        <PanelTitle>Technical Skills</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="space-y-2.5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-colors hover:border-foreground/30 hover:bg-muted/70"
                >
                  <TechIcon name={skill} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
