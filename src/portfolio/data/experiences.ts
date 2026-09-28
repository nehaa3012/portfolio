import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "builder-monkey",
    companyName: "Builder Monkey",
    companyLogo: "",
    isCurrentEmployer: true,
    positions: [
      {
        id: "builder-monkey-fullstack-2026",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "March 2026",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developing scalable web and mobile applications using React.js, Next.js, React Native, Node.js, Express.js, and NestJS.
- Building reusable frontend components, secure REST APIs, authentication systems, and database-driven applications.
- Working with Docker, Redis, BullMQ, Git, GitHub, and Vercel to deliver production-ready software.`,
        skills: [
          "React.js",
          "Next.js",
          "React Native",
          "Node.js",
          "Express.js",
          "NestJS",
          "Docker",
          "Redis",
          "BullMQ",
          "Git",
          "GitHub",
          "Vercel",
        ],
        isExpanded: true,
      },
    ],
  },
];

