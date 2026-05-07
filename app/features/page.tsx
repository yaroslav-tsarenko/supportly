import type { Metadata } from "next";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all Supportly features: shared inbox, live chat, AI assistant, knowledge base, automation, and analytics — everything your team needs to deliver great support.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
