import type { TechStack } from "../types/tech-stack";

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native (Expo)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn/UI",
      "TanStack Query",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "TypeORM", "Redis"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Vercel", "BullMQ", "Postman", "Swagger"],
  },
  {
    name: "Other Technologies",
    skills: [
      "Better Auth",
      "JWT",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "Cloudinary",
      "Stripe",
      "Razorpay",
      "Twilio",
      "MinIO",
    ],
  },
];

export const TECH_STACK: TechStack[] = [
  // Languages
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Languages"] },
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Languages"] },

  // Frontend
  { key: "react", title: "React.js", href: "https://react.dev/", categories: ["Frontend"] },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Frontend"] },
  { key: "react-native", title: "React Native (Expo)", href: "https://reactnative.dev/", categories: ["Frontend"] },
  { key: "html5", title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", categories: ["Frontend"] },
  { key: "css3", title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", categories: ["Frontend"] },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Frontend"] },
  { key: "shadcn", title: "Shadcn/UI", href: "https://ui.shadcn.com/", categories: ["Frontend"] },
  { key: "tanstack-query", title: "TanStack Query", href: "https://tanstack.com/query", categories: ["Frontend"] },

  // Backend
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Backend"] },
  { key: "express", title: "Express.js", href: "https://expressjs.com/", categories: ["Backend"] },
  { key: "nestjs", title: "NestJS", href: "https://nestjs.com/", categories: ["Backend"] },
  { key: "rest-apis", title: "REST APIs", href: "https://restfulapi.net/", categories: ["Backend"] },
  { key: "websockets", title: "WebSockets", href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", categories: ["Backend"] },

  // Database
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/", categories: ["Database"] },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"] },
  { key: "prisma", title: "Prisma ORM", href: "https://www.prisma.io/", categories: ["Database"] },
  { key: "typeorm", title: "TypeORM", href: "https://typeorm.io/", categories: ["Database"] },
  { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"] },

  // DevOps & Tools
  { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["DevOps & Tools"] },
  { key: "git", title: "Git", href: "https://git-scm.com/", categories: ["DevOps & Tools"] },
  { key: "github", title: "GitHub", href: "https://github.com/", categories: ["DevOps & Tools"] },
  { key: "vercel", title: "Vercel", href: "https://vercel.com/", categories: ["DevOps & Tools"] },
  { key: "bullmq", title: "BullMQ", href: "https://bullmq.io/", categories: ["DevOps & Tools"] },
  { key: "postman", title: "Postman", href: "https://www.postman.com/", categories: ["DevOps & Tools"] },
  { key: "swagger", title: "Swagger", href: "https://swagger.io/", categories: ["DevOps & Tools"] },

  // Other Technologies
  { key: "better-auth", title: "Better Auth", href: "https://www.better-auth.com/", categories: ["Other Technologies"] },
  { key: "jwt", title: "JWT", href: "https://jwt.io/", categories: ["Other Technologies"] },
  { key: "langchain", title: "LangChain", href: "https://www.langchain.com/", categories: ["Other Technologies"] },
  { key: "openai", title: "OpenAI", href: "https://openai.com/", categories: ["Other Technologies"] },
  { key: "pinecone", title: "Pinecone", href: "https://www.pinecone.io/", categories: ["Other Technologies"] },
  { key: "cloudinary", title: "Cloudinary", href: "https://cloudinary.com/", categories: ["Other Technologies"] },
  { key: "stripe", title: "Stripe", href: "https://stripe.com/", categories: ["Other Technologies"] },
  { key: "razorpay", title: "Razorpay", href: "https://razorpay.com/", categories: ["Other Technologies"] },
  { key: "twilio", title: "Twilio", href: "https://www.twilio.com/", categories: ["Other Technologies"] },
  { key: "minio", title: "MinIO", href: "https://min.io/", categories: ["Other Technologies"] },
];

