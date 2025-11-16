import { FeaturesOverview } from "@/components/features/features-overview"
import { SiteManagementSection } from "@/components/features/site-management-section"
import { ScheduleManagementSection } from "@/components/features/schedule-management-section"
import { MarketingSection } from "@/components/features/marketing-section"
import { AnalyticsSection } from "@/components/features/analytics-section"

export const metadata = {
  title: "产品功能",
  description: "详细展示AI系统功能，让访客理解技术如何落地",
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesOverview />
      <SiteManagementSection />
      <ScheduleManagementSection />
      <MarketingSection />
      <AnalyticsSection />
    </>
  )
}

