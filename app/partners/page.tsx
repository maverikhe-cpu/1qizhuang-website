import { PartnersHero } from "@/components/partners/partners-hero"
import { TechFoundation } from "@/components/partners/tech-foundation"
import { EcosystemDiagram } from "@/components/partners/ecosystem-diagram"
import { AlipayPartnership } from "@/components/partners/alipay-partnership"

export const metadata = {
  title: "合作伙伴",
  description: "强化技术实力与生态优势",
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <TechFoundation />
      <EcosystemDiagram />
      <AlipayPartnership />
    </>
  )
}

