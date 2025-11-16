"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const filters = {
  scale: ["全部", "成长型", "规模型", "品牌型"],
  region: ["全部", "华东", "华南", "华北", "西南"],
  painPoint: ["全部", "工地管理", "工期管理", "营销获客"],
}

export function CaseFilter() {
  const [selectedScale, setSelectedScale] = useState("全部")
  const [selectedRegion, setSelectedRegion] = useState("全部")
  const [selectedPainPoint, setSelectedPainPoint] = useState("全部")

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 self-center">企业规模：</span>
            {filters.scale.map((item) => (
              <Button
                key={item}
                variant={selectedScale === item ? "brand" : "outline"}
                size="sm"
                onClick={() => setSelectedScale(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 self-center">地区：</span>
            {filters.region.map((item) => (
              <Button
                key={item}
                variant={selectedRegion === item ? "brand" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

