import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Supportly team. Whether you have a question about our call support platform, want to schedule a demo, or need help getting started.",
};

export default function ContactPage() {
  return <ContactContent />;
}
