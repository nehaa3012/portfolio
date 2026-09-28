import React from "react";
import { cn } from "@/lib/utils";

type TechIconProps = React.ComponentProps<"svg"> & {
  name: string;
};

export function TechIcon({ name, className, ...props }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // JavaScript
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="none" {...props}>
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M6 18.5c1 .6 2.3.8 3.5.3 1.2-.5 1.7-1.6 1.7-3.2v-7.6h-2.1v7.5c0 .8-.2 1.3-.6 1.5-.4.2-1 .2-1.6 0l-.9 1.5zm7.3-.2c1.3.7 2.8.9 4.3.4 1.4-.4 2.2-1.5 2.2-3 0-1.8-1.2-2.7-3.1-3.3-1.1-.4-1.7-.8-1.7-1.5 0-.6.4-1.1 1.2-1.2.9-.1 1.9.1 2.6.6l.8-1.6c-1-.5-2.2-.7-3.4-.6-1.5.1-2.4 1.1-2.4 2.6 0 1.7 1.2 2.6 3.1 3.2 1.2.4 1.7.9 1.7 1.6 0 .8-.5 1.3-1.5 1.4-1 .1-2.2-.2-3.1-.8l-.7 1.8z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="none" {...props}>
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M12.5 10.5h-5V8h12.5v2.5h-5v9h-2.5v-9zm2.8 5.7c.9.6 2 .9 3.2.7 1-.2 1.5-.7 1.5-1.5 0-.8-.7-1.3-2-1.7-1.8-.6-3-1.4-3-3.2 0-1.8 1.4-3.1 3.4-3.1 1.3 0 2.4.3 3.3.9l-.8 2c-.8-.5-1.7-.8-2.5-.7-.9.1-1.3.5-1.3 1.1 0 .7.6 1.1 1.9 1.6 1.9.7 3.1 1.6 3.1 3.4 0 1.9-1.5 3.3-3.7 3.3-1.5 0-2.8-.4-3.8-1.1l.7-2.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React / React Native
  if (norm.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#087ea4] dark:text-[#58c4dc]", className)} fill="currentColor" {...props}>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
    );
  }

  // Next.js
  if (norm.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="currentColor" {...props}>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm3.375-17.25h1.875v10.5h-1.875V6.75zm-6.75 0h1.875v6.525l6.075-6.525h2.175L9.675 16.5l-2.025-2.175V6.75z" />
      </svg>
    );
  }

  // HTML5
  if (norm.includes("html")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#E34F26]", className)} fill="currentColor" {...props}>
        <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.8 5.6H5.7l.4 4.5h10.3l-.4 4.5-4 1.1-4-1.1-.3-2.3H5.2l.5 4.5L12 18.2l6.3-1.8.8-10.8z" />
      </svg>
    );
  }

  // CSS3
  if (norm.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#1572B6]", className)} fill="currentColor" {...props}>
        <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.8 5.6H5.7l.4 4.5h10.3l-.4 4.5-4 1.1-4-1.1-.3-2.3H5.2l.5 4.5L12 18.2l6.3-1.8.8-10.8z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#06B6D4]", className)} fill="currentColor" {...props}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // Shadcn/UI
  if (norm.includes("shadcn")) {
    return (
      <svg viewBox="0 0 256 256" className={cn("size-3.5 shrink-0", className)} fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m208 128-80 80M192 40 40 192" />
      </svg>
    );
  }

  // TanStack Query
  if (norm.includes("tanstack") || norm.includes("query")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#FF4154]", className)} fill="currentColor" {...props}>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#5FA04E]", className)} fill="currentColor" {...props}>
        <path d="M12 2l10 5.8v11.6L12 22 2 17.4V7.8L12 2zm0 2.3L4.2 8.8v6.4l7.8 4.5 7.8-4.5V8.8L12 4.3z" />
      </svg>
    );
  }

  // Express.js
  if (norm.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="currentColor" {...props}>
        <path d="M2.5 12c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5zm5.5-2.5h8v2h-8v-2zm0 3.5h6v2h-6v-2z" />
      </svg>
    );
  }

  // NestJS
  if (norm.includes("nest")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#E0234E]", className)} fill="currentColor" {...props}>
        <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5S17.8 1.5 12 1.5zm5.8 14.8c-.8.8-2 1.3-3.3 1.3-2.3 0-4.1-1.7-4.1-4.2 0-2.6 1.8-4.3 4.3-4.3 1.6 0 2.9.7 3.6 1.9l-1.8 1.2c-.4-.7-1.1-1-1.8-1-1.2 0-2.1.9-2.1 2.2 0 1.3.8 2.2 2 2.2.8 0 1.5-.4 1.9-.9l1.3 1.6z" />
      </svg>
    );
  }

  // REST APIs
  if (norm.includes("rest") || norm.includes("api")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-sky-500", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14h6m-6 4h10M4 6h16M4 10h16" />
      </svg>
    );
  }

  // WebSockets
  if (norm.includes("websocket")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-amber-500", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 16l-4-4 4-4m10 0l4 4-4 4M14 4l-4 16" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#4169E1]", className)} fill="currentColor" {...props}>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1v-2.2C5.6 17.6 4.2 15 4.2 12c0-4.3 3.5-7.8 7.8-7.8 4.3 0 7.8 3.5 7.8 7.8 0 3-1.4 5.6-3.8 6.9v2.2c3.5-1.5 6-5 6-9.1 0-5.5-4.5-10-10-10z" />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#47A248]", className)} fill="currentColor" {...props}>
        <path d="M12.001 0c-.3 0-.6.1-.8.4C9.5 2.5 4.7 9.8 4.7 15.3c0 4.5 3.3 8.7 7.3 8.7s7.3-4.2 7.3-8.7c0-5.5-4.8-12.8-6.5-14.9-.2-.3-.5-.4-.8-.4zm0 2.2c1.4 2 5.5 8.1 5.5 13.1 0 3.4-2.5 6.7-5.5 6.7s-5.5-3.3-5.5-6.7c0-5 4.1-11.1 5.5-13.1z" />
      </svg>
    );
  }

  // Prisma
  if (norm.includes("prisma")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#2D3748] dark:text-[#5A67D8]", className)} fill="currentColor" {...props}>
        <path d="M2.5 20.5L12 2l9.5 18.5H2.5zm9.5-14.8L5.7 18.5h12.6L12 5.7z" />
      </svg>
    );
  }

  // TypeORM
  if (norm.includes("typeorm")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#E83528]", className)} fill="currentColor" {...props}>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.5 3.8v7.6L12 20l-7.5-3.8V8.6L12 4.8z" />
      </svg>
    );
  }

  // Redis
  if (norm.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#DC382D]", className)} fill="currentColor" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#2496ED]", className)} fill="currentColor" {...props}>
        <path d="M13 4h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm18.5 2.5c-.3-.2-1.3-.3-2.1.2-.5.3-.8.8-1 1.3-.7-.2-1.7-.2-2.4.3v-.3H1c-.3 1.8.3 3.6 1.5 5 1.5 1.7 3.8 2.7 6.5 2.7 6.1 0 10.7-3.7 12-8.5.5 0 1.5-.2 1.5-.7z" />
      </svg>
    );
  }

  // Git
  if (norm === "git") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#F05032]", className)} fill="currentColor" {...props}>
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.584l3.056 3.056a2.023 2.023 0 0 1 2.552 2.57l3.02 3.021a2.023 2.023 0 0 1 2.57 2.552l3.54-3.54a1.5 1.5 0 0 0 0-2.313zM2.583 8.808l-2.13 2.13a1.5 1.5 0 0 0 0 2.124l10.48 10.48a1.5 1.5 0 0 0 2.124 0l2.253-2.253-3.14-3.14a2.023 2.023 0 0 1-2.483-2.483L6.87 12.85a2.023 2.023 0 0 1-2.617-2.37l-1.67-1.672z" />
      </svg>
    );
  }

  // GitHub
  if (norm.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="currentColor" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  // Vercel
  if (norm.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} fill="currentColor" {...props}>
        <path d="m12 3 10 17H2L12 3Z" />
      </svg>
    );
  }

  // BullMQ
  if (norm.includes("bullmq")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#C9382B]", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    );
  }

  // Postman
  if (norm.includes("postman")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#FF6C37]", className)} fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-5-3.5 8-5-3 8.5z" />
      </svg>
    );
  }

  // Swagger
  if (norm.includes("swagger")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#85EA2D]", className)} fill="currentColor" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#000000" />
      </svg>
    );
  }

  // Better Auth / Auth / JWT
  if (norm.includes("auth") || norm.includes("jwt")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-emerald-500", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  // LangChain
  if (norm.includes("langchain")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-emerald-600", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  // OpenAI
  if (norm.includes("openai")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-teal-600 dark:text-teal-400", className)} fill="currentColor" {...props}>
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-4.28 2.17A5.98 5.98 0 0 0 7 7.08a6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 4.28-2.17 6.06 6.06 0 0 0 4-2.9 6.06 6.06 0 0 0-.76-7.1zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    );
  }

  // Pinecone
  if (norm.includes("pinecone")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-amber-600", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2L5 8l7 6 7-6-7-6zM5 14l7 6 7-6" />
      </svg>
    );
  }

  // Cloudinary
  if (norm.includes("cloudinary")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#3448C5]", className)} fill="currentColor" {...props}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    );
  }

  // Stripe
  if (norm.includes("stripe")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#635BFF]", className)} fill="currentColor" {...props}>
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.52.5 6.62.5 2.627 3.58 2.627 8.324c0 4.67 3.864 6.35 8.125 7.55 2.457.712 3.356 1.487 3.356 2.502 0 .973-.831 1.508-2.32 1.508-2.637 0-5.326-1.127-7.227-2.228l-.946 5.568C5.23 24.164 8.318 25 11.758 25c6.223 0 10.485-3.085 10.485-8.083 0-4.61-3.69-6.386-8.267-7.767z" />
      </svg>
    );
  }

  // Razorpay
  if (norm.includes("razorpay")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#0C2340] dark:text-[#3395FF]", className)} fill="currentColor" {...props}>
        <path d="m22.436 0-11.91 7.773-1.174 4.276 6.625-4.323L12.92 24l8.286-14.773h-4.303L22.436 0zM1.564 24h5.275l2.42-8.544L5.86 17.65 1.564 24z" />
      </svg>
    );
  }

  // Twilio
  if (norm.includes("twilio")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#F22F46]", className)} fill="currentColor" {...props}>
        <circle cx="7" cy="7" r="3.5" />
        <circle cx="17" cy="7" r="3.5" />
        <circle cx="7" cy="17" r="3.5" />
        <circle cx="17" cy="17" r="3.5" />
      </svg>
    );
  }

  // MinIO / Storage
  if (norm.includes("minio") || norm.includes("storage")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#C72C48]", className)} fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-2h3v2zm5 0h-3v-2h3v2zm0-4H8v-2h8v2zm0-4H8V6h8v2z" />
      </svg>
    );
  }

  // Clerk
  if (norm.includes("clerk")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-[#6C47FF]", className)} fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
    );
  }

  // Monaco Editor / Code runner
  if (norm.includes("monaco") || norm.includes("code") || norm.includes("editor")) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-blue-500", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // Generic fallback code icon
  return (
    <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0 text-muted-foreground", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
