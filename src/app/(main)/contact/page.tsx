import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact | Neha Chaudhary",
  description: "Get in touch with Neha Chaudhary, Full Stack Developer.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
      <ContactSection />
    </div>
  );
}
