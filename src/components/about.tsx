import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About Me</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <p className="text-sm sm:text-base text-foreground leading-relaxed">
          I am a Full Stack Developer with experience in developing scalable web and mobile applications. My work spans frontend engineering, backend development, database architecture, authentication, AI integrations, and production deployments.
        </p>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          I enjoy building reliable applications, solving complex engineering problems, and creating smooth user experiences. Currently building production systems and AI-powered workflows at Builder Monkey.
        </p>

        <div className="pt-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>Full-stack web &amp; mobile development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>Backend architecture &amp; REST APIs</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>Database design (PostgreSQL, MongoDB)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>Real-time systems (WebSockets, Redis)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>AI integrations (LLMs, LangChain, Pinecone)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              <span>Authentication &amp; payment integrations</span>
            </li>
          </ul>
        </div>
      </PanelContent>
    </Panel>
  );
}
