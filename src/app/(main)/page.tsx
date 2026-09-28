import type { ProfilePage as PageSchema, WithContext } from "schema-dts";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experiences } from "@/components/experiences";
import { Projects } from "@/components/projects";
import { TeckStack } from "@/components/teck-stack";
import { Education } from "@/components/education";
import { ContactSection } from "@/components/contact-section";
import { USER } from "@/portfolio/data/user";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side: GitHub Profile Sidebar */}
          <ProfileSidebar />

          {/* Middle / Right: Aligned Content Column */}
          <div className="flex-1 min-w-0 space-y-0 *:[[id]]:scroll-mt-20">
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <TeckStack />
            <Education />
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      jobTitle: USER.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: "Builder Monkey",
      },
      sameAs: [
        "https://github.com/nehaa3012",
      ],
    },
  };
}
