import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { PainPointsSection } from "@/components/home/pain-points-section"
import { ValuePropositionSection } from "@/components/home/value-proposition-section"
import { StatsSection } from "@/components/home/stats-section"
import { AlipaySection } from "@/components/home/alipay-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "首页",
  description: "告别装修管理的看不见、管不了、不管了，用AI智能交付撬动5万亿家装新市场",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PainPointsSection />
      <ValuePropositionSection />
      <StatsSection />
      <AlipaySection />
      <CTASection />
    </>
  )
}

