import { ServiceHero } from "@/components/service/service-hero"
import { ServiceArchitecture } from "@/components/service/service-architecture"
import { ServiceProcess } from "@/components/service/service-process"
import { KnowledgeBase } from "@/components/service/knowledge-base"
import { ContactService } from "@/components/service/contact-service"

export const metadata = {
  title: "客户成功服务",
  description: "打消购买顾虑，强调售后支持",
}

export default function ServicePage() {
  return (
    <>
      <ServiceHero />
      <ServiceArchitecture />
      <ServiceProcess />
      <KnowledgeBase />
      <ContactService />
    </>
  )
}

