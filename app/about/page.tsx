import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Supportly — the team, mission, and values behind calm call support software built for growing teams.",
};

export default function AboutPage() {
  return <AboutContent />;
}
