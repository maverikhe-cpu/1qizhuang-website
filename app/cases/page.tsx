import { CasesHero } from "@/components/cases/cases-hero"
import { CaseFilter } from "@/components/cases/case-filter"
import { CaseShowcase } from "@/components/cases/case-showcase"
import { Testimonials } from "@/components/cases/testimonials"
import { ClientLogos } from "@/components/cases/client-logos"

export const metadata = {
  title: "客户案例",
  description: "用真实数据建立信任，展示行业标杆",
}

export default function CasesPage() {
  return (
    <>
      <CasesHero />
      <CaseFilter />
      <CaseShowcase />
      <Testimonials />
      <ClientLogos />
    </>
  )
}

