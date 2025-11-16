import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { CustomerSegmentation } from "@/components/solutions/customer-segmentation"
import { ComparisonTable } from "@/components/solutions/comparison-table"
import { ROICalculator } from "@/components/solutions/roi-calculator"
import { ImplementationPath } from "@/components/solutions/implementation-path"

export const metadata = {
  title: "解决方案",
  description: "针对不同规模装企提供定制化方案，推动销售转化",
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <CustomerSegmentation />
      <ComparisonTable />
      <ROICalculator />
      <ImplementationPath />
    </>
  )
}

