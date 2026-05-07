import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import ProblemSection from "@/components/sections/ProblemSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import FeatureGrid from "@/components/sections/FeatureGrid";
import AiSection from "@/components/sections/AiSection";
import KnowledgeBaseSection from "@/components/sections/KnowledgeBaseSection";
import LiveChatSection from "@/components/sections/LiveChatSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProblemSection />
      <ProductShowcase />
      <FeatureGrid />
      <AiSection />
      <KnowledgeBaseSection />
      <LiveChatSection />
      <WorkflowSection />
      <AnalyticsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingTeaser />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
