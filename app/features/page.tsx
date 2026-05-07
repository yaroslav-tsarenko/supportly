import type { Metadata } from "next";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all Supportly features: smart call routing, call queues, agent workspace, AI summaries, analytics, and callbacks — everything your team needs to deliver great call support.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
