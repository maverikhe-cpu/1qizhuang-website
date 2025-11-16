import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { TeamSection } from "@/components/about/team-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { CultureSection } from "@/components/about/culture-section"

export const metadata = {
  title: "关于我们",
  description: "建立公司可信度，传递使命愿景",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <TimelineSection />
      <CultureSection />
    </>
  )
}

