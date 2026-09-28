import type { User } from "@/portfolio/types/user";

export const USER = {
  firstName: "Neha",
  lastName: "Chaudhary",
  displayName: "Neha Chaudhary",
  username: "nehaa3012",
  gender: "female",
  pronouns: "she/her",
  bio: "Full Stack Developer building scalable web, mobile & AI-powered applications.",
  flipSentences: [
    "Full Stack Developer",
    "React.js & Next.js Engineer",
    "React Native Mobile Developer",
    "Node.js & NestJS Backend",
    "AI Integrations & Cloud Deployment",
  ],
  address: "India",
  // Base64-encoded phone number (+91 74173 51715)
  phoneNumber: "KzkxIDc0MTczIDUxNzE1",
  // Base64-encoded email (nehach782@gmail.com)
  email: "bmVoYWNoNzgyQGdtYWlsLmNvbQ==",
  website: "https://github.com/nehaa3012",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Builder Monkey",
      website: "https://github.com/nehaa3012",
    },
  ],

  about: `I am a Full Stack Developer with experience in developing scalable web and mobile applications. My work spans frontend engineering, backend development, database architecture, authentication, AI integrations, and production deployments.

I enjoy building reliable applications, solving complex engineering problems, and creating smooth user experiences.`,
  avatar: "https://avatars.githubusercontent.com/u/199502963?v=4",
  ogImage: "/Images/og.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Neha Chaudhary",
    "Neha",
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "NestJS",
    "Express.js",
    "PostgreSQL",
    "Builder Monkey",
  ],
  dateCreated: "2026-03-01",
  resume: "/resume.pdf",
} satisfies User;

