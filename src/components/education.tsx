import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { EDUCATION_DATA } from "@/portfolio/data/education";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-3 last:border-0 last:pb-0"
          >
            <div>
              <h3 className="text-sm sm:text-base font-medium text-foreground">
                {item.institution}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {item.degree}
              </p>
            </div>
            <div className="sm:text-right shrink-0 font-mono text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{item.grade}</span>
              <span className="mx-1.5">•</span>
              <span>{item.period}</span>
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
