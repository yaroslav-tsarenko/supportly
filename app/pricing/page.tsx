import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest pricing for Supportly. Start free, upgrade when you're ready. All plans include a 14-day trial.",
};

export default function PricingPage() {
  return <PricingContent />;
}
