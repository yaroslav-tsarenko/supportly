import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Supportly team. We'd love to hear from you — whether you have a question, need a demo, or want to learn more.",
};

export default function ContactPage() {
  return <ContactContent />;
}
